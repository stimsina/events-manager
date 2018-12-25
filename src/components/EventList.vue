<template>
<div class="eventList container">
        <button class="btn grey darken-2 right" @click.prevent="goToHome">Go To Home</button>

    <h2 class="green-text">Events List</h2>
    <div class="eventsDiv card" v-for="event in allEvents" :key="event.id">
        <div class="card-content grey">
            <router-link :to="{name:'EditEvent',params:{eventId:event.id,id:event.eventId}}">Event Title : <span class="white-text">{{event.eventName}}</span>&nbsp;&nbsp;&nbsp;Address : 
            <span class="address white-text">{{event.venueAddress}}</span><i @click.prevent="deleteEvent(event.id)" class="material-icons right white">delete</i></router-link>        
        </div>
    </div>
</div>
    
</template>

<script>
import fireBaseDb from '@/firebase/init'
export default {
    name:'EventList',
    data(){
        return{
            allEvents:[]
        }
    },
    methods:{
        goToHome(){
            this.$router.push('/')
        },
        deleteEvent(id){
            fireBaseDb.collection('events').doc(id).delete().then(()=>{
                this.allEvents=this.allEvents.filter(event=>{
                    return event.id!=id
                })
            })
        }
    }
    ,created(){
        fireBaseDb.collection('events').get().then(snapshot=>{
            snapshot.forEach(element => {
                var event=element.data();
                event.id=element.id
                this.allEvents.push(event)
            });
        })
    },

}
</script>

<style scoped>

</style>
