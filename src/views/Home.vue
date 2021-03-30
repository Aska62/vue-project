<template>
  <div class="home">
    <Header class="header" />
    <section class="main">
      <DisplayBtn @click="getInitialPhotos" class="display-btn"/>
      <ul class="images">
        <li v-for='photo in photos' :key='photo' class="image-container">
          <img :src="photo.urls.small" class="unsplash-image">
        </li>
      </ul>
    </section>
    <TopBtn />
  </div>
</template>

<script>
import axios from "axios"
import Header from '../components/Header'
import DisplayBtn from '../components/DisplayBtn'
import TopBtn from '../components/TopBtn'

export default {
  name: 'Home',
  components: {
    Header,
    DisplayBtn,
    TopBtn
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
	@media screen and (min-width: 768px) {
    .header {
      padding: 0 50px;
      max-width: 1100px;
      height: 120px;
    }
    .main {
      max-width: 1100px;
    }
    .image-container {
      max-width: 700px;
    }
    .images {
      max-width: 800px;
      margin: 20px auto 0 auto;
    }
  }

  @media screen and (max-width: 767px) {
    .header {
      padding: 0 100px;
      max-width: 700px;
      height: fit-content;
      min-height: 120px;
    }
    .main {
      max-width: 700px;
    }
    .image-container {
      max-width: 500px;
    }
    .images {
      max-width: 600px;
      margin: 5px auto 0 auto;
    }
  }

  .home {
    width: 100vw;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 10px;
    margin: 0;
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }

  .display-btn {
    background-color: palevioletred;
    color: white;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    margin: 5px auto 10px auto;
  }

  .display-btn:hover {
    cursor: pointer;
    color: yellowgreen;
  }

  .display-btn:focus {
    outline: none;
  }

  .main {
    width: 100%;
    margin: 120px 0 15px 0;
  }

  .images {
    margin: 20px auto 20px auto;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    width:90%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 35px auto;
  }

  .unsplash-image {
    width: 90%;
    max-width: 600px;
    margin: 0;
  }

</style>
