import "./singlepost.css"
import { Link, useLocation } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import api from "../../services/api"
import {Context} from "../../context/Context"

export default function SinglePost(){
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/";
    const {user} = useContext(Context)
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() =>{
        const getPost = async() => {
            const res = await api.get("/posts/" + path);
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        };
        getPost()
    }, [path]);

    const handleDelete = async() => {
        try{
            
            await api.delete(`/posts/${post._id}`, {
                data: { username: user.username },
            });
            window.location.replace("/")

        } catch(err){}
    }

    const handleUpdate = async() => {
        try{
            
            await api.put(`/posts/${post._id}`, {
                username: user.username, 
                title, 
                desc,
            });
            window.location.reload();

        } catch(err){}
    }

    return(
        <div className="singlePost">

            <div className="singlePostWrapper">
                
                {post.photo && (
                    <img
                        src={PF + post.photo}
                        alt=""
                        className="singlePostImg"
                    />
                )} {
                    updateMode ? (
                        <input 
                            type="text" 
                            value = { title } 
                            className="singlePostTitleInput" 
                            autoFocus
                            onChange={(e) => setTitle(e.target.value)}
                        /> 
                        ) : (
                            <h1 className="singlePostTitle">
                                
                                { post.title }

                                { post.username === user.username && 
                                    <div className="singlePostEdit">
                                        <i className="singlePostIcon" onClick={() => setUpdateMode(true)}>
                                            Edit
                                        </i>
                                        <i className="singlePostIcon" onClick={handleDelete}>
                                            Delete
                                        </i>
                                    </div>
                                }

                            </h1>
                        )
                    }


                <div className="singlePostInfo">

                    <span className="singlePostAuthor">
                        Author: 
                        <Link to={`/?user=${post.username}`} className="link">
                            <b> { post.username } </b>
                        </Link>
                    </span>

                    <span className="singlePostDate"> 
                        { new Date(post.createdAt).toDateString() } 
                    </span>

                </div>
                

                {updateMode ? (
                    <>
                    
                        <textarea 
                            className="singlePostDescInput" 
                            value={ desc } 
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        
                        <button 
                            className = "singlePostButton" 
                            onClick={handleUpdate} 
                        > 
                            Update 
                        </button>
            
                    </>

                ) : (
                    <p className="singlePostDesc">
                        { post.desc }
                    </p>
                )}
               
            </div> 

        </div>
    )
}