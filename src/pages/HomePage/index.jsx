import './style.css';
import { useEffect, useState } from 'react';
import { Joke } from '../../components/Joke/Joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch(`http://localhost:4000/api/jokes`)
      const responseData = await response.json();
      setJokes(responseData.data)
      console.log(responseData.data)

    }
    fetchJokes();
  }, [])
  
  return (
    <div>
      {jokes.map((joke) => (
        <Joke key={joke.id} userAvatar={joke.avatar} userName={joke.name} text={joke.text} likes={joke.likes} dislikes={joke.dislikes}/>
      ))}
    </div>
  );
};
