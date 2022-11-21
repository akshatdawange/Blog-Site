import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const [posts,setPosts] = useState([])

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);

      }catch(err){
        console.log(err); 
      }
    };
    fetchData();
  }, [cat]);

  // const posts1 = [
  //   {
  //     id: 1,
  //     title: "Title1",
  //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
  //     // img
  //   },
  //   {
  //     id: 2,
  //     title: "Title2",
  //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
  //     // img
  //   },
  //   {
  //     id: 3,
  //     title: "Title3",
  //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
  //     // img
  //   },
  //   {
  //     id: 4,
  //     title: "Title4",
  //     desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
  //     // img
  //   }
  // ]

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt=""/>
            </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}> 
                <h1>{post.title}</h1>
                </Link>
                <p>{getText(post.desc)}</p>
                <button>Read More</button>
                
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;