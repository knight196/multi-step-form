export const initialState = {
 plans:{},
    addOns:[]
}

const reducer = (state,action) => {


    switch (action.type){

        case 'set_addons':
            return{
                ...state,
                addOns:[...action.item]
            }

        case 'set_plans':
           return {
                ...state,
                plans:{...action.item}
            }


        default:
            return state

    }



}

export default reducer