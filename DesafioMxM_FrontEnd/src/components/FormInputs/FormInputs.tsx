import styles from "../Form/Form.module.css";
import { ErrorMessage } from "@hookform/error-message";

interface FormProps {
  validators: any[];
  labels: string[];
  names: string[];
  placeholders: string[];
  onChangeHandlers: any[];
  register: any;
  errors: any;
  isLoading: boolean;
}

export function FormInputs(props: FormProps) {
  return (
    <>
      {props.labels.map((label, i) => (
        <>
          <div
            className={`${styles["form-group"]} ${
              props.names[i] === "postalCode" ? styles["postal-code"] : ""
            }`}
          >
            <label>
              {label}
              {i === props.names.length - 1 ? (
                <span> (opcional)</span>
              ) : (
                <span className={styles["error-message"]}>*</span>
              )}
            </label>
            {props.isLoading &&
              (props.names[i] === "state" ||
                props.names[i] === "city" ||
                props.names[i] === "street" ||
                props.names[i] === "neighborhood") && (
                <div className={styles["loading-spinner"]} />
              )}
            <input
              className='form-control'
              {...props.register(props.names[i], {
                required: "Campo obrigatorio",
                validate: (value: any) => props.validators[i](value),
              })}
              placeholder={props.placeholders[i]}
              onChange={props.onChangeHandlers[i]}
            />
            <ErrorMessage
              errors={props.errors}
              name={props.names[i]}
              render={({ message }) => (
                <p className={styles["error-message"]}>{message}</p>
              )}
            />
          </div>
          {i === 3 && (
            <h5 className={styles["form-subtitle"]}>Informações de Endereço</h5>
          )}
        </>
      ))}
    </>
  );
}
