import styles from "./style.module.css";
import axios from "axios";
import { maskJs } from "mask-js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SuccessModal } from "../../utils/Modal/SuccessModal";
import {
  cleanMask,
  applyCnpjMask,
  applyCpfMask,
  applyPhoneNumberMask,
  validateCpfOrCnpj,
  validateEmail,
  validatePhoneNumber,
} from "../../services/formServices";
import { Checkbox } from "../../utils/CheckBox/CheckBox";
import { FormInputs } from "../FormInputs/FormInputs";

export function Form() {
  const [selectedOption, setSelectedOption] = useState("Pessoa física");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  function modalHandler() {
    setShowModal(false);
  }

  function checkboxHandler(event: any) {
    setSelectedOption(event.target.value);
  }

  function valueBasedOnCpfOrCnpj(value1: any, value2: any) {
    return selectedOption === "Pessoa física" ? value1 : value2;
  }

  async function onSubmit(data: any) {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      data.type = selectedOption;
      data.legalId = cleanMask(data.legalId);
      data.phoneNumber = cleanMask(data.phoneNumber);
      data.postalCode = cleanMask(data.postalCode);
      console.log(data);

      setIsSubmitting(true);

      const response = await axios.post(
        "https://mxmchallenge.up.railway.app/users",
        JSON.stringify(data),
        {
          headers,
        }
      );
      console.log(response);
      setIsSubmitting(false);
      reset();
      setShowModal(true);
      //
    } catch (err) {
      console.error();
    }
  }

  async function postalCodeHandler(event: any) {
    try {
      const { value } = event.target;
      const postalCodeWithMask = maskJs("99999-999", value);
      event.target.value = postalCodeWithMask;
      const cleanValue = cleanMask(postalCodeWithMask);

      if (cleanValue.length == 8) {
        //O timer é apenas para poder mostrar o efeito do spinner
        setIsLoading(true);
        setTimeout(async () => {
          const response = await axios.get(
            `https://viacep.com.br/ws/${cleanValue}/json/`
          );

          const { logradouro, bairro, localidade, uf } = response.data;

          setValue("street", logradouro || "", { shouldValidate: false });
          setValue("neighborhood", bairro || "", { shouldValidate: false });
          setValue("city", localidade || "", { shouldValidate: false });
          setValue("state", uf || "", { shouldValidate: false });
          setIsLoading(false);
        }, 500);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='container'>
      <h2 className='title'>Cadastro de Usuario</h2>
      <Checkbox
        values={["Pessoa física", "Pessoa juridica"]}
        onChangeHandler={checkboxHandler}
        checkedStatusState={selectedOption}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5 className={styles["form-subtitle"]}>
          {valueBasedOnCpfOrCnpj(
            "Informações Pessoais",
            "Informações Empresariais"
          )}
        </h5>
        <div className={styles["form-box"]}>
          <FormInputs
            validators={[
              () => {
                ("");
              },
              validateCpfOrCnpj,
              validateEmail,
              validatePhoneNumber,
              () => {
                ("");
              },
              () => {
                ("");
              },
              () => {
                ("");
              },
              () => {
                ("");
              },
              () => {
                ("");
              },
              () => {
                ("");
              },
              () => {
                ("");
              },
            ]}
            isLoading={isLoading}
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
              `${isLoading ? "..." : "estado"}`,
              `${isLoading ? "..." : "cidade"}`,
              `${isLoading ? "..." : "bairro"}`,
              `${isLoading ? "..." : "rua"}`,
              "numero",
              "complemento",
            ]}
            onChangeHandlers={[
              null,
              valueBasedOnCpfOrCnpj(applyCpfMask, applyCnpjMask),
              null,
              applyPhoneNumberMask,
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

        <button type='submit' className='btn'>
          {isSubmitting ? "Criando conta..." : "Criar conta"}
        </button>
      </form>
      {showModal && <SuccessModal onClose={modalHandler} />}
    </div>
  );
}
