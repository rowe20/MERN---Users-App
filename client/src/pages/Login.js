import axios from "axios"
import { useNavigate } from "react-router-dom";

const Login = () => {

    let navigate = useNavigate();
    const verify = () =>{
        axios.post("/login",user)
        .then((res)=> {
            console.log(res.data)
            if(res.data === "user exist")
            {
             navigate("/",{replace:false})
            
            }
            else{
                
            }
        });
    }

    const user = {
        username:"",
        password:"",
    };
    return (
        <div>
            <h1>Login</h1>
            
            <input type="text" placeholder="Username" onChange={(e)=> (user.username = e.target.value)}></input><br/>
            <input type="text" placeholder="password" onChange={(e)=>(user.password = e.target.value)}></input><br/>
            <button onClick={verify}>Login</button>
        </div>
    )
}

export default Login
