import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";
import PlayVideo from "./components/PlayVideo";
import ChannelDetails from "./components/ChannelDetails";
import Body from "./components/Body";

const App = () => (
  <BrowserRouter>
    
      <Routes>
        
        <Route exact path='/' element={<Body />} />
        <Route exact path='/search/:search' element={<SearchPage />} />
        <Route exact path='/play/:id/:channelid' element={<PlayVideo />} />
        <Route exact path='/channel/:channelid' element={<ChannelDetails />} />

      </Routes>
   
  </BrowserRouter>
);

export default App;
