import React from 'react'
import { Suspense } from 'react';
import { Users } from './Users';
import { Posts } from './Post';
import { useResorse } from './resorse';


function App() {

  const resourse = useResorse()

  return (
    <div className="container">
      <h1>Suspense for data fetching</h1>
      
      <Suspense fallback={<p>Loading Posts....</p>}>
        <Posts resourse={resourse}/>
      </Suspense>
      <Suspense fallback={<p>Loading Users....</p>}>
        <Users resourse={resourse}/>
      </Suspense> 
      
    </div>
  );
}

export default App;
