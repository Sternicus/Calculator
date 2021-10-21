import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
function App() {
 
  return (
    <div className="App">
      <Roll bottom duration={3000}>
       <div className="InfoBox">
        <button onClick={(e) => {
              e.preventDefault();
                window.location.href='https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-scaled.jpg?resize=768,549';}
                }><p>Dogs!</p></button>
      </div>
      </Roll>
      <Roll top duration={3000}>
        <div className="InfoBox">
          <button  onClick={(e) => {
              e.preventDefault();
                window.location.href='https://www.rd.com/wp-content/uploads/2021/03/GettyImages-140594401-1-scaled.jpg';}
                  }><p>Cats!</p></button>
        </div>
      </Roll>
    </div>
    
  );
}

export default App;
