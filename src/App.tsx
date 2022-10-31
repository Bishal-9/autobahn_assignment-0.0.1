import { Box, Typography } from '@mui/material'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Box padding='30px'>
      <Typography gutterBottom variant='h2' textAlign='center'>Posts</Typography>

      <Dashboard />
    </Box>
  )
}

export default App
