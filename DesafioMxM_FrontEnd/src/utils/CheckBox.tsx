import styles from "./CheckBox.module.css";

interface checkboxProps {
  values: string[];
  onChangeHandler: any;
  checkedStatusState: string;
}

export function Checkbox(props: checkboxProps) {
  return (
    <div className={styles["checkbox-group"]}>
      {props.values.map((value) => (
        <label>
          <input
            type='radio'
            name='options'
            checked={props.checkedStatusState === value}
            value={value}
            onChange={props.onChangeHandler}
          />
          <span>{value.replace(value[0], value[0].toUpperCase())}</span>
        </label>
      ))}
    </div>
  );
}
