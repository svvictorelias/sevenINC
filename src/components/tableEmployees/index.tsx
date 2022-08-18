import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TableContainer from '@mui/material/TableContainer';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeIcon from '@mui/icons-material/Mode';

import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';

const TableEmployees = () => {
  const [visibleButton, setVisibleButton] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setVisibleButton(event.currentTarget);
  };
  const handleClose = () => {
    setVisibleButton(null);
  };
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
  const rows = [
    {
      id: 1,
      nome: 'Victor',
      email: 'teste@teste.com',
      telefone: '111111111',
      salario: 'R$3998.50',
      dataContratacao: '11/11/2022'
    },
    {
      id: 2,
      nome: 'Victor',
      email: 'teste@teste.com',
      telefone: '111111111',
      salario: 'R$3998.50',
      dataContratacao: '11/11/2022'
    },
    {
      id: 3,
      nome: 'Victor',
      email: 'teste@teste.com',
      telefone: '111111111',
      salario: 'R$3998.50',
      dataContratacao: '11/11/2022'
    }
  ];
  return (
    <Paper sx={{ width: '80%', overflow: 'hidden' }}>
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
            {rows.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.nome}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.telefone}</TableCell>
                <TableCell>{item.salario}</TableCell>
                <TableCell>{item.dataContratacao}</TableCell>
                <TableCell>
                  <>
                  <IconButton onClick={handleClick}>
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    anchorEl={visibleButton}
                    open={Boolean(visibleButton)}
                    onClose={handleClose}
                    
                  >
                    <MenuItem sx={{gap:2}}>
                    <ModeIcon/>
                    Editar dados
                    </MenuItem>
                    <MenuItem sx={{gap:2}}>
                    <VisibilityIcon/>
                    Mostrar detalhes
                    </MenuItem>
                    <MenuItem sx={{gap:2}}>
                    <DeleteIcon/>
                    Apagar funcionário
                    </MenuItem>
                  </Menu>
                  </>
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
