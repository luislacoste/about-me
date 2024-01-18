import './App.css';
import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log("You clicked me!");
  }


  if (count < 10) {
    return (
      <button onClick={handleClick}>
        You clicked me {count} times!
      </button>
    );
  } else {
    return (
      <h2 >
        Good job! You clicked me {count} times!
      </h2>
    );
  }
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}