const classesData = {
     classes: {
          Afsuncu: {
            name: "Afsuncu",
            description: "Takımın 10 Yetenek Gücü kazanır. Bir Afsuncu saldırdığında veya yetenek kullandığında tüm Afsuncular en fazla 40 kez birikecek şekilde yükü kazanır. Her ikinci saldırı 1 yük, her yetenek kullanımı ise 3 yük kazandırır.",
            levels: [
              { units: 2, bonus: "Her yük 1 kazandırır." },
              { units: 4, bonus: "Her yük 2 kazandırır ve takımın 30 kazanır." }
            ],
            champions: ["Ziggs", "Cassiopeia", "Syndra", "Karma"]
          },
          Avcı: {
            name: "Avcı",
            description: "Avcılar saldırı gücü kazanır. Bu ilave her çatışmada ilk kez bir rakibi alt ettiklerinde artar.",
            levels: [
              { units: 2, bonus: "%15 ve alt etmeden sonra %30" },
              { units: 4, bonus: "%45 ve alt etmeden sonra %70" },
              { units: 6, bonus: "%80 ve alt etmeden sonra %120" }
            ],
            champions: ["Nomsy", "Twitch", "Kog'Maw", "Jinx", "Olaf"]
          },
          Himayeci: {
            name: "Himayeci",
            description: "Takımın 3 saniyede bir azami canlarının belirli bir oranına eşdeğer miktarda can yeniler. Canları tamamen doluysa mana yenilerler. Himayeciler iki kat can veya mana yeniler.",
            levels: [
              { units: 2, bonus: "%2 veya %3" },
              { units: 3, bonus: "%4 veya %5" },
              { units: 4, bonus: "%6 veya %7" },
              { units: 5, bonus: "%9 veya %11" }
            ],
            champions: ["Zilean", "Bard", "Rakan", "Morgana"]
          },
          Müdafi: {
            name: "Müdafi",
            description: "Takımın 10 Zırh ve Büyü Direnci kazanır. Müdafiler daha fazla kazanır ve bu ilaveler çatışmanın ilk 10 saniyesi boyunca iki katına çıkar.",
            levels: [
              { units: 2, bonus: "Müdafiler 15 ile kazanır." },
              { units: 4, bonus: "Müdafiler 40 ile kazanır." },
              { units: 6, bonus: "Müdafiler 75 ile kazanır." },
              { units: 8, bonus: "Müdafiler 140 ile kazanır ve çatışmaya son 2 sırada başlayan 2 şampiyon 4 Müdafi katledilene kadar hasar görmez hale gelir." }
            ],
            champions: ["Lillia", "Poppy", "Nunu", "Hecarim", "Shen", "Taric", "Diana"]
          },
          Savaşçı: {
            name: "Savaşçı",
            description: "Savaşçılar mutlak sömürü ve hasar artışı kazanır. Canları %60 değerinin altına düştüğünde iki kat kazanırlar.",
            levels: [
              { units: 2, bonus: "%10 ve %10" },
              { units: 4, bonus: "%20 ve %20" },
              { units: 6, bonus: "%30 ve %30" }
            ],
            champions: ["Akali", "Nilah", "Katarina", "Fiora", "Gwen"]
          },
          Sihirbaz: {
            name: "Sihirbaz",
            description: "Sihirbazlar yeteneklerini iki defa kullanır ve özel bir yetenek gücü çarpanına sahip olur.",
            levels: [
              { units: 3, bonus: "%75" },
              { units: 5, bonus: "%90" },
              { units: 7, bonus: "%110" },
              { units: 9, bonus: "%150" }
            ],
            champions: ["Seraphine", "Soraka", "Galio", "Veigar", "Vex", "Nami", "Norra", "Yuumi"]
          },
          "Sıkı Dostlar": {
            name: "Sıkı Dostlar",
            description: "Norra takımına yardımcı olması için Yuumi'yi çağırır! Yuumi'yi birimlerinin üstüne sürükleyerek onlara bağlayabilirsin. Yuumi, Norra'yla aynı yetenek gücüne sahip olur ve Norra katledildiğinde o da katledilir.",
            champions: ["Norra", "Yuumi"]
          },
          "Yarasa Kraliçesi": {
            name: "Yarasa Kraliçesi",
            description: "Morgana'nın yarasaları bir rakibi katlettiklerinde %40 ihtimalle o rakibi kaçırarak 1 yıldızlı bir kopyasını kazandırır.",
            champions: ["Morgana"]
          },
          Yükselmiş: {
            name: "Yükselmiş",
            description: "Yükselmiş tılsımları dükkânda bulabilirsin. Bu tılsımları bulma ihtimalin oyunculara karşı çatışmalardan sonra %8 artar ve en fazla %40 olabilir. Bir Yükselmiş tılsım aldığında ihtimal sıfırlanır.",
            levels: [
              { units: 1, bonus: "Mevcut İhtimal: %30" }
            ],
            champions: ["Xerath"]
          },
          Âlim: {
            name: "Âlim",
            description: "Âlimler her saldırıda ilave mana kazanır.",
            levels: [
              { units: 2, bonus: "Saldırı başına 3" },
              { units: 4, bonus: "Saldırı başına 6" },
              { units: 6, bonus: "Saldırı başına 12" }
            ],
            champions: ["Zoe", "Ahri", "Bard", "Ryze", "Milio"]
          },
          Çevik: {
            name: "Çevik",
            description: "Çevik şampiyonlar saldırırken bir ihtimalle 2 ilave saldırı gerçekleştirir.",
            levels: [
              { units: 3, bonus: "%30 ihtimalle ilave saldırı gerçekleştirirler." },
              { units: 5, bonus: "%60 ihtimalle ilave saldırı gerçekleştirirler." },
              { units: 7, bonus: "%70 ihtimalle ilave saldırı gerçekleştirirler ve her saldırıda azami canlarının %3 kadarını yenilerler." },
              { units: 9, bonus: "%100 ihtimalle ilave saldırı gerçekleştirirler ve her saldırıda azami canlarının %10 kadarını yenilerler." }
            ],
            champions: ["Ashe", "Jax", "Akali", "Kassadin", "Hecarim", "Kalista", "Camille"]
          },
          Öncü: {
            name: "Öncü",
            description: "Öncüler kalkana sahipken %10 Dayanıklılık kazanır. Çatışma Başlangıcında ve %50 Canda: Öncüler 10 saniyeliğine azami canlarının belli bir oranına eşdeğer miktarda kalkan kazanır.",
            levels: [
              { units: 2, bonus: "%18 Azami Can" },
              { units: 4, bonus: "%30 Azami Can" },
              { units: 6, bonus: "%50 Azami Can ve kalkana sahipken %15" }
            ],
            champions: ["Blitzcrank", "Warwick", "Galio", "Rumble", "Mordekaiser", "Tahm Kench"]
          },
          İmhacı: {
            name: "İmhacı",
            description: "İmhacılar hasar artışı kazanır. Bu ilave yetenek kullanımından sonra 3 saniyeliğine artar.",
            levels: [
              { units: 2, bonus: "%12 ve güç patlaması sırasında %25" },
              { units: 4, bonus: "%25 ve güç patlaması sırasında %50" },
              { units: 6, bonus: "%45 ve güç patlaması sırasında %90" }
            ],
            champions: ["Rumble", "Tristana", "Ezreal", "Hwei", "Varus", "Smolder"]
          },
          "Şekil Değiştirici": {
            name: "Şekil Değiştirici",
            description: "Şekil Değiştiriciler azami can kazanır. Bu ilave Şekil Değiştiriciler yeteneklerini ilk kez kullandıktan sonra üç katına çıkar.",
            levels: [
              { units: 2, bonus: "%10" },
              { units: 4, bonus: "%16" },
              { units: 6, bonus: "%24" },
              { units: 8, bonus: "%35" }
            ],
            champions: ["Elise", "Jayce", "Shyvana", "Neeko", "Swain", "Nasus", "Briar"]
          }
     }
   };
   
   export default classesData;
   