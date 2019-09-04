

import { FETCH_TODOLIST} from '../actions/types'
// import isEmpty from '../validation/is-empty'

const initialState = {
    todos : {}
}
export default function(state = initialState , action){
    switch(action.type){

        case FETCH_TODOLIST:
            return{
                ...state,
                todos :action.payload
            }


        default : 
        return state;
    }

}
const isEmpty = (value) =>{
    return(value===undefined || value === null ||
         (typeof value=== 'object' && Object.keys(value).length===0 )||
         (typeof value === 'string' && value.trim().length === 0)
         
         )
}