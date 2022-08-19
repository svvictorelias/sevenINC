import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import MenuItem from '@mui/material/MenuItem';
import TableContainer from '@mui/material/TableContainer';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeIcon from '@mui/icons-material/Mode';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useContext, useState} from 'react';
import { MainContext } from '../../Provider';
import FormModal from '../formModal';

const TableEmployees = () => {
  const { users, setUsers } = useContext(MainContext);
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [userData, setUserData] = useState([])
  const handleOpenModal = () =>setIsOpen(true)
  const handleCloseModal = () =>setIsOpen(false)

  const columns = [
    { id: 'nome', label: 'Nome', minWidth: 150 },
    { id: 'email', label: 'E-mail', minWidth: 150 },
    { id: 'telefone', label: 'Telefone', minWidth: 100 },
    { id: 'salario', label: 'Salário', minWidth: 100 },
    { id: 'dataContratação', label: 'Data de contratação', minWidth: 100 },
    {
      id: 'acoes',
      label: 'Ações',
      minWidth: 30
    }
  ];

  //service
  const handleDelete = (id)=>{
    const newUsers = users.filter(user=>{
      return user.id !==id
    })
    setUsers(newUsers)
  }
  const handleEdit = (item)=>{
    setUserData(item)
    handleOpenModal()
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <FormModal label='Atualizar' user={userData} open={isOpen} onClose={handleCloseModal}/>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(item => (
                <TableCell key={item.id} align="center">
                  {item.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map(item => (
              <TableRow key={item.id}>
                <TableCell align="center">{item.nome}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
                <TableCell align="center">{item.telefone}</TableCell>
                <TableCell align="center">{item.salario}</TableCell>
                <TableCell align="center">{item.dataContratacao}</TableCell>
                <TableCell align="center">
                  <MenuItem 
                  onClick={()=>handleEdit(item)}
                  sx={{ gap:1, display:'flex', justifyContent:'center' }}>
                    <ModeIcon />
                    Editar
                  </MenuItem>
                  <MenuItem sx={{ gap:1 , display:'flex', justifyContent:'center'}}>
                    <VisibilityIcon />
                    Exibir
                  </MenuItem>
                  <MenuItem
                  onClick={()=>handleDelete(item.id)}
                   sx={{ gap:1, display:'flex', justifyContent:'center' }}>
                    <DeleteIcon />
                    Apagar
                  </MenuItem>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableEmployees;
