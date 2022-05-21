import axios from 'axios'

export const signIn = (formData) =>
  axios.post('https://oracleblocksdapp.xyz/api/user/login', formData)

export const register = (formData) =>
  axios.post('https://oracleblocksdapp.xyz/api/user/create', formData)
