type ActionsTypes = ReturnType<typeof setInitializedAC>

let initialState = {
    isInitialized: false
}
type appReducerType = typeof initialState

export const appReducer = (state: appReducerType = initialState, action: ActionsTypes): appReducerType => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...state,
                isInitialized: action.isInitialized
            }
        default:
            return state
    }
}

//action creators
export const setInitializedAC = (isInitialized: boolean) => ({type: 'SET_INITIALIZED', isInitialized} as const)

//thunks

