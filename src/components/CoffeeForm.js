import React, {useState,useEffect} from 'react'
import * as yup from 'yup';
import axios from 'axios';
import Order from './Order'

const CoffeeForm = (props) => {

    console.log(props)

    const [formState,setFormState] = useState({
        name:"",
        phone:"",
        coffeeType:{
            regular:false,
            latte:false,
            americano:false,
            flatWhite:false,
            cappucino:false,
            espresso:false
        },
        temp:{
            hot:false,
            iced:false
        },
        milkChoice:{
            none:false,
            regular:false,
            soy:false,
            oat:false,
            almond:false,
            nonfat:false,
            skim:false
        },
        additions:{
            noFoam:false,
            cinnamon:false,
            whippedCream:false,
            caramel:false
        },
        specialInstructions:""
    })

    const [errors,setErrors] = useState({
        name:"",
        phone:""
    })
    const [isDisabled,setIsDisabled] = useState(true)


    // inputChange function 
    const inputChange = (e) =>{
       if (e.target.type === 'checkbox'){
           setFormState({...formState, additions: {
               ...formState.additions, [e.target.value]:e.target.checked
           }})
        }else{
               setFormState({...formState,[e.target.name]:e.target.value})
        }if (e.target.name === "name"){
               //validate
               validateChanges(e)
           }
       }


    //submitForm function
    // this will also post to DB
    const submitForm = (e) =>{
        e.preventDefault();
        axios.post("https://reqres.in/api/users",formState)
        .then(res => props.addOrder(res.data))
        .catch(err => console.log(err))
    }


    //validatechanges using form Schema 

    useEffect(() =>{
        formSchema.isValid(formState).then(valid => setIsDisabled(!valid));
    },[ formState ])
    
    const validateChanges = (e) =>{
        e.persist()
        yup.reach(formSchema,e.target.name).validate(e.target.value)
        .then(valid => setErrors({...errors,[e.target.name]:''}))
        .catch(err => setErrors({...errors,[e.target.name]:err.errors[0]}))
    }
    //create formSchema
    
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const formSchema = yup.object().shape({
        name:yup.string().required("Please enter your name").min(2,"That's not a valid input"),
        phone:yup.string().matches(phoneRegExp,'Phone number is not valid')
    })
    
    return (
        <div>
            <form onSubmit={submitForm}>
                <h3>Coffee Form</h3>
                <label htmlFor="name">
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        data-cy="name"
                        placeholder="Enter Your Name"
                        value={formState.name}
                        onChange={inputChange}
                    />
                </label>
                {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
                <h3>Phone Number</h3>
                <label htmlFor="phone">
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="123-456-8790 "
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        value={formState.phone}
                        onChange={inputChange}
                    />
                </label>
                {errors.phone.length > 0 ? <p className="error">{errors.phone}</p> : null}
                <label><h3>Coffee Type</h3>
                    <select id="coffeeType" name="coffeeType" cy-date="coffeeType" defaultValue="regular" onChange={inputChange}>
                        <option data-cy="regiular" value="regular">Regular</option>
                        <option data-cy="latte" value="latte">Latte</option>
                        <option data-cy="americano" value="americano">Americano</option>
                        <option data-cy="flatWhite" value="flatWhite">Flat White</option>
                        <option data-cy="espresso" value="espresso">Espresso</option>
                        <option data-cy="cappucino" value="cappucino">Cappucino</option>
                    </select>
                </label><br/>
                <label>
                    <h3>Temperature Choice</h3>
                    <select id="temp" name="temp" defaultValue="hot" onChange={inputChange}>
                        <option data-cy="iced" value="iced">Iced</option>
                        <option data-cy="hot" value="hot">Hot</option>
                    </select>
                </label><br/>
                <label>
                    <h3>Milk Choice</h3>
                    <select id="milkChoice" name="milkChoice" defaultValue="regular" onChange={inputChange}>
                        <option data-cy="none" value="none">None</option>
                        <option data-cy="regular" value="regular">Regular</option>
                        <option data-cy="soy" value="soy">Soy</option>
                        <option data-cy="oat" value="oat">Oat</option>
                        <option data-cy="almond" value="almond">Almond</option>
                        <option data-cy="nonFat" value="nonFat">non-fat</option>
                        <option data-cy="skim" value="whippedCream">Whipped Cream</option>
                    </select>
                </label><br/>
                <label><h3>Additions</h3>
                    <input 
                        type="checkbox" 
                        name="noFoam" 
                        data-cy="noFoam" 
                        onChange={inputChange} 
                        value="noFoam"
                    />
                    No Foam<br/>
                    <input 
                        type="checkbox" 
                        name="cinnamon" 
                        data-cy="cinnamon" 
                        onChange={inputChange} 
                        value="cinnamon"
                    />
                    Cinnamon Powder<br/>
                    <input 
                        type="checkbox" 
                        name="whippedCream" 
                        data-cy="whippedCream" 
                        onChange={inputChange} 
                        value="whippedCream"
                    />
                    Whipped Cream<br/>
                    <input 
                        type="checkbox" 
                        name="caramel" 
                        data-cy="caramel" 
                        onChange={inputChange} 
                        value="caramel"
                    />
                    Caramel Drizzle
                </label><br/><br/>
                <label><h3>Special Instructions</h3>
                    <textarea name="specialInstructions" data-cy="specialInstructions"placeholder="Please add any special instructions" value={formState.specialInstructions} onChange={inputChange}></textarea>
                </label><br/>
                <button type="submit" disabled={isDisabled}>Order Coffee</button>
            </form>
            <div>
                {props.orders.map((order,index)=>{
                    return <Order order={order} key={index}/>
                })}
            </div>
        </div>
    )
}

export default CoffeeForm
