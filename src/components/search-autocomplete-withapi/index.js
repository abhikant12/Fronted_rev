import { useEffect } from "react";
import { useState } from "react";
import './style.css'

export default function SearchAutocomplete(){

  const [searchParam, setSearchParam] = useState("");                     // store input data;
  const [users, setUsers] = useState([]);                                 // store data fetched from api;
  const [filteredUsers, setFilteredUsers] = useState([]);                 // store filter data from users based on searchParam
  const [loading, setLoading] = useState(false);


  function handleChange(value){
    const query = value.toLowerCase();
    setSearchParam(query);
    if(query.length > 0 && users?.length > 0){
          const filteredData = users.filter((item) => item.toLowerCase().startsWith(query));
          setFilteredUsers(filteredData);
    }
    else{
        setFilteredUsers([]);
    }   
 }

  function handleClick(value){
    setSearchParam(value);
    setFilteredUsers([]);
  }

  async function fetchListOfUsers(){
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if(data && data.users && data.users.length){
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch(error){
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);


  return (
    <div className="search-autocomplete-container">
        <div className="content">
            <div>
                    {loading ? (<h1>Loading Data ! Please wait</h1>) : (
                        <input value = {searchParam} name="search-users" placeholder="Search Users here..."  onChange = {(e) => handleChange(e.target.value)} />
                    )}
            </div>
            
            <ul className="listcontainer">
                {filteredUsers && filteredUsers.length > 0 ? (
                    filteredUsers.map((item, index) => (
                        <li onClick = {(e) => handleClick(e.target.innerText)} key = {index} className="list" > {item} </li>
                        ))
                ) : null }
            </ul> 
        </div>
    </div>
  );
}