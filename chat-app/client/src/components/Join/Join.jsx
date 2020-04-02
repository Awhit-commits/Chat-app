import React, { Component,} from 'react';

import  {Link} from 'react-router-dom';
import './Join.css';

export default class Join extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             room:"",
        }
    }
    
    render() {
        return (
            <div className ="joinOuterContainer">
                {/* Sanity Check */}
                {/* <h1>Join</h1> */}
                <div className="joinInnerContainer">
                    <h1 className = "heading">Join</h1>
                    <div>
                        <input type="text" name="Name" id="" placeholder ="Name" className = "joinInput" onChange= {(event)=> this.setState({name:event.target.value})}/>
                    </div>
                    <div>
                        <input type="text" name="Room" id="" placeholder = "Room" onChange = {(event) => this.setState({room:event.target.value})} className = "joinInput mt-20"/>
                    </div>
                    <Link onClick = {event =>(!this.state.name || !this.state.room ? event.preventDefault():null)} to ={`/chat?name=${this.state.name}&room=${this.state.room}`}>
                    <button  className ="button mt-20" type = "submit">Sign In</button>
                    </Link>

                </div>
            </div>
        )
    }
}

// import React, { useState } from 'react';
// import { Link } from "react-router-dom";

// import './Join.css';

// export default function SignIn() {
//   const [name, setName] = useState('');
//   const [room, setRoom] = useState('');

//   return (
//     <div className="joinOuterContainer">
//       <div className="joinInnerContainer">
//         <h1 className="heading">Join</h1>
//         <div>
//           <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
//         </div>
//         <div>
//           <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
//         </div>
//         <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
//           <button className={'button mt-20'} type="submit">Sign In</button>
//         </Link>
//       </div>
//     </div>
//   );
// }