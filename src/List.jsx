import React from "react";

const list = [
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

const List  = () => {
    return (
        <ul>
            {list.map(function (item) {
                return (
                    <li key={list.objectID}>
                    </li>
                )
            })}
        </ul>
    )
}

export default List;