import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function Layout({children}) {
  return (
    <Container>
        <Box>
        <Typography variant="h4" sx={{fontWeight:"bold"}}>Header</Typography>
        </Box>
        <Box>
            {children}
        </Box>
        <Box>
        <Typography variant="h4" sx={{fontWeight:"bold"}}>Footer</Typography>
        </Box>
    </Container>
  )
}

export default Layout