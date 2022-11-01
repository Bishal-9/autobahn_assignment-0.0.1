import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './features/postSlice'
import modalReducer from './features/modalSlice'

const store = configureStore({
  reducer: {
    post: postsReducer,
    modal: modalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
