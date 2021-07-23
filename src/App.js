import React, { useState, useEffect } from 'react'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
 
function App() {

  const [posts, setPosts] = useState([])

  const listPost = () => {
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
    listPost()
  }, [])
  

  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/'>
              <PostList posts={posts} />
          </Route>
          <Route exact path='/posts/:id'>
              <PostDetail />
          </Route>
        </Switch>
    </BrowserRouter>

    
  );
}

export default App;
