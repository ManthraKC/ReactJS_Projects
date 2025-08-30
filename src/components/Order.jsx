
import OrderedItems from "../subcomponents/OrderedItems"
import { useOrder } from "../context/OrderContext";

export default function Order() {
  const { orderItems } = useOrder();
  const { setOrderItems } = useOrder(); 
  
  let filteredItems = orderItems.filter((el) => el.count > 0);
  const total = filteredItems.reduce((sum, item) => sum + item.price * item.count, 0);

  const handleClick = (total) => {
  if (total > 10) {
    if (confirm("Are you sure to confirm order?")) {
      alert("Ordered Successfully");
      // Reset order to base burger
      setOrderItems([{ id: 0, name: "Base Burger(Bun + Patty)", price: 5.99, count: 1 }]);
    } else {
      alert("Ordered Cancel");
    }
  } else {
    alert("Total price must be above $10 ");
  }
};
  return (
    <div className="mx-4 flex flex-col gap-4 justify-center items-center">
      <h2 className="border-b-2 border-white text-xl font-semibold my-2 w-[80%]">🛒 Your Order</h2>
      <div className="bg-white rounded-lg h-40 w-100 overflow-y-auto mx-4">
        {filteredItems.map((elem) => (
          <OrderedItems key={elem.id} ord={elem} />
        ))}
      </div>
      <h2 className="gradientText">Current order total: ${total.toFixed(2)} to pay</h2>
      <button className="orderBtn" onClick={()=>handleClick(total)}>Pay and receive order</button>
    </div>
  );
}