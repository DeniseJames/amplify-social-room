import React, { Suspense } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from '../src/components/NavBar/NavBarComponent';
import './App.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Lazy load the components
const HomeComponent = React.lazy(() => import('./components/Home/HomeComponent'));
const MachineLearningComponent = React.lazy(() => import('../src/components/MachineLearning/MachineLearningComponent'));
const WebDesignComponent = React.lazy(() => import('../src/components/WebDesign/WebDesignComponent'));
const TrainingComponent = React.lazy(() => import('../src/components/Training/TrainingComponent'));
const LoginComponent = React.lazy(() => import('./components/LogIn/LoginComponent'));
const SearchResults = React.lazy(() => import('../src/components/SearchResults/SearchResultsComponent'));
const ContactComponent = React.lazy(() => import('../src/components/Contact/ContactComponent'));
const VCardPage = React.lazy(() => import('../src/components/vCard/vCardPage')); // Import the VCardPage component

function App() {
  return (
    <Authenticator.Provider>
      <Router>
        <NavbarComponent />
        <div className="container-fluid"> {/* Use Bootstrap container */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/machine-learning" element={<MachineLearningComponent />} />
              <Route path="/web-design" element={<WebDesignComponent />} />
              <Route path="/training" element={<TrainingComponent />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/contact" element={<ContactComponent />} />
              <Route path="/vcard" element={<VCardPage />} /> {/* Add the route for VCardPage */}
            </Routes>
          </Suspense>
        </div>
      </Router>
    </Authenticator.Provider>
  );
}

export default App;
