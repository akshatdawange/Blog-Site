import axios from "axios";
import React, { useEffect } from 'react'
import { useState } from 'react';

const Menu = ({cat}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try{
          const res = await axios.get(`/posts/?cat=${cat}`);
          setPosts(res.data);

        }catch(err){
         console.log(err); 
      }
    };
    fetchData();
  }, [cat]);

    const posts2 = [
        {
          id: 1,
          title: "Title1",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
          // img
        },
        {
          id: 2,
          title: "Title2",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
          // img
        },
        {
          id: 3,
          title: "Title3",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
          // img
        },
        {
          id: 4,
          title: "Title4",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut modi esse exercitationem magnam soluta commodi corporis, libero optio veniam consectetur vero voluptas consequuntur in repellendus tempora praesentium totam! Laudantium, sit.",
          // img
        }
      ]

  return (
    <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map((post) => (
            <div className="post" key={post.id}>
                <img src="https://blog.purestorage.com/wp-content/uploads/2021/12/F1-Mercedes-Car-Sensors_-Data-driven-Machines.png" alt="" />
                <h2>{posts2.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu