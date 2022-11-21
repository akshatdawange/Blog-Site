import React, { useEffect, useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import Menu from '../components/Menu'
import axios from "axios"
import moment from "moment"
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import DOMPurify from "dompurify"




const Single = () => {

  const [post,setPost] = useState([])

  const location = useLocation()
  const navigate = useNavigate()

  const postId = location.pathname.split("/")[2]

  const {currentUser} = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);

      }catch(err){
        console.log(err); 
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try{
      await axios.delete(`/posts/${postId}`);
      navigate("/")

    }catch(err){
      console.log(err); 
    }
  }

  const getText1 = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="single">
      <div className="content">
      <img src="https://blog.purestorage.com/wp-content/uploads/2021/12/F1-Mercedes-Car-Sensors_-Data-driven-Machines.png" alt=""/>
      <div className="user">
      {post.userImg && <img src={post.userImg} alt=""/>}
      <div className="info">
        <span>{post.username}</span>
        <p>Posted {moment(post.date).fromNow()}</p>
      </div>
      {currentUser.username === post.username && (<div className="edit">
        <Link to={`/write?edit=2`} state={post}>
        edit
        </Link>
        <button onClick = {handleDelete}>Delete</button>   {/* <img  src="" alt=""/> */}
      </div>
      )}
      </div>
      <h1>new post</h1>
      <p>This is my first post</p> </div>
      <Menu cat = {post.cat}/>
    </div>
  );
};

export default Single

// import React from 'react'
// import {Link} from 'react-router-dom'
// import Menu from '../components/Menu'
// import Edit from '../img/edit.png'
// import Delete from '../img/delete.png'

// const Single = () => {
//   return (
//     <div className="single">
//       <div className="content">
//         {<img  src="https://punefoodblog.com/wp-content/uploads/2019/06/Top-Food-Bloggers.jpg" alt=""/> }
//       <div className="user">
//         { <img src=" https://i0.wp.com/www.yesmagazine.org/wp-content/uploads/2022/03/Ghaderi_1400x840.jpg?fit=1400%2C840&quality=90&ssl=1" alt=""/>}
//       <div className="info">
//         <span>John</span>
//         <p>Posted 2 days ago</p>
//       </div>
//       <div className="edit">
//         <Link to={`/write?edit=2`}>
//         {<img src={Edit} alt="" />}
//         </Link>
//         <img src={Delete} alt=""/>
//       </div>
//       </div>
//       <h1>Title</h1>
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In tempora nihil eos ab consectetur obcaecati quis enim! Officiis doloribus autem ipsum fugiat facilis, modi et vero adipisci quasi id architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam, odio non rem omnis quae autem exercitationem distinctio voluptatum ut corporis, nesciunt consequatur quis dolorum unde nemo accusantium aspernatur. Eveniet.</p>
//       <br/>
//       <br/>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut quis id, ea eaque voluptates vitae dicta perspiciatis reiciendis veniam! Voluptatibus, amet! Molestias omnis odio aspernatur, unde sit labore fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat possimus, ullam laborum veniam deleniti, eveniet veritatis aspernatur nobis, nesciunt ipsum molestias perferendis commodi impedit consectetur nam laudantium necessitatibus sint dolores.</p>
//       </div>
//       <Menu/>
//     </div>
//   )
// }

// export default Single