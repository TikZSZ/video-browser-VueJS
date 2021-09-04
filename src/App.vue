<template>
  <div class="container position-relative">
    Hi there!
    <SearchBar @termChange="onChange" />
    <SingleVideo v-if="selectedVideo" :video="selectedVideo" />
    <VideoList v-if="videos" :videos="videos" :onVideoSelected="selectVideo" ref="video-list" />
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { api } from "./api/api";
import { VideoItem, YouTubeApiResponse } from "./api/apiResponse";
import VideoList from "./components/VideoList.vue";
import SingleVideo from "./components/SingleVideo.vue";
import SearchBar from "./components/SearchBar.vue";

interface Data {
  videos: VideoItem[] | null,
  selectedVideo: VideoItem | null
}

export default defineComponent({
  name: "app",
  data(): Data {
    return {
      videos: null,
      selectedVideo: null
    };
  },
  components: {
    VideoList,
    SingleVideo,
    SearchBar
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
