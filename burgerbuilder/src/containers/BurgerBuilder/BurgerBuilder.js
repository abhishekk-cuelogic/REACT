import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-react';
import Spinner from '../../components/UI/Spinner/Spinner';


const INGREDIENT_PRICES ={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};



class BurgerBuilder extends Component{

    state={
        ingridients:{
            meat:0,
            salad:0,
            bacon:0,
            cheese:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false,
        loading:false
    }

    updatePurchaseState(ingradients){

        const sum=Object.keys(ingradients)
            .map(igKey =>{
                return ingradients[igKey];
            })
            .reduce((sum,el)=>{
                return sum+el;
            },0)
            //console.log(this.state.purchasable);
            this.setState({purchasable: sum > 0 });
           // console.log(this.state.purchasable);
    }

    addIngridientHandler=(type)=>{
        const oldCount=this.state.ingridients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients={
            ...this.state.ingridients
        }
        updatedIngredients[type]=updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({
            ingridients:updatedIngredients,
            totalPrice:newPrice
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngridientHandler=(type)=>{
        const oldCount=this.state.ingridients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount=oldCount-1;
        const updatedIngredients={
            ...this.state.ingridients
        }
        updatedIngredients[type]=updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction;
        this.setState({
            ingridients:updatedIngredients,
            totalPrice:newPrice
        })
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler=()=>{
        this.setState({purchasing: true});
    }

    purchaseCancleHandler=()=>{
        this.setState({purchasing : false});
    }

    purchaseContinueHandler =()=>{
        //alert('You continue!');
        this.setState({loading:true});
        const order={
            ingredients:this.state.ingridients,
            price:this.state.totalPrice,
            customer:{
            name: 'Abhishek Khutwad' ,   
            address:{
                street:'Teststreet 1',
                zipCode:'41321',
                country:'US'
            },
            email:'test@test.com'      
          },
          deliveryMethod: 'fastest'
        }

        axios.post('/orders.json',order)
        .then(response =>{
            this.setState({
                loading:false,
                purchasing:false
            });
        })
        .catch(error =>{
            this.setState({
                loading:false,
                purchasing:false
            });
        });

    }

    render(){

        const disabledInfo={
            ...this.state.ingridients
        };

        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key] <= 0
        }

        let orderSummary= <OrderSummary 
            ingridients={this.state.ingridients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancleHandler}
            purchaseContinued={this.purchaseContinueHandler}/>;


        if(this.state.loading){
            orderSummary = <Spinner />;
        }


        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancleHandler}>
                   {orderSummary}
                </Modal>
                <Burger Ingridients={this.state.ingridients}/>
                <BuildControls 
                    ingridientAdded={this.addIngridientHandler}
                    ingridientRemoved={this.removeIngridientHandler}
                    disbaled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;