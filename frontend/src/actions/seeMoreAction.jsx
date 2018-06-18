const loading = () => ({ type: 'FETCH_ARTICLES_LOADING' })
const loaded = (mainArticles) => ({ type: 'PUSH_ARTICLES', mainArticles })
const error = () => ({ type: 'FETCH_ARTICLES_ERROR' })


const loadSeeMore = (count) => (dispatch, getState) => {
    let countArticles = count;
    dispatch(loading())
 
    fetch(`http://localhost:6060/api/${countArticles}/nextarticles`)
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




export default loadSeeMore