import React, { Component } from 'react'


class MainArticles extends Component {

    render() {
        console.log(this.props.images)
        return (
            <div onClick={() => this.props.loadArticle(this.props.item.id)} >
                <p>{this.props.title}</p>
                <img src={this.props.images} alt=""/>
            </div>
        )
    }

}


export default MainArticles