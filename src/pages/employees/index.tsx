import { Box, Button } from '@mui/material'
import { useState } from 'react'
import FormModal from '../../components/formModal'
import TableEmployees from '../../components/tableEmployees'

const Employees = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpenModal = () =>setIsOpen(true)
  const handleCloseModal = () =>setIsOpen(false)
  return (
    <div style={{width:'100%'}}>
      <FormModal open={isOpen} onClose={handleCloseModal}/>
      <Box sx={{display:'flex', margin:'64px 15%'}}>
        <Button sx={{width:'140px', height:'45px'}} variant="contained" onClick={handleOpenModal}>Adicionar +</Button>
      </Box>
      <Box sx={{display:'flex', margin:'64px 15%'}}>
          <TableEmployees/>
        </Box>
    </div>
  )
}

export default Employees