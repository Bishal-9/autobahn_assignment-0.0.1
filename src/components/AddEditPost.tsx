import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material"

interface AddEditPostProps {
  open: boolean
  mode: "add" | "edit"
  onClose: () => void
}

const AddEditPost = ({ open, mode, onClose }: AddEditPostProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{mode === "add" ? "Add Post" : "Edit Post"}</DialogTitle>
      <Divider />

      <DialogContent></DialogContent>
      <Divider />

      <DialogActions>
        <Button
          
        >Cancel</Button>
        <Button
          variant="contained"
        >
          {mode === "add" ? "Add Post" : "Edit Post"}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddEditPost
