import { connect } from 'react-redux';
import { removeCompareCard } from '../actions';
import CardCompare from '../components/CardCompare';

function _getSelectedCards(cards) {
    return cards.filter(c => c.selected);
}

const mapStateToProps = (state) => ({
    cards: _getSelectedCards(state.cards),
});

const mapDispatchToProps = (dispatch) => ({
    onCardClick: (id) => {
        dispatch(removeCompareCard(id));
    },
});

const CardCompareContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardCompare);

export default CardCompareContainer;
