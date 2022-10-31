import { Alert, Snackbar } from "@mui/material"
import { removeError } from "../features/postSlice"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { useAppSelector } from "../hooks/useAppSelector"

const Notify = () => {
  const dispatch = useAppDispatch()
  const { error } = useAppSelector((state) => state.post)

  return (
    <Snackbar open={Boolean(error)}>
      <Alert severity="error" onClose={() => dispatch(removeError())}>
        {error}
      </Alert>
    </Snackbar>
  )
}

export default Notify
