import styles from "./SuccessModal.module.css";

export function SuccessModal(props: any) {
  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <h3>Conta criada com sucesso!</h3>
        <button onClick={props.onClose}>Fechar</button>
      </div>
    </div>
  );
}
