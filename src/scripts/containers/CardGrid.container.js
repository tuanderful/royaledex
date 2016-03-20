import { connect } from 'react-redux';
// import { toggleTodo } from '../actions';
import { toggleCardSelection } from '../actions';
import CardGrid from '../components/CardGrid';

const getSelectedCards = (cards) => cards;

const mapStateToProps = (state) => ({
    cards: getSelectedCards(state.cards, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
    onCardClick: (id) => {
        console.log('clicked on', id);
        dispatch(toggleCardSelection(id));
    },
});

const CardGridContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardGrid);

export default CardGridContainer;
