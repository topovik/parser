import React, { Component } from 'react'


class MainArticles extends Component {

    render() {
        return (
            <div onClick={() => this.props.loadArticle(this.props.item.id)} >
                <p>{this.props.title}</p>
                <p>{this.props.images}</p>
            </div>
        )
    }

}


export default MainArticles