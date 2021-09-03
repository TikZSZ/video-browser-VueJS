import axios from 'axios'
import {KEY} from "../env"

export const api = axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:"snippet",
    maxResults:"5",
    key:KEY,
  }
})