'use client'

import { Box, useTheme } from '@mui/material'

const Footer = () => {
  const theme = useTheme()

  return (
    <Box
      component='footer'
      className='layout-footer'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        backgroundColor: theme.palette.background.default,
        width: '100%',
        paddingLeft: theme.spacing(6)
      }}>
      <Box
        className='footer-content-container'
        sx={{
          width: '100%',
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          padding: theme.spacing(4, 6),
          maxWidth: 1440
        }}>
        By Joey @ 2025
      </Box>
    </Box>
  )
}

export default Footer
