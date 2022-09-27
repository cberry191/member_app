import logo from "../images/logo2.png"

const loginForm = "m-4 w-5/6  flex flex-col justify-evenly content-evenly items-center"
const container = "p-2 w-5/6  flex flex-col justify-evenly content-evenly items-center"
const button = "m-2 p-2 w-1/3 border-2 rounded"
const input = "m-2 p-2 w-1/3 border-2 rounded"

const postLogin = () => {

}

const createAccount = () => {

}

export const Login = () => {
    return <div className={container}>
        <img src={logo} className="w-4/5"></img>
        <h1>Welcome!</h1>
        <div className={loginForm}>
            <input
                type="email"
                value="Email"
                className={input} />
            <input
                type="password"
                value="Password"
                className={input} />
            <input 
                type="button" 
                value="Create Account"
                className={button}
                onClick={createAccount} />
            <p>Already a member? <a>Login\</a></p>
        </div>
        
        <div className={loginForm}>
            <input
                type="email"
                value="Email"
                className={input} />
            <input
                type="password"
                value="Password"
                className={input} />
            <input 
                type="button" 
                value="Login"
                className={button}
                onClick={postLogin} />
            <p>New here? <a>Create Account</a></p>
        </div>
        
    </div>
}