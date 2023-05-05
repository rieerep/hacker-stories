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

const App = () => {

  function handleClick() {
    console.log('Button Click');
  }

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
      releaseYear: 2001,
      ISBN: 544321,

    },
    {
      title: 'Redux',
      url: 'https://reactjs.org',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
      releaseYear: 2010,
      ISBN: 123456
    },
  ];
  return (
    <div>

      <button type='button' onClick={handleClick}>Event handler</button>

      <Greeting text="Hello 1 av instansen greeting" />
      <Greeting text="Hello 1 av instansen greeting" />
      <h1>{welcome.greeting} {welcome.title}</h1>

      <Search />
      <List list={stories} />
    </div>
  );
}
export default App;