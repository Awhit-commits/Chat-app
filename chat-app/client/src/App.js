import  React  from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import  Join  from "./components/Join/Join.jsx";
import  Chat  from "./components/Chat/Chat.jsx";



const App = () =>(
    <Router>
        {/* To pass data in through the login form with the use of query strings */}
        <Route path ="/" exact component ={Join}/>
        <Route path ="/chat" exact component  ={Chat}/>

    </Router>
)
export default App;