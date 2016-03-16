import React, { PropTypes } from 'react';

const PrettyKeyName = {
    name: 'Name',
    rarity: 'Rarity',
    type: 'Type',
    hitSpeed: 'Hit Speed',
    targets: 'Targets',
    speed: 'Speed',
    range: 'Range',
    radius: 'Radius',
    deployTime: 'Deploy Time',
    count: 'Count',
    cost: 'Cost',
    unlocks_at: 'Unlocks At',
};


const Stat = ({ card, statKey }) => {
    let value = card[statKey];

    if (statKey === 'range' && card[statKey] === 0) {
        value = 'melee';
    }

    return (
        <p>
            {PrettyKeyName[statKey]}{": "}{value}
        </p>
    );
};


Stat.propTypes = {
    card: PropTypes.object.isRequired,
    statKey: PropTypes.string.isRequired,
};

export default Stat;
