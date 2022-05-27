import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '100px' }}>
            <CircularProgress />
        </Box>
    )
}

export default Loading
