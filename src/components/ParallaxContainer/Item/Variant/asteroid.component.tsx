import React, {FunctionComponent} from 'react';

interface AsteroidProps {
}

const Asteroid: FunctionComponent<AsteroidProps> = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
            <ellipse cx="50" cy="50" rx="45" ry="30" stroke="black" fill="transparent" stroke-width="5" />
        </svg>
    );
};

export default Asteroid;
