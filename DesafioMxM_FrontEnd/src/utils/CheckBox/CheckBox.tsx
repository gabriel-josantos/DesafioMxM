import styles from "./style.module.css";

interface checkboxProps {
  values: string[];
  onChangeHandler: any;
  checkedStatusState: string;
}

export function Checkbox(props: checkboxProps) {
  return (
    <div className={styles["checkbox-group"]}>
      {props.values.map((value) => (
        <label key={value}>
          <input
            type='radio'
            name='options'
            checked={props.checkedStatusState === value}
            value={value}
            onChange={props.onChangeHandler}
          />
          <span>{value}</span>
        </label>
      ))}
    </div>
  );
}
