const initialState = {
    article: [],
    status: ''
}

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ARTICLE_LOADING':
            return { ...state, status: 'loading' }

        case 'ARTICLE_LOADED_SUCCESS':
            return { ...state, article: action.article, status: 'success' }

        case 'ARTICLE_ERROR':
            return {...state, status: 'error'}

        default: 
            return state
    }

}

export default articleReducer