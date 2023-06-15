interface UserProps {
  labels: string[];
  data: any;
}

export function UserOutput(props: UserProps) {
  return (
    <>
      {Object.values(props.data).map((value: any, i) => (
        <div>
          <label>{props.labels[i]}:</label>
          <span> {value}</span>
        </div>
      ))}
    </>
  );
}
