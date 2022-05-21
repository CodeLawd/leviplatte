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

export const register = createAsyncThunk(
  'auth/register',
  async ({ formData, router, toast }, { rejectWithValue }) => {
    try {
      const response = await api.register(formData)
      toast.success('Registration Successfully')
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

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
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
    [register.pending]: (state) => {
      state.loading = true
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }))
      state.user = action.payload
    },
    [register.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload[0]
    },
  },
})

export const { setUser } = authSlice.actions

export default authSlice.reducer
