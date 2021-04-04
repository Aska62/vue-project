<template>
  <div class="home">
    <Header class="header" />
    <section class="main">
      <div class='article-container' v-for='article in articles' :key='article'>
        <p class='article'>{{ article.abstract }}</p>
      </div>
    </section>
    <TopBtn />
  </div>
</template>

<script>
import axios from "axios"
import Header from '../components/Header'
import TopBtn from '../components/TopBtn'

export default {
  name: 'Home',
  components: {
    Header,
    TopBtn,
  },
  data() {
    return {
      articles: [],
      page: 1,
    }
  },
  methods: {
    async getInitArticles() {
      await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sports&api-key=ShKb1Y669XpvDsSYZzvSAX4P55nOxnZQ&page=0`).then((response) => {
        this.articles = response.data.response.docs;
      })
    },
		async getArticles() {
      await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sports&api-key=ShKb1Y669XpvDsSYZzvSAX4P55nOxnZQ&page=${this.page}`).then((response) => {
        const continuousRes = response.data.response.docs;
        continuousRes.forEach((contRes) => {
          this.articles.push(contRes);
        });
      })
      this.page++;
      console.log(`count up to ${this.page}`)
		},
    loadNext() {
      window.onscroll = () => {
        const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.getArticles()
        }
      }
    },
	},
  beforeMount() {
    this.getInitArticles();
  },
  mounted() {
    this.loadNext();
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

  .article-storage {
    width: 90%;
  }

  .article {
    width: 90%;
    height: 80px;
    margin: 20px auto 50px auto;
    background-color: pink;
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
