import Contador from "./components/contador/Contador.tsx";
import Tarefa from "./components/tarefa/Tarefa.tsx";
import Card from "./components/card/Card.tsx";

function App() {
  return (
    <>
        <Card titulo={"C#"} descricao={"Melhor linguagem de programação"} />
        <Card titulo={"React"} descricao={"Melhor biblioteca de JavaScript"} />
        <Contador />
        <Tarefa />
    </>
  );
}

export default App;
