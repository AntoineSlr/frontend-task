import React from 'react';
import { Link } from 'react-router-dom';

interface PersonCardProps {
  person: {
    name: {
      first: string;
      last: string;
    };
    location: {
      country: string;
    }
    login: {
      username: string;
    }
    dob: {
      age: string;
    }
    phone: string;
    email: string;
    id: {
      value: string;
    };
  };
  dogImage: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ person, dogImage }) => {
  return (
    <div className="personCard">
      <img className="pfp" src={dogImage} alt="Dog" />
      <h2>{person.name.first} {person.name.last}</h2>
      <Link to={`/details/${person.id.value}`} 
      
      state={
          {
            firstName: person.name.first,
            lastName: person.name.last,
            country: person.location.country,
            phone: person.phone,
            email: person.email,
            username: person.login.username,
            age: person.dob.age,
            dogImage: dogImage
          }
        }
      >
        View Details
      </Link>
    </div>
  );
};

export default PersonCard;