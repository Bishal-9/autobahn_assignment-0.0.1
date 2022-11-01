import { Box, Button } from "@mui/material"
import { Post } from "../types/Post"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { openModal } from "../features/modalSlice"

interface SinglePostProps {
  post: Post
}

const SinglePost = ({ post }: SinglePostProps) => {

  const dispatch = useAppDispatch()

  return (
    <Box
      key={post.id}
      padding="30px"
      border="1px solid #ccc"
      borderRadius="5px"
      marginBottom="30px"
    >
      <Box
        display="flex"
        marginBottom="10px"
        alignItems="center"
        justifyContent="space-between"
      >
        <strong>{post.title}</strong>

        <Button
          onClick={() => dispatch(openModal({ mode: "Edit", post: post }))}
        >
          Edit
        </Button>
      </Box>
      <Box>
        {post.body}
        <Box marginTop="10px">
          <a
            href={`https://jsonplaceholder.typicode.com/posts/${post.id}`}
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </Box>
      </Box>
    </Box>
  )
}

export default SinglePost
