import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api'

export const login = createAsyncThunk(
  'auth/login',
  async ({ formData, router, toast }) => {
    try {
      const response = await api.signIn(formData)
      toast.success('Login Successfully')
      router.push('/')
      return response.data
    } catch (err) {
      console.log(err)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: '',
    loading: false,
  },

  reducers: {
    [login.pending]: (state) => {
      state.loading = true
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }))
      state.user = action.payload
    },
    [login.rejected]: (state, action) => {
      state.loading = false
      console.log(action.payload)
      state.error = action.payload.message
    },
  },
})

export default authSlice.reducer
