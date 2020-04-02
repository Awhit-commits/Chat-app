const users = [];

const addUser = ({id,name,room})=>{

    //Remove whitespace and make name/room lowercase
    name  = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //Find users with the same name/room as entered
    const existingUser = users.find((user) => user.room === room && user.name === name);
    //Better conditional
    if (existingUser){
        return({error:"Username is taken"})
    }
    
    const user= {id,name,room}
    users.push(user);
    return {user};

    

}

const removeUser  = () =>{
    const index = users.findIndex((user) => user.id ===id);
    if (index !== -1){
        return users.splice(index,1)[0];
    }
    

}

const getUser = (id)=> users.find((user) => user.id ===id)



const getUserRoom = (room)=>users.filter((user)=> user.room === room);

module.exports = {addUser,getUser,removeUser,getUserRoom};