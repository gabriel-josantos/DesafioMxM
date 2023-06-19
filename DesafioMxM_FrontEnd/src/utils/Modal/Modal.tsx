import styles from "./style.module.css";

export function Modal(props: any) {
  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <h3>{props.message}</h3>
        <button onClick={props.onClose}>Fechar</button>
      </div>
    </div>
  );
}
