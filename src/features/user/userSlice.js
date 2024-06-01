import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import customFetch from '../../utils/axios'
import { addUserToLocalStorage } from '../../utils/localStorage'

const initialState = {
  isLoading: false,
  user: null,
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post('/auth/testingRegister', user)

      console.log(resp)
    } catch (error) {
      console.log(error.response)
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    console.log(`Login User : ${user}`)
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const { user } = action.payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
        toast.success(`Hello there ${user.name}`)
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      }) // end registerUser
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user } = action.payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
        toast.success(`Welcome back ${user.name}`)
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      }) // end login user
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const { user } = action.payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
        toast.success(`User Updated!`)
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false
        toast.error(action.payload)
      })
      .addCase(clearStore.rejected, () => {
        toast.error('There was an error...')
      })
  },
})

export default userSlice.reducer
