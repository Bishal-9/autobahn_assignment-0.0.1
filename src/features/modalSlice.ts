import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Post } from '../types/Post'

interface ModalSliceStore {
  open: boolean
  mode: "Add" | "Edit"
  post?: Post
}

const initialState: ModalSliceStore = {
  open: false,
  mode: "Add",
  post: undefined,
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ mode: "Add" | "Edit"; post?: Post }>) => {
      state.open = true
      state.mode = action.payload.mode
      state.post = action.payload.post
    },
    closeModal: (state) => {
      state.open = false
      state.mode = "Add"
      state.post = undefined
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
