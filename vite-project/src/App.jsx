import NavBar from "./components/NavBar"

const App = () => {

  const nombre = "Paula"

  return (
    <>
<NavBar/>
   
    <main>
    <p>Bienvenidx {nombre}!</p>
    </main>
    <footer>
   <p> all rights reserved - developed by Paula Barroni </p> 
    </footer>

    </>
    
  
    )
}

export default App