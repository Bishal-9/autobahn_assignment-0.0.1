import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Post } from "../types/Post"

interface PostSliceStore {
  list: Post[]
  loading: boolean
  error: string | null
}

const initialState: PostSliceStore = {
  list: [],
  loading: false,
  error: null,
}

export const getAllPosts = createAsyncThunk("post/getAllPosts", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!response.ok) {
      throw new Error("Something went wrong!")
    }
    const data = await response.json()
    return data
  } catch (error) {
    return rejectWithValue("Cannot get posts.")
  }
})

export const addPost = createAsyncThunk("post/addPost", async (post: Omit<Post, "id">, { rejectWithValue }) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    if (!response.ok) {
      throw new Error("Something went wrong!")
    }
    const data = await response.json()
    return data
  } catch (error) {
    return rejectWithValue("Cannot add post.")
  }
})

export const editPost = createAsyncThunk("post/editPost", async (post: Post, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    if (!response.ok) {
      throw new Error("Something went wrong!")
    }
    const data = await response.json()
    return data
  } catch (error) {
    return rejectWithValue("Cannot edit post.")
  }
})

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchPosts: (state) => {
      state.loading = true
    },
    fetchPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.list = action.payload
      state.loading = false
      state.error = null
    },
    fetchPostsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    removeError: (state) => {
      state.error = null
    }
  },
  extraReducers: {
    [getAllPosts.pending.type]: (state) => {
      state.loading = true
    },
    [getAllPosts.fulfilled.type]: (state, action: PayloadAction<Post[]>) => {
      state.list = action.payload
      state.loading = false
      state.error = null
    },
    [getAllPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    [addPost.pending.type]: (state) => {
      state.loading = true
    },
    [addPost.fulfilled.type]: (state, action: PayloadAction<Post>) => {
      state.list[100] = action.payload
      state.loading = false
      state.error = null
    },
    [addPost.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    [editPost.pending.type]: (state) => {
      state.loading = true
    },
    [editPost.fulfilled.type]: (state, action: PayloadAction<Post>) => {
      const index = state.list.findIndex((post) => post.id === action.payload.id)
      state.list[index] = action.payload
      state.loading = false
      state.error = null
    },
    [editPost.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    }
  },
})

export const { fetchPosts, fetchPostsSuccess, fetchPostsFailure, removeError } =
  postSlice.actions

export default postSlice.reducer
