
const iState = {
    name: "Neeraj Soni",
    Tech: ['Swift', 'Java Script', 'React Native']
}


// reducer  is use to update data into central store (which is created into index) 
const reducer = (state = iState, action) => {

    if (action.type == 'CHANGE_NAME') {
        return {
            ...state, // spread operator
            name: action.payload
        }
    }
    return state

}
export default reducer