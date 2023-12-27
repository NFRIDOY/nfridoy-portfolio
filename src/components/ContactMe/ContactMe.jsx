import emailjs from '@emailjs/browser';
import { useRef } from 'react';
// import './ContactMeStyle.css'
import SubHeader from './../Headers/SubHeader';
import MidHeader from './../Headers/MidHeader';

export default function ContactMe() {

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_961r49l', 'template_3cr4i06', form.current, 't4N3CFDWIIpLqckhc')
            .then((result) => {
                console.log(result.text);
                if (result.text == "OK") {
                    alert("Your email has been sent")
                    // form.clear();
                    // form.current.value.reset();
                    form.current.reset();
                }
                else {
                    alert("Something went wrong")
                }
            }, (error) => {
                console.log(error.text);
            });

        // emailjs.send("service_961r49l", "template_3cr4i06", {
        //     user_name: "ABC",
        //     to_name: "NF RIDOY",
        //     message: "MSG",
        //     user_email: "abc@gmail.com",
        //     reply_to: "nfridoy@gmail.com",
        // });
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
            <MidHeader>
                {/* Let&apos;s Connect */}
                Contact Me
            </MidHeader>
            <div className='flex'>
                <form ref={form} onSubmit={sendEmail} id='form' className='mx-auto border-black p-4 rounded-md w-1/2 space-y-5'>
                    <div className='w-full '>
                        <label>Name</label>
                        <br />
                        <input type="text" name="user_name" placeholder='Name' className="input input-bordered input-primary w-full min-w-xs" />
                    </div>
                    <div className='w-full'>
                        <label>Email</label>
                        <br />
                        <input type="email" name="user_email" placeholder="Email" className="input input-bordered input-primary w-full min-w-xs" />
                    </div>
                    <div className='w-full'>
                        <label>Message</label>
                        <br />
                        <textarea name="message" placeholder="Massage" className="input input-bordered input-primary w-full min-w-xs min-h-[100px] pt-3" />
                    </div>
                    <div className='w-full'>
                        <input type="submit" value="Send" className='btn btn-primary w-full text-white' />

                    </div>
                </form>
            </div>
        </div>
    )
}
