<template>
  <div class="card text-right pe-auto"  style="margin-bottom:40px;width: 18rem;">
    <div class="card-body" @click="onVideoSelect">
      <img class="card-img-top" :src="video.snippet.thumbnails.high.url" alt />
      <h3 class="card-title">{{ video.snippet.title }}</h3>
      <p class="list-group-item">{{ video.snippet.description }}</p>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { VideoItem } from "../api/apiResponse"
export default defineComponent({
  props: {
    video:{
      type: Object as PropType<VideoItem>,
      required:true,
    },
  },
  inject: ['selectVideo'],
  emits:{
    onVideoSelected:(video:VideoItem)=>{
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






