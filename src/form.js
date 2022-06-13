function Form(){
    return (
        <form action="#">
            <input type="text" placeholder="Enter Title" />
            <select name="gender" id="gender">
                <option value="male">Male</option>
                <option value="femele">Femele</option>
            </select>
            <input type="text" placeholder="Price"/>
            <input type="text" placeholder="Category"/>
            <input type="text" placeholder="image"/>
            <input  type="submit" value="SUBMIT"  />

        </form>
    );
}

export default Form;