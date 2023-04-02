const initialState = {
    isInitialized: false,
    Error: '' as string | null
}

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

//types
type ActionsTypes = ReturnType<typeof setInitializedAC>
type appReducerType = typeof initialState

