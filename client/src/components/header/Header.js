import "./header.css"
import PhotoBackground from "../../assets/background3.jpg"

export default function Header(){
  return(
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"> React & Node</span>
        <span className="headerTitleLg"> Blog </span>
      </div>

      <img
        className="headerImg"
        src={PhotoBackground}
        alt=""
      />
    

    </div>
  )
}