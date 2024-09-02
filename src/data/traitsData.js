const traitsData = {
     traits: {
          Alaz: {
            name: "Alaz",
            description: "Takımın %3 Saldırı Hızı kazanır. Alaz şampiyonları fazladan kazanır. Ayrıca canı %10 değerinin altındaki rakipleri infaz ederler.",
            levels: [
              { units: 2, bonus: "Alaz şampiyonları %10 kazanır." },
              { units: 3, bonus: "Alaz şampiyonları %25 kazanır." },
              { units: 4, bonus: "Alaz şampiyonları %40 kazanır." },
              { units: 5, bonus: "Alaz şampiyonları %55 kazanır ve canı %15 değerinin altındaki rakipleri infaz eder." }
            ]
          },
          Arkana: {
            name: "Arkana",
            description: "Arkana Seçici'yi kullanarak bir Seçkin Arkana seçersin. Her Arkana farklı bir koşula bağlı olarak takımını güçlendirir.",
            levels: []
          },
          Ayaz: {
            name: "Ayaz",
            description: "Ayaz şampiyonları yetenek gücü ve saldırı gücü kazanır. Katledilen ilk birkaç rakip, dost buz askerlere dönüşür.",
            levels: [
              { units: 3, bonus: "Ayaz şampiyonları 16 ile kazanır ve 1 rakip buz askere dönüşür." },
              { units: 5, bonus: "Ayaz şampiyonları 35 ile kazanır ve 2 rakip buz askere dönüşür." },
              { units: 7, bonus: "Ayaz şampiyonları 50 ile kazanır, 3 rakip buz askere dönüşür ve buz askerler katledilince patlar." },
              { units: 9, bonus: "Ayaz şampiyonları 80 ile kazanır, 4 rakip buz askere dönüşür ve patlamaların gücü iki katına çıkar." }
            ]
          },
          Açgözlü: {
            name: "Açgözlü",
            description: "Briar strateji ustanın her eksik canı için %1 Hasar Artışı kazanır.",
            levels: []
          },
          Cadı: {
            name: "Cadı",
            description: "Cadılar yetenekleriyle rakipleri 4 saniyeliğine lanetler. Lanetli bir rakip katledildiğinde laneti en yakındaki rakibe geçer.",
            levels: [
              { units: 2, bonus: "Küçülür ve 150 kaybeder." },
              { units: 4, bonus: "AYRICA yeşile döner ve en düşük cana sahip Cadı'yı aldıkları hasarın %18 kadarına eşdeğer miktarda iyileştirir." },
              { units: 6, bonus: "AYRICA dayanıksız hale gelir ve Cadılardan %25 İlave Gerçek Hasar alır." },
              { units: 8, bonus: "AYRICA kurbağaya dönüşür ve her 8 saniyede bir 2 saniyeliğine sersemler. Ek olarak diğer lanet etkileri %40 güçlenir." }
            ]
          },
          "Doğa Sakini": {
            name: "Doğa Sakini",
            description: "Wukong'un hiçbir özellik ilavesi yok ancak güçlü bir yeteneği ve arttırılmış nitelikleri var.",
            levels: []
          },
          Ejder: {
            name: "Ejder",
            description: "Ejderlerin saldırıları ve yetenekleri rakipleri 5 saniyeliğine %1 yakar ve yaralar.",
            levels: [
              { units: 2, bonus: "Ejderlerin saldırıları ve yetenekleri rakipleri 5 saniyeliğine %1 yakar ve yaralar." },
              { units: 3, bonus: "Arkadaşlığın gücü tüm Ejderlerin yeteneklerini güçlendirir!" }
            ]
          },
          Geçit: {
            name: "Geçit",
            description: "Çatışma Başlangıcında: Geçit şampiyonları 15 saniyeliğine kalkan kazanır.",
            levels: [
              { units: 3, bonus: "Geçit şampiyonları 200 Kalkan kazanır ve küçük bir geçit açılır." },
              { units: 6, bonus: "Geçit şampiyonları 450 Kalkan kazanır ve orta boy bir geçit açılır." },
              { units: 8, bonus: "Geçit şampiyonları 700 Kalkan kazanır ve büyük bir geçit açılır." },
              { units: 10, bonus: "Geçit şampiyonları 1500 Kalkan kazanır ve DEVASA bir geçit açılır." }
            ]
          },
          Kovan: {
            name: "Kovan",
            description: "Kovan birimleri hedeflerine 3 saniyede bir büyü hasarı veren arılar kazanır.",
            levels: [
              { units: 3, bonus: "3 arı kazanırlar." },
              { units: 5, bonus: "6 arı kazanırlar." },
              { units: 7, bonus: "9 arı kazanırlar ve geride 3 arı bırakırlar." }
            ]
          },
          Pastacı: {
            name: "Pastacı",
            description: "Pastacılar şeker kullanarak çok katlı bir pasta yapar.",
            levels: [
              { units: 2, bonus: "2 şeker kazanırsın ve Pastacılar 20 ile kazanır." },
              { units: 4, bonus: "4 şeker kazanırsın ve Pastacılar 30 ile kazanır." },
              { units: 6, bonus: "6 şeker kazanırsın, Pastacılar 40 ile kazanır ve takımın 150 kazanır." }
            ]
          },
          Peri: {
            name: "Peri",
            description: "Periler can kazanır ve eşiklerle birlikte güçlenen özel eşyalar oluşturur.",
            levels: [
              { units: 2, bonus: "Periler 100 kazanır. %25 Hasar Artışı sağlayan Peri Kraliçesi'nin Tacı'nı elde edersin." },
              { units: 4, bonus: "Periler 400 kazanır ve taç %40 sağlar." },
              { units: 6, bonus: "Periler 600 kazanır ve taç %50 sağlar. Ayrıca Muhafızın Zırhı'nı elde edersin." },
              { units: 9, bonus: "Periler 850 kazanır ve taç %75 sağlar. Ayrıca iki eşya da ışıltılı hale gelir." }
            ]
          },
          Tekinsiz: {
            name: "Tekinsiz",
            description: "Takımın %20 Can kaybettiğinde bir Kadim İlah uyanır.",
            levels: [
              { units: 3, bonus: "Yozlaşmış Golem" },
              { units: 5, bonus: "Kara Yektaş" },
              { units: 7, bonus: "Çok Gözlü Canavar" },
              { units: 10, bonus: "Fırtınaçağıran" }
            ]
          },
          "Zaman Bükücü": {
            name: "Zaman Bükücü",
            description: "Zaman Bükücüler 15 Yetenek Gücü kazanır.",
            levels: [
              { units: 2, bonus: "Takımın %20 Can yeniler ve Zaman Bükücüler fazladan 20 kazanır." },
              { units: 4, bonus: "AYRICA 3 saniyeliğine zaman durur ancak Zaman Bükücüler savaşmaya devam eder ve 45 kazanır." },
              { units: 6, bonus: "AYRICA Zaman Bükücüler %80 kazanır ve takımın %100 Can yeniler." }
            ]
          }
        }
   };
   
   export default traitsData;
   