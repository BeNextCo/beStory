import React, {useLayoutEffect, useState, useRef} from 'react';
import {Container, RetroThruster, Rocket, Side, Thruster} from "./Cursor.style";

enum ScrollDirection {
    up = 'UP',
    down = 'DOWN',
    idle = 'IDLE'
}

const Cursor = () => {
    const [idleTimeout, setIdleTimeout] = useState<number>(0);
    const oldScroll = useRef<number>(0);
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(ScrollDirection.idle);

    const handleScroll = () => {
        window.clearTimeout(idleTimeout);
        setScrollDirection(getScrollDirection());

        oldScroll.current = window.scrollY;

        // If scroll is not triggered for 2 seconds, set the direction to idle
        setIdleTimeout(setTimeout(() => {
            setScrollDirection(ScrollDirection.idle);
        }, 2000));
    };

    const getScrollDirection = () => {
        if (oldScroll.current > window.scrollY) {
            return ScrollDirection.up;
        }

        return ScrollDirection.down;
    };

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // returned function will be called on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container>
            <RetroThruster isActive={scrollDirection === ScrollDirection.down} side={Side.left}/>
            <RetroThruster isActive={scrollDirection === ScrollDirection.down} side={Side.right} />
            <Rocket/>
            <Thruster isActive={scrollDirection === ScrollDirection.up} />
        </Container>
    );
};

export default Cursor;