const initialState = {
    mainArticles: []
}

const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ARTICLES_LOADING':
            return { ...state }

        case 'FETCH_ARTICLES_SUCCESS':
            return { ...state, mainArticles: action.mainArticles }

        case 'FETCH_ARTICLES_ERROR':
            return { ...state }

        case 'PUSH_ARTICLES':
            return {...state, mainArticles: state.mainArticles.concat(action.mainArticles)}

        default:
            return state
    }
}

export default fetchReducer