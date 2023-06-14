import { Form } from "./components/Form";

function App() {
  return (
    <>
      <Form
        title='Cadastro de usuario'
        labels={["Nome completo", "Cpf", "Email", "Telefone"]}
        ids={["userName", "Cpf", "email", "phoneNumber"]}
        placeholders={[
          "nome",
          "000.000.000-00",
          "example@gmail.com",
          "(00)-0 0000-0000",
        ]}
      />
    </>
  );
}

export default App;
