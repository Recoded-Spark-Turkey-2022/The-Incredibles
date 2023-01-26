import React from 'react';
import largeScreen from '../../assets/pics/contactPage/largeScreen.svg';
import smallScreen from '../../assets/pics/contactPage/smallScreen.svg';
import faceIcon from '../../assets/pics/contactPage/faceIcon.svg';
import instaIcon from '../../assets/pics/contactPage/instaIcon.svg';
import twitterIcon from '../../assets/pics/contactPage/twitterIcon.svg';
import { useDispatch } from 'react-redux';
import { writeContact } from '../../features/contact/contactSlice';
import { useState } from 'react';
import Container from '../../components/UI/Container';

function ContactPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(writeContact(formData));
  };
  return (
    <Container>
      <div className=" flex flex-col md:flex-row-reverse justify-center items-center ">
        <div className="basis-1/2 m-auto">
          <img src={largeScreen} className="m-auto hidden md:flex" />
          <img src={smallScreen} className="m-auto md:hidden" />
        </div>
        <div className=" basis-1/2  text-center md:text-left m-auto md:max-w-xl">
          <h1 className="pb-10 font-bold text-3xl text-cyan-600 md:text-6xl">
            Get in Touch
          </h1>
          <p className="text-zinc-400	font-light pb-2 ">
            But Brooke Chaffin and Catherine Connors are looking to change that
            with the introduction.
          </p>
          <form
            onSubmit={handleSubmit}
            className=" pl-1 flex flex-col gap-2 justify-center md:justify-start "
          >
            <label className="text-zinc-400	font-light text-left ">Email</label>
            <input
              id="email"
              type="email"
              placeholder="hello@gmail.com"
              className="border border-solid"
              onChange={handleChange}
            />
            <textarea
              id="message"
              placeholder="Message"
              rows={8}
              className="border border-solid"
              onChange={handleChange}
            ></textarea>
            <div>
              <input
                type="submit"
                value="Send"
                className="m-auto  h-10 px-10 py-2.5 bg-cyan-600 text-white font-medium text-l leading-tight 
             rounded-full shadow-md
             ease-in duration-300 hover:bg-purple-700 hover:shadow-md  hover:scale-110"
              />
            </div>

            <div className="flex flex-row py-9  justify-center md:justify-start ">
              <img src={twitterIcon} alt="" className="p-2 m-auto md:m-0" />
              <img src={instaIcon} alt="" className="p-2 m-auto md:m-0" />
              <img src={faceIcon} alt="" className="p-2 m-auto md:m-0" />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default ContactPage;
