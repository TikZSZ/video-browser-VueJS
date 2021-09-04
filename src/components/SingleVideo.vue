<template>
  <div class="position-absolute" v-if="video">
    <iframe
      id="i"
      :width="width"
      :height="height"
      ref="single"
      :src="`https://www.youtube.com/embed/${video.id.videoId}`"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  DefineComponent,
} from "vue";
import VideoList from "./VideoList.vue";
import { VideoItem } from "../api/apiResponse";
export default defineComponent({
  data() {
    return {
      width: "560",
      height: "315"
    }
  },
  props: {
    video: Object as PropType<VideoItem>,
  },
  methods: {
    adjust() {
      if (!this.$refs['single']) {
        return
      }
      const videoList = (this.$parent!.$refs["video-list"] as DefineComponent<typeof VideoList>).$el as HTMLElement

      const app = (this.$parent!.$el as HTMLElement)

      this.width = ((app.clientWidth - videoList.clientWidth)).toString()
      this.height = (videoList.scrollHeight / 6).toString()
    }
  },
  created() {
    window.addEventListener('resize', this.adjust)
  },
  destroyed() {
    window.removeEventListener('resize', this.adjust)
  },
  updated() {
    this.adjust()
  }
});
</script>

