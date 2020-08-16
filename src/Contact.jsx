import React , {useState} from 'react';
const Contact =() =>{
    
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form >

                        <div class="form-group">
                            <label for="formGroupExampleInput">Enter your name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" name="fullname"  onChange={InputEvent} placeholder="Enter your name" />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Phone number</label>
                            <input type="number" class="form-control" id="formGroupExampleInput2" name="phone"  onChange={InputEvent} placeholder="Enter your phone number" />
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  onChange={InputEvent} />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control"  id="exampleInputPassword1" />
                        </div>
                        <div class="form-group form-check pt-2">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <div class="form-group pb-2">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" name="message" onChange={InputEvent} rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </form>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;