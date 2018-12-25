<template>
    <div class="createEvent container">
        <h2 class="blue-text">Create a new event</h2>
        <button class="btn grey darken-2 right" @click.prevent="goToHome">Go To Home</button>
        <form action="" @submit.prevent="saveEvent">
            <label for="eventName" class="green-text">Event Name *</label>
            <input type="text" name="eventName" id="" v-model="eventName" placeholder="name of the event">
            <label for="organiserName" class="green-text">Organised By </label>
            <input type="text" name="" id="" v-model="organiserName" >
            <label for="venueAddress" class="green-text">Venue Address *</label>
            <input type="text" name="" id="" v-model="venueAddress">
            <label for="" class="green-text">Members</label>
            <input type="text" name="" id="" v-model="memberName" placeholder="member1,member2,....">
            <label for="" class="green-text">Details :</label>
            <textarea name="" id="" cols="50" rows="40" class="details" v-model="details"></textarea>
            <p v-if="validationMessage" class="red-text">{{validationMessage}}</p>
            <button class="btn teal btn-large green">Save</button>
        </form>
    </div>
</template>

<script>
import fireStoreDb from '@/firebase/init'
export default {
    name:'NewEvent',
    data(){
        return{
            eventName:null,
            organiserName:null,
            memberName:null,
            details:null,
            venueAddress:null,
            validationMessage:null,
            id:1,

        }
    },
    methods:{
        goToHome(){
            this.$router.push('/')
        },
        saveEvent(){
            if(this.eventName&&this.venueAddress){

                fireStoreDb.collection('events').add({
                    eventName:this.eventName,
                    organiserName:this.organiserName,
                    memberName:this.memberName,
                    details:this.details,
                    venueAddress:this.venueAddress,
                    eventId:this.id
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
        var allEvents=fireStoreDb.collection('events').get().then(snapshot=>{
        snapshot.forEach(element => {
                this.id+=1      
                });
            })

    }
    
}

</script>

<style scoped>
.createEvent textarea{
    height: 100px;
}
.createEvent label{
    font-size: 1.5em;
}

</style>
