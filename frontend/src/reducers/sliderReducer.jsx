const initialState = {
    sliderArticles: []
}

const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SLIDER_ARTICLES_LOADING':
            return { ...state }

        case 'SLIDER_ARTICLES_SUCCESS':
            return { ...state, sliderArticles: action.sliderArticles }

        case 'SLIDER_ARTICLES_ERROR':
            return { ...state }

        default:
            return state
    }
}

export default sliderReducer