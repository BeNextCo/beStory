import React, {FunctionComponent} from 'react';
import { Event as EventType } from './Timeline.type';
import { TimelineStyled } from './Timeline.style';
import Event from "./Event/Event.component";
import Cursor from "./Cursor/Cursor.component";

interface TimelineProps {
    events: EventType[];
}

const Timeline: FunctionComponent<TimelineProps> = ({events}) => {
    return (
        <TimelineStyled>
            { events.map((event, index) => <Event key={`timeline-event-${event.id}`} event={event} index={index} />)}
            <Cursor/>
        </TimelineStyled>
    );
};

export default Timeline;
