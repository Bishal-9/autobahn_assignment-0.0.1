import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import { useForm } from "react-hook-form"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { useAppSelector } from "../hooks/useAppSelector"
import { addPost } from "../features/postSlice"

interface AddEditPostProps {
  open: boolean
  mode: "add" | "edit"
  onClose: () => void
}

interface PostForm {
  userId: number
  title: string
  body: string
}

const AddEditPost = ({ open, mode, onClose }: AddEditPostProps) => {
  const dispatch = useAppDispatch()
  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<PostForm>()
  const { loading } = useAppSelector((state) => state.post)

  const onSubmit = handleSubmit((data) => {
    dispatch(addPost(data))
    reset()
    onClose()
  })

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle component='div'>
        {mode === "add" ? (
          <Typography variant="h6" textAlign="center">Add Post</Typography>
        ) : (
          <Typography variant="h6" textAlign="center">Edit Post</Typography>
        )}
      </DialogTitle>
      <Divider />

      <DialogContent>
        <FormControl
          component="form"
          sx={{
            width: "400px",
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {/* User ID */}
          <FormControl>
            <TextField
              size="small"
              label="User ID"
              type="number"
              error={!!errors.userId}
              {...register("userId", { min: 1, max: 10, required: true })}
            />
            {errors.userId && (
              <FormHelperText error>
                {errors.userId.type === "required" && "User ID is required"}
                {errors.userId.type === "min" &&
                  "User ID must be greater than 0"}
                {errors.userId.type === "max" && "User ID must be less than 11"}
              </FormHelperText>
            )}
          </FormControl>

          {/* Title */}
          <FormControl>
            <TextField
              size="small"
              label="Title"
              error={!!errors.title}
              {...register("title", { required: true })}
            />
            {errors.title && (
              <FormHelperText error>
                {errors.title.type === "required" && "Title is required"}
              </FormHelperText>
            )}
          </FormControl>

          {/* Body */}
          <FormControl>
            <TextField
              multiline
              minRows={4}
              maxRows={8}
              size="small"
              label="Body"
              error={!!errors.body}
              helperText={errors.body?.message}
              {...register("body", { required: true })}
            />
            {errors.body && (
              <FormHelperText error>
                {errors.body.type === "required" && "Body is required"}
              </FormHelperText>
            )}
          </FormControl>
        </FormControl>
      </DialogContent>
      <Divider />

      <DialogActions>
        {loading ? (
          <Stack width="100%" alignItems="center">
            <CircularProgress />
          </Stack>
        ) : (
          <>
            <Button
              type="reset"
              onClick={() => {
                reset()
                onClose()
              }}
            >
              Cancel
            </Button>
            <Button variant="contained" type="submit" onClick={onSubmit}>
              {mode === "add" ? "Add Post" : "Edit Post"}
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default AddEditPost
