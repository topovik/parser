import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ArticlesList from './containers/ArticlesList';
import MainArticlesList from './containers/MainArticlesList';
import AsideList from './containers/AsideList';
import MainSlider from './containers/MainSlider'

import './style/App.css'


class App extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <img src="http://www.profun.com.tr/assets/img/logo_top.png" alt="" />
                </header>
                <section className="MainSlider">
                    <MainSlider />
                </section>
                <main>
                    <Route exact path='/' component={MainArticlesList} />
                </main>
                <Route path='/article/:id' component={ArticlesList} />
                <aside>
                    <AsideList />
                </aside>
                <footer>
                    <p>Don`t stop</p>
                </footer>
            </div>
        )
    }
}

export default App