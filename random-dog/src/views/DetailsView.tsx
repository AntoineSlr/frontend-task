import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


type Params = {
  id: string;
}

const DetailsView: React.FC = () => {
  const location = useLocation();
  const { id } = useParams<Params>();
  const { firstName, lastName, email, age, country, username, phone, dogImage } = location.state as any;

  return (
    <div className='detailsPage'>
      <h1>Details</h1>
      <p>Details for person with ID: {id}</p>
      <img className="detailspfp" src={dogImage} alt="Dog" />
      <div>Name: {firstName} {lastName} (age: {age})</div>
      <div>Country: {country}</div>
      <div>Username: {username}</div>
      <div>Email: {email}</div>
      <div>Phone: {phone}</div>
      <a href="../" className='backButton'><button>Back</button></a>
    </div>
  );
};

export default DetailsView;