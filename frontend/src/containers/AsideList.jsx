import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadAside from '../actions/asideAction';
import AsideArticles from '../components/AsideArticles';
import loadArticle from '../actions/articleAction';

class AsideList extends Component {

    componentDidMount() {
        this.props.loadAside()
    }

    render() {
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
                {asideList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        asideArticles: state.asideReducer.asideArticles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadAside: () => dispatch(loadAside()),
        loadArticle: (id) => dispatch(loadArticle(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideList)