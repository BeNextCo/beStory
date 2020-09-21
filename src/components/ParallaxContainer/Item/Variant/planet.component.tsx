import React, {CSSProperties, FunctionComponent} from 'react';

interface PlanetProps {
}

const Planet: FunctionComponent<PlanetProps> = () => {
    const style = {width: '100%', height:'100%'} as CSSProperties;
    const index = Math.floor(Math.random() * 3) + 1;
    return (
        <img src={`${process.env.PUBLIC_URL}/img/parallax-items/planets/${index}.svg`} />
    );
};

export default Planet;
