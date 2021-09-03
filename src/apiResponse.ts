export interface Item{
  "kind": string,
  "etag": string,
  "id": {
    "kind": string,
    "videoId": string
  },
  "snippet": {
    "publishedAt":string
    "channelId":string
    "title":string
    "description":string,
    "thumbnails":{
      "default":{
        "url":string
        "width":string
        "height":string
      },
      "medium":{
        "url":string
        "width":string
        "height":string
      },
      "high":{
        "url":string
        "width":string
        "height":string
      }
    },
    "channelTitle":string
    "liveBroadcastContent":string
    "publishTime":string
  }
}

export interface ApiResponse{
  items:Item[]
}