const championsData = {
     champions: [
          {
            name: "Ashe",
            cost: 1,
            traits: ["Tekinsiz"],
            classes: ["Çevik"],
            ability: {
              name: "Kara Haber",
              description: "Sonraki 5 () saniye boyunca yakınındaki bir hedefe [25/38/56] () Fiziksel Hasar veren fazladan bir atış gönderir. Bu etki birikir."
            }
          },
          {
            name: "Blitzcrank",
            cost: 1,
            traits: ["Kovan"],
            classes: ["Öncü"],
            ability: {
              name: "Bal Bariyeri",
              description: "6 saniyeliğine [298/401/566] () Kalkan kazanır."
            }
          },
          {
            name: "Elise",
            cost: 1,
            traits: ["Tekinsiz"],
            classes: ["Şekil Değiştirici"],
            ability: {
              name: "Örümcek Hali",
              description: "Örümceğe dönüşerek bu yeteneğin yerine Taşlaştıran Zehir yeteneğini kazanır ve hemen kullanır. Taşlaştıran Zehir: Hedefini 1.5 saniyeliğine sersemletir ve ona [132/194/289] () Büyü Hasarı verir. Ayrıca [160/190/230] () Can yeniler."
            }
          },
          {
            name: "Jax",
            cost: 1,
            traits: ["Zaman Bükücü"],
            classes: ["Çevik"],
            ability: {
              name: "Silah Ustası",
              description: "Bitişiğindeki rakiplere [80/120/180] () Büyü Hasarı verir ve 6 saniyeliğine [60/75/95] () Zırh ve Büyü Direnci kazanır. Bu süre boyunca saldırılarıyla [36/54/81] () İlave Büyü Hasarı verir."
            }
          },
          {
            name: "Jayce",
            cost: 1,
            traits: ["Geçit"],
            classes: ["Şekil Değiştirici"],
            ability: {
              name: "Çekiç Hali",
              description: "Çekiç haline geçerek 35 () Zırh ve Büyü Direnci kazanır. Ardından bu yeteneğin yerine Çekiç Darbesi yeteneğini kazanır ve hemen kullanır. Çekiç Darbesi: Hedefine doğru atlayarak ona [274/411/678] () Fiziksel Hasar verir."
            }
          },
          {
            name: "Lillia",
            cost: 1,
            traits: ["Peri"],
            classes: ["Müdafi"],
            ability: {
              name: "Rüya Çiçeği",
              description: "[220/260/320] () Can yeniler. Ardından bitişiğindeki rakiplere [170/255/385] () Büyü Hasarı verir."
            }
          },
          {
            name: "Nomsy",
            cost: 1,
            traits: ["Ejder"],
            classes: ["Avcı"],
            ability: {
              name: "Kıvılcımlı Hapşırık",
              description: "Hedefine doğru hapşırıp ateş saçarak [240/360/550] () Fiziksel Hasar verir. Ejder Güçlendirmesi: Hapşırdığında daha geniş bir alana ejder ateşi saçar. Ejder ateşi [290/435/663] () Fiziksel Hasar verir."
            }
          },
          {
            name: "Poppy",
            cost: 1,
            traits: ["Cadı"],
            classes: ["Müdafi"],
            ability: {
              name: "Temizlik Görevi",
              description: "3 saniyeliğine [275/300/325] () Kalkan kazanır. Ardından hedefine sertçe vurarak [238/356/534] () Fiziksel Hasar verir."
            }
          },
          {
            name: "Seraphine",
            cost: 1,
            traits: ["Peri"],
            classes: ["Sihirbaz"],
            ability: {
              name: "Tiz Nota",
              description: "En uzun rakip hattını hedef alarak [220/330/495] () Büyü Hasarı veren bir ses dalgası gönderir. Dalganın hasarı isabet ettiği her rakip için %35 azalır."
            }
          },
          {
            name: "Soraka",
            cost: 1,
            traits: ["Pastacı"],
            classes: ["Sihirbaz"],
            ability: {
              name: "Yıldız Yağmuru",
              description: "Hedefinin üstüne gökten bir yıldız indirir. Yıldız hedefe ve hedefin bitişiğindeki rakiplere [200/300/450] () Büyü Hasarı verir. Ardından yakındaki bir dost birimi [120/140/180] () Can iyileştirir."
            }
          },
          {
            name: "Twitch",
            cost: 1,
            traits: ["Ayaz"],
            classes: ["Avcı"],
            ability: {
              name: "Buz Kristali",
              description: "Hedefine rakipleri deşip geçerek ilerleyen bir buz kristali fırlatır. Kristal [110/155/234] () Fiziksel Hasar verir ancak hasarı isabet alan her rakip için %10 azalır. Ayrıca hedefleri 5 saniyeliğine aşındırır. Aşındırma: Aşındırılan birimlerin zırhı azalır."
            }
          },
          {
            name: "Warwick",
            cost: 1,
            traits: ["Ayaz"],
            classes: ["Öncü"],
            ability: {
              name: "Açgözlü Avcı",
              description: "Pasif: Katlettiği her şampiyon için kalıcı olarak %1 Saldırı Hızı ve Hareket Hızı kazanır. Saldırılarıyla [15/20/30] () Can yeniler ve [25/37/66] () İlave Fiziksel Hasar verir. Canı %25 değerinin altındaki rakiplere saldırırken iki kat can yeniler ve ilave fiziksel hasar verir."
            }
          },
          {
            name: "Ziggs",
            cost: 1,
            traits: ["Kovan"],
            classes: ["Afsuncu"],
            ability: {
              name: "Sıçrayan Arı",
              description: "En uzaktaki rakibe doğru bir bomba atar. Bomba bir rakibe isabet ettiğinde patlayarak hedefe [200/300/450] (), yakındaki tüm rakiplere ise [100/150/225] () Büyü Hasarı verir."
            }
          },
          {
            name: "Zoe",
            cost: 1,
            traits: ["Geçit", "Cadı"],
            classes: ["Âlim"],
            ability: {
              name: "Hınzır Şişe",
              description: "Hedefine [125/190/285] () Büyü Hasarı verir ve onun büyü direncini çatışmanın geri kalanı boyunca [10/15/20] azaltır."
            }
          },
          // 2 Maliyetli Şampiyonlar
          {
            name: "Ahri",
            cost: 2,
            traits: ["Arkana"],
            classes: ["Âlim"],
            ability: {
              name: "Algı Küresi",
              description: "Pasif: Tüm kaynaklardan %15 İlave Yetenek Gücü kazanır. Aktif: Hedefine doğru [135/200/310] () Büyü Hasarı veren bir küre fırlatır. Küre bir rakibe isabet ettikten sonra geri dönerek [85/125/195] () Gerçek Hasar verir."
            }
          },
          {
            name: "Akali",
            cost: 2,
            traits: ["Alaz"],
            classes: ["Savaşçı", "Çevik"],
            ability: {
              name: "Ateş Noktası Saldırısı",
              description: "3 hücrelik bir alan içindeki en uzak rakibe doğru atılarak ona [138/206/328] () Fiziksel Hasar verir. Sonraki 3 saldırısında hedefine kunai fırlatarak ona [104/156/256] () Fiziksel Hasar verir."
            }
          },
          {
            name: "Cassiopeia",
            cost: 2,
            traits: ["Cadı"],
            classes: ["Afsuncu"],
            ability: {
              name: "Cadı Dişi",
              description: "Saldırılarıyla sonraki 6 saniye boyunca [95/145/230] () Büyü Hasarı verir."
            }
          },
          {
            name: "Galio",
            cost: 2,
            traits: ["Geçit"],
            classes: ["Öncü", "Sihirbaz"],
            ability: {
              name: "Birleşim",
              description: "4 saniye boyunca [20/25/30] () daha az hasar alır. 3 hücrelik bir alan içindeki en uzak rakibin üstünde birleşerek onu [1.25/1.25/1.5] saniyeliğine sersemleten iki büyülü atış gönderir. Her atış deşip geçtiği rakiplere [50/75/115] () Büyü Hasarı verir. Yeteneği Sihirbaz özelliğiyle tekrar kullandığında farklı bir rakibi hedef alır."
            }
          },
          {
            name: "Kassadin",
            cost: 2,
            traits: ["Geçit"],
            classes: ["Çevik"],
            ability: {
              name: "Cehennem Kılıcı",
              description: "Hedefine [110/165/255] () Büyü Hasarı verir ve 3 saniyeliğine [260/285/310] () Kalkan kazanır. Ayrıca çatışmanın geri kalanı boyunca saldırılarıyla birikecek şekilde [30/45/70] () İlave Büyü Hasarı verir."
            }
          },
          {
            name: "Kog'Maw",
            cost: 2,
            traits: ["Kovan"],
            classes: ["Avcı"],
            ability: {
              name: "Kovandan Sızan",
              description: "Mevcut hedefini deşip geçen ve isabet ettiği rakiplere [154/231/359] () Fiziksel Hasar veren bir bal topu fırlatır. Bitişiğindeki takım arkadaşlarıyla bal topundan isabet alan takım arkadaşları 4 saniyeliğine [20/25/30]% () Saldırı Hızı kazanır."
            }
          },
          {
            name: "Nilah",
            cost: 2,
            traits: ["Tekinsiz"],
            classes: ["Savaşçı"],
            ability: {
              name: "Şekilsiz Kılıç",
              description: "Pasif: Kalkanlardan 3 saniyeliğine %60 Saldırı Hızı kazanır. Aktif: 2 hücrelik bir alan içinde atılır. Ardından hedefine saldırarak düz bir hat üstündeki rakiplere [180/270/428] () Fiziksel Hasar verir. Ayrıca 3 saniyeliğine [100/140/180] () Kalkan kazanır."
            }
          },
          {
            name: "Nunu",
            cost: 2,
            traits: ["Kovan"],
            classes: ["Müdafi"],
            ability: {
              name: "Yapışkan Isırık",
              description: "Hedefini ısırarak [250/300/350] () Can yeniler ve hedefine [200/300/450] () Büyü Hasarı verir. Ayrıca hedefinin 3 saniyeliğine buz tutmasına yol açar. Buz Tutma: Buz tutan birimlerin saldırı hızı %20 azalır."
            }
          },
          {
            name: "Rumble",
            cost: 2,
            traits: ["Pastacı"],
            classes: ["Öncü", "İmhacı"],
            ability: {
              name: "Sıcak Çay",
              description: "3 saniyeliğine [30/30/35]% () Dayanıklılık kazanır. Koni şeklindeki bir alana ateş püskürterek bu süre içinde [220/330/515] () Büyü Hasarı verir. Ayrıca rakipleri 5 saniyeliğine yaralar. Yara: Yaralanan birimlerin aldığı iyileştirme etkileri %33 azalır."
            }
          },
          {name: "Shyvana",
            cost: 2,
            traits: ["Ejder"],
            classes: ["Şekil Değiştirici"],
            ability: {
              name: "Ejderin Öfkesi",
              description: "Ejdere dönüşerek bitişiğindeki rakiplere her saniye [58/84/136] () Büyü Hasarı veren bir hare kazanır. Ardından 2 hücrelik bir alan içindeki en büyük rakip grubuna doğru uçarak onları [1/1/1.25] saniyeliğine sersemletir. Ejder Güçlendirmesi: Ejder halindeyken yanan bir rakip saldırı ve yeteneklerden hasar aldığında azami canının %1 kadarını yeniler."
            }
          },
          {
            name: "Syndra",
            cost: 2,
            traits: ["Tekinsiz"],
            classes: ["Afsuncu"],
            ability: {
              name: "Sınırların Ötesinde",
              description: "Hedefinin üstünde ona [215/325/500] () Büyü Hasarı veren ve onu 6 saniyeliğine %20 örseleyen bir yarık ortaya çıkarır. Bu yetenek kullanıldıkça gelişir. (Toplam Kullanım: 3) 15 Kullanım: Hedefinin bitişiğindeki rakipleri de örseler ve onlara [105/155/240] () Büyü Hasarı verir. 30+ Kullanım: Her 30 kullanım başına yakındaki bir rakibin üstünde %30 Hasar veren bir yarık daha ortaya çıkarır. Örseleme: Örselenen birimlerin büyü direnci azalır."
            }
          },
          {
            name: "Tristana",
            cost: 2,
            traits: ["Peri"],
            classes: ["İmhacı"],
            ability: {
              name: "Patlayıcı Yük",
              description: "Hedefine doğru bir top atışı yapar. Atış isabet ettiği ilk rakibe [224/336/523] () Fiziksel Hasar verir. İsabet alan rakip 2 hücre yakınındaysa onu 2 hücre geri savurur ve sersemletir."
            }
          },
          {
            name: "Zilean",
            cost: 2,
            traits: ["Ayaz", "Zaman Bükücü"],
            classes: ["Himayeci"],
            ability: {
              name: "Saatli Bomba",
              description: "Hedefinin üstüne bir bomba yerleştirerek ona [180/270/420] () Büyü Hasarı verir ve onu 1.25 saniyeliğine sersemletir. Bomba sersemletme sona erdiğinde veya hedef katledildiğinde patlayarak hedefe [180/270/420] (), bitişiğindeki rakiplere ise [150/225/350] () Büyü Hasarı verir."
            }
          },
          // 3 Maliyetli Şampiyonlar
          {
            name: "Bard",
            cost: 3,
            traits: ["Pastacı"],
            classes: ["Himayeci", "Âlim"],
            ability: {
              name: "Zıpır Atış",
              description: "Hedefine doğru sihirli bir atış yapar. Atış rakiplerin arasında 4 kez seker ve isabet ettiği rakiplere [100/150/240] () Büyü Hasarı verir. Ayrıca isabet alan rakipler 3 saniye boyunca %10 daha fazla hasar alır."
            }
          },
          {
            name: "Ezreal",
            cost: 3,
            traits: ["Geçit"],
            classes: ["İmhacı"],
            ability: {
              name: "Geçit Dalgası",
              description: "3 hücrelik bir alan içindeki en uygun konuma atılır. Ardından [230/330/494] () Fiziksel Hasar veren ve düz bir hat üstünde ilerleyen bir dalga gönderir. Dalganın hasarı isabet ettiği her rakip için %25 azalır."
            }
          },
          {
            name: "Hecarim",
            cost: 3,
            traits: ["Arkana"],
            classes: ["Müdafi", "Çevik"],
            ability: {
              name: "Galeyan",
              description: "Pasif: Mevcut hedefi alt edildikten sonra sıradaki hedefi menzil dışındaysa ona doğru hücum ederek [152/228/357] () Fiziksel Hasar verir. Aktif: Saldırılarıyla sonraki 6 saniye boyunca bitişiğindeki rakiplere [87/131/209] () Fiziksel Hasar verir."
            }
          },
          {
            name: "Hwei",
            cost: 3,
            traits: ["Ayaz"],
            classes: ["İmhacı"],
            ability: {
              name: "Öz: Fırtına",
              description: "Hedefinin üstünde bir yıldırım resmeder. Yıldırım bir süre sonra hedefe çarpar ve ona [130/200/320] (), bitişiğindeki rakiplere ise [52/80/128] () Büyü Hasarı verir. Her üçüncü kullanımda yüzdelik canı en düşük rakiplerin üstünde 2 ilave yıldırım resmeder."
            }
          },
          {
            name: "Jinx",
            cost: 3,
            traits: ["Pastacı"],
            classes: ["Avcı"],
            ability: {
              name: "Ay Çok Heyecanlı!",
              description: "4 saniye içinde azalarak kaybolacak şekilde %100 Saldırı Hızı kazanır ve saldırılarıyla [21/31/48] () İlave Gerçek Hasar verir. Alt etmeler bu etkiyi 3 saniyeliğine yeniler."
            }
          },
          {
            name: "Katarina",
            cost: 3,
            traits: ["Peri"],
            classes: ["Savaşçı"],
            ability: {
              name: "Ölüm Çiçeği",
              description: "2 hücrelik bir alan içindeki en büyük rakip grubuna sıçrar ve dönerek 2 hücrelik bir alan içindeki rakiplere 3 saniye içinde [175/260/420] () Büyü Hasarı verir. Ayrıca onları 5 saniyeliğine yaralar. En yakındaki 2 rakip [271/403/651] () Büyü Hasarı alır. Bir rakibi katlederse sıçrayarak yeniden konumlanır. Yara: Yaralanan birimlerin aldığı iyileştirme etkileri %33 azalır."
            }
          },
          {
            name: "Mordekaiser",
            cost: 3,
            traits: ["Tekinsiz"],
            classes: ["Öncü"],
            ability: {
              name: "Mahvet",
              description: "2 saniye içinde azalarak kaybolacak şekilde [210/250/300] () Kalkan kazanır ve hedefine saldırarak 2 hücrelik düz bir hat üstüne [180/270/430] () Büyü Hasarı verir. Çatışmanın geri kalanı boyunca 10 Yetenek Gücü kazanır."
            }
          },
          {
            name: "Neeko",
            cost: 3,
            traits: ["Cadı"],
            classes: ["Şekil Değiştirici"],
            ability: {
              name: "Sürpriz!",
              description: "2 saniyeliğine bir yengece dönüşür. Bu süre içinde @ModifiedSelfHeal@ () Can yeniler. Ayrıca yakındaki 3 takım arkadaşına ve 3 rakibe yampiri dalgaları gönderir. İsabet alan takım arkadaşları [75/100/125] () Can yenilerken isabet alan rakipler [100/150/240] () Büyü Hasarı alır ve 1.25 saniyeliğine sersemler."
            }
          },
          {
            name: "Shen",
            cost: 3,
            traits: ["Alaz"],
            classes: ["Müdafi"],
            ability: {
              name: "Alacakaranlık Patlaması",
              description: "3 saniyeliğine [35/40/50]% () Dayanıklılık kazanır. En yakındaki rakiplerin altında 3 volkanik patlama gerçekleştirir. Patlamalar hedefleri 1.5 saniyeliğine sersemletir ve onlara [120/180/300] () Büyü Hasarı verir. Patlamalar aynı rakibe birden fazla kez hasar verirken %50 etkili olur."
            }
          },
          {
            name: "Swain",
            cost: 3,
            traits: ["Ayaz"],
            classes: ["Şekil Değiştirici"],
            ability: {
              name: "Tipi",
              description: "Dönüşerek [300/375/450] () Azami Can kazanır. Dönüşmüşken 2 hücrelik bir alan içindeki rakiplere her saniye [20/30/50] () Büyü Hasarı verir. Zaten dönüşmüşse [180/230/280] () İlave Azami Can kazanır ve verdiği hasarı [10/15/25] () arttırır."
            }
          },
          {
            name: "Veigar",
            cost: 3,
            traits: ["Kovan"],
            classes: ["Sihirbaz"],
            ability: {
              name: "Kral Arının Yargısı",
              description: "Pasif: Aldığın her tılsım için 3 Yetenek Gücü kazanır. (Alınan Tılsım: 3) Aktif: Hedefine [240/330/475] () Büyü Hasarı verir."
            }
          },
          {
            name: "Vex",
            cost: 3,
            traits: ["Zaman Bükücü"],
            classes: ["Sihirbaz"],
            ability: {
              name: "Kişisel Alan",
              description: "4 saniyeliğine [380/430/480] () Kalkan kazanır. Onu hedef alan her rakip için kalkan miktarı %5 artar. Kalkan sona erdiğinde 2 hücrelik bir alan içindeki rakiplere [80/120/200] () Büyü Hasarı verir."
            }
          },
          {
            name: "Wukong",
            cost: 3,
            traits: ["Doğa Sakini"],
            classes: [],
            ability: {
              name: "Burgaç",
              description: "Pasif: Tüm kaynaklardan %30 İlave Zırh ve Büyü Direnci kazanır. Aktif: Dönerek 4 saniyeliğine [380/460/550] () Kalkan kazanır ve bitişiğindeki her rakibe toplamda [141/186/267] () Fiziksel Hasar verir."
            }
          },
          // 4 Maliyetli Şampiyonlar
          {
            name: "Fiora",
            cost: 4,
            traits: ["Cadı"],
            classes: ["Savaşçı"],
            ability: {
              name: "Kılıç Dansı",
              description: "Geriye doğru atılır ve kısa süreliğine %70 Dayanıklılık kazanır. Ardından 2 hücrelik bir alan içinde en fazla rakibe isabet edecek şekilde bir saldırı yapar. Saldırı isabet ettiği her rakibe [120/180/608] () Fiziksel Hasar verir. Ayrıca isabet alan tüm rakipler arasında bölüştürülecek şekilde [280/420/1481] () Fiziksel Hasar daha verir."
            }
          },
          {
            name: "Gwen",
            cost: 4,
            traits: ["Pastacı"],
            classes: ["Savaşçı"],
            ability: {
              name: "Kırt Kırt!",
              description: "Pasif: Her 1 yetenek kullanımı başına bir Kırt! yükü kazanır. Aktif: Atılır ve makasıyla koni şeklindeki bir alana temelde iki kez ve her Kırt! yükü için fazladan bir kez saldırır. İlk ve son makas darbeleri [95/145/430] (), diğer makas darbeleriyse [40/60/180] () Büyü Hasarı verir."
            }
          },
          {
            name: "Kalista",
            cost: 4,
            traits: ["Peri"],
            classes: ["Çevik"],
            ability: {
              name: "Ciğerini Sök",
              description: "Pasif: Her saldırısıyla hedefine bir mızrak saplar. Ayrıca her [3/3/1] saldırıda bir yakındaki [2/2/3] rakibe de mızrak saplar. Aktif: Rakiplere onlara sapladığı her mızrak için [27/43/170] () Fiziksel Hasar verir."
            }
          },
          {
            name: "Karma",
            cost: 4,
            traits: ["Zaman Bükücü"],
            classes: ["Afsuncu"],
            ability: {
              name: "Geri Sayım",
              description: "Hedefine ve bu etkiye sahip olmayan en yakın rakibe [6/6/4] saniye içinde [190/285/1600] () Büyü Hasarı veren bir zaman yarığı yollar. Ayrıca rakiplerin üstündeki diğer tüm yarıkların süresini sıfırlar."
            }
          },
          {name: "Nami",
            cost: 4,
            traits: ["Tekinsiz"],
            classes: ["Sihirbaz"],
            ability: {
              name: "Leviathan",
              description: "Menzildeki en büyük rakip grubuna doğru [240/360/1800] () Büyü Hasarı veren bir baloncuk gönderir. Her üçüncü kullanımda baloncuk göndermek yerine Leviathan'ı çağırır. Leviathan bir hat üstündeki rakipleri sersemletir ve onlara [200/300/1200] () Büyü Hasarı verir."
            }
          },
          {
            name: "Nasus",
            cost: 4,
            traits: ["Alaz"],
            classes: ["Şekil Değiştirici"],
            ability: {
              name: "Zebani",
              description: "En yakındaki [3/4/10] rakipten aralarında bölüştürülecek şekilde [300/480/5000] Can çalar. Sonraki yetenek kullanımlarında bunun yerine [250/300/900] () Can yeniler ve hedefine [165/297/610] () Fiziksel Hasar verir."
            }
          },
          {
            name: "Olaf",
            cost: 4,
            traits: ["Ayaz"],
            classes: ["Avcı"],
            ability: {
              name: "Ragnarok",
              description: "Pasif: Her 4 saldırıda bir ve hedef değiştirdiğinde hedefinin üstüne atlayarak ona ve bitişiğindeki rakiplere [120/180/591] () Fiziksel Hasar verir. Aktif: Sonraki 5 saniye boyunca [90/100/300]% Saldırı Hızı, %15 () Mutlak Sömürü ve kitle kontrolüne karşı bağışıklık kazanır."
            }
          },
          {
            name: "Rakan",
            cost: 4,
            traits: ["Peri"],
            classes: ["Himayeci"],
            ability: {
              name: "Göz Alıcı Tüy",
              description: "3 saniyeliğine [290/478/1780] () Kalkan kazanır. Koni şeklindeki geniş bir alana 8 tüy fırlatarak isabet alan rakiplere [150/225/1200] () Büyü Hasarı verir. Ardından yere inerek 2 hücrelik bir alan içindeki takım arkadaşlarına 4 saniyeliğine [100/130/1000] () Kalkan kazandırır."
            }
          },
          {
            name: "Ryze",
            cost: 4,
            traits: ["Geçit"],
            classes: ["Âlim"],
            ability: {
              name: "Rün Geçidi",
              description: "Geçit açarak en yakındaki [3/3/6] rakibe aralarında bölüştürülecek şekilde [10/10/22] () büyülü atış gönderir. Her atış [85/130/300] () Büyü Hasarı verir."
            }
          },
          {
            name: "Tahm Kench",
            cost: 4,
            traits: ["Arkana"],
            classes: ["Öncü"],
            ability: {
              name: "Gizemli Dalış",
              description: "Yeraltına dalıp en yakındaki rakibin bitişiğinde yüzeye çıkar. Ardından 4 hücrelik bir alan içindeki en uzak rakibe doğru bir şok dalgası gönderir. 2 hücre yakınındaki rakiplerle şok dalgasından isabet alan rakiplere [155/249/1203] () Büyü Hasarı verir. Ayrıca onları [1.75/2/8] saniyeliğine sersemletir."
            }
          },
          {
            name: "Taric",
            cost: 4,
            traits: ["Geçit"],
            classes: ["Müdafi"],
            ability: {
              name: "Bütün Gözler Üzerimde",
              description: "4 saniyeliğine [55/60/90]% () Dayanıklılık kazanır ve yakınından geçen atışları üstüne çeker. Sürenin sonunda [2/2/3] hücrelik bir alana [110/165/1200] () Büyü Hasarı veren bir patlama gerçekleştirir."
            }
          },
          {
            name: "Varus",
            cost: 4,
            traits: ["Alaz"],
            classes: ["İmhacı"],
            ability: {
              name: "Cehennem Ateşi Yağmuru",
              description: "Saldırı menzilinin içinde veya en fazla bir hücre uzağında yer alan en büyük rakip grubuna doğru bir süpernova gönderir. Süpernova hedefe ve bitişiğindeki rakiplere [239/364/1145] () Fiziksel Hasar verir. Ardından patlayarak etrafa her biri [120/182/573] () Fiziksel Hasar veren ateş topları saçar."
            }
          },
          // 5 Maliyetli Şampiyonlar
          {
            name: "Briar",
            cost: 5,
            traits: ["Açgözlü", "Tekinsiz"],
            classes: ["Şekil Değiştirici"],
            ability: {
              name: "Mezara Kadar",
              description: "En büyük rakip grubuna doğru atılarak 2 hücrelik bir alan içindeki rakiplere [65/98/731] () Fiziksel Hasar verir ve onları 1.25 saniyeliğine sersemletir. Ardından cinnet geçirerek [75/75/666]% () Saldırı Hızı ve %[15/15/100] Mutlak Sömürü kazanır. Ayrıca saldırıları hedefine ve bitişiğindeki rakiplere [26/39/293] () İlave Fiziksel Hasar verir. Zaten cinnet halindeyse sonraki saldırısını güçlü bir ısırığa dönüştürerek [163/244/2925] () Fiziksel Hasar verir. (İlave Can: 0 Can)"
            }
          },
          {
            name: "Camille",
            cost: 5,
            traits: ["Zaman Bükücü"],
            classes: ["Çevik"],
            ability: {
              name: "Zaman Anomalisi",
              description: "Pasif: Hedefi katledildiğinde 3 hücrelik bir alan içindeki yüzdelik canı en düşük rakibe kanca atışı yaparak ona [140/210/1530] () Fiziksel Hasar verir. Kanca atışı yaptıktan veya yeteneğini kullandıktan sonraki ilk saldırısı [195/292/2530] () Gerçek Hasar verir. Aktif: Hedefinin bitişiğindeki rakipleri geri savurarak [1/1/7] saniyeliğine sersemletir ve onlara [140/210/1530] () Fiziksel Hasar verir. Hedefinin etrafında [4/4/7] saniye boyunca varlığını koruyan bir muhafaza bölgesi oluşturur. Bu bölgenin içindeyken %30 Dayanıklılık ve %225 Saldırı Gücü kazanır."
            }
          },
          {
            name: "Diana",
            cost: 5,
            traits: ["Ayaz"],
            classes: ["Müdafi"],
            ability: {
              name: "Kar Yağışı",
              description: "2 hücrelik bir alan içinde yeteneğinin en fazla rakibe isabet edeceği konuma doğru atılır ve [200/250/3000] () Can yeniler. Fazlalık iyileşme 3 saniye süren bir kalkana dönüşür. Ardından bitişiğindeki rakiplere [380/570/9001] (), 2 hücre uzağındaki rakiplere ise [170/255/9000] () Büyü Hasarı verir. Her [2/2/1] yetenek kullanımında bir kar yağmasını sağlar. Kar yağışından etkilenen tüm rakipler buz tutar, takım arkadaşlarıysa 3 saniye içinde [150/200/1500] () Can yeniler. Fazlalık iyileştirme 3 saniye süren bir kalkana dönüşür. Buz Tutma: Buz tutan birimlerin saldırı hızı %20 azalır."
            }
          },
          {
            name: "Milio",
            cost: 5,
            traits: ["Peri"],
            classes: ["Âlim"],
            ability: {
              name: "Ivır Zıvır Saldırısı",
              description: "Boş eşya yuvasına sahip takım arkadaşlarına [2/2/8] tamamlanmış eşya fırlatır. Eşya fırlattığı takım arkadaşının boş eşya yuvası yoksa ona çatışmanın geri kalanı boyunca birikecek şekilde %12 Hasar Artışı kazandırır. Ardından rakiplere her biri [333/500/1000] () Büyü Hasarı veren [3/3/8] ıvır zıvır fırlatır. Ara sıra çantasında özel bir sürpriz de bulabilir."
            }
          },
          {
            name: "Morgana",
            cost: 5,
            traits: ["Cadı"],
            classes: ["Yarasa Kraliçesi", "Himayeci"],
            ability: {
              name: "Biricik Evcil Hayvanlarım",
              description: "4 saniyeliğine [400/525/2500] () Kalkan kazanır ve [8/8/30] yarasadan oluşan bir sürü çağırır. Yarasalar 3 hücrelik bir alan içindeki en yakın 4 rakibi hedef alır ve her biri [150/225/2000] () Büyü Hasarı verir. Yarasalar canı %33 değerinin altındaki rakiplere gerçek hasar verir."
            }
          },
          {
            name: "Norra ve Yuumi",
            cost: 5,
            traits: ["Geçit"],
            classes: ["Sıkı Dostlar", "Sihirbaz"],
            ability: {
              name: "Geçit Cümbüşü",
              description: "Mevcut hedefine doğru bir top fırlatır. Top patlayarak [180/270/1000] () Büyü Hasarı verir. Ardından alanı [5/5/15] saniyeliğine renklendirerek bu süre boyunca [500/750/3000] () Büyü Hasarı verir. Top zaten renklendirilmiş bir alana düşerse patlamadan önce 2 hücrelik bir alan içindeki yeni bir konuma seker."
            }
          },
          {
            name: "Smolder",
            cost: 5,
            traits: ["Ejder"],
            classes: ["İmhacı"],
            ability: {
              name: "Uçmayı Öğreniyorum",
              description: "Pasif: Etrafta uçar ve en yakınındaki rakibe saldırır. Aktif: %[50/50/500] Saldırı Hızı kazanır ve [6/6/60] saniyeliğine saldırılarını [173/268/2486] () Fiziksel Hasar veren ateş toplarıyla değiştirir. Ejder Güçlendirmesi: Her ateş topu aynı zamanda [20/30/200] Can yeniler."
            }
          },
          {
            name: "Xerath",
            cost: 5,
            traits: ["Arkana"],
            classes: ["Yükselmiş"],
            ability: {
              name: "Büyü Fırtınası",
              description: "Rasgele rakiplere her biri [220/330/777] () Büyü Hasarı veren [10/10/99] büyülü atış gönderir."
            }
          }
        ]
   };
   
   export default championsData;
   