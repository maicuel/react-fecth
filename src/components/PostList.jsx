import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom'


const PostList = () =>{

    const [posts, setPosts] = useState([])
    const [photos, setPhotos] = useState([])

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


    const listPhotos = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then( (res) => res.json())
        .then( data => {
          setPhotos(data)
        })
        .catch(function(error) {
          console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
        
      }


  
    useEffect( ()=> {
      listPost()
      listPhotos()
    }, [])

    const jsons = {
        ...posts,
        ...photos
     };

   console.log('estas son: ' + JSON.stringify(jsons[0]))
   

    return (
        <section>

        {photos.slice(0,5).map((photo) => {
               return (
                
                <div key={photo.id}>
                    <div>
                        <img src={photo.url} />
                    </div>
                </div>
               )
            })}
     
            {posts.slice(0,5).map((post) => {
               return (
                
                <Link key={post.id} to={`posts/${post.id}`}>
                    <div>
                        <h2>{post.title}</h2>
                    </div>
                </Link>
               )
            })}
            
        </section>
        
    )

}

export default PostList

