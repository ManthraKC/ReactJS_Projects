import {useOrder} from "../context/OrderContext"
import Dots from "../subcomponents/Dots"
import {useState} from 'react';

export default function Burger(){
  const { orderItems } = useOrder();
  
  const getIngredientLayers = () => {
    const layers = [];
    const MAX_LAYERS = 8;  
    
    orderItems.forEach(item => {
      if (item.id !== 0 && item.count > 0) { // Skip base burger
        for (let i = 0; i < item.count; i++) {
          if (layers.length < MAX_LAYERS) {
          layers.push(item.name);
        } else {
          alert("Reached maximum ingredients")
            break;
        }
        }
      }
    });
    
    return layers;
  };

  const getIngredientStyle = (ingredientName) => {
    switch (ingredientName) {
      case 'Lettuce':
        return 'h-4 w-60 bg-green-400 rounded-sm [clip-path:polygon(0%_40%,10%_45%,20%_35%,30%_50%,40%_38%,50%_48%,60%_35%,70%_50%,80%_38%,90%_45%,100%_40%,100%_100%,0%_100%)]';
      case 'Tomato':
        return 'h-3 w-60 bg-gradient-to-b from-red-400 via-red-500 to-red-600 shadow-inner shadow-red-800 rounded-sm';
      case 'Cheese':
        return 'h-4 w-60 bg-yellow-300 rounded-sm [clip-path:polygon(0%_20%,25%_0%,50%_20%,75%_0%,100%_20%,100%_100%,0%_100%)]';
      case 'Onion':
        return 'h-2 w-60 bg-purple-200 rounded-sm';
      case 'Pickle':
        return 'h-2 w-60 bg-green-600 rounded-sm';
      case 'Bacon':
        return 'h-4 w-60 bg-red-800 rounded-sm [clip-path:polygon(0%_20%,25%_0%,50%_20%,75%_0%,100%_20%,100%_100%,0%_100%)] ';
      case 'Avocado':
        return 'h-3 w-60 bg-green-300 rounded-sm';
      case 'Mushroom':
        return 'h-3 w-60 bg-gray-600 rounded-sm';
      default:
        return 'h-2 w-60 bg-gray-400 rounded-sm';
    }
  };

  const layers = getIngredientLayers();
    return (  
      <div className="flex flex-col gap-4 justify-center items-center"> 
      <h2 className="text-2xl bg-gradient-to-r from-green-400 to-orange-500 bg-clip-text text-transparent font-bold">Stack it your way, bite by bite!</h2>

          <div className="bg-yellow-500 h-90 w-100 rounded-full relative flex justify-center items-center ">
            <div className="yellowBG">
              {/* Top Bun */}                
                  <Dots />               
                
                {/* Ingredient Layers */}
                <div className="flex flex-col items-center justify-center  w-60">
                    {layers.map((layer, index) => (
                      <div key={index} className={getIngredientStyle(layer)} style={{ marginTop: '1px' }}></div>
                    ))}
                  </div>
                  
                  {/* Patty */}
                <div className="h-8 w-60 rounded-xl bg-gradient-to-r from-yellow-800 to-yellow-900"></div>
                {/*Bottom Bun */}
                <div className="border-1 border-[#ffcc99] bg-[#ffcc99] h-8 w-60 rounded-bl-[80px] rounded-br-[80px]">
                </div>
            </div>
          </div>
          </div>  
          
      
    )
}