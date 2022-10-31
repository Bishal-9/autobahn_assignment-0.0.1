import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './features/postSlice'

const store = configureStore({
  reducer: {
    post: postsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
