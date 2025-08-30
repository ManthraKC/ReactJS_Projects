

export default function OrderedItems({ ord }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-3">
        <h2 className="text-black">{ord.name} x {ord.count}</h2>
        <h2 className="text-black">${(ord.price * ord.count).toFixed(2)}</h2>
      </div>
      <hr className="border-gray-500 border-1 w-full" />
    </div>
  );
}