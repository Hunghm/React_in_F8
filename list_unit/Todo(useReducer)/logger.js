
function logger(reducer) {

    return (prevState, actions) => {
        console.group(actions.type)
        console.log('Prev state: ', prevState);
        console.log('Action: ', actions);

        const newState = reducer(prevState, actions)

        console.log('Next state: ', newState);

        console.groupEnd()
        
        return newState
    }
}

export default logger