<template>
  <div v-if="onVideoSelected" class="position-absolute end-0">
    <div v-for="video in videos">
      <video-list-item
        :video="video"
        :key="video.id.videoId"
        @onVideoSelected="onVideoSelected"
      />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { VideoItem } from "../api/apiResponse"
import VideoListItem from "./VideoListItem.vue"
export default defineComponent({
  props: {
    videos: {
      type: Object as PropType<VideoItem[]>,
      required: true
    },
    onVideoSelected: {
      type: Function as PropType<(video: VideoItem) => void>,
      reequired: true  
    }
  },
  components: {
    VideoListItem
  }
})
</script>


