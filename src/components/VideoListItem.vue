<template>
  <div class="card text-right pe-auto" v-if="video" style="margin-bottom:40px;width: 18rem;">
    <div class="card-body" @click="onVideoSelect">
      <img class="card-img-top" :src="video.snippet.thumbnails.high.url" alt />
      <h3 class="card-title">{{ video.snippet.title }}</h3>
      <p class="list-group-item">{{ video.snippet.description }}</p>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Item } from "../apiResponse"
export default defineComponent({
  props: {
    video: Object as PropType<Item>,
  },
  inject: ['selectVideo'],
  emits:{
    onVideoSelected:(video:Item)=>{
      return !!video
    }
  },
  methods: {
    onVideoSelect() {
      this.$emit('onVideoSelected', this.video!)
    }
  },
})
</script>






