import { Box, Typography } from '@mui/material'
import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

function Aboutus() {
  return (
    <Layout>
     <Box>
       <Typography variant="h4" sx={{fontWeight:"bold"}}>About Us Page !</Typography>
       <Link to="/">Home</Link>
     </Box>
    </Layout>
  )
}

export default Aboutus