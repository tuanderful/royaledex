import React, { PropTypes } from 'react';

require('./Container.css');

const Container = ({ children, styles }) => (
    <div className="Container" style={styles}>
        {children}
    </div>
);

Container.propTypes = {
    children: PropTypes.node.isRequired,
    styles: PropTypes.object,
};

export default Container;
