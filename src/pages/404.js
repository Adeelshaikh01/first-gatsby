import * as React from "react"
import { Link } from "gatsby"
import { Box, Typography } from "@mui/material"

// markup
const NotFoundPage = () => {
  return (
    <Box sx={{p:10}}>
    <Typography variant="h3" fontWeight="bold" sx={{mb:5}}>Page Not Found</Typography>
        {/* <Link to="/">Go home</Link> */}
        <Typography component={Link} to="/" sx={{textDecoration:"none",color:"red"}}>Go Home</Typography>
    </Box>
  )
}

export default NotFoundPage
