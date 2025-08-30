
import { useState, useEffect} from 'react';
import { useOrder } from '../context/OrderContext';

export default function Item({ items }) {
  const { updateItemCount , getIngredientCount } = useOrder();
  const [quantity, setQuantity] = useState(0);
  const [stocks, setStocks] = useState(items.stock);

   useEffect(() => {
        const globalCount = getIngredientCount(items.id);
        if (globalCount !== quantity) {
            setQuantity(globalCount);
            setStocks(items.stock - globalCount);
        }
    }, [getIngredientCount(items.id), items.id, items.stock]);

  const handleIncClick = () => {
    if (quantity < items.stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      setStocks(stocks - 1);
      updateItemCount(items.id, newQuantity);
    }
  };

  const handleDecClick = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setStocks(stocks + 1);
      updateItemCount(items.id, newQuantity);
    }
  };

    return (
  <div className="cont">
    
    <p className="font-semibold text-sm sm:text-base md:text-lg">{items.name}</p>
    <p className="text-xs sm:text-sm md:text-base">$ {items.price}</p>
    <p className="text-xs sm:text-sm text-purple-900">{stocks} in stock</p>

    <div className="flex gap-2 sm:gap-4">
      <button className="btn px-2 sm:px-4 py-1 sm:py-2" onClick={handleDecClick}>-</button>
      <span className="text-sm sm:text-base md:text-lg">{quantity}</span>
      <button className="btn px-2 sm:px-4 py-1 sm:py-2" onClick={handleIncClick}>+</button>
    </div>
  </div>
);
}
