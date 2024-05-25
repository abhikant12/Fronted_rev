import { useEffect } from "react";
import { useState } from "react";
import User from "./user";
import './style.css';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function GithubProfileFinder(){

  const [userName, setUserName] = useState("abhikant12");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData(){
    setLoading(true);
    try{
      const res = await fetch(`https://api.github.com/users/${userName}`);
      if(!res){
        throw new Error('User not found');
      }
      const data = await res.json();
      setUserData(data);
    }
     catch(error){
      toast.error(error.message);
    } 
    finally{
      setLoading(false);
      setUserName('');
    }
  }

  function handleSumbit(){
    if(!userName.trim()){
      toast.error("Please enter a username");
      return;
    }
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if(loading){
    return <h1>Loading data ! Please wait</h1>;
  }

  return (
    <div className="github-profile-container">

      <ToastContainer />

      <div className="input-wrapper">
        <input type="text" value={userName}  placeholder="Search Github Username..."  onChange={(e) => setUserName(e.target.value)} />
        <button onClick = {() => handleSumbit()}  > Search </button>
      </div>
      {userData && <User user = {userData} /> }

    </div>
  );
}



/*
To use toast :- 
install :- npm install react-toastify
import { toast, ToastContainer } from "react-toastify";          // write toast then press enter key automatically it will get added;
import 'react-toastify/dist/ReactToastify.css';                 // for css

 <ToastContainer />                                 // add it in container;
 */