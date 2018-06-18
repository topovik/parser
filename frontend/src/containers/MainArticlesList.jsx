import React, { Component } from 'react'
import load from '../actions/mainAction'
import loadArticle from '../actions/articleAction'
import loadSeeMore from '../actions/seeMoreAction'
import loadAside from '../actions/asideAction'
import { connect } from 'react-redux'
import MainArticles from '../components/MainArticles'
import ButtonMore from '../components/ButtonMore'
import AsideArticles from '../components/AsideArticles'

class MainArticlesList extends Component {

    componentDidMount() {
        this.props.load()
        this.props.loadAside()
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

        const asideList = this.props.asideArticles.map(p => {
            return <AsideArticles
                title={p[0].title}
                images={p[0].images}
                key={p[0].id}
                item={p[0]}
                loadArticle={this.props.loadArticle} />
        })

        return (
            <div>
                {mainList}
                <ButtonMore articlesLength={this.props.articlesList}
                    loadSeeMore={this.props.loadSeeMore}
                />
                {asideList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articlesList: state.fetchReducer.mainArticles,
        asideArticles: state.asideReducer.asideArticles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => dispatch(load()),
        loadArticle: (id) => dispatch(loadArticle(id)),
        loadSeeMore: (count) => dispatch(loadSeeMore(count)),
        loadAside: () => dispatch(loadAside())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainArticlesList)