import React, {FunctionComponent} from 'react';

interface PlanetProps {
}

const Planet: FunctionComponent<PlanetProps> = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
            <circle cx="50" cy="50" r="50"/>
        </svg>
    );
}

export default Planet;
