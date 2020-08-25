import React, {FunctionComponent} from 'react';
import {Event as EventType} from "../Timeline.type";
import {Content, EventStyled, EventSection, Name} from './Event.style';

interface EventProps {
    event: EventType
}

const Event: FunctionComponent<EventProps> = ({event}) => {
    return (
        <EventStyled>
            <EventSection>
                <Name>{event.name}</Name>
                <Content>{event.description}</Content>
            </EventSection>
        </EventStyled>
    );
}

export default Event;
