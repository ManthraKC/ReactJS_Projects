import { useOrder } from "../context/OrderContext";

export default function Container({items}){
    const { addPresetBurger } = useOrder();

    const handleClick = () => {
        addPresetBurger(items);
    };
 
    return (
    <div 
      className="ingreCont"
      onClick={handleClick}
    >
      <div className=""></div>
      <h2 className="text-xl font-bold">{items.burger}</h2>
      <div className="flex justify-between">
        <span className="text-base">{items.ingre.join(',')}</span>
        <span className="text-red-500">${items.price}</span>
      </div>
    </div>
  );
}