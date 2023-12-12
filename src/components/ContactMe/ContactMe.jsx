import emailjs from '@emailjs/browser';
import { useRef } from 'react';
// import './ContactMeStyle.css'

export default function ContactMe() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_961r49l', 'template_3cr4i06', form.current, 't4N3CFDWIIpLqckhc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            {/* <form className="card-body" ref={form} onSubmit={sendEmail} id='form'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="user_name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="user_email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <input type="text" name="message" placeholder="Message" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    <textarea type="submit" value="Send"  />
                </div>
            </form> */}
            <div className='flex'>
                <form ref={form} onSubmit={sendEmail} id='form' className='mx-auto border-2 border-black p-4 rounded-md'>
                    <div>
                        <label>Name</label>
                        <input type="text" name="user_name" className='border-2 border-black p-2 rounded-sm'/>
                        <label>Email</label>
                        <input type="email" name="user_email" className='border-2 border-black p-2 rounded-sm'/>
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea name="message" className='border-2 border-black p-2 rounded-sm'/>
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    )
}
