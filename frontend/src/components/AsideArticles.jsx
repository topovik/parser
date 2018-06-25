import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AsideArticles extends Component {

    render() {
        return (
            <Link to={`/article/${this.props.item.id}`} onClick={() => this.props.loadArticle(this.props.item.id)}>
            <div>
                <p>{this.props.title}</p>
                <img src={this.props.images} alt={this.props.title} />
            </div>
        </Link>
        )
    }

}


export default AsideArticles