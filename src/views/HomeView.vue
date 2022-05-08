<template>
  <div class = isi>
    <div class="home">
      <h2><br/><br/>
      <br/>
      <br/><br/>Keutamaan Membaca Al-Quran</h2>
    </div>
    <div class="sec">
        <div class="container">
          <p class = hadits1> عن عَبْدَ اللَّهِ بْنَ مَسْعُودٍ، يَقُولُ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ،<br/> وَالحَسَنَةُ بِعَشْرِ أَمْثَالِهَا، لَا أَقُولُ الم حَرْفٌ، وَلَكِنْ أَلِفٌ حَرْفٌ وَلَامٌ حَرْفٌ وَمِيمٌ حَرْفٌ </p>
          <br/>
          <p> <b>Artinya:</b> Kata ‘Abdullah ibn Mas‘ud, Rasulullah shallallahu ‘alaihi wasallam bersabda, “Siapa saja membaca satu huruf dari Kitabullah (Al-Qur’an),<br/> maka dia akan mendapat satu kebaikan. Sedangkan satu kebaikan dilipatkan kepada sepuluh semisalnya. Aku tidak mengatakan alif lâm mîm satu huruf. <br/> Akan tetapi, alif satu huruf, lâm satu huruf, dan mîm satu huruf,” (HR. At-Tirmidzi). </p>
        </div>
    </div>
  </div>

  <div class="search">
        <input
            type="number"
            v-model="inputnomor"
            class="input"
            placeholder="surah keberapa?"
        />
        <button @click="lihat" class="btn">Cari</button>
    </div>

    <div class="surah">
        <div class="judull">
            <h1 v-if="namaSurah" class="judul">{{"Surah " + namaSurah.name_simple }}</h1>
        </div>

        <div class="suara">
            <p v-if="audio">
                <audio controls class="suaraa">
                    <source :src="audio.audio_url" type="audio/mpeg" />
                    Browser tidak mendukung element audio.
                </audio>
            </p>
        </div>
    </div>

    <section class="hasil">
        <div class="hasill">
            <ul class="lista">
                <li class="ayat" v-for="ayat in ayah" :key="ayat.id">
                    {{ ayat.text_uthmani }} {{ ayat.text }}
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import axios from "axios";

    export default {
        data() {
            return {
                ayah: [],
                audio: null,
                namaSurah: null,
                inputnomor: "",
            };
        },

        methods: {
            async lihat() {
                let nomor = this.inputnomor;
                let ayat = `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${nomor}`;
                let arti =
                    "https://api.quran.com/api/v4/quran/translations/134?chapter_number=" +
                    nomor;

                let judul = "https://api.quran.com/api/v4/chapters?language=en";
                let suara =
                    "https://api.quran.com/api/v4/chapter_recitations/2?language=en";

                if (nomor <= 0 || nomor > 114) {
                    alert("masukkan nomor dengan benar");
                } else {
                    const reqAyat = axios.get(ayat);
                    const reqArti = axios.get(arti);
                    const reqJudul = axios.get(judul);
                    const reqSuara = axios.get(suara);

                    axios.all([reqAyat, reqArti, reqJudul, reqSuara]).then(
                        axios.spread((...response) => {
                            const responseAyat = response[0];
                            const responseArti = response[1];
                            const responseJudul = response[2];
                            const responseSuara = response[3];

                            const a = responseAyat.data.verses;
                            const b = responseArti.data.translations;

                            const gabung = (a, b) => {
                                const res = [];

                                for (let i = 0; i < a.length + b.length; i++) {
                                    if (i % 2 === 0) {
                                        res.push(a[i / 2]);
                                    } else {
                                        res.push(b[(i - 1) / 2]);
                                    }
                                }
                                return res;
                            };

                            this.ayah = gabung(a, b);
                            this.audio =
                                responseSuara.data.audio_files[nomor - 1];
                            this.namaSurah =
                                responseJudul.data.chapters[nomor - 1];
                        })
                    );
                }
            },
        },
    };
</script>



<style>
@media (min-width: 1024px) {
  .isi {
    color: white;
  }
  .home {
    text-align: center;
    align-items: center;
  }
  .hadits1 {
    font-size: 24px;
    margin-top: 20px;
    text-align: center;
    align-items: center;
  }
    .container {
    font-size: 18px;
    line-height: 1.5;
    margin-top: 20px;
    text-align: center;
    align-items: center;
  }
  .search {
        display: flex;
        margin: 50px 0 0 0;
        flex-direction: row;
        justify-content: center;
    }

    .input {
        height: 30px;
        width: 500px;
        border: 1px solid #323232;
        color: rgb(44, 59, 221);
    }

    .input:hover {
        border: 1px solid #6d9581;
    }

    .btn {
        background-color: rgb(94, 140, 172);
        border: 1px solid #323232;
        height: 30px;
        font-size: 12px;
        color: black;
        border-radius: 5%;
    }

    .btn:hover {
        color: wheat;
    }

    .suaraa {
        width: 70%;
        height: 30px;
    }

    .suara {
        margin: 50px 0;
        text-align: center;
    }

    .judul {
        text-align: center;
        font-size: 70px;
        color: #6bc4ee;
        margin: 60px 0 0 30px;
    }

    .bismillah {
        text-align: center;
        font-size: 50px;
        color: #c0ccd3;
    }

    .ayat {
        color: #ffffff;
        list-style: none;
        margin: 0 200px 50px 200px;
    }

    .ayat:nth-child(odd) {
        text-align: right;
        font-size: 40px;
    }
    .ayat:nth-child(even) {
        text-align: left;
        font-size: 15px;
        color: #d0cfcd;
    }

    @media screen and (max-width: 400px) {
        .ayat:nth-child(odd) {
            font-size: 20px;
            margin-bottom: 20px;
            margin-right: 10px;
        }
        .ayat:nth-child(even) {
            font-size: 10px;
            margin: 20px;
        }
        .ayat {
            margin: 0;
        }
    }
}
</style>
