import styles from "./style.module.css";
import { Fragment } from "react";

interface UserProps {
  labels: string[];
  data: any;
}

export function UserOutput(props: UserProps) {
  return (
    <>
      {Object.values(props.data).map((value: any, i) => (
        <Fragment key={i}>
          {i === 5 && <h5>Dados de Endereço</h5>}
          <div key={i} className={styles["user"]}>
            <div className={styles.label}>{props.labels[i]}:</div>
            <div className={styles.value}> {value}</div>
          </div>
        </Fragment>
      ))}
    </>
  );
}
