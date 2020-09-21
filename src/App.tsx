import React, {useState ,useEffect} from 'react';
// import {Event} from './components/Timeline/Timeline.type'
import Timeline from "./components/Timeline/Timeline.component";
import axios from 'axios';
import ParallaxContainer from "./components/ParallaxContainer/ParallaxContainer.component";
import Background from "./components/Background/Background.component";

function App() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const result = await axios(
        'https://bestory.le-dev.com/events',
    );

    setEvents(result.data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
      <>
        <Background/>
        <Timeline events={events} />
        <ParallaxContainer />
      </>
  );
}

export default App;
