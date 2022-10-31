import { useEffect, useState } from "react"
import { Box, CircularProgress, Typography } from "@mui/material"
import { Post } from "../types/Post"
import SinglePost from "../components/SinglePost"

const Dashboard = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")

      if (response?.ok) {
        const data = await response.json()
        setPosts(data)
      }
    } catch (error) {
      console.log("Fetch posts error: ", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box>
      {loading ? (
        <Box padding="30px" display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : posts.length > 0 ? (
        posts.map((post) => (
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
