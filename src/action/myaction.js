// export const anotherName = (name){
//     return {
//         type:'CHANGE_NAME',
//         payload:name
//     }
// }

// with out asyn key
// export const anotherName = (name) => {
//     return (dispatch) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(res => res.json())
//             .then(res2 => {
//                 dispatch({
//                     type: 'CHANGE_NAME',
//                     payload: res2[0].email
//                 })

//             })

//     }
// }

// with  asyn wait
export const anotherName = (name) => {
    return async (dispatch) => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const res2 = await data.json()
        dispatch({
            type: 'CHANGE_NAME',
            payload: res2[0].email
        })
        }  
}