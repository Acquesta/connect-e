import { Outlet } from "react-router-dom"
import Hotbar from "./components/Hotbar"
import Footer from "./components/footer"

function App() {

  let usuarios = JSON.parse(localStorage.getItem('Usuarios')) || [];

  if(!usuarios){
    localStorage.setItem('Usuarios', JSON.stringify([{
      id: 0,
      nome: 'User0',
      email: 'Email0', 
      nascimento: 'Nascimento0', 
      senha: '123'
    }]))
  }

  console.log(usuarios);

  return (
    <>
      <Hotbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
