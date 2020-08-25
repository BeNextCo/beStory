import {ParallaxProvider} from 'react-scroll-parallax';
import React, {FunctionComponent} from 'react';
import Item, {Variant} from "./Item/Item.component";

interface ParallaxContainerProps {
}

// const getRandomInt = (min: number, max: number) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

const itemsParams = [
    {
        variant: Variant.planet,
        size: 150,
    },
    {
        variant: Variant.asteroid,
        size: 80,
    }
]

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
