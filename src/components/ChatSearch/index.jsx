import React, { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function ChatSearch() {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState(null);
  const handleSearch = async () => {
    
    const q = query(collection(db, "users"), where("username", "==", userName.toLowerCase()));
    
    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch {
      (error) => console.log(error);
    }
  };
  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  };
  return (
    <div className="border-b border-gray-400 h-fit pb-2">
      <input
        onKeyDown={handleKey}
        onChange={(e) => setUserName(e.target.value)}
        type="search"
        className="bg-transparent m-5 outline-none  text-white placeholder:text-gray-200"
        placeholder="Type user name..."
      />
      {user && (
        <div className=" items-center cursor-pointer hover:bg-cyan-800">
          <img
            src={user.photoURL?user.photoURL:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
            alt="userProfil"
            className="w-12 h-12 rounded-full mr-2 "
          />
          <div>
            <p className="text-white ">{user.username + user.usersurname}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatSearch;
