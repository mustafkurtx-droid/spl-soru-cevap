/**
 * ============================================================================
 * SPL Soru-Cevap Uygulaması - SPA Yönlendirme ve Mantık (app.js)
 * ============================================================================
 */

(function () {
  'use strict';

  // --- UYGULAMA DURUMU (APPLICATION STATE) ---
  const state = {
    currentView: 'course-view',     // 'course-view', 'test-view', 'quiz-view', 'results-view'
    selectedCourseIndex: 0,
    selectedTestId: 1,
    currentQuestionIndex: 0,
    userAnswers: {},                // { questionId: 'A' }
    examMode: 'instant',            // 'instant' (Anında Cevap) veya 'exam' (Sınav Modu)
    viewType: 'single',             // 'single' (Tekli Soru) veya 'list' (Liste)
    timerSeconds: 0,
    timerInterval: null,
    bookmarks: [],                  // [ questionId, ... ]
    testCompleted: false,
    resultsFilter: 'all',           // 'all', 'wrong', 'empty'
    storageKey: 'spl_quiz_progress_v1'
  };

  // --- LOCALSTORAGE YÖNETİMİ ---
  function getProgressData() {
    try {
      const data = localStorage.getItem(state.storageKey);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      console.error('LocalStorage okuma hatası:', e);
      return {};
    }
  }

  function saveProgressData(courseName, testId, resultObj) {
    try {
      const progress = getProgressData();
      if (!progress[courseName]) {
        progress[courseName] = {};
      }
      progress[courseName][testId] = resultObj;
      localStorage.setItem(state.storageKey, JSON.stringify(progress));
      updateGlobalHeaderStats();
    } catch (e) {
      console.error('LocalStorage kaydetme hatası:', e);
    }
  }

  function resetAllProgress() {
    if (confirm('Tüm çözülen test geçmişini ve istatistikleri sıfırlamak istediğinize emin misiniz?')) {
      localStorage.removeItem(state.storageKey);
      updateGlobalHeaderStats();
      if (state.currentView === 'course-view') renderCourseView();
      if (state.currentView === 'test-view') renderTestView(state.selectedCourseIndex);
      alert('Tüm ilerlemeniz sıfırlandı.');
    }
  }

  function updateGlobalHeaderStats() {
    const progress = getProgressData();
    let totalSolved = 0;
    Object.keys(progress).forEach(course => {
      Object.keys(progress[course]).forEach(testId => {
        const testRes = progress[course][testId];
        if (testRes && testRes.totalQuestions) {
          totalSolved += (testRes.correctCount + testRes.wrongCount);
        }
      });
    });
    const solvedEl = document.getElementById('global-total-solved');
    if (solvedEl) solvedEl.textContent = totalSolved;
  }

  // --- SPA VIEW REUTER (SAYFA GEÇİŞLERİ) ---
  function switchView(viewId) {
    state.currentView = viewId;
    document.querySelectorAll('.spa-view').forEach(el => {
      el.classList.add('hidden');
    });

    const targetEl = document.getElementById(viewId);
    if (targetEl) {
      targetEl.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // --- DERSE VE KARTA AİT YARDIMCI METOTLAR ---
  function getCourseData(index) {
    if (window.splVeritabani && window.splVeritabani[index]) {
      return window.splVeritabani[index];
    }
    return null;
  }

  function getTestData(courseIndex, testId) {
    const course = getCourseData(courseIndex);
    if (course && course.testler) {
      return course.testler.find(t => t.testId === testId);
    }
    return null;
  }

    function updateLevelFilterUI() {
    document.querySelectorAll('.level-filter-btn').forEach(btn => {
      const lvl = btn.getAttribute('data-level');
      if (lvl === 'all') {
        if (state.selectedLevels.length === 0) {
          btn.className = 'level-filter-btn active px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-md bg-sky-500 text-white border border-sky-500 cursor-pointer';
        } else {
          btn.className = 'level-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-sky-500 cursor-pointer';
        }
      } else {
        if (state.selectedLevels.includes(lvl)) {
          btn.className = 'level-filter-btn active px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-md bg-sky-500 text-white border border-sky-500 flex items-center gap-1.5 cursor-pointer scale-105';
        } else {
          btn.className = 'level-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-sky-500 flex items-center gap-1.5 cursor-pointer';
        }
      }
    });
  }

  // --- 1. DERS SEÇİM EKRANI RENDER ---
    function renderCourseView() {
    switchView('course-view');
    const container = document.getElementById('course-cards-container');
    const searchInput = document.getElementById('course-search-input');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    if (!container || !window.splVeritabani) return;

    const progress = getProgressData();
    container.innerHTML = '';

    const filteredCourses = window.splVeritabani.filter(c => {
      const matchesSearch = !query || c.dersAdi.toLowerCase().includes(query) || 
                            (c.aciklama && c.aciklama.toLowerCase().includes(query)) ||
                            (c.kategori && c.kategori.toLowerCase().includes(query));
      
      let matchesLevel = true;
      if (state.selectedLevels && state.selectedLevels.length > 0) {
        matchesLevel = state.selectedLevels.some(lvl => {
          if (c.duzeyler && c.duzeyler.includes(lvl)) return true;
          const cat = (c.kategori || '').toLowerCase();
          if (lvl === 'duzey1' && (cat.includes('düzey 1') || cat.includes('duzey 1'))) return true;
          if (lvl === 'duzey2' && (cat.includes('düzey 2') || cat.includes('duzey 2'))) return true;
          if (lvl === 'duzey3' && (cat.includes('düzey 3') || cat.includes('duzey 3'))) return true;
          if (lvl === 'turev' && cat.includes('türev')) return true;
          if (lvl === 'gayrimenkul' && cat.includes('gayrimenkul')) return true;
          return false;
        });
      }
      return matchesSearch && matchesLevel;
    });

    if (filteredCourses.length === 0) {
      container.innerHTML = `
        <div class="col-span-2 text-center py-12 text-slate-500 dark:text-slate-400">
          <i class="fa-solid fa-folder-open text-4xl mb-3 block opacity-50"></i>
          Seçilen arama veya lisans kriterine uygun ders bulunamadı.
        </div>
      `;
      return;
    }

    filteredCourses.forEach((course) => {
      const originalIndex = window.splVeritabani.indexOf(course);
      const courseProgress = progress[course.dersAdi] || {};
      const completedTestCount = Object.keys(courseProgress).length;
      const totalTestCount = course.testler ? course.testler.length : 0;

      const levelBadgesHtml = (course.duzeyler || []).map(l => {
        if (l === 'duzey1') return '<span class="px-2 py-0.5 text-[11px] font-bold rounded-md bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-300/40">Düzey 1</span>';
        if (l === 'duzey2') return '<span class="px-2 py-0.5 text-[11px] font-bold rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300/40">Düzey 2</span>';
        if (l === 'duzey3') return '<span class="px-2 py-0.5 text-[11px] font-bold rounded-md bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-300/40">Düzey 3</span>';
        if (l === 'turev') return '<span class="px-2 py-0.5 text-[11px] font-bold rounded-md bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-300/40">Türev</span>';
        if (l === 'gayrimenkul') return '<span class="px-2 py-0.5 text-[11px] font-bold rounded-md bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-300/40">Gayrimenkul</span>';
        return '';
      }).join(' ');

      const card = document.createElement('div');
      card.className = 'bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6 shadow-sm card-hover-effect cursor-pointer flex flex-col justify-between transition-all';
      card.onclick = () => {
        state.selectedCourseIndex = originalIndex;
        renderTestView(originalIndex);
      };

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div class="flex items-center gap-1.5 flex-wrap">
              ${levelBadgesHtml || `<span class="px-3 py-1 text-xs font-semibold rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">${course.kategori || 'SPL Lisans'}</span>`}
            </div>
            <span class="text-xs font-medium text-slate-400">
              <i class="fa-solid fa-layer-group text-sky-500 mr-1"></i> ${totalTestCount} Paket Test
            </span>
          </div>
          <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
            ${course.dersAdi}
          </h4>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
            ${course.aciklama || 'Bu ders için hazırlanan kapsamlı soru paketleri.'}
          </p>
        </div>

        <div class="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
          <div class="text-xs text-slate-500 dark:text-slate-400">
            Tamamlanan: <strong class="text-slate-900 dark:text-white">${completedTestCount}/${totalTestCount}</strong>
          </div>
          <span class="inline-flex items-center text-xs font-bold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition">
            Testleri Gör <i class="fa-solid fa-arrow-right ml-1"></i>
          </span>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // --- 2. TEST SEÇİM EKRANI RENDER ---
  function renderTestView(courseIndex) {
    switchView('test-view');
    const course = getCourseData(courseIndex);
    if (!course) return;

    // Header & Breadcrumb Güncelle
    document.getElementById('breadcrumb-course-title').textContent = course.dersAdi;
    document.getElementById('selected-course-title').textContent = course.dersAdi;
    document.getElementById('selected-course-desc').textContent = course.aciklama || '';
    document.getElementById('selected-course-badge').textContent = course.kategori || 'SPL Lisans';
    document.getElementById('course-total-tests').textContent = course.testler.length;

    const progress = getProgressData();
    const courseProgress = progress[course.dersAdi] || {};
    const solvedCount = Object.keys(courseProgress).length;
    const rate = course.testler.length ? Math.round((solvedCount / course.testler.length) * 100) : 0;
    document.getElementById('course-completion-rate').textContent = `%${rate}`;

    // Test Listesini Oluştur
    const container = document.getElementById('test-cards-container');
    container.innerHTML = '';

    course.testler.forEach((test) => {
      const testResult = courseProgress[test.testId];
      const isCompleted = !!testResult;

      const card = document.createElement('div');
      card.className = 'bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-5 shadow-sm card-hover-effect cursor-pointer flex flex-col justify-between';
      card.onclick = () => {
        startQuiz(courseIndex, test.testId);
      };

      let badgeHtml = '';
      if (isCompleted) {
        badgeHtml = `<span class="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
          <i class="fa-solid fa-check"></i> Skoru: %${testResult.percentage}
        </span>`;
      } else {
        badgeHtml = `<span class="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300">
          Başlanmadı
        </span>`;
      }

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold text-sky-500 uppercase tracking-wider">SPL Paket</span>
            ${badgeHtml}
          </div>
          <h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">
            ${test.testAdi || `Test ${test.testId}`}
          </h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 mb-4">
            Toplam ${test.sorular.length} Soru
          </p>
        </div>

        <div class="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
          <span class="text-xs text-slate-400">20 Dakika Süre</span>
          <span class="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold shadow-sm transition">
            Testi Çöz
          </span>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // --- 3. TEST ÇÖZME BAŞLATMA & RENDER ---
  function startQuiz(courseIndex, testId) {
    state.selectedCourseIndex = courseIndex;
    state.selectedTestId = testId;
    state.currentQuestionIndex = 0;
    state.userAnswers = {};
    state.testCompleted = false;
    state.timerSeconds = 0;

    startTimer();
    switchView('quiz-view');

    const course = getCourseData(courseIndex);
    const test = getTestData(courseIndex, testId);

    document.getElementById('quiz-header-title').textContent = test.testAdi || `Test ${testId}`;
    document.getElementById('quiz-header-subtitle').textContent = course.dersAdi;
    document.getElementById('total-q-num').textContent = test.sorular.length;

    renderQuizView();
  }

  function startTimer() {
    clearInterval(state.timerInterval);
    state.timerSeconds = 0;
    const timerEl = document.getElementById('quiz-timer-display');
    
    state.timerInterval = setInterval(() => {
      state.timerSeconds++;
      const mins = Math.floor(state.timerSeconds / 60).toString().padStart(2, '0');
      const secs = (state.timerSeconds % 60).toString().padStart(2, '0');
      if (timerEl) timerEl.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  function stopTimer() {
    clearInterval(state.timerInterval);
  }

  function renderQuizView() {
    const test = getTestData(state.selectedCourseIndex, state.selectedTestId);
    if (!test || !test.sorular || test.sorular.length === 0) return;

    // Palette (Soru Haritası) Yenile
    renderPaletteGrid(test.sorular);

    if (state.viewType === 'single') {
      document.getElementById('single-question-container').classList.remove('hidden');
      document.getElementById('list-questions-container').classList.add('hidden');
      renderSingleQuestion(test.sorular[state.currentQuestionIndex], test.sorular.length);
    } else {
      document.getElementById('single-question-container').classList.add('hidden');
      document.getElementById('list-questions-container').classList.remove('hidden');
      renderListQuestions(test.sorular);
    }
  }

  // TEKLİ SORU RENDER
  function renderSingleQuestion(qData, totalQuestions) {
    document.getElementById('current-q-num').textContent = state.currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = `${qData.id}. ${qData.soruMetni}`;

    // Bookmark Durumu
    const bookmarkBtn = document.getElementById('bookmark-btn');
    const isBookmarked = state.bookmarks.includes(qData.id);
    bookmarkBtn.innerHTML = isBookmarked ? '<i class="fa-solid fa-bookmark text-amber-500"></i>' : '<i class="fa-regular fa-bookmark"></i>';

    // Şıklar Container
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    const selectedOption = state.userAnswers[qData.id];

    Object.keys(qData.secenekler).forEach(optKey => {
      const optText = qData.secenekler[optKey];
      const btn = document.createElement('button');
      btn.className = 'w-full text-left p-3.5 sm:p-4 rounded-xl option-btn flex items-center space-x-3 text-sm sm:text-base';
      
      const isSelected = selectedOption === optKey;
      if (isSelected) btn.classList.add('selected');

      // Anında Mod İncelemesi
      if (state.examMode === 'instant' && selectedOption) {
        btn.disabled = true;
        if (optKey === qData.dogruCevap) {
          btn.classList.add('correct');
        } else if (isSelected && optKey !== qData.dogruCevap) {
          btn.classList.add('incorrect');
        }
      }

      btn.onclick = () => {
        selectOption(qData.id, optKey);
      };

      btn.innerHTML = `
        <span class="option-letter flex-shrink-0">${optKey}</span>
        <span class="flex-grow">${optText}</span>
      `;
      container.appendChild(btn);
    });

    // Çözüm Kutusu (Anında Modunda Seçim Yapılmışsa Göster)
    const solutionBox = document.getElementById('solution-box');
    const solutionText = document.getElementById('solution-text');
    if (state.examMode === 'instant' && selectedOption && qData.cozum) {
      solutionBox.classList.remove('hidden');
      solutionText.textContent = qData.cozum;
    } else {
      solutionBox.classList.add('hidden');
    }

    // Önceki / Sonraki Buton Kontrolleri
    const prevBtn = document.getElementById('prev-question-btn');
    const nextBtn = document.getElementById('next-question-btn');

    prevBtn.disabled = state.currentQuestionIndex === 0;
    nextBtn.disabled = state.currentQuestionIndex === totalQuestions - 1;
  }

  // LİSTE GÖRÜNÜMÜ RENDER
  function renderListQuestions(questions) {
    const listContainer = document.getElementById('list-questions-container');
    listContainer.innerHTML = '';

    questions.forEach((qData, qIndex) => {
      const qBox = document.createElement('div');
      qBox.className = 'bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 sm:p-6 shadow-sm';
      
      const selectedOption = state.userAnswers[qData.id];

      let optionsHtml = '';
      Object.keys(qData.secenekler).forEach(optKey => {
        const optText = qData.secenekler[optKey];
        let stateClass = '';
        if (selectedOption === optKey) stateClass += ' selected';
        if (state.examMode === 'instant' && selectedOption) {
          if (optKey === qData.dogruCevap) stateClass += ' correct';
          else if (selectedOption === optKey && optKey !== qData.dogruCevap) stateClass += ' incorrect';
        }

        optionsHtml += `
          <button data-qid="${qData.id}" data-opt="${optKey}" class="w-full text-left p-3 rounded-xl option-btn ${stateClass} flex items-center space-x-3 text-sm mb-2">
            <span class="option-letter">${optKey}</span>
            <span>${optText}</span>
          </button>
        `;
      });

      let solutionHtml = '';
      if (state.examMode === 'instant' && selectedOption && qData.cozum) {
        solutionHtml = `
          <div class="mt-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-emerald-800 dark:text-emerald-200 text-xs">
            <strong>Çözüm:</strong> ${qData.cozum}
          </div>
        `;
      }

      qBox.innerHTML = `
        <div class="font-bold text-slate-900 dark:text-white mb-3 text-base">
          Soru ${qIndex + 1}: ${qData.soruMetni}
        </div>
        <div class="space-y-2">
          ${optionsHtml}
        </div>
        ${solutionHtml}
      `;

      listContainer.appendChild(qBox);
    });

    // Liste görünümündeki tıklamalar
    listContainer.querySelectorAll('button[data-qid]').forEach(btn => {
      btn.onclick = (e) => {
        const qid = parseInt(btn.getAttribute('data-qid'));
        const opt = btn.getAttribute('data-opt');
        selectOption(qid, opt);
      };
    });
  }

  function selectOption(questionId, optionKey) {
    if (state.testCompleted) return;
    state.userAnswers[questionId] = optionKey;
    renderQuizView();
  }

  // PALETTE (SORU HARİTASI) RENDER
  function renderPaletteGrid(questions) {
    const grid = document.getElementById('question-palette-grid');
    if (!grid) return;
    grid.innerHTML = '';

    let answeredCount = 0;

    questions.forEach((q, idx) => {
      const isAnswered = !!state.userAnswers[q.id];
      if (isAnswered) answeredCount++;

      const isCurrent = state.viewType === 'single' && idx === state.currentQuestionIndex;

      const btn = document.createElement('button');
      btn.className = 'palette-grid-btn';
      btn.textContent = idx + 1;

      if (isAnswered) btn.classList.add('answered');
      if (isCurrent) btn.classList.add('current');

      btn.onclick = () => {
        state.currentQuestionIndex = idx;
        if (state.viewType !== 'single') {
          state.viewType = 'single';
          updateViewButtonsState();
        }
        renderQuizView();
      };

      grid.appendChild(btn);
    });

    const solvedCountEl = document.getElementById('palette-solved-count');
    if (solvedCountEl) {
      solvedCountEl.textContent = `${answeredCount}/${questions.length} Çözüldü`;
    }
  }

  // --- 4. TESTİ BİTİR VE SONUÇLARI DEĞERLENDİR ---
  function evaluateAndFinishTest() {
    const test = getTestData(state.selectedCourseIndex, state.selectedTestId);
    if (!test) return;

    stopTimer();
    state.testCompleted = true;

    let correctCount = 0;
    let wrongCount = 0;
    let emptyCount = 0;

    test.sorular.forEach(q => {
      const userAns = state.userAnswers[q.id];
      if (!userAns) {
        emptyCount++;
      } else if (userAns === q.dogruCevap) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    const totalQuestions = test.sorular.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    const resultObj = {
      correctCount,
      wrongCount,
      emptyCount,
      totalQuestions,
      percentage,
      durationSeconds: state.timerSeconds,
      date: new Date().toISOString()
    };

    const course = getCourseData(state.selectedCourseIndex);
    saveProgressData(course.dersAdi, test.testId, resultObj);

    renderResultsView(test, resultObj);
  }

  // --- 5. SONUÇ EKRANI RENDER ---
  function renderResultsView(test, resultObj) {
    switchView('results-view');

    document.getElementById('result-test-name').textContent = test.testAdi || `Test ${test.testId}`;
    document.getElementById('res-correct-count').textContent = resultObj.correctCount;
    document.getElementById('res-wrong-count').textContent = resultObj.wrongCount;
    document.getElementById('res-empty-count').textContent = resultObj.emptyCount;
    document.getElementById('res-percentage').textContent = `%${resultObj.percentage}`;

    renderResultsReviewList(test.sorular);
  }

  function renderResultsReviewList(questions) {
    const container = document.getElementById('results-review-container');
    container.innerHTML = '';

    const filter = state.resultsFilter;

    questions.forEach((q, idx) => {
      const userAns = state.userAnswers[q.id];
      const isCorrect = userAns === q.dogruCevap;
      const isEmpty = !userAns;

      if (filter === 'wrong' && (isCorrect || isEmpty)) return;
      if (filter === 'empty' && !isEmpty) return;

      const qCard = document.createElement('div');
      qCard.className = 'bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 sm:p-6 shadow-sm';

      let statusBadge = '';
      if (isEmpty) {
        statusBadge = `<span class="px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Boş Bırakıldı</span>`;
      } else if (isCorrect) {
        statusBadge = `<span class="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-check mr-1"></i> Doğru</span>`;
      } else {
        statusBadge = `<span class="px-2.5 py-1 rounded-md text-xs font-bold bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400"><i class="fa-solid fa-xmark mr-1"></i> Yanlış</span>`;
      }

      let optionsListHtml = '';
      Object.keys(q.secenekler).forEach(optKey => {
        const text = q.secenekler[optKey];
        let optStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300';
        
        if (optKey === q.dogruCevap) {
          optStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 font-semibold';
        } else if (userAns === optKey && optKey !== q.dogruCevap) {
          optStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 font-semibold';
        }

        optionsListHtml += `
          <div class="p-3 rounded-xl border ${optStyle} flex items-center space-x-3 text-sm">
            <span class="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-xs">${optKey}</span>
            <span>${text}</span>
          </div>
        `;
      });

      qCard.innerHTML = `
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-slate-400">Soru ${idx + 1}</span>
          ${statusBadge}
        </div>
        <h4 class="text-base font-bold text-slate-900 dark:text-white mb-4">
          ${q.soruMetni}
        </h4>
        <div class="space-y-2 mb-4">
          ${optionsListHtml}
        </div>
        ${q.cozum ? `
          <div class="p-3.5 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 text-sky-900 dark:text-sky-200 text-xs">
            <strong class="block mb-1 text-sky-700 dark:text-sky-300"><i class="fa-solid fa-lightbulb"></i> Çözüm Açıklaması:</strong>
            ${q.cozum}
          </div>
        ` : ''}
      `;

      container.appendChild(qCard);
    });
  }

  // --- VIEW MODES TOGGLE UTILS ---
  function updateModeButtonsState() {
    const instantBtn = document.getElementById('mode-instant-btn');
    const examBtn = document.getElementById('mode-exam-btn');

    if (state.examMode === 'instant') {
      instantBtn.className = 'px-3 py-1.5 rounded-lg font-semibold transition bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm';
      examBtn.className = 'px-3 py-1.5 rounded-lg font-semibold transition text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white';
    } else {
      examBtn.className = 'px-3 py-1.5 rounded-lg font-semibold transition bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm';
      instantBtn.className = 'px-3 py-1.5 rounded-lg font-semibold transition text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white';
    }
  }

  function updateViewButtonsState() {
    const singleBtn = document.getElementById('view-single-btn');
    const listBtn = document.getElementById('view-list-btn');

    if (state.viewType === 'single') {
      singleBtn.className = 'px-3 py-1.5 rounded-lg font-semibold transition bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm';
      listBtn.className = 'px-3 py-1.5 rounded-lg font-semibold transition text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white';
    } else {
      listBtn.className = 'px-3 py-1.5 rounded-lg font-semibold transition bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm';
      singleBtn.className = 'px-3 py-1.5 rounded-lg font-semibold transition text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white';
    }
  }

  // --- EVENT LISTENERS (OLAY DİNLEYİCİLERİ) ---
  function initEvents() {
    // Brand Logo -> Home
    document.getElementById('brand-logo-btn').onclick = () => renderCourseView();

    // Back to Courses
    document.getElementById('back-to-courses-btn').onclick = () => renderCourseView();

    // Back to Tests
    document.getElementById('back-to-tests-btn').onclick = () => {
      stopTimer();
      renderTestView(state.selectedCourseIndex);
    };
    document.getElementById('res-back-to-tests-btn').onclick = () => renderTestView(state.selectedCourseIndex);

        // Level Multi-Select Filter Buttons (Event Delegation)
    const levelFilterBar = document.getElementById('level-filter-bar');
    if (levelFilterBar) {
      levelFilterBar.onclick = (e) => {
        const btn = e.target.closest('.level-filter-btn');
        if (!btn) return;
        
        const lvl = btn.getAttribute('data-level');
        if (lvl === 'all') {
          state.selectedLevels = [];
        } else {
          const idx = state.selectedLevels.indexOf(lvl);
          if (idx > -1) {
            state.selectedLevels.splice(idx, 1);
          } else {
            state.selectedLevels.push(lvl);
          }
        }
        updateLevelFilterUI();
        renderCourseView();
      };
    })();
