import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'

const PostDetail = () => {

    const { id } = useParams()
    const [PostDetail, setPostDetail] = useState({})
    const [PhotoDetail, setPhotoDetail] = useState({})

    const getPostById = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( (res) => res.json())
        .then( data => {
            setPostDetail(data)
        })    
        .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
      }

    const getPhotosById = () => {
          fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
          .then( (res) => res.json())
          .then( data => {
              setPhotoDetail(data)
             
          })    
          .catch(function(error) {
              console.log('Hubo un problema con la petición Fetch:' + error.message);
          });
        }
        
      useEffect( ()=> {
        getPostById()
        getPhotosById()
      }, [])

    return (
    <>  
        <img src={PhotoDetail.url} alt={PhotoDetail.title} />
        <h2>{PostDetail.title}</h2>
        <p>{PostDetail.body}</p>

        <Link to={`../`}>
         <div>
             <p>volver</p>
        </div>
        </Link>
    </>
    )
}

export default PostDetail