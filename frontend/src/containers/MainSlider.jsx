import React, { Component } from 'react'
import Carousel from 'nuka-carousel';
import { connect } from 'react-redux';
import '../style/MainSlider.css'
import MainArticles from '../components/MainArticles'

class MainSlider extends Component {
    render() {
        const sliderList = this.props.articlesList.map(t => {
            return <MainArticles
                title={t[0].title}
                images={t[0].images}
                key={t[0].id}
                item={t[0]}
                loadArticle={this.props.loadArticle}

            />
        })


        return (
            <Carousel slidesToShow={4} cellAlign="left"
                renderCenterLeftControls={({ previousSlide }) => (
                    <React.Fragment></React.Fragment>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <React.Fragment></React.Fragment>
                )}
                renderBottomCenterControls={({ goToSlide }) => (
                    <React.Fragment></React.Fragment>
                )}
                autoplay={false}
            >
                {sliderList}
            </Carousel>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articlesList: state.fetchReducer.mainArticles
    }
}

export default connect(mapStateToProps)(MainSlider)