import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonCard from '../components/PersonCard';

const MainView: React.FC = () => {
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [country, setCountry] = useState<string>('fi');
  const [people, setPeople] = useState<any[]>([]);
  const [dogImages, setDogImages] = useState<string[]>([]);
  const [error, setError] = useState<string>('');
  const [fetching, setFetching] = useState<boolean>(false);

  const getRandomSeed = () => {
    return Math.floor(Math.random() * 9999999) + 1;
  };

  const fetchPeopleAndDogs = async () => {
    if (numberOfPeople > 50) {
      setError('You cannot fetch more than 50 people at once.');
      return;
    }

    if (numberOfPeople < 1) {
        setError('You cannot fetch less than 1 person.');
        return;
      }

    setError('');
    setFetching(true);

    try {
      const seed = getRandomSeed();
      const peopleResponse = await axios.get(`https://randomuser.me/api?seed=${seed}&nat=${country}&results=${numberOfPeople}`);
      const dogResponse = await axios.get(`https://dog.ceo/api/breeds/image/random/${numberOfPeople}`);
      setPeople(peopleResponse.data.results);
      setDogImages(dogResponse.data.message);

      localStorage.setItem('cachedPeople', JSON.stringify(peopleResponse.data.results));
      localStorage.setItem('cachedDogImages', JSON.stringify(dogResponse.data.message));

    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.');
    }
    finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    const cachedPeople = localStorage.getItem('cachedPeople');
    const cachedDogImages = localStorage.getItem('cachedDogImages');
    if (cachedPeople && cachedDogImages) {
      setPeople(JSON.parse(cachedPeople));
      setDogImages(JSON.parse(cachedDogImages));
    }
  }, []);

  return (
    <div className='mainPage'>
        <div className='selectionMenu'>
      <h1>Main Page</h1>
      <div>
        <label htmlFor="country-select">Select Country: </label>
        <select
          id="country-select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="fr">France</option>
          <option value="fi">Finland</option>
          <option value="de">Germany</option>
          <option value="us">United States</option>
        </select>
      </div>
      <div className='numberRow'>
      <label>Select Number: </label>
        <input
          type="number"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(parseInt(e.target.value, 10))}
          placeholder="Enter number of people"
        />
        <button onClick={() => { setPeople([]); setDogImages([]); fetchPeopleAndDogs(); }}>Fetch</button>
      </div>
      {fetching && <p>Fetching data...</p>}
      {error && <p className="error-message">{error}</p>}
      </div>
      <div className="grid">
            {people.map((person, index) => (
            <PersonCard key={person.id.value} person={person} dogImage={dogImages[index]} />
            ))}
      </div>
    </div>
  );
};

export default MainView;