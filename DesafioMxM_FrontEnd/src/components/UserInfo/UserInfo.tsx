import axios from "axios";
import { useRef, useState } from "react";
import { UserOutput } from "../UserOutput/UserOutput";

export function UserInfo() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [userData, setUserData] = useState({
    type: "pessoa fisica",
    name: "Gabriel",
    cpf: "06673085630",
    phoneNumber: "31994590419",
    postalCode: "35920000",
  });

  async function getUserData() {
    try {
      const id = inputRef.current?.value;
      const { data } = await axios.get(`https://localhost:7042/users/${id}`);
      setUserData(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='container'>
      <h2 className='title'>Dados de Usuario</h2>
      <div>
        <input
          className='form-control'
          placeholder='Digite o id de usuario'
          ref={inputRef}
        />
        <button className='btn' onClick={getUserData}>
          Consultar usuario
        </button>
      </div>
      <UserOutput
        labels={["Tipo", "Nome", "CPF/CNPJ", "Telefone", "CEP"]}
        data={userData}
      />
    </div>
  );
}
