import { Parallax } from 'react-scroll-parallax';
import React, {FunctionComponent} from 'react';

// Variants components
import {Planet, Asteroid} from './Variant'

export enum Variant {
    planet = 'planet',
    asteroid = 'asteroid'
}

class VariantComponent {
    static readonly planet  = new VariantComponent(Variant.planet, Planet);
    static readonly asteroid = new VariantComponent(Variant.asteroid, Asteroid);

    // private to disallow creating other instances of this type
    private constructor(private readonly variant: Variant, public readonly component: FunctionComponent) {
    }

    toString() {
        return this.variant;
    }
}

interface ItemProps {
    parameters: {
        variant?: Variant
        size: number,
    }
}

const Item: FunctionComponent<ItemProps> = ({parameters}) => {
    const { variant, size } = parameters;
    const VariantCmpnt = VariantComponent[variant || Variant.asteroid].component;
    const parallaxOffset = {y: [`${size}px`, `${-size}px`]};

    return (
       <Parallax y={parallaxOffset.y}>
            <VariantCmpnt size={size} />
       </Parallax>
    );
}

export default Item;



