import React, {CSSProperties, FunctionComponent} from 'react';
import { ReactComponent as Planet1 } from './img/planets/1.svg';
import { ReactComponent as Planet2 } from './img/planets/2.svg';
import { ReactComponent as Planet3 } from './img/planets/3.svg';
import {randomIntFromInterval} from "../../../../helpers/utils";

interface PlanetProps {
}

const Planet: FunctionComponent<PlanetProps> = () => {
    const planets = [Planet1, Planet2, Planet3];
    const index = randomIntFromInterval(0, 2);
    const SelectedPlanet = planets[index];
    return <SelectedPlanet/>;
};

export default Planet;
