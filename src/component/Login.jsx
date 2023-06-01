import React,{useRef} from 'react'
import { loginUser } from '../data/user';

function Login(){
    const fEmail = useRef();
    const fPass= useRef();

     //submitHandler 

   const submitHandler = async (e)=>{
    e.preventDefault();
    const data = {
        email:fEmail.current.value,
        password:fPass.current.value
    };
    
        console.log(' Login ',data);
        await loginUser(data);

        
       }
    return(
        <div className="container">
            <div className="row">
              <div className="col-md-12 text-center"><div className="display-3 text-dark">Login</div>
                </div>  
            </div>
            <div className="row">
                <div className="col-md-6">
                   <div className="card">
                    <div className="card-body">
                        <form autoComplete='off'onSubmit={submitHandler}>
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input type="email" name='email' id='email' ref={fEmail} className='form-control' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Password</label>
                                <input type="password" name='password' id='password' ref={fPass} className='form-control' />
                            </div>

                            <div className="form-group">
                                <input type="submit" value={"Login"} className='btn btn-success' />
                            </div>
                        </form>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Login