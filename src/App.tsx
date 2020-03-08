import React from 'react';
import {Event} from './components/Timeline/Timeline.type'
import Timeline from "./components/Timeline/Timeline.component";

// TODO: Remove this array when we'll receive data from DB
const events: Event[] = [
  {id: 1, name: 'Event 1', date: '13-10-1992', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit...',},
  {id: 2, name: 'Event 2', date: '13-10-1992', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit...',},
  {id: 3, name: 'Event 3', date: '13-10-1992', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit...',},
  {id: 4, name: 'Event 4', date: '13-10-1992', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit...',},
  {id: 5, name: 'Event 5', date: '13-10-1992', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit...',},
];

function App() {
  return (
    <Timeline events={events} />
  );
}

export default App;
