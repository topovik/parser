import React, { Component } from 'react'
import load from '../actions/mainAction'
import loadArticle from '../actions/articleAction'
import loadSeeMore from '../actions/seeMoreAction'
import { connect } from 'react-redux'
import MainArticles from '../components/MainArticles'
import ButtonMore from '../components/ButtonMore'
import '../style/MainArticlesList.css'

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
            <React.Fragment>
                <div className="MainArticlesList">
                    {mainList}
                </div>
                <ButtonMore articlesLength={this.props.articlesList}
                    loadSeeMore={this.props.loadSeeMore}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articlesList: state.fetchReducer.mainArticles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => dispatch(load()),
        loadArticle: (id) => dispatch(loadArticle(id)),
        loadSeeMore: (count) => dispatch(loadSeeMore(count))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainArticlesList)