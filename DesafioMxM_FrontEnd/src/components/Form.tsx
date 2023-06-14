import styles from "./Form.module.css";
import axios from "axios";
import { maskJs } from "mask-js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  cleanMask,
  applyCnpjMask,
  applyCpfMask,
  applyPhoneNumberMask,
} from "../services/formServices";
import { Checkbox } from "../utils/CheckBox";
import { FormInputs } from "./FormInputs";

export function Form() {
  const [selectedOption, setSelectedOption] = useState("pessoa fisica");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  function checkboxHandler(event: any) {
    setSelectedOption(event.target.value);
  }

  function valueBasedOnCpfOrCnpj(value1: any, value2: any) {
    return selectedOption === "pessoa fisica" ? value1 : value2;
  }

  async function sendData(data: any) {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      data.cpf = cleanMask(data.cpf);
      data.phoneNumber = cleanMask(data.phoneNumber);
      data.postalCode = cleanMask(data.postalCode);

      const response = await axios.post(
        "https://localhost:7042/users",
        JSON.stringify(data),
        {
          headers,
        }
      );
      console.log("Success");
      //
    } catch (err) {
      console.error(err);
    }
  }

  async function getPostalCodeData(postalCode: string): Promise<void> {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${postalCode}/json/`
    );

    const { logradouro, bairro, localidade, uf } = data;

    setValue("street", logradouro || "", { shouldValidate: false });
    setValue("neighborhood", bairro || "", { shouldValidate: false });
    setValue("city", localidade || "", { shouldValidate: false });
    setValue("state", uf || "", { shouldValidate: false });
  }

  async function postalCodeHandler(event: any) {
    const { value } = event.target;
    const postalCodeWithMask = maskJs("99999-999", value);
    event.target.value = postalCodeWithMask;
    const cleanedValue = cleanMask(postalCodeWithMask);

    if (cleanedValue.length == 8) {
      await getPostalCodeData(cleanedValue);
    }
  }

  return (
    <div className={styles["form-container"]}>
      <h2 className={styles["form-title"]}>Cadastro de usuario</h2>
      <Checkbox
        values={["pessoa fisica", "pessoa juridica"]}
        onChangeHandler={checkboxHandler}
        checkedStatusState={selectedOption}
      />
      <form onSubmit={handleSubmit(sendData)}>
        <h5 className={styles["form-subtitle"]}>
          {valueBasedOnCpfOrCnpj(
            "Informações pessoais",
            "Informações empresariais"
          )}
        </h5>
        <div className={styles["form-box"]}>
          <FormInputs
            labels={[
              valueBasedOnCpfOrCnpj("Nome completo", "Nome da empresa"),
              valueBasedOnCpfOrCnpj("CPF", "CNPJ"),
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
            names={[
              "name",
              "legalId",
              "email",
              "phoneNumber",
              "postalCode",
              "state",
              "city",
              "neighborhood",
              "street",
              "addressNumber",
              "complement",
            ]}
            placeholders={[
              "nome",
              valueBasedOnCpfOrCnpj("000.000.000-00", "00.000.000/0000-00"),
              "example@gmail.com",
              "(99) 9 9999-9999",
              "00000-000",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
            ]}
            onChangeHandlers={[
              null,
              valueBasedOnCpfOrCnpj(applyCpfMask, applyCnpjMask),
              applyPhoneNumberMask,
              null,
              postalCodeHandler,
              null,
              null,
              null,
              null,
              null,
              null,
            ]}
            register={register}
            errors={errors}
          />
        </div>

        <button type='submit' className={styles.btn}>
          Criar conta
        </button>
      </form>
    </div>
  );
}
