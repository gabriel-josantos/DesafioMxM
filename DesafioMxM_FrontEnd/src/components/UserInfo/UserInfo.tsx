import axios from "axios";
import { useRef, useState } from "react";
import { UserOutput } from "../UserOutput/UserOutput";
import styles from "./style.module.css";

export function UserInfo() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [userData, setUserData] = useState({
    type: "",
    name: "",
    legalId: "",
    email: "",
    phoneNumber: "",
    postalCode: "",
    state: "",
    city: "",
    neighborhood: "",
    street: "",
    addressNumber: "",
    complement: "",
  });

  async function getUserData() {
    try {
      const id = inputRef.current?.value;
      const { data } = await axios.get(`https://localhost:7042/users/${id}`);
      if (inputRef.current) inputRef.current.value = "";
      setUserData(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='container'>
      <h2 className='title'>Dados de Usuario</h2>
      <div className={styles["search-box"]}>
        <input
          className={styles["search-input"]}
          placeholder='Digite o id de usuario'
          ref={inputRef}
        />
        <button className={styles["btn-search"]} onClick={getUserData}>
          Consultar usuario
        </button>
      </div>
      <h5>Dados Gerais</h5>
      <UserOutput
        labels={[
          "Tipo",
          "Nome",
          "CPF/CNPJ",
          "Email",
          "Telefone",
          "CEP",
          "Estado",
          "Cidade",
          "Bairro",
          "Rua",
          "Numero",
          "Complemento",
        ]}
        data={userData}
      />
    </div>
  );
}
