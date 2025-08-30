import Header from "./components/Header"
import Burger from "./components/Burger"
import Ingredients from './components/Ingredients'
import PresetBurger from "./components/PresetBurger"
import Order from "./components/Order"
import { OrderProvider } from "./context/OrderContext"

function App() {
  return (
  <OrderProvider>
   <div className="flex flex-col ">    
   <Header />
   <div className="flex flex-col lg:flex-row md:flex-col justify-between m-5 ">
   <div className="flex flex-col items-center justify-center gap-5 ">    
      <Burger />
      <Ingredients />      
    </div>
   <div className="flex flex-col gap-4">   
    <PresetBurger />    
    <Order />
   </div> 
   </div>
   </div>
   </OrderProvider>
  )
}

export default App
