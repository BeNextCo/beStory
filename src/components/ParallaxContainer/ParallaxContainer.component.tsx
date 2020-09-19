import {ParallaxProvider} from 'react-scroll-parallax';
import React, {FunctionComponent} from 'react';
import Item, {Variant} from './Item/Item.component';

interface ParallaxContainerProps {
}

// const getRandomInt = (min: number, max: number) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };
const itemsParams = [
    {
        variant: Variant.planet,
        left: 8,
        top: 200,
        speed: -3,
    },
    {
        variant: Variant.asteroid,
        left: 19,
        top: 480,
        speed: -4,
    },
    {
        variant: Variant.asteroid,
        left: 29,
        top: 400,
        speed: -5,
    },
    {
        variant: Variant.asteroid,
        left: 40,
        top: 450,
        speed: -1,
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
        variant: Variant.asteroid,
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

const ParallaxContainer: FunctionComponent<ParallaxContainerProps> = () => {
    // const yOff = getRandomInt(50, -100);
    return (
        <ParallaxProvider>
            {itemsParams.map((itemParams, i) => {
                return (
                    <Item parameters={itemParams} key={i} />
                )
            })}
        </ParallaxProvider>
    );
}

export default ParallaxContainer;
