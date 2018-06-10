const initialState = {
    mainArticles: [],
    status: ''
}

const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ARTICLES_LOADING':
            return { ...state, status: 'loading' }

        case 'FETCH_ARTICLES_SUCCESS':
            return { ...state, mainArticles: action.mainArticles, status: 'success' }

        case 'FETCH_ARTICLES_ERROR':
            return { ...state, status: 'error' }

        default:
            return state
    }
}

export default fetchReducer