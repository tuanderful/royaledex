import { connect } from 'react-redux';
import { removeCompareCard } from '../actions';
import CardCompare from '../components/CardCompare';

// const getSelectedCards = (cards) => cards;

const _CARDS_JSON = require('../../../data/cards.json');

// comparator is an array of keys
function getSelectedCards(comparator) {
    return comparator.map((key) => _CARDS_JSON[key]);
}

const mapStateToProps = (state) => ({
    cards: getSelectedCards(state.comparator),
});

const mapDispatchToProps = (dispatch) => ({
    onCardClick: (id) => {
        console.log('delete on', name);
        dispatch(removeCompareCard(id));
    },
});

const CardCompareContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardCompare);

export default CardCompareContainer;
