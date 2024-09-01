import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import img1 from './images/appointment.jpg'
import './ContactUs.css'
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q5hp0e9', 'template_pgr1ohd', form.current, {
        publicKey: 'PmmK4D02qmC55kb1z',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Send Sucessfully!!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("error!!")
        },
      );
  };

  return (

    <div class="container-xxl py-5">
      <div class="container2">
        <div class="bg-light rounded">
          <div class="row g-0">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div class="h-100 d-flex flex-column justify-content-center p-5">
                <h1 class="mb-4" id="conmak">Any Query</h1>
                <form ref={form} onSubmit={sendEmail}>
                  <div class="row g-3">
                    <div class="col-sm-6">
                      <div class="form-floating">
                        <input type="text" name="user_name" class="form-control border-0" id="gname" placeholder="Gurdian Name" />
                        <label for="gname">Name</label>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-floating">
                        <input type="email" name="user_email" class="form-control border-0" id="gmail" placeholder="Gurdian Email" />
                        <label for="gmail">Email</label>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-floating">
                        <textarea class="form-control border-0" name="message" placeholder="Leave a message here" id="message" STYLE="height: 100px"></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div class="conbutton col-12">
                      <button id ="conbutton1" class="btn  w-100 py-3" input type="submit" value="Send">Submit</button>
                      
                    </div>
                    
                  </div>
                </form>
              </div>
            </div>
            <div id="img2" class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" STYLE="min-height: 300px; margin-right: 20px;">
              <div class="position-relative h-100">
                <img class="position-absolute w-100 h-100 rounded" id="ig12" src={img1} STYLE="object-fit: cover;" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};