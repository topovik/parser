const loading = () => ({ type: 'FETCH_ARTICLES_LOADING' })
const loaded = (mainArticles) => ({ type: 'FETCH_ARTICLES_SUCCESS', mainArticles })
const error = () => ({ type: 'FETCH_ARTICLES_ERROR' })


const load = () => (dispatch) => {
    dispatch(loading())
    
    fetch('http://localhost:2020/api/mainarticles')
        .then(response => response.json())
        .then(item => item.map(object => {
            return [{
                title: object.title,
                images: object.images,
                id: object.id
            }]
        }))
        .then(mainArticles => dispatch(loaded(mainArticles)))
        .catch(() => dispatch(error()))
}




export default load

