import styles from "./Form.module.css";
import { ErrorMessage } from "@hookform/error-message";

interface FormProps {
  labels: string[];
  names: string[];
  placeholders: string[];
  onChangeHandlers: any[];
  register: any;
  errors: any;
}

export function FormInputs(props: FormProps) {
  return (
    <>
      {props.labels.map((label, i) => (
        <>
          <div
            key={props.names[i]}
            className={`${styles["form-group"]} ${
              props.names[i] === "postalCode" ? styles["postal-code"] : ""
            }`}
          >
            <label>
              {label}
              <span className={styles["error-message"]}>*</span>
            </label>
            <input
              className='form-control'
              {...props.register(props.names[i])}
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
