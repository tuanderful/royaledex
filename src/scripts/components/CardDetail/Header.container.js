import { connect } from 'react-redux';
import { removeCardToCompare } from '../../actions';
import Header from './Header';

// NOTE: is this needed?
const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
    onClose: (id) => {
        dispatch(removeCardToCompare(id));
    },
});

const CardDetailHeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default CardDetailHeaderContainer;
