const initialState = {
    isInitialized: false,
    Error: '' as string | null
}

export const appReducer = (state: appReducerType = initialState, action: AppActionsTypes): appReducerType => {
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
export type AppActionsTypes = ReturnType<typeof setInitializedAC>
type appReducerType = typeof initialState

