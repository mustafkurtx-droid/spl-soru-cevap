/**
 * ============================================================================
 * SPL (Sermaye Piyasası Lisanslama) SORU VERİTABANI (questions.js)
 * ============================================================================
 * Resmi SPK Modül Kodları & Sınav Konuları Tam Liste:
 * 1001: Dar Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları (Düzey 1)
 * 1002: Geniş Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları (Düzey 2, 3, Türev)
 * 1003: Sermaye Piyasası Araçları 1 (Düzey 1, 2, 3, Türev)
 * 1004: Sermaye Piyasası Araçları 2 (Düzey 2, 3, Türev)
 * 1005: Yatırım Kuruluşları (Düzey 1, 2, 3, Türev)
 * 1006: Finansal Piyasalar (Düzey 2, 3, Türev)
 * 1007: Finansal Yönetim ve Mali Analiz (Düzey 2, 3)
 * 1008: Genel Ekonomi (Düzey 3)
 * 1009: Temel Finans Matematiği ve Değerleme Yöntemleri (Düzey 3, Türev)
 * 1010: Ticaret Hukuku (Düzey 2, 3)
 * 1011: Türev Araçlar, Piyasalar ve Risk Yönetimi (Türev Araçlar)
 * 1012: Takas, Saklama ve Operasyon İşlemleri (Düzey 1, 2, 3)
 * 1013: Kurumlarda ve Sermaye Piyasasında Vergilendirme (Düzey 3, Türev)
 * 1016: Muhasebe ve Finansal Raporlama (Düzey 2, 3)
 * ============================================================================
 */

const splVeritabani = [
  {
    "code": "1001",
    "dersAdi": "1001 - Dar Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları",
    "kategori": "SPK Modül Kodu: 1001 | SPL Düzey 1 Lisansı",
    "duzeyler": [
      "duzey1"
    ],
    "aciklama": "1001 - Dar Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları - Resmi SPL Müfredat Temel Testi (1 Test, 1 Soru)",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: 1001 - Dar Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları Temel Değerlendirme Testi",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "1001 - Dar Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları müfredatına ilişkin temel mevzuat ve uygulama değerlendirmesi.",
            "secenekler": {
              "A": "Sermaye Piyasası Kanunu ve İlgili Mevzuat Hükümleri",
              "B": "Borsa İstanbul İşleyiş Kuralları",
              "C": "Takasbank ve MKK Saklama Düzenlemeleri",
              "D": "Ticaret Kanunu Genel Hükümleri",
              "E": "Yönetmelik ve Genelge Esasları"
            },
            "dogruCevap": "A",
            "cozum": "Bu soru ilgili dersin resmi müfredat kapsamını temel almaktadır."
          }
        ]
      }
    ]
  },
  {
    "code": "1002",
    "dersAdi": "1002 - Geniş Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları",
    "kategori": "SPK Modül Kodu: 1002 | SPL Düzey 2, Düzey 3, Türev Araçlar Lisansı",
    "duzeyler": [
      "duzey2",
      "duzey3",
      "turev"
    ],
    "aciklama": "Geniş Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları (1002) - Müfredat Konu Başlıklarına Göre Sıralı Resmi 10 Test (200 Tamamen Özgün ve Benzersiz Soru)",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: 1.1. Sermaye Piyasası Kanunu (Temel Hükümler, Şirketler, İhraçlar ve İzahname)",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "6362 sayılı Sermaye Piyasası Kanunu uyarınca, aşağıdakilerden hangisi Kanunun temel amaçları arasında YER ALMAZ?",
            "secenekler": {
              "A": "Sermaye piyasasının güvenli, şeffaf, etkin, istikrarlı, adil ve rekabetçi bir ortamda işlemesini sağlamak",
              "B": "Sermaye piyasasının gelişmesini sağlamak",
              "C": "Yatırımcıların hak ve menfaatlerini korumak",
              "D": "Piyasada etkin denetim ve şeffaflığı tesis etmek",
              "E": "Halka açık şirketlerin ticari kâr marjlarını ve satış fiyatlarını doğrudan belirlemek"
            },
            "dogruCevap": "E",
            "cozum": "SPKn m. 1 uyarınca Kanunun amacı piyasaların güvenli, şeffaf ve adil işlemesini sağlamak ve yatırımcıyı korumaktır; şirketlerin ticari kâr marjlarını veya fiyatlarını belirlemek SPK'nın görevi değildir."
          },
          {
            "id": 2,
            "soruMetni": "6362 sayılı SPKn uyarınca, sermaye piyasası araçlarının halka arz edilebilmesi için onaylanması zorunlu olan belge aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Bağımsız Denetim Sözleşmesi",
              "B": "Faaliyet Raporu",
              "C": "Sirküler Duyurusu",
              "D": "İzahname",
              "E": "Esas Sözleşme"
            },
            "dogruCevap": "D",
            "cozum": "SPKn m. 4 uyarınca sermaye piyasası araçlarının halka arzı veya borsada işlem görmesi için SPK tarafından izahnamenin onaylanması zorunludur."
          },
          {
            "id": 3,
            "soruMetni": "SPKn uyarınca onaylanan izahnamenin yayımlandığı tarihten itibaren geçerlilik süresi azami kaç aydır?",
            "secenekler": {
              "A": "36 Ay",
              "B": "6 Ay",
              "C": "3 Ay",
              "D": "24 Ay",
              "E": "12 Ay"
            },
            "dogruCevap": "E",
            "cozum": "SPKn m. 5 uyarınca onaylı bir izahname yayımlandığı tarihten itibaren 12 ay boyunca yapılacak ihraçlar için geçerlidir."
          },
          {
            "id": 4,
            "soruMetni": "6362 sayılı Kanun uyarınca, kaydileştirilen sermaye piyasası araçlarına ilişkin hakların takibi ve merkezi saklanması hangi kurum nezdinde yürütülür?",
            "secenekler": {
              "A": "Sermaye Piyasası Lisanslama Sicil ve Eğitim Kuruluşu (SPL)",
              "B": "Borsa İstanbul A.Ş.",
              "C": "İstanbul Takas ve Saklama Bankası A.Ş. (Takasbank)",
              "D": "Türkiye Sermaye Piyasaları Birliği (TSPB)",
              "E": "Merkezi Kayıt Kuruluşu A.Ş. (MKK)"
            },
            "dogruCevap": "E",
            "cozum": "SPKn m. 13 uyarınca sermaye piyasası araçlarının kaydileştirilmesi ve hak sahipliği takibi MKK nezdinde hak sahipleri bazında yürütülür."
          },
          {
            "id": 5,
            "soruMetni": "Halka açık anonim ortaklıklarda kayıtlı sermaye tavanının geçerlilik süresi SPK düzenlemelerine göre en fazla kaç yıldır?",
            "secenekler": {
              "A": "1 Yıl",
              "B": "10 Yıl",
              "C": "5 Yıl",
              "D": "3 Yıl",
              "E": "7 Yıl"
            },
            "dogruCevap": "C",
            "cozum": "SPKn m. 18 uyarınca halka açık şirketlerde kayıtlı sermaye tavanı izni en fazla 5 yıl için verilir. Bu süre sonunda tavanın uzatılması için genel kurul kararı gerekir."
          },
          {
            "id": 6,
            "soruMetni": "Halka açık anonim ortaklıklarda yönetim kurulu kararıyla kâr payı avansı dağıtılabilmesi için esas sözleşmede hüküm bulunması ve hangi organdan yetki alınması şarttır?",
            "secenekler": {
              "A": "Borsa Yönetim Kurulu",
              "B": "Genel Kurul",
              "C": "Bağımsız Denetçi",
              "D": "Denetim Komitesi",
              "E": "SPK Başkanlığı"
            },
            "dogruCevap": "B",
            "cozum": "SPKn m. 20 uyarınca kâr payı avansı dağıtılabilmesi için esas sözleşmede hüküm bulunması ve ilgili yıl ile sınırlı olmak üzere Genel Kurul tarafından yönetim kuruluna yetki verilmesi zorunludur."
          },
          {
            "id": 7,
            "soruMetni": "SPKn m. 21 uyarınca örtülü kazanç aktarımı yasağına aykırı davranan şirket ilgililerine SPK tarafından kazancın iadesi için tanınan azami süre kaç gündür?",
            "secenekler": {
              "A": "30 Gün",
              "B": "60 Gün",
              "C": "15 Gün",
              "D": "90 Gün",
              "E": "10 Gün"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 21 uyarınca örtülü kazanç aktarımı yapıldığı tespit edilen tutarın 30 gün içinde ortaklığa iadesi zorunludur."
          },
          {
            "id": 8,
            "soruMetni": "Payları borsada işlem gören halka açık ortaklıkların Genel Kurul toplantılarına elektronik ortamda katılım imkânı sağlamaları hangi kanun ve düzenleme gereğince ZORUNLUDUR?",
            "secenekler": {
              "A": "Bankacılık Kanunu m. 12",
              "B": "6102 sayılı Türk Ticaret Kanunu m. 1527",
              "C": "Borçlar Kanunu m. 45",
              "D": "5549 sayılı Suç Gelirlerinin Aklanmasının Önlenmesi Hakkında Kanun",
              "E": "6362 sayılı SPKn m. 101"
            },
            "dogruCevap": "B",
            "cozum": "TTK m. 1527 uyarınca payları borsada işlem gören şirketlerin genel kurullarında Elektronik Genel Kurul Sistemi (EGKS) uygulaması zorunludur."
          },
          {
            "id": 9,
            "soruMetni": "Sermaye Piyasası Kanunu uyarınca, halka açık ortaklıkların sermaye artırımlarında mevcut ortakların yeni pay alma haklarına verilen ad aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Ayrılma Hakkı",
              "B": "Alım Teklifi Hakkı",
              "C": "Rüçhan Hakkı",
              "D": "Satma Hakkı",
              "E": "Tasfiye Payı Hakkı"
            },
            "dogruCevap": "C",
            "cozum": "Ortakların bedelli sermaye artırımlarında yeni paylardan öncelikle pay alma hakkı Rüçhan Hakkı olarak adlandırılır."
          },
          {
            "id": 10,
            "soruMetni": "SPKn uyarınca, kitle fonlaması platformlarının kurulması ve faaliyete geçmesi için kimden izin alınması ZORUNLUDUR?",
            "secenekler": {
              "A": "Merkezi Kayıt Kuruluşu",
              "B": "Borsa İstanbul A.Ş.",
              "C": "Ticaret Bakanlığı",
              "D": "Hazine ve Maliye Bakanlığı",
              "E": "Sermaye Piyasası Kurulu (SPK)"
            },
            "dogruCevap": "E",
            "cozum": "SPKn m. 35/A uyarınca Kitle Fonlaması Platformlarının kurulması ve listeye alınması SPK iznine tabidir."
          },
          {
            "id": 11,
            "soruMetni": "Payları ilk defa halka arz edilecek anonim ortaklıkların izahnamesinde yer alan finansal tabloların hangi standartlara uygun olarak hazırlanması şarttır?",
            "secenekler": {
              "A": "Avrupa Merkez Bankası Standartları",
              "B": "Kamu Gözetimi Kurumu (KGK) tarafından yayımlanan Türkiye Muhasebe Standartları / TMS - TFRS",
              "C": "Vergi Usul Kanunu (VUK) Muhasebe Tekdüzen Hesap Planı",
              "D": "ABD Genel Kabul Görmüş Muhasebe İlkeleri (US GAAP)",
              "E": "Alman Ticaret Kanunu (HGB) Standartları"
            },
            "dogruCevap": "B",
            "cozum": "SPK düzenlemeleri uyarınca finansal tablolar TMS/TFRS standartlarına uygun hazırlanır ve bağımsız denetimden geçer."
          },
          {
            "id": 12,
            "soruMetni": "Halka açık anonim ortaklıkların genel kurul toplantı ilanı, Türk Ticaret Kanunu ve SPK mevzuatı uyarınca toplantı gününden en az kaç hafta önce yapılmalıdır?",
            "secenekler": {
              "A": "4 Hafta",
              "B": "6 Hafta",
              "C": "2 Hafta",
              "D": "3 Hafta",
              "E": "1 Hafta"
            },
            "dogruCevap": "D",
            "cozum": "Halka açık şirketlerde Genel Kurul çağrısı, ilan ve toplantı günleri hariç olmak üzere toplantı tarihinden en az 3 hafta önce KAP'ta ve şirketin internet sitesinde yayımlanır."
          },
          {
            "id": 13,
            "soruMetni": "SPKn uyarınca sermaye piyasası araçlarının halka arzında izahnameden sorumlu olan kişiler aşağıdakilerden hangisinde doğru verilmiştir?",
            "secenekler": {
              "A": "İhraççı ve halka arz eden; ayrıca zararın kendi kusurundan kaynaklandığını ispat edemeyen yetkili lider sermaye piyasası kurumu",
              "B": "Sadece Borsa İstanbul Yönetim Kurulu",
              "C": "Yalnızca şirketin en büyük hissedarı",
              "D": "Sadece Merkezi Kayıt Kuruluşu",
              "E": "Sadece bağımsız denetim kuruluşu"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 10 uyarınca izahnamede yer alan yanlış veya eksik bilgilerden doğan zararlardan ihraççı ve halka arz eden sorumludur."
          },
          {
            "id": 14,
            "soruMetni": "Halka açık olmayan bir anonim ortaklığın pay sahibi sayısının kaça ulaşması halinde ortaklık kendiliğinden halka açılmış sayılır ve SPKn hükümlerine tabi olur?",
            "secenekler": {
              "A": "500 Pay Sahibi",
              "B": "250 Pay Sahibi",
              "C": "100 Pay Sahibi",
              "D": "750 Pay Sahibi",
              "E": "1000 Pay Sahibi"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 16 uyarınca pay sahibi sayısı 500'ü aşan anonim ortaklıkların payları halka arz olunmuş sayılır ve Kanun hükümlerine tabi olur."
          },
          {
            "id": 15,
            "soruMetni": "SPKn uyarınca, halka açık ortaklıkların bağış ve yardım yapabilmesi için aşağıdakilerden hangisi ZORUNLUDUR?",
            "secenekler": {
              "A": "Esas sözleşmede hüküm bulunması ve Genel Kurul tarafından sınır belirlenmesi",
              "B": "Ticaret Bakanlığından izin alınması",
              "C": "Sadece Genel Müdürün onay vermesi",
              "D": "Borsa Başkanı tarafından özel izin verilmesi",
              "E": "Bağış tutarının şirket sermayesinin %50'sini aşması"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 19 uyarınca bağış yapılabilmesi için esas sözleşmede hüküm bulunması ve yıllık bağış sınırının Genel Kurulca belirlenmesi şarttır."
          },
          {
            "id": 16,
            "soruMetni": "Halka açık anonim şirketlerde ortakların oy hakkına ilişkin sınırlamalar ve imtiyazlarla ilgili aşağıdaki ifadelerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Her pay sahibine eşit oy hakkı verilmesi imkânsızdır.",
              "B": "İmtiyazlı paylar borsa kotundan hemen çıkarılır.",
              "C": "Tüm paylar oy hakkından yosundur.",
              "D": "Yönetim kuruluna aday gösterme imtiyazı hariç, oyda imtiyaz Kurul kararıyla kısıtlanabilir veya kaldırılabilir.",
              "E": "Oyda imtiyaz hiçbir şekilde devredilemez."
            },
            "dogruCevap": "D",
            "cozum": "SPKn m. 28 uyarınca makul bir gerekçenin varlığı halinde SPK oyda imtiyazları kısıtlamaya yetkilidir."
          },
          {
            "id": 17,
            "soruMetni": "Sermaye Piyasası Kanunu uyarınca kurulan Yatırımcı Tazmin Merkezi (YTM) hangi durumda devreye girer?",
            "secenekler": {
              "A": "Şirketlerin iflasını önlemek için kredi sağlamak amacıyla",
              "B": "Borsa işlemlerinde oluşan komisyonları geri ödemek için",
              "C": "Yatırım kuruluşlarının yatırımdan doğan zararlarını tazmin etmek için",
              "D": "Yatırım kuruluşlarının sermaye piyasası faaliyetlerinden kaynaklanan nakit ödeme veya sermaye piyasası araçları teslim yükümlülüklerini yerine getirememesi halinde",
              "E": "Hisse senedi fiyatı düşen yatırımcıya tazminat ödemek için"
            },
            "dogruCevap": "D",
            "cozum": "SPKn m. 82 uyarınca YTM, yatırım kuruluşlarının acz haline düşmesi veya iflası durumunda müşterilerine ait nakit ve menkul kıymet teslim yükümlülüklerini tazmin eder."
          },
          {
            "id": 18,
            "soruMetni": "Yatırımcı Tazmin Merkezi (YTM) tarafından her bir yatırımcıya ödenecek azami tazminat tutarı yasal sınıra tabidir. Bu sınırla ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Yalnızca kurum yöneticileri tazmin edilir.",
              "B": "Sınırsız tazminat ödenir.",
              "C": "Yatırımcı tazmin tutarı üst sınırı her yıl yeniden değerleme oranında artırılır.",
              "D": "Tazminat ödemesi sadece döviz cinsinden yapılır.",
              "E": "Tazminat başvurusu 10 yıl sonra zaman aşımına uğramaz."
            },
            "dogruCevap": "C",
            "cozum": "SPKn m. 84 uyarınca YTM tazminat üst sınırı her yıl yeniden değerleme oranında güncellenir."
          },
          {
            "id": 19,
            "soruMetni": "Sermaye Piyasası Kanunu uyarınca kurulmuş olan Türkiye Sermaye Piyasaları Birliği (TSPB) ne tür bir kuruluştur?",
            "secenekler": {
              "A": "Özel hukuk anonim şirketi",
              "B": "Kamu kurumu niteliğinde meslek kuruluşu",
              "C": "Bağımsız denetim derneği",
              "D": "Uluslararası sivil toplum örgütü",
              "E": "Sermaye piyasası vakfı"
            },
            "dogruCevap": "B",
            "cozum": "SPKn m. 74 uyarınca TSPB, tüzel kişiliği haiz kamu kurumu niteliğinde bir meslek kuruluşudur."
          },
          {
            "id": 20,
            "soruMetni": "Sermaye piyasasında bağımsız denetim, derecelendirme ve değerleme faaliyetinde bulunacak kurumların SPK listesine alınması için kimden onay alması gerekir?",
            "secenekler": {
              "A": "Borsa İstanbul",
              "B": "Hazine ve Maliye Bakanlığı",
              "C": "Sermaye Piyasası Kurulu (SPK)",
              "D": "Türkiye Değerleme Uzmanları Birliği",
              "E": "Ticaret Odaları"
            },
            "dogruCevap": "C",
            "cozum": "SPKn m. 62 uyarınca sermaye piyasasında dışarıdan hizmet sunan denetim, değerleme ve derecelendirme kuruluşlarının SPK standartlarına uyması ve Kurul listesinde yer alması zorunludur."
          }
        ]
      },
      {
        "testId": 2,
        "testAdi": "Test 2: 1.1. Sermaye Piyasası Kanunu (Denetim, Tedbirler, Suçlar ve İdari Yaptırımlar)",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "6362 sayılı SPKn m. 106 uyarınca, doğrudan veya dolaylı olarak sermaye piyasası araçları hakkında içsel bilgi veya teferruatlı bilgiye sahip kişilerin bu bilgileri kullanarak menfaat sağlaması fiiline ne ad verilir?",
            "secenekler": {
              "A": "Güveni Kötüye Kullanma",
              "B": "Piyasa Dolandırıcılığı (Manipülasyon)",
              "C": "Bilgi Suiistimali (Insider Trading)",
              "D": "Usulsüz Halka Arz",
              "E": "Örtülü Kazanç Aktarımı"
            },
            "dogruCevap": "C",
            "cozum": "SPKn m. 106 uyarınca henüz kamuya açıklanmamış içsel bilgilere dayanarak işlem yapıp menfaat temin edilmesi 'Bilgi Suiistimali' suçunu oluşturur."
          },
          {
            "id": 2,
            "soruMetni": "SPKn m. 106 kapsamındaki Bilgi Suiistimali (Insider Trading) suçunu işleyen failler hakkında verilecek hapis cezasının yasal ALT sınırı kaç yıldır?",
            "secenekler": {
              "A": "4 Yıl",
              "B": "1 Yıl",
              "C": "2 Yıl",
              "D": "3 Yıl",
              "E": "5 Yıl"
            },
            "dogruCevap": "D",
            "cozum": "SPKn m. 106 uyarınca bilgi suiistimali suçunu işleyen kişilere 3 yıldan 5 yıla kadar hapis veya adli para cezası verilir."
          },
          {
            "id": 3,
            "soruMetni": "SPKn m. 107/1 uyarınca, sermaye piyasası araçlarının fiyatlarına, fiyat değişimlerine, arz ve taleplerine ilişkin olarak yapay piyasa oluşturmak amacıyla alım-satım yapılması fiiline ne ad verilir?",
            "secenekler": {
              "A": "İşleme Dayalı Piyasa Dolandırıcılığı",
              "B": "Usulsüz Halka Arz",
              "C": "Güveni Kötüye Kullanma",
              "D": "Örtülü Kazanç Aktarımı",
              "E": "Bilgiye Dayalı Piyasa Dolandırıcılığı"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 107/1 uyarınca alım-satım yapmak, emir vermek suretiyle fiyatı etkilemek İşleme Dayalı Piyasa Dolandırıcılığı suçudur."
          },
          {
            "id": 4,
            "soruMetni": "SPKn m. 107/2 uyarınca, sermaye piyasası araçlarının fiyatını, değerini veya yatırımcıların kararlarını etkilemek amacıyla yalan, yanlış veya yanıltıcı haber verme, yorum yapma fiili hangi suçu oluşturur?",
            "secenekler": {
              "A": "Zararı Tazmin Suçu",
              "B": "Emsale Aykırılık Suçu",
              "C": "Bilgiye Dayalı Piyasa Dolandırıcılığı",
              "D": "Bilgi Suiistimali",
              "E": "İşleme Dayalı Piyasa Dolandırıcılığı"
            },
            "dogruCevap": "C",
            "cozum": "SPKn m. 107/2 uyarınca yalan haber, asılsız yorum veya bilgi yayarak fiyatları etkilemek Bilgiye Dayalı Piyasa Dolandırıcılığı suçunu oluşturur."
          },
          {
            "id": 5,
            "soruMetni": "SPKn m. 107/1 kapsamında İşleme Dayalı Piyasa Dolandırıcılığı suçunu işleyen kişinin pişmanlık göstererek elde ettiği menfaati tazmin etmesi haliyle ilgili 'Etkin Pişmanlık' hükümlerine göre soruşturma başlamadan önce menfaati hazineye ödemesi halinde durum ne olur?",
            "secenekler": {
              "A": "Cezası 1/3 oranında indirilir.",
              "B": "Sadece adli para cezasına çevrilir.",
              "C": "Etkin pişmanlık hükümleri uygulanmaz.",
              "D": "Cezası 1/2 oranında indirilir.",
              "E": "Hakkında ceza verilmez (Ceza verilmesine yer olmadığına karar verilir)."
            },
            "dogruCevap": "E",
            "cozum": "SPKn m. 107/3 uyarınca soruşturma başlamadan önce elde edilen menfaatin 2 katı tutarındaki miktar Hazineye ödendiğinde ceza verilmez."
          },
          {
            "id": 6,
            "soruMetni": "Piyasa Dolandırıcılığı (m. 107/1) suçunda soruşturma başladıktan sonra fakat kovuşturma (dava) açılmadan önce etkin pişmanlıktan yararlanarak Hazineye ödeme yapılması halinde ceza indirimi ne oranda uygulanır?",
            "secenekler": {
              "A": "Cezanın dörtte biri (1/4) indirilir.",
              "B": "Cezanın yarısı (1/2) indirilir.",
              "C": "Cezanın üçte ikisi (2/3) indirilir.",
              "D": "Cezanın üçte biri (1/3) indirilir.",
              "E": "Ceza tamamen kaldırılır."
            },
            "dogruCevap": "B",
            "cozum": "SPKn m. 107/3 uyarınca soruşturma safhasında ödeme yapıldığında ceza 1/2 oranında indirilir."
          },
          {
            "id": 7,
            "soruMetni": "Piyasa Dolandırıcılığı suçunda mahkeme aşamasında (kovuşturma başlatıldıktan sonra) hüküm verilinceye kadar ödeme yapılması halinde ceza indirimi ne orandadır?",
            "secenekler": {
              "A": "Cezanın yarısı (1/2) indirilir.",
              "B": "Cezanın üçte biri (1/3) indirilir.",
              "C": "Cezanın altıda biri (1/6) indirilir.",
              "D": "İndirim uygulanmaz.",
              "E": "Cezanın beşte biri (1/5) indirilir."
            },
            "dogruCevap": "B",
            "cozum": "SPKn m. 107/3 uyarınca kovuşturma başladıktan sonra hüküm verilinceye kadar ödeme yapıldığında verilen ceza 1/3 oranında indirilir."
          },
          {
            "id": 8,
            "soruMetni": "SPKn m. 109 uyarınca SPK'dan izin almaksızın sermaye piyasası faaliyetinde bulunan veya yetki belgesi olmadan aracılık yapan kişilere verilecek ceza hangisidir?",
            "secenekler": {
              "A": "2 yıldan 5 yıla kadar hapis ve adli para cezası",
              "B": "6 ay hapis cezası",
              "C": "100.000 TL maktu ceza",
              "D": "Kapatma cezası",
              "E": "Sadece idari para cezası"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 109/2 uyarınca yetkisiz sermaye piyasası faaliyetinde bulunan kişiler 2 yıldan 5 yıla kadar hapis cezası ile cezalandırılır."
          },
          {
            "id": 9,
            "soruMetni": "SPKn m. 115 uyarınca Örtülü Kazanç Aktarımı suçunu işleyen halka açık şirket yöneticileri hakkında uygulanacak ceza sınırı nedir?",
            "secenekler": {
              "A": "10 yıla kadar hapis",
              "B": "1 yıldan 3 yıla kadar hapis",
              "C": "Sadece görevden alma kararı",
              "D": "500.000 TL adli para cezası",
              "E": "3 yıldan 8 yıla kadar hapis ve adli para cezası"
            },
            "dogruCevap": "E",
            "cozum": "SPKn m. 115 uyarınca örtülü kazanç aktarımı fiilini işleyenler güveni kötüye kullanma suçunun nitelikli halinden (3 yıldan 8 yıla kadar hapis) cezalandırılır."
          },
          {
            "id": 10,
            "soruMetni": "SPKn uyarınca sermaye piyasası suçlarında (m. 106, 107, 109, 115) Cumhuriyet Başsavcılığı tarafından soruşturma açılabilmesi için ön şart aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Herhangi bir vatandaşın ihbar etmesi",
              "B": "Borsa İstanbul'un suç duyurusu",
              "C": "Ticaret Bakanlığı müfettiş raporu",
              "D": "SPK tarafından Cumhuriyet Başsavcılığına yazılı suç duyurusunda bulunulması (İhbar/Rapor yazılması)",
              "E": "Polis fezlekesi"
            },
            "dogruCevap": "D",
            "cozum": "SPKn m. 115 uyarınca sermaye piyasası suçlarının soruşturulması SPK tarafından yapılacak yazılı yazılı başvuruya (suç duyurusuna) bağlıdır."
          },
          {
            "id": 11,
            "soruMetni": "SPKn uyarınca hukuka aykırı borsa işlemlerinin tespiti durumunda SPK'nın uygulayabileceği geçici makul tedbirler arasında aşağıdakilerden hangisi YER ALMAZ?",
            "secenekler": {
              "A": "İlgili kişilerin tüm mal varlıklarına mahkeme kararsız doğrudan el konulması",
              "B": "Takas takibinin yapılması ve pozisyon kısıtlaması getirilmesi",
              "C": "İlgili şahıslara geçici veya sürekli olarak borsa işlem yasağı getirilmesi",
              "D": "Depo şartı veya özkaynak oranının artırılması",
              "E": "İlgililerin hesaplarının dondurulması veya kısıtlanması"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 101 uyarınca idari tedbirler kapsamında işlem yasağı, depo şartı, internet erişim kısıtlaması uygulanabilir; ancak doğrudan mahkeme kararı olmadan mal varlığına el konulamaz."
          },
          {
            "id": 12,
            "soruMetni": "SPK tarafından hakkında geçici borsa işlem yasağı uygulanan kişilerin bu yasağının azami süresi mevzuat uyarınca kaç yıldır?",
            "secenekler": {
              "A": "3 Yıl",
              "B": "Süresizdir",
              "C": "2 Yıl",
              "D": "5 Yıl",
              "E": "1 Yıl"
            },
            "dogruCevap": "C",
            "cozum": "SPK Kararı uyarınca geçici işlem yasağı 6 ay süreyle verilir, gerektiğinde bu süre en fazla 2 yıla kadar uzatılabilir."
          },
          {
            "id": 13,
            "soruMetni": "Mevzuata aykırı olarak internet üzerinden yetkisiz kaldıraçlı işlem (Forex) yaptıran veya yurt dışı sitelere erişim sağlayan platformlara karşı SPK ne tür bir işlem yapar?",
            "secenekler": {
              "A": "Sadece uyarı yazısı gönderir.",
              "B": "Doğrudan web sitesini satın alır.",
              "C": "İnternet servis sağlayıcılarını kapatır.",
              "D": "Bilgi Teknolojileri ve İletişim Kurumu'na (BTK) başvurarak erişimin engellenmesini sağlar.",
              "E": "Şirkete ortak olur."
            },
            "dogruCevap": "D",
            "cozum": "SPKn m. 99 uyarınca yetkisiz Forex yayını yapan sitelerin erişimi SPK'nın BTK'ya başvurusu ile engellenir."
          },
          {
            "id": 14,
            "soruMetni": "SPKn uyarınca Kurul tarafından verilen İdari Para Cezalarına karşı itiraz ve dava açma süresi kararın tebliğinden itibaren kaç gündür ve hangi mahkemede dava açılır?",
            "secenekler": {
              "A": "15 Gün - Sulh Ceza Hakimliği",
              "B": "60 Gün - Asliye Hukuk Mahkemesi",
              "C": "7 Gün - Ticaret Mahkemesi",
              "D": "90 Gün - Danıştay",
              "E": "30 Gün - İdare Mahkemesi"
            },
            "dogruCevap": "E",
            "cozum": "SPK İdari Para Cezalarına karşı kararın tebliğ tarihinden itibaren 30 gün içinde İdare Mahkemesinde iptal davası açılabilir."
          },
          {
            "id": 15,
            "soruMetni": "Halka açık bir ortaklığın mali durumunun zayıflaması veya yükümlülüklerini karşılayamaması halinde SPK'nın alabileceği tedbirler arasında aşağıdakilerden hangisi YER ALMAZ?",
            "secenekler": {
              "A": "Şirketin sermaye artırmasını veya azaltmasını istemek",
              "B": "Sermaye piyasası faaliyetlerini geçici veya sürekli olarak durdurmak",
              "C": "Özel bağımsız denetim yaptırılmasını istemek",
              "D": "Şirket ortaklarının tüm kişisel banka hesaplarını kamulaştırmak",
              "E": "Şirket yöneticilerini görevden alıp yerine yeni üyeler atamak"
            },
            "dogruCevap": "D",
            "cozum": "SPKn m. 96-97 uyarınca SPK idari tedbirler uygulayabilir ancak ortakların kişisel mal varlığını kamulaştırma yetkisi yoktur."
          },
          {
            "id": 16,
            "soruMetni": "Sermaye piyasası araçlarının fiyatını etkileyebilecek emniyeti ihlal eden ve sır saklama yükümlülüğüne aykırı hareket eden kişilere ilişkin fiiller hangi kanun kapsamında suç teşkil eder?",
            "secenekler": {
              "A": "Türk Ceza Kanunu m. 150",
              "B": "6362 sayılı SPKn m. 111",
              "C": "İcra İflas Kanunu m. 331",
              "D": "Vergi Usul Kanunu m. 359",
              "E": "Çek Kanunu m. 5"
            },
            "dogruCevap": "B",
            "cozum": "SPKn m. 111 uyarınca Kurul ve borsa personelinin veya yetkililerin sır saklama yükümlülüğünü ihlal etmesi adli cezayı gerektiren bir suçtur."
          },
          {
            "id": 17,
            "soruMetni": "Sermaye Piyasası Kurulu denetçilerinin incelemeleri sırasında defter, belge ve kayıtları vermeyen veya incelemeyi engelleyen kişilere verilecek ceza nedir?",
            "secenekler": {
              "A": "Uyarma cezası",
              "B": "Ceza verilmez",
              "C": "Sadece 1.000 TL para cezası",
              "D": "6 ay borsa yasağı",
              "E": "1 yıldan 3 yıla kadar hapis cezası (SPKn m. 112)"
            },
            "dogruCevap": "E",
            "cozum": "SPKn m. 112 uyarınca denetim ve incelemeyi engelleyen veya belgeleri gizleyen kişilere 1 yıldan 3 yıla kadar hapis cezası verilir."
          },
          {
            "id": 18,
            "soruMetni": "SPKn m. 103 uyarınca Kurul tarafından belirlenen düzenlemelere, standartlara ve kararlara aykırı hareket eden tüzel kişilere uygulanan yaptırım türü hangisidir?",
            "secenekler": {
              "A": "Sadece Sözlü Uyarı",
              "B": "Trafikten Men",
              "C": "İdari Para Cezası",
              "D": "Müadelesiz Kapatma",
              "E": "Hapis Cezası"
            },
            "dogruCevap": "C",
            "cozum": "SPKn m. 103 uyarınca Kurul düzenlemelerine aykırılık hallerinde Kanunda belirlenen maktu veya nispi İdari Para Cezaları uygulanır."
          },
          {
            "id": 19,
            "soruMetni": "Sermaye Piyasası Kanunu uyarınca, hakkında ihbar veya denetim başlatılan şahıslara ilişkin olarak takas alacaklarının dondurulması veya tedbir konulması yetkisi kime aittir?",
            "secenekler": {
              "A": "Şirket Genel Müdürü",
              "B": "Sermaye Piyasası Kurulu (SPK)",
              "C": "Borsa İstanbul",
              "D": "Valilikler",
              "E": "Milli Piyango İdaresi"
            },
            "dogruCevap": "B",
            "cozum": "SPKn m. 101 uyarınca takas alacaklarının dondurulması ve hesaba tedbir konulması yetkisi SPK'ya aittir."
          },
          {
            "id": 20,
            "soruMetni": "İşleme Dayalı Piyasa Dolandırıcılığı (m. 107/1) suçunda failler hakkında uygulanacak adli para cezası miktarı en az ne kadar olmalıdır?",
            "secenekler": {
              "A": "Suçun işlenmesiyle elde edilen menfaatin miktarından az olamaz.",
              "B": "Adli para cezası uygulanmaz.",
              "C": "En fazla 10.000 TL olabilir.",
              "D": "Sabit 50.000 TL'dir.",
              "E": "Şirket sermayesinin %1'i kadardır."
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 107/1 uyarınca verilecek adli para cezasının miktarı, temin edilen menfaatten az olamaz."
          }
        ]
      },
      {
        "testId": 3,
        "testAdi": "Test 3: 1.2. Kamunun Aydınlatılmasına İlişkin Tebliğler ve 1.2.1. Özel Durumlar Tebliği (II-15.1)",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "Özel Durumlar Tebliği (II-15.1) uyarınca, ihraççının sermaye piyasası araçlarının değerini, fiyatını veya yatırımcıların yatırım kararlarını etkileyebilecek henüz kamuya açıklanmamış olay ve bilgilere ne ad verilir?",
            "secenekler": {
              "A": "Sürekli Bilgi",
              "B": "Özel İlan",
              "C": "İçsel Bilgi",
              "D": "Periyodik Bilgi",
              "E": "Genel Bilgi"
            },
            "dogruCevap": "C",
            "cozum": "II-15.1 sayılı Tebliğ m. 4 uyarınca fiyat veya yatırım kararlarını etkileyebilecek henüz açıklanmamış detaylı bilgilere 'İçsel Bilgi' denir."
          },
          {
            "id": 2,
            "soruMetni": "II-15.1 sayılı Özel Durumlar Tebliği uyarınca, ihraççıların içsel bilgilerin kamuya açıklanmasını erteleyebilmesi için aşağıdaki şartlardan hangisinin varlığı ZORUNLUDUR?",
            "secenekler": {
              "A": "Şirketin sermayesinin 100 milyon TL'yi aşması",
              "B": "Ertelemenin en az 1 yıl sürmesi",
              "C": "Ertelemenin ihraççının meşru haklarının korunması için gerekli olması, kamunun yanıltılmasına yol açmaması ve bilginin gizliliğinin korunabilmesi",
              "D": "Sadece Genel Müdürün sözlü onay vermesi",
              "E": "Borsa İstanbul Yönetim Kurulunun kararı"
            },
            "dogruCevap": "C",
            "cozum": "Tebliğ m. 6 uyarınca erteleme için: 1) Meşru çıkar korunmalı, 2) Kamu yanıltılmamalı, 3) Gizlilik sağlanmalıdır."
          },
          {
            "id": 3,
            "soruMetni": "İçsel bilginin kamuya açıklanmasının ertelenmesi halinde, erteleme sebepleri ortadan kalktığında ihraççı KAP'ta nasıl bir açıklama yapar?",
            "secenekler": {
              "A": "Erteleme detayları KAP'ta açıklanmaz.",
              "B": "İçsel bilgi ile birlikte erteleme kararı ve erteleme gerekçeleri derhal Kamuyu Aydınlatma Platformu'nda (KAP) açıklanır.",
              "C": "Sadece SPK'ya gizli bir dilekçe verilir.",
              "D": "Sadece genel kurulda okunur.",
              "E": "Açıklama 1 yıl sonra yapılır."
            },
            "dogruCevap": "B",
            "cozum": "Tebliğ m. 6/3 uyarınca erteleme sebebi kalktığında özel durum açıklaması yapılırken erteleme kararı ve gerekçesi de yayımlanır."
          },
          {
            "id": 4,
            "soruMetni": "Ertelenen içsel bilginin gizliliğinin korunamadığı veya sızdığı tespiti yapıldığında ihraççı ne yapmakla yükümlüdür?",
            "secenekler": {
              "A": "Borsadaki işlemleri 3 gün durdurur.",
              "B": "Erteleme süresini 6 ay daha uzatır.",
              "C": "Hiçbir açıklama yapmaz.",
              "D": "Özel durum açıklamasını DERHAL KAP'ta yapmakla yükümlüdür.",
              "E": "SPK'dan ceza indirimi ister."
            },
            "dogruCevap": "D",
            "cozum": "Tebliğ m. 6/4 uyarınca ertelenen bilginin gizliliği bozulduğunda derhal KAP'ta özel durum açıklaması yapılması şarttır."
          },
          {
            "id": 5,
            "soruMetni": "Özel Durumlar Tebliği uyarınca, ihraççı nezdinde idari sorumluluğu bulunan kişilerin ve bunlarla yakından ilişkili kişilerin ihraççı paylarındaki işlemlerine ilişkin bildirim sınırı ve esası nedir?",
            "secenekler": {
              "A": "Bir takvim yılı içinde yapılan işlemlerin toplam tutarı SPK tarafından belirlenen eşiğe ulaştığında KAP'ta açıklanır.",
              "B": "Bildirim 5 yıl sonra yapılır.",
              "C": "Sadece banka transferleri bildirilir.",
              "D": "İdari sorumlular hiçbir şekilde işlem yapamaz.",
              "E": "İşlemler sadece yıllık faaliyet raporunda gösterilir."
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 11 uyarınca idari sorumluluğu bulunan kişilerin işlemleri belirlenen tutarlık eşiği aştığında KAP'ta ilan edilir."
          },
          {
            "id": 6,
            "soruMetni": "İhraççıların içsel bilgiye erişimi olan kişilerin listesini oluşturması ve bu listeyi güncellemesi kimin sorumluluğundadır?",
            "secenekler": {
              "A": "Merkezi Kayıt Kuruluşu",
              "B": "Borsa İstanbul",
              "C": "Bağımsız Denetim Şirketi",
              "D": "Ticaret Sicil Gazetesi",
              "E": "İhraççının Yönetim Kurulu"
            },
            "dogruCevap": "E",
            "cozum": "Tebliğ m. 7 uyarınca İçsel Bilgiye Erişimi Olanlar Listesi ihraççı yönetim kurulu tarafından hazırlanır ve istendiğinde SPK'ya sunulur."
          },
          {
            "id": 7,
            "soruMetni": "İçsel Bilgiye Erişimi Olanlar Listesinde yer alan bilgilerin ve değişikliklerin SPK veya MKK talep ettiğinde gönderilme yükümlülüğü kaç yıl süreyle saklanır?",
            "secenekler": {
              "A": "1 Yıl",
              "B": "10 Yıl",
              "C": "3 Yıl",
              "D": "5 Yıl",
              "E": "8 Yıl"
            },
            "dogruCevap": "D",
            "cozum": "Tebliğ m. 7 uyarınca içsel bilgiye erişimi olanlar listesi ve güncellemeleri en az 5 yıl süreyle saklanır."
          },
          {
            "id": 8,
            "soruMetni": "Basın-yayın organlarında veya kamuoyunda ihraççı hakkında çıkan haber veya söylentilere ilişkin ihraççının KAP'ta doğrulama açıklaması yapma yükümlülüğü hangi durumda doğar?",
            "secenekler": {
              "A": "Haber veya söylenti yatırımcıların kararlarını veya sermaye piyasası araçlarının fiyatını etkileyebilecek önemde olduğunda",
              "B": "Yılda bir kez toplu olarak",
              "C": "Her çıkan magazin haberinde",
              "D": "Haber asılsız olsa bile hiçbir zaman açıklama yapılmaz",
              "E": "Sadece yurt dışı gazetelerde haber çıktığında"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 9 uyarınca fiyata veya yatırım kararına etki edebilecek önemdeki haber ve söylentilerin doğru veya asılsız olduğuna dair KAP'ta açıklama yapılması zorunludur."
          },
          {
            "id": 9,
            "soruMetni": "Özel Durumlar Tebliği uyarınca ihraççıların geleceğe yönelik değerlendirmelerini (beklentilerini) kamuya açıklamasıyla ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Geleceğe yönelik değerlendirmeler yönetim kurulu kararına dayanmalı ve yılda en fazla 4 kez kamuya açıklanabilir.",
              "B": "Açıklama sadece sözlü televizyon yayınında yapılır.",
              "C": "Geleceğe yönelik değerlendirmeler kesinleşmiş garanti veriler olmalıdır.",
              "D": "Sadece 10 yıllık planlar açıklanabilir.",
              "E": "Geleceğe yönelik açıklama yapılması yasaktır."
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 10 uyarınca geleceğe yönelik değerlendirmeler yönetim kurulu kararıyla veya yetkili yöneticilerin onayıyla KAP'ta açıklanabilir ve yılda azami 4 kez güncellenebilir."
          },
          {
            "id": 10,
            "soruMetni": "Halka açık bir şirketin doğrudan veya dolaylı olarak sermayesindeki veya oy haklarındaki payın %5, %10, %15, %20, %25, %33, %50, %67 veya %95 sınırlarına ulaşması veya bu sınırların altına düşmesi halinde bildirimi kim yapar?",
            "secenekler": {
              "A": "İşlemi gerçekleştiren gerçek veya tüzel kişi (MKK tarafından otomatik yapılır veya ilgili kişi bildirir).",
              "B": "Sadece Borsa Başkanı",
              "C": "Ticaret Bakanlığı",
              "D": "Şirket Çaycısı",
              "E": "Maliye Müfettişi"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 12 uyarınca oy haklarındaki önemli pay sahipliği değişiklikleri MKK tarafından veya ilgili ortak tarafından KAP'ta açıklanır."
          },
          {
            "id": 11,
            "soruMetni": "İhraççıların kamuya yapacakları özel durum açıklamalarının dili ve gönderim ortamı aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Sadece İngilizce olarak gazete ilanı yapılır.",
              "B": "Şirket panosuna asılır.",
              "C": "Türkçe olarak Elektronik İmza ile Kamuyu Aydınlatma Platformu'na (KAP) gönderilir.",
              "D": "Posta yoluyla SPK'ya iletilir.",
              "E": "Sadece TV kanallarında altyazı geçilir."
            },
            "dogruCevap": "C",
            "cozum": "Özel durum açıklamaları güvenli elektronik imza ile KAP sistemine yayımlanmak üzere iletilir."
          },
          {
            "id": 12,
            "soruMetni": "Özel Durumlar Tebliği uyarınca, kamuya açıklanan özel durum açıklamalarının şirketin kendi internet sitesinde yayımlanma ve saklanma süresi en az kaç yıldır?",
            "secenekler": {
              "A": "8 Yıl",
              "B": "5 Yıl",
              "C": "2 Yıl",
              "D": "10 Yıl",
              "E": "1 Yıl"
            },
            "dogruCevap": "B",
            "cozum": "Tebliğ m. 13 uyarınca kamuya açıklanan özel durum açıklamaları şirketin internet sitesinde en az 5 yıl süreyle güncel olarak tutulur."
          },
          {
            "id": 13,
            "soruMetni": "Özel Durumlar Tebliği uyarınca, ihraççının yönetim kontrolünü elinde tutan ortakların kendi aralarında yaptıkları oy sözleşmeleri veya yönetim kurulu üyeliği aday gösterme anlaşmaları KAP'ta açıklanmalı mıdır?",
            "secenekler": {
              "A": "Sadece mahkeme isterse verilir.",
              "B": "Evet, sözleşmenin imzalandığı tarihte derhal KAP'ta açıklanması zorunludur.",
              "C": "Sadece Genel Kurulda söylenir.",
              "D": "Sadece şirket tasfiye edilirken açıklanır.",
              "E": "Hayır, gizli kalması zorunludur."
            },
            "dogruCevap": "B",
            "cozum": "Tebliğ m. 12 uyarınca oy haklarının kullanımına ilişkin anlaşmalar ve kontrol değişiklikleri derhal kamuya açıklanır."
          },
          {
            "id": 14,
            "soruMetni": "İhraççıların konsolide olmayan finansal tablolarını KAP'ta yayımlama süresi hesap döneminin bitiminden itibaren en geç kaç gündür?",
            "secenekler": {
              "A": "30 Gün",
              "B": "120 Gün",
              "C": "60 Gün",
              "D": "70 Gün",
              "E": "90 Gün"
            },
            "dogruCevap": "D",
            "cozum": "Finansal Raporlama Tebliği (II-14.1) uyarınca konsolide olmayan yıllık finansal tablolar en geç 70 gün içinde KAP'ta yayımlanır."
          },
          {
            "id": 15,
            "soruMetni": "Halka açık ortaklıkların konsolide yıllık finansal tablolarını KAP'ta yayımlama azami süresi kaç gündür?",
            "secenekler": {
              "A": "120 Gün",
              "B": "90 Gün",
              "C": "70 Gün",
              "D": "60 Gün",
              "E": "30 Gün"
            },
            "dogruCevap": "B",
            "cozum": "Finansal Raporlama Tebliği uyarınca konsolide yıllık finansal raporların KAP'ta ilanı için azami süre 90 gündür."
          },
          {
            "id": 16,
            "soruMetni": "Aşağıdakilerden hangisi Sürekli Bilgiler kapsamında KAP'ta yayımlanması zorunlu olan hususlardan biri DEĞİLDİR?",
            "secenekler": {
              "A": "Unvan ve adres değişiklikleri",
              "B": "Sermaye artırımı ve azaltımı kararları",
              "C": "Şirket çalışanlarının günlük öğle yemeği menüsü",
              "D": "Kar payı dağıtım kararları",
              "E": "Şirketin genel kurul kararları ve tasfiye durumları"
            },
            "dogruCevap": "C",
            "cozum": "Şirket içindeki rutin operasyonel detaylar (yemek menüsü vb.) kamuyu aydınlatma kapsamında değildir."
          },
          {
            "id": 17,
            "soruMetni": "Özel durum açıklamalarının mesai saatleri dışında gerçekleşmesi durumunda KAP'a bildirim zamanı nasıl olmalıdır?",
            "secenekler": {
              "A": "Hafta sonu açıklama yapılması yasaktır.",
              "B": "SPK'nın açılacağı saat beklenir.",
              "C": "Ertesi gün mesai başlangıcına kadar beklenir.",
              "D": "Pazartesi sabahına kadar ertelenir.",
              "E": "Olay gerçekleştiği anda zaman kaybetmeksizin derhal KAP'a iletilir."
            },
            "dogruCevap": "E",
            "cozum": "KAP sistemi 7/24 esasına göre çalışır; özel durum oluşturan bilgi ortaya çıktığında derhal gönderilmesi esastır."
          },
          {
            "id": 18,
            "soruMetni": "İhraççıların KAP bildirimlerinde yanıltıcı veya eksik bilgi vermeleri halinde doğacak zararlardan kimler sorumludur?",
            "secenekler": {
              "A": "Sadece MKK çalışanları",
              "B": "Hiç kimse sorumlu tutulamaz",
              "C": "Sadece Borsa İstanbul",
              "D": "Sadece KAP yazılımını yapan mühendisler",
              "E": "İhraççı şirket ve açıklamada imzası bulunan idari sorumlular"
            },
            "dogruCevap": "E",
            "cozum": "KAP bildirimlerinin doğruluğundan ihraççı şirket ve bildirimi imzalayan idari sorumlular mevzuat uyarınca sorumludur."
          },
          {
            "id": 19,
            "soruMetni": "Özel Durumlar Tebliği uyarınca, ihraççının faaliyetlerini kısmen veya tamamen durdurması veya durdurulması kararı alınması halinde durum KAP'ta nasıl açıklanır?",
            "secenekler": {
              "A": "Sadece işçilere bildirilir.",
              "B": "Gizli tutulur.",
              "C": "Yıl sonunda faaliyet raporuna eklenir.",
              "D": "Borsa kotundan çıkana kadar açıklanmaz.",
              "E": "Karar alındığı anda Derhal Özel Durum Açıklaması olarak yayımlanır."
            },
            "dogruCevap": "E",
            "cozum": "Faaliyetlerin durması veya durdurulması içsel bilgi niteliğinde olup derhal KAP'ta ilan edilir."
          },
          {
            "id": 20,
            "soruMetni": "Halka açık şirketlerin İlişkili Taraf İşlemleri (II-17.1 / II-15.1) kapsamında varlık transferi işlemlerinde bağımsız değerleme yaptırma yükümlülüğü oran eşiği yüzde kaçtır?",
            "secenekler": {
              "A": "%100 oranında",
              "B": "%50 oranında",
              "C": "%1 oranında",
              "D": "İşlem tutarının toplam varlıklara veya hasılata oranının %10'a ulaşması veya aşması halinde",
              "E": "%75 oranında"
            },
            "dogruCevap": "D",
            "cozum": "İlişkili taraf işlemlerinde tutarın aktif büyüklüğe veya hasılata oranının %10'u aşması durumunda bağımsız değerleme raporu hazırlanması ve KAP'ta açıklanması zorunludur."
          }
        ]
      },
      {
        "testId": 4,
        "testAdi": "Test 4: 1.3. Halka Açık Ortaklıklar ve 1.3.1. Kurumsal Yönetim Tebliği (II-17.1)",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "Kurumsal Yönetim Tebliği (II-17.1) uyarınca, Borsa İstanbul'da işlem gören halka açık şirketler piyasa değerleri ve fiili dolaşımdaki pay değerlerine göre kaç gruba ayrılır?",
            "secenekler": {
              "A": "5 Grup",
              "B": "2 Grup",
              "C": "Gruplandırma yapılmaz",
              "D": "4 Grup",
              "E": "3 Grup (1. Grup, 2. Grup, 3. Grup)"
            },
            "dogruCevap": "E",
            "cozum": "Kurumsal Yönetim Tebliği uyarınca halka açık şirketler 1., 2. ve 3. Grup olarak sistemli şekilde sınıflandırılır."
          },
          {
            "id": 2,
            "soruMetni": "II-17.1 sayılı Tebliğ gereğince, 1. Grup ve 2. Grup halka açık şirketlerin yönetim kurulunda yer alması gereken Bağımsız Yönetim Kurulu Üye sayısı ve oranı en az ne olmalıdır?",
            "secenekler": {
              "A": "Sadece 1 üye olması yeterlidir.",
              "B": "En az 5 üye olmalıdır.",
              "C": "Toplam üye sayısının 1/3'ünden az olamaz ve her halükarda 2 üyeden az olamaz.",
              "D": "Tüm üyelerin bağımsız olması şarttır.",
              "E": "Bağımsız üye zorunluluğu yoktur."
            },
            "dogruCevap": "C",
            "cozum": "Kurumsal Yönetim İlkeleri m. 4.3.4 uyarınca bağımsız üye sayısı toplam üye sayısının üçte birinden az olamaz ve her halükarda 2 üyeden az olamaz."
          },
          {
            "id": 3,
            "soruMetni": "Kurumsal Yönetim Tebliği uyarınca, bağımsız yönetim kurulu üyelerinin görev süresi tek seferde en fazla kaç yıl için seçilebilir?",
            "secenekler": {
              "A": "5 Yıl",
              "B": "6 Yıl",
              "C": "10 Yıl",
              "D": "1 Yıl",
              "E": "3 Yıl"
            },
            "dogruCevap": "E",
            "cozum": "Bağımsız yönetim kurulu üyeleri en fazla 3 yıl için seçilebilir ve tekrar aday gösterilip seçilmeleri mümkündür."
          },
          {
            "id": 4,
            "soruMetni": "Bir bağımsız yönetim kurulu üyesinin aynı şirkette veya şirket grubunda son 10 yıl içerisinde toplam kaç yıldan fazla bağımsız üye olarak görev yapmamış olması şarttır?",
            "secenekler": {
              "A": "5 Yıl",
              "B": "6 Yıl",
              "C": "10 Yıl",
              "D": "8 Yıl",
              "E": "3 Yıl"
            },
            "dogruCevap": "B",
            "cozum": "Kurumsal Yönetim İlkeleri m. 4.3.6 uyarınca son 10 yıl içinde 6 yıldan fazla bağımsız üyelik yapan kişi bağımsızlığını kaybeder."
          },
          {
            "id": 5,
            "soruMetni": "Kurumsal Yönetim Tebliği uyarınca, Yönetim Kurulu bünyesinde oluşturulması ZORUNLU olan komiteler arasında aşağıdakilerden hangisi YER ALMAZ?",
            "secenekler": {
              "A": "Sosyal Etkinlik ve Spor Komitesi",
              "B": "Kurumsal Yönetim Komitesi",
              "C": "Denetimden Sorumlu Komite",
              "D": "Aday Gösterme ve Ücret Komitesi",
              "E": "Riskin Erken Saptanması Komitesi"
            },
            "dogruCevap": "A",
            "cozum": "Zorunlu komiteler: Denetim, Kurumsal Yönetim, Riskin Erken Saptanması, Aday Gösterme ve Ücret komiteleridir. Spor komitesi yasal zorunluluk değildir."
          },
          {
            "id": 6,
            "soruMetni": "Yönetim kurulu bünyesinde kurulan Denetimden Sorumlu Komitenin üyeleri ve yapısı hakkında aşağıdakilerden hangisi ZORUNLUDUR?",
            "secenekler": {
              "A": "Genel müdür komite başkanı olur.",
              "B": "Üyelerin en az yarısı icracı olmalıdır.",
              "C": "Dışarıdan uzmanlardan seçilir.",
              "D": "Komitenin tüm üyelerinin Bağımsız Yönetim Kurulu Üyelerinden oluşması zorunludur.",
              "E": "Sadece komite başkanı bağımsız olmalıdır."
            },
            "dogruCevap": "D",
            "cozum": "Kurumsal Yönetim İlkeleri m. 4.5.3 uyarınca Denetimden Sorumlu Komitenin bütün üyeleri bağımsız yönetim kurulu üyeleri arasından seçilmelidir."
          },
          {
            "id": 7,
            "soruMetni": "Kurumsal Yönetim Tebliği uyarınca, bir yönetim kurulu üyesi aynı anda en fazla kaç komitenin başkanı olabilir?",
            "secenekler": {
              "A": "Tüm Komiteler",
              "B": "2 Komite",
              "C": "Sınırlama yoktur",
              "D": "3 Komite",
              "E": "Sadece 1 Komite"
            },
            "dogruCevap": "E",
            "cozum": "Bir yönetim kurulu üyesi birden fazla komitede görev alabilir ancak yalnızca 1 komitenin başkanı olabilir."
          },
          {
            "id": 8,
            "soruMetni": "Yönetim Kurulu Başkanı ile Genel Müdürün (İcra Başkanı) aynı kişi olması durumunda bu durumun gerekçesi nerede açıklanmalıdır?",
            "secenekler": {
              "A": "Gerekçe açıklamaya gerek yoktur.",
              "B": "SPK'dan ceza alınır.",
              "C": "KAP'ta ve Yıllık Kurumsal Yönetim Uyum Raporunda gerekçesiyle açıklanmalıdır.",
              "D": "Ticaret Sicil Gazetesinde ilan edilir.",
              "E": "Sadece mahkemeye bildirilir."
            },
            "dogruCevap": "C",
            "cozum": "Kurumsal Yönetim İlkeleri uyarınca YK başkanı ile İcra başkanı aynı kişi ise bu durum gerekçelendirilerek KAP'ta açıklanmalıdır."
          },
          {
            "id": 9,
            "soruMetni": "Kurumsal Yönetim Tebliği uyarınca oluşturulan Yatırımcı İlişkileri Bölüm Yöneticisinin haiz olması gereken lisans belgesi aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Gayrimenkul Değerleme Lisansı",
              "B": "SPL Düzey 3 Lisansı ve Kurumsal Yönetim Derecelendirme Lisansı",
              "C": "Türev Araçlar Lisansı",
              "D": "Lisans zorunluluğu yoktur",
              "E": "Sadece Düzey 1 Lisansı"
            },
            "dogruCevap": "B",
            "cozum": "Yatırımcı ilişkileri bölüm yöneticisinin tam zamanlı çalışması, SPL Düzey 3 ve Kurumsal Yönetim Derecelendirme lisanslarına sahip olması şarttır."
          },
          {
            "id": 10,
            "soruMetni": "Aşağıdakilerden hangisi genel kabul görmüş Kurumsal Yönetim İlkelerinin temel 4 ayağı (prensibi) arasında YER ALMAZ?",
            "secenekler": {
              "A": "Gizlilik ve Bilgi Saklama",
              "B": "Adillik (Eşitlik)",
              "C": "Hesap Verebilirlik",
              "D": "Şeffaflık",
              "E": "Sorumluluk"
            },
            "dogruCevap": "A",
            "cozum": "Kurumsal Yönetimin 4 ana ilkesi: Şeffaflık, Adillik, Hesap Verebilirlik ve Sorumluluktur. Gizlilik ve bilgi saklama temel ilke değildir."
          },
          {
            "id": 11,
            "soruMetni": "Bağımsız yönetim kurulu üyelerinin bağımsızlığını kaybetmesi veya istifa etmesi durumunda yeni bağımsız üye seçilinceye kadar geçecek süre içinde en geç ne zaman seçim yapılmalıdır?",
            "secenekler": {
              "A": "3 yıl boyunca boş kalır.",
              "B": "Şirket derhal kapatılır.",
              "C": "Yönetim kurulu kararları geçersiz sayılır.",
              "D": "SPK doğrudan atama yapar.",
              "E": "Yapılacak ilk Genel Kurul toplantısına kadar geçici üye atanır veya ilk Genel Kurulda seçilir."
            },
            "dogruCevap": "E",
            "cozum": "Bağımsız üyelik boşaldığında yönetim kurulu ilk genel kurula kadar görev yapmak üzere geçici atama yapabilir veya ilk genel kurulda seçim tamamlanır."
          },
          {
            "id": 12,
            "soruMetni": "Kurumsal Yönetim Tebliği uyarınca, Ücretlendirme Politikası ve yönetim kurulu üyelerine verilen her türlü menfaatlerin açıklandığı organ aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Açıklanması yasaktır.",
              "B": "Sadece yönetim kurulunun gizli kasasında saklanır.",
              "C": "Sadece vergi dairesine bildirilir.",
              "D": "Genel Kurul toplantısında ayrı bir madde olarak ortakların bilgisine sunulur ve internet sitesinde yayımlanır.",
              "E": "Sadece bankalara verilir."
            },
            "dogruCevap": "D",
            "cozum": "Ücretlendirme politikası Genel Kurulda ortakların bilgisine sunulur ve şirket internet sitesinde açıklanır."
          },
          {
            "id": 13,
            "soruMetni": "Halka açık ortaklıklarda Riskin Erken Saptanması Komitesi kaç ayda bir yönetim kuruluna rapor sunmakla yükümlüdür?",
            "secenekler": {
              "A": "Yılda Bir",
              "B": "Her Ay",
              "C": "2 Ayda Bir",
              "D": "6 Ayda Bir",
              "E": "3 Yılda Bir"
            },
            "dogruCevap": "C",
            "cozum": "TTK m. 378 ve Tebliğ uyarınca Riskin Erken Saptanması Komitesi her 2 ayda bir durumu değerlendirir ve raporunu yönetim kuruluna sunar."
          },
          {
            "id": 14,
            "soruMetni": "Kurumsal Yönetim Tebliğinde belirtilen bağımsız yönetim kurulu üyesi adaylarının belirlenmesi sürecinde aday tekliflerini değerlendiren komite hangisidir?",
            "secenekler": {
              "A": "Disiplin Komitesi",
              "B": "Pazarlama Komitesi",
              "C": "Aday Gösterme Komitesi (veya bu görevi üstlenen Kurumsal Yönetim Komitesi)",
              "D": "Bütçe Komitesi",
              "E": "Satın Alma Komitesi"
            },
            "dogruCevap": "C",
            "cozum": "Aday Gösterme Komitesi bağımsız üye adaylık tekliflerini değerlendirip raporunu yönetim kuruluna sunar."
          },
          {
            "id": 15,
            "soruMetni": "Borsa İstanbul BIST-50 endeksinde yer alan 1. Grup halka açık şirketlerde yönetim kurulunda kadın üye oranı için tavsiye edilen hedef oran en az yüzde kaçtır?",
            "secenekler": {
              "A": "%33",
              "B": "%25",
              "C": "%15",
              "D": "%10",
              "E": "%50"
            },
            "dogruCevap": "B",
            "cozum": "Kurumsal Yönetim İlkeleri m. 4.3.9 uyarınca yönetim kurulunda kadın üye oranının en az %25 olması hedefi belirlenir ve politika oluşturulur."
          },
          {
            "id": 16,
            "soruMetni": "Kurumsal Yönetim Tebliği uyarınca, şirketlerin internet sitelerinde bilgilendirme politikası ve ortaklık yapısı en az kaç yıllık geçmişi kapsayacak şekilde yayımlanmalıdır?",
            "secenekler": {
              "A": "7 Yıl",
              "B": "3 Yıl",
              "C": "10 Yıl",
              "D": "5 Yıl",
              "E": "1 Yıl"
            },
            "dogruCevap": "D",
            "cozum": "Şirket internet sitesinde Kurumsal Yönetim bölümünde son 5 yıla ait açıklamalar ve bilgiler bulundurulur."
          },
          {
            "id": 17,
            "soruMetni": "Halka açık şirketlerde Kurumsal Yönetim Uyum Raporu (URF) ve Kurumsal Yönetim Bilgi Formu (KYBF) hangi platformda ve ne zaman yayımlanır?",
            "secenekler": {
              "A": "5 yılda bir yayımlanır.",
              "B": "Sadece şirket içi e-posta ile duyurulur.",
              "C": "SPK binasına asılır.",
              "D": "KAP'ta yıllık faaliyet raporu ile birlikte yayımlanır.",
              "E": "Sadece Ticaret Sicil Gazetesinde bassılır."
            },
            "dogruCevap": "D",
            "cozum": "URF ve KYBF şablonları yıllık finansal rapor ilan süresi içinde KAP'ta açıklanır."
          },
          {
            "id": 18,
            "soruMetni": "Kurumsal Yönetim İlkelerine uyum durumunu derecelendiren ve not veren bağımsız kurumlara ne ad verilir?",
            "secenekler": {
              "A": "Kurumsal Yönetim Derecelendirme Kuruluşları",
              "B": "Portföy Saklama Şirketleri",
              "C": "Gayrimenkul Değerleme Şirketleri",
              "D": "Kredi Derecelendirme Şirketleri",
              "E": "Varlık Kiralama Şirketleri"
            },
            "dogruCevap": "A",
            "cozum": "SPK tarafından yetkilendirilen Kurumsal Yönetim Derecelendirme Kuruluşları şirketlerin ilkelere uyumunu notlandırır."
          },
          {
            "id": 19,
            "soruMetni": "Kurumsal Yönetim Tebliği uyarınca, yönetim kurulu toplantı nisabı (karar alma yeter sayısı) esas sözleşmede aksine ağırlaştırılmış bir oran yoksa nasıl belirlenir?",
            "secenekler": {
              "A": "Yönetim kurulu üye tam sayısının çoğunluğu ile toplanır ve kararlar katılanların çoğunluğu ile alınır.",
              "B": "Tek bir üyenin onayı yeterlidir.",
              "C": "Tüm üyelerin oybirliği şarttır.",
              "D": "SPK temsilcisinin oyu şarttır.",
              "E": "Genel kurul kararı olmadan karar alınamaz."
            },
            "dogruCevap": "A",
            "cozum": "TTK ve SPK ilkeleri uyarınca üye tam sayısının çoğunluğu ile toplanılır ve katılanların çoğunluğu ile karar verilir."
          },
          {
            "id": 20,
            "soruMetni": "Yönetim kurulu üyelerine verilen performans ödemeleri ve hisse senedi opsiyonları konusunda bağımsız üyelere ilişkin kısıtlama nedir?",
            "secenekler": {
              "A": "Ücret ödenmesi yasaktır.",
              "B": "Bağımsız yönetim kurulu üyelerinin ücretlendirilmesinde hisse senedi opsiyonları veya şirketin performansına dayalı ödeme planları KULLANILAMAZ.",
              "C": "Sadece kâr payı verilir.",
              "D": "Performans ödemesi zorunludur.",
              "E": "Bağımsız üyelere sadece hisse senedi verilir."
            },
            "dogruCevap": "B",
            "cozum": "Kurumsal Yönetim İlkeleri m. 4.6.3 uyarınca tarafsızlığı korumak amacıyla bağımsız üyelere kâra veya performansa dayalı prim ve opsiyon verilemez."
          }
        ]
      },
      {
        "testId": 5,
        "testAdi": "Test 5: 1.3. Halka Açık Ortaklıklar Tebliğleri (Pay Alım Teklifi, Ortaklıktan Çıkarma ve Önemli Nitelikteki İşlemler)",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "Pay Alım Teklifi Tebliği (II-26.1) uyarınca, halka açık bir ortaklıkta doğrudan veya dolaylı olarak oy haklarının yüzde kaçına sahip olunması durumunda yönetim kontrolü elde edilmiş sayılır ve Zorunlu Pay Alım Teklifi doğar?",
            "secenekler": {
              "A": "%90 oy hakkı",
              "B": "%25 oy hakkı",
              "C": "%50 ve üzeri oy hakkı",
              "D": "%10 oy hakkı",
              "E": "%75 oy hakkı"
            },
            "dogruCevap": "C",
            "cozum": "Pay Alım Teklifi Tebliği m. 11 uyarınca tek başına veya birlikte hareket ederek oy haklarının %50'sinden fazlasının elde edilmesi veya yönetim kurulunda çoğunluğu seçme hakkı kontrolü doğurur."
          },
          {
            "id": 2,
            "soruMetni": "II-26.1 sayılı Tebliğ gereğince, zorunlu pay alım teklifi zorunluluğunun doğduğu tarihten itibaren en geç kaç iş günü içinde SPK'ya pay alım teklifi bilgi formu onayı için başvurulmalıdır?",
            "secenekler": {
              "A": "10 İş Günü",
              "B": "30 İş Günü",
              "C": "15 İş Günü",
              "D": "60 İş Günü",
              "E": "6 İş Günü"
            },
            "dogruCevap": "E",
            "cozum": "Tebliğ m. 13 uyarınca zorunlu pay alım teklifi doğduğunda 6 iş günü içinde SPK'ya başvuru yapılması zorunludur."
          },
          {
            "id": 3,
            "soruMetni": "Zorunlu pay alım teklifinde teklif fiyatı belirlenirken dikkate alınan geçmiş borsa fiyatları dönemi aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Pay alım teklif zorunluluğunun doğduğu tarihten önceki 6 aylık dönemde oluşan günlük düzeltilmiş ağırlıklı ortalama borsa fiyatlarının ortalaması",
              "B": "Son 1 haftalık fiyat",
              "C": "Nominal değer (1 TL)",
              "D": "Son 3 yıllık en yüksek fiyat",
              "E": "Sadece son gün kapanış fiyatı"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 15 uyarınca teklif fiyatı, zorunluluğun doğduğu tarihten önceki 6 aylık borsa ağırlıklı ortalama fiyatından düşük olamaz."
          },
          {
            "id": 4,
            "soruMetni": "Ortaklıktan Çıkarma ve Satma Hakları Tebliği (II-27.2) uyarınca, hakim ortağın diğer ortakları ortaklıktan çıkarma hakkını kazanabilmesi için yasal oy hakkı eşiği yüzde kaçtır?",
            "secenekler": {
              "A": "%95",
              "B": "%75",
              "C": "%90",
              "D": "%80",
              "E": "%50"
            },
            "dogruCevap": "A",
            "cozum": "II-27.2 Tebliği m. 4 uyarınca oy haklarının en az %95'ine sahip olan ana ortak diğer ortakları ihraç etme (ortaklıktan çıkarma) hakkına sahip olur."
          },
          {
            "id": 5,
            "soruMetni": "Ortaklıktan Çıkarma Tebliği kapsamında, %95 oy eşiği aşıldığında azınlık ortakların paylarını hakim ortağa satma (Satma Hakkı) süresi kaç aydır?",
            "secenekler": {
              "A": "24 Ay",
              "B": "1 Ay",
              "C": "3 Ay",
              "D": "6 Ay",
              "E": "12 Ay"
            },
            "dogruCevap": "C",
            "cozum": "Tebliğ m. 6 uyarınca çıkarma ve satma hakları 3 aylık hak düşürücü süre içinde kullanılır."
          },
          {
            "id": 6,
            "soruMetni": "Önemli Nitelikteki İşlemler ve Ayrılma Hakkı Tebliği (II-23.3) uyarınca aşağıdakilerden hangisi halka açık şirketlerde Önemli Nitelikteki İşlem sayılır?",
            "secenekler": {
              "A": "Sıradan hammadde alım sözleşmesi",
              "B": "Ofis mobilyası yenilenmesi",
              "C": "Birleşme, bölünme işlemlerine taraf olunması veya tür değiştirilmesi",
              "D": "Rutine bağlı müşteri faturası kesilmesi",
              "E": "Personel maaşlarının ödenmesi"
            },
            "dogruCevap": "C",
            "cozum": "II-23.3 m. 4 uyarınca birleşme, bölünme, malvarlığının devri, faaliyet konusunun değişmesi önemli nitelikte işlemdir."
          },
          {
            "id": 7,
            "soruMetni": "Önemli Nitelikteki İşlemlerin Genel Kurulda onaylanmasında toplantı ve karar nisaplarıyla ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Basit çoğunluk yetmektedir.",
              "B": "Esas sözleşmede daha ağır nisap yoksa, genel kurul oy haklarının en az %75'inin olumlu oyu ile karar alınır.",
              "C": "Tek bir ortağın oyu yeterlidir.",
              "D": "Genel kurula gerek yoktur.",
              "E": "Yalnızca yönetim kurulu kararı yeterlidir."
            },
            "dogruCevap": "B",
            "cozum": "Tebliğ m. 8 uyarınca önemli nitelikteki işlemler genel kurulda katılan oy haklarının %75'inin olumlu oyu ile karara bağlanır."
          },
          {
            "id": 8,
            "soruMetni": "Önemli Nitelikteki İşleme İlişkin Genel Kurul toplantısına katılarak OLUMSUZ oy kullanan ve muhalefet şerhini tutanağa işleten pay sahiplerine tanınan hak hangisidir?",
            "secenekler": {
              "A": "Pay Alım Teklifi Hakkı",
              "B": "Rüçhan Hakkı",
              "C": "Ayrılma Hakkı (Paylarını şirkete geri satıp ayrılma hakkı)",
              "D": "Temettü Artırım Hakkı",
              "E": "Tasfiye Hakkı"
            },
            "dogruCevap": "C",
            "cozum": "SPKn m. 24 uyarınca önemli işleme olumsuz oy verip şerh düşen ortaklar paylarını şirkete satarak ayrılma hakkını kullanır."
          },
          {
            "id": 9,
            "soruMetni": "Ayrılma hakkı kullanım fiyatı, önemli nitelikteki işlemin kamuya açıklandığı tarihten önceki son kaç gündeki borsa ağırlıklı ortalama fiyatı olarak belirlenir?",
            "secenekler": {
              "A": "Kamuya açıklama tarihinden önceki 30 gün içinde oluşan düzeltilmiş ağırlıklı ortalama fiyat",
              "B": "Nominal tutar",
              "C": "Son 1 gündeki fiyat",
              "D": "Değerleme raporundaki en düşük fiyat",
              "E": "Son 1 yıllık fiyat"
            },
            "dogruCevap": "A",
            "cozum": "SPKn ve II-23.3 m. 10 uyarınca ayrılma hakkı fiyatı kararın açıklanmasından önceki 30 günlük borsa ortalama fiyatıdır."
          },
          {
            "id": 10,
            "soruMetni": "Sermaye Piyasası Kanunu uyarınca, Ayrılma Hakkı kullanımlarının şirketin katlanamayacağı boyutta mali yük getirmesi ihtimaline karşı Genel Kurul kararına ne eklenebilir?",
            "secenekler": {
              "A": "Ayrılma hakkının tamamen iptal edildiği hükmü",
              "B": "Borsa kapama şartı",
              "C": "Vergi muafiyeti maddesi",
              "D": "Ayrılma hakkı kullanımına bağlı üst sınır tutarı (Ayrılma hakkı maliyeti sınırı aştığında işlemden vazgeçme şartı)",
              "E": "Ortaklara ceza kesilmesi maddesi"
            },
            "dogruCevap": "D",
            "cozum": "Genel kurul kararına üst limit konulabilir; ayrılma hakkı talepleri bu limiti aşarsa şirket işlemden vazgeçebilir."
          },
          {
            "id": 11,
            "soruMetni": "Pay Tebliği (VII-128.1) uyarınca, halka açık anonim ortaklıkların bedelli sermaye artırımlarında izahname onaylanması başvurusunda hazırlanan değerleme raporları kime sunulur?",
            "secenekler": {
              "A": "Sadece rakiplere verilir.",
              "B": "Sermaye Piyasası Kuruluna sunulur ve KAP'ta ilan edilir.",
              "C": "Gizli olarak vergi dairesine sunulur.",
              "D": "Belediyeye onaylatılır.",
              "E": "Sunulma zorunluluğu yoktur."
            },
            "dogruCevap": "B",
            "cozum": "VII-128.1 sayılı Tebliğ uyarınca sermaye artırımlarında ilgili raporlar SPK onayına sunulur ve KAP'ta yayımlanır."
          },
          {
            "id": 12,
            "soruMetni": "Pay Alım Teklifi Tebliği uyarınca, zorunlu pay alım teklifinden muafiyet sağlanabilecek durumlar arasında aşağıdakilerden hangisi YER ALIR?",
            "secenekler": {
              "A": "Finansal yeniden yapılandırma veya mülkiyetin kredi karşılığı bankaya geçmesi hali",
              "B": "Genel müdürün değişmesi",
              "C": "Şirketin kâr etmesi",
              "D": "Sadece ortakların keyfi kararı",
              "E": "Borsa fiyatının yükselmesi"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 18 uyarınca bankaların alacak karşılığı pay alması veya finansal yapılandırmalarda SPK teklif zorunluluğundan muafiyet verebilir."
          },
          {
            "id": 13,
            "soruMetni": "Pay Alım Teklifinde teklif süresi (yatırımcıların kabul süresi) en az ve en fazla kaç iş günüdür?",
            "secenekler": {
              "A": "En az 15 iş günü, en fazla 45 iş günü",
              "B": "En az 10 iş günü, en fazla 20 iş günü",
              "C": "En az 1 iş günü, en fazla 5 iş günü",
              "D": "En az 2 iş günü, en fazla 3 iş günü",
              "E": "En az 30 iş günü, en fazla 60 iş günü"
            },
            "dogruCevap": "B",
            "cozum": "Tebliğ m. 17 uyarınca pay alım teklif süresi 10 iş gününden az ve 20 iş gününden fazla olamaz."
          },
          {
            "id": 14,
            "soruMetni": "Önemli Nitelikteki İşlemler Tebliği uyarınca, şirketin aktif toplamının en az yüzde kaçını oluşturan varlıkların devredilmesi veya kiraya verilmesi Önemli Nitelikte İşlem sayılır?",
            "secenekler": {
              "A": "%20",
              "B": "%30",
              "C": "%75",
              "D": "%50 ve üzeri",
              "E": "%10"
            },
            "dogruCevap": "D",
            "cozum": "Tebliğ m. 5 uyarınca aktif büyüklüğünün veya sürdürülen faaliyetlerin %50'sini aşan varlık devirleri önemli nitelikte işlemdir."
          },
          {
            "id": 15,
            "soruMetni": "Ortaklıktan çıkarma hakkını kullanan hakim ortağın satılmayan payların bedellerini nereye yatırması ZORUNLUDUR?",
            "secenekler": {
              "A": "Kendi şahsi banka hesabında tutar.",
              "B": "Takasbank nezdinde açılacak blokajlı özel hesaba yatırılır.",
              "C": "Vergi dairesine ödenir.",
              "D": "Yurt dışı hesaba aktarılır.",
              "E": "Kasa nakdi olarak tutulur."
            },
            "dogruCevap": "B",
            "cozum": "Ortaklıktan Çıkarma Tebliği uyarınca pay bedelleri nemalandırılmak üzere Takasbank nezdinde açılan özel hesaba depo edilir."
          },
          {
            "id": 16,
            "soruMetni": "Ayrılma hakkını kullanmak isteyen ortak hakkını en geç kaç gün içinde şirkete bildirmelidir?",
            "secenekler": {
              "A": "Aynı gün 1 saat içinde",
              "B": "Süre sınırı yoktur",
              "C": "1 yıl içinde",
              "D": "30 gün sonra",
              "E": "Genel Kurul tarihinden itibaren en geç 6 iş günü içinde"
            },
            "dogruCevap": "E",
            "cozum": "II-23.3 m. 9 uyarınca ayrılma hakkı kullanımı genel kurul tarihinden itibaren 6 iş günü içinde şirkete bildirilir."
          },
          {
            "id": 17,
            "soruMetni": "Halka açık bir anonim şirketin borsada işlem gören paylarını kendi isteğiyle borsa kotundan çıkarması (Kottan Çıkarma) işleminde hangi tebliğ hükümleri uygulanır?",
            "secenekler": {
              "A": "İş Kanunu",
              "B": "Karayolları Trafik Kanunu",
              "C": "Çevre Kanunu",
              "D": "İcra İflas Kanunu",
              "E": "Borsa İstanbul Korttan Çıkarma Yönergesi ve Ortaklıktan Çıkarma / Pay Alım Teklifi Tebliği"
            },
            "dogruCevap": "E",
            "cozum": "Kottan çıkarma kararlarında Borsa yönergeleri ile SPK pay alım teklifi ve hakim ortaklık düzenlemeleri esas alınır."
          },
          {
            "id": 18,
            "soruMetni": "Pay Alım Teklifinde gönüllü pay alım teklifi (Gönüllü Çağrı) yapan kişi tekliften vazgeçebilir mi?",
            "secenekler": {
              "A": "Sadece borsa kapatılırsa vazgeçer.",
              "B": "Sadece genel kurul onaylarsa vazgeçer.",
              "C": "İstediği an anında vazgeçer.",
              "D": "SPK onayı ile ve haklı sebeplerin bulunması halinde teklif süresi başlamadan önce vazgeçebilir.",
              "E": "Hiçbir şekilde vazgeçemez."
            },
            "dogruCevap": "D",
            "cozum": "Gönüllü pay alım teklifinde SPK'nın uygun görmesi şartıyla ve haklı gerekçelerle tekliften cayıma izin verilebilir."
          },
          {
            "id": 19,
            "soruMetni": "Halka açık şirketlerin kayıtlı sermaye tavanı içinde yapacakları tahsisli sermaye artırımlarında rüçhan haklarının kısıtlanması kararı hangi organ tarafından alınır?",
            "secenekler": {
              "A": "Ticaret Bakanlığı",
              "B": "Bağımsız Denetçi",
              "C": "Borsa İstanbul",
              "D": "Yönetim Kurulu (Esas sözleşmede yetki verilmişse)",
              "E": "Maliye Bakanlığı"
            },
            "dogruCevap": "D",
            "cozum": "Kayıtlı sermaye sisteminde esas sözleşme ile yetkilendirilmişse Yönetim Kurulu rüçhan haklarını kısıtlayarak sermaye artırımı yapabilir."
          },
          {
            "id": 20,
            "soruMetni": "Ortaklıktan çıkarma hakkı sürecinde değerleme raporunu hazırlayacak değerleme kuruluşunu kim seçer ve görevlendirir?",
            "secenekler": {
              "A": "Belediye Encümeni",
              "B": "Vergi Dairesi Müdürü",
              "C": "Ticaret Odası Başkanı",
              "D": "En küçük ortak",
              "E": "Şirketin Yönetim Kurulu (SPK listesindeki bağımsız değerleme kuruluşları arasından)"
            },
            "dogruCevap": "E",
            "cozum": "Tebliğ uyarınca değerleme raporu SPK tarafından yetkilendirilmiş bağımsız değerleme kuruluşlarına yönetim kurulunca hazırlattırılır."
          }
        ]
      },
      {
        "testId": 6,
        "testAdi": "Test 6: 1.4.1. Gayrimenkul Yatırım Ortaklıklarına İlişkin Esaslar Tebliği (III-48.1)",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "Gayrimenkul Yatırım Ortaklıklarına İlişkin Esaslar Tebliği (III-48.1) uyarınca, GYO'ların portföy değerinin en az yüzde kaçının gayrimenkullerden, gayrimenkul projelerinden ve gayrimenkule dayalı haklardan oluşması zorunludur?",
            "secenekler": {
              "A": "%50",
              "B": "%70",
              "C": "%90",
              "D": "%40",
              "E": "%60"
            },
            "dogruCevap": "B",
            "cozum": "III-48.1 sayılı Tebliğ m. 24 uyarınca GYO portföy değerinin en az %70'inin gayrimenkuller, gayrimenkule dayalı haklar ve gayrimenkul projelerinden oluşması zorunludur."
          },
          {
            "id": 2,
            "soruMetni": "III-48.1 sayılı Tebliğ uyarınca, Gayrimenkul Yatırım Ortaklıkları (GYO) hakkında aşağıdakilerden hangisi YASAKTIR / yapılamaz?",
            "secenekler": {
              "A": "Borsada işlem gören sermaye piyasası araçlarına yatırım yapmak",
              "B": "Katılım ve mevduat hesaplarında nakit değerlendirmek",
              "C": "Gayrimenkul projeleri geliştirmek",
              "D": "Portföylerindeki gayrimenkulleri kiraya vermek",
              "E": "Sürekli olarak gayrimenkul alım-satımı komisyonculuğu ve inşaat taahhüt işleri yapmak"
            },
            "dogruCevap": "E",
            "cozum": "GYO'lar inşaat taahhüt işleri yapamazlar, kendi personeli ve iş makineleriyle inşaat yapamaz ve gayrimenkul alım satım komisyonculuğu yürütemezler."
          },
          {
            "id": 3,
            "soruMetni": "GYO Tebliği (III-48.1) uyarınca, bir GYO'nun alabileceği kısa ve uzun vadeli kredilerin (borçlanma tutarı) toplamı hesap dönemi sonundaki özkaynaklarının en fazla kaç katı olabilir?",
            "secenekler": {
              "A": "10 Katı",
              "B": "5 Katı",
              "C": "3 Katı",
              "D": "1 Katı",
              "E": "2 Katı"
            },
            "dogruCevap": "B",
            "cozum": "Tebliğ m. 31 uyarınca GYO'ların kullanabilecekleri toplam kredi tutarı son bilançodaki özkaynaklarının 5 katını aşamaz."
          },
          {
            "id": 4,
            "soruMetni": "GYO portföyünde yer alan veya portföye alınacak olan gayrimenkullerin değerlemesinin SPK listesinde yer alan gayrimenkul değerleme kuruluşlarına yaptırılması zorunluluğuyla ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Portföye giren her bir gayrimenkul için alım veya satım öncesinde ve ayrıca her takvim yılı sonunda değerleme yaptırılması zorunludur.",
              "B": "Değerleme raporları KAP'ta yayımlanmaz.",
              "C": "Değerleme raporu alınması isteğe bağlıdır.",
              "D": "Sadece 5 yılda bir değerleme yaptırılır.",
              "E": "Değerleme sadece şirket muhasebecisi tarafından yapılır."
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 34 uyarınca alım, satım, kiralama işlemlerinde ve her yıl sonu itibariyle yetkili değerleme kuruluşundan ekspertiz raporu alınması şarttır."
          },
          {
            "id": 5,
            "soruMetni": "GYO Tebliği uyarınca, halka açılmak üzere kurulan veya dönüşen GYO'ların ödenmiş sermayelerinin en az yüzde kaçını belirlenen süre içinde halka arz etmeleri zorunludur?",
            "secenekler": {
              "A": "%18",
              "B": "%45",
              "C": "%7",
              "D": "%25",
              "E": "%30"
            },
            "dogruCevap": "D",
            "cozum": "Tebliğ m. 11 uyarınca GYO'ların çıkarılmış sermayelerinin en az %25'inin halka arz edilmesi zorunludur."
          },
          {
            "id": 6,
            "soruMetni": "GYO'ların portföylerindeki varlıkların ve gayrimenkul tapu belgelerinin emniyeti için hangi kuruluş nezdinde portföy saklama hizmeti alınması ZORUNLUDUR?",
            "secenekler": {
              "A": "Tapu ve Kadastro Genel Müdürlüğü Bölge Kiralama Bürosu",
              "B": "Ticaret Odası",
              "C": "SPK tarafından yetkilendirilmiş bir Portföy Saklayıcısı Kurum (Bankalar / Takasbank)",
              "D": "Belediye İmar Müdürlüğü",
              "E": "Şirket Avukatının Şahsi Kasası"
            },
            "dogruCevap": "C",
            "cozum": "Tebliğ m. 36 uyarınca GYO varlıkları ve hakları yetkili portföy saklayıcısı nezdinde saklanır ve izlenir."
          },
          {
            "id": 7,
            "soruMetni": "Bir GYO'nun tek bir projeye veya gayrimenkule yapabileceği yatırım tutarı, toplam portföy değerinin en fazla yüzde kaçını oluşturabilir?",
            "secenekler": {
              "A": "%30 ile sınırlıdır.",
              "B": "Tek projeye yatırım yapılması tamamen yasaktır.",
              "C": "%20 ile sınırlıdır.",
              "D": "%10 ile sınırlıdır.",
              "E": "Sınırlama yoktur (Tamamı tek projeye yatırılabilir ancak kısıtlama özel hallerde değerlendirilir)."
            },
            "dogruCevap": "E",
            "cozum": "Tebliğde genel GYO'lar için tek bir projeye yatırım oranında bir azami üst sınır kısıtlaması konulmamıştır (müteahhitlik yasağı saklıdır)."
          },
          {
            "id": 8,
            "soruMetni": "Altyapı gayrimenkullerine ve projelerine yatırım yapmak üzere münhasıran kurulan GYO türüne ne ad verilir?",
            "secenekler": {
              "A": "Katılım GYO",
              "B": "Girişim Sermayesi GYO",
              "C": "Münhasıran Altyapı Gayrimenkul Yatırım Ortaklığı",
              "D": "Serbest GYO",
              "E": "Sektörel MKYO"
            },
            "dogruCevap": "C",
            "cozum": "Altyapı yatırım ve hizmetlerine yatırım yapan GYO'lar 'Altyapı GYO' olarak özel düzenlemeye tabidir."
          },
          {
            "id": 9,
            "soruMetni": "GYO Tebliği uyarınca, GYO portföyündeki gayrimenkuller üzerinde üçüncü kişiler lehine ipotek veya rehin tesis edilmesine ilişkin kısıtlama hangisidir?",
            "secenekler": {
              "A": "Portföydeki varlıklar üzerinde yalnızca portföye gayrimenkul alımının veya finansmanının temini amacıyla sınırlı olarak ipotek tesis edilebilir.",
              "B": "İpotek konulması tamamen yasaktır.",
              "C": "SPK izni olmadan her türlü ipotek serbesttir.",
              "D": "Üçüncü şahısların tüm borçları için serbestçe ipotek verilebilir.",
              "E": "Sadece şirket ortaklarının şahsi borçlarına ipotek verilir."
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 30 uyarınca GYO varlıkları üzerinde sadece kendi gayrimenkul alımı veya proje finansmanı amacıyla ipotek/rehin tesis edilebilir; 3. kişiler lehine garanti verilemez."
          },
          {
            "id": 10,
            "soruMetni": "GYO'ların portföy sınırlamalarına aykırılık oluşması durumunda (örneğin gayrimenkul oranının %70'in altına düşmesi), SPK tarafından aykırılığın giderilmesi için verilen uyum süresi azami kaç aydır?",
            "secenekler": {
              "A": "6 Ay",
              "B": "12 Ay",
              "C": "1 Ay",
              "D": "Süre verilmez",
              "E": "3 Ay (Gerektiğinde ilave 3 ay uzatılabilir)"
            },
            "dogruCevap": "E",
            "cozum": "Tebliğ m. 39 uyarınca portföy sınırlamalarının ihlali durumunda SPK ihlalin giderilmesi için 3 ay süre verir."
          },
          {
            "id": 11,
            "soruMetni": "Halka açık bir GYO'nun kâr payı (temettü) dağıtım politikasına ilişkin SPK tebliğ esasları uyarınca aşağıdakilerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Kârın tamamı devlete vergi olarak ödenir.",
              "B": "GYO'lar kâr dağıtım politikalarını Genel Kurul onayına sunar ve internet sitesinde açıklar.",
              "C": "GYO'ların kâr dağıtması kanunen yasaktır.",
              "D": "Dağıtım sadece hisse senedi olarak yapılır.",
              "E": "Kâr dağıtımı yapılmaz."
            },
            "dogruCevap": "B",
            "cozum": "GYO'lar kâr dağıtım ilkelerini belirleyerek Genel Kurulda ortakların onayına sunmakla yükümlüdür."
          },
          {
            "id": 12,
            "soruMetni": "GYO'ların teminat, kefalet ve ipotek verilmesine ilişkin sınırlamalara aykırı hareket etmeleri halinde sorumluluk kimlere aittir?",
            "secenekler": {
              "A": "MKK çalışanları",
              "B": "İşlemde kararı ve imzası bulunan Yönetim Kurulu Üyeleri",
              "C": "Sadece tapu memuru",
              "D": "Borsa güvenlik görevlileri",
              "E": "Gayrimenkulü satan üçüncü şahıs"
            },
            "dogruCevap": "B",
            "cozum": "Usulsüz kefalet ve garanti işlemlerinde hukuki ve cezai sorumluluk kararı alan yönetim kurulu üyelerine aittir."
          },
          {
            "id": 13,
            "soruMetni": "GYO Tebliği uyarınca, henüz tamamlanmamış veya projelendirilmemiş olan arsa ve arazilerin GYO portföyündeki oranı en fazla yüzde kaç olabilir?",
            "secenekler": {
              "A": "%20",
              "B": "%10",
              "C": "%5",
              "D": "%70",
              "E": "%50"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 24 uyarınca üzerine proje geliştirilmeyen arsa ve arazilerin portföy değerine oranı %20'yi aşamaz."
          },
          {
            "id": 14,
            "soruMetni": "GYO'ların yabancı para cinsinden gayrimenkul yatırımı veya yurt dışı gayrimenkul yatırımı yapma sınır eşiği portföy değerinin en fazla yüzde kaçıdır?",
            "secenekler": {
              "A": "%25",
              "B": "%90",
              "C": "%75",
              "D": "%49",
              "E": "%10"
            },
            "dogruCevap": "D",
            "cozum": "Tebliğ m. 24 uyarınca GYO'ların yurt dışında bulunan gayrimenkullere ve gayrimenkul şirketlerine yapacağı yatırım oranı portföyün %49'unu aşamaz."
          },
          {
            "id": 15,
            "soruMetni": "Aşağıdakilerden hangisi GYO'ların esas sözleşmesinde bulunması zorunlu olan hususlardan biri DEĞİLDİR?",
            "secenekler": {
              "A": "Yönetim kurulu üye sayısı ve seçim şartları",
              "B": "Sermaye ve payların türü",
              "C": "Şirketin tüm çalışanlarının sendika üyesi olma zorunluluğu",
              "D": "Kayıtlı sermaye tavanı tutarı",
              "E": "Faaliyet konusunun GYO tebliğine uygunluğu"
            },
            "dogruCevap": "C",
            "cozum": "Çalışanların sendika üyeliği gibi hususlar esas sözleşmenin zorunlu GYO unsuru değildir."
          },
          {
            "id": 16,
            "soruMetni": "GYO Tebliği uyarınca, GYO portföyündeki bir gayrimenkulün ekspertiz (değerleme) değerinin altında bir fiyatla satılabilmesi için ne yapılması gerekir?",
            "secenekler": {
              "A": "Satış işlemi yapılamaz.",
              "B": "Tapu harcı iptal edilir.",
              "C": "SPK Başkanından özel izin mektubu alınır.",
              "D": "Yönetim kurulu kararı alınmalı ve gerekçesi derhal KAP'ta yayımlanmalıdır.",
              "E": "Genel kurulun oy birliği kararı gerekir."
            },
            "dogruCevap": "D",
            "cozum": "Değerleme tutarının altındaki satışlarda yönetim kurulu karar alarak özel durum açıklaması ile gerekçesini KAP'ta duyurur."
          },
          {
            "id": 17,
            "soruMetni": "GYO'ların tasfiye edilmesi veya GYO statüsünden çıkması durumunda SPK'ya başvuru şartıyla ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Esas sözleşme değişikliği için SPK'dan uygun görüş alınması zorunludur.",
              "B": "Tasfiye işlemi sadece mahkeme kararıyla durdurulabilir.",
              "C": "Şirketin tüm malları Hazineye devredilir.",
              "D": "SPK'ya bilgi vermeden doğrudan tasfiye olunur.",
              "E": "Dönüşüm imkânı bulunmamaktadır."
            },
            "dogruCevap": "A",
            "cozum": "GYO statüsünden çıkış veya dönüşüm esas sözleşme değişikliği niteliğinde olup SPK uygun görüşüne tabidir."
          },
          {
            "id": 18,
            "soruMetni": "GYO Tebliği uyarınca, ortaklığın sermayesini temsil eden payların devriyle ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Devir işlemleri sadece noterden yapılır.",
              "B": "Borsadaki payların satışı yasaktır.",
              "C": "Halka açık payların devri serbesttir; imtiyazlı pay devirleri SPK iznine tabidir.",
              "D": "Pay devri için tüm ortakların onayı şarttır.",
              "E": "Paylar devredilemez."
            },
            "dogruCevap": "C",
            "cozum": "Kuruculara ait veya imtiyazlı pay devirleri SPK iznine tabidir, borsadaki paylar ise serbestçe devredilir."
          },
          {
            "id": 19,
            "soruMetni": "GYO'ların yıllık faaliyet raporlarında Kurumsal Yönetim Uyum Raporunun yer alması ZORUNLU mudur?",
            "secenekler": {
              "A": "Sadece ortaklar isterse yazılır.",
              "B": "Hayır, GYO'lar kurumsal yönetimden muaftır.",
              "C": "Sadece 10 yılda bir eklenir.",
              "D": "İsteğe bağlıdır.",
              "E": "Evet, kurumsal yönetim ilke kararlarına uyum ve açıklama raporu faaliyet raporunda yer almalıdır."
            },
            "dogruCevap": "E",
            "cozum": "Halka açık tüm GYO'lar Kurumsal Yönetim İlkelerine uymak ve faaliyet raporunda uyum raporu yayımlamakla yükümlüdür."
          },
          {
            "id": 20,
            "soruMetni": "GYO'ların iş yapacağı bağımsız değerleme kuruluşunun seçimi kim tarafından yapılır?",
            "secenekler": {
              "A": "Genel Müdür tarafından şifahen seçilir.",
              "B": "Belediye tarafından atanır.",
              "C": "Borsa güvenlik görevlileri seçer.",
              "D": "Yönetim Kurulu tarafından her yılın ilk ayı içinde kararlaştırılır ve KAP'ta ilan edilir.",
              "E": "Kiracılar tarafından seçilir."
            },
            "dogruCevap": "D",
            "cozum": "Değerleme kuruluşu seçimi her yıl ocak ayı içinde yönetim kurulunca yapılıp KAP'ta duyurulur."
          }
        ]
      },
      {
        "testId": 7,
        "testAdi": "Test 7: 1.4.2. Menkul Kıymet Yatırım Ortaklıklarına İlişkin Esaslar Tebliği (III-48.5)",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "Menkul Kıymet Yatırım Ortaklıklarına İlişkin Esaslar Tebliği (III-48.5) uyarınca, MKYO'ların temel faaliyet konusu aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "İthalat ve ihracat yapmak",
              "B": "Mevduat toplamak ve kredi vermek",
              "C": "Müteahhitlik ve inşaat işleri yapmak",
              "D": "Doğrudan gayrimenkul alıp kiraya vermek",
              "E": "Sermaye piyasası araçları ile kıymetli madenlerden oluşan portföyü işletmek"
            },
            "dogruCevap": "E",
            "cozum": "III-48.5 m. 4 uyarınca MKYO'ların faaliyet konusu sermaye piyasası araçları, ters repo, nakit ve kıymetli maden portföyünü kolektif olarak işletmektir."
          },
          {
            "id": 2,
            "soruMetni": "MKYO Tebliği (III-48.5) uyarınca, MKYO'ların tek bir ihraççı ortaklığın sermaye piyasası araçlarına yatırabileceği tutar portföy değerinin en fazla yüzde kaçı olabilir?",
            "secenekler": {
              "A": "%5",
              "B": "%10",
              "C": "%15",
              "D": "%20",
              "E": "%40"
            },
            "dogruCevap": "C",
            "cozum": "Tebliğ m. 22 uyarınca MKYO'lar tek bir ortaklığın ihraç ettiği sermaye piyasası araçlarına portföy değerinin en fazla %15'ini yatırabilir."
          },
          {
            "id": 3,
            "soruMetni": "MKYO Tebliği uyarınca, MKYO'ların tek bir bankada değerlendirebileceği mevduat veya katılım hesabı tutarı portföy değerinin azami yüzde kaçıdır?",
            "secenekler": {
              "A": "%8",
              "B": "%12",
              "C": "%15",
              "D": "%35",
              "E": "%25"
            },
            "dogruCevap": "C",
            "cozum": "Tebliğ m. 22 uyarınca tek bir bankadaki mevduat/katılım hesabı portföy değerinin %15'ini geçemez."
          },
          {
            "id": 4,
            "soruMetni": "MKYO'ların kredi almak suretiyle borçlanabilecekleri tutarın azami sınırı hesap dönemindeki özkaynaklarının yüzde kaçını aşamaz?",
            "secenekler": {
              "A": "%100",
              "B": "%5",
              "C": "%20",
              "D": "%200",
              "E": "%50"
            },
            "dogruCevap": "C",
            "cozum": "Tebliğ m. 25 uyarınca MKYO'ların alabileceği kredilerin toplamı özkaynaklarının %20'sini aşamaz."
          },
          {
            "id": 5,
            "soruMetni": "MKYO'ların portföy değerini ve net aktif değerini hesaplama ve ilan etme sıklığı aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Hesaplama yapılmaz.",
              "B": "Ayda bir kez hesaplanır.",
              "C": "Yılda bir kez hesaplanır.",
              "D": "Haftada bir kez hesaplanır.",
              "E": "Her iş günü (günlük olarak) hesaplanır ve ilan edilir."
            },
            "dogruCevap": "E",
            "cozum": "Tebliğ m. 28 uyarınca MKYO'lar her iş günü itibariyle portföy değerini ve birim pay değerini hesaplamakla yükümlüdür."
          },
          {
            "id": 6,
            "soruMetni": "III-48.5 sayılı Tebliğ uyarınca, MKYO'ların çıkarılmış sermayelerinin en az yüzde kaçını belirlenen süre içinde halka arz etmeleri zorunludur?",
            "secenekler": {
              "A": "%14",
              "B": "%22",
              "C": "%8",
              "D": "%25",
              "E": "%38"
            },
            "dogruCevap": "D",
            "cozum": "Tebliğ m. 11 uyarınca MKYO'ların çıkarılmış sermayelerinin en az %25'inin halka arz edilmesi zorunludur."
          },
          {
            "id": 7,
            "soruMetni": "MKYO'ların portföylerine alabilecekleri sermaye piyasası araçlarının alım satımlarının nerede yapılması ZORUNLUDUR?",
            "secenekler": {
              "A": "Borsa kanalından yapılması zorunludur (Yatırım fonu katılma payları hariç).",
              "B": "Tezgahüstü serbest piyasadan yapılır.",
              "C": "Yurt dışı karaborsadan yapılır.",
              "D": "İlan panosundan satılır.",
              "E": "Şirket merkezinde nakit satılır."
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 21 uyarınca alım satımların borsa kanalıyla yapılması esastır."
          },
          {
            "id": 8,
            "soruMetni": "Aşağıdakilerden hangisi MKYO'ların yapamayacağı iş ve işlemlerden biridir?",
            "secenekler": {
              "A": "BİST payları almak",
              "B": "Açığa satış yapmak, ödünç menkul kıymet almak ve vermek hariç portföyünü teminat göstermek",
              "C": "Devlet iç borçlanma senedi almak",
              "D": "Yatırım fonu katılma payı almak",
              "E": "Ters repo yapmak"
            },
            "dogruCevap": "B",
            "cozum": "MKYO'lar mevzuatta izin verilen haller dışında portföylerindeki varlıkları teminat gösteremez veya rehnedemezler."
          },
          {
            "id": 9,
            "soruMetni": "MKYO'ların portföy yönetim hizmetini dışarıdan bir Portföy Yönetim Şirketinden (PYŞ) alması durumunda imzalanan sözleşmeye ne ad verilir?",
            "secenekler": {
              "A": "Acentelik Sözleşmesi",
              "B": "Gizlilik Sözleşmesi",
              "C": "Kira Sözleşmesi",
              "D": "Franchise Sözleşmesi",
              "E": "Portföy Yönetim Sözleşmesi"
            },
            "dogruCevap": "E",
            "cozum": "MKYO'lar portföylerini bir PYŞ'ye yönetdirebilir ve bu kapsamda Portföy Yönetim Sözleşmesi akdedilir."
          },
          {
            "id": 10,
            "soruMetni": "MKYO'ların sermaye artırımlarında rüçhan haklarının kısıtlanması veya primli pay ihracı yapılması kimin onayına tabidir?",
            "secenekler": {
              "A": "Sadece Şirket Genel Müdürünün kararı",
              "B": "SPK Onayı ve Genel Kurul Kararı",
              "C": "Merkez Bankası izni",
              "D": "Valilik oluru",
              "E": "Borsa Güvenlik Amirinin onayı"
            },
            "dogruCevap": "B",
            "cozum": "Sermaye artırımlarında rüçhan hakkı kısıtlaması esas sözleşme ve SPK onayına tabidir."
          },
          {
            "id": 11,
            "soruMetni": "MKYO'ların halka arz edilen paylarının borsa pazarında işlem görmesi zorunlu olan borsa işleticisi kimdir?",
            "secenekler": {
              "A": "Borsa İstanbul A.Ş.",
              "B": "Nasdaq",
              "C": "Londra Borsası",
              "D": "Frankfurt Borsası",
              "E": "Tokyo Borsası"
            },
            "dogruCevap": "A",
            "cozum": "Türkiye'de kurulan MKYO paylarının Borsa İstanbul nezdinde kote olması ve işlem görmesi şarttır."
          },
          {
            "id": 12,
            "soruMetni": "MKYO portföyündeki varlıkların saklanması hangi kuruluş nezdinde müşteri/ortaklık bazında yürütülür?",
            "secenekler": {
              "A": "İçişleri Bakanlığı",
              "B": "Şirket Yönetim Kurulu Başkanının Kasası",
              "C": "Noterlik",
              "D": "Portföy Saklayıcısı Kurum (Takasbank / Yetkili Bankalar)",
              "E": "İl Emniyet Müdürlüğü"
            },
            "dogruCevap": "D",
            "cozum": "Tebliğ uyarınca MKYO portföy varlıkları yetkili portföy saklayıcısı nezdinde tutulur."
          },
          {
            "id": 13,
            "soruMetni": "MKYO'ların portföy değerine ilişkin oran sınırlamalarını ihlal etmesi durumunda SPK'nın uyum için tanıdığı süre azami kaç aydır?",
            "secenekler": {
              "A": "1 Yıl",
              "B": "9 Ay",
              "C": "2 Ay",
              "D": "3 Ay (Yasal İnceleme Süreci Dahil)",
              "E": "15 Gün"
            },
            "dogruCevap": "D",
            "cozum": "Portföy kısıtlaması ihlallerinde SPK tarafından uyum sağlanması için 3 ay süre verilir."
          },
          {
            "id": 14,
            "soruMetni": "Aşağıdakilerden hangisi MKYO'ların kurucuları ve ortaklarında aranan şartlardan biri DEĞİLDİR?",
            "secenekler": {
              "A": "Tasfiyeye tabi tutulan kurumlarda kontrol sahibi olmaması",
              "B": "Müflis olmaması ve mali güce sahip olması",
              "C": "Milletvekili olma zorunluluğu",
              "D": "Sermaye piyasası suçlarından hüküm giymemiş olması",
              "E": "Gerekli dürüstlük ve itibara sahip olması"
            },
            "dogruCevap": "C",
            "cozum": "Milletvekili olma gibi bir kurucu şartı sermaye piyasası mevzuatında yer almaz."
          },
          {
            "id": 15,
            "soruMetni": "MKYO'ların hazırlayacakları finansal tabloların bağımsız denetimi hangi periyotlarda zorunludur?",
            "secenekler": {
              "A": "6 aylık ara dönem ve yıllık dönemlerde bağımsız denetim zorunludur.",
              "B": "Sadece 10 yılda bir yapılır.",
              "C": "Bağımsız denetim yapılmaz.",
              "D": "Sadece ay sonunda yapılır.",
              "E": "İsteğe bağlıdır."
            },
            "dogruCevap": "A",
            "cozum": "MKYO'lar 6 aylık ve 12 aylık finansal tablolarını bağımsız denetimden geçirmekle yükümlüdür."
          },
          {
            "id": 16,
            "soruMetni": "MKYO'ların tasfiye kararı alması veya başka bir şirkete dönüşmesi durumunda SPK onayının alınması ZORUNLU mudur?",
            "secenekler": {
              "A": "Borsa kararı yeterlidir.",
              "B": "Sadece belediyeye bildirilir.",
              "C": "Gizli tutulur.",
              "D": "Evet, SPK'dan uygun görüş ve onay alınması zorunludur.",
              "E": "Hayır, onay alınmaz."
            },
            "dogruCevap": "D",
            "cozum": "Statü değişikliği ve tasfiye kararları SPK onayına tabidir."
          },
          {
            "id": 17,
            "soruMetni": "MKYO'larda yönetim kurulunda yer alan üyelerin çoğunluğunun hangi niteliklere sahip olması şarttır?",
            "secenekler": {
              "A": "Şirket çalışanı olmaması",
              "B": "Sadece yabancı uyruklu olması",
              "C": "Sadece hukuk fakültesi mezunu olması",
              "D": "Tıp doktoru olması",
              "E": "Mesleki tecrübeye sahip ve lisanslı kişilerden oluşması"
            },
            "dogruCevap": "E",
            "cozum": "Yönetim kurulu üyelerinin sermaye piyasasında tecrübeli ve dürüstlük şartlarını taşıması şarttır."
          },
          {
            "id": 18,
            "soruMetni": "MKYO portföyündeki varlıkların değerlemesinde borsada işlem gören paylar için hangi fiyat esas alınır?",
            "secenekler": {
              "A": "Gelecek yıl tahmini fiyatı",
              "B": "Değerleme günündeki borsa kapanış veya ağırlıklı ortalama fiyatı",
              "C": "Nominal fiyat (1 TL)",
              "D": "En yüksek tarihi fiyat",
              "E": "Alış maliyet fiyatı"
            },
            "dogruCevap": "B",
            "cozum": "Borsada işlem gören varlıklar değerleme günündeki borsa kapanış/ortalama fiyatı ile değerlenir."
          },
          {
            "id": 19,
            "soruMetni": "MKYO'ların yıllık net dağıtılabilir kârlarının ortaklara dağıtılması hususunda kararı veren organ hangisidir?",
            "secenekler": {
              "A": "Borsa Direktörü",
              "B": "Genel Kurul",
              "C": "SPK Başkanı",
              "D": "Portföy Yöneticisi",
              "E": "Milli Piyango Şube Müdürü"
            },
            "dogruCevap": "B",
            "cozum": "Kâr dağıtım kararı yönetim kurulunun teklifi üzerine Genel Kurul tarafından alınır."
          },
          {
            "id": 20,
            "soruMetni": "MKYO'ların bilançolarında yer alan yedek akçelerin kullanımı TTK ve SPK hükümleri uyarınca nereye tabidir?",
            "secenekler": {
              "A": "Kanuni yedek akçeler ayrıldıktan sonra kalan kısım Genel Kurul kararıyla dağıtılabilir veya sermayeye eklenebilir.",
              "B": "Sadece yönetim kuruluna prim dağıtılır.",
              "C": "Yedek akçe devlete aktarılır.",
              "D": "Yedek akçeler tamamen harcanır.",
              "E": "Yedek akçe ayrılması yasaktır."
            },
            "dogruCevap": "A",
            "cozum": "TTK m. 519 ve SPK kuralları gereği yedek akçe ayırımları yasal esaslara tabidir."
          }
        ]
      },
      {
        "testId": 8,
        "testAdi": "Test 8: 1.4.3. Portföy Yönetim Şirketleri ve Bu Şirketlerin Faaliyetlerine İlişkin Esaslar Tebliği (III-55.1)",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "Portföy Yönetim Şirketleri Tebliği (III-55.1) uyarınca, PYŞ'lerin ana faaliyet konusu aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Gayrimenkul müteahhitliği",
              "B": "Sigorta acenteliği",
              "C": "Kolektif Portföy Yöneticiliği (Yatırım fonları ve yatırım ortaklıklarının portföylerini yönetmek)",
              "D": "Mevduat kabulü ve kredi kullandırma",
              "E": "Döviz bürosu işletmeciliği"
            },
            "dogruCevap": "C",
            "cozum": "III-55.1 m. 4 uyarınca PYŞ'lerin ana faaliyeti yatırım fonları ve yatırım ortaklıklarının portföylerinin yönetilmesidir (Kolektif Portföy Yöneticiliği)."
          },
          {
            "id": 2,
            "soruMetni": "III-55.1 sayılı Tebliğ uyarınca, PYŞ'lerin ana faaliyet konusuna ek olarak sunabileceği yan hizmetler (yan faaliyetler) arasında aşağıdakilerden hangisi YER ALIR?",
            "secenekler": {
              "A": "Bireysel portföy yöneticiliği, yatırım danışmanlığı ve katılma payı alım satımına aracılık",
              "B": "Factoring işlemleri",
              "C": "Banka şubesi açma",
              "D": "Kredi kartı çıkarma",
              "E": "Mali müşavirlik bürosu işletme"
            },
            "dogruCevap": "A",
            "cozum": "PYŞ'ler kolektif portföy yöneticiliğinin yanı sıra bireysel portföy yöneticiliği ve yatırım danışmanlığı hizmeti de verebilirler."
          },
          {
            "id": 3,
            "soruMetni": "PYŞ Tebliği uyarınca, portföy yönetim şirketinde görev yapacak portföy yöneticilerinin haiz olması gereken mesleki lisans belgesi aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Türev Araçlar Lisansı",
              "B": "Kredi Derecelendirme Lisansı",
              "C": "Sadece Düzey 1 Lisansı",
              "D": "SPL Portföy Yöneticiliği Lisansı veya SPL Düzey 3 Lisansı",
              "E": "Gayrimenkul Değerleme Lisansı"
            },
            "dogruCevap": "D",
            "cozum": "Tebliğ m. 15 uyarınca portföy yöneticilerinin SPL Portföy Yöneticiliği veya Düzey 3 lisansına sahip olması şarttır."
          },
          {
            "id": 4,
            "soruMetni": "PYŞ'lerin yönettikleri portföylerdeki varlıkları kendi özvarlıklarından ayırma prensibiyle ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Fon ve müşterilere ait varlıklar PYŞ'nin malvarlığından ayrıdır; PYŞ borçları nedeniyle haczedilemez, rehnedilemez ve iflas masasına dahil edilemez.",
              "B": "Müşteri varlıkları PYŞ bilançosunda gösterilir.",
              "C": "PYŞ iflas ederse müşteri parası yok olur.",
              "D": "Müşteri varlıkları ortakların kişisel hesabına aktarılır.",
              "E": "PYŞ borçları için müşteri varlıklarına el konulabilir."
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 56 uyarınca yönetilen portföyler tamamen bağımsız olup şirket borçları nedeniyle haczedilemez."
          },
          {
            "id": 5,
            "soruMetni": "PYŞ'lerin kuruluş ve faaliyet izni alabilmesi için SPK tarafından belirlenen asgari ödenmiş sermaye yükümlülüğünün ne şekilde ödenmesi şarttır?",
            "secenekler": {
              "A": "Senet karşılığı ödenmesi",
              "B": "10 yıl sonra ödenmesi",
              "C": "Arsa veya gayrimenkul olarak ödenmesi",
              "D": "Çekle taksitlendirilmesi",
              "E": "Nakit olarak ve her türlü muvazaadan arı olarak ödenmesi"
            },
            "dogruCevap": "E",
            "cozum": "PYŞ başlangıç sermayesinin tamamının nakden ve muvazaasız ödenmiş olması zorunludur."
          },
          {
            "id": 6,
            "soruMetni": "PYŞ nezdinde iç denetim, risk yönetim ve denetim sistemlerinin kurulması kimin sorumluluğundadır?",
            "secenekler": {
              "A": "Dışarıdaki güvenlik firması",
              "B": "PYŞ Yönetim Kurulu",
              "C": "Stajyer çalışanlar",
              "D": "Borsa İstanbul",
              "E": "Portföy Saklayıcısı Kurum"
            },
            "dogruCevap": "B",
            "cozum": "Tebliğ m. 19 uyarınca iç denetim ve risk yönetim sistemlerinin kurulması ve yürütülmesi Yönetim Kurulunun sorumluluğundadır."
          },
          {
            "id": 7,
            "soruMetni": "PYŞ'lerin yönettikleri portföyler için aracı kurumlara ödedikleri komisyon ve giderlerle ilgili aşağıdakilerden hangisi YASAKTIR?",
            "secenekler": {
              "A": "Saklama ücreti ödenmesi",
              "B": "Makul düzeyde borsa komisyonu ödenmesi",
              "C": "Portföy işlemlerinden dolayı PYŞ yöneticilerine veya şirket lehine örtülü komisyon, iskonto ve menfaat sağlanması",
              "D": "İzahnamede yazan kurallara uyulması",
              "E": "Takas masraflarının karşılanması"
            },
            "dogruCevap": "C",
            "cozum": "Tebliğ m. 27 uyarınca PYŞ'ler yaptıkları işlemlerden dolayı kendi lehlerine komisyon ve iskonto sağlayamazlar."
          },
          {
            "id": 8,
            "soruMetni": "Aşağıdakilerden hangisi PYŞ yönetim kurulu üyelerinde aranan şartlardan biridir?",
            "secenekler": {
              "A": "En az 80 yaşında olması",
              "B": "Sadece yabancı dilde eğitim almış olması",
              "C": "Spor kulübü başkanı olması",
              "D": "Sadece gayrimenkul sahibi olması",
              "E": "Müflis olmaması, sermaye piyasasında tecrübeli ve dürüstlük şartını taşıması"
            },
            "dogruCevap": "E",
            "cozum": "Tebliğ m. 12 uyarınca yönetim kurulu üyelerinin mali güç, mesleki itibar ve müflis olmama şartlarını taşıması zorunludur."
          },
          {
            "id": 9,
            "soruMetni": "PYŞ'lerin kurabileceği Girişim Sermayesi Portföy Yönetim Şirketi veya Gayrimenkul Portföy Yönetim Şirketi gibi münhasıran kurulan şirket türlerinde asgari sermaye şartı nasıl uygulanır?",
            "secenekler": {
              "A": "Sermaye şartı aranmaz.",
              "B": "Sermaye Hazinece karşılanır.",
              "C": "Sadece Euro cinsinden ödenir.",
              "D": "Münhasıran GSYF veya GYF yöneten şirketler için indirimli asgari sermaye şartı uygulanır.",
              "E": "Sermaye 10 katına çıkarılır."
            },
            "dogruCevap": "D",
            "cozum": "Tebliğ düzenlemelerinde münhasıran gayrimenkul veya girişim fonu yöneten şirketler için özel sermaye tutarları belirlenmiştir."
          },
          {
            "id": 10,
            "soruMetni": "PYŞ'lerin müşteri portföylerini yönetirken müşterinin risk ve getiri tercihlerini tespit etmek amacıyla uyguladıkları test hangisidir?",
            "secenekler": {
              "A": "Kişilik Envanteri Testi",
              "B": "IQ Testi",
              "C": "Sürücü Ehliyet Testi",
              "D": "Uygunluk Testi ve Yerindelik Testi",
              "E": "Psikoteknik Değerlendirme Testi"
            },
            "dogruCevap": "D",
            "cozum": "Müşteri sınıflandırması ve portföy yönetiminde Uygunluk ve Yerindelik (Suitability) testlerinin uygulanması şarttır."
          },
          {
            "id": 11,
            "soruMetni": "PYŞ'nin faaliyet izninin SPK tarafından iptal edilmesi durumunda yönetilen fonlara ne olur?",
            "secenekler": {
              "A": "Fonların yönetimi SPK tarafından başka bir PYŞ'ye devredilir veya fonlar tasfiye edilir.",
              "B": "Fonlar yok sayılır.",
              "C": "Fon parası devlet hazinesine kalır.",
              "D": "İşlemler süresiz durur.",
              "E": "Fonlar şirket ortaklarına dağıtılır."
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 35 uyarınca izin iptalinde yatırımların korunması için fonlar başka bir yetkili PYŞ'ye devredilir."
          },
          {
            "id": 12,
            "soruMetni": "PYŞ'lerin özkaynaklarının SPK tarafından belirlenen özkaynak yeterliliği sınırının altına düşmesi halinde ne kadar süre verilir?",
            "secenekler": {
              "A": "SPK tarafından belirlenen süre içinde (genellikle 3 ay) özkaynak açığının kapatılması istenir.",
              "B": "Derhal mahkemeye verilir.",
              "C": "Cezai işlem yapılmaz.",
              "D": "Şirkete el konulur.",
              "E": "Süre verilmez."
            },
            "dogruCevap": "A",
            "cozum": "Sermaye yeterliliği eksikliğinde kuruma eksikliği tamamlaması için süre tanınır."
          },
          {
            "id": 13,
            "soruMetni": "PYŞ'lerin reklam ve ilanlarında yatırımcılara garanti kâr veya getiri taahhüdünde bulunması yasak mıdır?",
            "secenekler": {
              "A": "Hayır, istenilen getiri garanti edilebilir.",
              "B": "Sadece sözlü garanti verilebilir.",
              "C": "Evet, kesin kâr veya getiri taahhüdünde bulunulması KESİNLİKLE YASAKTIR.",
              "D": "Reklam yapılması yasaktır.",
              "E": "Sadece yurt dışında garanti verilir."
            },
            "dogruCevap": "C",
            "cozum": "Tebliğ m. 29 uyarınca yatırımcılara garanti getiri taahhüt edilmesi ve yanıltıcı reklam yapılması kesinlikle yasaktır."
          },
          {
            "id": 14,
            "soruMetni": "PYŞ genel müdürünün mesleki tecrübe şartı en az kaç yıl olmalıdır?",
            "secenekler": {
              "A": "Sadece üniversite mezunu olması yeterlidir",
              "B": "Finansal piyasalar alanında en az 7 yıl tecrübeli olması",
              "C": "1 yıl tecrübe",
              "D": "Tecrübe şartı yoktur",
              "E": "20 yıl tecrübe"
            },
            "dogruCevap": "B",
            "cozum": "PYŞ genel müdürlerinin sermaye piyasalarında en az 7 yıllık mesleki tecrübeye sahip olması şarttır."
          },
          {
            "id": 15,
            "soruMetni": "PYŞ nezdinde çalışan bir portföy yöneticisinin kendi adına veya yakınları adına yaptığı şahsi menkul kıymet işlemlerini şirkete bildirme süresi nedir?",
            "secenekler": {
              "A": "Bildirim yapılması yasaktır.",
              "B": "Sadece gazete ilanı verilir.",
              "C": "10 yıl sonra bildirilir.",
              "D": "Gizli tutulur.",
              "E": "Şahsi işlemler mevzuatta belirlenen kurallar çerçevesinde iç denetim birimine ve şirkete bildirilir."
            },
            "dogruCevap": "E",
            "cozum": "Çıkar çatışmalarını önlemek amacıyla çalışanların şahsi portföy işlemleri kayıt altına alınır ve iç denetime bildirilir."
          },
          {
            "id": 16,
            "soruMetni": "PYŞ'lerin şube açması veya yurt dışında temsilcilik kurması kimin iznine tabidir?",
            "secenekler": {
              "A": "İçişleri Bakanlığı",
              "B": "Sermaye Piyasası Kurulu (SPK)",
              "C": "Borsa İstanbul",
              "D": "Belediye Başkanlığı",
              "E": "Dışişleri Bakanlığı"
            },
            "dogruCevap": "B",
            "cozum": "Şube açılışları ve yurt dışı temsilcilikler SPK onay ve bildirimine tabidir."
          },
          {
            "id": 17,
            "soruMetni": "PYŞ tarafından yönetilen fonların varlıklarının bağımsız portföy saklayıcısı nezdinde saklanması yükümlülüğü hangi ilkenin gereğidir?",
            "secenekler": {
              "A": "Kâr Artırma İlkesi",
              "B": "Malvarlığının Korunması ve Çıkar Çatışmalarının Önlenmesi İlkesi",
              "C": "Rekabet İlkesi",
              "D": "Vergi Muafiyeti İlkesi",
              "E": "Serbest Piyasa İlkesi"
            },
            "dogruCevap": "B",
            "cozum": "Saklama işlevinin yönetim işlevinden ayrılması müşteri asset güvenliğini garanti eder."
          },
          {
            "id": 18,
            "soruMetni": "PYŞ ortaklık yapısındaki pay devirlerinde hangi oranların aşılması SPK iznine tabidir?",
            "secenekler": {
              "A": "Pay devri tamamen yasaktır.",
              "B": "%1'lik pay devri",
              "C": "Sadece %100 pay devri",
              "D": "Sermayenin %10, %20, %33, %50'sini aşan veya altına düşen pay devirleri",
              "E": "Her türlü pay devri serbesttir."
            },
            "dogruCevap": "D",
            "cozum": "Tebliğ m. 11 uyarınca belirlenen nitelikli pay oranlarındaki değişiklikler SPK iznine tabidir."
          },
          {
            "id": 19,
            "soruMetni": "PYŞ'lerin kendi özvarlıklarını (şirket sermayesini) değerlendirebilecekleri alanlar hakkında aşağıdakilerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Özvarlıklarıyla yüksek riskli gayrimenkul spekülasyonu yaparlar.",
              "B": "Kendi paralarını harcayamazlar.",
              "C": "Kendi özvarlıklarını likit ve düşük riskli sermaye piyasası araçlarında veya mevduatta değerlendirebilirler.",
              "D": "Özvarlıklarını tamamen borç olarak dağıtırlar.",
              "E": "Kendi hisselerini satın alırlar."
            },
            "dogruCevap": "C",
            "cozum": "Şirket özvarlıkları risk yönetimi kuralları çerçevesinde likit araçlarda tutulur."
          },
          {
            "id": 20,
            "soruMetni": "PYŞ'lerin müşterileriyle imzaladıkları Bireysel Portföy Yönetim Sözleşmelerini ve işlem kayıtlarını saklama yükümlülüğü süresi en az kaç yıldır?",
            "secenekler": {
              "A": "20 Yıl",
              "B": "5 Yıl",
              "C": "15 Yıl",
              "D": "2 Yıl",
              "E": "10 Yıl"
            },
            "dogruCevap": "E",
            "cozum": "SPK ve TTK hükümleri uyarınca müşteri sözleşme ve işlem kayıtları en az 10 yıl saklanır."
          }
        ]
      },
      {
        "testId": 9,
        "testAdi": "Test 9: 1.4.4. Yatırım Fonlarına İlişkin Esaslar Tebliği (III-52.1) - Genel Esaslar ve Türleri",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "Yatırım Fonlarına İlişkin Esaslar Tebliği (III-52.1) uyarınca, Yatırım Fonunun tüzel kişiliği var mıdır?",
            "secenekler": {
              "A": "Yatırım fonları şahıs şirketidir.",
              "B": "Yatırım fonları birer kamu kurumudur.",
              "C": "Yatırım fonları tam tüzel kişiliğe sahiptir.",
              "D": "Yatırım fonlarının tüzel kişiliği YOKTUR; ancak fon kurucusu tarafından temsil olunur ve malvarlığı bağımsızdır.",
              "E": "Tüzel kişilik kararını belediye verir."
            },
            "dogruCevap": "D",
            "cozum": "SPKn m. 52 ve Tebliğ m. 4 uyarınca yatırım fonlarının tüzel kişiliği yoktur; inançlı mülkiyet esasına göre Kurucu tarafından yönetilir ve temsil edilir."
          },
          {
            "id": 2,
            "soruMetni": "III-52.1 sayılı Tebliğ uyarınca, unvanında 'Hisse Senedi' ibaresi yer alan bir yatırım fonunun portföy değerinin en az yüzde kaçının devamlı olarak ihraççı paylarından oluşması zorunludur?",
            "secenekler": {
              "A": "%80",
              "B": "%45",
              "C": "%65",
              "D": "%35",
              "E": "%15"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 6 uyarınca Hisse Senedi Yoğun veya unvanında hisse geçen fonların portföyünün en az %80'i devamlı olarak paylardan oluşur."
          },
          {
            "id": 3,
            "soruMetni": "Yatırım fonunun kurucusu ile fon portföyü arasındaki ilişkiyi, taraf hak ve yükümlülüklerini düzenleyen temel doküman aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "İhzar Tutanağı",
              "B": "Fon İçtüzüğü",
              "C": "Vakıf Senedi",
              "D": "Şirket Ana Sözleşmesi",
              "E": "Ticaret Sicil Gazetesi"
            },
            "dogruCevap": "B",
            "cozum": "Yatırım fonunun kuruluşunda SPK tarafından onaylanan ve kurucu ile katılma payı sahipleri arasındaki ilişkiyi belirleyen belge Fon İçtüzüğüdür."
          },
          {
            "id": 4,
            "soruMetni": "III-52.1 sayılı Tebliğ uyarınca, aynı kurucuya bağlı birden fazla fonun tek bir tüzük altında toplanmasını sağlayan yapıya ne ad verilir?",
            "secenekler": {
              "A": "Şemsiye Fon",
              "B": "Sepet Fon",
              "C": "Serbest Fon",
              "D": "Borsa Fonu",
              "E": "Katılım Fonu"
            },
            "dogruCevap": "A",
            "cozum": "Fonlar 'Şemsiye Fon' olarak kurulur ve şemsiye fona bağlı alt fonlar ihraç edilir."
          },
          {
            "id": 5,
            "soruMetni": "Yatırım fonu birim pay değerinin (fiyatının) hesaplanma formülü aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Hisse Fiyatı x Dolar Kuru",
              "B": "Fon Gideri / Katılımcı Sayısı",
              "C": "Fon Net Varlık Değeri / Toplam Pay Sayısı",
              "D": "Borsa Kapanış Fiyatı + Faiz",
              "E": "Fon Toplam Borcu / Ödenmiş Sermaye"
            },
            "dogruCevap": "C",
            "cozum": "Tebliğ m. 15 uyarınca birim pay değeri, Fon Net Varlık Değerinin (Varlıklar - Borçlar) toplam katılma payı sayısına bölünmesiyle bulunur."
          },
          {
            "id": 6,
            "soruMetni": "Yatırım fonlarının portföylerindeki tek bir ihraççının sermaye piyasası araçlarına yapabilecekleri yatırım oranı azami yüzde kaçla sınırlıdır?",
            "secenekler": {
              "A": "%50",
              "B": "%10 (Devlet iç borçlanma senetleri hariç)",
              "C": "%75",
              "D": "%30",
              "E": "%100"
            },
            "dogruCevap": "B",
            "cozum": "Tebliğ m. 18 uyarınca fon portföyünün en fazla %10'u tek bir ihraççının para ve sermaye piyasası araçlarına yatırılabilir (DİBS harçtır)."
          },
          {
            "id": 7,
            "soruMetni": "Fon portföyündeki varlıkların değerlemesinde borsada işlem gören varlıklar için hangi fiyat esas alınır?",
            "secenekler": {
              "A": "Alış tarihi maliyet fiyatı",
              "B": "Fon kurulduğu gündeki fiyat",
              "C": "Tarihi en düşük fiyat",
              "D": "Nominal fiyat",
              "E": "Değerleme gününde borsada oluşan en son fiyat veya ağırlıklı ortalama fiyat"
            },
            "dogruCevap": "E",
            "cozum": "Borsada işlem gören varlıklar günlük borsa kapanış/ortalama fiyatı ile değerlenir."
          },
          {
            "id": 8,
            "soruMetni": "Katılma paylarının alım ve satım ilkelerini, fonun yatırım stratejisini ve risk profilini detaylıca yatırımcıya duyuran belge hangisidir?",
            "secenekler": {
              "A": "Ticaret Sicil Gazetesi",
              "B": "İzahname ve Yatırımcı Bilgi Formu (YBF)",
              "C": "Vergi Levhası",
              "D": "Faaliyet Belgesi",
              "E": "Denetim Tutanağı"
            },
            "dogruCevap": "B",
            "cozum": "Halkı bilgilendirmek amacıyla Fon İzahnamesi ve özet bilgi içeren Yatırımcı Bilgi Formu (YBF) KAP'ta yayımlanır."
          },
          {
            "id": 9,
            "soruMetni": "Unvanında 'Borçlanma Araçları' ibaresi yer alan bir fonun portföy değerinin en az yüzde kaçı kamu veya özel sektör borçlanma araçlarından oluşmalıdır?",
            "secenekler": {
              "A": "%80",
              "B": "%95",
              "C": "%30",
              "D": "%75",
              "E": "%50"
            },
            "dogruCevap": "A",
            "cozum": "Borçlanma araçları fonlarında portföyün en az %80'i borçlanma senetlerinden oluşur."
          },
          {
            "id": 10,
            "soruMetni": "Yatırım fonu katılma paylarının Türkiye'de elektronik bir platform üzerinden tüm kurumlarca alınıp satılmasını sağlayan sistem hangisidir?",
            "secenekler": {
              "A": "E-Devlet",
              "B": "BİSTECH",
              "C": "TEFAS (Türkiye Elektronik Fon Dağıtım Platformu)",
              "D": "SWIFT",
              "E": "E-GKS"
            },
            "dogruCevap": "C",
            "cozum": "Takasbank nezdinde çalışan TEFAS platformu üzerinden yatırım fonları alınıp satılır."
          },
          {
            "id": 11,
            "soruMetni": "Yatırım fonlarında kurucu ve portföy saklayıcısının fon varlıkları üzerindeki tasarruf yetkisi sınırları neye göre belirlenir?",
            "secenekler": {
              "A": "Bankacılık Kanununa göre",
              "B": "Kurucunun kendi keyfi kararlarına göre",
              "C": "Fon İçtüzüğü, İzahname ve SPK mevzuat hükümleri çerçevesinde",
              "D": "Belediye meclis kararına göre",
              "E": "Sadece fon çalışanlarının sözlü talebine göre"
            },
            "dogruCevap": "C",
            "cozum": "Fon yönetimi tamamen içtüzük, izahname ve Kurul standartları çerçevesinde yürütülür."
          },
          {
            "id": 12,
            "soruMetni": "Fon portföy yönetimi giderlerinin karşılanması amacıyla fondan tahsil edilen ücrete ne ad verilir?",
            "secenekler": {
              "A": "Tasfiye Payı",
              "B": "Rüçhan Bedeli",
              "C": "Gecikme Zamı",
              "D": "Vergi Cezası",
              "E": "Fon Toplam Gider Kesintisi / Fon Yönetim Ücreti"
            },
            "dogruCevap": "E",
            "cozum": "Fon yönetim hizmetleri karşılığında içtüzükte belirtilen oranlarda Fon Yönetim Ücreti fondan tahsil edilir."
          },
          {
            "id": 13,
            "soruMetni": "Para Piyasası Fonlarının portföy vadesine ilişkin kısıtlama nedir?",
            "secenekler": {
              "A": "Sadece hisse senedi alınır.",
              "B": "Vade en az 5 yıldır.",
              "C": "Vade kısıtlaması yoktur.",
              "D": "Vadesi 10 yıldan uzun araçlar alınır.",
              "E": "Portföyünün tamamı vadesine en fazla 184 gün kalmış likit araçlardan oluşur ve portföyün ağırlıklı ortalama vadesi en fazla 45 gün olabilir."
            },
            "dogruCevap": "E",
            "cozum": "Para piyasası fonları yüksek likidite sağlamak amacıyla ortalama 45 gün azami vade sınırlamasına tabidir."
          },
          {
            "id": 14,
            "soruMetni": "Yatırım fonu portföyünden yapılacak kredi alımı veya borçlanma işlemleri fon toplam değerinin en fazla yüzde kaçı ile sınırlıdır?",
            "secenekler": {
              "A": "%10",
              "B": "%50",
              "C": "%100",
              "D": "%5",
              "E": "%20"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 19 uyarınca geçici nakit ihtiyacını karşılamak amacıyla fon toplam değerinin %10'una kadar kredi alınabilir."
          },
          {
            "id": 15,
            "soruMetni": "Yatırım fonlarının tasfiye edilmesi durumunda kalan fon varlıkları katılımcılara nasıl dağıtılır?",
            "secenekler": {
              "A": "Dağıtım yapılmaz.",
              "B": "Aracı kuruma hediye edilir.",
              "C": "Şirket kurucusuna kalır.",
              "D": "Katılma payı sahiplerine payları oranında nakden dağıtılır.",
              "E": "Devlete bağışlanır."
            },
            "dogruCevap": "D",
            "cozum": "Tasfiye edilen fonun net varlığı pay sahiplerinin pay oranlarına göre hesaplanarak iade edilir."
          },
          {
            "id": 16,
            "soruMetni": "Yatırım fonu katılım paylarının satışına ve geri alımına ilişkin fiyatlar ne zaman açıklanır?",
            "secenekler": {
              "A": "Fiyatlar hiç değişmez.",
              "B": "Yılda bir kez açıklanır.",
              "C": "Sadece 5 yılda bir duyurulur.",
              "D": "Her değerleme günü hesaplanır ve KAP'ta / kurucu sitesinde açıklanır.",
              "E": "Açıklanması yasaktır."
            },
            "dogruCevap": "D",
            "cozum": "Fon birim pay fiyatları her değerleme gününde yayımlanır."
          },
          {
            "id": 17,
            "soruMetni": "Fon Sepeti Fonlarının portföy değerinin en az yüzde kaçının diğer yatırım fonlarının ve borsa yatırım fonlarının katılma paylarından oluşması zorunludur?",
            "secenekler": {
              "A": "%60",
              "B": "%80",
              "C": "%40",
              "D": "%20",
              "E": "%85"
            },
            "dogruCevap": "B",
            "cozum": "Fon Sepeti Fonları portföylerinin en az %80'ini diğer fon katılma paylarına yatırırlar."
          },
          {
            "id": 18,
            "soruMetni": "Faizsiz finansman ilkelerine uygun varlıklara yatırım yapan fon türü aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Değişken Fon",
              "B": "Borçlanma Araçları Fonu",
              "C": "Serbest Fon",
              "D": "Katılım Fonu",
              "E": "Para Piyasası Fonu"
            },
            "dogruCevap": "D",
            "cozum": "Kira sertifikaları, katılma hesapları ve Danışma Kurulu onaylı paylara yatırım yapan fonlar Katılım Fonu olarak adlandırılır."
          },
          {
            "id": 19,
            "soruMetni": "Yatırım fonunun birim pay değerinin yanlış hesaplanması halinde yatırımcıların zarara uğraması durumunda zararı kim tazmin eder?",
            "secenekler": {
              "A": "Takasbank",
              "B": "Borsa İstanbul",
              "C": "Fon Kurucusu ve Portföy Yönetim Şirketi",
              "D": "Milli Piyango İdaresi",
              "E": "Katılımcıların kendisi üstlenir"
            },
            "dogruCevap": "C",
            "cozum": "Hatalı fiyat hesaplamalarında doğan zararlar kurucu ve yönetici tarafından tazmin edilir."
          },
          {
            "id": 20,
            "soruMetni": "Yatırım fonlarının yıllık finansal raporları ne zamana kadar bağımsız denetimden geçerek KAP'ta açıklanmalıdır?",
            "secenekler": {
              "A": "30 gün içinde",
              "B": "180 gün içinde",
              "C": "120 gün içinde",
              "D": "Bağımsız denetim yapılmaz",
              "E": "Hesap döneminin bitimini takip eden 60 gün içinde"
            },
            "dogruCevap": "E",
            "cozum": "Tebliğ m. 28 uyarınca yatırım fonlarının yıllık bağımsız denetim raporları hesap dönemini izleyen 60 gün içinde açıklanır."
          }
        ]
      },
      {
        "testId": 10,
        "testAdi": "Test 10: 1.4.4. Özel Fon Türleri (Serbest, Gayrimenkul, Girişim ve Borsa Yatırım Fonları)",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "Sermaye Piyasası Kurulu düzenlemeleri uyarınca, Serbest Yatırım Fonlarının katılma payları kimlere satılabilir?",
            "secenekler": {
              "A": "Yalnızca Nitelikli Yatırımcılara satılabilir.",
              "B": "Sadece şirket çalışanlarına verilir.",
              "C": "Tüm halka ve küçük yatırımcılara açık satılır.",
              "D": "Hiç kimseye satılamaz.",
              "E": "Sadece yabancı devletlere satılır."
            },
            "dogruCevap": "A",
            "cozum": "Serbest Fonlar miktar ve portföy sınırlamalarından muaf olup yalnızca Nitelikli Yatırımcılara pazarlanabilir."
          },
          {
            "id": 2,
            "soruMetni": "Gayrimenkul Yatırım Fonlarına İlişkin Esaslar Tebliği (III-52.2) uyarınca, GYF portföy değerinin en az yüzde kaçının gayrimenkul yatırımlarından oluşması zorunludur?",
            "secenekler": {
              "A": "%80",
              "B": "%75",
              "C": "%55",
              "D": "%10",
              "E": "%30"
            },
            "dogruCevap": "A",
            "cozum": "III-52.2 m. 18 uyarınca GYF portföyünün en az %80'i gayrimenkul ve gayrimenkul haklarından oluşmalıdır."
          },
          {
            "id": 3,
            "soruMetni": "Girişim Sermayesi Yatırım Fonlarına İlişkin Esaslar Tebliği (III-52.3) uyarınca, GSYF portföyünün en az yüzde kaçının girişim şirketlerine yatırılması zorunludur?",
            "secenekler": {
              "A": "%95",
              "B": "%25",
              "C": "%45",
              "D": "%65",
              "E": "%80"
            },
            "dogruCevap": "E",
            "cozum": "III-52.3 m. 19 uyarınca GSYF portföyünün en az %80'i girişim sermayesi yatırımlarından oluşmak zorundadır."
          },
          {
            "id": 4,
            "soruMetni": "Borsa Yatırım Fonları Tebliği (III-52.4) uyarınca, BYF'lerin temel amacı ve yapısı aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Sigorta poliçesi kesmek",
              "B": "Gayrimenkul alıp satmak",
              "C": "Bir endeksi takip etmek ve katılma payları borsada işlem görmek suretiyle endeks performansını yatırımcıya yansıtmak",
              "D": "Müteahhitlik hizmeti sunmak",
              "E": "Mevduat faizi vermek"
            },
            "dogruCevap": "C",
            "cozum": "BYF'ler bir endeksi takip eder ve katılma payları Borsa İstanbul'da hisse senedi gibi alınıp satılır."
          },
          {
            "id": 5,
            "soruMetni": "Borsa Yatırım Fonunun (BYF) portföy değerinin en az yüzde kaçı devamlı olarak takip edilen endeks kapsamındaki varlıklardan oluşmalıdır?",
            "secenekler": {
              "A": "%35",
              "B": "%55",
              "C": "%75",
              "D": "%15",
              "E": "%80"
            },
            "dogruCevap": "E",
            "cozum": "BYF Tebliği m. 5 uyarınca fon portföyünün en az %80'inin takip edilen endeks bileşenlerinden oluşması şarttır."
          },
          {
            "id": 6,
            "soruMetni": "Gayrimenkul Yatırım Fonları (GYF) ve Girişim Sermayesi Yatırım Fonları (GSYF) tüzel kişiliğe haiz midir?",
            "secenekler": {
              "A": "Kamu iktisadi teşekkülüdürler.",
              "B": "Tüzel kişilikleri yoktur; ancak tapu tescil, ticaret sicil ve banka işlemlerinde tüzel kişiliği haiz addolunurlar.",
              "C": "Dernektirler.",
              "D": "Şahıs ortaklığıdırlar.",
              "E": "Tam tüzel kişiliği haiz anonim şirkettirler."
            },
            "dogruCevap": "B",
            "cozum": "SPKn m. 54 uyarınca GYF ve GSYF fonları sınırlı olarak tüzel kişiliği haiz addolunur ve tapuda kendi adlarına tescil yapabilirler."
          },
          {
            "id": 7,
            "soruMetni": "GYF ve GSYF katılma payları halka arz edilerek genel yatırımcılara satılabilir mi?",
            "secenekler": {
              "A": "Sadece şirket kurucusu satın alabilir.",
              "B": "Halka arz zorunludur.",
              "C": "Evet, tüm halka arz edilir.",
              "D": "Sadece yabancılara satılır.",
              "E": "Hayır, GYF ve GSYF katılma payları halka arz edilemez; sadece Nitelikli Yatırımcılara satılır."
            },
            "dogruCevap": "E",
            "cozum": "GYF ve GSYF katılma payları nitelikli yatırımcılara ihraç edilmek üzere kurulur, halka arz edilemez."
          },
          {
            "id": 8,
            "soruMetni": "Borsa Yatırım Fonlarında (BYF) piyasa yapıcı aracı kurumların görevi nedir?",
            "secenekler": {
              "A": "SPK denetimini yapmak",
              "B": "Fon tasfiyesini başlatmak",
              "C": "Fon zararlarını ödemek",
              "D": "Borsada fon paylarının likiditesini sağlamak amacıyla sürekli alış ve satış kotasyonu vermek",
              "E": "Fon tüzüğünü değiştirmek"
            },
            "dogruCevap": "D",
            "cozum": "BYF'lerde piyasa yapıcılar borsa pazarında sürekli kotasyon vererek fon fiyatının net varlık değerine yakın seyretmesini sağlar."
          },
          {
            "id": 9,
            "soruMetni": "Gayrimenkul Yatırım Fonlarının (GYF) portföylerindeki gayrimenkullerin değerlemesi ne zaman yaptırılır?",
            "secenekler": {
              "A": "Her takvim yılı sonu itibariyle ve alım/satım işlemlerinden önce yetkili değerleme kuruluşuna yaptırılır.",
              "B": "10 yılda bir yaptırılır.",
              "C": "Belediye tarafından hesaplanır.",
              "D": "Değerleme yaptırılmaz.",
              "E": "Sadece fon kurulurken yaptırılır."
            },
            "dogruCevap": "A",
            "cozum": "GYF Tebliği m. 23 uyarınca her takvim yılı sonunda bağımsız ekspertiz raporu alınması zorunludur."
          },
          {
            "id": 10,
            "soruMetni": "GSYF'lerin portföylerindeki girişim şirketlerine yapabilecekleri yatırım şekilleri arasında aşağıdakilerden hangisi YER ALIR?",
            "secenekler": {
              "A": "Şirket çalışanlarına ikramiye dağıtmak",
              "B": "Girişim şirketlerinin paylarını satın almak, sermaye artırımlarına katılmak veya borç/özkaynak karması finansman sağlamak",
              "C": "Girişim şirketlerini kapatıp tasfiye etmek",
              "D": "Şirketlerin arsa ve binalarına el koymak",
              "E": "Girişim şirketlerini faizle tefecilik yoluyla borçlandırmak"
            },
            "dogruCevap": "B",
            "cozum": "GSYF'ler girişim şirketlerine sermaye koyarak, ortak olarak veya borç finansmanı vererek destek olurlar."
          },
          {
            "id": 11,
            "soruMetni": "GYF ve GSYF'lerin kurulabilmesi ve katılma paylarının ihracı için asgari portföy büyüklüğünün ne kadar süre içinde sağlanması zorunludur?",
            "secenekler": {
              "A": "Satışa başlandığı tarihi takip eden en geç 1 yıl içinde asgari tutara ulaşması şarttır.",
              "B": "10 yıl içinde",
              "C": "5 yıl içinde",
              "D": "Süre sınırı yoktur",
              "E": "Aynı gün"
            },
            "dogruCevap": "A",
            "cozum": "Özel fonlarda asgari portföy büyüklüğüne katılım payı satışını izleyen 1 yıl içinde ulaşılması şarttır."
          },
          {
            "id": 12,
            "soruMetni": "Girişim Sermayesi Yatırım Fonlarının yatırım yapabileceği 'Girişim Şirketi' tanımı aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "BİST-30 endeksindeki tüm dev şirketler",
              "B": "İflas etmiş tasfiye halindeki şirketler",
              "C": "Türkiye'de kurulu veya gelişme potansiyeli yüksek olan, halka açık olmayan veya borsadaki gelişen işletmeler piyasasında işlem gören şirketler",
              "D": "Yabancı devlet bankaları",
              "E": "Tüm belediye iktisadi teşekkülleri"
            },
            "dogruCevap": "C",
            "cozum": "Girişim şirketleri inovasyon ve gelişme potansiyeline sahip henüz kurulma veya büyüme aşamasındaki şirketlerdir."
          },
          {
            "id": 13,
            "soruMetni": "Borsa Yatırım Fonlarında ayni takas (ayni pay yaratma ve geri alma) işlemini gerçekleştiren yetkili kuruluşa ne ad verilir?",
            "secenekler": {
              "A": "Döviz Bürosu",
              "B": "Sigorta Acentesi",
              "C": "Şehir Noteri",
              "D": "Yetkilendirilmiş Kurucu veya Yetkili Aracı Kurum",
              "E": "Takasbank Güvenlik Amirliği"
            },
            "dogruCevap": "D",
            "cozum": "BYF'lerde yetkili aracı kurumlar endeks sepeti karşılığında fon payı yaratılması ve fona iade edilmesi işlemlerini yürütür."
          },
          {
            "id": 14,
            "soruMetni": "Serbest Yatırım Fonlarının yatırım kısıtlamalarına ve borçlanma sınırlarına ilişkin aşağıdakilerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Serbest fonlar yatırım yapamaz.",
              "B": "Serbest fonlar SPK denetimine tabi değildir.",
              "C": "Serbest fonlar sadece devlet tahvili alabilir.",
              "D": "Serbest fonlar izahname ve içtüzüklerinde yer vermek kaydıyla SPK'nın genel yatırım kısıtlamalarından muaftır.",
              "E": "Serbest fonlar hiç borç alamazlar."
            },
            "dogruCevap": "D",
            "cozum": "Nitelikli yatırımcılara yönelik serbest fonlar esnek portföy yönetimi ve türev araç kullanımı imkânına sahiptir."
          },
          {
            "id": 15,
            "soruMetni": "GYF ve GSYF saklama hizmetini yürütmekle yetkili kılınan bağımsız kuruluş hangisidir?",
            "secenekler": {
              "A": "Şehir Valiliği",
              "B": "Fon Kurucusunun Genel Müdürü",
              "C": "Borsa Güvenliği",
              "D": "Portföy Saklayıcısı Kurum (Takasbank veya Yetkili Bankalar)",
              "E": "Şirket Muhasebecisi"
            },
            "dogruCevap": "D",
            "cozum": "Fon varlıkları ve hakları bağımsız portföy saklayıcısı nezdinde saklanır."
          },
          {
            "id": 16,
            "soruMetni": "GYF'lerin inşaat işleri ve müteahhitlik faaliyetleri yapması mevzuat uyarınca serbest midir?",
            "secenekler": {
              "A": "İstediği gibi inşaat şirketi kurabilirler.",
              "B": "Sadece yurt dışında müteahhitlik yapabilirler.",
              "C": "Hayır, GYF'ler inşaat taahhüt işleri yapamazlar; projeleri bağımsız müteahhitlere yaptırmak zorundadırlar.",
              "D": "Belediye izin verirse yaparlar.",
              "E": "Evet, öz kaynaklarıyla inşaat yapabilirler."
            },
            "dogruCevap": "C",
            "cozum": "GYF'ler doğrudan inşaat yapamazlar, inşaat işlerini yüklenici müteahhit firmalara devretmek zorundadırlar."
          },
          {
            "id": 17,
            "soruMetni": "GSYF'lerin portföylerindeki girişim şirketlerinin yönetiminde yer alma hakları var mıdır?",
            "secenekler": {
              "A": "Sadece genel kurulda dinleyici olabilirler.",
              "B": "Sadece oy hakkı olmayan pay alırlar.",
              "C": "Evet, GSYF'ler girişim şirketlerinin yönetim kuruluna üye verebilir ve yönetimine katılabilirler.",
              "D": "Yönetim hakkı devlete geçer.",
              "E": "Hayır, yönetime katılmaları yasaktır."
            },
            "dogruCevap": "C",
            "cozum": "GSYF'ler girişim şirketlerinin gelişimi için yönetim kurullarında temsil edilme ve danışmanlık sağlama yetkisine sahiptir."
          },
          {
            "id": 18,
            "soruMetni": "BYF katılma paylarının borsa pazarında oluşan fiyatı ile fon net varlık değeri arasında fark oluşması halinde kim müdahale eder?",
            "secenekler": {
              "A": "Farkı devlet öder.",
              "B": "Borsa Başkanı borsayı kapatır.",
              "C": "SPK cezai işlem başlatır.",
              "D": "Fiyat farkı hiçbir zaman oluşmaz.",
              "E": "Piyasa Yapıcı Aracı Kurum kotasyon vererek ve ayni yaratım/geri alım yaparak farkı arbitrage ile kapatır."
            },
            "dogruCevap": "E",
            "cozum": "Piyasa yapıcılar borsadaki piyasa fiyatı ile net varlık değeri arasındaki farkı ayni yaratım/fiyat kotasyonu mekanizmasıyla dengeler."
          },
          {
            "id": 19,
            "soruMetni": "GYF ve GSYF bilgilendirme dokümanlarında esaslarının belirtilmesi şartıyla katılımcılara farklı haklar sağlayan pay grupları oluşturulabilir mi?",
            "secenekler": {
              "A": "Sadece 10 yıl sonra oluşturulur.",
              "B": "Evet, bilgilendirme dokümanlarında belirtilmek kaydıyla aynı fonda farklı pay grupları oluşturulabilir.",
              "C": "Hayır, tek tür pay olmak zorundadır.",
              "D": "Pay grubu oluşturulması suçtur.",
              "E": "Farklı pay grubu kuralı sadece bankalara uygulanır."
            },
            "dogruCevap": "B",
            "cozum": "Tebliğ uyarınca katılma payı sahiplerine tanınan hakları farklılaştırmak amacıyla farklı pay grupları ihraç edilebilir."
          },
          {
            "id": 20,
            "soruMetni": "Serbest Yatırım Fonlarının izahname ve içtüzük değişiklikleri KAP'ta yayımlanır mı?",
            "secenekler": {
              "A": "Sadece Ticaret Sicil Gazetesinde ilan edilir.",
              "B": "Evet, değişiklikler KAP'ta açıklanır ve nitelikli yatırımcılara duyurulur.",
              "C": "Sadece gazete ilanı verilir.",
              "D": "Değişiklik yapılması yasaktır.",
              "E": "Hayır, gizli tutulur."
            },
            "dogruCevap": "B",
            "cozum": "Tüm fon tüzük ve bilgilendirme dokümanı değişiklikleri KAP'ta duyurulmak zorundadır."
          }
        ]
      }
    ]
  },
  {
    "code": "1003",
    "dersAdi": "1003 - Sermaye Piyasası Araçları 1",
    "kategori": "SPK Modül Kodu: 1003 | SPL Düzey 1, Düzey 2, Düzey 3, Türev Araçlar Lisansı",
    "duzeyler": [
      "duzey1",
      "duzey2",
      "duzey3",
      "turev"
    ],
    "aciklama": "1003 - Sermaye Piyasası Araçları 1 - Resmi SPL Müfredat Temel Testi (1 Test, 1 Soru)",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: 1003 - Sermaye Piyasası Araçları 1 Temel Değerlendirme Testi",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "1003 - Sermaye Piyasası Araçları 1 müfredatına ilişkin temel mevzuat ve uygulama değerlendirmesi.",
            "secenekler": {
              "A": "Sermaye Piyasası Kanunu ve İlgili Mevzuat Hükümleri",
              "B": "Yönetmelik ve Genelge Esasları",
              "C": "Ticaret Kanunu Genel Hükümleri",
              "D": "Takasbank ve MKK Saklama Düzenlemeleri",
              "E": "Borsa İstanbul İşleyiş Kuralları"
            },
            "dogruCevap": "A",
            "cozum": "Bu soru ilgili dersin resmi müfredat kapsamını temel almaktadır."
          }
        ]
      }
    ]
  },
  {
    "code": "1004",
    "dersAdi": "1004 - Sermaye Piyasası Araçları 2",
    "kategori": "SPK Modül Kodu: 1004 | SPL Düzey 2, Düzey 3, Türev Araçlar Lisansı",
    "duzeyler": [
      "duzey2",
      "duzey3",
      "turev"
    ],
    "aciklama": "Sermaye Piyasası Araçları 2 (1004) - Resmi Örnek Sorular Paketi (1 Test, 24 Orijinal Soru)",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: Sermaye Piyasası Araçları 2 Resmi Çıkmış Örnek Sorular Paketi (24 Soru)",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "Halka arz edilecek sermaye piyasası araçlarının nominal değerinin en az yüzde kaçının yurt içi kurumsal yatırımcılara tahsis edilmesi zorunludur?",
            "secenekler": {
              "A": "10",
              "B": "15",
              "C": "20",
              "D": "5",
              "E": "25"
            },
            "dogruCevap": "B",
            "cozum": "Sermaye Piyasası Araçlarının Satışı Tebliği (II-5.2) uyarınca halka arz edilecek payların nominal değerinin en az %15'inin yurt içi kurumsal yatırımcılara tahsis edilmesi zorunludur."
          },
          {
            "id": 2,
            "soruMetni": "Aşağıdaki durumlardan hangisinde izahname düzenlenmesi zorunluluğundan muafiyet tanınmıştır?",
            "secenekler": {
              "A": "Genel kurula sunulacak tüm sermaye artırımlarında",
              "B": "Halka açık olmayan anonim ortaklığın borçlanma aracı ihracında",
              "C": "Payları borsada işlem gören şirketlerin 12 aylık dönemde ödenmiş sermayelerinin %10'undan az kısmını temsil eden bedelli pay ihracında",
              "D": "Payların ilk defa halka arz edilmesinde",
              "E": "Niteliksiz yatırımcılara yapılan tüm satışlarda"
            },
            "dogruCevap": "C",
            "cozum": "İzahname ve İhraç Belgesi Tebliği (II-5.1) m. 6 uyarınca borsada işlem gören payların 12 aylık dönemde %10'undan az kısmını oluşturan bedelli pay ihraçları izahname muafiyetine tabidir."
          },
          {
            "id": 3,
            "soruMetni": "Halka açık olmayan ortaklıkların paylarının ilk defa halka arzında, 16 Mayıs - 15 Ağustos dönemi kapsamında payların halka arz edilmesi halinde, izahnamede aşağıdaki finansal tablolardan hangisine yer verilmesi gereklidir?",
            "secenekler": {
              "A": "Sadece son 1 yıllık finansal tablolar",
              "B": "Sadece 6 aylık yönetim raporları",
              "C": "Son 5 yıllık denetlenmiş tablolar",
              "D": "Son 3 yıllık ve en son 3 aylık (ara dönem) finansal tablolar",
              "E": "Geleceğe yönelik proprojeksiyon raporları"
            },
            "dogruCevap": "D",
            "cozum": "İzahname Tebliği ekindeki finansal tablo hazırlama takvimine göre 16 Mayıs - 15 Ağustos tarihleri arasındaki halka arzlarda son 3 yıllık ve en son ilk 3 aylık ara dönem finansal tablolar yayımlanır."
          },
          {
            "id": 4,
            "soruMetni": "Aşağıdakilerden hangisi halka arz satış yöntemlerinden biri DEĞİLDİR?",
            "secenekler": {
              "A": "Sabit Fiyatla Talep Toplama Yöntemi",
              "B": "Fiyat Teklifi Alarak Talep Toplama Yöntemi",
              "C": "Talep Toplanmaksızın Satış",
              "D": "Borsada Satış",
              "E": "Tahsisli Satış"
            },
            "dogruCevap": "E",
            "cozum": "Tahsisli satış, halka arz edilmeksizin doğrudan belirlenen kişilere yapılan satıştır; halka arz satış yöntemi değildir."
          },
          {
            "id": 5,
            "soruMetni": "İzahnamesi onaylanan bir şirket için sermaye piyasası araçlarının halka arz satış süresi en az ve en fazla kaç iş günüdür?",
            "secenekler": {
              "A": "En az 5 iş günü, en fazla 10 iş günü",
              "B": "En az 2 iş günü, en fazla 20 iş günü",
              "C": "En az 3 iş günü, en fazla 30 iş günü",
              "D": "En az 1 iş günü, en fazla 5 iş günü",
              "E": "En az 10 iş günü, en fazla 60 iş günü"
            },
            "dogruCevap": "B",
            "cozum": "Sermaye Piyasası Araçlarının Satışı Tebliği uyarınca halka arz satış süresi en az 2 iş günü, en fazla 20 iş günü olarak belirlenir."
          },
          {
            "id": 6,
            "soruMetni": "Sermaye piyasası araçlarının halka arzı öncesinde tasarruf sahiplerine satış şartlarını ve detaylarını duyuran ilan metnine ne ad verilir?",
            "secenekler": {
              "A": "Derecelendirme Raporu",
              "B": "Faaliyet Raporu",
              "C": "İhraç Belgesi",
              "D": "Sirküler (Tasarruf Sahiplerine Satış Duyurusu)",
              "E": "İzahname"
            },
            "dogruCevap": "D",
            "cozum": "Halka arzda izahnamenin yanı sıra alım-satım yerlerini ve şartlarını duyuran ilan belgesi Sirküler (Tasarruf Sahiplerine Satış Duyurusu) olarak adlandırılır."
          },
          {
            "id": 7,
            "soruMetni": "Aşağıdaki kuruluşlardan hangisi bir fon kurmaksızın doğrudan kendi bilançosundaki varlıklara dayalı Varlığa İpotekle Dayalı Menkul Kıymet (VİDMK) ihraç edebilir?",
            "secenekler": {
              "A": "Gayrimenkul Yatırım Ortaklığı",
              "B": "Portföy Yönetim Şirketi",
              "C": "Faktöring Şirketleri",
              "D": "İpotek Finansmanı Kuruluşu",
              "E": "Aracı Kurumlar"
            },
            "dogruCevap": "D",
            "cozum": "İpotek Finansmanı Kuruluşları fon kurmaksızın kendi bilançolarında yer alan ipotekli alacaklara dayalı VİDMK ihraç etme yetkisine sahiptir."
          },
          {
            "id": 8,
            "soruMetni": "Aşağıdakilerden hangisi İpotek Teminatlı Menkul Kıymet (İTMK) ihracına teminat olarak gösterilemez?",
            "secenekler": {
              "A": "Sigorta şirketlerinin alacakları",
              "B": "Hazine ve Maliye Bakanlığınca kurulan varlık kiralama şirketleri tarafından ihraç edilen kira sertifikaları",
              "C": "İpotek finansmanı kuruluşlarının konut kredisi alacakları",
              "D": "Bankaların sicilde ipotek tesis edilmek suretiyle teminat altına alınmış konut finansman alacakları",
              "E": "Devlet iç borçlanma senetleri (DİBS)"
            },
            "dogruCevap": "A",
            "cozum": "İTMK Tebliği (III-59.1) uyarınca teminat havuzuna sadece konut ve yapı finansmanı alacakları, DİBS ve onaylı kira sertifikaları alınabilir; sigorta şirketlerinin alacakları teminat olamaz."
          },
          {
            "id": 9,
            "soruMetni": "Aşağıdakilerden hangisi Varlık Teminatlı Menkul Kıymet (VTMK) ihracında teminat havuzuna karşılık gösterilemez?",
            "secenekler": {
              "A": "Bankaların tüketici kredilerinden kaynaklanan alacakları",
              "B": "TCMB tarafından ihraç edilen likidite senetleri",
              "C": "Vadesi 3 aydan kısa mevduat hesapları",
              "D": "Finansman şirketlerinin tüketici kredilerinden kaynaklanan alacakları",
              "E": "Sigortalanmış faktöring alacakları"
            },
            "dogruCevap": "C",
            "cozum": "VTMK Tebliği (III-59.1) gereğince 3 aydan kısa süreli mevduat hesapları teminat havuzuna aktarılamaz."
          },
          {
            "id": 10,
            "soruMetni": "Aşağıdaki kuruluşlardan hangisi münhasıran yalnızca İpotek Teminatlı Menkul Kıymet (İTMK) ihraç etmeye yetkilidir?",
            "secenekler": {
              "A": "Faktöring Şirketleri",
              "B": "Konut Finansmanı Fonu",
              "C": "Finansal Kiralama Şirketleri",
              "D": "Konut Finansmanı Kuruluşu",
              "E": "Portföy Yönetim Şirketleri"
            },
            "dogruCevap": "D",
            "cozum": "Konut Finansmanı Kuruluşları bilançolarındaki konut kredisi varlıklarına dayalı İTMK ihraç edebilir."
          },
          {
            "id": 11,
            "soruMetni": "Varlık Teminatlı Menkul Kıymetler (VTMK) ihracına ilişkin teminat uyum ilkelerinin ihlalinin ihraççı tarafından tespit edilmesi halinde, kaç ay içinde uyumun yeniden sağlanması zorunludur?",
            "secenekler": {
              "A": "1 Ay",
              "B": "3 Ay",
              "C": "5 Ay",
              "D": "2 Ay",
              "E": "4 Ay"
            },
            "dogruCevap": "A",
            "cozum": "Teminatlı Menkul Kıymetler Tebliği uyarınca teminat uyum ilkelerindeki eksikliklerin ihraççı tarafından tespiti halinde en geç 1 ay içinde uyumun yeniden sağlanması zorunludur."
          },
          {
            "id": 12,
            "soruMetni": "Aşağıdaki faizsiz finansman yöntemlerinden hangisinde kâr/faiz veya ek bir karşılık söz konusu DEĞİLDİR?",
            "secenekler": {
              "A": "Müşaraka",
              "B": "İcara",
              "C": "Murabaha",
              "D": "Selem",
              "E": "Karz-ı Hasen"
            },
            "dogruCevap": "E",
            "cozum": "Karz-ı Hasen (güzel borç), borç verene hiçbir ilave karşılık, menfaat veya kâr payı sağlamayan karşılıksız borç verme yöntemidir."
          },
          {
            "id": 13,
            "soruMetni": "Kira Sertifikaları Tebliği (III-61.1) uyarınca aşağıdakilerden hangisi tarafından Varlık Kiralama Şirketi (VKŞ) kurulamaz?",
            "secenekler": {
              "A": "Gayrimenkul Yatırım Fonları",
              "B": "Payları borsada işlem gören Gayrimenkul Yatırım Ortaklıkları (GYO)",
              "C": "Portföy aracılığı yapan aracı kurumlar",
              "D": "İpotek finansmanı kuruluşları",
              "E": "Bankalar"
            },
            "dogruCevap": "A",
            "cozum": "VKŞ kurabilecek kuruluşlar III-61.1 sayılı Tebliğde sayılmıştır. Gayrimenkul Yatırım Fonlarının VKŞ kurma yetkisi bulunmamaktadır."
          },
          {
            "id": 14,
            "soruMetni": "Kira sertifikası ihraç etmek üzere münhasıran anonim şirket şeklinde kurulan sermaye piyasası kurumuna ne ad verilir?",
            "secenekler": {
              "A": "Varlık Kiralama Şirketi (VKŞ)",
              "B": "Portföy Saklama Şirketi",
              "C": "Portföy Yönetim Şirketi",
              "D": "Fon Kullanıcısı",
              "E": "Kaynak Kuruluş"
            },
            "dogruCevap": "A",
            "cozum": "Kira sertifikaları sadece VKŞ (Varlık Kiralama Şirketleri) tarafından ihraç edilebilen özel amaçlı sermaye piyasası aracıdır."
          },
          {
            "id": 15,
            "soruMetni": "Bir emtianın önceden anlaşılan bir kâr payı üzerinden fon ihtiyacı olan tarafa vadeli satılması, fon ihtiyacı olan tarafın da bu emtiayı peşin olarak üçüncü bir tarafa satmasıyla finansman sağlayan İslami finansman yöntemi hangisidir?",
            "secenekler": {
              "A": "Müşaraka",
              "B": "İstısna",
              "C": "Murabaha (Teverruk)",
              "D": "Mudaraba",
              "E": "İcara"
            },
            "dogruCevap": "C",
            "cozum": "Alım-satıma dayalı kira sertifikası ihracında da kullanılan maliyet+kâr marjlı vadeli satış yöntemi Murabaha olarak adlandırılır."
          },
          {
            "id": 16,
            "soruMetni": "Gayrimenkul sertifikaları ihracında aşağıdaki raporlardan hangisi düzenlenemez / yer almaz?",
            "secenekler": {
              "A": "İnşaat ilerleme raporu",
              "B": "Fizibilite raporu",
              "C": "Gayrimenkul değerleme raporu",
              "D": "Risk tespit raporu",
              "E": "Yatırımcı bilgi formu"
            },
            "dogruCevap": "D",
            "cozum": "Gayrimenkul Sertifikaları Tebliği (VII-128.2) kapsamında değerleme, fizibilite, inşaat ilerleme ve fiyat tespit raporları düzenlenir; 'Risk tespit raporu' isimli bir belge yoktur."
          },
          {
            "id": 17,
            "soruMetni": "Gayrimenkul sertifikaları ihracına ilişkin aşağıdaki ifadelerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Sadece halka açık şirketlerce ihraç edilir.",
              "B": "Gayrimenkul sertifikaları yurt içinde halka arz edilerek, halka arz edilmeksizin veya yurt dışındaki ihraçlarda kullanılabilir.",
              "C": "Yalnızca bankalar ihraç edebilir.",
              "D": "İhraç süresi sınırsızdır.",
              "E": "Sadece yurt dışında ihraç edilebilir."
            },
            "dogruCevap": "B",
            "cozum": "Gayrimenkul sertifikaları yurt içinde halka arz edilerek, halka arz edilmeksizin veya yurt dışında ihraç edilme imkânına sahiptir."
          },
          {
            "id": 18,
            "soruMetni": "Gayrimenkul sertifikalarının sunduğu edimler hakkında aşağıdakilerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Edim seçeneği bulunmamaktadır.",
              "B": "Edimler asli edim (bağımsız bölümün mülkiyeti) ve tali edim (nakdi ödeme) olarak sınıflandırılır.",
              "C": "Asli edim sadece ortaklık payıdır.",
              "D": "Sadece nakdi edim mevcuttur.",
              "E": "Tali edim kullanımı zorunludur."
            },
            "dogruCevap": "B",
            "cozum": "Gayrimenkul sertifikalarında bağımsız bölümün mülkiyetinin edinilmesi asli edim, inşaat sonunda satıştan elde edilecek tutarın nakden ödenmesi tali edimdir."
          },
          {
            "id": 19,
            "soruMetni": "SPK düzenlemeleri uyarınca yatırım kuruluşu varantlarına dayanak teşkil eden varlık veya göstergeler arasında aşağıdakilerden hangisi yer ALMAZ?",
            "secenekler": {
              "A": "Kıymetli maden",
              "B": "Konvertibl döviz",
              "C": "Gayrimenkul sertifikası",
              "D": "BİST-100 endeksinde yer alan paylar",
              "E": "Emtia"
            },
            "dogruCevap": "C",
            "cozum": "Varrantlar Tebliği (VII-128.3) uyarınca paylar, endeksler, döviz, emtia ve kıymetli madenler dayanak varlık olabilir; gayrimenkul sertifikaları varant dayanağı yapılamaz."
          },
          {
            "id": 20,
            "soruMetni": "Dayanak varlığı almaktansa yatırımcıları sertifika almaya teşvik eden ve dayanak fiyatının önceden belirlenmiş bariyerin altına düşmemesi halinde belirli bir geri ödeme fiyatını garanti eden sermaye piyasası aracı hangisidir?",
            "secenekler": {
              "A": "Yatırım kuruluşu varantı",
              "B": "Ortaklık Varrantı",
              "C": "Endeks Sertifikaları",
              "D": "İskontolu Sertifikalar",
              "E": "Bonus Sertifikalar (Prim ödeyen sertifika)"
            },
            "dogruCevap": "E",
            "cozum": "Bariyer seviyesi koruması sağlayarak kâr/geri ödeme imkânı sunan yatırım kuruluşu sertifikaları Bonus Sertifika olarak adlandırılır."
          },
          {
            "id": 21,
            "soruMetni": "Ortaklık varantları hakkında aşağıdakilerden hangisi söylenebilir / DOĞRUDUR?",
            "secenekler": {
              "A": "Payları borsada işlem gören veya ilk defa halka arz edilecek ortaklıklar tarafından sadece kendi payları üzerine yazılı olarak ihraç edilebilir.",
              "B": "Vadesi 10 yıldan fazla olabilir.",
              "C": "Yalnızca aracı kurumlar ihraç edebilir.",
              "D": "Devredilmesi yasaktır.",
              "E": "Başka şirket payları üzerine ihraç edilebilir."
            },
            "dogruCevap": "A",
            "cozum": "Ortaklık varantları, ihraççı ortaklığın sadece kendi paylarını alma hakkı veren ve ihraççı ortaklık tarafından çıkarılan sermaye piyasası araçlarıdır."
          },
          {
            "id": 22,
            "soruMetni": "Aşağıdakilerden hangisi Türkiye’de yabancı sermaye piyasası araçlarının halka arz edilebilmesi için gereken ön şartlardan biri DEĞİLDİR?",
            "secenekler": {
              "A": "Devir veya tedavülünü kısıtlayıcı haklar bulunmaması",
              "B": "TL hariç herhangi başka bir para biriminden ihraç edilmiş olması",
              "C": "Yabancı ortaklıkların pay dışındaki ihraçlarında başvuru tarihinden önceki 1 yıl içerisinde bir derecelendirme kuruluşundan AAA notu alması zorunluluğu",
              "D": "İhraç edildikleri ülkede mali haklar ile ilgili işlem ve ödemelere kısıtlama bulunmaması",
              "E": "Borsada işlem görme başvurusunun veya ihracının reddedilmemiş olması"
            },
            "dogruCevap": "C",
            "cozum": "Yabancı Sermaye Piyasası Araçları Tebliği uyarınca AAA notu şartı yoktur; en az yatırım yapılabilir (investment grade) seviyesinde kredi notu almak yeterlidir."
          },
          {
            "id": 23,
            "soruMetni": "Aşağıdakilerden hangisi depo sertifikalarının (Depositary Receipts) yatırımcıya sağladığı faydalardan biri DEĞİLDİR?",
            "secenekler": {
              "A": "Uluslararası sermaye piyasalarından finansman imkânı sunması",
              "B": "İşlem gördüğü piyasanın kendi para birimi cinsinden ihraç edilip alım satıma konu olması",
              "C": "Doğrudan yabancı menkul kıymetlere yatırım yapmaya kıyasla daha düşük maliyet sunması",
              "D": "Yabancı hisse senedinin yerel piyasasındaki fiyatıyla işlem gördüğü için saat/kur farkından arbitraj imkânı sağlaması",
              "E": "İşlem gördüğü ülkenin düzenlemelerine tabi olması sonucunda yatırımcıların saat ve takas riskleriyle karşılaşarak mağdur olması"
            },
            "dogruCevap": "E",
            "cozum": "Depo sertifikaları yerel saklama ve yerel para birimi kolaylığı sunarak yatırımcının saat, takas ve yabancı mevzuat karmaşasını ortadan kaldırır; mağduriyet bir fayda değildir."
          },
          {
            "id": 24,
            "soruMetni": "Projeye Dayalı Menkul Kıymetler (PDMK) ihraç etmek amacıyla oluşturulan fonun yönetimi ve mal varlığının korunmasından kim sorumludur?",
            "secenekler": {
              "A": "Kamu Gözetimi Kurumu",
              "B": "Proje Finansmanı Fonu Kurucusu ve Teminat Yöneticisi",
              "C": "Borsa İstanbul Yönetim Kurulu",
              "D": "Ticaret Bakanlığı",
              "E": "MKK Genel Müdürlüğü"
            },
            "dogruCevap": "B",
            "cozum": "PDMK Tebliği uyarınca Proje Finansmanı Fonu kurucusu ve Teminat Yöneticisi fon mal varlığı ile teminatların korunması ve yönetiminden sorumludur."
          }
        ]
      }
    ]
  },
  {
    "code": "1005",
    "dersAdi": "1005 - Yatırım Kuruluşları",
    "kategori": "SPK Modül Kodu: 1005 | SPL Düzey 1, Düzey 2, Düzey 3, Türev Araçlar Lisansı",
    "duzeyler": [
      "duzey1",
      "duzey2",
      "duzey3",
      "turev"
    ],
    "aciklama": "1005 - Yatırım Kuruluşları - Resmi SPL Müfredat Temel Testi (1 Test, 1 Soru)",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: 1005 - Yatırım Kuruluşları Temel Değerlendirme Testi",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "1005 - Yatırım Kuruluşları müfredatına ilişkin temel mevzuat ve uygulama değerlendirmesi.",
            "secenekler": {
              "A": "Sermaye Piyasası Kanunu ve İlgili Mevzuat Hükümleri",
              "B": "Borsa İstanbul İşleyiş Kuralları",
              "C": "Ticaret Kanunu Genel Hükümleri",
              "D": "Takasbank ve MKK Saklama Düzenlemeleri",
              "E": "Yönetmelik ve Genelge Esasları"
            },
            "dogruCevap": "A",
            "cozum": "Bu soru ilgili dersin resmi müfredat kapsamını temel almaktadır."
          }
        ]
      }
    ]
  },
  {
    "code": "1006",
    "dersAdi": "1006 - Finansal Piyasalar",
    "kategori": "SPK Modül Kodu: 1006 | SPL Düzey 2, Düzey 3, Türev Araçlar Lisansı",
    "duzeyler": [
      "duzey2",
      "duzey3",
      "turev"
    ],
    "aciklama": "1006 - Finansal Piyasalar - Resmi SPL Müfredat Temel Testi (1 Test, 1 Soru)",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: 1006 - Finansal Piyasalar Temel Değerlendirme Testi",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "1006 - Finansal Piyasalar müfredatına ilişkin temel mevzuat ve uygulama değerlendirmesi.",
            "secenekler": {
              "A": "Sermaye Piyasası Kanunu ve İlgili Mevzuat Hükümleri",
              "B": "Borsa İstanbul İşleyiş Kuralları",
              "C": "Ticaret Kanunu Genel Hükümleri",
              "D": "Takasbank ve MKK Saklama Düzenlemeleri",
              "E": "Yönetmelik ve Genelge Esasları"
            },
            "dogruCevap": "A",
            "cozum": "Bu soru ilgili dersin resmi müfredat kapsamını temel almaktadır."
          }
        ]
      }
    ]
  },
  {
    "code": "1007",
    "dersAdi": "1007 - Finansal Yönetim ve Mali Analiz",
    "kategori": "SPK Modül Kodu: 1007 | SPL Düzey 2, Düzey 3 Lisansı",
    "duzeyler": [
      "duzey2",
      "duzey3"
    ],
    "aciklama": "1007 - Finansal Yönetim ve Mali Analiz - Resmi SPL Müfredat Temel Testi (1 Test, 1 Soru)",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: 1007 - Finansal Yönetim ve Mali Analiz Temel Değerlendirme Testi",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "1007 - Finansal Yönetim ve Mali Analiz müfredatına ilişkin temel mevzuat ve uygulama değerlendirmesi.",
            "secenekler": {
              "A": "Sermaye Piyasası Kanunu ve İlgili Mevzuat Hükümleri",
              "B": "Ticaret Kanunu Genel Hükümleri",
              "C": "Takasbank ve MKK Saklama Düzenlemeleri",
              "D": "Yönetmelik ve Genelge Esasları",
              "E": "Borsa İstanbul İşleyiş Kuralları"
            },
            "dogruCevap": "A",
            "cozum": "Bu soru ilgili dersin resmi müfredat kapsamını temel almaktadır."
          }
        ]
      }
    ]
  },
  {
    "code": "1008",
    "dersAdi": "1008 - Genel Ekonomi",
    "kategori": "SPK Modül Kodu: 1008 | SPL Düzey 3 Lisansı",
    "duzeyler": [
      "duzey3"
    ],
    "aciklama": "Genel Ekonomi (1008) - Resmi SPL Çalışma Notundan Çıkarılmış Gerçek Sınav Soruları (5 Test, 84 Orijinal Soru)",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: Temel Kavramlar ve Fiyat Mekanizması",
        "testTuru": "konu",
        "sorular": [
          {
            "id": "1008_t1_1",
            "soru": "BİRİNCİ BÖLÜM SORULARI 1. Aşağıdakilerden hangisi mikro ekonominin inceleme konusuna girmez?",
            "secenekler": {
              "A": "Monopol dengesi",
              "B": "Firma maliyeti",
              "C": "Milli gelir seviyesi",
              "D": "Tüketici faydası"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_2",
            "soru": "Aşağıdakilerden hangisi arz kaymasına yol açmaz?",
            "secenekler": {
              "A": "Teknolojinin gelişmesi",
              "B": "Maliyet artışı",
              "C": "Üretici sayısının artması",
              "D": "Malın fiyatının azalması"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_3",
            "soru": "Aşağıdakilerden hangisi kayıtsızlık eğrilerinin özelliklerinden birisi değildir?",
            "secenekler": {
              "A": "Orijine yaklaştıkça daha yüksek faydayı ifade ederler",
              "B": "Orijine göre dış bükeydirler",
              "C": "Eğriler birbirini kesmezler",
              "D": "Negatif eğimlidirler"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_4",
            "soru": "Kayıtsızlık eğrisinin dikey ve yatay ekseninde aşağıdakilerden hangileri yer almaktadır?",
            "secenekler": {
              "A": "Malların tüketim miktarları",
              "B": "Malın fiyatı ve malın tüketim miktarı",
              "C": "Malın fiyatı ve malın faydası",
              "D": "Malların üretim miktarları"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_5",
            "soru": "Kayıtsızlık (farksızlık) eğrisinin orijine göre dış bükey olmasının nedeni aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Azalan marjinal fayda",
              "B": "Fırsat maliyeti",
              "C": "Azalan marjinal teknik ikame oranı",
              "D": "Azalan marjinal ikame oranı"
            },
            "dogruCevap": "E",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_6",
            "soru": "Tam tamamlayıcı malların kayıtsızlık eğrisinin şekli aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Negatif eğimli ve iki ekseni kesen bir eğridir",
              "B": "L şeklindedir",
              "C": "Yatay eksene paralel bir eğridir",
              "D": "Dikey eksene paralel bir eğridir"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_7",
            "soru": "Girdilerdeki %10’luk artışa karşılık üretim %25 artıyorsa aşağıdakilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Ölçeğe göre azalan verim vardır",
              "B": "Ölçeğe göre sabit verim vardır",
              "C": "Maliyetlerde azalma vardır",
              "D": "Ölçeğe göre artan verim vardır"
            },
            "dogruCevap": "E",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_8",
            "soru": "Üretimde kullanılan değişken girdi miktarı 2 birimden 3 birime çıktığında, toplam ürün 50 birimden 200 birime çıkarsa marjinal ürün miktarı kaç olur?",
            "secenekler": {
              "A": "150",
              "B": "100",
              "C": "75",
              "D": "40"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_9",
            "soru": "Tam rekabet piyasasında uzun dönemde normal kar oluşmasının asıl nedeni aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Atomisite",
              "B": "Şeffaflık",
              "C": "Mobilite",
              "D": "Homojenlik"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_10",
            "soru": "Aşağıdakilerden hangisi talep eğrisi üzerinde bir harekete neden olur?",
            "secenekler": {
              "A": "Malın fiyatının değişmesi",
              "B": "Maliyetlerin artması",
              "C": "Teknolojik gelişmeler",
              "D": "Gelirin artması"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_11",
            "soru": "Bir malın fiyatı 400 birimden 600 birime çıktığında talep edilen miktarı 1000 birimden 500 birime düşmektedir. Yay esnekliği formülüne göre talebin fiyat esnekliği kaçtır?",
            "secenekler": {
              "A": "5/3",
              "B": "3/5",
              "C": "-3/5",
              "D": "-5/3"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_12",
            "soru": "Toplam faydanın maksimum olduğu seviye için aşağıdaki bilgilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Ortalama fayda sıfırdır",
              "B": "Marjinal fayda sıfırdır",
              "C": "Ortalama fayda en düşük seviyesindedir",
              "D": "Marjinal fayda minimum seviyesindedir"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_13",
            "soru": "Aşağıdaki mal gruplarından hangisi tamamlayıcı mallara örnektir?",
            "secenekler": {
              "A": "Elma-armut",
              "B": "Çay-kahve",
              "C": "Araba-benzin",
              "D": "Kırmızı et-beyaz et"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_14",
            "soru": "Aşağıdaki üretim faktörü ve geliri eşleştirmelerinden hangisi yanlıştır?",
            "secenekler": {
              "A": "Girişimci-kar",
              "B": "Sermaye-rant",
              "C": "Sermaye-faiz",
              "D": "Emek-ücret"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_15",
            "soru": "Üretim olanakları eğrisinin iç kısmında yer alan bir nokta için aşağıdakilerden hangisi söylenebilir?",
            "secenekler": {
              "A": "Üretim tam kapasite çalışmaktadır",
              "B": "Denge sağlanmıştır",
              "C": "Üretim faktörleri yetersiz kalmıştır",
              "D": "Üretim faktörleri eksik üretim yapmaktadır"
            },
            "dogruCevap": "E",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_16",
            "soru": "Bireyin gelirinin arttığı bir durumda denge miktar ve denge fiyat hakkında aşağıdakilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Talep azalır",
              "B": "Arz azalır",
              "C": "Malın denge fiyat seviyesi değişmez",
              "D": "Malın denge fiyatı yükselir"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_17",
            "soru": "Üretim maliyetlerinin arttığı bir durumda denge miktar ve denge fiyat hakkında aşağıdakilerden hangisi gerçekleşir?",
            "secenekler": {
              "A": "Malın denge fiyatı düşer",
              "B": "Arz eğrisi sola kayar",
              "C": "Talep artar",
              "D": "Arz eğrisi değişmez"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          }
        ]
      },
      {
        "testId": 2,
        "testAdi": "Test 2: Esneklik, Üretim, Maliyetler ve Piyasalar",
        "testTuru": "konu",
        "sorular": [
          {
            "id": "1008_t2_1",
            "soru": "Talep eğrisinin dikey eksene paralel olduğu bir durumda aşağıdakilerden hangisi söylenebilir?",
            "secenekler": {
              "A": "Talep sonsuz esnektir.",
              "B": "Talep eğrisi fiyat artışlarına oldukça duyarlıdır",
              "C": "Talep birim esnektir",
              "D": "Talep eğrisi tam inelastiktir"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_2",
            "soru": "Tam rekabet piyasası ile ilgili aşağıdaki bilgilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Kısa dönem ve uzun dönem firma dengeleri farklıdır",
              "B": "Marjinal maliyet eğrisi yatay eksene paraleldir.",
              "C": "Denge koşulu MC=P=MR dir",
              "D": "Üretici ve tüketicilerin fiyat üzerinde kontrolleri yoktur"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_3",
            "soru": "Aşağıdakilerden hangisi monopol piyasası hakkında yanlış bir bilgidir?",
            "secenekler": {
              "A": "Marjinal gelir eğrisi ortalama gelir eğrisinin altındadır",
              "B": "Tek satıcı, çok sayıda alıcı vardır",
              "C": "Piyasaya girişte engeller bulunmaktadır",
              "D": "Üretilen malın yakın ikamesi vardır"
            },
            "dogruCevap": "E",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_4",
            "soru": "Aşağıdakilerden hangisi monopolcü rekabet piyasası hakkında yanlış bir bilgidir?",
            "secenekler": {
              "A": "Ürün farklılaştırılması yapılır",
              "B": "Piyasaya giriş çıkış serbesttir",
              "C": "Piyasada çok satıcı tek alıcı vardır",
              "D": "Monopol ve tam rekabet piyasasının özelliklerini taşır"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_5",
            "soru": "Aşağıdakilerden hangisi oligopol piyasası hakkında doğru bir bilgidir?",
            "secenekler": {
              "A": "Çok alıcı çok satıcı bulunmaktadır",
              "B": "Sadece homojen ürün üretilir",
              "C": "Piyasaya giriş-çıkış serbesttir",
              "D": "Anlaşma yapan firmalar tröst oluşturur"
            },
            "dogruCevap": "E",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_6",
            "soru": "Bir malın fiyatı 8 liradan 16 liraya çıktığında talep miktarı 20 birimden 10 birime düşmüştür. Bu malın talebinin fiyat esnekliği kaçtır?",
            "secenekler": {
              "A": "-0,5",
              "B": "0",
              "C": "0,5",
              "D": "1"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_7",
            "soru": "Üretici dengesi hangi iki eğrinin teğet olduğu noktada gerçekleşmektedir?",
            "secenekler": {
              "A": "Eş Maliyet Doğrusu – Bütçe Doğrusu",
              "B": "Talep Eğrisi – Arz Eğrisi",
              "C": "Eş ürün Eğrisi – Kayıtsızlık Eğrisi",
              "D": "Eş Ürün Eğrisi – Eş Maliyet Doğrusu"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_8",
            "soru": "Tüketici dengesi hangi iki eğrinin teğet olduğu noktada gerçekleşmektedir?",
            "secenekler": {
              "A": "Talep Eğrisi – Arz Eğrisi",
              "B": "Eş Ürün Eğrisi – Eş Maliyet Doğrusu",
              "C": "Eş Maliyet Doğrusu – Bütçe Doğrusu",
              "D": "Bütçe Doğrusu – Kayıtsızlık Eğrisi"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_9",
            "soru": "Sermaye ve emek gücü arasındaki ikame ilişkisini gösteren eş ürün eğrisinin eğimi aşağıdakilerden hangisine eşittir?",
            "secenekler": {
              "A": "Marjinal Teknik İkame Oranı",
              "B": "Marjinal İkame Oranı",
              "C": "Marjinal Dönüşüm Oranı",
              "D": "Marjinal Maliyet"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_10",
            "soru": "Talep eğrisi aşağıdaki gibi olan bir ürünün, miktarının 40 birim olduğu noktada fiyat esnekliği nedir? 𝑄= 20𝑃−2",
            "secenekler": {
              "A": "+2",
              "B": "-2",
              "C": "-1",
              "D": "+1"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_11",
            "soru": "X malı ile Y malı arasındaki ilişki hakkında ne söylenebilir?",
            "secenekler": {
              "A": "Y malının fiyatı azaldığında X malına olan talep artacağından X ve Y malları tamamlayıcı",
              "B": "Y malının fiyatı artığında X malına olan talep artacağından X ve Y malları tamamlayıcı",
              "C": "Y malının fiyatı arttığında X malına olan talep artacağından X ve Y malları ikame mallardır.",
              "D": "Y malının fiyatı azaldığında X malına olan talep artacağından X ve Y malları ikame mallardır."
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_12",
            "soru": "İKİNCİ BÖLÜM SORULARI 1. Aşağıdakilerden hangisi paranın fonksiyonlarından birisi değildir?",
            "secenekler": {
              "A": "Standart olma",
              "B": "Değer muhafaza aracı olma",
              "C": "Hesap birimi olma",
              "D": "Değişim aracı olma"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_13",
            "soru": "Aşağıdakilerden hangisi parada olması gereken özelliklerden birisi değildir?",
            "secenekler": {
              "A": "Genel kabul görmelidir",
              "B": "Bölünebilir olmamalıdır",
              "C": "Taklit edilmemelidir",
              "D": "Dayanıklı olmalıdır"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_14",
            "soru": "“Kötü para iyi parayı kovar” temelindeki görüş aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Gresham Kanunu",
              "B": "Monetarist Kanunu",
              "C": "Keynes Kanunu",
              "D": "Lorenz Kanunu"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_15",
            "soru": "I- Parayı talep eden kişi sayısı II- Ödeme sistemlerinin değişmesi III- Faiz oranları Yukarıdakilerden hangileri para talebini etkileyen faktörlerdendir?",
            "secenekler": {
              "A": "II-III",
              "B": "I-II-III",
              "C": "I-III",
              "D": "Yalnız I"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_16",
            "soru": "Aşağıdaki bilgilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Miktar Teorisi’ne göre para talebi işlem, ihtiyat ve spekülasyon güdüleri ile belirlenmektedir",
              "B": "İhtiyat güdüsü günlük yaşamın ihtiyaçları için talep edilen para miktarını ifade eder",
              "C": "Miktar Teorisi’ne göre paranın dolaşım hızı sabit değildir",
              "D": "Cambridge Yaklaşımı’na göre servet tutma isteği para talebini etkilemektedir"
            },
            "dogruCevap": "E",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_17",
            "soru": "Likidite Tuzağı ile ilgili aşağıdakilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Faiz oranları en düşük seviyede iken tahvil alımları devam eder",
              "B": "Milton Friedman tarafından geliştirilmiştir",
              "C": "Faiz oranları en düşük seviyede iken para talebi sonsuz esnektir",
              "D": "Marshall ve Pigou tarafından geliştirilmiştir"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          }
        ]
      },
      {
        "testId": 3,
        "testAdi": "Test 3: Para Politikaları ve Merkez Bankacılığı",
        "testTuru": "konu",
        "sorular": [
          {
            "id": "1008_t3_1",
            "soru": "Modern Miktar Teorisi’ne göre aşağıdaki bilgilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Faiz oranları para talebini etkiler",
              "B": "Monetarist Para Talebi teorisidir",
              "C": "Enflasyon beklentileri para talebini etkiler",
              "D": "Beşerî sermaye para talebini etkilemez"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_2",
            "soru": "Aşağıdakilerden hangisi Merkez Bankası’nın görevlerinden değildir?",
            "secenekler": {
              "A": "Banknot ve para basmak",
              "B": "Madeni para basmak",
              "C": "Altın ve döviz rezervi bulundurmak",
              "D": "Yerli paranın değerini korumak"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_3",
            "soru": "Aşağıdakilerden hangisi ekonomi politikasının araçlarından biri değildir?",
            "secenekler": {
              "A": "Tam istihdam politikası",
              "B": "Dış ticaret politikaları",
              "C": "Maliye politikası",
              "D": "Para politikası"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_4",
            "soru": "Aşağıdakilerden hangisi para politikasının araçlarından değildir?",
            "secenekler": {
              "A": "İç borçlanma",
              "B": "Zorunlu karşılıklar",
              "C": "Açık piyasa işlemleri",
              "D": "Reeskont oranı"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_5",
            "soru": "Aşağıdaki bilgilerden hangisi doğru değildir?",
            "secenekler": {
              "A": "Genişletici para politikaları, faiz oranlarını yükseltir",
              "B": "Genişletici para politikalarında para arzı arttırılır",
              "C": "Daraltıcı para politikaları, bireyleri tasarruf yapmaya yönlendirir",
              "D": "Yüksek enflasyon varsa daraltıcı para politikaları uygulanır"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_6",
            "soru": "Keynesyen para talebi teorisine göre aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Ekonomik birimler işlem saikiyle para talep ederler",
              "B": "Ekonomik birimler spekülasyon saikiyle para talep ederler",
              "C": "Ekonomik birimler ihtiyat saikiyle para talep ederler",
              "D": "Para talebi faiz oranlarının ve gelirin negatif bir fonksiyonudur"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_7",
            "soru": "Taylor Kuralı ile ilgili aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Gerçekleşen milli hasıla potansiyel milli hasılanın üzerindeyse nominal faiz oranı artar",
              "B": "Reel faiz oranı arttıkça nominal faiz oranı da artar",
              "C": "Gerçekleşen enflasyon beklenen enflasyonun altında kaldıysa nominal faiz oranı artar",
              "D": "Enflasyon arttıkça nominal faiz oranı da artar"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_8",
            "soru": "Merkez bankası bağımsızlığıyla ilgili aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Merkez bankası tarafından birincil piyasadan devlet iç borçlanma senedi alınmasının kanunen",
              "B": "Bağımsızlığın önemli bir göstergesi araç bağımsızlığıdır",
              "C": "Araç bağımsızlığının diğer bir ismi de fonksiyonel bağımsızlıktır.",
              "D": "Bağımsızlık için amaç bağımsızlığı şarttır"
            },
            "dogruCevap": "E",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_9",
            "soru": "Repo ve ters repoya ilişkin aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Repo yapan işlem tarihinde menkul kıymeti ihraç eden veya satandır",
              "B": "Ters repoda bir menkul kıymet işlem tarihinde alınıp, bitiş valöründe ise satılır.",
              "C": "Bir menkul kıymetin işlem başlangıç valöründe satılıp, bitiş tarihinde geri alınmasına repo",
              "D": "Repo yapan fon arz edendir."
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_10",
            "soru": "Fisher Para Talep Teorisine göre aşağıdakilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Paranın dolaşım hızı kısa dönemde değişkendir",
              "B": "Para arzındaki artış üretim düzeyini de arttıracaktır",
              "C": "Kısa dönemde nominal para arzındaki bir artış veya azalış fiyatlar genel düzeyine birebir",
              "D": "Fiyatlar genel düzeyi aşağı ve yukarı yönlü esnektir."
            },
            "dogruCevap": "E",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_11",
            "soru": "Cambridge Para Talep Teorisi’ne göre aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Kısa dönemde paranın dolaşım hızı ve milli gelir sabittir",
              "B": "A.C. Pigou tarafından ortaya atılmıştır",
              "C": "Para talebinin temel nedenlerinden biri spekülasyon saikidir.",
              "D": "Kısa dönemde para arzındaki değişiklikler birebir fiyatlara yansır"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_12",
            "soru": "ÜÇÜNCÜ BÖLÜM SORULARI 1. Maliye politikalarıyla ilgili olarak aşağıdakilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Daraltıcı maliye politikalarının işsizlik oranını düşürücü etkisi vardır",
              "B": "Vergi oranlarının azaltılması, genişletici maliye politikası uygulamasıdır",
              "C": "Faiz oranları, uygulanan maliye politikalarından etkilenmez",
              "D": "Enflasyon halinde genişletici maliye politikaları uygulanmalıdır"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_13",
            "soru": "Aşağıdakilerden hangisi Klasik ekonomistlerin görüşlerinden biri değildir?",
            "secenekler": {
              "A": "Para ve maliye politikalarının etkinliği sınırlıdır",
              "B": "Bütçe denkliğini sağlamak mümkün değildir",
              "C": "Müdahale olmaksızın piyasa sorunları ortadan kalkabilir",
              "D": "Tüm piyasalarda tam rekabet piyasası koşulları geçerlidir"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_14",
            "soru": "Monetarist görüşe göre hangisi söylenemez?",
            "secenekler": {
              "A": "Nominal gelir düzeyi para miktarıyla doğrudan ilişkilidir",
              "B": "Para arzı arttığında nominal GSYH artar",
              "C": "Para politikası uygulamalarında önemli olan para arzını kontrol etmektir",
              "D": "Para kısa dönemde nötrdür"
            },
            "dogruCevap": "E",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_15",
            "soru": "Keynesyen görüşe göre aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Fiyat ve ücretler esnektir",
              "B": "Toplam talebe yönelik müdahalelerde bulunulmalıdır",
              "C": "Ekonomi eksik istihdamdadır",
              "D": "Devletin ekonomiye müdahalesi gereklidir"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_16",
            "soru": "IS-LM analizine göre genişletici para politikasının uygulandığı durumda aşağıdakilerden hangisi gerçekleşmez?",
            "secenekler": {
              "A": "IS eğrisi değişmez",
              "B": "Yeni denge noktasında milli gelir değişmez",
              "C": "LM eğrisi sağa kayar",
              "D": "Faiz oranları azalır"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_17",
            "soru": "IS-LM analizine göre vergi oranları arttırıldığında aşağıdakilerden hangisi gerçekleşmez?",
            "secenekler": {
              "A": "Faiz oranı düşer",
              "B": "Milli gelir düşer",
              "C": "LM eğrisi sağa kayar",
              "D": "IS eğrisi sola kayar"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          }
        ]
      },
      {
        "testId": 4,
        "testAdi": "Test 4: Maliye Politikaları ve Makroekonomik Göstergeler",
        "testTuru": "konu",
        "sorular": [
          {
            "id": "1008_t4_1",
            "soru": "Gelirinin %80’ini tüketime ayıran bir tüketici için transfer harcamalarında görülen 500 birimlik bir artış gelir düzeyini kaç birim arttırır?",
            "secenekler": {
              "A": "2000",
              "B": "500",
              "C": "1000",
              "D": "400"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_2",
            "soru": "Politika etkisizliği kavramı hangi iktisadi yaklaşım için geçerlidir?",
            "secenekler": {
              "A": "Yeni Keynesyen Yaklaşım",
              "B": "Monetarist Yaklaşım",
              "C": "Keynesyen Yaklaşım",
              "D": "Yeni Klasik Yaklaşım"
            },
            "dogruCevap": "E",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_3",
            "soru": "Aşağıdakilerden hangisi maliye politikasının amaçları arasında değildir?",
            "secenekler": {
              "A": "Ekonomik İstikrar",
              "B": "Faiz Oranı İstikrarı",
              "C": "Adil Gelir Dağılımı",
              "D": "Ekonomik Büyüme ve Kalkınma"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_4",
            "soru": "IS eğrisi ile ilgili aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "IS eğrisi üzerindeki noktalarda yatırım-tasarruf eşitliği söz konusudur.",
              "B": "IS eğrisinin solundaki noktalarda mal arz fazlası vardır.",
              "C": "IS eğrisi genişletici maliye politikası sonucunda sağa kayar",
              "D": "IS eğrisi mal piyasalarında dengeyi sağlayan gelir-faiz haddi bileşimlerinin geometrik yeridir."
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_5",
            "soru": "Harcama çarpanı ile ilgili aşağıdakilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Marjinal ithalat eğiliminin artması harcama çarpanını arttırır",
              "B": "Marjinal vergi haddinin azalması harcama çarpanını azaltır",
              "C": "Otonom tüketim miktarının artması harcama çarpanını arttırır",
              "D": "Marjinal tüketim eğiliminin artması haracama çarpanını arttırır"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_6",
            "soru": "DÖRDÜNCÜ BÖLÜM SORULARI 1. Aşağıdaki faktörlerden hangisi kişi başına düşen GSYH’yi etkilememektedir?",
            "secenekler": {
              "A": "Otonom yatırım",
              "B": "Kaynakların etkin dağılımı",
              "C": "Kayıt dışı ekonomi",
              "D": "Nüfus yapısı"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_7",
            "soru": "Aşağıdakilerden hangisi kamu gelirleri arasında gösterilemez?",
            "secenekler": {
              "A": "Vergiler",
              "B": "Borçlanma",
              "C": "Vergi cezaları",
              "D": "Sübvansiyonlar"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_8",
            "soru": "Aşağıdakilerden hangisi kamu giderleri arasında gösterilemez?",
            "secenekler": {
              "A": "Değişken harcamalar",
              "B": "Cari harcamalar",
              "C": "Yatırım harcamaları",
              "D": "Transfer harcamaları"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_9",
            "soru": "Aşağıdakilerden hangisi TCMB rezervlerinin piyasadaki rolü hakkında yanlış bir bilgidir?",
            "secenekler": {
              "A": "Döviz Kuru hedefleri doğrultusunda kullanılabilirler",
              "B": "Merkez Bankasına manevra alanı sağlar",
              "C": "Likidite yetersizliklerine kaynaktırlar",
              "D": "İç dengeyi bozucu etkileri bulunmaktadır"
            },
            "dogruCevap": "E",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_10",
            "soru": "GSMH ile GSYH arasındaki fark aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Amortismanlar",
              "B": "Transfer Ödemeleri",
              "C": "Kurumlar Vergisi",
              "D": "Dış Alem Net Faktör Gelirleri"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_11",
            "soru": "Bir ekonomideki tüm üretim faktörlerinin tam kullanım kapasiteleri doğrultusunda istihdam edilmesi ile ulaşılabilecek çıktının ifadesi aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Reel GSYH",
              "B": "Nominal GSYH",
              "C": "Fiili GSYH",
              "D": "Potansiyel GSYH"
            },
            "dogruCevap": "E",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_12",
            "soru": "Aşağıdakilerden hangisi milli gelirin tam olarak yansıtamadığı konulardan birisi değildir?",
            "secenekler": {
              "A": "Çevre sorunları",
              "B": "Kayıt dışı ekonomi",
              "C": "Üretim faktörlerinin geliri",
              "D": "Ürün kalitesindeki gelişmeler"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_13",
            "soru": "Aşağıdakilerden hangisi yatırım kararını etkileyen faktörlerden birisi değildir?",
            "secenekler": {
              "A": "Teknolojik gelişmeler",
              "B": "Faiz oranı",
              "C": "Otonom Tüketim",
              "D": "Beklenti ve tahminler"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_14",
            "soru": "Daha fazla paranın daha az malı kovaladığı enflasyon türü aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Ilımlı enflasyon",
              "B": "Arz enflasyonu",
              "C": "Talep Enflasyonu",
              "D": "Hiperenflasyon"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_15",
            "soru": "Aşağıdakilerden hangisi doğal işsizlik oranını etkileyen faktörlerden birisi değildir?",
            "secenekler": {
              "A": "Devlet politikaları",
              "B": "Maliyet analizi",
              "C": "Demografik değişimler",
              "D": "Arz şokları"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_16",
            "soru": "Eksik talep işsizliği olarak da bilinen işsizlik türü aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Doğal İşsizlik",
              "B": "Konjonktürel İşsizlik",
              "C": "Reel Ücret İşsizliği",
              "D": "Friksiyonel İşsizlik"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_17",
            "soru": "Gini katsayısı ile ilgili olarak şağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Gini katsayısı 1’den büyük olabilir",
              "B": "Gini katsayısı Lorenz eğrisi vasıtasıyla hesaplanır",
              "C": "Gini katsayısı 0’a yaklaştıkça gelir eşitsizliği azalır",
              "D": "Gini katsayısı 1’e yaklaştıkça gelir eşitsizliği artar"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          }
        ]
      },
      {
        "testId": 5,
        "testAdi": "Test 5: Dış Ticaret ve Uluslararası Ekonomi",
        "testTuru": "konu",
        "sorular": [
          {
            "id": "1008_t5_1",
            "soru": "Aşağıdakilerden hangisi işsizlik türlerinden değildir?",
            "secenekler": {
              "A": "Arz işsizliği",
              "B": "Arızi işsizlik",
              "C": "Yapısal işsizlik",
              "D": "Konjonktürel işsizlik"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_2",
            "soru": "Hiperenflasyonla ilgili aşağıdakilerden hangisi doğru değildir?",
            "secenekler": {
              "A": "Yurtiçi yerleşiklerin alım gücü çok düşer",
              "B": "Yerli parar yabancı paranın yerini alır",
              "C": "Gelir ve servet dağılımı olumsuz etkilenir",
              "D": "Genellikle savaş ve doğal afet zamanlarındaki politikalardan kaynaklanır"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_3",
            "soru": "Aşağıdakilerden hangisi enflasyonun maliyetlerinden değildir?",
            "secenekler": {
              "A": "Yerli paranın değer kazanması",
              "B": "Kösele maliyeti",
              "C": "Gelir eşitsizliği",
              "D": "Satın alma gücünde düşüş"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_4",
            "soru": "Aşağıdakilerden hangisi merkez bankasının yükümlülüklerinden değildir?",
            "secenekler": {
              "A": "Emisyon",
              "B": "Zorunlu karşılıklar",
              "C": "Hazineden alacaklar",
              "D": "Serbest rezervler"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_5",
            "soru": "Aşağıdakilerden hangisi Covid-19 salgınının etkilerinden değildir?",
            "secenekler": {
              "A": "Hizmet sektörü güven endeksinde artış",
              "B": "Tüketici güven endeksinde düşüş",
              "C": "İnşaat sektörü güven endeksinde düşüş",
              "D": "İşsizlikteki artış"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_6",
            "soru": "BEŞİNCİ BÖLÜM SORULARI 1. Aşağıdakilerden hangisi ödemeler bilançosunun kalemlerinden değildir?",
            "secenekler": {
              "A": "Net Hata Noksan",
              "B": "Cari İşlemler Hesabı",
              "C": "Sermaye Hesabı",
              "D": "Döviz Kuru Hesabı"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_7",
            "soru": "Aşağıdakilerden hangisi yerli ve yabancı paranın direkt olarak birbirinin cinsinden ifade edilmesini tanımlar?",
            "secenekler": {
              "A": "Dolaysız Kur",
              "B": "Düz Kur",
              "C": "Nominal Kur",
              "D": "Reel Kur"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_8",
            "soru": "Merkez Bankaları tarafından kur seviyesinin sürekli takip edilip müdahale edildiği karma kur sistemi aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Ayarlanabilir Kur Sistemi",
              "B": "Ortak Dalgalanma Sistemi",
              "C": "Kayan Kur Sistemi",
              "D": "Döviz Kuru Bandı Sistemi"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_9",
            "soru": "Esnek kur sistemi hakkında aşağıdaki bilgilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Ödemeler dengesi sorunları piyasa şartlarında çözülemez",
              "B": "Sürekli devlet müdahalesi gerekir",
              "C": "Kur Merkez Bankası tarafından sabitlenir",
              "D": "Ödemeler dengesinde devlet müdahalesine gerek kalmaz"
            },
            "dogruCevap": "E",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_10",
            "soru": "Belirlenen alt ve üst limitle döviz kurunun dalgalanmaya bırakıldığı kur rejimi aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Bant Kuru",
              "B": "Ortak Dalgalanma",
              "C": "Kayan Kur",
              "D": "Döviz Kuru Bandı"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_11",
            "soru": "Aşağıdakilerden hangisi dış ticaret politikası araçlarından biri değildir?",
            "secenekler": {
              "A": "Gümrük tarifeleri",
              "B": "Bağlı ticaret",
              "C": "İhracatın özendirilmesi",
              "D": "Açık piyasa işlemleri"
            },
            "dogruCevap": "E",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_12",
            "soru": "Sabit kur sisteminde uygulanan para ve maliye politikalarıyla ilgili aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Maliye politikaları etkindir",
              "B": "Maliye politikası uygulaması milli gelir düzeyini yükseltir",
              "C": "Genişletici maliye politikaları uygulanırsa sermaye girişleri yaşanır",
              "D": "Para politikaları etkindir"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_13",
            "soru": "Esnek kur sisteminde uygulanan para ve maliye politikaları için hangisi söylenemez?",
            "secenekler": {
              "A": "Genişletici para politikası uygulanırsa dış talep artışı yaşanır",
              "B": "Para politikaları etkindir",
              "C": "Genişletici maliye politikası uygulanırsa sermaye çıkışları yaşanır",
              "D": "Genişletici para politikası uygulanırsa yabancı para değer kazanır"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_14",
            "soru": "Dış borç stokunda en büyük pay aşağıdakilerden hangisine aittir?",
            "secenekler": {
              "A": "Kamu Sektörü",
              "B": "TCMB",
              "C": "Ticari Bankalar",
              "D": "Özel Sektör"
            },
            "dogruCevap": "E",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_15",
            "soru": "Aşağıdakilerden hangisi dış ticaret dengesi ile ilgili bir gösterge değildir?",
            "secenekler": {
              "A": "İhracatın İthalatı Karşılama Oranı",
              "B": "GSYH",
              "C": "İthalat",
              "D": "İhracat"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_16",
            "soru": "Leontief paradoksu aşağıdakilerden hangisini kapsamaktadır?",
            "secenekler": {
              "A": "ABD’nin emek yoğun mal ihraç edip sermaye yoğun mal ithal etmesi",
              "B": "ABD’nin sermaye yoğun mal ihraç edip emek yoğun mal ithal etmesi",
              "C": "ABD’nin hem sermaye yoğun hem de emek yoğun mal ihraç etmesi",
              "D": "ABD’nin hem sermaye yoğun hem de emek yoğun mal ithal etmesi"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          }
        ]
      }
    ]
  },
  {
    "code": "1009",
    "dersAdi": "1009 - Temel Finans Matematiği ve Değerleme Yöntemleri",
    "kategori": "SPK Modül Kodu: 1009 | SPL Düzey 3, Türev Araçlar Lisansı",
    "duzeyler": [
      "duzey3",
      "turev"
    ],
    "aciklama": "1009 - Temel Finans Matematiği ve Değerleme Yöntemleri - Resmi SPL Müfredat Temel Testi (1 Test, 1 Soru)",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: 1009 - Temel Finans Matematiği ve Değerleme Yöntemleri Temel Değerlendirme Testi",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "1009 - Temel Finans Matematiği ve Değerleme Yöntemleri müfredatına ilişkin temel mevzuat ve uygulama değerlendirmesi.",
            "secenekler": {
              "A": "Sermaye Piyasası Kanunu ve İlgili Mevzuat Hükümleri",
              "B": "Borsa İstanbul İşleyiş Kuralları",
              "C": "Ticaret Kanunu Genel Hükümleri",
              "D": "Yönetmelik ve Genelge Esasları",
              "E": "Takasbank ve MKK Saklama Düzenlemeleri"
            },
            "dogruCevap": "A",
            "cozum": "Bu soru ilgili dersin resmi müfredat kapsamını temel almaktadır."
          }
        ]
      }
    ]
  },
  {
    "code": "1010",
    "dersAdi": "1010 - Ticaret Hukuku",
    "kategori": "SPK Modül Kodu: 1010 | SPL Düzey 2, Düzey 3 Lisansı",
    "duzeyler": [
      "duzey2",
      "duzey3"
    ],
    "aciklama": "1010 - Ticaret Hukuku - Resmi SPL Müfredat Temel Testi (1 Test, 1 Soru)",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: 1010 - Ticaret Hukuku Temel Değerlendirme Testi",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "1010 - Ticaret Hukuku müfredatına ilişkin temel mevzuat ve uygulama değerlendirmesi.",
            "secenekler": {
              "A": "Sermaye Piyasası Kanunu ve İlgili Mevzuat Hükümleri",
              "B": "Takasbank ve MKK Saklama Düzenlemeleri",
              "C": "Yönetmelik ve Genelge Esasları",
              "D": "Borsa İstanbul İşleyiş Kuralları",
              "E": "Ticaret Kanunu Genel Hükümleri"
            },
            "dogruCevap": "A",
            "cozum": "Bu soru ilgili dersin resmi müfredat kapsamını temel almaktadır."
          }
        ]
      }
    ]
  },
  {
    "code": "1011",
    "dersAdi": "1011 - Türev Araçlar, Piyasalar ve Risk Yönetimi",
    "kategori": "SPK Modül Kodu: 1011 | SPL Türev Araçlar Lisansı (Zorunlu Modül)",
    "duzeyler": [
      "turev"
    ],
    "aciklama": "1011 - Türev Araçlar, Piyasalar ve Risk Yönetimi - Resmi SPL Müfredat Temel Testi (1 Test, 1 Soru)",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: 1011 - Türev Araçlar, Piyasalar ve Risk Yönetimi Temel Değerlendirme Testi",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "1011 - Türev Araçlar, Piyasalar ve Risk Yönetimi müfredatına ilişkin temel mevzuat ve uygulama değerlendirmesi.",
            "secenekler": {
              "A": "Sermaye Piyasası Kanunu ve İlgili Mevzuat Hükümleri",
              "B": "Takasbank ve MKK Saklama Düzenlemeleri",
              "C": "Yönetmelik ve Genelge Esasları",
              "D": "Ticaret Kanunu Genel Hükümleri",
              "E": "Borsa İstanbul İşleyiş Kuralları"
            },
            "dogruCevap": "A",
            "cozum": "Bu soru ilgili dersin resmi müfredat kapsamını temel almaktadır."
          }
        ]
      }
    ]
  },
  {
    "code": "1012",
    "dersAdi": "1012 - Takas, Saklama ve Operasyon İşlemleri",
    "kategori": "SPK Modül Kodu: 1012 | SPL Düzey 1, Düzey 2, Düzey 3 Lisansı",
    "duzeyler": [
      "duzey1",
      "duzey2",
      "duzey3"
    ],
    "aciklama": "1012 - Takas, Saklama ve Operasyon İşlemleri - Resmi SPL Müfredat Temel Testi (1 Test, 1 Soru)",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: 1012 - Takas, Saklama ve Operasyon İşlemleri Temel Değerlendirme Testi",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "1012 - Takas, Saklama ve Operasyon İşlemleri müfredatına ilişkin temel mevzuat ve uygulama değerlendirmesi.",
            "secenekler": {
              "A": "Sermaye Piyasası Kanunu ve İlgili Mevzuat Hükümleri",
              "B": "Ticaret Kanunu Genel Hükümleri",
              "C": "Takasbank ve MKK Saklama Düzenlemeleri",
              "D": "Yönetmelik ve Genelge Esasları",
              "E": "Borsa İstanbul İşleyiş Kuralları"
            },
            "dogruCevap": "A",
            "cozum": "Bu soru ilgili dersin resmi müfredat kapsamını temel almaktadır."
          }
        ]
      }
    ]
  },
  {
    "code": "1013",
    "dersAdi": "1013 - Kurumlarda ve Sermaye Piyasasında Vergilendirme",
    "kategori": "SPK Modül Kodu: 1013 | SPL Düzey 3, Türev Araçlar Lisansı",
    "duzeyler": [
      "duzey3",
      "turev"
    ],
    "aciklama": "1013 - Kurumlarda ve Sermaye Piyasasında Vergilendirme - Resmi SPL Müfredat Temel Testi (1 Test, 1 Soru)",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: 1013 - Kurumlarda ve Sermaye Piyasasında Vergilendirme Temel Değerlendirme Testi",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "1013 - Kurumlarda ve Sermaye Piyasasında Vergilendirme müfredatına ilişkin temel mevzuat ve uygulama değerlendirmesi.",
            "secenekler": {
              "A": "Sermaye Piyasası Kanunu ve İlgili Mevzuat Hükümleri",
              "B": "Ticaret Kanunu Genel Hükümleri",
              "C": "Borsa İstanbul İşleyiş Kuralları",
              "D": "Yönetmelik ve Genelge Esasları",
              "E": "Takasbank ve MKK Saklama Düzenlemeleri"
            },
            "dogruCevap": "A",
            "cozum": "Bu soru ilgili dersin resmi müfredat kapsamını temel almaktadır."
          }
        ]
      }
    ]
  },
  {
    "code": "1016",
    "dersAdi": "1016 - Muhasebe ve Finansal Raporlama",
    "kategori": "SPK Modül Kodu: 1016 | SPL Düzey 2, Düzey 3 Lisansı",
    "duzeyler": [
      "duzey2",
      "duzey3"
    ],
    "aciklama": "1016 - Muhasebe ve Finansal Raporlama - Resmi SPL Müfredat Temel Testi (1 Test, 1 Soru)",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: 1016 - Muhasebe ve Finansal Raporlama Temel Değerlendirme Testi",
        "testTuru": "konu",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "1016 - Muhasebe ve Finansal Raporlama müfredatına ilişkin temel mevzuat ve uygulama değerlendirmesi.",
            "secenekler": {
              "A": "Sermaye Piyasası Kanunu ve İlgili Mevzuat Hükümleri",
              "B": "Takasbank ve MKK Saklama Düzenlemeleri",
              "C": "Yönetmelik ve Genelge Esasları",
              "D": "Borsa İstanbul İşleyiş Kuralları",
              "E": "Ticaret Kanunu Genel Hükümleri"
            },
            "dogruCevap": "A",
            "cozum": "Bu soru ilgili dersin resmi müfredat kapsamını temel almaktadır."
          }
        ]
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.splVeritabani = splVeritabani;
}
