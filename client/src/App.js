import React, { useContext } from 'react'
import Home from './pages/home/Home'
import TopBar from "./components/topbar/TopBar"
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Setting from './pages/settings/Setting'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import { Context } from './context/Context'


import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


export default function App(){

  const { user } = useContext(Context);

  return(
    <Router>
      
      <TopBar/>

      <Switch>
        
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="/contact">
          <Contact/>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/login">
          {user ? <Home/> : <Login/>}
        </Route>

        <Route path="/register">
          {user ? <Home/> : <Register/>}
        </Route>

        <Route path="/write">
          {user ? <Write/> : <Register/>}
        </Route>

        <Route path="/settings">
          {user ? <Setting/> : <Register/>}
        </Route>

        <Route path="/post/:postId">
          <Single/>
        </Route>


      </Switch>

    </Router>
  )
}