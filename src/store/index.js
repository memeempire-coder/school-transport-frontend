import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice.js'
import uiReducer from './slices/uiSlice.js'

export default configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer
  }
})
