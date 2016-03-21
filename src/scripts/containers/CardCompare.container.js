import { connect } from 'react-redux';
import { removeCardToCompare } from '../actions';
import CardCompare from '../components/CardCompare';

function _getSelectedCards(cards) {
    return cards.filter(c => c.selected);
}

const mapStateToProps = (state) => ({
    cards: _getSelectedCards(state.cards),
});

const mapDispatchToProps = (dispatch) => ({
    onCardClick: (id) => {
        dispatch(removeCardToCompare(id));
    },
});

const CardCompareContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardCompare);

export default CardCompareContainer;
