import React, { useState, useEffect } from 'react'
import PhotoList from './components/PhotoList'
import PhotoDetail from './components/PhotoDetail'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
 
function App() {

  const [posts, setPosts] = useState([])

  const getPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (res) => res.json())
    .then( data => {
      setPosts(data)
    })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
    
  }
  
  useEffect( ()=> {
    getPhotos()
  }, [])

  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/'>
              <PhotoList posts={posts} />
          </Route>
          <Route exact path='/posts/:id'>
              <PhotoDetail />
          </Route>
        </Switch>
    </BrowserRouter>

    
  );
}

export default App;
