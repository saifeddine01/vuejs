<template>
<div>
    <h2>Header</h2>  
   
    <h2>{{tasksList}}</h2>  
    <hr>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "Header", 
    computed: {
        ...mapGetters('tasks',['tasksList'])
    }    
}
</script>
 <style>
 hr {
     background: red;
     width: 500px;
     height: 4px;

 }
 
 </style>
