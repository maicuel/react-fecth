import React from 'react'
import { Link } from 'react-router-dom'

const PhotoList = ({posts}) =>{
    
    return (
        <section>
            {posts.map((post) => {
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

export default PhotoList

