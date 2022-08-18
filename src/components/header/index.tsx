import { Box, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import LogoSeven from '../../assets/images/logoSeven.png'

const Header = () => {
  return (
    <Container sx={{
      height: 50,
      width: 1,
      bgcolor:'red',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
      }}>
        <Typography>
          Teste Tecnico - Victor Elias
        </Typography>
      <Box 
      component='img'
        sx={{
          width: 1/5
        }}
       src={LogoSeven} alt="LogoMarca empresa Seven Proteção" />
    </Container>
    // <header>
    // </header>
  )
}

export default Header