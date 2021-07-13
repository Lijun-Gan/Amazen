
let defaultState = {2: true, 3: true, 5: true, 7: true, 10: true, 12: true, 15: true, 17: true, 18: true, 20: true };

// while(Object.values(defaultState).length < 3){
//     // Math.floor(Math.random() * (max - min + 1) + min) 
//     //The maximum is inclusive and the minimum is inclusive
    
//     let num = Math.floor(Math.random() * (18 - 1 + 1) + 1)
//     defaultState[num] = 0.75
// }

const primeReducer = (state = defaultState, action) => {
    Object.freeze(state);

    switch(action.type){
             
        default:
            return state;
    }
};

export default primeReducer;