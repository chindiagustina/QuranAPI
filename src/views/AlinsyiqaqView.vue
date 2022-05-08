<template>
  <div class="Alinsyiqaq">
  
  <div class="surah">
    <h1>Al-Insyiqaq<span>(Berpecah Belah)</span></h1>
    <div class="row">
      <div class="column left"> 
        <ol>
            <li v-for="arti in translations " :key="arti.id">
              {{arti.text}}
            </li>
          </ol>
        
          </div>
      <div class="column right"> 
         <ol>
            <li v-for="verse in verses" :key="verse.id">
              {{verse.text_uthmani}}
            </li>
          </ol>  
                 </div>
          </div>
    </div>
    </div>
        
         

</template>

<script>

import axios from 'axios'
import "../style/surah.css"

export default {
name:'AlinshiqaqView',
   components:{
    
  },
  data(){
    return{
      verses: [],
      translations : [],
      audio_files:[],
    };
  },
  async mounted(){
    
    let resultVerses = await axios.get('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=84');
    this.verses = resultVerses.data.verses

    let resultArti = await axios.get('https://api.quran.com/api/v4/quran/translations/134?chapter_number=84')
    this.translations = resultArti.data.translations

    let resultAudio = await axios.get('https://api.quran.com/api/v4/chapter_recitations/7/84')
    this.audio_files = resultAudio.data.audio_file
},
methods:{
   playSound (sound) {
     if (sound) {
    var audio = new Audio(sound);
    audio.play();
  }
  
    }
}
}
</script>

