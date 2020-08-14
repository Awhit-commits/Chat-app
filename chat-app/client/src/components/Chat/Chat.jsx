import React, { useEffect,useState} from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
let socket;

// export default class Chat extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
    
             
//         }
//     }
//     // useEffect = ((location) =>{
//     //     const data = queryString.parse(location.search)
//     //     console.log(location.search);
//     //     console.log(data);
//     // });
//     componentDidMount(){
//         useEffect((location) =>{

//         })
//     }

       

//     }
//     render() {
//         return (
//             <div>
//                 <h1>Chat</h1>
//             </div>
//         )
//     }
// }


//  const Chat=({location}) =>{
//      const [name,setName] = useState('');
//      const [room,setRoom] = useState('');
//      const [message,setMessage]= useState("");
//      const [messages,setMessages]=useState([]);
//      const [users, setUsers] = useState('');
//      const ENDPOINT  ='localhost:5000'
//      useEffect(() =>{
//          const {name,room} = queryString.parse(location.search)
//          console.log(name,room);
//          //Sanity checks to see if we're getting room and name back in console
//          console.log(location.search);
//         socket = io(ENDPOINT);

//          setName(name);
//          setRoom(room);
// //TODO: Finish socket.emit function
//         //  socket.emit('join',{name,room});


         

//          //send name and room to server side
//          socket.emit('join',{name,room},(error) =>{
                // if(error){
                //     alert(error)
                // }

//          });

         
//          console.log(socket)
//          return ()=>{
//              socket.emit('disconnect');
//              socket.off();
//          }

         
        
//      },[ENDPOINT,location.search])

//      useEffect(() => {
//          socket.on('message',(message)=>{
//              setMessages([...messages,message])

//          },[messages])

//          socket.on("roomData", ({ users }) => {
//             setUsers(users);
//           });
//      },[])

//      const sendMessage  = (event) =>{
//          event.preventDefault();

//          //if statement sends message then clears input field
//          if (message){
//              socket.emit('sendMessage',message,()=> setMessage(''));
//          }
         
//      }
//      console.log(message,messages);
//     return (
//         <div className ="outerContainer">
//             <div className ="container">
//                 <InfoBar room ={room}/>
//                 <Input message ={message} setMessage = {setMessage} sendMessage  = {sendMessage}/>

//             </div>

//         </div>
//     )
// }


  

// export default Chat;




const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = window.location.hostname;

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }
  console.log(message,messages);
  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      {/* <TextContainer users={users}/> */}
    </div>
  );
}

export default Chat;