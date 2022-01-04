import axios from "axios";
const Registration = () => {
    
    const register = ()=>{
        axios.post("/api/register",user)
        .then((res)=> console.log(res.data));
    }
    const fetch = ()=>{
        axios.get("/api/fetch")
        .then(res => console.log(res.data));
    }

    const user = {
        username:"",
        password:"",
        name:"",
        age:0,
    };
    return (
        <div>
            <h1>Registration Page</h1>
            <input type="text" placeholder="Username" onChange={(e)=> (user.username = e.target.value)}></input><br/>
            <input type="text" placeholder="password" onChange={(e)=>(user.password = e.target.value)}></input><br/>
            <input type="text" placeholder="name" onChange={(e)=>(user.name = e.target.value)}></input><br/>
            <input type="text" placeholder="age" onChange={(e)=>(user.age = Number(e.target.value))}></input><br/>
            <button onClick={register}>Register</button>
            <button onClick={fetch}>Fetch</button>

        </div>
    )
}

export default Registration
