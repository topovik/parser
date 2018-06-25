const loading = () => ({ type: 'SLIDER_ARTICLES_LOADING' })
const loaded = (sliderArticles) => ({ type: 'SLIDER_ARTICLES_SUCCESS', sliderArticles })
const error = () => ({ type: 'SLIDER_ARTICLES_ERROR' })


const loadSlider = () => (dispatch) => {
    dispatch(loading())
    
    fetch('http://localhost:6060/api/sliderarticles')
        .then(response => response.json())
        .then(item => item.map(object => {
            return [{
                title: object.title,
                images: object.images,
                id: object.id
            }]
        }))
        .then(sliderArticles => dispatch(loaded(sliderArticles)))
        .catch(() => dispatch(error()))
}




export default loadSlider