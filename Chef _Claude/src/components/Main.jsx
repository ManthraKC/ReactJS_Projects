import {useState} from 'react';
import RecipeCode from './RecipeCode';
import IngredientsList from './IngredientsList';
import {  getRecipeFromMistral} from '../ai'

export default function Main(){
    const [ingredients , setIngredients] = useState([]);
    const [recipe , setRecipe] = useState("");
      const [loading, setLoading] = useState(false);

    async function getRecipe(){
       setLoading(true);
       try {
        const generatedRecipe = await  getRecipeFromMistral(ingredients);
         setRecipe(generatedRecipe);
        }
         catch (error) {
      console.error("Error fetching recipe:", error);
    } finally {
      setLoading(false);
    }
    }




    function ingrdientList(formData){          
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIng => [...prevIng, newIngredient]);
    }

   

    return (
        <main>
            <form className="m-10 flex justify-center items-center mt-20 gap-x-4 " action={ingrdientList} >
                <input className="border-1 rounded-lg border-gray-400 p-3 pl-5 max-w-md min-w-xs flex-grow-1 bg-white focus:border-0 focus:outline-3 focus:outline-black" type="text" placeholder="e.g.oregano" aria-label="Add ingredient" name="ingredient" />
                <button className="bg-black text-white shadow-2xl rounded-3xl py-3.5 px-10 font-semibold text-sm " type="submit"> + Add ingredient</button>
            </form>
            {ingredients.length > 0 &&  
            <div className="flex flex-col gap-5 justify-center items-center">
                <IngredientsList ingredients ={ingredients} getRecipes={getRecipe}  />

                    {loading && (
                        <div className="flex justify-center mt-8">
                        <div className="w-8 h-8 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}
                    
                {recipe && <RecipeCode recipe={recipe}/>}
                
            </div>
             }
            
            
        </main>
    )
}