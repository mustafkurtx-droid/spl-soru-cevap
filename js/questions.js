/**
 * ============================================================================
 * SPL (Sermaye Piyasası Lisanslama) SORU VERİTABANI (questions.js)
 * ============================================================================
 * 
 * REHBER: PDF'LERDEN VEYA YENİ KAYNAKLARDAN SORU EKLERKEN DİKKAT EDİLECEKLER:
 * 
 * 1. Bu dosya tamamen standart JavaScript / JSON veri dizisi (Array) mantığında çalışır.
 * 2. Yeni bir ders eklemek için `splVeritabani` dizisinin içine yeni bir obje {} ekleyin.
 * 3. Var olan bir derse yeni test eklemek için o dersin `testler` dizisine yeni test objesi ekleyin.
 * 4. Şıklar A, B, C, D, E olarak tanımlanmalıdır.
 * 5. `dogruCevap` alanı sadece büyük harf string ("A", "B", "C", "D", "E") olmalıdır.
 * 6. `cozum` alanı opsiyoneldir, soru çözüm açıklamasını içerir.
 * 
 * PDF'TEN KOD DÖNÜŞTÜRMENİN İPUCU:
 * Python veya ChatGPT / Claude gibi araçlarla PDF metinlerinizi şu JSON formatına dönüştürebilirsiniz:
 * 
 * [
 *   {
 *     "dersAdi": "Ders Adı Buraya",
 *     "kategori": "Kategori / Lisans Türü",
 *     "aciklama": "Ders hakkında kısa açıklama",
 *     "testler": [
 *       {
 *         "testId": 1,
 *         "testAdi": "Test 1: Konu Başlığı",
 *         "sorular": [
 *           {
 *             "id": 1,
 *             "soruMetni": "Soru metni...",
 *             "secenekler": { "A": "...", "B": "...", "C": "...", "D": "...", "E": "..." },
 *             "dogruCevap": "A",
 *             "cozum": "Çözüm açıklaması..."
 *           }
 *         ]
 *       }
 *     ]
 *   }
 * ]
 * ============================================================================
 */

const splVeritabani = [
  {
    "dersAdi": "Sermaye Piyasası Mevzuatı",
    "kategori": "Lisanslama Düzey 1 - 2 - 3",
    "aciklama": "6362 sayılı Sermaye Piyasası Kanunu, Kurul düzenlemeleri ve ilgili mevzuat.",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: Kurumlar ve Genel Esaslar",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "Aşağıdakilerden hangisi 6362 sayılı Sermaye Piyasası Kanunu'na göre sermaye piyasası kurumlarından biri değildir?",
            "secenekler": {
              "A": "Aracı Kurumlar",
              "B": "Portföy Yönetim Şirketleri",
              "C": "Kuyumcular ve Döviz Büroları",
              "D": "Yatırım Ortaklıkları",
              "E": "Borsa İstanbul"
            },
            "dogruCevap": "C",
            "cozum": "Kuyumcular ve döviz büroları Hazine ve Maliye Bakanlığı düzenlemelerine tabi olup 6362 sayılı Sermaye Piyasası Kanunu kapsamında sermaye piyasası kurumu sayılmazlar."
          },
          {
            "id": 2,
            "soruMetni": "Sermaye Piyasası Kurulu (SPK) hangi makam veya bakanlık ile ilişkilidir?",
            "secenekler": {
              "A": "Ticaret Bakanlığı",
              "B": "Hazine ve Maliye Bakanlığı",
              "C": "Cumhurbaşkanlığı",
              "D": "Adalet Bakanlığı",
              "E": "Türkiye Cumhuriyet Merkez Bankası"
            },
            "dogruCevap": "B",
            "cozum": "Sermaye Piyasası Kurulu (SPK), Hazine ve Maliye Bakanlığı ile ilişkili özerk bir idari kurumdur."
          },
          {
            "id": 3,
            "soruMetni": "Halka açık anonim ortaklıklarda örtülü kazanç aktarımı yasağına aykırılık durumunda SPK aşağıdakilerden hangisini yapmaya yetkilidir?",
            "secenekler": {
              "A": "Şirketin tüm faaliyetlerini süresiz durdurmak",
              "B": "Şirket yönetim kurulu üyelerinin tamamını hemen görevden almak",
              "C": "Örtülü kazanç aktarımının iadesi için dava açmak veya tedbir istemek",
              "D": "Şirketi kamulaştırmak",
              "E": "Şirketin hisse senetlerini imha etmek"
            },
            "dogruCevap": "C",
            "cozum": "SPK, tespit edilen örtülü kazanç aktarımının iadesi için hukuki yollara başvurabilir ve ihtiyati tedbir kararı alınmasını talep edebilir."
          },
          {
            "id": 4,
            "soruMetni": "Sermaye Piyasası Kanununa göre 'İçeriden Öğrenenlerin Ticareti' (Insider Trading) suçu işleyen bir kişiye uygulanacak yaptırım türü nedir?",
            "secenekler": {
              "A": "Sadece disiplin cezası",
              "B": "Hapis cezası ve adli para cezası",
              "C": "Sadece uyarı cezası",
              "D": "Vergi cezası",
              "E": "Sadece meslekten ihraç"
            },
            "dogruCevap": "B",
            "cozum": "6362 sayılı Kanun uyarınca piyasa dolandırıcılığı ve içeriden öğrenenlerin ticareti bilgi suçu olup hapis ve adli para cezası yaptırımına tabidir."
          },
          {
            "id": 5,
            "soruMetni": "İhraçcıların ihraç ettikleri sermaye piyasası araçlarının halka arzında hazırlamakla yükümlü oldukları kamuyu aydınlatma belgesi aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "İzahname",
              "B": "Faaliyet Raporu",
              "C": "Stratejik Plan",
              "D": "Gelir Tablosu",
              "E": "Ana Sözleşme"
            },
            "dogruCevap": "A",
            "cozum": "Sermaye piyasası araçlarının halka arzında yatırımcıların bilgilendirilmesi amacıyla 'İzahname' hazırlanması ve SPK tarafından onaylanması zorunludur."
          },
          {
            "id": 6,
            "soruMetni": "Aşağıdakilerden hangisi MKK (Merkezi Kayıt Kuruluşu) temel işlevidir?",
            "secenekler": {
              "A": "Hisse senedi alım satım emirlerini eşleştirmek",
              "B": "Sermaye piyasası araçlarının kaydileştirilmesi ve takibini yapmak",
              "C": "Şirketlere kredi sağlamak",
              "D": "Döviz kurlarını belirlemek",
              "E": "Faiz oranlarını açıklamak"
            },
            "dogruCevap": "B",
            "cozum": "Merkezi Kayıt Kuruluşu (MKK), sermaye piyasası araçlarının hak sahipleri bazında kayden izlendiği merkezi saklama kuruluşudur."
          },
          {
            "id": 7,
            "soruMetni": "Halka açık anonim şirketlerde genel kurul toplantı nisabı ve kararları ile ilgili hükümler esas olarak hangi kanunda düzenlenmiştir?",
            "secenekler": {
              "A": "İcra ve İflas Kanunu",
              "B": "Türk Ticaret Kanunu (TTK) ve Sermaye Piyasası Kanunu",
              "C": "Borçlar Kanunu",
              "D": "Vergi Usul Kanunu",
              "E": "İş Kanunu"
            },
            "dogruCevap": "B",
            "cozum": "Anonim şirket genel kurulları temel olarak Türk Ticaret Kanunu'na tabidir; halka açık olanlarda SPK'nın özel hükümleri de uygulanır."
          },
          {
            "id": 8,
            "soruMetni": "Kaydileştirilen sermaye piyasası araçlarına ilişkin haklar ne zaman doğar?",
            "secenekler": {
              "A": "Fiziki senet basıldığı an",
              "B": "MKK nezdinde hak sahibi adına kaydın yapıldığı an",
              "C": "Şirket yönetim kurulu karar aldığı an",
              "D": "Gazetede ilan edildiği an",
              "E": "Banka hesabına para yatırıldığı an"
            },
            "dogruCevap": "B",
            "cozum": "Kaydileştirilmiş sermaye piyasası araçlarına ilişkin haklar MKK nezdindeki elektronik kayıtlar ile kurulur ve takip edilir."
          },
          {
            "id": 9,
            "soruMetni": "Borsa İstanbul'da işlemlerin takasını ve takas garantörlüğünü yürüten kurum aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Takasbank (İstanbul Takas ve Saklama Bankası A.Ş.)",
              "B": "TCMB",
              "C": "SPK",
              "D": "VakıfBank",
              "E": "SPL"
            },
            "dogruCevap": "A",
            "cozum": "Takasbank, Borsa İstanbul bünyesinde gerçekleşen işlemlerin takasını yürüten ve merkezi karşı taraf hizmeti veren kurumdur."
          },
          {
            "id": 10,
            "soruMetni": "Aşağıdakilerden hangisi Kamuyu Aydınlatma Platformu (KAP) sisteminin işletiminden ve yönetiminden sorumludur?",
            "secenekler": {
              "A": "Sermaye Piyasası Kurulu",
              "B": "Merkezi Kayıt Kuruluşu (MKK)",
              "C": "Borsa İstanbul A.Ş.",
              "D": "Türkiye Sermaye Piyasaları Birliği",
              "E": "TCMB"
            },
            "dogruCevap": "B",
            "cozum": "KAP işletimi ve teknik altyapısı MKK tarafından yürütülmektedir."
          }
        ]
      },
      {
        "testId": 2,
        "testAdi": "Test 2: Yatırım Kuruluşları ve Faaliyetleri",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "Yatırım kuruluşları ifadesi aşağıdakilerden hangilerini kapsar?",
            "secenekler": {
              "A": "Sadece aracı kurumlar",
              "B": "Sadece yatırım bankaları",
              "C": "Aracı kurumlar ile yatırım hizmeti veren bankalar",
              "D": "Sadece sigorta şirketleri",
              "E": "Faktoring ve leasing şirketleri"
            },
            "dogruCevap": "C",
            "cozum": "6362 sayılı Kanuna göre yatırım kuruluşları; aracı kurumlar ile yetkilendirilmiş bankaları ifade eder."
          },
          {
            "id": 2,
            "soruMetni": "Müşteri emirlerinin aynen veya değiştirilerek kendi namına ve müşteri hesabına yürütülmesi hangi yatırım hizmetidir?",
            "secenekler": {
              "A": "Portföy yöneticiliği",
              "B": "Emir iletimine aracılık etme",
              "C": "İşlem aracılığı",
              "D": "Yatırım danışmanlığı",
              "E": "Saklama hizmeti"
            },
            "dogruCevap": "C",
            "cozum": "Müşteri adına ve hesabına veya kendi namına müşteri hesabına emirlerin icra edilmesi işlem aracılığı faaliyetidir."
          }
        ]
      }
    ]
  },
  {
    "dersAdi": "Finansal Yönetim ve Analiz",
    "kategori": "Lisanslama Düzey 2 - 3",
    "aciklama": "Finansal tablolar analizi, rasyolar, sermaye maliyeti ve yatırım kararları.",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: Finansal Tablolar ve Oran Analizi",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "Cari Oran formülü aşağıdakilerden hangisidir?",
            "secenekler": {
              "A": "Dönen Varlıklar / Kısa Vadeli Yabancı Kaynaklar",
              "B": "Duran Varlıklar / Özkaynaklar",
              "C": "Stoklar / Dönem Net Kârı",
              "D": "Net Satışlar / Toplam Varlıklar",
              "E": "Özkaynaklar / Toplam Borçlar"
            },
            "dogruCevap": "A",
            "cozum": "Cari Oran = Dönen Varlıklar / Kısa Vadeli Yabancı Kaynaklar. İşletmenin kısa vadeli borç ödeme gücünü gösterir."
          },
          {
            "id": 2,
            "soruMetni": "Likidite oranlarından biri olan Asit-Test (Likit) Oranı hesaplanırken Dönen Varlıklardan hangi kalem çıkarılır?",
            "secenekler": {
              "A": "Kasa ve Banka",
              "B": "Stoklar",
              "C": "Ticari Alacaklar",
              "D": "Menkul Kıymetler",
              "E": "Gelecek Aylara Ait Giderler"
            },
            "dogruCevap": "B",
            "cozum": "Asit-Test Oranı = (Dönen Varlıklar - Stoklar) / Kısa Vadeli Yabancı Kaynaklar. Stoklar paraya en yavaş dönüşen dönen varlık kalemi olduğu için çıkarılır."
          },
          {
            "id": 3,
            "soruMetni": "Bir işletmenin Nakit Oranı aşağıdakilerden hangisini ölçer?",
            "secenekler": {
              "A": "İşletmenin tüm borçlarını ödeme gücünü",
              "B": "İşletmenin hiç satış yapamadan kısa vadeli borçlarını ödeme kapasitesini",
              "C": "Stok devir hızını",
              "D": "Alacak tahsilat süresini",
              "E": "Özkaynak kârlılığını"
            },
            "dogruCevap": "B",
            "cozum": "Nakit Oranı = (Hazır Değerler + Menkul Kıymetler) / KVYK. Alacaklar ve stoklar tahsil edilemese dahi hazır değerlerle borç ödeme kapasitesini gösterir."
          },
          {
            "id": 4,
            "soruMetni": "Dupont Analizine göre Özkaynak Kârlılığı (ROE) hangi üç temel bileşenin çarpımından oluşur?",
            "secenekler": {
              "A": "Net Kâr Marjı x Aktif Devir Hızı x Finansal Kaldıraç Oranı",
              "B": "Brüt Kâr Marjı x Cari Oran x Borç Oranı",
              "C": "Faiz Teminat Oranı x Stok Devir Hızı x Likidite Oranı",
              "D": "Faaliyet Kâr Marjı x Özkaynak Oranı x Asit-Test Oranı",
              "E": "Net Kâr x Toplam Aktif x Toplam Borç"
            },
            "dogruCevap": "A",
            "cozum": "Dupont modeli: ROE = (Net Kâr / Satışlar) x (Satışlar / Aktifler) x (Aktifler / Özkaynaklar)."
          },
          {
            "id": 5,
            "soruMetni": "Net Bugünkü Değer (NBD) yönteminde iskonto oranı olarak aşağıdakilerden hangisi kullanılır?",
            "secenekler": {
              "A": "Enflasyon oranı + 10%",
              "B": "Sermaye Maliyeti (Ağırlıklı Ortalama Sermaye Maliyeti - WACC)",
              "C": "Mevduat faiz oranı",
              "D": "Vergi oranı",
              "E": "Şirketin kâr marjı"
            },
            "dogruCevap": "B",
            "cozum": "NBD hesabında nakit akışları projenin riskini yansıtan sermaye maliyeti (WACC) ile bugüne indirgenir."
          }
        ]
      }
    ]
  },
  {
    "dersAdi": "Gayrimenkul Değerleme Esasları",
    "kategori": "Gayrimenkul Değerleme Lisansı",
    "aciklama": "Gayrimenkul değerleme yöntemleri, tapu ve kadastro mevzuatı, imar hukuku.",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: Değerleme Yaklaşımları",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "Gayrimenkul değerlemesinde 'Emsal Karşılaştırma Yaklaşımı' en çok hangi durum türünde güvenilir sonuç verir?",
            "secenekler": {
              "A": "Piyasada benzer nitelikte yeterli sayıda alım-satım verisi bulunduğunda",
              "B": "Hiç emsal bulunmayan özel nitelikli yapılarda",
              "C": "Baraj ve köprü değerlemesinde",
              "D": "Tarihi eser niteliğindeki binalarda",
              "E": "Tamamlanmamış altyapı projelerinde"
            },
            "dogruCevap": "A",
            "cozum": "Emsal karşılaştırma yöntemi, aktif ve şeffaf bir gayrimenkul piyasasında yeterli sayıda benzer satış emsali olduğunda en güvenilir yöntemdir."
          },
          {
            "id": 2,
            "soruMetni": "Gelir İndirgeme Yaklaşımında kullanılan Kapitalizasyon Oranı aşağıdakilerden hangisini ifade eder?",
            "secenekler": {
              "A": "Gayrimenkulün yıllık net gelirinin gayrimenkul değerine oranı",
              "B": "Toplam inşaat maliyetinin bina alanına oranı",
              "C": "Kredi faiz oranının iki katı",
              "D": "Yıllık enflasyon oranı",
              "E": "Emlak vergisi oranı"
            },
            "dogruCevap": "A",
            "cozum": "Kapitalizasyon Oranı = Yıllık Net Faaliyet Geliri / Gayrimenkul Değeri."
          }
        ]
      }
    ]
  },
  {
    "dersAdi": "Türev Araçlar, Piyasalar ve Risk Yönetimi",
    "kategori": "Türev Araçlar Lisansı",
    "aciklama": "Vadeli işlem sözleşmeleri (Futures), Opsiyonlar, Swaplar ve risk korunma stratejileri.",
    "testler": [
      {
        "testId": 1,
        "testAdi": "Test 1: Futures ve Opsiyon Temelleri",
        "sorular": [
          {
            "id": 1,
            "soruMetni": "Vadeli işlem (Futures) sözleşmesinde uzun (long) pozisyon alan bir yatırımcının beklentisi nedir?",
            "secenekler": {
              "A": "Dayanak varlık fiyatının yükselmesi",
              "B": "Dayanak varlık fiyatının düşmesi",
              "C": "Faiz oranlarının sabit kalması",
              "D": "Piyasa volatilitesinin sıfırlanması",
              "E": "Şirketin temettü ödememesi"
            },
            "dogruCevap": "A",
            "cozum": "Futures sözleşmesinde alım tarafı (long pozisyon), dayanak varlığın gelecekteki fiyatının artacağı beklentisiyle pozisyon açar."
          },
          {
            "id": 2,
            "soruMetni": "Bir alım (Call) opsiyonunu satın alan taraf (opsiyon alıcısı) için aşağıdakilerden hangisi doğrudur?",
            "secenekler": {
              "A": "Zararı sınırsızdır, kârı prim ile sınırlıdır",
              "B": "Kârı sınırsız olabilir, maksimum zararı ödediği prim kadardır",
              "C": "Hiç prim ödemez",
              "D": "Mutlaka opsiyonu kullanmak zorundadır",
              "E": "Sadece vade sonunda prim tahsil eder"
            },
            "dogruCevap": "B",
            "cozum": "Opsiyon alıcısı prim ödeyerek hak satın alır. Dolayısıyla riski ödediği opsiyon primi ile sınırlıyken, alım opsiyonunda kâr potansiyeli sınırsızdır."
          }
        ]
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.splVeritabani = splVeritabani;
}
