import { connect } from 'react-redux';
import { removeCompareCard } from '../actions';
import CardCompare from '../components/CardCompare';

// const getSelectedCards = (cards) => cards;

const mapStateToProps = (state) => ({
    cards: [state.comparator[0]],
});

const mapDispatchToProps = (dispatch) => ({
    onCardClick: (name) => {
        console.log('delete on', name);
        dispatch(removeCompareCard(name));
    },
});

const CardCompareContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardCompare);

export default CardCompareContainer;
