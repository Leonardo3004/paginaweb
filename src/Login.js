import React from 'react'

function Login() {
    return (
        <div className='login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary'>
            <div className='40-w p-5 rounded bg-green'>
                <form>
                    <h3>Sing in</h3>
                    <div className='mb-2 rounded bg-white'>
                        <label htmlfor="email">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlfor="password">Password</label>
                        <input type="password" placeholder='Enter Password' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" className='custom-control custom-checkbox' id='check'/>
                        <label htmlFor='check' className='custom-input-label'>
                            Rememberme
                        </label>
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary'> Sing in</button>
                    </div>
                    <p className='text- right'>
                        Forgot password
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login