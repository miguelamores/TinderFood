import { connect } from 'react-redux';
import Home from '../Home';
import { getFood, markLikedFood } from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        cards: state.foodReducer.cards,
        likedFood: state.foodReducer.likedFood
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFoodCards: () => {
            dispatch(getFood())
        },
        markLikedFood: food => {
            dispatch(markLikedFood(food))
        }
    }
}

const CardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default CardContainer