import * as React from 'react';

import Search from './Search';
import List from './List';

const welcome = {
  greeting: 'Hellu',
  title: 'Reactuuh'
};

const Greeting = ({ text }) => {
  return <p>{text}</p>;
}

function App() {
  return (
    <div>
      <Greeting text="Hello 1 av instansen greeting" />
      <Greeting text="Hello 1 av instansen greeting" />
      <h1>{welcome.greeting} {welcome.title}</h1>

      <Search />
      <List />
      {/*  <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}> {item.title}</a>
              </span>
              <span> {item.author}</span>
              <span> {item.num_comments}</span>
              <span> {item.points} </span>
              <span>{item.null}</span>

            </li>
          );
        })}
      </ul> */}
    </div>
  );
}
export default App;