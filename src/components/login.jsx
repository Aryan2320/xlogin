import React, { useState } from 'react'


function LoginCheck() {
    const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
    const[submitted,isSubmitted]=useState(false);


const handleSubmit=(e)=>{
  e.preventDefault();

  if(username==="user" && password==="password"){
    setError("");
    isSubmitted(true);
  }else{
    setError("Invalid username or password");
    isSubmitted(false);
  }

}


  return (
    <div className='loginPage'>
      <h1>Login Page</h1>
      {submitted ? (
        <div className='valid'>
          <p>Welcome, {username}!</p>
        </div>
      ):(
      <form onSubmit={handleSubmit}>
        {error && <p className='error'>{error}</p>}
        <div className='username'>
      <label htmlFor='username'>Username:</label>
      <input type='text' id='username' value={username} placeholder='username' onChange={(e)=>setUsername(e.target.value)} required/>
      </div>
      <div className='password'>
      <label htmlFor='password'>Password:</label>
      <input type='password' id='password'value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)} required/>
      </div>
      <div>
      <button type='submit'>submit</button>
      </div>
      </form>
      )}
    </div>
      
  )
}

export default LoginCheck