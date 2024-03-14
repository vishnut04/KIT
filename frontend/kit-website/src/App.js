import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Replace Switch with Routes
import DropdownBar from './DropdownBar';
import './DropdownBar.css';
import './App.css';
import UploadVideoPage from './UploadVideoPage'; // Import the new component
import CatalogPage from './CatalogPage';

function App() {
  return (
    <Router>
      <div className="App">
        <DropdownBar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/upload-video" element={<UploadVideoPage />} /> {/* Use element prop */}
          <Route path = "/catalog-page" element = {<CatalogPage/>} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;