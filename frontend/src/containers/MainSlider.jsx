import React, { Component } from 'react'
import Carousel from 'nuka-carousel';
import { connect } from 'react-redux';
import loadSlider from '../actions/sliderAction';
import loadArticle from '../actions/articleAction';
import '../style/MainSlider.css'
import SliderArticles from '../components/SliderArticles'

class MainSlider extends Component {

    componentDidMount() {
        this.props.loadSlider()
    }

    render() {
        const sliderList = this.props.sliderArticlesList.map(t => {
            return <SliderArticles
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
        sliderArticlesList: state.sliderReducer.sliderArticles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadSlider: () => dispatch(loadSlider()),
        loadArticle: (id) => dispatch(loadArticle(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSlider)