import { connect } from 'react-redux';
import { removeCompareCard } from '../../actions';
import Header from './Header';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
    onClose: (id) => {
        console.log('CLOSING on', id);
        dispatch(removeCompareCard(id));
    },
});

const CardDetailHeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default CardDetailHeaderContainer;
