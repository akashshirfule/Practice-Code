import React, { useState } from "react";

const Contact = () => {

    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [msg,setMsg]=useState();
    const [subject,setSubject]=useState();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const userData = JSON.stringify({name,email,msg,subject  });
        localStorage.setItem("userData", userData);
        console.log(name);
        console.log(msg);
        console.log(subject);
        console.log(email);

        resetForm();
    }

    const resetForm=()=>{
        setEmail('');
        setMsg('');
        setSubject('');
        setName('');
    
      }

    // 
  return (
    <div className="maindiv">
 
      <section className="m-4">
        <h2 className="h1-responsive font-weight-bold my-4 mb-10">
          Contact us
        </h2>

        <div className="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              onSubmit={handleOnSubmit}
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={name}
                      onChange={(e)=>{setName(e.target.value)}}
                    />
                    <label for="name" className="" >
                      Your name
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      className="form-control"
                      onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <label for="email" className="" >
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      value={subject}
                      onChange={(e)=>{setSubject(e.target.value)}}
                    />
                    <label for="subject" className="" >
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      value={msg}
                      className="form-control md-textarea"
                      onChange={(e)=>{setMsg(e.target.value)}}
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
           

            <div className="text-center text-md-left">
              {/* <a
                className="btn btn-primary"
                type="submit"
              >
                Send
              </a> */}
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
            </form>
            <div className="status"></div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
