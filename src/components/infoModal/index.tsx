import { Button, Grid, Modal, Paper, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';

const InfoModal = ({ user, openInfo, onCloseInfo }) => {
  const paperStyle = {
    overflow: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    height: 460,
    padding: '38px',
    boxShadow: '4px 4px 4px #22305A05'
  };
  return (
    <Modal open={openInfo} onClose={onCloseInfo}>
      <Paper style={paperStyle}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Dados do usuário
          </Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography component="p">Nome</Typography>
          <TextField fullWidth disabled={true} label={user.nome} />
          </Grid>
          <Grid item xs={12}>
          <Typography component="p">Email</Typography>
          <TextField fullWidth disabled={true} label={user.email} />
          </Grid>
          <Grid item xs={12}>
          <Typography component="p">Telefone</Typography>
          <TextField fullWidth disabled={true} label={user.telefone} />
          </Grid>
          <Grid item xs={6}>
          <Typography component="p">Salário</Typography>
            <TextField fullWidth disabled={true} label={user.salario} />
          </Grid>
          <Grid item xs={6}>
          <Typography component="p">Data de contratação</Typography>
          <TextField fullWidth disabled={true} label={user.dataContratacao} />
          </Grid>
          <Grid item xs={6}>
          <Button
            sx={{ width: '100%' }}
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={onCloseInfo}
          >
            Voltar
          </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default InfoModal;
