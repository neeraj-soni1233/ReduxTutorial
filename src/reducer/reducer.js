
const iState ={
    name: "Neeraj Soni",
    Tech:['Swift','Java Script','React Native']
}

const reducer = (state =iState,action) => {

    if (action.type =='CHANGE_NAME'){
        return{
            ...state,
            name:action.payload
        }
    }
    return state

}
export default reducer