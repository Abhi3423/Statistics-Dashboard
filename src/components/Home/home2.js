import React from 'react';
import Sidebar from './Sidebar';
import './home2.css';

function App() {
  return (
    <div className="App" id="outer-container" style={{"overflow":"hidden"}}>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <main id="page-wrap">
        <h1>Cool Restaurant</h1>
        <h2>Check out our offerings in the sidebar!</h2>
        <div className='w-52 bg-black ml-96'>scscsc</div>
      </main>
    </div>
  );
}

export default App;