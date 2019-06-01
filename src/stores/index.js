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
          "https://webfs.yun.kugou.com/201906011214/576297d8cc2e31bec5d0f3a51e2d1a33/G163/M07/16/07/g5QEAFzU112ABtw0AE2VhJleqik433.mp3",
          "https://webfs.yun.kugou.com/201906011215/62f945fbf023d4c9e34792f91b57511b/G159/M0B/10/09/P4cBAFzU1k-AAmwmADyjjqRzP9Q039.mp3",
          "https://webfs.yun.kugou.com/201906011216/74c13c88e32b622b1a4d5d364364a9e6/G156/M02/1A/18/PIcBAFzU1k6AbyddADlIyNQtBK4856.mp3",
          "https://webfs.yun.kugou.com/201906011217/96d002716e7319d0c4c1f052a8749b95/G156/M09/00/19/PIcBAFzU1pOAJWy7AB8Q8pmzCyM355.mp3",
          "https://webfs.yun.kugou.com/201906011218/fb98cafe253c7e213dd0bdf1824993f6/G156/M0A/04/01/fJQEAFzU1u-AG9AFAChbuOuPhOI879.mp3",
          "https://webfs.yun.kugou.com/201906011218/298e33d1a38b94bab49f4d78ba101dd8/G163/M00/1A/1B/Q4cBAFzU1jSAF8rnAC4MDIs1S0A038.mp3",
          "https://webfs.yun.kugou.com/201906011219/957bc2966defedfef999f0aff1a79417/G159/M02/0B/10/f5QEAFzU1oGAYqFjADMkifmZa4E327.mp3",
          "https://webfs.yun.kugou.com/201906011220/b2b865f4f284d63f0bd05ff1ef52e413/G160/M03/06/05/QIcBAFzU1vGAMwIVACB4ISiCCKk682.mp3",
          "https://webfs.yun.kugou.com/201906011220/60c2b5b0dcf6d9f440d87534e3fa0239/G162/M05/11/01/4g0DAFzU1c-AU1bLACdqFn_i4IA411.mp3",
          "https://webfs.yun.kugou.com/201906011220/0ac393b8369081f9305d9c732942dba0/G162/M04/01/10/gpQEAFzU1g6AaqYBACc_o_jHXvA199.mp3"
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
          "https://webfs.yun.kugou.com/201906011222/33ad89a926c34a0777b7d3042a857a18/G154/M02/18/09/OocBAFztf7yAAjC6ADouF5_1aoE098.mp3"
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
          "https://webfs.yun.kugou.com/201906011223/4c9c156758c692ee85cc1d5f91d517a2/G123/M0A/17/04/uw0DAFxs1F2AN0dfACsz4odckT0549.mp3",
          "https://webfs.yun.kugou.com/201906011223/9f472bd72a477902383cab9e8deb8aca/G163/M04/1A/00/Q4cBAFzU5-yAVjSJADcsX1Siaz8934.mp3",
          "https://webfs.yun.kugou.com/201906011224/c020ef6b409fbcbb4695e63479c82233/G156/M02/14/09/PIcBAFzU6ASARabJACqdrl2JpZ8351.mp3",
          "https://webfs.yun.kugou.com/201906011224/bec6d08f2c96f884f2f9ae26808afd0f/G159/M06/00/1B/f5QEAFzU55yAeO-WADHSlFJoDoM293.mp3"
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
          "https://webfs.yun.kugou.com/201906011225/86b96cc14bf15a61c970a542780a2f44/G161/M02/1C/1B/gZQEAFy5F82ARcgCAC6r7bK70Hg665.mp3",
          "https://webfs.yun.kugou.com/201906011225/0e5fd6a3f4b86271d3db03636a62ffe3/G158/M07/09/19/fpQEAFy5F-iAK_lAAC_IAk7VmNA344.mp3",
          "https://webfs.yun.kugou.com/201906011225/9cf77a62da7c286acf03f75632399e4e/G160/M0B/1A/10/4A0DAFy5F4yADujjADXb7bFAUvQ191.mp3",
          "https://webfs.yun.kugou.com/201906011225/84006e3b4fba276b07a80b9780bdf13a/G162/M08/1A/13/4g0DAFy5F1eAaZlqADOw0-kZ99g534.mp3",
          "https://webfs.yun.kugou.com/201906011226/243e96b933512601ff8df8874b8b31b8/G157/M06/05/01/fZQEAFy5F5GAFHPOAC9mDG_sWTY717.mp3"
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
          "https://webfs.yun.kugou.com/201906011226/7eb3b4f9a5417b854e8b8b51fb813a26/G162/M01/05/14/gpQEAFycfCmAS1HaACrkdYk3FLk607.mp3",
          "https://webfs.yun.kugou.com/201906011227/bbbaa735e3ab985cab249b4f1abcdc9f/G145/M02/00/11/MYcBAFxqPpmAQmIrACtThshmlyI708.mp3",
          "https://webfs.yun.kugou.com/201906011227/c2b2ec36aba926a2881b7caee13a8df2/G161/M01/15/1F/gZQEAFy9emyADDpEACyIF7nLNa4093.mp3",
          "https://webfs.yun.kugou.com/201906011227/7a1cc11ef831b039300d81f6e80d98bf/G161/M06/07/17/4Q0DAFy9eouAPgxtADhhm_PpvGg677.mp3",
          "https://webfs.yun.kugou.com/201906011228/3847cb67039c8389cbf7feeac205556e/G160/M08/0A/08/4A0DAFy702WAR1mVADF-XluhVeY642.mp3",
          "https://webfs.yun.kugou.com/201906011226/cb11139d1581b43748adedc1f7066a81/G160/M05/18/09/4A0DAFyvGHSAbIOaADbLHTrZpo4347.mp3",
          "https://webfs.yun.kugou.com/201906011228/7b34454b54f8e1b4282b913df6d74a1b/G156/M01/1C/05/3A0DAFy9epiABB_sAC3yp4_feVY645.mp3",
          "https://webfs.yun.kugou.com/201906011228/0d09d84ab472f663b48c5e7cf9c9f8fb/G160/M00/0A/04/4A0DAFy9esaAEGptAEfnc0pbjQo477.mp3",
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
