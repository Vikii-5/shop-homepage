import "./App.css";
import { Banner } from "./Banner";
import { Header } from "./Header";
import { Products } from "./Products";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState(0);

  return (
    <div className="App">
      <Header cart={cart} />
      <Banner />
      <Products cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}

function Footer(){
  return(

    <footer class="py-5 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">Copyright &copy; VS 2022</p></div>
    </footer>

  )
}

export default App;
