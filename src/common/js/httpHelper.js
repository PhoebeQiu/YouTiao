import axios from 'axios'

export const getByParams = async (url, params) => await axios.get(url, {
  params: {
    ...params
  }
})

export const post = async (url, params) => await axios.request({
  url: url,
  method: 'POST',
  data: params
})
