import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tinder-clone-aspire.herokuapp.com/'
})

export default instance;