import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Grid, Modal, Paper, TextField } from '@mui/material';
import { IUser, MainContext } from '../../Provider';
import { useContext } from 'react';

const FormModal = ({ label = 'Cadastrar', user, open, onClose }) => {
  const { users, setUsers } = useContext<any>(MainContext);
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
  const initialValues = {
    nome: user?.nome ? user.nome : '',
    email: user?.email ? user.email : '',
    telefone: user?.telefone ? user.telefone : '',
    salario: user?.salario ? user.salario : '',
    dataContratacao: user?.dataContratacao
      ? user.dataContratacao.split('/').reverse().join('-')
      : ''
  };
  const validationSchema = Yup.object().shape({
    nome: Yup.string().min(3, 'Minimo 3 letras').required('Campo obrigatório'),
    email: Yup.string().email('Email invalido').required('Campo obrigatório'),
    telefone: Yup.number()
      .typeError('Telefone Invalido')
      .required('Campo obrigatório'),
    salario: Yup.number()
      .typeError('Salario Invalido')
      .required('Campo obrigatório'),
    dataContratacao: Yup.date()
      .typeError('Data Invalido')
      .required('Campo obrigatório')
  });
  const handleRegister = (values:IUser) => {
    let newID = 0;
    const dataContratacao = values.dataContratacao
      .split('-')
      .reverse()
      .join('/');
    users.map((user:IUser) => {
      if (user.id >= newID) {
        newID = user.id;
      }
    });
    newID += 1;
    const newUser = {
      id: newID,
      nome: values.nome,
      email: values.email,
      telefone: values.telefone,
      salario: values.salario,
      dataContratacao
    };
    const newData = [...users, newUser];
    setUsers(newData);
  };

  const handleEdit = (values:IUser) => {
    const dataContratacao = values.dataContratacao
      .split('-')
      .reverse()
      .join('/');
    const editUserOld = users.filter((oldUser: IUser) => {
      return oldUser.id === user.id;
    });
    const editedUser = 
      {
        ...editUserOld[0],
        nome: values.nome,
        email: values.email,
        telefone: values.telefone,
        salario: values.salario,
        dataContratacao
      }
    ;
    const newData = users.filter((standUser:IUser) => {
      return standUser.id !== user.id;
    });
    setUsers([...newData, editedUser]);
   
  };
  const onSubmit = (values:IUser) => {
    if (label === 'Cadastrar') {
      handleRegister(values);
    } else {
      handleEdit(values);
    }
    onClose()
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Paper style={paperStyle}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {props => (
            <Form>
              <Grid container spacing={2}>
                Nome
                <Field
                  as={TextField}
                  fullWidth
                  name="nome"
                  placeholder="Insira o nome"
                  helperText={<ErrorMessage name="nome" />}
                />
                Email
                <Field
                  as={TextField}
                  fullWidth
                  name="email"
                  placeholder="Insira o Email"
                  helperText={<ErrorMessage name="email" />}
                />
                Número de Telefone
                <Field
                  as={TextField}
                  fullWidth
                  name="telefone"
                  placeholder="Insira o telefone"
                  helperText={<ErrorMessage name="telefone" />}
                />
                <div style={{}}>
                  Salário(R$)
                  <Field
                    as={TextField}
                    fullWidth
                    name="salario"
                    type="number"
                    placeholder="Insira o salário"
                    helperText={<ErrorMessage name="salario" />}
                  />
                  Data de Contratação
                  <Field
                    as={TextField}
                    fullWidth
                    type="date"
                    name="dataContratacao"
                    helperText={<ErrorMessage name="dataContratacao" />}
                  />
                </div>
                <Grid item xs={6}>
                  <Button
                    sx={{ width: '100%' }}
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={onClose}
                  >
                    Voltar
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    type="submit"
                    sx={{ width: '100%' }}
                    variant="contained"
                    endIcon={<SendIcon />}
                  >
                    {label}
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Modal>
  );
};

export default FormModal;
