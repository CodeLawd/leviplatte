import axios from 'axios'

const API = axios.create({ baseUrl: 'https://oracleblocksdapp.xyz' })

export const signIn = (formData) => API.post('/api/user/login', formData)
