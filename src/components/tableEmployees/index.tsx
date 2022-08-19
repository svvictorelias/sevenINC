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
import { IUser, MainContext } from '../../Provider';
import FormModal from '../formModal';
import InfoModal from '../infoModal';

const TableEmployees = () => {
  const { users, setUsers } = useContext<any>(MainContext);
  const [userData, setUserData] = useState([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpenModal = () =>setIsOpen(true)
  const handleCloseModal = () =>setIsOpen(false)
  const [isOpenInfo, setIsOpenInfo] = useState<boolean>(false)
  const handleOpenModalInfo = () =>setIsOpenInfo(true)
  const handleCloseModalInfo = () =>setIsOpenInfo(false)

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
  const handleShow = (item)=>{
    setUserData(item)
    handleOpenModalInfo()
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <FormModal label='Atualizar' user={userData} open={isOpen} onClose={handleCloseModal}/>
      <InfoModal user={userData} openInfo={isOpenInfo} onCloseInfo={handleCloseModalInfo}/>
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
            {users?.map((item:IUser)=> (
              <TableRow key={item.id}>
                <TableCell align="center">{item.nome}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
                <TableCell align="center">{item.telefone}</TableCell>
                <TableCell align="center">R$ {item.salario}</TableCell>
                <TableCell align="center">{item.dataContratacao}</TableCell>
                <TableCell align="center">
                  <MenuItem 
                  onClick={()=>handleEdit(item)}
                  sx={{ gap:1, display:'flex', justifyContent:'center' }}>
                    <ModeIcon />
                    Editar
                  </MenuItem>
                  <MenuItem
                  onClick={()=>handleShow(item)}
                  sx={{ gap:1 , display:'flex', justifyContent:'center'}}>
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
