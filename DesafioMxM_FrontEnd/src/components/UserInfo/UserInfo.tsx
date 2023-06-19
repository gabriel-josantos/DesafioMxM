import axios from "axios";
import { useRef, useState } from "react";
import { UserOutput } from "../UserOutput/UserOutput";
import styles from "./style.module.css";
// import { maskJs } from "mask-js";

export function UserInfo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      const { data } = await axios.get(`https://localhost:7042/users/${id}`);
      if (inputRef.current) inputRef.current.value = "";

      // if (data.type === "Pessoa física")
      //   data.legalId = maskJs("999.999.999-99", data.legalId);
      // if (data.type === "Pessoa juridica")
      //   data.legalId = maskJs("99.999.999/9999-99", data.legalId);

      // data.phoneNumber = maskJs("(99) 9 9999-9999", data.phoneNumber);
      // data.postalCode = maskJs("99999-999", data.postalCode);

      setUserData(data);

      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      if (err.response) setError(err.response.data);
      setError("Algo deu errado");
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
          {isLoading ? "Carregando..." : "Consultar usuario"}
        </button>
      </div>
      {error && <p className='error-message'>{error}</p>}
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
