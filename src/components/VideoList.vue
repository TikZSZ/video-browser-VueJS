<template>
  <div v-if="videos && onVideoSelected" class="position-absolute end-0">
    <div v-for="video in videos" v-bind:key="video.id.videoId">
      <video-list-item
        :video="video"
        v-bind:key="video.id.videoId"
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
    videos: Object as PropType<VideoItem[]>,
    onVideoSelected:Function as PropType<(video:VideoItem)=>void>
  },
  components: {
    VideoListItem
  }
})
</script>


