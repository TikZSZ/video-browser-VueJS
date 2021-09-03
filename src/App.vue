<template>
  <div class="container position-relative" id="root" ref="app">
    Hi there!
    <search-bar @termChange="onChange" />
    <single-video :video="selectedVideo" />
    <video-list :videos="videos" ref="video-list" :onVideoSelected="selectVideo" />
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "./components/SearchBar.vue";
import { api } from "./api";
import { Item, ApiResponse } from "./apiResponse";
import VideoList from "./components/VideoList.vue";
import SingleVideo from "./components/SingleVideo.vue";

interface Data {
  videos: Item[] | undefined,
  selectedVideo: Item | undefined
}

export default defineComponent({
  name: "app",
  components: {
    SearchBar,
    VideoList,
    SingleVideo,
  },
  data(): Data {
    return {
      videos: undefined,
      selectedVideo: undefined
    };
  },
  methods: {
    async onChange(value: string) {
      const res = await api.get<ApiResponse>("search", {
        params: {
          q: value,
        },
      });
      this.videos = res.data.items;
      this.selectVideo(res.data.items[0])
    },
    selectVideo(video: Item) {
      this.selectedVideo = video
    }
  },
  provide() {
    return {
      selectVideo: this.selectVideo
    }
  }
});
</script>