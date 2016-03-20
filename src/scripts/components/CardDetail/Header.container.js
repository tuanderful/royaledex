import { connect } from 'react-redux';
import { removeCompareCard } from '../../actions';
import Header from './Header';

// NOTE: is this needed?
const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
    onClose: (id) => {
        dispatch(removeCompareCard(id));
    },
});

const CardDetailHeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default CardDetailHeaderContainer;
