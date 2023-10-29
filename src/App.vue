<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      fafssafa
    </a> -->
    <input @change="onFileChange" ref="fileInput" type="file" />
    <!-- <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      
    </a> -->
  </div>
  <img style="max-width: 50px; max-height: 50px;" v-for="img in imagesUrl" :src="prepareImage(img)" />
  <HelloWorld msg="Vite + Vue" />
</template>

<script>
export default {
  data() {
    return {
      imagesUrl: []
    }
  },
  mounted() {
    const images = localStorage.getItem('wallpaper');

    if (images) {
      this.imagesUrl = JSON.parse(images);
    }
    
  },
  methods: {
    onFileChange(event) {
      let files = event.target.files || event.dataTransfer.files;
      if (!files.length) {
        return;
      }

      this.saveFilesToLocalStorage(files);

      // doSomethingWithTheFile(files[0]);
      // console.log(files);
    },
    saveFilesToLocalStorage(files) {
      for (const file of files) {
        // console.log(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');

          let imagesStr = localStorage.getItem('wallpaper');

          let imagesArray = []
          if (imagesStr) {
            imagesArray = JSON.parse(imagesStr);
          }

          imagesArray.push(base64String);

          localStorage.setItem('wallpaper', JSON.stringify(imagesArray));
          this.imagesUrl = imagesArray;
        };
        reader.readAsDataURL(file);
      }
    },
    prepareImage(imgBaseString) {
      return `data:image/png;base64,${imgBaseString}`;
    }
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
