const loading = () => ({ type: 'FETCH_ASIDE_LOADING' })
const loaded = (asideArticles) => ({ type: 'FETCH_ASIDE_SUCCESS', asideArticles })
const error = () => ({ type: 'FETCH_ASIDE_ERROR' })


const loadAside = () => (dispatch) => {
    dispatch(loading())
    
    fetch('http://localhost:6060/api/asidearticles')
        .then(response => response.json())
        .then(item => item.map(object => {
            return [{
                title: object.title,
                images: object.images,
                id: object.id
            }]
        }))
        .then(asideArticles => dispatch(loaded(asideArticles)))
        .catch(() => dispatch(error()))
}




export default loadAside