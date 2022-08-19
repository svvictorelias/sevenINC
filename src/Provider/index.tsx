import { createContext, useState } from "react";

export const MainContext = createContext({});

export function MainProvider({children}:any){
  const [users, setUsers]= useState([
    {
      id: 1,
      nome: 'Victor',
      email: 'teste@teste.com',
      telefone: '111111111',
      salario: '3998.50',
      dataContratacao: '11/11/2022'
    },
    {
      id: 2,
      nome: 'Victor Wagner Joseph Elias',
      email: 'teste@teste.comsasda assadasdasd',
      telefone: '111111111',
      salario: '3998.50',
      dataContratacao: '11/11/2022'
    },
    {
      id: 3,
      nome: 'Victor',
      email: 'teste@teste.com',
      telefone: '111111111',
      salario: '3998.50',
      dataContratacao: '11/11/2022'
    }
  ])
  return (
    <MainContext.Provider
    value={({users, setUsers})}
    >
      {children}
    </MainContext.Provider>
  );
}

