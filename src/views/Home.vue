<template>
  <div class="home">
    <Header />
    <button @click="getInitialPhotos" type="button" class="search-btn">
      Display
    </button>
    <ul>
      <li v-for='photo in photos' :key='photo' class="image-container">
        <img :src="photo.urls.small" class="unsplash-image">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
import Header from '../components/Header'

export default {
  name: 'Home',
  components: {
    Header
  },
  data() {
    return {
      photos: [],
    }
  },
  methods: {
    getInitialPhotos() {
      console.log('get first 10 pics!')
      axios.get(`https://api.unsplash.com/search/photos?query=watermelon&X-Total=10&client_id=Ybgq8bbwnKPDee6l1nHN83TC49LyJcIWorBSiHk7ofY`).then((response) => {
        this.photos = response.data.results;
      })
    },
    getNextPhotos() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          axios.get(`https://api.unsplash.com/search/photos?query=watermelon&X-Total=10&client_id=Ybgq8bbwnKPDee6l1nHN83TC49LyJcIWorBSiHk7ofY`).then(response => {
            const newResult = response.data.results;
            console.log(newResult)
            newResult.forEach((newResult)=> {
              this.photos.push(newResult);
            });
          });
        }
      }
    }
  },
  beforMount() {
    this.getInitialPhotos();
  },
  mounted() {
    this.getNextPhotos();
  }
}
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .search-btn {
    background-color: palevioletred;
    color: white;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    margin: 5px auto 10px auto;
  }

  .search-btn:hover {
    cursor: pointer;
    color: yellowgreen;
  }

  .search-btn:focus {
    outline: none;
  }

  .image-container {
    width:90%;
    max-width: 700px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 35px auto;
  }

  .unsplash-image {
    width: 100%;
    max-width: 600px;
    margin: 0;
  }

  .credit {
    margin: 0;
    font-size: 16px;
    line-height: 1.3;
  }
</style>
