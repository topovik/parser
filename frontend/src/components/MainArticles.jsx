import React, { Component } from 'react'


class MainArticles extends Component {

    render() {

        return (
            <div onClick={() => this.props.loadArticle(this.props.item.id)} >
                <p>{this.props.title}</p>
                <img src={this.props.images} alt={this.props.title}/>
            </div>
        )
    }

}


export default MainArticles