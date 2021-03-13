import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import DisplayItem from './components/DisplayItem/DisplayItem';
import AddItem from './components/AddItem/AddItem';
function App(props) {
    return (
        <div className='container'>
            <DisplayItem/>
            <AddItem/>
        </div>
    );
}

export default App;