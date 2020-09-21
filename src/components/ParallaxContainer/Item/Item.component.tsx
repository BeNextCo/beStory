import RellaxWrapper from "react-rellax-wrapper";
import React, {FunctionComponent, CSSProperties} from 'react';

// Variants components
import {Planet, Asteroid} from './Variant';
import {randomIntFromInterval} from "../../../helpers/utils";

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
    };
}

const Item: FunctionComponent<ItemProps> = ({parameters}) => {
    const { left, top, speed } = parameters;
    const variant = parameters.variant || Variant.asteroid;
    const VariantCmpnt:FunctionComponent = VariantComponent[variant].component;
    const variantSizeBoundaries = {
        planet: {min: 50, max: 250},
        asteroid: {min: 70, max: 130},
    } as Record<Variant, {min: number, max: number}>;
    const size = randomIntFromInterval(variantSizeBoundaries[variant].min, variantSizeBoundaries[variant].max);
    const variantStyle = {
        position: 'absolute',
        left: `${left}%`,
        top: `${top}px`,
        width: `${size}px`,
        height: `${size}px`,
    } as CSSProperties;

    return (
       <RellaxWrapper speed={speed} percentage={.5}>
            <div style={variantStyle}>
                <VariantCmpnt />
            </div>
       </RellaxWrapper>
    );
};

export default Item;
