
export const types = {
    CLEAR_ERROR: 'APP/CLEAR_ERROR'
}

export const actions = {
    clearError: () => ({
        type: types.CLEAR_ERROR
    })
}

const reducer = (state = {}, action) => {
    const { type, error } = action
    if(type === types.CLEAR_ERROR) {
        return {...state, error: null}
    } else if (error) {
        return {...state, error}
    }
    return state
}

export default reducer

//select
export const getError = (state) => {
    return state.app.error
}