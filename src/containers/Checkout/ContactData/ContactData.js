import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Input from '../../../components/UI/Input/input'

class ContactData extends Component{
    state={
        orderForm: {
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your name'},
                value:'',
                validation:{
                    required:true
                },
                valid:false
            },
            street: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false
            },
            zipCode: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'ZIP Cde'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false
            },
            country: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false
            },
            email: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your E-mail'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false
            },
            deliveryMethod: {
                elementType:'select',
                elementConfig:{
                    options:[
                        {value:'fastest', displayValue:'Fastest'},
                        {value:'cheapest', displayValue:'Cheapest'}
                        ]
                },
                value:''
            },
        },
        loading:false
    };

    orderHandler=(event)=>{
        event.preventDefault();
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false})
            });

    };

    checkValidity(value, rules){
        let isValid = false;
        if(rules.required){
            isValid = value.trim() !== '';
        }
        if(rules.minLength){
            isValid =value.length >= rules.minLength

        }
        return isValid;

    }

    inputChangeHandler=(event, inputIdentifier)=>{
        const updateOrderForm={
            ...this.state.orderForm
        }
        const updateFormElement ={
            ...updateOrderForm[inputIdentifier]
        }
        updateFormElement.value=event.target.value;
        updateFormElement.valid=this.checkValidity(updateFormElement.value, updateFormElement.validation);
        updateOrderForm[inputIdentifier] = updateFormElement;
        this.setState({orderForm: updateOrderForm});

    }
    render(){
        const formElementsArray =[];
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form>
                {formElementsArray.map(formElemnt =>(
                    <Input key={formElemnt.id}
                           elementType={formElemnt.config.elementType}
                           elementConfig={formElemnt.config.elementConfig}
                           value={formElemnt.config.value}
                           // changed={this.inputChangeHandler(event, formElemnt.id)}
                    />
                ))}
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form= <Spinner/>;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact</h4>
                {form}
            </div>
        )
    }

}
export default ContactData;