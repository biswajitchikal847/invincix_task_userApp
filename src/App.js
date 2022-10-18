import React from 'react';
import './App.css';
import Userprofile from './Components/UserProfile';
import { Route, Routes} from 'react-router-dom'
import UserDetails from './Components/UserDetails';

function App() {
  return (
   <>
<Routes>
    <Route  path="/" element={<Userprofile />} >  </ Route>
    <Route  path="/users/:id" element={<UserDetails />} >  </ Route>
</Routes>
{/* <Userprofile /> */}
   </>
    
  )
}

export default App;
