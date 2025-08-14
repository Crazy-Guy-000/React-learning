import { Fragment } from "react";


function ListGroup() {
    const items = [
        'New york',
        "San Francisco",
        'Tokyo',
        "london",
        'Paris'
    ];

    

  return (
    <>
        <h1>Hello</h1>
        <ul ClassName="list-group">
          {items.map( item => <li key={item}>{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;
