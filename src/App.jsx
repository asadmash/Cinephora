// STEP:04 -> IMPORT THE SEACH COMPONENT
import { useState } from 'react';
import Search from './components/Search';

const App = () => {
  // STEP:05-> CREATE A STATE TO PASS searchTerm PROPS TO SEARCH BAR CHILD COMPONENT
const [searchTerm, setSearchTerm] = useState('I am the one');
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
             {/* STEP:02-> IMPORT HERO IMAGE */}
            <img src="./hero-img.png" alt="hero-banner" />
            {/* STEP:01-> CREATE A HEADER AND DUMMY SEARCH ELEMENT */}
            <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
            {/* STEP:3 -> IMPORT THE SEARCH COMPONENT, STEP:06-> PASS THE STATE PROPS */}
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> 
          </header>
        </div>
      </div>
    </main>
  )
}

export default App