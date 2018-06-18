import React, { Component } from 'react'

class ButtonMore extends Component {
    render() {
        return (
            <button onClick={() => this.props.loadSeeMore(this.props.articlesLength.length)}>See More</button>
        )
    }
}



export default ButtonMore