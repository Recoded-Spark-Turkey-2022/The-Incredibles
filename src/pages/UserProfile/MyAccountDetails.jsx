import React, { useState } from 'react';
import ChangePhoto from "../../assets/pics/profilepage/changepic.svg";

function MyAccountDetails() {
  const [username, setUsername] = useState("");
  const [usersurname, setUsersurname] = useState("");
  const [biography, setBiography] = useState('');
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState("");

  function handleSubmit(event) {
    event.preventDefault()  
  }

  return (
    <section name="myaccountdetails" className="bg-sky-300 lg:p-10 max-lg:p-5">
      <div className="bg-white rounded-3xl">
        <div className="max-lg:p-10">          
          <form onSubmit={handleSubmit} className="lg:p-40 lg:m-40">
            
            <label 
              className="hidden block text-sky-500 text-sm font-bold mb-2"
              htmlFor="userphoto"
            >
              Upload Photo
            </label>
            <input
              type="file"
              name="userphoto"
              className='hidden shadow appearance-none border rounded-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              value={photo}
              onChange={(e) => setPhoto(e.target.files[0])}
            />
            <div className="flex flex-col items-center lg:pb-20 max-lg:p-10">
              <img className="lg:w-1/5 m-auto" src={ChangePhoto || photo} alt="avatar-preview"/>
              <h2 className="p-5 font-bold text-lg">User Name</h2>
            </div>

            <div name="usernameholder" className='flex lg:flex-row max-lg:flex-col justify-between w-full'>
              <div name="username" className='flex flex-col'>
                <label 
                  className="block text-sky-500 text-sm font-bold mb-2" 
                  htmlFor="username"
                >
                  Name:
                </label>
                <input 
                  type="text" 
                  name="username" 
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  value={username} 
                  onChange={e => setUsername(e.target.value)} 
                />
              </div>
              <div name="usersurname" className='flex flex-col'>
                <label 
                  className="block text-sky-500 text-sm font-bold mb-2" 
                  htmlFor="usersurname"
                >
                  Surname:
                </label>
                <input 
                  type="text" 
                  name="usersurname" 
                  className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  value={usersurname} 
                  onChange={e => setUsersurname(e.target.value)} 
                />
              </div>
            </div>

            <label
              className="block text-sky-500 text-sm font-bold mb-2"
              htmlFor="biography"
            >
              Biography:
            </label>
            <textarea
              rows={1}
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="biography"
              value={biography}
              onChange={e => setBiography(e.target.value)}
            />
            
            <label 
              className="block text-sky-500 text-sm font-bold mb-2" 
              htmlFor="location"
            >
              Location:
            </label>
            <input 
              type="text" 
              name="location" 
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              value={location} 
              onChange={e => setLocation(e.target.value)} 
            />

            <div name="formbuttons" className='flex flex-row justify-center p-2'>
              <input 
                type="submit" 
                value="Save" 
                className="px-10 py-2.5 mr-5 bg-cyan-600 text-white font-medium text-l leading-tight
                rounded-full shadow-md
                ease-in duration-300 hover:bg-purple-700 hover:shadow-lg hover:scale-110"
              />
              <button 
                className="px-10 py-2.5 ml-5 max-lg:bg-cyan-600 max-lg:text-white lg:bg-white lg:text-cyan-600 lg:border-cyan-600 lg:border-2 font-medium text-l leading-tight
                rounded-full shadow-md
                ease-in duration-300 hover:bg-purple-700 hover:shadow-lg hover:scale-110" 
              >
                Cancel
              </button>
            </div>
          </form>
          <div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyAccountDetails;