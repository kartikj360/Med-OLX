export const initialState={
    basket:[] 
};

//Selector 
export const getBasketTotal = (basket)=>
    basket?.reduce((amount,item)=>item.price+amount,0);

export const getBasketDiscount=(basket)=>
    basket?.reduce((total_discount,item)=> ((item.price*item.discount)/100)+total_discount,0);


const reducer =(state ,action)=>{

    switch (action.type){ 
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item],
            
            };
            default:
                return state;

        case 'REMOVE_FROM_BASKET':
            return{
                 
                ...state,
                basket:state.basket.filter(item=>item.id !=action. id
                    )
            }
            
    }
};

export default reducer;