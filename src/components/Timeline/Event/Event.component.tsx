import React, {FunctionComponent, useLayoutEffect, useRef, useState} from 'react';
import {Event as EventType} from "../Timeline.type";
import {Content, Card, Name, Wrapper} from './Event.style';
import {isInViewport as isElInViewport} from "../../../helpers/utils";

interface EventProps {
    event: EventType;
    index: number;
}

const Event: FunctionComponent<EventProps> = ({event, index}) => {
    const eventRef = useRef<HTMLDivElement>(null);
    const [isInViewport, setIsInViewport] = useState(false);

    const handleScroll = () => {
        if (eventRef && eventRef.current) {
            setIsInViewport(isElInViewport(eventRef.current, true));
        }
    };

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // returned function will be called on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Wrapper index={index} ref={eventRef} active={isInViewport}>
            <Card>
                <Name>{event.name}</Name>
                <Content>{event.description}</Content>
            </Card>
        </Wrapper>
    );
};

export default Event;
