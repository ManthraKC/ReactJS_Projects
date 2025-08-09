//

export default function IngredientsList(props){
     const ingredientItems = props.ingredients.map((elem)=> <li key={elem}>{elem}</li>)
    return (
        <>
                <h2 className="text-2xl font-bold">Ingredients on hand:</h2>
                <ul className=' flex flex-col justify-self-start mt-0 gap-2 list-disc marker:text-black'>
                    {ingredientItems}
                </ul>
                {props.ingredients.length > 3 && 
                  <div className="flex bg-gray-900/6 w-100 gap-4 mt-7 p-4 rounded-sm">
                    <div className="flex flex-col gap-y-3 ">
                        <h3 className="text-md font-semibold">Ready for a recipe?</h3>
                        <span className="text-gray text-sm">Generate a recipe from your list of ingredients.</span>
                    </div>
                    <button className="bg-red-700 text-white rounded-lg outline-none px-3" onClick={props.getRecipes}>Get a recipe</button>
                </div>}
        </>
    )
}