import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    music: [
      {
        "name": "Taylor Swift",
        "imgH": require("../assets/images/TaylorSwiftH.jpg"),
        "imgB": require("../assets/images/TaylorSwiftB.jpg"),
        "num": "102 Songs",
        "songs": [
          {
            "sname": "Welcome To New York",
            "album": "1989"
          },
          {
            "sname": "Wildest Dreams",
            "album": "1989"
          },
          {
            "sname": "Bad Blood",
            "album": "1989"
          },
          {
            "sname": "You Belong With Me",
            "album": "Fearless"
          },
          {
            "sname": "Love Story",
            "album": "Fearless"
          },
          {
            "sname": "Babe",
            "album": "Babe"
          },
          {
            "sname": "Red",
            "album": "Red"
          },
          {
            "sname": "22",
            "album": "Red"
          },
          {
            "sname": "Shake It Off",
            "album": "Shake It Off"
          },
          {
            "sname": "Gorgeous",
            "album": "reputation"
          },
        ],
        "source": ["http://k6.kekenet.com/Sound/2017/01/omtaylor20_5247690Vj2.mp3",
          "http://other.web.rl01.sycdn.kuwo.cn/resource/n3/57/73/712128005.mp3",
          "http://xia2.kekenet.com/Sound/2016/12/omtaylor6_5909758WyK.mp3",
          "http://xia2.kekenet.com/Sound/song/country/Taylor%20Swift%20-%20You%20belong%20with%20me.mp3",
          "http://xia2.kekenet.com//Sound/Article/yule/movie/lovestory.mp3",
          "http://other.web.np01.sycdn.kuwo.cn/resource/n2/36/79/1944265108.mp3",
          "http://other.web.np01.sycdn.kuwo.cn/resource/n1/39/95/4201187677.mp3",
          "http://xia2.kekenet.com/Sound/2017/01/omtaylor17_11429753FE.mp3",
          "http://xia2.kekenet.com/Sound/2016/12/omtaylor3_34236983Dt.mp3",
          "http://other.web.np01.sycdn.kuwo.cn/resource/n2/53/78/2471367858.mp3"
        ]
      },
      {
        "name": "Justin Bieber",
        "imgH": require("../assets/images/JustinBieberH.jpg"),
        "imgB": require("../assets/images/JustinBieberB.jpg"),
        "num": "59 Songs",
        "songs": [
          {
            "sname": "Despacito",
            "album": "Despacito"
          },
          {
            "sname": "Let Me Love You",
            "album": "Encore"
          },
          {
            "sname": "The Feeling",
            "album": "Purpose"
          },
          {
            "sname": "What Do You Mean",
            "album": "What Do You Mean"
          },
          {
            "sname": "Never Say Never",
            "album": "Never Say Never"
          },
          {
            "sname": "Baby",
            "album": "Baby"
          },
          {
            "sname": "Beautiful",
            "album": "Kiss"
          },
        ],
        "source": ["http://xia2.kekenet.com/Sound/2017/05/jbsong38_5456153nx3.mp3",
          "http://xia2.kekenet.com/Sound/2017/02/jbsong17_1924746FKA.mp3",
          "http://k6.kekenet.com/Sound/2017/03/jbsong23_4315865HSj.mp3",
          "http://k6.kekenet.com/Sound/2017/02/jbsong16_5913528eGN.mp3",
          "http://k6.kekenet.com/Sound/2016/11/jdgq16_5153636maf.mp3",
          "http://k6.kekenet.com/Sound/2016/12/jbsong01_1715307PsD.mp3",
          "http://k6.kekenet.com/Sound/2017/01/jbsong12_3404766XL6.mp3"]
      },
      {
        "name": "Ed Sheeran",
        "imgH": require("../assets/images/EdSheeranH.jpg"),
        "imgB": require("../assets/images/EdSheeranB.jpg"),
        "num": "84 Songs",
        "songs": [
          {
            "sname": "Shape of You",
            "album": "Shape of You"
          },
          {
            "sname": "Galway Girl",
            "album": "÷ (Deluxe)"
          },
          {
            "sname": "Perfect",
            "album": "÷ (Deluxe)"
          },
          {
            "sname": "What Do I Know?",
            "album": "÷ (Deluxe)"
          },
          {
            "sname": "Be My Forever",
            "album": "Head Or Heart"
          },
          {
            "sname": "The A Team",
            "album": "The A Team"
          },
        ],
        "source": [
          "http://other.web.nu01.sycdn.kuwo.cn/resource/n1/10/66/3760874826.mp3",
          "http://other.web.np01.sycdn.kuwo.cn/resource/n3/54/20/1060354403.mp3",
          "http://fs.w.kugou.com/201905271958/d6d37b6ede3d3cff66d3acabf20d2d33/G094/M05/11/11/_oYBAFi38zSADm43AEBO8OZS3dc077.mp3",
          "http://fs.w.kugou.com/201905272001/ec1d0a2d65c9be618cd2f37d96b68f09/G092/M05/11/17/_IYBAFi38zSACahlADnzMVOI41Q570.mp3",
          "http://fdfs.xmcdn.com/group10/M0B/A0/4D/wKgDZ1ZY00ajCapUABh2GWrg_dE260.mp3",
          "http://k6.kekenet.com/Sound/2015/04/grammy12_49433613G4.mp3"
        ]
      },
      {
        "name": "Beyoncé",
        "imgH": require("../assets/images/BeyoncéH.jpg"),
        "imgB": require("../assets/images/BeyoncéB.jpg"),
        "num": "124 Songs",
        "songs": [
          {
            "sname": "Halo",
            "album": "Halo"
          },
          {
            "sname": "If I Were a Boy",
            "album": "I Am...Sasha Fierce"
          },
          {
            "sname": "Telephone",
            "album": "Telephone"
          },
          {
            "sname": "Listen",
            "album": "Listen"
          },
          {
            "sname": "Love On Top",
            "album": "4"
          },
          {
            "sname": "Pretty Hurts",
            "album": "BEYONCÉ"
          },
          {
            "sname": "Irreplaceable",
            "album": "B'Day"
          },
        ],
        "source": [
          "http://other.web.nc01.sycdn.kuwo.cn/resource/n2/6/49/1326745142.mp3",
          "http://fs.w.kugou.com/201905272002/8228129d28742f8fe6df16a77c4faaed/G001/M03/19/15/QQ0DAFS4rQ-AeeIAAD2zJS8ZtPk468.mp3",
          "http://fs.w.kugou.com/201905272004/9e7dcb3b111d5164db610c5322e024de/G062/M03/17/1D/fg0DAFcKIXOAG_QbADYoKt2RuEc696.mp3",
          "http://other.web.np01.sycdn.kuwo.cn/resource/n3/2/30/4237738684.mp3",
          "http://k6.kekenet.com/Sound/2015/07/grammy45_5819847eQ4.mp3",
          "http://other.web.nc01.sycdn.kuwo.cn/resource/n2/30/26/2950206833.mp3",
          "http://fs.w.kugou.com/201905272005/1ce82915f8ec5ec529d9fd471f2abbb8/G004/M03/1D/18/RA0DAFS44IqAXFS1ADdwp_KmD0M298.mp3"
        ]
      },
      {
        "name": "Avril",
        "imgH": require("../assets/images/AvrilH.jpg"),
        "imgB": require("../assets/images/AvrilB.jpg"),
        "num": "97 Songs",
        "songs": [
          {
            "sname": "Innocence",
            "album": "The Best Damn Thing"
          },
          {
            "sname": "Rock N Roll",
            "album": "Rock N Roll"
          },
          {
            "sname": "Girlfriend",
            "album": "Girlfriend"
          },
          {
            "sname": "Listen",
            "album": "Ambitions"
          },
          {
            "sname": "Tomorrow",
            "album": "Let Go"
          },
          {
            "sname": "Bad Girl",
            "album": "Avril Lavigne"
          },
        ],
        "source": [
          "http://fs.w.kugou.com/201905272015/d0da08dd7575bf03a0d590627e8eb8e7/G012/M07/01/09/rIYBAFUKilCAV55kADj2J33IqoI680.mp3",
          "http://fs.w.kugou.com/201905272016/b2a844e8c7275cea970534a4683fbb27/G010/M09/18/04/Sg0DAFUHPw-AK4mRADKL1VxTMJw232.mp3",
          "http://other.web.rl01.sycdn.kuwo.cn/resource/n3/10/78/1353850909.mp3",
          "http://other.web.np01.sycdn.kuwo.cn/resource/n1/13/9/4002227114.mp3",
          "http://fs.w.kugou.com/201905272017/7775c301ac59baba93ac243c5dbcf57a/G005/M04/15/05/pYYBAFS65W-AJFlZADfrGaysyzs009.mp3",
          "http://k6.kekenet.com/Sound/2017/01/avrilsong39_0025196Yr7.mp3"
        ]
      },
      {
        "name": "Eminem",
        "imgH": require("../assets/images/EminemH.jpg"),
        "imgB": require("../assets/images/EminemB.jpg"),
        "num": "46 Songs",
        "songs": [
          {
            "sname": "The Monster",
            "album": "The Monster"
          },
          {
            "sname": "Love The Way You Lie",
            "album": "Life After Recovery"
          },
          {
            "sname": "Homicide",
            "album": "Homicide"
          },
          {
            "sname": "Rap God",
            "album": "Rap God"
          },
          {
            "sname": "Lighters",
            "album": "Marshall Carter"
          },
          {
            "sname": "Lose Yourself",
            "album": "8 Mile"
          },
          {
            "sname": "Shake That",
            "album": "Curtain Call"
          }
        ],
        "source": [
          "http://fs.w.kugou.com/201905272020/0fc4774c81a4ceffbbaafb502c329113/G012/M05/06/15/rIYBAFUPcAGAR_iPAD1GhtBP2j0702.mp3",
          "https://mpdown.kekenet.com//Sound/Article/yule/movie/LoveTheWay.mp3",
          "http://fs.w.kugou.com/201905272022/a6e9d106b0d9a393d66c7a4068708cb9/G161/M00/13/14/QYcBAFzLpY-AOxm2ADvtV8H70i0690.mp3",
          "http://fs.w.kugou.com/201905272023/4da6e1cc1f926f335e58010d8c4a33ea/G111/M00/16/1D/D4cBAFvxdfuAbv0mAFjIKWw2o0Y537.mp3",
          "http://fs.w.kugou.com/201905272023/a62384455fbde8f3c7d426b8796de4c9/G112/M04/0C/0F/UJQEAFvsMemAEpXHAEo3vjljAQs580.mp3",
          "http://fs.w.kugou.com/201905272025/1714391cbfb358744bd28019a4b62499/G009/M05/16/09/qYYBAFUKkRiAK-UrAE45QRugZa4025.mp3",
          "http://fs.w.kugou.com/201905272025/c385adfa3f7f43356e6ed8bdbc6ff257/G140/M01/11/14/zA0DAFvNAtaASrjNAEJgZKPmfBc711.mp3",

        ]
      }
    ],
    album: [
      {
        "al": "Eterna Saudade",
        "singer": "Andrew Zohn",
        "imgH": require("../assets/images/album/EternaSaudade.jpg"),
        "songs": [
          {
            "sname": "Cielo Abierto",
            "album": "Eterna Saudade"
          },
          {
            "sname": "Milonga",
            "album": "Eterna Saudade"
          },
          {
            "sname": "Quatro Piezas:I. Mazurka",
            "album": "Eterna Saudade"
          },
          {
            "sname": "Quatro Piezas:II. Valse",
            "album": "Eterna Saudade"
          },
          {
            "sname": "Alma Apaixonada",
            "album": "Eterna Saudade"
          },
          {
            "sname": "La Gueya",
            "album": "Eterna Saudade"
          },
          {
            "sname": "Guarania",
            "album": "Eterna Saudade"
          },
          {
            "sname": "Gato e Malambos",
            "album": "Eterna Saudade"
          },
          {
            "sname": "Xodo Da Baiana",
            "album": "Eterna Saudade"
          },
          {
            "sname": "Se Era Perguntar",
            "album": "Eterna Saudade"
          }
        ],
        "source": [
          "http://223.99.245.49/amobile.music.tc.qq.com/C400002FEA4m3d1R8b.m4a?guid=4272657080&vkey=E526018ADE1B6D78F4F1C03B118015B7A8113ABFDE66DF6AD46D269B8A23B52EEB37257388A05823D68FB413A08B3B1E7C4D24589DED0BCA&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400001D63ku2sQYKz.m4a?guid=4272657080&vkey=A3C98EC5EAF8A1F3E62DA5AB92D485FF09747A4394A740403F10091052E46F446A04916F875CB1CC17AB6ADDB5BB4C9B58B05F5AB513CA77&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400000bafMJ48hYHh.m4a?guid=4272657080&vkey=640DE1A4F8580B5C8238758D0569258E99E9CD13991388208FFF8B63867A45C4A572236A4FC9A08BFDC9D6661A44533F34979FAD65058CF2&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400000zRr8l1pl4ap.m4a?guid=4272657080&vkey=B7784E9191E7E3D4D8D181D303DB53A70B5C472FA443B36889A1D25E0C9EC43C3510A4584881F7FA45B5D50A0B590169EE0BB780F7E4B028&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400000znHSX3kIOvt.m4a?guid=4272657080&vkey=6B3C382633CF617951E16F6BBF491F44E55889494FAE8A7B3D29D2B82AED40195B7767349CE471E8833B27A92A680B7397E6CEA26AE06614&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400000J1hQ80jcp8a.m4a?guid=4272657080&vkey=138FAC8EFECB3537B29E7FBA440D66DA03CA0B388E21643E6C1B606D4ACB409AF4DB061D5F7A347C16E26AACFCC6B6AF8FDDCF73C715DD84&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400002HOgwK2ZYyTu.m4a?guid=4272657080&vkey=D1738D8EEB262A73C3D85CDCB623E512D66450875950DE72402045F25822809192628B6DA5BD8189DB4B53DA01401FBAE37EEF36AB5AD0DF&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400000Z2mA22JGWkp.m4a?guid=4272657080&vkey=9CCFF05883BBFF4473D2BAD6705BF96D4AD9C3AA97135B3A0421060C290FA473298306BACC9EAB64026D558CD3DB05F1A97E687707B3E748&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400004QSGt54LLVo4.m4a?guid=4272657080&vkey=FDD593B23E67E04E002472FE6A150C4E7BA3040165E39DB0D1A8F711FCD429D866B7007A0AB54FF8E7E96423645C8B87F563221B88016C16&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400002ggs1B0FEo2Y.m4a?guid=4272657080&vkey=812440A584A8E133D6649C2BF096052CCE41F1293E43AA38F789C40E1612645869C5B59F0DF83D918859235883B91579242455976443643A&uin=2068&fromtag=66"
        ]
      },
      {
        "al": "I Don't Care",
        "singer": "Ed Sheeran/Justin Bieber",
        "imgH": require("../assets/images/album/IDon'tCare.jpg"),
        "songs": [
          {
            "sname": "I Don't Care",
            "album": "I Don't Care"
          }
        ],
        "source": [
          "http://223.99.245.16/amobile.music.tc.qq.com/C400000TbH6n1cSxAG.m4a?guid=4272657080&vkey=D49923D2E71F602213FDF34E440EAF346F7C6FBAAC2DF39A30AFC84DD7F9AB0FB4C08728F6A8A2CED5B0E5987D31CC78F032E2ED353912B8&uin=2068&fromtag=66"
        ]
      },
      {
        "al": "Oh My Messy Mind",
        "singer": "James Bay",
        "imgH": require("../assets/images/album/OhMyMessyMind.jpg"),
        "songs": [
          {
            "sname": "Peer Pressure",
            "album": "Oh My Messy Mind"
          },
          {
            "sname": "Bad",
            "album": "Oh My Messy Mind"
          },
          {
            "sname": "Rescue",
            "album": "Oh My Messy Mind"
          },
          {
            "sname": "Break My Heart Right",
            "album": "Oh My Messy Mind"
          }
        ],
        "source": [
          "http://223.99.245.16/amobile.music.tc.qq.com/C400004UQg410ZI5U1.m4a?guid=4272657080&vkey=BE86D2C39AB705702457E57100CE7970EC2F028EACE2740E9620380D251053BC91FF93C0C56E9B8AA76EDB1C8895D6A0C85BDA04BCEE11AB&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400004A8OX14b8S9k.m4a?guid=4272657080&vkey=676F90C54F183B66A646DAB44C6FFE2F2B9B90423F01D12280EA555E3694B6895CC7C83B5665A997F9E859404FE1D2FE85EC78B932A008F9&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400000tAWC54N7s9z.m4a?guid=4272657080&vkey=0F71A0E1FB94FC238D38050292F999BE03AC5E66AC29C77DFCB895C9603451041705667F55E40531E0F29D015BA4F4F5F8A97BDD0E8BFE68&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400003FeH8c2RDxRj.m4a?guid=4272657080&vkey=B318FDEB68D65490DBF38C10A6F4B38D075626C7577BAB1DEC007E74D104B50302379FAFCCD5612E8E2139DD4991E4168946A2F458BCFBB4&uin=2068&fromtag=66"
        ]
      },
      {
        "al": "Atoms",
        "singer": "Emma Stevens",
        "imgH": require("../assets/images/album/Atoms.jpg"),
        "songs": [
          {
            "sname": "Because It's You",
            "album": "Atoms"
          },
          {
            "sname": "Bells and Whistles",
            "album": "Atoms"
          },
          {
            "sname": "Atoms",
            "album": "Atoms"
          },
          {
            "sname": "Home",
            "album": "Atoms"
          },
          {
            "sname": "Soldier On",
            "album": "Atoms"
          }
        ],
        "source": [
          "http://223.99.245.16/amobile.music.tc.qq.com/C4000018gNGf2HuQJM.m4a?guid=4272657080&vkey=BBA543886FBBDCA55B5C8BCEA523F0E58D1F37F33BD05C32F030301E411CE5E7A62F739445C4737551964FD5CAADA2922EAA6A087D391BA8&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400000gXZZ437OaZt.m4a?guid=4272657080&vkey=2995B8D7A8862198259E1AF0C9068AD177062BF1890A0583301512FF47703F722329C80CDAFC0325667593870668A91340C03D8EC9C10C3A&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400000z2tkl3QQolz.m4a?guid=4272657080&vkey=F7024A20AFDA576F0D4CB16F70D9E5742418386B0AA9F9F82574F32F0D345CA66A46A95BC287B6CCB1905773E9B8292651A65A6B92DF597B&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400001U1HIl34lDah.m4a?guid=4272657080&vkey=9453C0BA86755DBEECCA3B3E80F6D48A70FF4A21D42531E41391881831C3391FDCFF60ECDB1C816654FEA4B0446FAD5C9D1084F1F545AA0E&uin=2068&fromtag=66",
          "http://223.99.245.16/amobile.music.tc.qq.com/C400002B8A0J0ilApF.m4a?guid=4272657080&vkey=4BFC8FD9C2ACF03DDD5AD0086EBE1DA5171500ED77B47B51B64FE66C2440E841990DD09255B3E62EC9AD18EC4D44B3B739FA9660928D9FFF&uin=2068&fromtag=66"
        ]
      },
      {
        "al": "Hurts 2B Human",
        "singer": "P!nk",
        "imgH": require("../assets/images/album/Pink.jpg"),
        "songs": [
          {
            "sname": "Hustle",
            "album": "Hurts 2B Human"
          },
          {
            "sname": "Walk Me Home",
            "album": "Hurts 2B Human"
          },
          {
            "sname": "My Attic",
            "album": "Hurts 2B Human"
          },
          {
            "sname": "90 Days",
            "album": "Hurts 2B Human"
          },
          {
            "sname": "Hurts 2B Human",
            "album": "Hurts 2B Human"
          },
          {
            "sname": "Can We Pretend",
            "album": "Hurts 2B Human"
          },
          {
            "sname": "Love Me Anyway",
            "album": "Hurts 2B Human"
          },
          {
            "sname": "Circle Game",
            "album": "Hurts 2B Human"
          },
        ],
        "source": [
          "http://223.99.245.24/amobile.music.tc.qq.com/C400002axGCA18Dm8v.m4a?guid=4272657080&vkey=518EC9EF150CFE81F7F2E5F412A7D2AC2CC16615B53ADE605CE90AE28424E86A555E1401BF9B58DE4E1AD7CEB852AD9851610F27A6545F90&uin=2068&fromtag=66",
          "http://223.99.245.24/amobile.music.tc.qq.com/C400001eTwH03MJThk.m4a?guid=4272657080&vkey=1DB39603F7F4951CB4F48D1E00EB97849DAACEF5561E2FBB2F63DDE2BC701E8CD5882855067CF44712720D2B36B734F47B54B36935C42E55&uin=2068&fromtag=66",
          "http://223.99.245.24/amobile.music.tc.qq.com/C400002QXkQG3IyLN2.m4a?guid=4272657080&vkey=24C13A9CB058037DBDA82BE007E45A187FEA13CC09BE6A78D4EBDEF56CF002EEF6D0317C5F2BDE061D51704E7B94FE0D2DF077ED9D27FEA5&uin=2068&fromtag=66",
          "http://223.99.245.24/amobile.music.tc.qq.com/C400001rO05f4PJEPi.m4a?guid=4272657080&vkey=3969863F10052C0DC41F45459412F3F830DBC0CF004369CD162548C174898EFB36A6E35C06EBCDB884ED859D60729845CC3A1444240AE1DC&uin=2068&fromtag=66",
          "http://223.99.245.24/amobile.music.tc.qq.com/C400001v0wob4LxHWL.m4a?guid=4272657080&vkey=FD86771EFE8E2F35FB717CCB9BC588AEE762AAFB9DA14512FD526266FFC09D27F1766253455FDF5DE5DDAB27E96179B8FA68437ADCAE54FC&uin=2068&fromtag=66",
          "http://223.99.245.24/amobile.music.tc.qq.com/C400002FoRTN1RlO4C.m4a?guid=4272657080&vkey=5EBBAA071CA680C0B02896203742362CC3722D597B0709BBA18F3567EC2979073130B635F8059FFE365E0782D1B7351FE9A1120A321F46C5&uin=2068&fromtag=66",
          "http://223.99.245.24/amobile.music.tc.qq.com/C400004C80Eg2oQJGL.m4a?guid=4272657080&vkey=FBF099BAE75A8556D8277D502733BBF2FD6D2CB6F244627F44D111F7AE8AF3090C4DDEB801745E9585CD98BF6D7AC354341ACA9226C1DF38&uin=2068&fromtag=66",
          "http://223.99.245.24/amobile.music.tc.qq.com/C400002aHe7K2gbzrc.m4a?guid=4272657080&vkey=19C4F6E436F55B201EB910E5881474DA28F30C9C4C98C45A05CCD78A21C5407D8736EDE2705065BA90E9AF7E2EAB97EEFB81A13D4F27CEB3&uin=2068&fromtag=66",
        ]
      }
    ],
    nightMode: false,
    playState: false,
    playIndex: 0,
    saveList: [],
    blank: {
      "imgH": require("../assets/images/blank.jpg"),
      "songs": [
        {
          "sname": "Player",
          "album": ""
        },
      ],
      "source": [
        "http://xia2.kekenet.com/Sound/song/Bandari/Bandari36.mp3"
      ]
    },
    list: [
      {
        "name": "Classical",
        "pic": require("../assets/images/List/classical.jpg")
      },
      {
        "name": "Pop",
        "pic": require("../assets/images/List/pop.jpg")
      },
      {
        "name": "Blues",
        "pic": require("../assets/images/List/blues.jpg")
      },
      {
        "name": "Rock&Roll",
        "pic": require("../assets/images/List/rock.jpg")
      },
      {
        "name": "Jazz",
        "pic": require("../assets/images/List/jazz.jpg")
      },
      {
        "name": "funk",
        "pic": require("../assets/images/List/funk.jpg")
      },
      {
        "name": "heavy metal",
        "pic": require("../assets/images/List/heavy.jpg")
      }
    ]
  },
  mutations: {
    changeModel(state) {
      state.nightMode = !state.nightMode
    },
    play(state) {
      state.playState = true
    },
    pause(state) {
      state.playState = false
    },
    changeIndex(state, index) {
      state.playIndex = index
    },
    updateSaveList(state, arr) {
      state.saveList = arr
    }
  },
  actions: {

  }
})
