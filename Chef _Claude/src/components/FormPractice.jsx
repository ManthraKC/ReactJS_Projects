


export default function FormPractice(){

    function signUp(formData){        
        console.log(formData.get("email"));
        console.log(formData.get("status")); 
        console.log(formData.getAll("ds"));
        console.log(formData.get("favColor"))
        console.log("submitted");
            }
    return(
        <article>
            <h2>Sign Up Form</h2>
            <form action={signUp}>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="doe@example.com" name="email" id="email" className="border-2" defaultValue="olising@gamil.com" /><br /><br />
                <label htmlFor="password">Password:</label>
                <input type='password' id="password" name="password" className="border-2" /><br />
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description"></textarea>

                <fieldset className="border-1 m-10">
                    <legend>Employment Status</legend>
                    <label>
                        <input type="radio" name="status" value="unemployed" /> Unemplyed
                    </label>
                    <label>
                        <input type="radio" name="status" value="part-time" /> Part-time
                    </label>
                    <label>
                        <input type="radio" name="status" defaultChecked={true} value="full-time" /> Full-time
                    </label>
                </fieldset>

                <fieldset className="border-1 m-2">
                    <legend>Dietary Restrictions</legend>
                    <label>
                        <input type="checkbox" name="ds" value="Kosher" /> Kosher
                    </label>
                    <label>
                        <input type="checkbox" name="ds" value="vegan" />Vegan
                    </label>
                    <label>
                        <input type="checkbox" name="ds" value="gluten" defaultChecked="true"/>Gluten
                    </label>
                </fieldset>

                <label htmlFor="favColor">What is fav color?</label>
                <select id="favColor" name="favColor" defaultValue="" required>
                    <option value="" disabled>Choose a color</option>
                    <option value="Red">Red</option>
                    <option value="YEllow" >YEllow</option>
                    <option value="Green">Green</option>

                </select>
                <button  className="border-1">Submit</button>
            </form>

        </article>
        
    );
}