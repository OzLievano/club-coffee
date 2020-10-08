import React, {useState} from 'react'

const CoffeeForm = () => {

    const [formState,setFormState] = useState([{
        name:"",
        phone:"",
        coffeeType:"Regular",
        temp:"Iced",
        milkChoice:"None",
        additions:"No Foam",
        specialInstructions:""
    }])

    return (
        <div>
            <form>
                <h3>Coffee Form</h3>
                <label htmlFor="name">
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Your Name"
                        value=""
                        onChange="s"
                    />
                </label><br/>
                <label htmlFor="phone">
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="P#123-456-8790 "
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        value=""
                        onChange=""
                    />
                </label><br/>
                <label htmlFor="coffeeType">
                    <select id="coffeeType" name="coffeeType">
                        <option value="Regular">Regular</option>
                        <option value="Latte">Latte</option>
                        <option value="Americano">Americano</option>
                        <option value="Flat White">Flat White</option>
                        <option value="Espresso">Espresso</option>
                        <option value="Cappucino">Cappucino</option>
                    </select>
                </label><br/>
                <label htmlFor="temp">
                    <select id="temp" name="temp">
                        <option value="Iced">Iced</option>
                        <option value="Hot">Hot</option>
                    </select>
                </label><br/>
                <label htmlFor="milkChoice">
                    <select id="milkChoice" name="milkChoice">
                        <option value="None">None</option>
                        <option value="Soy">Soy</option>
                        <option value="Almond">Almond</option>
                        <option value="Oat">Oat</option>
                        <option value="Regular">Regular</option>
                        <option value="non-fat">non-fat</option>
                        <option value="Whipped Cream">Whipped Cream</option>
                    </select>
                </label><br/>
                <label htmlFor="additions">
                    <select id="additions" name="additions">
                        <option value="No Foam">No Foam</option>
                        <option value="Cinnamon">Cinnamon</option>
                        <option value="Caramel Drizzle">Caramel Drizzle</option>
                        <option value="Whipped Cream">Whipped Cream</option>
                    </select>
                </label><br/>
                <label htmlFor="specialInstructions">
                    <textarea name="specialInstructions" id="specialInstructions" placeholder="Please add any special instructions"></textarea>
                </label><br/>
                <button type="submit">Order Coffee</button>
            </form>
        </div>
    )
}

export default CoffeeForm
