import { useEffect } from "react"
import { Box, CircularProgress, Typography } from "@mui/material"
import SinglePost from "../components/SinglePost"
import { getAllPosts } from '../features/postSlice'
import { useAppDispatch } from "../hooks/useAppDispatch"
import { useAppSelector } from "../hooks/useAppSelector"

const Dashboard = () => {

  const dispatch = useAppDispatch()
  const { list, loading } = useAppSelector((state) => state.post)

  useEffect(() => {
    if (dispatch) {
      dispatch(getAllPosts())
    }
  }, [dispatch])

  return (
    <Box>
      {loading ? (
        <Box padding="30px" display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : list.length > 0 ? (
        list.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))
      ) : (
        <Box padding="30px">
          <Typography variant="h5" textAlign='center'>No posts found.</Typography>
        </Box>
      )}
    </Box>
  )
}

export default Dashboard
