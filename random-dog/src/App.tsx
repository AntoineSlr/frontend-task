import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainView from './views/MainView';
import DetailsView from './views/DetailsView';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/details/:id" element={<DetailsView/>} />
        <Route path="/" element={<MainView/>} />
      </Routes>
    </Router>
  );
};

export default App;
