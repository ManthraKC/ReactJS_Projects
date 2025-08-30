import Ingredient from "../Lists/Ingredient"
import Item from "../subcomponents/Item"

export default function Ingredients(){
    return (
        <div className="flex flex-col justify-items-start items-start mx-4 sm:mx-6 md:mx-10 lg:mx-20 ">
            <h2 className="text-2xl border-b-2 w-[99%] mb-3 ">🥬 Choose what goes into your burger</h2>
            <div className="flex flex-wrap  items-center justify-center gap-4 p-2 ">
                {Ingredient.map((elem)=><Item items={elem} key ={elem.id} />)}
            </div>               
            
        </div>
    )
}