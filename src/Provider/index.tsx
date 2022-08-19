import { createContext, useState } from "react";

export const MainContext = createContext({});
export interface IUser{
  id?: number,
  nome: string
  email:string,
  telefone: string,
  salario: string
  dataContratacao: string
}

export function MainProvider({children}:any){
  const [users, setUsers]= useState<IUser[]>([
    {
      id: 1,
      nome: 'Victor',
      email: 'teste@teste.com',
      telefone: '31956254871',
      salario: '3000.50',
      dataContratacao: '11/11/2022'
    },
    {
      id: 2,
      nome: 'Victor Wagner Joseph Elias',
      email: 'teste@teste.coms',
      telefone: '31965478521',
      salario: '4568.50',
      dataContratacao: '11/11/2022'
    },
    {
      id: 3,
      nome: 'Victor',
      email: 'teste@teste.com',
      telefone: '3136521547',
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

