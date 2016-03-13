import { connect } from 'react-redux';
// import { toggleTodo } from '../actions';
import { selectCard } from '../actions';
import CardGrid from '../components/CardGrid';

const getSelectedCards = (cards) => cards;

const mapStateToProps = (state) => ({
    cards: getSelectedCards(state.cards, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
    onCardClick: (name) => {
        console.log('clicked on', name);
        dispatch(selectCard(name));
    },
});

const CardGridContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardGrid);

export default CardGridContainer;
