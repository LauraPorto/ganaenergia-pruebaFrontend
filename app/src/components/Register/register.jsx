import React from 'react'

const Register = () => {
    return (

        <div className='register-main-conainer'>
            <form>
                <div class="form-group">
                    <label for="email">Username</label>
                    <input type="username" name="username" class="form-control" id="email" aria-describedby="emailHelp" onChange={handleState}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleState}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" className="form-control" id="password" onChange={handleState}/>
                </div>        
            </form>
            <div>
                <button type='submit' onClick={() => checkData()} className='button-register'>REGISTER USER</button>
            </div>
        </div>

    )
}

export default Register;
