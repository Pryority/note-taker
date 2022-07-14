import React from 'react';
import './index.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import AllNotes from './AllNotes';

function App() {
  return (
    <Router>
      <div className="">
        <nav className="flex justify-between w-full bg-green-600 p-4">
          <div className="">
            <Link to="/" className="font-semibold">
              Note Taker
            </Link>
          </div>
          <div id='nav-end' className='flex space-x-4 items-center'>
            <div className="">
              <Link to="/" className="font-semibold">
                All Notes
              </Link>
            </div>
            <div className="">
              <Link to="/newnote" className="font-semibold">
                New Note
              </Link>
            </div>
          </div>
        </nav>
        {/* <Route exact path="/" component={AllNotes} /> */}
        {/* <Route path="/newnote" component={NewNote} />
        <Route path="/note/:id" component={EditNote} /> */}
      </div>
    </Router >
  );
}

export default App;
