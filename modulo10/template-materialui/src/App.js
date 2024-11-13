import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login"; 
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Menu />
      <ListarTarefa />
    </div>
  );
}

export default App;
