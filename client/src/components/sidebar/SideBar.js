import "./sidebar.css"
import FotoGustavo from "../../assets/gustavo_foto.png"
import { useEffect, useState } from "react"
import api from "../../services/api"
import { Link } from "react-router-dom";

export default function SideBar(){
  
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await api.get("/categories")
      setCats(res.data)
    };
    getCats();
  }, [])

  return(
      <div className="sideBar">

          <div className="sidebarItem">

              <span className="sidebarTitle">
                  ABOUT ME
              </span>

              <img
                src={FotoGustavo}
                alt=""
              />

              <p>
                  Putting a lot of text that means nothing. Putting a lot of text that means nothing. Putting a lot of text that means nothing. Putting a lot of text that means nothing.
              </p>

          </div> 


          <div className="sidebarItem">

              <span className="sidebarTitle">CATEGORIES</span>

              <ul className="sidebarList">
                  {cats.map(c=>(
                      <Link to={`/cat?=${ c.name }`} className="link">
                        <li className="sidebarListItem"> 
                          { c.name }
                        </li>
                      </Link>
                  ))}
              </ul>

          </div>

      </div>
  )
}