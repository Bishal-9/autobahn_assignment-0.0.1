import { Box } from '@mui/material'
import { Post } from '../types/Post'

interface SinglePostProps {
  post: Post
}

const SinglePost = ({ post }: SinglePostProps) => {
  return (
    <Box
      key={post.id}
      padding="30px"
      border="1px solid #ccc"
      borderRadius="5px"
      marginBottom="30px"
    >
      <Box marginBottom="10px">
        <strong>{post.title}</strong>
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
