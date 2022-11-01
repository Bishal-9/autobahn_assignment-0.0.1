import { Box, Button, Typography } from "@mui/material"
import Dashboard from "./pages/Dashboard"
import Notify from "./components/Notify"
import AddEditPost from "./components/AddEditPost"
import { useAppDispatch } from './hooks/useAppDispatch'
import { openModal } from './features/modalSlice'

function App() {

  const dispatch = useAppDispatch()

  return (
    <>
      <Notify />
      <AddEditPost />

      <Box padding="30px">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography gutterBottom variant="h2" textAlign="center">
            Posts
          </Typography>
          <Button
            variant="contained"
            onClick={() => dispatch(openModal({ mode: "Add" }))}
          >
            Add Post
          </Button>
        </Box>

        <Dashboard />
      </Box>
    </>
  )
}

export default App
