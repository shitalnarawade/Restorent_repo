import React, {Fragment} from 'react'
// import './App.css';
import Header from './Components/Layouts/Header';
import Meals from './Components/Meals/Meals';
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
    
  );
}

export default App;
