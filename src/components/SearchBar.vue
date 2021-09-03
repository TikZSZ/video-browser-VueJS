<template>
  <div>
    <form class="form form-group" @submit.prevent="$emit('termChange', !term ? '' : term)">
      <input class="form-control" type="text" v-model="term" />
      <button class="btn btn-primary mt-3 mb-3">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import App from '../App.vue'
export default defineComponent({
  name: "SearchBar",
  data() {
    return { term: "" };
  },
  emits:{
    termChange:(term:string)=>{
      return term!==''
    }
  },
  methods:{
    k(){
      
    }
  }
});
</script>

<style>
</style>


