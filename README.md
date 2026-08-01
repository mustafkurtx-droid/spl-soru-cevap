# 📈 SPL Soru-Cevap Portalı (Client-Side SPA)

Sermaye Piyasası Lisanslama (SPL) Düzey 1, Düzey 2, Düzey 3, Gayrimenkul Değerleme ve Türev Araçlar lisanslama sınavlarına hazırlık için tamamen istemci taraflı (client-side) çalışan, modern, duyarlı (responsive) ve GitHub Pages ile tam uyumlu Single Page Application (SPA) soru platformu.

---

## 🌟 Öne Çıkan Özellikler

- 🚀 **%100 Client-Side & GitHub Pages Uyumlu:** Node.js, sunucu veya veritabanı kurulumu gerektirmez. Statik HTML/CSS/JS dosyaları ile çalışır.
- 🎨 **Finansal Tema & Karanlık/Aydınlık Mod:** Koyu lacivert, zümrüt yeşili ve modern slate tonlarıyla tasarlanmış göz yormayan arayüz.
- ⚡ **SPA Yönlendirme (State Management):** Sayfa yenilenmeden Ders Seçimi $\rightarrow$ Test Seçimi $\rightarrow$ Test Çözme $\rightarrow$ Sonuç Analizi geçişi.
- 💡 **Çift Çözüm Modu:**
  1. **Anında Geri Bildirim Modu:** Şık seçildiği an doğru/yanlış rengi ve çözüm açıklaması gösterilir.
  2. **Sınav Modu:** Şıklar işaretlenir, test bitiminde detaylı sonuç karnesi ve inceleme sunulur.
- 📱 **Tekli & Liste Görünümü:** Soruları ister tek tek "Önceki/Sonraki" butonlarıyla, ister tüm liste halinde çözebilirsiniz.
- 🗺️ **Soru Haritası (Palette):** Test esnasında boş bırakılan ve çözülen sorulara hızlı erişim.
- ⏱️ **Süre Takibi & Favorileme (Bookmark):** Geçen süreyi gösterme ve soruları işaretleme.
- 💾 **İlerleme Kaydı (LocalStorage):** Çözülen test skoru, yüzde ve genel istatistikler tarayıcıda saklanır.

---

## 📂 Proje Dosya Yapısı

```
soru cevap/
├── index.html        # SPA ana HTML taşıyıcısı, Tailwind & FontAwesome CDN
├── css/
│   └── styles.css    # Tema değişkenleri, animasyonlar ve özel UI stilleri
├── js/
│   ├── questions.js  # MODÜLER SPL SORU VERİTABANI (JSON yapısı)
│   └── app.js        # SPA Router, Quiz Engine, Timer ve LocalStorage yönetimi
└── README.md         # Kullanım ve GitHub Pages yayım kılavuzu
```

---

## 🛠️ GitHub Pages Üzerinde Yayınlama

1. Proje dosyalarını GitHub üzerinde yeni bir depoya (repository) yükleyin (Örn: `spl-soru-bankasi`).
2. Depo ayarlarından **Settings $\rightarrow$ Pages** bölümüne gidin.
3. **Source** kısmından `Deploy from a branch` seçin ve `main` (veya `master`) dalını seçip kaydedin.
4. Birkaç dakika içinde siteniz `https://kullaniciadi.github.io/spl-soru-bankasi/` adresinde canlıya alınacaktır.

---

## 📝 PDF'lerden Çıkarılan Soruları Entegre Etme

Yeni sorular eklemek için tek yapmanız gereken `js/questions.js` dosyasındaki `splVeritabani` dizisine sorularınızı aşağıdaki şemaya uygun eklemektir:

```javascript
[
  {
    "dersAdi": "Sermaye Piyasası Mevzuatı",
    "kategori": "Lisanslama Düzey 1 - 2 - 3",
    "aciklama": "6362 sayılı Sermaye Piyasası Kanunu...",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: Kurumlar ve Genel Esaslar",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "Aşağıdakilerden hangisi sermaye piyasası kurumlarından biri değildir?",
            "secenekler": {
              "A": "Aracı Kurumlar",
              "B": "Portföy Yönetim Şirketleri",
              "C": "Kuyumcular ve Döviz Büroları",
              "D": "Yatırım Ortaklıkları",
              "E": "Borsa İstanbul"
            },
            "dogruCevap": "C",
            "cozum": "Kuyumcular ve döviz büroları sermaye piyasası kurumu mevzuatına tabi değildir."
          }
        ]
      }
    ]
  }
]
```

### 💡 Yapay Zeka (ChatGPT / Claude / Gemini) ile PDF'ten JSON Oluşturma İpucu:
PDF formatındaki sorularınızı kopyalayıp yapay zekaya şu komutu verebilirsiniz:

> *"Aşağıdaki PDF soru metinlerini tam olarak şu JSON formatına dönüştür: id (sayı), soruMetni (string), secenekler (A, B, C, D, E nesnesi), dogruCevap ("A", "B", "C", "D", veya "E"), cozum (çözüm açıklaması string)."*

Üretilen JSON objesini `js/questions.js` dosyasındaki ilgili dersin `sorular` dizisine yapıştırabilirsiniz.
