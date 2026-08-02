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
              "B": "Yönetmelik ve Genelge Esasları",
              "C": "Borsa İstanbul İşleyiş Kuralları",
              "D": "Takasbank ve MKK Saklama Düzenlemeleri",
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
    "code": "1002",
    "dersAdi": "1002 - Geniş Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları",
    "kategori": "SPK Modül Kodu: 1002 | SPL Düzey 2, Düzey 3, Türev Araçlar Lisansı",
    "duzeyler": [
      "duzey2",
      "duzey3",
      "turev"
    ],
    "aciklama": "Geniş Kapsamlı Sermaye Piyasası Mevzuatı ve Meslek Kuralları (1002) - Müfredat Konu Başlıklarına Göre Sıralı Resmi 5 Test (100 Tamamen Özgün ve Benzersiz Soru)",
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
              "B": "Yatırımcıların hak ve menfaatlerini korumak",
              "C": "Halka açık şirketlerin ticari kâr marjlarını ve satış fiyatlarını doğrudan belirlemek",
              "D": "Sermaye piyasasının gelişmesini sağlamak",
              "E": "Piyasada etkin denetim ve şeffaflığı tesis etmek"
            },
            "dogruCevap": "C",
            "cozum": "SPKn m. 1 uyarınca Kanunun amacı piyasaların güvenli, şeffaf ve adil işlemesini sağlamak ve yatırımcıyı korumaktır; şirketlerin ticari kâr marjlarını veya fiyatlarını belirlemek SPK'nın görevi değildir."
          },
          {
            "id": 2,
            "soruMetni": "6362 sayılı SPKn uyarınca, sermaye piyasası araçlarının halka arz edilebilmesi için onaylanması zorunlu olan belge aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "İzahname",
              "B": "Faaliyet Raporu",
              "C": "Esas Sözleşme",
              "D": "Bağımsız Denetim Sözleşmesi",
              "E": "Sirküler Duyurusu"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 4 uyarınca sermaye piyasası araçlarının halka arzı veya borsada işlem görmesi için SPK tarafından izahnamenin onaylanması zorunludur."
          },
          {
            "id": 3,
            "soruMetni": "SPKn uyarınca onaylanan izahnamenin yayımlandığı tarihten itibaren geçerlilik süresi azami kaç aydır?",
            "secenekler": {
              "A": "3 Ay",
              "B": "6 Ay",
              "C": "12 Ay",
              "D": "24 Ay",
              "E": "36 Ay"
            },
            "dogruCevap": "C",
            "cozum": "SPKn m. 5 uyarınca onaylı bir izahname yayımlandığı tarihten itibaren 12 ay boyunca yapılacak ihraçlar için geçerlidir."
          },
          {
            "id": 4,
            "soruMetni": "6362 sayılı Kanun uyarınca, kaydileştirilen sermaye piyasası araçlarına ilişkin hakların takibi ve merkezi saklanması hangi kurum nezdinde yürütülür?",
            "secenekler": {
              "A": "Merkezi Kayıt Kuruluşu A.Ş. (MKK)",
              "B": "İstanbul Takas ve Saklama Bankası A.Ş. (Takasbank)",
              "C": "Borsa İstanbul A.Ş.",
              "D": "Sermaye Piyasası Lisanslama Sicil ve Eğitim Kuruluşu (SPL)",
              "E": "Türkiye Sermaye Piyasaları Birliği (TSPB)"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 13 uyarınca sermaye piyasası araçlarının kaydileştirilmesi ve hak sahipliği takibi MKK nezdinde hak sahipleri bazında yürütülür."
          },
          {
            "id": 5,
            "soruMetni": "Halka açık anonim ortaklıklarda kayıtlı sermaye tavanının geçerlilik süresi SPK düzenlemelerine göre en fazla kaç yıldır?",
            "secenekler": {
              "A": "1 Yıl",
              "B": "3 Yıl",
              "C": "5 Yıl",
              "D": "7 Yıl",
              "E": "10 Yıl"
            },
            "dogruCevap": "C",
            "cozum": "SPKn m. 18 uyarınca halka açık şirketlerde kayıtlı sermaye tavanı izni en fazla 5 yıl için verilir. Bu süre sonunda tavanın uzatılması için genel kurul kararı gerekir."
          },
          {
            "id": 6,
            "soruMetni": "Halka açık anonim ortaklıklarda yönetim kurulu kararıyla kâr payı avansı dağıtılabilmesi için esas sözleşmede hüküm bulunması ve hangi organdan yetki alınması şarttır?",
            "secenekler": {
              "A": "Genel Kurul",
              "B": "Denetim Komitesi",
              "C": "SPK Başkanlığı",
              "D": "Borsa Yönetim Kurulu",
              "E": "Bağımsız Denetçi"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 20 uyarınca kâr payı avansı dağıtılabilmesi için esas sözleşmede hüküm bulunması ve ilgili yıl ile sınırlı olmak üzere Genel Kurul tarafından yönetim kuruluna yetki verilmesi zorunludur."
          },
          {
            "id": 7,
            "soruMetni": "SPKn m. 21 uyarınca örtülü kazanç aktarımı yasağına aykırı davranan şirket ilgililerine SPK tarafından kazancın iadesi için tanınan azami süre kaç gündür?",
            "secenekler": {
              "A": "10 Gün",
              "B": "15 Gün",
              "C": "30 Gün",
              "D": "60 Gün",
              "E": "90 Gün"
            },
            "dogruCevap": "C",
            "cozum": "SPKn m. 21 uyarınca örtülü kazanç aktarımı yapıldığı tespit edilen tutarın 30 gün içinde ortaklığa iadesi zorunludur."
          },
          {
            "id": 8,
            "soruMetni": "Payları borsada işlem gören halka açık ortaklıkların Genel Kurul toplantılarına elektronik ortamda katılım imkânı sağlamaları hangi kanun ve düzenleme gereğince ZORUNLUDUR?",
            "secenekler": {
              "A": "6102 sayılı Türk Ticaret Kanunu m. 1527",
              "B": "5549 sayılı Suç Gelirlerinin Aklanmasının Önlenmesi Hakkında Kanun",
              "C": "6362 sayılı SPKn m. 101",
              "D": "Borçlar Kanunu m. 45",
              "E": "Bankacılık Kanunu m. 12"
            },
            "dogruCevap": "A",
            "cozum": "TTK m. 1527 uyarınca payları borsada işlem gören şirketlerin genel kurullarında Elektronik Genel Kurul Sistemi (EGKS) uygulaması zorunludur."
          },
          {
            "id": 9,
            "soruMetni": "Sermaye Piyasası Kanunu uyarınca, halka açık ortaklıkların sermaye artırımlarında mevcut ortakların yeni pay alma haklarına verilen ad aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Rüçhan Hakkı",
              "B": "Ayrılma Hakkı",
              "C": "Alım Teklifi Hakkı",
              "D": "Satma Hakkı",
              "E": "Tasfiye Payı Hakkı"
            },
            "dogruCevap": "A",
            "cozum": "Ortakların bedelli sermaye artırımlarında yeni paylardan öncelikle pay alma hakkı Rüçhan Hakkı olarak adlandırılır."
          },
          {
            "id": 10,
            "soruMetni": "SPKn uyarınca, kitle fonlaması platformlarının kurulması ve faaliyete geçmesi için kimden izin alınması ZORUNLUDUR?",
            "secenekler": {
              "A": "Sermaye Piyasası Kurulu (SPK)",
              "B": "Borsa İstanbul A.Ş.",
              "C": "Ticaret Bakanlığı",
              "D": "Hazine ve Maliye Bakanlığı",
              "E": "Merkezi Kayıt Kuruluşu"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 35/A uyarınca Kitle Fonlaması Platformlarının kurulması ve listeye alınması SPK iznine tabidir."
          },
          {
            "id": 11,
            "soruMetni": "Payları ilk defa halka arz edilecek anonim ortaklıkların izahnamesinde yer alan finansal tabloların hangi standartlara uygun olarak hazırlanması şarttır?",
            "secenekler": {
              "A": "Kamu Gözetimi Kurumu (KGK) tarafından yayımlanan Türkiye Muhasebe Standartları / TMS - TFRS",
              "B": "Vergi Usul Kanunu (VUK) Muhasebe Tekdüzen Hesap Planı",
              "C": "ABD Genel Kabul Görmüş Muhasebe İlkeleri (US GAAP)",
              "D": "Alman Ticaret Kanunu (HGB) Standartları",
              "E": "Avrupa Merkez Bankası Standartları"
            },
            "dogruCevap": "A",
            "cozum": "SPK düzenlemeleri uyarınca finansal tablolar TMS/TFRS standartlarına uygun hazırlanır ve bağımsız denetimden geçer."
          },
          {
            "id": 12,
            "soruMetni": "Halka açık anonim ortaklıkların genel kurul toplantı ilanı, Türk Ticaret Kanunu ve SPK mevzuatı uyarınca toplantı gününden en az kaç hafta önce yapılmalıdır?",
            "secenekler": {
              "A": "1 Hafta",
              "B": "2 Hafta",
              "C": "3 Hafta",
              "D": "4 Hafta",
              "E": "6 Hafta"
            },
            "dogruCevap": "C",
            "cozum": "Halka açık şirketlerde Genel Kurul çağrısı, ilan ve toplantı günleri hariç olmak üzere toplantı tarihinden en az 3 hafta önce KAP'ta ve şirketin internet sitesinde yayımlanır."
          },
          {
            "id": 13,
            "soruMetni": "SPKn uyarınca sermaye piyasası araçlarının halka arzında izahnameden sorumlu olan kişiler aşağıdakilerden hangisinde doğru verilmiştir?",
            "secenekler": {
              "A": "İhraççı ve halka arz eden; ayrıca zararın kendi kusurundan kaynaklandığını ispat edemeyen yetkili lider sermaye piyasası kurumu",
              "B": "Sadece bağımsız denetim kuruluşu",
              "C": "Sadece Borsa İstanbul Yönetim Kurulu",
              "D": "Yalnızca şirketin en büyük hissedarı",
              "E": "Sadece Merkezi Kayıt Kuruluşu"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 10 uyarınca izahnamede yer alan yanlış veya eksik bilgilerden doğan zararlardan ihraççı ve halka arz eden sorumludur."
          },
          {
            "id": 14,
            "soruMetni": "Halka açık olmayan bir anonim ortaklığın pay sahibi sayısının kaça ulaşması halinde ortaklık kendiliğinden halka açılmış sayılır ve SPKn hükümlerine tabi olur?",
            "secenekler": {
              "A": "100 Pay Sahibi",
              "B": "250 Pay Sahibi",
              "C": "500 Pay Sahibi",
              "D": "750 Pay Sahibi",
              "E": "1000 Pay Sahibi"
            },
            "dogruCevap": "C",
            "cozum": "SPKn m. 16 uyarınca pay sahibi sayısı 500'ü aşan anonim ortaklıkların payları halka arz olunmuş sayılır ve Kanun hükümlerine tabi olur."
          },
          {
            "id": 15,
            "soruMetni": "SPKn uyarınca, halka açık ortaklıkların bağış ve yardım yapabilmesi için aşağıdakilerden hangisi ZORUNLUDUR?",
            "secenekler": {
              "A": "Esas sözleşmede hüküm bulunması ve Genel Kurul tarafından sınır belirlenmesi",
              "B": "Sadece Genel Müdürün onay vermesi",
              "C": "Borsa Başkanı tarafından özel izin verilmesi",
              "D": "Bağış tutarının şirket sermayesinin %50'sini aşması",
              "E": "Ticaret Bakanlığından izin alınması"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 19 uyarınca bağış yapılabilmesi için esas sözleşmede hüküm bulunması ve yıllık bağış sınırının Genel Kurulca belirlenmesi şarttır."
          },
          {
            "id": 16,
            "soruMetni": "Halka açık anonim şirketlerde ortakların oy hakkına ilişkin sınırlamalar ve imtiyazlarla ilgili aşağıdaki ifadelerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Yönetim kuruluna aday gösterme imtiyazı hariç, oyda imtiyaz Kurul kararıyla kısıtlanabilir veya kaldırılabilir.",
              "B": "Her pay sahibine eşit oy hakkı verilmesi imkânsızdır.",
              "C": "Oyda imtiyaz hiçbir şekilde devredilemez.",
              "D": "Tüm paylar oy hakkından yosundur.",
              "E": "İmtiyazlı paylar borsa kotundan hemen çıkarılır."
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 28 uyarınca makul bir gerekçenin varlığı halinde SPK oyda imtiyazları kısıtlamaya yetkilidir."
          },
          {
            "id": 17,
            "soruMetni": "Sermaye Piyasası Kanunu uyarınca kurulan Yatırımcı Tazmin Merkezi (YTM) hangi durumda devreye girer?",
            "secenekler": {
              "A": "Yatırım kuruluşlarının yatırımdan doğan zararlarını tazmin etmek için",
              "B": "Yatırım kuruluşlarının sermaye piyasası faaliyetlerinden kaynaklanan nakit ödeme veya sermaye piyasası araçları teslim yükümlülüklerini yerine getirememesi halinde",
              "C": "Hisse senedi fiyatı düşen yatırımcıya tazminat ödemek için",
              "D": "Şirketlerin iflasını önlemek için kredi sağlamak amacıyla",
              "E": "Borsa işlemlerinde oluşan komisyonları geri ödemek için"
            },
            "dogruCevap": "B",
            "cozum": "SPKn m. 82 uyarınca YTM, yatırım kuruluşlarının acz haline düşmesi veya iflası durumunda müşterilerine ait nakit ve menkul kıymet teslim yükümlülüklerini tazmin eder."
          },
          {
            "id": 18,
            "soruMetni": "Yatırımcı Tazmin Merkezi (YTM) tarafından her bir yatırımcıya ödenecek azami tazminat tutarı yasal sınıra tabidir. Bu sınırla ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Yatırımcı tazmin tutarı üst sınırı her yıl yeniden değerleme oranında artırılır.",
              "B": "Sınırsız tazminat ödenir.",
              "C": "Tazminat ödemesi sadece döviz cinsinden yapılır.",
              "D": "Yalnızca kurum yöneticileri tazmin edilir.",
              "E": "Tazminat başvurusu 10 yıl sonra zaman aşımına uğramaz."
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 84 uyarınca YTM tazminat üst sınırı her yıl yeniden değerleme oranında güncellenir."
          },
          {
            "id": 19,
            "soruMetni": "Sermaye Piyasası Kanunu uyarınca kurulmuş olan Türkiye Sermaye Piyasaları Birliği (TSPB) ne tür bir kuruluştur?",
            "secenekler": {
              "A": "Kamu kurumu niteliğinde meslek kuruluşu",
              "B": "Özel hukuk anonim şirketi",
              "C": "Sermaye piyasası vakfı",
              "D": "Uluslararası sivil toplum örgütü",
              "E": "Bağımsız denetim derneği"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 74 uyarınca TSPB, tüzel kişiliği haiz kamu kurumu niteliğinde bir meslek kuruluşudur."
          },
          {
            "id": 20,
            "soruMetni": "Sermaye piyasasında bağımsız denetim, derecelendirme ve değerleme faaliyetinde bulunacak kurumların SPK listesine alınması için kimden onay alması gerekir?",
            "secenekler": {
              "A": "Sermaye Piyasası Kurulu (SPK)",
              "B": "Borsa İstanbul",
              "C": "Hazine ve Maliye Bakanlığı",
              "D": "Türkiye Değerleme Uzmanları Birliği",
              "E": "Ticaret Odaları"
            },
            "dogruCevap": "A",
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
              "A": "Bilgi Suiistimali (Insider Trading)",
              "B": "Piyasa Dolandırıcılığı (Manipülasyon)",
              "C": "Örtülü Kazanç Aktarımı",
              "D": "Usulsüz Halka Arz",
              "E": "Güveni Kötüye Kullanma"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 106 uyarınca henüz kamuya açıklanmamış içsel bilgilere dayanarak işlem yapıp menfaat temin edilmesi 'Bilgi Suiistimali' suçunu oluşturur."
          },
          {
            "id": 2,
            "soruMetni": "SPKn m. 106 kapsamındaki Bilgi Suiistimali (Insider Trading) suçunu işleyen failler hakkında verilecek hapis cezasının yasal ALT sınırı kaç yıldır?",
            "secenekler": {
              "A": "1 Yıl",
              "B": "2 Yıl",
              "C": "3 Yıl",
              "D": "4 Yıl",
              "E": "5 Yıl"
            },
            "dogruCevap": "C",
            "cozum": "SPKn m. 106 uyarınca bilgi suiistimali suçunu işleyen kişilere 3 yıldan 5 yıla kadar hapis veya adli para cezası verilir."
          },
          {
            "id": 3,
            "soruMetni": "SPKn m. 107/1 uyarınca, sermaye piyasası araçlarının fiyatlarına, fiyat değişimlerine, arz ve taleplerine ilişkin olarak yapay piyasa oluşturmak amacıyla alım-satım yapılması fiiline ne ad verilir?",
            "secenekler": {
              "A": "İşleme Dayalı Piyasa Dolandırıcılığı",
              "B": "Bilgiye Dayalı Piyasa Dolandırıcılığı",
              "C": "Örtülü Kazanç Aktarımı",
              "D": "Usulsüz Halka Arz",
              "E": "Güveni Kötüye Kullanma"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 107/1 uyarınca alım-satım yapmak, emir vermek suretiyle fiyatı etkilemek İşleme Dayalı Piyasa Dolandırıcılığı suçudur."
          },
          {
            "id": 4,
            "soruMetni": "SPKn m. 107/2 uyarınca, sermaye piyasası araçlarının fiyatını, değerini veya yatırımcıların kararlarını etkilemek amacıyla yalan, yanlış veya yanıltıcı haber verme, yorum yapma fiili hangi suçu oluşturur?",
            "secenekler": {
              "A": "Bilgiye Dayalı Piyasa Dolandırıcılığı",
              "B": "İşleme Dayalı Piyasa Dolandırıcılığı",
              "C": "Bilgi Suiistimali",
              "D": "Zararı Tazmin Suçu",
              "E": "Emsale Aykırılık Suçu"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 107/2 uyarınca yalan haber, asılsız yorum veya bilgi yayarak fiyatları etkilemek Bilgiye Dayalı Piyasa Dolandırıcılığı suçunu oluşturur."
          },
          {
            "id": 5,
            "soruMetni": "SPKn m. 107/1 kapsamında İşleme Dayalı Piyasa Dolandırıcılığı suçunu işleyen kişinin pişmanlık göstererek elde ettiği menfaati tazmin etmesi haliyle ilgili 'Etkin Pişmanlık' hükümlerine göre soruşturma başlamadan önce menfaati hazineye ödemesi halinde durum ne olur?",
            "secenekler": {
              "A": "Hakkında ceza verilmez (Ceza verilmesine yer olmadığına karar verilir).",
              "B": "Cezası 1/2 oranında indirilir.",
              "C": "Cezası 1/3 oranında indirilir.",
              "D": "Sadece adli para cezasına çevrilir.",
              "E": "Etkin pişmanlık hükümleri uygulanmaz."
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 107/3 uyarınca soruşturma başlamadan önce elde edilen menfaatin 2 katı tutarındaki miktar Hazineye ödendiğinde ceza verilmez."
          },
          {
            "id": 6,
            "soruMetni": "Piyasa Dolandırıcılığı (m. 107/1) suçunda soruşturma başladıktan sonra fakat kovuşturma (dava) açılmadan önce etkin pişmanlıktan yararlanarak Hazineye ödeme yapılması halinde ceza indirimi ne oranda uygulanır?",
            "secenekler": {
              "A": "Cezanın yarısı (1/2) indirilir.",
              "B": "Cezanın üçte ikisi (2/3) indirilir.",
              "C": "Cezanın üçte biri (1/3) indirilir.",
              "D": "Cezanın dörtte biri (1/4) indirilir.",
              "E": "Ceza tamamen kaldırılır."
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 107/3 uyarınca soruşturma safhasında ödeme yapıldığında ceza 1/2 oranında indirilir."
          },
          {
            "id": 7,
            "soruMetni": "Piyasa Dolandırıcılığı suçunda mahkeme aşamasında (kovuşturma başlatıldıktan sonra) hüküm verilinceye kadar ödeme yapılması halinde ceza indirimi ne orandadır?",
            "secenekler": {
              "A": "Cezanın üçte biri (1/3) indirilir.",
              "B": "Cezanın yarısı (1/2) indirilir.",
              "C": "Cezanın altıda biri (1/6) indirilir.",
              "D": "Cezanın beşte biri (1/5) indirilir.",
              "E": "İndirim uygulanmaz."
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 107/3 uyarınca kovuşturma başladıktan sonra hüküm verilinceye kadar ödeme yapıldığında verilen ceza 1/3 oranında indirilir."
          },
          {
            "id": 8,
            "soruMetni": "SPKn m. 109 uyarınca SPK'dan izin almaksızın sermaye piyasası faaliyetinde bulunan veya yetki belgesi olmadan aracılık yapan kişilere verilecek ceza hangisidir?",
            "secenekler": {
              "A": "2 yıldan 5 yıla kadar hapis ve adli para cezası",
              "B": "Sadece idari para cezası",
              "C": "100.000 TL maktu ceza",
              "D": "6 ay hapis cezası",
              "E": "Kapatma cezası"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 109/2 uyarınca yetkisiz sermaye piyasası faaliyetinde bulunan kişiler 2 yıldan 5 yıla kadar hapis cezası ile cezalandırılır."
          },
          {
            "id": 9,
            "soruMetni": "SPKn m. 115 uyarınca Örtülü Kazanç Aktarımı suçunu işleyen halka açık şirket yöneticileri hakkında uygulanacak ceza sınırı nedir?",
            "secenekler": {
              "A": "3 yıldan 8 yıla kadar hapis ve adli para cezası",
              "B": "1 yıldan 3 yıla kadar hapis",
              "C": "Sadece görevden alma kararı",
              "D": "500.000 TL adli para cezası",
              "E": "10 yıla kadar hapis"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 115 uyarınca örtülü kazanç aktarımı fiilini işleyenler güveni kötüye kullanma suçunun nitelikli halinden (3 yıldan 8 yıla kadar hapis) cezalandırılır."
          },
          {
            "id": 10,
            "soruMetni": "SPKn uyarınca sermaye piyasası suçlarında (m. 106, 107, 109, 115) Cumhuriyet Başsavcılığı tarafından soruşturma açılabilmesi için ön şart aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "SPK tarafından Cumhuriyet Başsavcılığına yazılı suç duyurusunda bulunulması (İhbar/Rapor yazılması)",
              "B": "Herhangi bir vatandaşın ihbar etmesi",
              "C": "Borsa İstanbul'un suç duyurusu",
              "D": "Ticaret Bakanlığı müfettiş raporu",
              "E": "Polis fezlekesi"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 115 uyarınca sermaye piyasası suçlarının soruşturulması SPK tarafından yapılacak yazılı yazılı başvuruya (suç duyurusuna) bağlıdır."
          },
          {
            "id": 11,
            "soruMetni": "SPKn uyarınca hukuka aykırı borsa işlemlerinin tespiti durumunda SPK'nın uygulayabileceği geçici makul tedbirler arasında aşağıdakilerden hangisi YER ALMAZ?",
            "secenekler": {
              "A": "İlgili şahıslara geçici veya sürekli olarak borsa işlem yasağı getirilmesi",
              "B": "Takas takibinin yapılması ve pozisyon kısıtlaması getirilmesi",
              "C": "İlgililerin hesaplarının dondurulması veya kısıtlanması",
              "D": "İlgili kişilerin tüm mal varlıklarına mahkeme kararsız doğrudan el konulması",
              "E": "Depo şartı veya özkaynak oranının artırılması"
            },
            "dogruCevap": "D",
            "cozum": "SPKn m. 101 uyarınca idari tedbirler kapsamında işlem yasağı, depo şartı, internet erişim kısıtlaması uygulanabilir; ancak doğrudan mahkeme kararı olmadan mal varlığına el konulamaz."
          },
          {
            "id": 12,
            "soruMetni": "SPK tarafından hakkında geçici borsa işlem yasağı uygulanan kişilerin bu yasağının azami süresi mevzuat uyarınca kaç yıldır?",
            "secenekler": {
              "A": "2 Yıl",
              "B": "1 Yıl",
              "C": "3 Yıl",
              "D": "5 Yıl",
              "E": "Süresizdir"
            },
            "dogruCevap": "A",
            "cozum": "SPK Kararı uyarınca geçici işlem yasağı 6 ay süreyle verilir, gerektiğinde bu süre en fazla 2 yıla kadar uzatılabilir."
          },
          {
            "id": 13,
            "soruMetni": "Mevzuata aykırı olarak internet üzerinden yetkisiz kaldıraçlı işlem (Forex) yaptıran veya yurt dışı sitelere erişim sağlayan platformlara karşı SPK ne tür bir işlem yapar?",
            "secenekler": {
              "A": "Bilgi Teknolojileri ve İletişim Kurumu'na (BTK) başvurarak erişimin engellenmesini sağlar.",
              "B": "Doğrudan web sitesini satın alır.",
              "C": "Şirkete ortak olur.",
              "D": "Sadece uyarı yazısı gönderir.",
              "E": "İnternet servis sağlayıcılarını kapatır."
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 99 uyarınca yetkisiz Forex yayını yapan sitelerin erişimi SPK'nın BTK'ya başvurusu ile engellenir."
          },
          {
            "id": 14,
            "soruMetni": "SPKn uyarınca Kurul tarafından verilen İdari Para Cezalarına karşı itiraz ve dava açma süresi kararın tebliğinden itibaren kaç gündür ve hangi mahkemede dava açılır?",
            "secenekler": {
              "A": "30 Gün - İdare Mahkemesi",
              "B": "15 Gün - Sulh Ceza Hakimliği",
              "C": "60 Gün - Asliye Hukuk Mahkemesi",
              "D": "7 Gün - Ticaret Mahkemesi",
              "E": "90 Gün - Danıştay"
            },
            "dogruCevap": "A",
            "cozum": "SPK İdari Para Cezalarına karşı kararın tebliğ tarihinden itibaren 30 gün içinde İdare Mahkemesinde iptal davası açılabilir."
          },
          {
            "id": 15,
            "soruMetni": "Halka açık bir ortaklığın mali durumunun zayıflaması veya yükümlülüklerini karşılayamaması halinde SPK'nın alabileceği tedbirler arasında aşağıdakilerden hangisi YER ALMAZ?",
            "secenekler": {
              "A": "Şirket yöneticilerini görevden alıp yerine yeni üyeler atamak",
              "B": "Şirketin sermaye artırmasını veya azaltmasını istemek",
              "C": "Sermaye piyasası faaliyetlerini geçici veya sürekli olarak durdurmak",
              "D": "Şirket ortaklarının tüm kişisel banka hesaplarını kamulaştırmak",
              "E": "Özel bağımsız denetim yaptırılmasını istemek"
            },
            "dogruCevap": "D",
            "cozum": "SPKn m. 96-97 uyarınca SPK idari tedbirler uygulayabilir ancak ortakların kişisel mal varlığını kamulaştırma yetkisi yoktur."
          },
          {
            "id": 16,
            "soruMetni": "Sermaye piyasası araçlarının fiyatını etkileyebilecek emniyeti ihlal eden ve sır saklama yükümlülüğüne aykırı hareket eden kişilere ilişkin fiiller hangi kanun kapsamında suç teşkil eder?",
            "secenekler": {
              "A": "6362 sayılı SPKn m. 111",
              "B": "Türk Ceza Kanunu m. 150",
              "C": "Vergi Usul Kanunu m. 359",
              "D": "Çek Kanunu m. 5",
              "E": "İcra İflas Kanunu m. 331"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 111 uyarınca Kurul ve borsa personelinin veya yetkililerin sır saklama yükümlülüğünü ihlal etmesi adli cezayı gerektiren bir suçtur."
          },
          {
            "id": 17,
            "soruMetni": "Sermaye Piyasası Kurulu denetçilerinin incelemeleri sırasında defter, belge ve kayıtları vermeyen veya incelemeyi engelleyen kişilere verilecek ceza nedir?",
            "secenekler": {
              "A": "1 yıldan 3 yıla kadar hapis cezası (SPKn m. 112)",
              "B": "Sadece 1.000 TL para cezası",
              "C": "Uyarma cezası",
              "D": "6 ay borsa yasağı",
              "E": "Ceza verilmez"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 112 uyarınca denetim ve incelemeyi engelleyen veya belgeleri gizleyen kişilere 1 yıldan 3 yıla kadar hapis cezası verilir."
          },
          {
            "id": 18,
            "soruMetni": "SPKn m. 103 uyarınca Kurul tarafından belirlenen düzenlemelere, standartlara ve kararlara aykırı hareket eden tüzel kişilere uygulanan yaptırım türü hangisidir?",
            "secenekler": {
              "A": "İdari Para Cezası",
              "B": "Hapis Cezası",
              "C": "Müadelesiz Kapatma",
              "D": "Sadece Sözlü Uyarı",
              "E": "Trafikten Men"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 103 uyarınca Kurul düzenlemelerine aykırılık hallerinde Kanunda belirlenen maktu veya nispi İdari Para Cezaları uygulanır."
          },
          {
            "id": 19,
            "soruMetni": "Sermaye Piyasası Kanunu uyarınca, hakkında ihbar veya denetim başlatılan şahıslara ilişkin olarak takas alacaklarının dondurulması veya tedbir konulması yetkisi kime aittir?",
            "secenekler": {
              "A": "Sermaye Piyasası Kurulu (SPK)",
              "B": "Borsa İstanbul",
              "C": "Milli Piyango İdaresi",
              "D": "Şirket Genel Müdürü",
              "E": "Valilikler"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 101 uyarınca takas alacaklarının dondurulması ve hesaba tedbir konulması yetkisi SPK'ya aittir."
          },
          {
            "id": 20,
            "soruMetni": "İşleme Dayalı Piyasa Dolandırıcılığı (m. 107/1) suçunda failler hakkında uygulanacak adli para cezası miktarı en az ne kadar olmalıdır?",
            "secenekler": {
              "A": "Suçun işlenmesiyle elde edilen menfaatin miktarından az olamaz.",
              "B": "En fazla 10.000 TL olabilir.",
              "C": "Şirket sermayesinin %1'i kadardır.",
              "D": "Sabit 50.000 TL'dir.",
              "E": "Adli para cezası uygulanmaz."
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
              "A": "İçsel Bilgi",
              "B": "Sürekli Bilgi",
              "C": "Periyodik Bilgi",
              "D": "Genel Bilgi",
              "E": "Özel İlan"
            },
            "dogruCevap": "A",
            "cozum": "II-15.1 sayılı Tebliğ m. 4 uyarınca fiyat veya yatırım kararlarını etkileyebilecek henüz açıklanmamış detaylı bilgilere 'İçsel Bilgi' denir."
          },
          {
            "id": 2,
            "soruMetni": "II-15.1 sayılı Özel Durumlar Tebliği uyarınca, ihraççıların içsel bilgilerin kamuya açıklanmasını erteleyebilmesi için aşağıdaki şartlardan hangisinin varlığı ZORUNLUDUR?",
            "secenekler": {
              "A": "Ertelemenin ihraççının meşru haklarının korunması için gerekli olması, kamunun yanıltılmasına yol açmaması ve bilginin gizliliğinin korunabilmesi",
              "B": "Sadece Genel Müdürün sözlü onay vermesi",
              "C": "Borsa İstanbul Yönetim Kurulunun kararı",
              "D": "Şirketin sermayesinin 100 milyon TL'yi aşması",
              "E": "Ertelemenin en az 1 yıl sürmesi"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 6 uyarınca erteleme için: 1) Meşru çıkar korunmalı, 2) Kamu yanıltılmamalı, 3) Gizlilik sağlanmalıdır."
          },
          {
            "id": 3,
            "soruMetni": "İçsel bilginin kamuya açıklanmasının ertelenmesi halinde, erteleme sebepleri ortadan kalktığında ihraççı KAP'ta nasıl bir açıklama yapar?",
            "secenekler": {
              "A": "İçsel bilgi ile birlikte erteleme kararı ve erteleme gerekçeleri derhal Kamuyu Aydınlatma Platformu'nda (KAP) açıklanır.",
              "B": "Sadece SPK'ya gizli bir dilekçe verilir.",
              "C": "Açıklama 1 yıl sonra yapılır.",
              "D": "Erteleme detayları KAP'ta açıklanmaz.",
              "E": "Sadece genel kurulda okunur."
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 6/3 uyarınca erteleme sebebi kalktığında özel durum açıklaması yapılırken erteleme kararı ve gerekçesi de yayımlanır."
          },
          {
            "id": 4,
            "soruMetni": "Ertelenen içsel bilginin gizliliğinin korunamadığı veya sızdığı tespiti yapıldığında ihraççı ne yapmakla yükümlüdür?",
            "secenekler": {
              "A": "Özel durum açıklamasını DERHAL KAP'ta yapmakla yükümlüdür.",
              "B": "Erteleme süresini 6 ay daha uzatır.",
              "C": "Borsadaki işlemleri 3 gün durdurur.",
              "D": "SPK'dan ceza indirimi ister.",
              "E": "Hiçbir açıklama yapmaz."
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 6/4 uyarınca ertelenen bilginin gizliliği bozulduğunda derhal KAP'ta özel durum açıklaması yapılması şarttır."
          },
          {
            "id": 5,
            "soruMetni": "Özel Durumlar Tebliği uyarınca, ihraççı nezdinde idari sorumluluğu bulunan kişilerin ve bunlarla yakından ilişkili kişilerin ihraççı paylarındaki işlemlerine ilişkin bildirim sınırı ve esası nedir?",
            "secenekler": {
              "A": "Bir takvim yılı içinde yapılan işlemlerin toplam tutarı SPK tarafından belirlenen eşiğe ulaştığında KAP'ta açıklanır.",
              "B": "İdari sorumlular hiçbir şekilde işlem yapamaz.",
              "C": "İşlemler sadece yıllık faaliyet raporunda gösterilir.",
              "D": "Bildirim 5 yıl sonra yapılır.",
              "E": "Sadece banka transferleri bildirilir."
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 11 uyarınca idari sorumluluğu bulunan kişilerin işlemleri belirlenen tutarlık eşiği aştığında KAP'ta ilan edilir."
          },
          {
            "id": 6,
            "soruMetni": "İhraççıların içsel bilgiye erişimi olan kişilerin listesini oluşturması ve bu listeyi güncellemesi kimin sorumluluğundadır?",
            "secenekler": {
              "A": "İhraççının Yönetim Kurulu",
              "B": "Borsa İstanbul",
              "C": "Merkezi Kayıt Kuruluşu",
              "D": "Bağımsız Denetim Şirketi",
              "E": "Ticaret Sicil Gazetesi"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 7 uyarınca İçsel Bilgiye Erişimi Olanlar Listesi ihraççı yönetim kurulu tarafından hazırlanır ve istendiğinde SPK'ya sunulur."
          },
          {
            "id": 7,
            "soruMetni": "İçsel Bilgiye Erişimi Olanlar Listesinde yer alan bilgilerin ve değişikliklerin SPK veya MKK talep ettiğinde gönderilme yükümlülüğü kaç yıl süreyle saklanır?",
            "secenekler": {
              "A": "1 Yıl",
              "B": "3 Yıl",
              "C": "5 Yıl",
              "D": "8 Yıl",
              "E": "10 Yıl"
            },
            "dogruCevap": "C",
            "cozum": "Tebliğ m. 7 uyarınca içsel bilgiye erişimi olanlar listesi ve güncellemeleri en az 5 yıl süreyle saklanır."
          },
          {
            "id": 8,
            "soruMetni": "Basın-yayın organlarında veya kamuoyunda ihraççı hakkında çıkan haber veya söylentilere ilişkin ihraççının KAP'ta doğrulama açıklaması yapma yükümlülüğü hangi durumda doğar?",
            "secenekler": {
              "A": "Haber veya söylenti yatırımcıların kararlarını veya sermaye piyasası araçlarının fiyatını etkileyebilecek önemde olduğunda",
              "B": "Her çıkan magazin haberinde",
              "C": "Sadece yurt dışı gazetelerde haber çıktığında",
              "D": "Yılda bir kez toplu olarak",
              "E": "Haber asılsız olsa bile hiçbir zaman açıklama yapılmaz"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 9 uyarınca fiyata veya yatırım kararına etki edebilecek önemdeki haber ve söylentilerin doğru veya asılsız olduğuna dair KAP'ta açıklama yapılması zorunludur."
          },
          {
            "id": 9,
            "soruMetni": "Özel Durumlar Tebliği uyarınca ihraççıların geleceğe yönelik değerlendirmelerini (beklentilerini) kamuya açıklamasıyla ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Geleceğe yönelik değerlendirmeler yönetim kurulu kararına dayanmalı ve yılda en fazla 4 kez kamuya açıklanabilir.",
              "B": "Geleceğe yönelik değerlendirmeler kesinleşmiş garanti veriler olmalıdır.",
              "C": "Geleceğe yönelik açıklama yapılması yasaktır.",
              "D": "Açıklama sadece sözlü televizyon yayınında yapılır.",
              "E": "Sadece 10 yıllık planlar açıklanabilir."
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
              "D": "Maliye Müfettişi",
              "E": "Şirket Çaycısı"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 12 uyarınca oy haklarındaki önemli pay sahipliği değişiklikleri MKK tarafından veya ilgili ortak tarafından KAP'ta açıklanır."
          },
          {
            "id": 11,
            "soruMetni": "İhraççıların kamuya yapacakları özel durum açıklamalarının dili ve gönderim ortamı aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Türkçe olarak Elektronik İmza ile Kamuyu Aydınlatma Platformu'na (KAP) gönderilir.",
              "B": "Sadece İngilizce olarak gazete ilanı yapılır.",
              "C": "Posta yoluyla SPK'ya iletilir.",
              "D": "Şirket panosuna asılır.",
              "E": "Sadece TV kanallarında altyazı geçilir."
            },
            "dogruCevap": "A",
            "cozum": "Özel durum açıklamaları güvenli elektronik imza ile KAP sistemine yayımlanmak üzere iletilir."
          },
          {
            "id": 12,
            "soruMetni": "Özel Durumlar Tebliği uyarınca, kamuya açıklanan özel durum açıklamalarının şirketin kendi internet sitesinde yayımlanma ve saklanma süresi en az kaç yıldır?",
            "secenekler": {
              "A": "1 Yıl",
              "B": "2 Yıl",
              "C": "5 Yıl",
              "D": "8 Yıl",
              "E": "10 Yıl"
            },
            "dogruCevap": "C",
            "cozum": "Tebliğ m. 13 uyarınca kamuya açıklanan özel durum açıklamaları şirketin internet sitesinde en az 5 yıl süreyle güncel olarak tutulur."
          },
          {
            "id": 13,
            "soruMetni": "Özel Durumlar Tebliği uyarınca, ihraççının yönetim kontrolünü elinde tutan ortakların kendi aralarında yaptıkları oy sözleşmeleri veya yönetim kurulu üyeliği aday gösterme anlaşmaları KAP'ta açıklanmalı mıdır?",
            "secenekler": {
              "A": "Evet, sözleşmenin imzalandığı tarihte derhal KAP'ta açıklanması zorunludur.",
              "B": "Hayır, gizli kalması zorunludur.",
              "C": "Sadece Genel Kurulda söylenir.",
              "D": "Sadece şirket tasfiye edilirken açıklanır.",
              "E": "Sadece mahkeme isterse verilir."
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 12 uyarınca oy haklarının kullanımına ilişkin anlaşmalar ve kontrol değişiklikleri derhal kamuya açıklanır."
          },
          {
            "id": 14,
            "soruMetni": "İhraççıların konsolide olmayan finansal tablolarını KAP'ta yayımlama süresi hesap döneminin bitiminden itibaren en geç kaç gündür?",
            "secenekler": {
              "A": "30 Gün",
              "B": "60 Gün",
              "C": "70 Gün",
              "D": "90 Gün",
              "E": "120 Gün"
            },
            "dogruCevap": "C",
            "cozum": "Finansal Raporlama Tebliği (II-14.1) uyarınca konsolide olmayan yıllık finansal tablolar en geç 70 gün içinde KAP'ta yayımlanır."
          },
          {
            "id": 15,
            "soruMetni": "Halka açık ortaklıkların konsolide yıllık finansal tablolarını KAP'ta yayımlama azami süresi kaç gündür?",
            "secenekler": {
              "A": "30 Gün",
              "B": "60 Gün",
              "C": "70 Gün",
              "D": "90 Gün",
              "E": "120 Gün"
            },
            "dogruCevap": "D",
            "cozum": "Finansal Raporlama Tebliği uyarınca konsolide yıllık finansal raporların KAP'ta ilanı için azami süre 90 gündür."
          },
          {
            "id": 16,
            "soruMetni": "Aşağıdakilerden hangisi Sürekli Bilgiler kapsamında KAP'ta yayımlanması zorunlu olan hususlardan biri DEĞİLDİR?",
            "secenekler": {
              "A": "Şirketin genel kurul kararları ve tasfiye durumları",
              "B": "Sermaye artırımı ve azaltımı kararları",
              "C": "Şirket çalışanlarının günlük öğle yemeği menüsü",
              "D": "Unvan ve adres değişiklikleri",
              "E": "Kar payı dağıtım kararları"
            },
            "dogruCevap": "C",
            "cozum": "Şirket içindeki rutin operasyonel detaylar (yemek menüsü vb.) kamuyu aydınlatma kapsamında değildir."
          },
          {
            "id": 17,
            "soruMetni": "Özel durum açıklamalarının mesai saatleri dışında gerçekleşmesi durumunda KAP'a bildirim zamanı nasıl olmalıdır?",
            "secenekler": {
              "A": "Olay gerçekleştiği anda zaman kaybetmeksizin derhal KAP'a iletilir.",
              "B": "Ertesi gün mesai başlangıcına kadar beklenir.",
              "C": "Pazartesi sabahına kadar ertelenir.",
              "D": "Hafta sonu açıklama yapılması yasaktır.",
              "E": "SPK'nın açılacağı saat beklenir."
            },
            "dogruCevap": "A",
            "cozum": "KAP sistemi 7/24 esasına göre çalışır; özel durum oluşturan bilgi ortaya çıktığında derhal gönderilmesi esastır."
          },
          {
            "id": 18,
            "soruMetni": "İhraççıların KAP bildirimlerinde yanıltıcı veya eksik bilgi vermeleri halinde doğacak zararlardan kimler sorumludur?",
            "secenekler": {
              "A": "İhraççı şirket ve açıklamada imzası bulunan idari sorumlular",
              "B": "Sadece KAP yazılımını yapan mühendisler",
              "C": "Sadece Borsa İstanbul",
              "D": "Sadece MKK çalışanları",
              "E": "Hiç kimse sorumlu tutulamaz"
            },
            "dogruCevap": "A",
            "cozum": "KAP bildirimlerinin doğruluğundan ihraççı şirket ve bildirimi imzalayan idari sorumlular mevzuat uyarınca sorumludur."
          },
          {
            "id": 19,
            "soruMetni": "Özel Durumlar Tebliği uyarınca, ihraççının faaliyetlerini kısmen veya tamamen durdurması veya durdurulması kararı alınması halinde durum KAP'ta nasıl açıklanır?",
            "secenekler": {
              "A": "Karar alındığı anda Derhal Özel Durum Açıklaması olarak yayımlanır.",
              "B": "Yıl sonunda faaliyet raporuna eklenir.",
              "C": "Sadece işçilere bildirilir.",
              "D": "Borsa kotundan çıkana kadar açıklanmaz.",
              "E": "Gizli tutulur."
            },
            "dogruCevap": "A",
            "cozum": "Faaliyetlerin durması veya durdurulması içsel bilgi niteliğinde olup derhal KAP'ta ilan edilir."
          },
          {
            "id": 20,
            "soruMetni": "Halka açık şirketlerin İlişkili Taraf İşlemleri (II-17.1 / II-15.1) kapsamında varlık transferi işlemlerinde bağımsız değerleme yaptırma yükümlülüğü oran eşiği yüzde kaçtır?",
            "secenekler": {
              "A": "İşlem tutarının toplam varlıklara veya hasılata oranının %10'a ulaşması veya aşması halinde",
              "B": "%1 oranında",
              "C": "%50 oranında",
              "D": "%75 oranında",
              "E": "%100 oranında"
            },
            "dogruCevap": "A",
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
              "A": "3 Grup (1. Grup, 2. Grup, 3. Grup)",
              "B": "2 Grup",
              "C": "4 Grup",
              "D": "5 Grup",
              "E": "Gruplandırma yapılmaz"
            },
            "dogruCevap": "A",
            "cozum": "Kurumsal Yönetim Tebliği uyarınca halka açık şirketler 1., 2. ve 3. Grup olarak sistemli şekilde sınıflandırılır."
          },
          {
            "id": 2,
            "soruMetni": "II-17.1 sayılı Tebliğ gereğince, 1. Grup ve 2. Grup halka açık şirketlerin yönetim kurulunda yer alması gereken Bağımsız Yönetim Kurulu Üye sayısı ve oranı en az ne olmalıdır?",
            "secenekler": {
              "A": "Toplam üye sayısının 1/3'ünden az olamaz ve her halükarda 2 üyeden az olamaz.",
              "B": "Sadece 1 üye olması yeterlidir.",
              "C": "Tüm üyelerin bağımsız olması şarttır.",
              "D": "En az 5 üye olmalıdır.",
              "E": "Bağımsız üye zorunluluğu yoktur."
            },
            "dogruCevap": "A",
            "cozum": "Kurumsal Yönetim İlkeleri m. 4.3.4 uyarınca bağımsız üye sayısı toplam üye sayısının üçte birinden az olamaz ve her halükarda 2 üyeden az olamaz."
          },
          {
            "id": 3,
            "soruMetni": "Kurumsal Yönetim Tebliği uyarınca, bağımsız yönetim kurulu üyelerinin görev süresi tek seferde en fazla kaç yıl için seçilebilir?",
            "secenekler": {
              "A": "3 Yıl",
              "B": "1 Yıl",
              "C": "5 Yıl",
              "D": "6 Yıl",
              "E": "10 Yıl"
            },
            "dogruCevap": "A",
            "cozum": "Bağımsız yönetim kurulu üyeleri en fazla 3 yıl için seçilebilir ve tekrar aday gösterilip seçilmeleri mümkündür."
          },
          {
            "id": 4,
            "soruMetni": "Bir bağımsız yönetim kurulu üyesinin aynı şirkette veya şirket grubunda son 10 yıl içerisinde toplam kaç yıldan fazla bağımsız üye olarak görev yapmamış olması şarttır?",
            "secenekler": {
              "A": "6 Yıl",
              "B": "3 Yıl",
              "C": "5 Yıl",
              "D": "8 Yıl",
              "E": "10 Yıl"
            },
            "dogruCevap": "A",
            "cozum": "Kurumsal Yönetim İlkeleri m. 4.3.6 uyarınca son 10 yıl içinde 6 yıldan fazla bağımsız üyelik yapan kişi bağımsızlığını kaybeder."
          },
          {
            "id": 5,
            "soruMetni": "Kurumsal Yönetim Tebliği uyarınca, Yönetim Kurulu bünyesinde oluşturulması ZORUNLU olan komiteler arasında aşağıdakilerden hangisi YER ALMAZ?",
            "secenekler": {
              "A": "Sosyal Etkinlik ve Spor Komitesi",
              "B": "Denetimden Sorumlu Komite",
              "C": "Kurumsal Yönetim Komitesi",
              "D": "Riskin Erken Saptanması Komitesi",
              "E": "Aday Gösterme ve Ücret Komitesi"
            },
            "dogruCevap": "A",
            "cozum": "Zorunlu komiteler: Denetim, Kurumsal Yönetim, Riskin Erken Saptanması, Aday Gösterme ve Ücret komiteleridir. Spor komitesi yasal zorunluluk değildir."
          },
          {
            "id": 6,
            "soruMetni": "Yönetim kurulu bünyesinde kurulan Denetimden Sorumlu Komitenin üyeleri ve yapısı hakkında aşağıdakilerden hangisi ZORUNLUDUR?",
            "secenekler": {
              "A": "Komitenin tüm üyelerinin Bağımsız Yönetim Kurulu Üyelerinden oluşması zorunludur.",
              "B": "Sadece komite başkanı bağımsız olmalıdır.",
              "C": "Genel müdür komite başkanı olur.",
              "D": "Üyelerin en az yarısı icracı olmalıdır.",
              "E": "Dışarıdan uzmanlardan seçilir."
            },
            "dogruCevap": "A",
            "cozum": "Kurumsal Yönetim İlkeleri m. 4.5.3 uyarınca Denetimden Sorumlu Komitenin bütün üyeleri bağımsız yönetim kurulu üyeleri arasından seçilmelidir."
          },
          {
            "id": 7,
            "soruMetni": "Kurumsal Yönetim Tebliği uyarınca, bir yönetim kurulu üyesi aynı anda en fazla kaç komitenin başkanı olabilir?",
            "secenekler": {
              "A": "Sadece 1 Komite",
              "B": "2 Komite",
              "C": "3 Komite",
              "D": "Tüm Komiteler",
              "E": "Sınırlama yoktur"
            },
            "dogruCevap": "A",
            "cozum": "Bir yönetim kurulu üyesi birden fazla komitede görev alabilir ancak yalnızca 1 komitenin başkanı olabilir."
          },
          {
            "id": 8,
            "soruMetni": "Yönetim Kurulu Başkanı ile Genel Müdürün (İcra Başkanı) aynı kişi olması durumunda bu durumun gerekçesi nerede açıklanmalıdır?",
            "secenekler": {
              "A": "KAP'ta ve Yıllık Kurumsal Yönetim Uyum Raporunda gerekçesiyle açıklanmalıdır.",
              "B": "Ticaret Sicil Gazetesinde ilan edilir.",
              "C": "Gerekçe açıklamaya gerek yoktur.",
              "D": "SPK'dan ceza alınır.",
              "E": "Sadece mahkemeye bildirilir."
            },
            "dogruCevap": "A",
            "cozum": "Kurumsal Yönetim İlkeleri uyarınca YK başkanı ile İcra başkanı aynı kişi ise bu durum gerekçelendirilerek KAP'ta açıklanmalıdır."
          },
          {
            "id": 9,
            "soruMetni": "Kurumsal Yönetim Tebliği uyarınca oluşturulan Yatırımcı İlişkileri Bölüm Yöneticisinin haiz olması gereken lisans belgesi aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "SPL Düzey 3 Lisansı ve Kurumsal Yönetim Derecelendirme Lisansı",
              "B": "Sadece Düzey 1 Lisansı",
              "C": "Türev Araçlar Lisansı",
              "D": "Gayrimenkul Değerleme Lisansı",
              "E": "Lisans zorunluluğu yoktur"
            },
            "dogruCevap": "A",
            "cozum": "Yatırımcı ilişkileri bölüm yöneticisinin tam zamanlı çalışması, SPL Düzey 3 ve Kurumsal Yönetim Derecelendirme lisanslarına sahip olması şarttır."
          },
          {
            "id": 10,
            "soruMetni": "Aşağıdakilerden hangisi genel kabul görmüş Kurumsal Yönetim İlkelerinin temel 4 ayağı (prensibi) arasında YER ALMAZ?",
            "secenekler": {
              "A": "Şeffaflık",
              "B": "Hesap Verebilirlik",
              "C": "Sorumluluk",
              "D": "Adillik (Eşitlik)",
              "E": "Gizlilik ve Bilgi Saklama"
            },
            "dogruCevap": "E",
            "cozum": "Kurumsal Yönetimin 4 ana ilkesi: Şeffaflık, Adillik, Hesap Verebilirlik ve Sorumluluktur. Gizlilik ve bilgi saklama temel ilke değildir."
          },
          {
            "id": 11,
            "soruMetni": "Bağımsız yönetim kurulu üyelerinin bağımsızlığını kaybetmesi veya istifa etmesi durumunda yeni bağımsız üye seçilinceye kadar geçecek süre içinde en geç ne zaman seçim yapılmalıdır?",
            "secenekler": {
              "A": "Yapılacak ilk Genel Kurul toplantısına kadar geçici üye atanır veya ilk Genel Kurulda seçilir.",
              "B": "Şirket derhal kapatılır.",
              "C": "3 yıl boyunca boş kalır.",
              "D": "SPK doğrudan atama yapar.",
              "E": "Yönetim kurulu kararları geçersiz sayılır."
            },
            "dogruCevap": "A",
            "cozum": "Bağımsız üyelik boşaldığında yönetim kurulu ilk genel kurula kadar görev yapmak üzere geçici atama yapabilir veya ilk genel kurulda seçim tamamlanır."
          },
          {
            "id": 12,
            "soruMetni": "Kurumsal Yönetim Tebliği uyarınca, Ücretlendirme Politikası ve yönetim kurulu üyelerine verilen her türlü menfaatlerin açıklandığı organ aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Genel Kurul toplantısında ayrı bir madde olarak ortakların bilgisine sunulur ve internet sitesinde yayımlanır.",
              "B": "Sadece yönetim kurulunun gizli kasasında saklanır.",
              "C": "Sadece vergi dairesine bildirilir.",
              "D": "Açıklanması yasaktır.",
              "E": "Sadece bankalara verilir."
            },
            "dogruCevap": "A",
            "cozum": "Ücretlendirme politikası Genel Kurulda ortakların bilgisine sunulur ve şirket internet sitesinde açıklanır."
          },
          {
            "id": 13,
            "soruMetni": "Halka açık ortaklıklarda Riskin Erken Saptanması Komitesi kaç ayda bir yönetim kuruluna rapor sunmakla yükümlüdür?",
            "secenekler": {
              "A": "2 Ayda Bir",
              "B": "Her Ay",
              "C": "6 Ayda Bir",
              "D": "Yılda Bir",
              "E": "3 Yılda Bir"
            },
            "dogruCevap": "A",
            "cozum": "TTK m. 378 ve Tebliğ uyarınca Riskin Erken Saptanması Komitesi her 2 ayda bir durumu değerlendirir ve raporunu yönetim kuruluna sunar."
          },
          {
            "id": 14,
            "soruMetni": "Kurumsal Yönetim Tebliğinde belirtilen bağımsız yönetim kurulu üyesi adaylarının belirlenmesi sürecinde aday tekliflerini değerlendiren komite hangisidir?",
            "secenekler": {
              "A": "Aday Gösterme Komitesi (veya bu görevi üstlenen Kurumsal Yönetim Komitesi)",
              "B": "Bütçe Komitesi",
              "C": "Disiplin Komitesi",
              "D": "Satın Alma Komitesi",
              "E": "Pazarlama Komitesi"
            },
            "dogruCevap": "A",
            "cozum": "Aday Gösterme Komitesi bağımsız üye adaylık tekliflerini değerlendirip raporunu yönetim kuruluna sunar."
          },
          {
            "id": 15,
            "soruMetni": "Borsa İstanbul BIST-50 endeksinde yer alan 1. Grup halka açık şirketlerde yönetim kurulunda kadın üye oranı için tavsiye edilen hedef oran en az yüzde kaçtır?",
            "secenekler": {
              "A": "%25",
              "B": "%10",
              "C": "%15",
              "D": "%33",
              "E": "%50"
            },
            "dogruCevap": "A",
            "cozum": "Kurumsal Yönetim İlkeleri m. 4.3.9 uyarınca yönetim kurulunda kadın üye oranının en az %25 olması hedefi belirlenir ve politika oluşturulur."
          },
          {
            "id": 16,
            "soruMetni": "Kurumsal Yönetim Tebliği uyarınca, şirketlerin internet sitelerinde bilgilendirme politikası ve ortaklık yapısı en az kaç yıllık geçmişi kapsayacak şekilde yayımlanmalıdır?",
            "secenekler": {
              "A": "5 Yıl",
              "B": "1 Yıl",
              "C": "3 Yıl",
              "D": "7 Yıl",
              "E": "10 Yıl"
            },
            "dogruCevap": "A",
            "cozum": "Şirket internet sitesinde Kurumsal Yönetim bölümünde son 5 yıla ait açıklamalar ve bilgiler bulundurulur."
          },
          {
            "id": 17,
            "soruMetni": "Halka açık şirketlerde Kurumsal Yönetim Uyum Raporu (URF) ve Kurumsal Yönetim Bilgi Formu (KYBF) hangi platformda ve ne zaman yayımlanır?",
            "secenekler": {
              "A": "KAP'ta yıllık faaliyet raporu ile birlikte yayımlanır.",
              "B": "Sadece Ticaret Sicil Gazetesinde bassılır.",
              "C": "SPK binasına asılır.",
              "D": "5 yılda bir yayımlanır.",
              "E": "Sadece şirket içi e-posta ile duyurulur."
            },
            "dogruCevap": "A",
            "cozum": "URF ve KYBF şablonları yıllık finansal rapor ilan süresi içinde KAP'ta açıklanır."
          },
          {
            "id": 18,
            "soruMetni": "Kurumsal Yönetim İlkelerine uyum durumunu derecelendiren ve not veren bağımsız kurumlara ne ad verilir?",
            "secenekler": {
              "A": "Kurumsal Yönetim Derecelendirme Kuruluşları",
              "B": "Kredi Derecelendirme Şirketleri",
              "C": "Gayrimenkul Değerleme Şirketleri",
              "D": "Portföy Saklama Şirketleri",
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
              "B": "Tüm üyelerin oybirliği şarttır.",
              "C": "Tek bir üyenin onayı yeterlidir.",
              "D": "Genel kurul kararı olmadan karar alınamaz.",
              "E": "SPK temsilcisinin oyu şarttır."
            },
            "dogruCevap": "A",
            "cozum": "TTK ve SPK ilkeleri uyarınca üye tam sayısının çoğunluğu ile toplanılır ve katılanların çoğunluğu ile karar verilir."
          },
          {
            "id": 20,
            "soruMetni": "Yönetim kurulu üyelerine verilen performans ödemeleri ve hisse senedi opsiyonları konusunda bağımsız üyelere ilişkin kısıtlama nedir?",
            "secenekler": {
              "A": "Bağımsız yönetim kurulu üyelerinin ücretlendirilmesinde hisse senedi opsiyonları veya şirketin performansına dayalı ödeme planları KULLANILAMAZ.",
              "B": "Bağımsız üyelere sadece hisse senedi verilir.",
              "C": "Performans ödemesi zorunludur.",
              "D": "Ücret ödenmesi yasaktır.",
              "E": "Sadece kâr payı verilir."
            },
            "dogruCevap": "A",
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
              "A": "%50 ve üzeri oy hakkı",
              "B": "%10 oy hakkı",
              "C": "%25 oy hakkı",
              "D": "%75 oy hakkı",
              "E": "%90 oy hakkı"
            },
            "dogruCevap": "A",
            "cozum": "Pay Alım Teklifi Tebliği m. 11 uyarınca tek başına veya birlikte hareket ederek oy haklarının %50'sinden fazlasının elde edilmesi veya yönetim kurulunda çoğunluğu seçme hakkı kontrolü doğurur."
          },
          {
            "id": 2,
            "soruMetni": "II-26.1 sayılı Tebliğ gereğince, zorunlu pay alım teklifi zorunluluğunun doğduğu tarihten itibaren en geç kaç iş günü içinde SPK'ya pay alım teklifi bilgi formu onayı için başvurulmalıdır?",
            "secenekler": {
              "A": "6 İş Günü",
              "B": "10 İş Günü",
              "C": "15 İş Günü",
              "D": "30 İş Günü",
              "E": "60 İş Günü"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 13 uyarınca zorunlu pay alım teklifi doğduğunda 6 iş günü içinde SPK'ya başvuru yapılması zorunludur."
          },
          {
            "id": 3,
            "soruMetni": "Zorunlu pay alım teklifinde teklif fiyatı belirlenirken dikkate alınan geçmiş borsa fiyatları dönemi aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Pay alım teklif zorunluluğunun doğduğu tarihten önceki 6 aylık dönemde oluşan günlük düzeltilmiş ağırlıklı ortalama borsa fiyatlarının ortalaması",
              "B": "Son 1 haftalık fiyat",
              "C": "Son 3 yıllık en yüksek fiyat",
              "D": "Nominal değer (1 TL)",
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
              "B": "%50",
              "C": "%75",
              "D": "%80",
              "E": "%90"
            },
            "dogruCevap": "A",
            "cozum": "II-27.2 Tebliği m. 4 uyarınca oy haklarının en az %95'ine sahip olan ana ortak diğer ortakları ihraç etme (ortaklıktan çıkarma) hakkına sahip olur."
          },
          {
            "id": 5,
            "soruMetni": "Ortaklıktan Çıkarma Tebliği kapsamında, %95 oy eşiği aşıldığında azınlık ortakların paylarını hakim ortağa satma (Satma Hakkı) süresi kaç aydır?",
            "secenekler": {
              "A": "3 Ay",
              "B": "1 Ay",
              "C": "6 Ay",
              "D": "12 Ay",
              "E": "24 Ay"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 6 uyarınca çıkarma ve satma hakları 3 aylık hak düşürücü süre içinde kullanılır."
          },
          {
            "id": 6,
            "soruMetni": "Önemli Nitelikteki İşlemler ve Ayrılma Hakkı Tebliği (II-23.3) uyarınca aşağıdakilerden hangisi halka açık şirketlerde Önemli Nitelikteki İşlem sayılır?",
            "secenekler": {
              "A": "Birleşme, bölünme işlemlerine taraf olunması veya tür değiştirilmesi",
              "B": "Sıradan hammadde alım sözleşmesi",
              "C": "Ofis mobilyası yenilenmesi",
              "D": "Personel maaşlarının ödenmesi",
              "E": "Rutine bağlı müşteri faturası kesilmesi"
            },
            "dogruCevap": "A",
            "cozum": "II-23.3 m. 4 uyarınca birleşme, bölünme, malvarlığının devri, faaliyet konusunun değişmesi önemli nitelikte işlemdir."
          },
          {
            "id": 7,
            "soruMetni": "Önemli Nitelikteki İşlemlerin Genel Kurulda onaylanmasında toplantı ve karar nisaplarıyla ilgili aşağıdakilerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Esas sözleşmede daha ağır nisap yoksa, genel kurul oy haklarının en az %75'inin olumlu oyu ile karar alınır.",
              "B": "Basit çoğunluk yetmektedir.",
              "C": "Yalnızca yönetim kurulu kararı yeterlidir.",
              "D": "Genel kurula gerek yoktur.",
              "E": "Tek bir ortağın oyu yeterlidir."
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 8 uyarınca önemli nitelikteki işlemler genel kurulda katılan oy haklarının %75'inin olumlu oyu ile karara bağlanır."
          },
          {
            "id": 8,
            "soruMetni": "Önemli Nitelikteki İşleme İlişkin Genel Kurul toplantısına katılarak OLUMSUZ oy kullanan ve muhalefet şerhini tutanağa işleten pay sahiplerine tanınan hak hangisidir?",
            "secenekler": {
              "A": "Ayrılma Hakkı (Paylarını şirkete geri satıp ayrılma hakkı)",
              "B": "Pay Alım Teklifi Hakkı",
              "C": "Rüçhan Hakkı",
              "D": "Tasfiye Hakkı",
              "E": "Temettü Artırım Hakkı"
            },
            "dogruCevap": "A",
            "cozum": "SPKn m. 24 uyarınca önemli işleme olumsuz oy verip şerh düşen ortaklar paylarını şirkete satarak ayrılma hakkını kullanır."
          },
          {
            "id": 9,
            "soruMetni": "Ayrılma hakkı kullanım fiyatı, önemli nitelikteki işlemin kamuya açıklandığı tarihten önceki son kaç gündeki borsa ağırlıklı ortalama fiyatı olarak belirlenir?",
            "secenekler": {
              "A": "Kamuya açıklama tarihinden önceki 30 gün içinde oluşan düzeltilmiş ağırlıklı ortalama fiyat",
              "B": "Son 1 yıllık fiyat",
              "C": "Son 1 gündeki fiyat",
              "D": "Nominal tutar",
              "E": "Değerleme raporundaki en düşük fiyat"
            },
            "dogruCevap": "A",
            "cozum": "SPKn ve II-23.3 m. 10 uyarınca ayrılma hakkı fiyatı kararın açıklanmasından önceki 30 günlük borsa ortalama fiyatıdır."
          },
          {
            "id": 10,
            "soruMetni": "Sermaye Piyasası Kanunu uyarınca, Ayrılma Hakkı kullanımlarının şirketin katlanamayacağı boyutta mali yük getirmesi ihtimaline karşı Genel Kurul kararına ne eklenebilir?",
            "secenekler": {
              "A": "Ayrılma hakkı kullanımına bağlı üst sınır tutarı (Ayrılma hakkı maliyeti sınırı aştığında işlemden vazgeçme şartı)",
              "B": "Ayrılma hakkının tamamen iptal edildiği hükmü",
              "C": "Ortaklara ceza kesilmesi maddesi",
              "D": "Borsa kapama şartı",
              "E": "Vergi muafiyeti maddesi"
            },
            "dogruCevap": "A",
            "cozum": "Genel kurul kararına üst limit konulabilir; ayrılma hakkı talepleri bu limiti aşarsa şirket işlemden vazgeçebilir."
          },
          {
            "id": 11,
            "soruMetni": "Pay Tebliği (VII-128.1) uyarınca, halka açık anonim ortaklıkların bedelli sermaye artırımlarında izahname onaylanması başvurusunda hazırlanan değerleme raporları kime sunulur?",
            "secenekler": {
              "A": "Sermaye Piyasası Kuruluna sunulur ve KAP'ta ilan edilir.",
              "B": "Gizli olarak vergi dairesine sunulur.",
              "C": "Sadece rakiplere verilir.",
              "D": "Belediyeye onaylatılır.",
              "E": "Sunulma zorunluluğu yoktur."
            },
            "dogruCevap": "A",
            "cozum": "VII-128.1 sayılı Tebliğ uyarınca sermaye artırımlarında ilgili raporlar SPK onayına sunulur ve KAP'ta yayımlanır."
          },
          {
            "id": 12,
            "soruMetni": "Pay Alım Teklifi Tebliği uyarınca, zorunlu pay alım teklifinden muafiyet sağlanabilecek durumlar arasında aşağıdakilerden hangisi YER ALIR?",
            "secenekler": {
              "A": "Finansal yeniden yapılandırma veya mülkiyetin kredi karşılığı bankaya geçmesi hali",
              "B": "Sadece ortakların keyfi kararı",
              "C": "Borsa fiyatının yükselmesi",
              "D": "Şirketin kâr etmesi",
              "E": "Genel müdürün değişmesi"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 18 uyarınca bankaların alacak karşılığı pay alması veya finansal yapılandırmalarda SPK teklif zorunluluğundan muafiyet verebilir."
          },
          {
            "id": 13,
            "soruMetni": "Pay Alım Teklifinde teklif süresi (yatırımcıların kabul süresi) en az ve en fazla kaç iş günüdür?",
            "secenekler": {
              "A": "En az 10 iş günü, en fazla 20 iş günü",
              "B": "En az 1 iş günü, en fazla 5 iş günü",
              "C": "En az 30 iş günü, en fazla 60 iş günü",
              "D": "En az 2 iş günü, en fazla 3 iş günü",
              "E": "En az 15 iş günü, en fazla 45 iş günü"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 17 uyarınca pay alım teklif süresi 10 iş gününden az ve 20 iş gününden fazla olamaz."
          },
          {
            "id": 14,
            "soruMetni": "Önemli Nitelikteki İşlemler Tebliği uyarınca, şirketin aktif toplamının en az yüzde kaçını oluşturan varlıkların devredilmesi veya kiraya verilmesi Önemli Nitelikte İşlem sayılır?",
            "secenekler": {
              "A": "%50 ve üzeri",
              "B": "%10",
              "C": "%20",
              "D": "%30",
              "E": "%75"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ m. 5 uyarınca aktif büyüklüğünün veya sürdürülen faaliyetlerin %50'sini aşan varlık devirleri önemli nitelikte işlemdir."
          },
          {
            "id": 15,
            "soruMetni": "Ortaklıktan çıkarma hakkını kullanan hakim ortağın satılmayan payların bedellerini nereye yatırması ZORUNLUDUR?",
            "secenekler": {
              "A": "Takasbank nezdinde açılacak blokajlı özel hesaba yatırılır.",
              "B": "Kendi şahsi banka hesabında tutar.",
              "C": "Kasa nakdi olarak tutulur.",
              "D": "Yurt dışı hesaba aktarılır.",
              "E": "Vergi dairesine ödenir."
            },
            "dogruCevap": "A",
            "cozum": "Ortaklıktan Çıkarma Tebliği uyarınca pay bedelleri nemalandırılmak üzere Takasbank nezdinde açılan özel hesaba depo edilir."
          },
          {
            "id": 16,
            "soruMetni": "Ayrılma hakkını kullanmak isteyen ortak hakkını en geç kaç gün içinde şirkete bildirmelidir?",
            "secenekler": {
              "A": "Genel Kurul tarihinden itibaren en geç 6 iş günü içinde",
              "B": "30 gün sonra",
              "C": "1 yıl içinde",
              "D": "Aynı gün 1 saat içinde",
              "E": "Süre sınırı yoktur"
            },
            "dogruCevap": "A",
            "cozum": "II-23.3 m. 9 uyarınca ayrılma hakkı kullanımı genel kurul tarihinden itibaren 6 iş günü içinde şirkete bildirilir."
          },
          {
            "id": 17,
            "soruMetni": "Halka açık bir anonim şirketin borsada işlem gören paylarını kendi isteğiyle borsa kotundan çıkarması (Kottan Çıkarma) işleminde hangi tebliğ hükümleri uygulanır?",
            "secenekler": {
              "A": "Borsa İstanbul Korttan Çıkarma Yönergesi ve Ortaklıktan Çıkarma / Pay Alım Teklifi Tebliği",
              "B": "İcra İflas Kanunu",
              "C": "Çevre Kanunu",
              "D": "İş Kanunu",
              "E": "Karayolları Trafik Kanunu"
            },
            "dogruCevap": "A",
            "cozum": "Kottan çıkarma kararlarında Borsa yönergeleri ile SPK pay alım teklifi ve hakim ortaklık düzenlemeleri esas alınır."
          },
          {
            "id": 18,
            "soruMetni": "Pay Alım Teklifinde gönüllü pay alım teklifi (Gönüllü Çağrı) yapan kişi tekliften vazgeçebilir mi?",
            "secenekler": {
              "A": "SPK onayı ile ve haklı sebeplerin bulunması halinde teklif süresi başlamadan önce vazgeçebilir.",
              "B": "Hiçbir şekilde vazgeçemez.",
              "C": "İstediği an anında vazgeçer.",
              "D": "Sadece genel kurul onaylarsa vazgeçer.",
              "E": "Sadece borsa kapatılırsa vazgeçer."
            },
            "dogruCevap": "A",
            "cozum": "Gönüllü pay alım teklifinde SPK'nın uygun görmesi şartıyla ve haklı gerekçelerle tekliften cayıma izin verilebilir."
          },
          {
            "id": 19,
            "soruMetni": "Halka açık şirketlerin kayıtlı sermaye tavanı içinde yapacakları tahsisli sermaye artırımlarında rüçhan haklarının kısıtlanması kararı hangi organ tarafından alınır?",
            "secenekler": {
              "A": "Yönetim Kurulu (Esas sözleşmede yetki verilmişse)",
              "B": "Ticaret Bakanlığı",
              "C": "Borsa İstanbul",
              "D": "Maliye Bakanlığı",
              "E": "Bağımsız Denetçi"
            },
            "dogruCevap": "A",
            "cozum": "Kayıtlı sermaye sisteminde esas sözleşme ile yetkilendirilmişse Yönetim Kurulu rüçhan haklarını kısıtlayarak sermaye artırımı yapabilir."
          },
          {
            "id": 20,
            "soruMetni": "Ortaklıktan çıkarma hakkı sürecinde değerleme raporunu hazırlayacak değerleme kuruluşunu kim seçer ve görevlendirir?",
            "secenekler": {
              "A": "Şirketin Yönetim Kurulu (SPK listesindeki bağımsız değerleme kuruluşları arasından)",
              "B": "En küçük ortak",
              "C": "Belediye Encümeni",
              "D": "Vergi Dairesi Müdürü",
              "E": "Ticaret Odası Başkanı"
            },
            "dogruCevap": "A",
            "cozum": "Tebliğ uyarınca değerleme raporu SPK tarafından yetkilendirilmiş bağımsız değerleme kuruluşlarına yönetim kurulunca hazırlattırılır."
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
              "C": "Borsa İstanbul İşleyiş Kuralları",
              "D": "Takasbank ve MKK Saklama Düzenlemeleri",
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
              "A": "5",
              "B": "10",
              "C": "15",
              "D": "20",
              "E": "25"
            },
            "dogruCevap": "C",
            "cozum": "Sermaye Piyasası Araçlarının Satışı Tebliği (II-5.2) uyarınca halka arz edilecek payların nominal değerinin en az %15'inin yurt içi kurumsal yatırımcılara tahsis edilmesi zorunludur."
          },
          {
            "id": 2,
            "soruMetni": "Aşağıdaki durumlardan hangisinde izahname düzenlenmesi zorunluluğundan muafiyet tanınmıştır?",
            "secenekler": {
              "A": "Payları borsada işlem gören şirketlerin 12 aylık dönemde ödenmiş sermayelerinin %10'undan az kısmını temsil eden bedelli pay ihracında",
              "B": "Payların ilk defa halka arz edilmesinde",
              "C": "Halka açık olmayan anonim ortaklığın borçlanma aracı ihracında",
              "D": "Genel kurula sunulacak tüm sermaye artırımlarında",
              "E": "Niteliksiz yatırımcılara yapılan tüm satışlarda"
            },
            "dogruCevap": "A",
            "cozum": "İzahname ve İhraç Belgesi Tebliği (II-5.1) m. 6 uyarınca borsada işlem gören payların 12 aylık dönemde %10'undan az kısmını oluşturan bedelli pay ihraçları izahname muafiyetine tabidir."
          },
          {
            "id": 3,
            "soruMetni": "Halka açık olmayan ortaklıkların paylarının ilk defa halka arzında, 16 Mayıs - 15 Ağustos dönemi kapsamında payların halka arz edilmesi halinde, izahnamede aşağıdaki finansal tablolardan hangisine yer verilmesi gereklidir?",
            "secenekler": {
              "A": "Son 3 yıllık ve en son 3 aylık (ara dönem) finansal tablolar",
              "B": "Sadece son 1 yıllık finansal tablolar",
              "C": "Son 5 yıllık denetlenmiş tablolar",
              "D": "Sadece 6 aylık yönetim raporları",
              "E": "Geleceğe yönelik proprojeksiyon raporları"
            },
            "dogruCevap": "A",
            "cozum": "İzahname Tebliği ekindeki finansal tablo hazırlama takvimine göre 16 Mayıs - 15 Ağustos tarihleri arasındaki halka arzlarda son 3 yıllık ve en son ilk 3 aylık ara dönem finansal tablolar yayımlanır."
          },
          {
            "id": 4,
            "soruMetni": "Aşağıdakilerden hangisi halka arz satış yöntemlerinden biri DEĞİLDİR?",
            "secenekler": {
              "A": "Tahsisli Satış",
              "B": "Talep Toplanmaksızın Satış",
              "C": "Fiyat Teklifi Alarak Talep Toplama Yöntemi",
              "D": "Sabit Fiyatla Talep Toplama Yöntemi",
              "E": "Borsada Satış"
            },
            "dogruCevap": "A",
            "cozum": "Tahsisli satış, halka arz edilmeksizin doğrudan belirlenen kişilere yapılan satıştır; halka arz satış yöntemi değildir."
          },
          {
            "id": 5,
            "soruMetni": "İzahnamesi onaylanan bir şirket için sermaye piyasası araçlarının halka arz satış süresi en az ve en fazla kaç iş günüdür?",
            "secenekler": {
              "A": "En az 2 iş günü, en fazla 20 iş günü",
              "B": "En az 1 iş günü, en fazla 5 iş günü",
              "C": "En az 3 iş günü, en fazla 30 iş günü",
              "D": "En az 5 iş günü, en fazla 10 iş günü",
              "E": "En az 10 iş günü, en fazla 60 iş günü"
            },
            "dogruCevap": "A",
            "cozum": "Sermaye Piyasası Araçlarının Satışı Tebliği uyarınca halka arz satış süresi en az 2 iş günü, en fazla 20 iş günü olarak belirlenir."
          },
          {
            "id": 6,
            "soruMetni": "Sermaye piyasası araçlarının halka arzı öncesinde tasarruf sahiplerine satış şartlarını ve detaylarını duyuran ilan metnine ne ad verilir?",
            "secenekler": {
              "A": "Sirküler (Tasarruf Sahiplerine Satış Duyurusu)",
              "B": "İzahname",
              "C": "İhraç Belgesi",
              "D": "Faaliyet Raporu",
              "E": "Derecelendirme Raporu"
            },
            "dogruCevap": "A",
            "cozum": "Halka arzda izahnamenin yanı sıra alım-satım yerlerini ve şartlarını duyuran ilan belgesi Sirküler (Tasarruf Sahiplerine Satış Duyurusu) olarak adlandırılır."
          },
          {
            "id": 7,
            "soruMetni": "Aşağıdaki kuruluşlardan hangisi bir fon kurmaksızın doğrudan kendi bilançosundaki varlıklara dayalı Varlığa İpotekle Dayalı Menkul Kıymet (VİDMK) ihraç edebilir?",
            "secenekler": {
              "A": "İpotek Finansmanı Kuruluşu",
              "B": "Gayrimenkul Yatırım Ortaklığı",
              "C": "Portföy Yönetim Şirketi",
              "D": "Faktöring Şirketleri",
              "E": "Aracı Kurumlar"
            },
            "dogruCevap": "A",
            "cozum": "İpotek Finansmanı Kuruluşları fon kurmaksızın kendi bilançolarında yer alan ipotekli alacaklara dayalı VİDMK ihraç etme yetkisine sahiptir."
          },
          {
            "id": 8,
            "soruMetni": "Aşağıdakilerden hangisi İpotek Teminatlı Menkul Kıymet (İTMK) ihracına teminat olarak gösterilemez?",
            "secenekler": {
              "A": "Sigorta şirketlerinin alacakları",
              "B": "Hazine ve Maliye Bakanlığınca kurulan varlık kiralama şirketleri tarafından ihraç edilen kira sertifikaları",
              "C": "Bankaların sicilde ipotek tesis edilmek suretiyle teminat altına alınmış konut finansman alacakları",
              "D": "Devlet iç borçlanma senetleri (DİBS)",
              "E": "İpotek finansmanı kuruluşlarının konut kredisi alacakları"
            },
            "dogruCevap": "A",
            "cozum": "İTMK Tebliği (III-59.1) uyarınca teminat havuzuna sadece konut ve yapı finansmanı alacakları, DİBS ve onaylı kira sertifikaları alınabilir; sigorta şirketlerinin alacakları teminat olamaz."
          },
          {
            "id": 9,
            "soruMetni": "Aşağıdakilerden hangisi Varlık Teminatlı Menkul Kıymet (VTMK) ihracında teminat havuzuna karşılık gösterilemez?",
            "secenekler": {
              "A": "Vadesi 3 aydan kısa mevduat hesapları",
              "B": "Finansman şirketlerinin tüketici kredilerinden kaynaklanan alacakları",
              "C": "Bankaların tüketici kredilerinden kaynaklanan alacakları",
              "D": "TCMB tarafından ihraç edilen likidite senetleri",
              "E": "Sigortalanmış faktöring alacakları"
            },
            "dogruCevap": "A",
            "cozum": "VTMK Tebliği (III-59.1) gereğince 3 aydan kısa süreli mevduat hesapları teminat havuzuna aktarılamaz."
          },
          {
            "id": 10,
            "soruMetni": "Aşağıdaki kuruluşlardan hangisi münhasıran yalnızca İpotek Teminatlı Menkul Kıymet (İTMK) ihraç etmeye yetkilidir?",
            "secenekler": {
              "A": "Konut Finansmanı Kuruluşu",
              "B": "Konut Finansmanı Fonu",
              "C": "Finansal Kiralama Şirketleri",
              "D": "Faktöring Şirketleri",
              "E": "Portföy Yönetim Şirketleri"
            },
            "dogruCevap": "A",
            "cozum": "Konut Finansmanı Kuruluşları bilançolarındaki konut kredisi varlıklarına dayalı İTMK ihraç edebilir."
          },
          {
            "id": 11,
            "soruMetni": "Varlık Teminatlı Menkul Kıymetler (VTMK) ihracına ilişkin teminat uyum ilkelerinin ihlalinin ihraççı tarafından tespit edilmesi halinde, kaç ay içinde uyumun yeniden sağlanması zorunludur?",
            "secenekler": {
              "A": "1 Ay",
              "B": "2 Ay",
              "C": "3 Ay",
              "D": "4 Ay",
              "E": "5 Ay"
            },
            "dogruCevap": "A",
            "cozum": "Teminatlı Menkul Kıymetler Tebliği uyarınca teminat uyum ilkelerindeki eksikliklerin ihraççı tarafından tespiti halinde en geç 1 ay içinde uyumun yeniden sağlanması zorunludur."
          },
          {
            "id": 12,
            "soruMetni": "Aşağıdaki faizsiz finansman yöntemlerinden hangisinde kâr/faiz veya ek bir karşılık söz konusu DEĞİLDİR?",
            "secenekler": {
              "A": "Murabaha",
              "B": "İcara",
              "C": "Müşaraka",
              "D": "Karz-ı Hasen",
              "E": "Selem"
            },
            "dogruCevap": "D",
            "cozum": "Karz-ı Hasen (güzel borç), borç verene hiçbir ilave karşılık, menfaat veya kâr payı sağlamayan karşılıksız borç verme yöntemidir."
          },
          {
            "id": 13,
            "soruMetni": "Kira Sertifikaları Tebliği (III-61.1) uyarınca aşağıdakilerden hangisi tarafından Varlık Kiralama Şirketi (VKŞ) kurulamaz?",
            "secenekler": {
              "A": "Gayrimenkul Yatırım Fonları",
              "B": "Bankalar",
              "C": "Portföy aracılığı yapan aracı kurumlar",
              "D": "İpotek finansmanı kuruluşları",
              "E": "Payları borsada işlem gören Gayrimenkul Yatırım Ortaklıkları (GYO)"
            },
            "dogruCevap": "A",
            "cozum": "VKŞ kurabilecek kuruluşlar III-61.1 sayılı Tebliğde sayılmıştır. Gayrimenkul Yatırım Fonlarının VKŞ kurma yetkisi bulunmamaktadır."
          },
          {
            "id": 14,
            "soruMetni": "Kira sertifikası ihraç etmek üzere münhasıran anonim şirket şeklinde kurulan sermaye piyasası kurumuna ne ad verilir?",
            "secenekler": {
              "A": "Varlık Kiralama Şirketi (VKŞ)",
              "B": "Portföy Yönetim Şirketi",
              "C": "Fon Kullanıcısı",
              "D": "Kaynak Kuruluş",
              "E": "Portföy Saklama Şirketi"
            },
            "dogruCevap": "A",
            "cozum": "Kira sertifikaları sadece VKŞ (Varlık Kiralama Şirketleri) tarafından ihraç edilebilen özel amaçlı sermaye piyasası aracıdır."
          },
          {
            "id": 15,
            "soruMetni": "Bir emtianın önceden anlaşılan bir kâr payı üzerinden fon ihtiyacı olan tarafa vadeli satılması, fon ihtiyacı olan tarafın da bu emtiayı peşin olarak üçüncü bir tarafa satmasıyla finansman sağlayan İslami finansman yöntemi hangisidir?",
            "secenekler": {
              "A": "Murabaha (Teverruk)",
              "B": "İcara",
              "C": "İstısna",
              "D": "Mudaraba",
              "E": "Müşaraka"
            },
            "dogruCevap": "A",
            "cozum": "Alım-satıma dayalı kira sertifikası ihracında da kullanılan maliyet+kâr marjlı vadeli satış yöntemi Murabaha olarak adlandırılır."
          },
          {
            "id": 16,
            "soruMetni": "Gayrimenkul sertifikaları ihracında aşağıdaki raporlardan hangisi düzenlenemez / yer almaz?",
            "secenekler": {
              "A": "Risk tespit raporu",
              "B": "Yatırımcı bilgi formu",
              "C": "Fizibilite raporu",
              "D": "İnşaat ilerleme raporu",
              "E": "Gayrimenkul değerleme raporu"
            },
            "dogruCevap": "A",
            "cozum": "Gayrimenkul Sertifikaları Tebliği (VII-128.2) kapsamında değerleme, fizibilite, inşaat ilerleme ve fiyat tespit raporları düzenlenir; 'Risk tespit raporu' isimli bir belge yoktur."
          },
          {
            "id": 17,
            "soruMetni": "Gayrimenkul sertifikaları ihracına ilişkin aşağıdaki ifadelerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Gayrimenkul sertifikaları yurt içinde halka arz edilerek, halka arz edilmeksizin veya yurt dışındaki ihraçlarda kullanılabilir.",
              "B": "Sadece yurt dışında ihraç edilebilir.",
              "C": "Sadece halka açık şirketlerce ihraç edilir.",
              "D": "İhraç süresi sınırsızdır.",
              "E": "Yalnızca bankalar ihraç edebilir."
            },
            "dogruCevap": "A",
            "cozum": "Gayrimenkul sertifikaları yurt içinde halka arz edilerek, halka arz edilmeksizin veya yurt dışında ihraç edilme imkânına sahiptir."
          },
          {
            "id": 18,
            "soruMetni": "Gayrimenkul sertifikalarının sunduğu edimler hakkında aşağıdakilerden hangisi DOĞRUDUR?",
            "secenekler": {
              "A": "Edimler asli edim (bağımsız bölümün mülkiyeti) ve tali edim (nakdi ödeme) olarak sınıflandırılır.",
              "B": "Sadece nakdi edim mevcuttur.",
              "C": "Edim seçeneği bulunmamaktadır.",
              "D": "Asli edim sadece ortaklık payıdır.",
              "E": "Tali edim kullanımı zorunludur."
            },
            "dogruCevap": "A",
            "cozum": "Gayrimenkul sertifikalarında bağımsız bölümün mülkiyetinin edinilmesi asli edim, inşaat sonunda satıştan elde edilecek tutarın nakden ödenmesi tali edimdir."
          },
          {
            "id": 19,
            "soruMetni": "SPK düzenlemeleri uyarınca yatırım kuruluşu varantlarına dayanak teşkil eden varlık veya göstergeler arasında aşağıdakilerden hangisi yer ALMAZ?",
            "secenekler": {
              "A": "Gayrimenkul sertifikası",
              "B": "Emtia",
              "C": "Kıymetli maden",
              "D": "BİST-100 endeksinde yer alan paylar",
              "E": "Konvertibl döviz"
            },
            "dogruCevap": "A",
            "cozum": "Varrantlar Tebliği (VII-128.3) uyarınca paylar, endeksler, döviz, emtia ve kıymetli madenler dayanak varlık olabilir; gayrimenkul sertifikaları varant dayanağı yapılamaz."
          },
          {
            "id": 20,
            "soruMetni": "Dayanak varlığı almaktansa yatırımcıları sertifika almaya teşvik eden ve dayanak fiyatının önceden belirlenmiş bariyerin altına düşmemesi halinde belirli bir geri ödeme fiyatını garanti eden sermaye piyasası aracı hangisidir?",
            "secenekler": {
              "A": "Bonus Sertifikalar (Prim ödeyen sertifika)",
              "B": "Yatırım kuruluşu varantı",
              "C": "İskontolu Sertifikalar",
              "D": "Ortaklık Varrantı",
              "E": "Endeks Sertifikaları"
            },
            "dogruCevap": "A",
            "cozum": "Bariyer seviyesi koruması sağlayarak kâr/geri ödeme imkânı sunan yatırım kuruluşu sertifikaları Bonus Sertifika olarak adlandırılır."
          },
          {
            "id": 21,
            "soruMetni": "Ortaklık varantları hakkında aşağıdakilerden hangisi söylenebilir / DOĞRUDUR?",
            "secenekler": {
              "A": "Payları borsada işlem gören veya ilk defa halka arz edilecek ortaklıklar tarafından sadece kendi payları üzerine yazılı olarak ihraç edilebilir.",
              "B": "Başka şirket payları üzerine ihraç edilebilir.",
              "C": "Vadesi 10 yıldan fazla olabilir.",
              "D": "Yalnızca aracı kurumlar ihraç edebilir.",
              "E": "Devredilmesi yasaktır."
            },
            "dogruCevap": "A",
            "cozum": "Ortaklık varantları, ihraççı ortaklığın sadece kendi paylarını alma hakkı veren ve ihraççı ortaklık tarafından çıkarılan sermaye piyasası araçlarıdır."
          },
          {
            "id": 22,
            "soruMetni": "Aşağıdakilerden hangisi Türkiye’de yabancı sermaye piyasası araçlarının halka arz edilebilmesi için gereken ön şartlardan biri DEĞİLDİR?",
            "secenekler": {
              "A": "Yabancı ortaklıkların pay dışındaki ihraçlarında başvuru tarihinden önceki 1 yıl içerisinde bir derecelendirme kuruluşundan AAA notu alması zorunluluğu",
              "B": "Borsada işlem görme başvurusunun veya ihracının reddedilmemiş olması",
              "C": "TL hariç herhangi başka bir para biriminden ihraç edilmiş olması",
              "D": "Devir veya tedavülünü kısıtlayıcı haklar bulunmaması",
              "E": "İhraç edildikleri ülkede mali haklar ile ilgili işlem ve ödemelere kısıtlama bulunmaması"
            },
            "dogruCevap": "A",
            "cozum": "Yabancı Sermaye Piyasası Araçları Tebliği uyarınca AAA notu şartı yoktur; en az yatırım yapılabilir (investment grade) seviyesinde kredi notu almak yeterlidir."
          },
          {
            "id": 23,
            "soruMetni": "Aşağıdakilerden hangisi depo sertifikalarının (Depositary Receipts) yatırımcıya sağladığı faydalardan biri DEĞİLDİR?",
            "secenekler": {
              "A": "İşlem gördüğü ülkenin düzenlemelerine tabi olması sonucunda yatırımcıların saat ve takas riskleriyle karşılaşarak mağdur olması",
              "B": "Doğrudan yabancı menkul kıymetlere yatırım yapmaya kıyasla daha düşük maliyet sunması",
              "C": "Yabancı hisse senedinin yerel piyasasındaki fiyatıyla işlem gördüğü için saat/kur farkından arbitraj imkânı sağlaması",
              "D": "İşlem gördüğü piyasanın kendi para birimi cinsinden ihraç edilip alım satıma konu olması",
              "E": "Uluslararası sermaye piyasalarından finansman imkânı sunması"
            },
            "dogruCevap": "A",
            "cozum": "Depo sertifikaları yerel saklama ve yerel para birimi kolaylığı sunarak yatırımcının saat, takas ve yabancı mevzuat karmaşasını ortadan kaldırır; mağduriyet bir fayda değildir."
          },
          {
            "id": 24,
            "soruMetni": "Projeye Dayalı Menkul Kıymetler (PDMK) ihraç etmek amacıyla oluşturulan fonun yönetimi ve mal varlığının korunmasından kim sorumludur?",
            "secenekler": {
              "A": "Proje Finansmanı Fonu Kurucusu ve Teminat Yöneticisi",
              "B": "MKK Genel Müdürlüğü",
              "C": "Borsa İstanbul Yönetim Kurulu",
              "D": "Ticaret Bakanlığı",
              "E": "Kamu Gözetimi Kurumu"
            },
            "dogruCevap": "A",
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
              "B": "Yönetmelik ve Genelge Esasları",
              "C": "Borsa İstanbul İşleyiş Kuralları",
              "D": "Takasbank ve MKK Saklama Düzenlemeleri",
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
              "B": "Yönetmelik ve Genelge Esasları",
              "C": "Borsa İstanbul İşleyiş Kuralları",
              "D": "Takasbank ve MKK Saklama Düzenlemeleri",
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
              "B": "Yönetmelik ve Genelge Esasları",
              "C": "Borsa İstanbul İşleyiş Kuralları",
              "D": "Takasbank ve MKK Saklama Düzenlemeleri",
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
              "C": "Tüketici faydası",
              "D": "Milli gelir seviyesi"
            },
            "dogruCevap": "D",
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
              "A": "Orijine göre dış bükeydirler",
              "B": "Eğriler birbirini kesmezler",
              "C": "Orijine yaklaştıkça daha yüksek faydayı ifade ederler",
              "D": "Negatif eğimlidirler"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_4",
            "soru": "Kayıtsızlık eğrisinin dikey ve yatay ekseninde aşağıdakilerden hangileri yer almaktadır?",
            "secenekler": {
              "A": "Malın fiyatı ve malın tüketim miktarı",
              "B": "Malın fiyatı ve malın faydası",
              "C": "Malların üretim miktarları",
              "D": "Malların tüketim miktarları"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_5",
            "soru": "Kayıtsızlık (farksızlık) eğrisinin orijine göre dış bükey olmasının nedeni aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Azalan marjinal fayda",
              "B": "Azalan marjinal teknik ikame oranı",
              "C": "Azalan marjinal ikame oranı",
              "D": "Fırsat maliyeti"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_6",
            "soru": "Tam tamamlayıcı malların kayıtsızlık eğrisinin şekli aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Negatif eğimli ve iki ekseni kesen bir eğridir",
              "B": "Yatay eksene paralel bir eğridir",
              "C": "L şeklindedir",
              "D": "Dikey eksene paralel bir eğridir"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_7",
            "soru": "Girdilerdeki %10’luk artışa karşılık üretim %25 artıyorsa aşağıdakilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Ölçeğe göre sabit verim vardır",
              "B": "Ölçeğe göre artan verim vardır",
              "C": "Maliyetlerde azalma vardır",
              "D": "Ölçeğe göre azalan verim vardır"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_8",
            "soru": "Üretimde kullanılan değişken girdi miktarı 2 birimden 3 birime çıktığında, toplam ürün 50 birimden 200 birime çıkarsa marjinal ürün miktarı kaç olur?",
            "secenekler": {
              "A": "150",
              "B": "75",
              "C": "100",
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
              "B": "Mobilite",
              "C": "Homojenlik",
              "D": "Şeffaflık"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_10",
            "soru": "Aşağıdakilerden hangisi talep eğrisi üzerinde bir harekete neden olur?",
            "secenekler": {
              "A": "Gelirin artması",
              "B": "Malın fiyatının değişmesi",
              "C": "Teknolojik gelişmeler",
              "D": "Maliyetlerin artması"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_11",
            "soru": "Bir malın fiyatı 400 birimden 600 birime çıktığında talep edilen miktarı 1000 birimden 500 birime düşmektedir. Yay esnekliği formülüne göre talebin fiyat esnekliği kaçtır?",
            "secenekler": {
              "A": "5/3",
              "B": "-5/3",
              "C": "3/5",
              "D": "-3/5"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_12",
            "soru": "Toplam faydanın maksimum olduğu seviye için aşağıdaki bilgilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Ortalama fayda en düşük seviyesindedir",
              "B": "Marjinal fayda minimum seviyesindedir",
              "C": "Marjinal fayda sıfırdır",
              "D": "Ortalama fayda sıfırdır"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_13",
            "soru": "Aşağıdaki mal gruplarından hangisi tamamlayıcı mallara örnektir?",
            "secenekler": {
              "A": "Kırmızı et-beyaz et",
              "B": "Çay-kahve",
              "C": "Elma-armut",
              "D": "Araba-benzin"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_14",
            "soru": "Aşağıdaki üretim faktörü ve geliri eşleştirmelerinden hangisi yanlıştır?",
            "secenekler": {
              "A": "Sermaye-rant",
              "B": "Emek-ücret",
              "C": "Sermaye-faiz",
              "D": "Girişimci-kar"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_15",
            "soru": "Üretim olanakları eğrisinin iç kısmında yer alan bir nokta için aşağıdakilerden hangisi söylenebilir?",
            "secenekler": {
              "A": "Üretim tam kapasite çalışmaktadır",
              "B": "Üretim faktörleri yetersiz kalmıştır",
              "C": "Denge sağlanmıştır",
              "D": "Üretim faktörleri eksik üretim yapmaktadır"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_16",
            "soru": "Bireyin gelirinin arttığı bir durumda denge miktar ve denge fiyat hakkında aşağıdakilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Talep azalır",
              "B": "Malın denge fiyat seviyesi değişmez",
              "C": "Malın denge fiyatı yükselir",
              "D": "Arz azalır"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Temel Kavramlar ve Fiyat Mekanizması konusundan alınmıştır."
          },
          {
            "id": "1008_t1_17",
            "soru": "Üretim maliyetlerinin arttığı bir durumda denge miktar ve denge fiyat hakkında aşağıdakilerden hangisi gerçekleşir?",
            "secenekler": {
              "A": "Arz eğrisi sola kayar",
              "B": "Arz eğrisi değişmez",
              "C": "Malın denge fiyatı düşer",
              "D": "Talep artar"
            },
            "dogruCevap": "A",
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
              "A": "Talep eğrisi tam inelastiktir",
              "B": "Talep eğrisi fiyat artışlarına oldukça duyarlıdır",
              "C": "Talep birim esnektir",
              "D": "Talep sonsuz esnektir."
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_2",
            "soru": "Tam rekabet piyasası ile ilgili aşağıdaki bilgilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Kısa dönem ve uzun dönem firma dengeleri farklıdır",
              "B": "Üretici ve tüketicilerin fiyat üzerinde kontrolleri yoktur",
              "C": "Marjinal maliyet eğrisi yatay eksene paraleldir.",
              "D": "Denge koşulu MC=P=MR dir"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_3",
            "soru": "Aşağıdakilerden hangisi monopol piyasası hakkında yanlış bir bilgidir?",
            "secenekler": {
              "A": "Tek satıcı, çok sayıda alıcı vardır",
              "B": "Piyasaya girişte engeller bulunmaktadır",
              "C": "Üretilen malın yakın ikamesi vardır",
              "D": "Marjinal gelir eğrisi ortalama gelir eğrisinin altındadır"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_4",
            "soru": "Aşağıdakilerden hangisi monopolcü rekabet piyasası hakkında yanlış bir bilgidir?",
            "secenekler": {
              "A": "Monopol ve tam rekabet piyasasının özelliklerini taşır",
              "B": "Piyasada çok satıcı tek alıcı vardır",
              "C": "Ürün farklılaştırılması yapılır",
              "D": "Piyasaya giriş çıkış serbesttir"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_5",
            "soru": "Aşağıdakilerden hangisi oligopol piyasası hakkında doğru bir bilgidir?",
            "secenekler": {
              "A": "Piyasaya giriş-çıkış serbesttir",
              "B": "Çok alıcı çok satıcı bulunmaktadır",
              "C": "Sadece homojen ürün üretilir",
              "D": "Anlaşma yapan firmalar tröst oluşturur"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_6",
            "soru": "Bir malın fiyatı 8 liradan 16 liraya çıktığında talep miktarı 20 birimden 10 birime düşmüştür. Bu malın talebinin fiyat esnekliği kaçtır?",
            "secenekler": {
              "A": "-0,5",
              "B": "0,5",
              "C": "1",
              "D": "0"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_7",
            "soru": "Üretici dengesi hangi iki eğrinin teğet olduğu noktada gerçekleşmektedir?",
            "secenekler": {
              "A": "Talep Eğrisi – Arz Eğrisi",
              "B": "Eş ürün Eğrisi – Kayıtsızlık Eğrisi",
              "C": "Eş Maliyet Doğrusu – Bütçe Doğrusu",
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
              "B": "Bütçe Doğrusu – Kayıtsızlık Eğrisi",
              "C": "Eş Maliyet Doğrusu – Bütçe Doğrusu",
              "D": "Eş Ürün Eğrisi – Eş Maliyet Doğrusu"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_9",
            "soru": "Sermaye ve emek gücü arasındaki ikame ilişkisini gösteren eş ürün eğrisinin eğimi aşağıdakilerden hangisine eşittir?",
            "secenekler": {
              "A": "Marjinal Dönüşüm Oranı",
              "B": "Marjinal Maliyet",
              "C": "Marjinal Teknik İkame Oranı",
              "D": "Marjinal İkame Oranı"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_10",
            "soru": "Talep eğrisi aşağıdaki gibi olan bir ürünün, miktarının 40 birim olduğu noktada fiyat esnekliği nedir? 𝑄= 20𝑃−2",
            "secenekler": {
              "A": "-1",
              "B": "+1",
              "C": "-2",
              "D": "+2"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_11",
            "soru": "X malı ile Y malı arasındaki ilişki hakkında ne söylenebilir?",
            "secenekler": {
              "A": "Y malının fiyatı azaldığında X malına olan talep artacağından X ve Y malları tamamlayıcı",
              "B": "Y malının fiyatı artığında X malına olan talep artacağından X ve Y malları tamamlayıcı",
              "C": "Y malının fiyatı azaldığında X malına olan talep artacağından X ve Y malları ikame mallardır.",
              "D": "Y malının fiyatı arttığında X malına olan talep artacağından X ve Y malları ikame mallardır."
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_12",
            "soru": "İKİNCİ BÖLÜM SORULARI 1. Aşağıdakilerden hangisi paranın fonksiyonlarından birisi değildir?",
            "secenekler": {
              "A": "Değişim aracı olma",
              "B": "Değer muhafaza aracı olma",
              "C": "Hesap birimi olma",
              "D": "Standart olma"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_13",
            "soru": "Aşağıdakilerden hangisi parada olması gereken özelliklerden birisi değildir?",
            "secenekler": {
              "A": "Taklit edilmemelidir",
              "B": "Genel kabul görmelidir",
              "C": "Bölünebilir olmamalıdır",
              "D": "Dayanıklı olmalıdır"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_14",
            "soru": "“Kötü para iyi parayı kovar” temelindeki görüş aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Gresham Kanunu",
              "B": "Keynes Kanunu",
              "C": "Monetarist Kanunu",
              "D": "Lorenz Kanunu"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_15",
            "soru": "I- Parayı talep eden kişi sayısı II- Ödeme sistemlerinin değişmesi III- Faiz oranları Yukarıdakilerden hangileri para talebini etkileyen faktörlerdendir?",
            "secenekler": {
              "A": "Yalnız I",
              "B": "I-III",
              "C": "II-III",
              "D": "I-II-III"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_16",
            "soru": "Aşağıdaki bilgilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Cambridge Yaklaşımı’na göre servet tutma isteği para talebini etkilemektedir",
              "B": "Miktar Teorisi’ne göre para talebi işlem, ihtiyat ve spekülasyon güdüleri ile belirlenmektedir",
              "C": "Miktar Teorisi’ne göre paranın dolaşım hızı sabit değildir",
              "D": "İhtiyat güdüsü günlük yaşamın ihtiyaçları için talep edilen para miktarını ifade eder"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Esneklik, Üretim, Maliyetler ve Piyasalar konusundan alınmıştır."
          },
          {
            "id": "1008_t2_17",
            "soru": "Likidite Tuzağı ile ilgili aşağıdakilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Marshall ve Pigou tarafından geliştirilmiştir",
              "B": "Faiz oranları en düşük seviyede iken para talebi sonsuz esnektir",
              "C": "Faiz oranları en düşük seviyede iken tahvil alımları devam eder",
              "D": "Milton Friedman tarafından geliştirilmiştir"
            },
            "dogruCevap": "B",
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
              "A": "Enflasyon beklentileri para talebini etkiler",
              "B": "Faiz oranları para talebini etkiler",
              "C": "Beşerî sermaye para talebini etkilemez",
              "D": "Monetarist Para Talebi teorisidir"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_2",
            "soru": "Aşağıdakilerden hangisi Merkez Bankası’nın görevlerinden değildir?",
            "secenekler": {
              "A": "Banknot ve para basmak",
              "B": "Altın ve döviz rezervi bulundurmak",
              "C": "Yerli paranın değerini korumak",
              "D": "Madeni para basmak"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_3",
            "soru": "Aşağıdakilerden hangisi ekonomi politikasının araçlarından biri değildir?",
            "secenekler": {
              "A": "Para politikası",
              "B": "Tam istihdam politikası",
              "C": "Maliye politikası",
              "D": "Dış ticaret politikaları"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_4",
            "soru": "Aşağıdakilerden hangisi para politikasının araçlarından değildir?",
            "secenekler": {
              "A": "Reeskont oranı",
              "B": "Açık piyasa işlemleri",
              "C": "Zorunlu karşılıklar",
              "D": "İç borçlanma"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_5",
            "soru": "Aşağıdaki bilgilerden hangisi doğru değildir?",
            "secenekler": {
              "A": "Genişletici para politikaları, faiz oranlarını yükseltir",
              "B": "Yüksek enflasyon varsa daraltıcı para politikaları uygulanır",
              "C": "Daraltıcı para politikaları, bireyleri tasarruf yapmaya yönlendirir",
              "D": "Genişletici para politikalarında para arzı arttırılır"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_6",
            "soru": "Keynesyen para talebi teorisine göre aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Ekonomik birimler işlem saikiyle para talep ederler",
              "B": "Ekonomik birimler ihtiyat saikiyle para talep ederler",
              "C": "Ekonomik birimler spekülasyon saikiyle para talep ederler",
              "D": "Para talebi faiz oranlarının ve gelirin negatif bir fonksiyonudur"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_7",
            "soru": "Taylor Kuralı ile ilgili aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Reel faiz oranı arttıkça nominal faiz oranı da artar",
              "B": "Enflasyon arttıkça nominal faiz oranı da artar",
              "C": "Gerçekleşen enflasyon beklenen enflasyonun altında kaldıysa nominal faiz oranı artar",
              "D": "Gerçekleşen milli hasıla potansiyel milli hasılanın üzerindeyse nominal faiz oranı artar"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_8",
            "soru": "Merkez bankası bağımsızlığıyla ilgili aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Bağımsızlık için amaç bağımsızlığı şarttır",
              "B": "Bağımsızlığın önemli bir göstergesi araç bağımsızlığıdır",
              "C": "Merkez bankası tarafından birincil piyasadan devlet iç borçlanma senedi alınmasının kanunen",
              "D": "Araç bağımsızlığının diğer bir ismi de fonksiyonel bağımsızlıktır."
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_9",
            "soru": "Repo ve ters repoya ilişkin aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Bir menkul kıymetin işlem başlangıç valöründe satılıp, bitiş tarihinde geri alınmasına repo",
              "B": "Repo yapan işlem tarihinde menkul kıymeti ihraç eden veya satandır",
              "C": "Repo yapan fon arz edendir.",
              "D": "Ters repoda bir menkul kıymet işlem tarihinde alınıp, bitiş valöründe ise satılır."
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_10",
            "soru": "Fisher Para Talep Teorisine göre aşağıdakilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Fiyatlar genel düzeyi aşağı ve yukarı yönlü esnektir.",
              "B": "Paranın dolaşım hızı kısa dönemde değişkendir",
              "C": "Kısa dönemde nominal para arzındaki bir artış veya azalış fiyatlar genel düzeyine birebir",
              "D": "Para arzındaki artış üretim düzeyini de arttıracaktır"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_11",
            "soru": "Cambridge Para Talep Teorisi’ne göre aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "A.C. Pigou tarafından ortaya atılmıştır",
              "B": "Kısa dönemde paranın dolaşım hızı ve milli gelir sabittir",
              "C": "Kısa dönemde para arzındaki değişiklikler birebir fiyatlara yansır",
              "D": "Para talebinin temel nedenlerinden biri spekülasyon saikidir."
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_12",
            "soru": "ÜÇÜNCÜ BÖLÜM SORULARI 1. Maliye politikalarıyla ilgili olarak aşağıdakilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Enflasyon halinde genişletici maliye politikaları uygulanmalıdır",
              "B": "Vergi oranlarının azaltılması, genişletici maliye politikası uygulamasıdır",
              "C": "Faiz oranları, uygulanan maliye politikalarından etkilenmez",
              "D": "Daraltıcı maliye politikalarının işsizlik oranını düşürücü etkisi vardır"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_13",
            "soru": "Aşağıdakilerden hangisi Klasik ekonomistlerin görüşlerinden biri değildir?",
            "secenekler": {
              "A": "Müdahale olmaksızın piyasa sorunları ortadan kalkabilir",
              "B": "Tüm piyasalarda tam rekabet piyasası koşulları geçerlidir",
              "C": "Bütçe denkliğini sağlamak mümkün değildir",
              "D": "Para ve maliye politikalarının etkinliği sınırlıdır"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_14",
            "soru": "Monetarist görüşe göre hangisi söylenemez?",
            "secenekler": {
              "A": "Para politikası uygulamalarında önemli olan para arzını kontrol etmektir",
              "B": "Para kısa dönemde nötrdür",
              "C": "Nominal gelir düzeyi para miktarıyla doğrudan ilişkilidir",
              "D": "Para arzı arttığında nominal GSYH artar"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_15",
            "soru": "Keynesyen görüşe göre aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Devletin ekonomiye müdahalesi gereklidir",
              "B": "Toplam talebe yönelik müdahalelerde bulunulmalıdır",
              "C": "Fiyat ve ücretler esnektir",
              "D": "Ekonomi eksik istihdamdadır"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_16",
            "soru": "IS-LM analizine göre genişletici para politikasının uygulandığı durumda aşağıdakilerden hangisi gerçekleşmez?",
            "secenekler": {
              "A": "LM eğrisi sağa kayar",
              "B": "IS eğrisi değişmez",
              "C": "Yeni denge noktasında milli gelir değişmez",
              "D": "Faiz oranları azalır"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Para Politikaları ve Merkez Bankacılığı konusundan alınmıştır."
          },
          {
            "id": "1008_t3_17",
            "soru": "IS-LM analizine göre vergi oranları arttırıldığında aşağıdakilerden hangisi gerçekleşmez?",
            "secenekler": {
              "A": "IS eğrisi sola kayar",
              "B": "Milli gelir düşer",
              "C": "Faiz oranı düşer",
              "D": "LM eğrisi sağa kayar"
            },
            "dogruCevap": "D",
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
              "A": "400",
              "B": "500",
              "C": "1000",
              "D": "2000"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_2",
            "soru": "Politika etkisizliği kavramı hangi iktisadi yaklaşım için geçerlidir?",
            "secenekler": {
              "A": "Monetarist Yaklaşım",
              "B": "Yeni Klasik Yaklaşım",
              "C": "Keynesyen Yaklaşım",
              "D": "Yeni Keynesyen Yaklaşım"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_3",
            "soru": "Aşağıdakilerden hangisi maliye politikasının amaçları arasında değildir?",
            "secenekler": {
              "A": "Ekonomik İstikrar",
              "B": "Adil Gelir Dağılımı",
              "C": "Ekonomik Büyüme ve Kalkınma",
              "D": "Faiz Oranı İstikrarı"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_4",
            "soru": "IS eğrisi ile ilgili aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "IS eğrisi üzerindeki noktalarda yatırım-tasarruf eşitliği söz konusudur.",
              "B": "IS eğrisinin solundaki noktalarda mal arz fazlası vardır.",
              "C": "IS eğrisi mal piyasalarında dengeyi sağlayan gelir-faiz haddi bileşimlerinin geometrik yeridir.",
              "D": "IS eğrisi genişletici maliye politikası sonucunda sağa kayar"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_5",
            "soru": "Harcama çarpanı ile ilgili aşağıdakilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Marjinal tüketim eğiliminin artması haracama çarpanını arttırır",
              "B": "Marjinal vergi haddinin azalması harcama çarpanını azaltır",
              "C": "Marjinal ithalat eğiliminin artması harcama çarpanını arttırır",
              "D": "Otonom tüketim miktarının artması harcama çarpanını arttırır"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_6",
            "soru": "DÖRDÜNCÜ BÖLÜM SORULARI 1. Aşağıdaki faktörlerden hangisi kişi başına düşen GSYH’yi etkilememektedir?",
            "secenekler": {
              "A": "Nüfus yapısı",
              "B": "Kayıt dışı ekonomi",
              "C": "Otonom yatırım",
              "D": "Kaynakların etkin dağılımı"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_7",
            "soru": "Aşağıdakilerden hangisi kamu gelirleri arasında gösterilemez?",
            "secenekler": {
              "A": "Sübvansiyonlar",
              "B": "Vergiler",
              "C": "Borçlanma",
              "D": "Vergi cezaları"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_8",
            "soru": "Aşağıdakilerden hangisi kamu giderleri arasında gösterilemez?",
            "secenekler": {
              "A": "Cari harcamalar",
              "B": "Transfer harcamaları",
              "C": "Yatırım harcamaları",
              "D": "Değişken harcamalar"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_9",
            "soru": "Aşağıdakilerden hangisi TCMB rezervlerinin piyasadaki rolü hakkında yanlış bir bilgidir?",
            "secenekler": {
              "A": "Merkez Bankasına manevra alanı sağlar",
              "B": "Likidite yetersizliklerine kaynaktırlar",
              "C": "Döviz Kuru hedefleri doğrultusunda kullanılabilirler",
              "D": "İç dengeyi bozucu etkileri bulunmaktadır"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_10",
            "soru": "GSMH ile GSYH arasındaki fark aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Amortismanlar",
              "B": "Transfer Ödemeleri",
              "C": "Dış Alem Net Faktör Gelirleri",
              "D": "Kurumlar Vergisi"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_11",
            "soru": "Bir ekonomideki tüm üretim faktörlerinin tam kullanım kapasiteleri doğrultusunda istihdam edilmesi ile ulaşılabilecek çıktının ifadesi aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Fiili GSYH",
              "B": "Nominal GSYH",
              "C": "Reel GSYH",
              "D": "Potansiyel GSYH"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_12",
            "soru": "Aşağıdakilerden hangisi milli gelirin tam olarak yansıtamadığı konulardan birisi değildir?",
            "secenekler": {
              "A": "Çevre sorunları",
              "B": "Üretim faktörlerinin geliri",
              "C": "Kayıt dışı ekonomi",
              "D": "Ürün kalitesindeki gelişmeler"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_13",
            "soru": "Aşağıdakilerden hangisi yatırım kararını etkileyen faktörlerden birisi değildir?",
            "secenekler": {
              "A": "Teknolojik gelişmeler",
              "B": "Faiz oranı",
              "C": "Beklenti ve tahminler",
              "D": "Otonom Tüketim"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_14",
            "soru": "Daha fazla paranın daha az malı kovaladığı enflasyon türü aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Talep Enflasyonu",
              "B": "Hiperenflasyon",
              "C": "Arz enflasyonu",
              "D": "Ilımlı enflasyon"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_15",
            "soru": "Aşağıdakilerden hangisi doğal işsizlik oranını etkileyen faktörlerden birisi değildir?",
            "secenekler": {
              "A": "Demografik değişimler",
              "B": "Arz şokları",
              "C": "Maliyet analizi",
              "D": "Devlet politikaları"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_16",
            "soru": "Eksik talep işsizliği olarak da bilinen işsizlik türü aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Konjonktürel İşsizlik",
              "B": "Reel Ücret İşsizliği",
              "C": "Friksiyonel İşsizlik",
              "D": "Doğal İşsizlik"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Maliye Politikaları ve Makroekonomik Göstergeler konusundan alınmıştır."
          },
          {
            "id": "1008_t4_17",
            "soru": "Gini katsayısı ile ilgili olarak şağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Gini katsayısı 0’a yaklaştıkça gelir eşitsizliği azalır",
              "B": "Gini katsayısı 1’e yaklaştıkça gelir eşitsizliği artar",
              "C": "Gini katsayısı Lorenz eğrisi vasıtasıyla hesaplanır",
              "D": "Gini katsayısı 1’den büyük olabilir"
            },
            "dogruCevap": "D",
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
              "A": "Arızi işsizlik",
              "B": "Arz işsizliği",
              "C": "Yapısal işsizlik",
              "D": "Konjonktürel işsizlik"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_2",
            "soru": "Hiperenflasyonla ilgili aşağıdakilerden hangisi doğru değildir?",
            "secenekler": {
              "A": "Genellikle savaş ve doğal afet zamanlarındaki politikalardan kaynaklanır",
              "B": "Yerli parar yabancı paranın yerini alır",
              "C": "Yurtiçi yerleşiklerin alım gücü çok düşer",
              "D": "Gelir ve servet dağılımı olumsuz etkilenir"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_3",
            "soru": "Aşağıdakilerden hangisi enflasyonun maliyetlerinden değildir?",
            "secenekler": {
              "A": "Kösele maliyeti",
              "B": "Satın alma gücünde düşüş",
              "C": "Yerli paranın değer kazanması",
              "D": "Gelir eşitsizliği"
            },
            "dogruCevap": "C",
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
              "A": "Tüketici güven endeksinde düşüş",
              "B": "Hizmet sektörü güven endeksinde artış",
              "C": "İnşaat sektörü güven endeksinde düşüş",
              "D": "İşsizlikteki artış"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_6",
            "soru": "BEŞİNCİ BÖLÜM SORULARI 1. Aşağıdakilerden hangisi ödemeler bilançosunun kalemlerinden değildir?",
            "secenekler": {
              "A": "Cari İşlemler Hesabı",
              "B": "Net Hata Noksan",
              "C": "Döviz Kuru Hesabı",
              "D": "Sermaye Hesabı"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_7",
            "soru": "Aşağıdakilerden hangisi yerli ve yabancı paranın direkt olarak birbirinin cinsinden ifade edilmesini tanımlar?",
            "secenekler": {
              "A": "Nominal Kur",
              "B": "Düz Kur",
              "C": "Reel Kur",
              "D": "Dolaysız Kur"
            },
            "dogruCevap": "B",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_8",
            "soru": "Merkez Bankaları tarafından kur seviyesinin sürekli takip edilip müdahale edildiği karma kur sistemi aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Kayan Kur Sistemi",
              "B": "Döviz Kuru Bandı Sistemi",
              "C": "Ayarlanabilir Kur Sistemi",
              "D": "Ortak Dalgalanma Sistemi"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_9",
            "soru": "Esnek kur sistemi hakkında aşağıdaki bilgilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Ödemeler dengesinde devlet müdahalesine gerek kalmaz",
              "B": "Kur Merkez Bankası tarafından sabitlenir",
              "C": "Sürekli devlet müdahalesi gerekir",
              "D": "Ödemeler dengesi sorunları piyasa şartlarında çözülemez"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_10",
            "soru": "Belirlenen alt ve üst limitle döviz kurunun dalgalanmaya bırakıldığı kur rejimi aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Bant Kuru",
              "B": "Kayan Kur",
              "C": "Ortak Dalgalanma",
              "D": "Döviz Kuru Bandı"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_11",
            "soru": "Aşağıdakilerden hangisi dış ticaret politikası araçlarından biri değildir?",
            "secenekler": {
              "A": "Açık piyasa işlemleri",
              "B": "İhracatın özendirilmesi",
              "C": "Bağlı ticaret",
              "D": "Gümrük tarifeleri"
            },
            "dogruCevap": "A",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_12",
            "soru": "Sabit kur sisteminde uygulanan para ve maliye politikalarıyla ilgili aşağıdakilerden hangisi yanlıştır?",
            "secenekler": {
              "A": "Maliye politikası uygulaması milli gelir düzeyini yükseltir",
              "B": "Maliye politikaları etkindir",
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
              "A": "Para politikaları etkindir",
              "B": "Genişletici para politikası uygulanırsa yabancı para değer kazanır",
              "C": "Genişletici para politikası uygulanırsa dış talep artışı yaşanır",
              "D": "Genişletici maliye politikası uygulanırsa sermaye çıkışları yaşanır"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_14",
            "soru": "Dış borç stokunda en büyük pay aşağıdakilerden hangisine aittir?",
            "secenekler": {
              "A": "TCMB",
              "B": "Ticari Bankalar",
              "C": "Kamu Sektörü",
              "D": "Özel Sektör"
            },
            "dogruCevap": "D",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_15",
            "soru": "Aşağıdakilerden hangisi dış ticaret dengesi ile ilgili bir gösterge değildir?",
            "secenekler": {
              "A": "İhracat",
              "B": "İthalat",
              "C": "GSYH",
              "D": "İhracatın İthalatı Karşılama Oranı"
            },
            "dogruCevap": "C",
            "aciklama": "1008 Genel Ekonomi - Dış Ticaret ve Uluslararası Ekonomi konusundan alınmıştır."
          },
          {
            "id": "1008_t5_16",
            "soru": "Leontief paradoksu aşağıdakilerden hangisini kapsamaktadır?",
            "secenekler": {
              "A": "ABD’nin hem sermaye yoğun hem de emek yoğun mal ithal etmesi",
              "B": "ABD’nin hem sermaye yoğun hem de emek yoğun mal ihraç etmesi",
              "C": "ABD’nin emek yoğun mal ihraç edip sermaye yoğun mal ithal etmesi",
              "D": "ABD’nin sermaye yoğun mal ihraç edip emek yoğun mal ithal etmesi"
            },
            "dogruCevap": "C",
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
              "B": "Yönetmelik ve Genelge Esasları",
              "C": "Borsa İstanbul İşleyiş Kuralları",
              "D": "Takasbank ve MKK Saklama Düzenlemeleri",
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
              "B": "Yönetmelik ve Genelge Esasları",
              "C": "Borsa İstanbul İşleyiş Kuralları",
              "D": "Takasbank ve MKK Saklama Düzenlemeleri",
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
              "B": "Yönetmelik ve Genelge Esasları",
              "C": "Borsa İstanbul İşleyiş Kuralları",
              "D": "Takasbank ve MKK Saklama Düzenlemeleri",
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
              "B": "Yönetmelik ve Genelge Esasları",
              "C": "Borsa İstanbul İşleyiş Kuralları",
              "D": "Takasbank ve MKK Saklama Düzenlemeleri",
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
              "B": "Yönetmelik ve Genelge Esasları",
              "C": "Borsa İstanbul İşleyiş Kuralları",
              "D": "Takasbank ve MKK Saklama Düzenlemeleri",
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
              "B": "Yönetmelik ve Genelge Esasları",
              "C": "Borsa İstanbul İşleyiş Kuralları",
              "D": "Takasbank ve MKK Saklama Düzenlemeleri",
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
