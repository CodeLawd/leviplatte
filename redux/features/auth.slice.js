import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api'

export const login = createAsyncThunk(
  'auth/login',
  async ({ formData, router, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signIn(formData)
      toast.success('Login Successfully')
      router.push('/')
      return response.data
    } catch (err) {
      return rejectWithValue(err.response.data)
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

  extraReducers: {
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
      state.error = action.payload[0]
    },
  },
})

export default authSlice.reducer
