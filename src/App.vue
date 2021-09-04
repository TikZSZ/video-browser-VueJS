<template>
  <div class="container position-relative">
    Hi there!
    <SearchBar @termChange="onChange"></SearchBar>
    <SingleVideo :video="selectedVideo"></SingleVideo>
    <VideoList :videos="videos" ref="video-list" :onVideoSelected="selectVideo"></VideoList>
  </div>
</template>



<script lang="ts">
interface Data {
  videos: VideoItem[] | undefined,
  selectedVideo: VideoItem | undefined
}

export default defineComponent({
  name: "app",
  data(): Data {
    return {
      videos: undefined,
      selectedVideo: undefined
    };
  },
  methods: {
    async onChange(value: string) {
      const res = await api.get<YouTubeApiResponse>("search", {
        params: {
          q: value,
        },
      });
      this.videos = res.data.items;
      this.selectVideo(res.data.items[0])
    },
    selectVideo(video: VideoItem) {
      this.selectedVideo = video
    }
  },
  provide() {
    return {
      selectVideo: this.selectVideo
    }
  },
});
</script>

<script lang="ts" setup>
import { defineComponent } from "vue";
import { api } from "./api";
import { VideoItem, YouTubeApiResponse } from "./apiResponse";
import VideoList from "./components/VideoList.vue";
import SingleVideo from "./components/SingleVideo.vue";
import SearchBar from "./components/SearchBar.vue";
</script> 