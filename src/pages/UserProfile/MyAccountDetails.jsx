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
    console.log(event.target.username.value)  
  }

  return (
    <section name="myaccountdetails" className="bg-sky-300 lg:p-20 max-lg:p-5">
      <div className="bg-white rounded-3xl">
        <div className="p-28 pb-10 max-lg:p-10">          
          <form onSubmit={handleSubmit}>
            
            <label htmlFor="userphoto"></label>
            <input
              type="text"
              name="userphoto"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
            <div className="flex flex-col items-center pb-20">
              <img className="lg:w-1/5 m-auto" src={ChangePhoto} />
              <h2 className="p-5 font-bold text-lg">User Name</h2>
            </div>

            <label className="block text-sky-500 text-sm font-bold mb-2" htmlFor="username">Name:</label>
            <input type="text" name="username" className="" value={username} onChange={e => setUsername(e.target.value)} />
            
            <label className="block text-sky-500 text-sm font-bold mb-2" htmlFor="usersurname">Surname:</label>
            <input type="text" name="usersurname" className="" value={usersurname} onChange={e => setUsersurname(e.target.value)} />

            <label
            className="block text-sky-500 text-sm font-bold mb-2"
            htmlFor="biography"
            >
            Biography:
            </label>
            <textarea
              rows={1}
              className=""
              name="biography"
              value={biography}
              onChange={e => setBiography(e.target.value)}
            />
            
            <label className="block text-sky-500 text-sm font-bold mb-2" htmlFor="location">Location:</label>
            <input type="text" name="location" className="" value={location} onChange={e => setLocation(e.target.value)} />

            <input type="submit" value="Save" className="block text-sky-500 text-sm font-bold mb-2"/>
            <button className='block text-sky-500 text-sm font-bold mb-2' value="Cancel">Cancel</button>
          </form>
          <div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyAccountDetails;