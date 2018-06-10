import React, { Component } from 'react'
import ArticlesList from './containers/ArticlesList'
import MainArticlesList from './containers/MainArticlesList'

class App extends Component {

    render() {
        return (
            <div>
                <div>
                    <MainArticlesList />
                </div>
                <div>
                    <ArticlesList />
                </div>
            </div>

        )
    }
}

export default App