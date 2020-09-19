import RellaxWrapper from "react-rellax-wrapper";
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
        left: number,
        top: number,
        speed: number,
    }
}

const Item: FunctionComponent<ItemProps> = ({parameters}) => {
    const { variant, left, top, speed } = parameters;
    const VariantCmpnt:FunctionComponent<{style: object}> = VariantComponent[variant || Variant.asteroid].component;
    const variantStyle = {
        left: `${left}%`,
        top: `${top}px`,
    }

    return (
       <RellaxWrapper speed={speed} percentage={.5}>
            <VariantCmpnt style={variantStyle} />
       </RellaxWrapper>
    );
}

export default Item;



