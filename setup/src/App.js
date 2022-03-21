import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState({
    reset: false,
    data: data
  });
 
  return <main>
    <section className='container'>
<h3>{people.data.length} birthdays today</h3>
<List people={people.data}/>
{people.reset ? '' : (<button onClick={() => setPeople({reset: true, data: []})}>clear all</button>)}
{people.reset ? (<button onClick={() => setPeople({reset:false, data: data})}>reset all</button>) : ''}
    </section>
    </main>
}

export default App;
