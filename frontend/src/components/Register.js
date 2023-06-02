import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const navigate = useNavigate()
    const [msg, setMsg] =  useState('');
    const Register =  async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            })
            navigate("/")
        } catch (error) {
            if(error.response)
            {
                setMsg(error.response.data.msg)
            }
        }
    }
  return (
    <section className="hero has-background-grey-light is-fullwidth is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
                <form className='box' onSubmit={Register}>
                <p className='has-text-centered has-text-danger'>{msg}</p>
                    <div className="field mt-5">
                        <label className="label">Name</label>
                        <div className="controls">
                            <input type="text" placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} className="input" />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Email</label>
                        <div className="controls">
                            <input type="text" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} className="input" />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Password</label>
                        <div className="controls">
                            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='*****' className="input" />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Confirm Password</label>
                        <div className="controls">
                            <input type="password" value={confPassword} onChange={(e)=> setConfPassword(e.target.value)} placeholder='*****' className="input" />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button className='button is-success is-fullwidth'>Register</button>
                    </div>
                    <div className='field mt-5'>
                    <button className='button is-light is-fullwidth' type='button' onClick={()=> navigate("/")}>Login</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
