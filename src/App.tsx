import React from 'react';
import { useState } from 'react';
import { data } from './data';
import { Item } from './component/ListItem';
import List from './component/List';

const App = () => {
  const [people, setPeople] = useState<Item[]>(data);
  return (
    <div className="App">
      <h2>{people.length} birthdays today</h2>
      <List data={people} />
      <button onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;
