<template>
  <div class="mainPanel container grey darken-2">
    <h2 class="center-align blue-text darken-4">Welcome To Events Manager</h2>
    <button class="btn teal  darken-2 create" @click.prevent="createNewEvent">Create New Event</button>
    <button class="btn teal  darken-2 view" @click.prevent="goToListPage">View All Events</button>
    <div class="newsDetails">
      <hr>
       <h5 class="blue-text center darken-4">Latest News From Sydney</h5><br>
       <div v-for="(news,index) in newsArticles" :key="index" v-if="index<4">
         <h6 class="green-text darken-3 center">{{news.title}}</h6>
         <p class="white-text">{{news.description}}</p>
       </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MainPanel',
  data () {
    return {
      newsArticles:[],
      newsUrl:'https://newsapi.org/v2/everything?' +
          'q=Sydney&' +
          'from=2018-12-08&' +
          'sortBy=popularity&' +
          'apiKey=cbd083e903f846829823b2b5ebd5bb34'
    }
  },
  methods:{
    goToListPage(){
      this.$router.push('/event-list')
    },
    createNewEvent(){
      this.$router.push('/create-event')
    }
  },
  created(){
    axios.get(this.newsUrl).then(response=>{
      console.log(response)
      this.newsArticles=response.data.articles
    }).catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>
.mainPanel{
  height: 750px;;
  margin-top: 30px;
}
.mainPanel h2{
  margin: 10px auto;
}

.mainPanel .create{
 margin-top: 40px;
 float: left;
}

.mainPanel .view{
 margin-top: 40px;
 float: right;
}

.mainPanel .newsDetails{
  margin-top:160px;
}


</style>
