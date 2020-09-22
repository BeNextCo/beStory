import {ParallaxProvider} from 'react-scroll-parallax';
import React, {CSSProperties, FunctionComponent} from 'react';
import Item, {Variant} from './Item/Item.component';

// const getRandomInt = (min: number, max: number) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };
const itemsParams = [
    {
        variant: Variant.asteroid,
        left: 50,
        top: 0,
        speed: -1,
    },
    {
        variant: Variant.planet,
        left: 8,
        top: 200,
        speed: -3,
    },
    {
        variant: Variant.asteroid,
        left: 19,
        top: 1000,
        speed: -4,
    },
    {
        variant: Variant.planet,
        left: 80,
        top: 2000,
        speed: -3,
    },
    {
        variant: Variant.planet,
        left: -5,
        top: 1900,
        speed: -4,
    },
    {
        variant: Variant.planet,
        left: 90,
        top: 2200,
        speed: -4,
    },
    {
        variant: Variant.planet,
        left: 30,
        top: 2300,
        speed: -1,
    },
    {
        variant: Variant.planet,
        left: 3,
        top: 1300,
        speed: 1,
    },
    {
        variant: Variant.asteroid,
        left: 55,
        top: 700,
        speed: -5,
    },
    {
        variant: Variant.planet,
        left: 40,
        top: 1400,
        speed: -3,
    },
    {
        variant: Variant.asteroid,
        left: 29,
        top: 2000,
        speed: -5,
    },
    {
        variant: Variant.asteroid,
        left: 80,
        top: 2000,
        speed: 0,
    },
    {
        variant: Variant.planet,
        left: 49,
        top: 480,
        speed: -2,
    },
    {
        variant: Variant.planet,
        left: 59,
        top: 150,
        speed: -3,
    },
    {
        variant: Variant.asteroid,
        left: 79,
        top: 200,
        speed: -4,
    },
    {
        variant: Variant.planet,
        left: 87,
        top: 350,
        speed: -5,
    },
    {
        variant: Variant.planet,
        left: 69,
        top: 680,
        speed: -2,
    },
    {
        variant: Variant.asteroid,
        left: 20,
        top: 480,
        speed: -2,
    },
];

// const itemVariants = [Variant.planet, Variant.asteroid, Variant.planet, Variant.asteroid, Variant.asteroid];

const ParallaxContainer: FunctionComponent = () => {
    // const yOff = getRandomInt(50, -100);
    const styles = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2300px',
    } as CSSProperties;
    return (
        <div style={styles}>
            {itemsParams.map((itemParams, i) => {
                return (
                    <Item parameters={itemParams} key={i} />
                );
            })}
        </div>
    );
};

export default ParallaxContainer;
