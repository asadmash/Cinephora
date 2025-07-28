// STEP:04 -> IMPORT THE SEACH COMPONENT
import Search from './components/Search';

const App = () => {
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
             {/* STEP:02-> IMPORT HERO IMAGE */}
            <img src="./hero-img.png" alt="hero-banner" />
            {/* STEP:01-> CREATE A HEADER AND DUMMY SEARCH ELEMENT */}
            <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
            {/* STEP:3 -> IMPORT THE SEARCH COMPONENT */}
            <Search/>
          </header>
        </div>
      </div>
    </main>
  )
}

export default App