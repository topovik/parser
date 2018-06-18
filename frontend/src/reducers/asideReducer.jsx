const initialState = {
    asideArticles: []
}

const asideReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ASIDE_LOADING':
            return { ...state }

        case 'FETCH_ASIDE_SUCCESS':
            return { ...state, asideArticles: action.asideArticles }

        case 'FETCH_ASIDE_ERROR':
            return { ...state }

        default:
            return state
    }
}

export default asideReducer