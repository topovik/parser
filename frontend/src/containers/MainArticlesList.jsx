import React, { Component } from 'react'
import load from '../actions/mainAction'
import loadArticle from '../actions/articleAction'
import { connect } from 'react-redux'
import MainArticles from '../components/MainArticles'

class MainArticlesList extends Component {

    componentDidMount() {
        this.props.load()
    }

    render() {
        const mainList = this.props.articlesList.map(t => {
            return <MainArticles
                title={t[0].title}
                images={t[0].images}
                key={t[0].id}
                item={t[0]}
                loadArticle={this.props.loadArticle}
            />
        })

        return (
            <div>
                {mainList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articlesList: state.fetchReducer.mainArticles,
        status: state.fetchReducer.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => dispatch(load()),
        loadArticle: (id) => dispatch(loadArticle(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainArticlesList)