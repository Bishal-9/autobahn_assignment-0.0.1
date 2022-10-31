import { useState } from "react"
import { Provider } from "react-redux"
import store from "./store"
import { Box, Button, Typography } from "@mui/material"
import Dashboard from "./pages/Dashboard"
import Notify from "./components/Notify"
import AddEditPost from "./components/AddEditPost"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [modalMode, setModalMode] = useState<"add" | "edit">("add")

  return (
    <Provider store={store}>
      <Notify />
      <AddEditPost open={showModal} mode={modalMode} onClose={() => setShowModal(false)} />

      <Box padding="30px">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography gutterBottom variant="h2" textAlign="center">
            Posts
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              setShowModal(true)
              setModalMode("add")
            }}
          >
            Add Post
          </Button>
        </Box>

        <Dashboard />
      </Box>
    </Provider>
  )
}

export default App
