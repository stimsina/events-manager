<template>
    <div class="editEvent container" v-if="event">
        <h2 class="blue-text">Edit event</h2>
        <button class="btn grey darken-2 right" @click.prevent="goToHome">Go To Home</button>
        <form action="" @submit.prevent="updateEvent">
            <label for="eventName" class="green-text">Event Name *</label>
            <input type="text" name="eventName" id="" v-model="event.eventName" placeholder="name of the event">
            <label for="organiserName" class="green-text">Organised By</label>
            <input type="text" name="" id="" v-model="event.organiserName" >
            <label for="venueAddress" class="green-text">Venue Address *</label>
            <input type="text" name="" id="" v-model="event.venueAddress">
            <label for="" class="green-text">Members</label>
            <input type="text" name="" id="" v-model="event.memberName" placeholder="member1,member2,....">
            <label for="" class="green-text">Details :</label>
            <textarea name="" id="" cols="50" rows="40" class="details" v-model="event.details"></textarea>
            <p v-if="validationMessage" class="red-text">{{validationMessage}}</p>
            <button class="btn teal btn-large green">Update</button>
        </form>
    </div>
</template>

<script>
import fireStoreDb from '@/firebase/init'
export default {
    name:'EditEvent',
    data(){
        return{
            event:null,
            validationMessage:null

        }
    },
    methods:{
        goToHome(){
            this.$router.push('/')
        },
        updateEvent(){
          if(this.event.eventName&&this.event.venueAddress){

            fireStoreDb.collection('events').doc(this.$route.params.eventId).update({
                eventName:this.event.eventName,
                organiserName:this.event.organiserName,
                memberName:this.event.memberName,
                details:this.event.details,
                venueAddress:this.event.venueAddress,
            }).then(response=>{
                this.$router.push('/event-list')
            })
            .catch(err=>{
                console.log('error while saving event'+err)
            })
        }
        else{
            this.validationMessage='Please fill in all mandatory fields.'
        }

    }

    },
    created(){
        let dbRef=fireStoreDb.collection('events').where('eventId','==',this.$route.params.id)
        dbRef.get().then(snapshot=>{
            snapshot.forEach(element=>{
               this.event=element.data()
            })
        })
    }

}
</script>

<style scoped>
.editEvent textarea{
    height: 100px;
}
.editEvent label{
    font-size: 1.5em;
}

</style>
