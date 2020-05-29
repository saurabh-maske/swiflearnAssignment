import React from 'react';
import './App.css';
import Header from './components/Header' ;
import CarouselPage from './components/Carousal';
import PageNumber from './components/pageNumber';


class App extends React.Component{
 
  render(){
  return(
    <div>
      <Header/>
      <hr/>
      <h1>Concept Videos</h1>
      <h6 style={{marginLeft:"7%"}}>select a number</h6>
      <CarouselPage/>    
      <h1>Live Classes</h1>
      <h6 style={{marginLeft:"7%"}}>select a number</h6>

      <PageNumber/>
    </div>

    
  )
  }
}

export default App;
