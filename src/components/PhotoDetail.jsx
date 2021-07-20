import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const PhotoDetail = () => {

    const { id } = useParams()
    const [photoDetail, setPhotoDetail] = useState({})
    const getPhotosById = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( (res) => res.json())
        .then( data => {
            setPhotoDetail(data)
        })    
        .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
      }
      

      useEffect( ()=> {
        getPhotosById()
      }, [])


    return (
    <>    
        <h2>{photoDetail.title}</h2>
        <p>{photoDetail.body}</p>
    </>
    )
}

export default PhotoDetail