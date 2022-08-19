import { Modal, Paper } from '@mui/material';
import React from 'react';

const InfoModal = ({ openInfo, onCloseInfo }) => {
  const paperStyle = {
    overflow: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    height: 430,
    padding: '48px',
    boxShadow: '4px 4px 4px #22305A05'
  };
  return (
    <Modal open={openInfo} onClose={onCloseInfo}>
      <Paper style={paperStyle}></Paper>
    </Modal>
  );
};

export default InfoModal;
