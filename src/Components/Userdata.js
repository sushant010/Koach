import React, { useState, useEffect } from 'react';
import './user.css';
import Navbar from './Navbar';
import { FadeLoader } from 'react-spinners';

export default function Userdata() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //This is until data is loaded
        // const response = await fetch('https://reqres.in/api/users?page=1');
        // const data = await response.json();
        // setUserData(data.data);
        // setIsLoading(false);

                // This is for  delay of 2 seconds
                setTimeout(async () => {
                  const response = await fetch('https://reqres.in/api/users?page=1'); // Replace with your API endpoint
                  const data = await response.json();
                  setUserData(data.data);
                  setIsLoading(false);
                }, 2000);
        
      } catch (error) {
        console.log('Error fetching data:', error);
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="hero">
        {isLoading ? (
          <div className="loading-container">
            <FadeLoader color="white" size={30} loading={isLoading} />
            <div style={{ color: 'white', fontSize: '40px' }}>Loading Please Wait...</div>
          </div>
        ) : (
          <div className="row text-center m-3">
            {userData.map((user) => (
              <div className="hero col-md-4 mb-4" key={user.id}>
                <div className="card testimonial-card">
                  <div className="card-up" style={{ backgroundColor: 'rgba(0,0,0,.6)' }}></div>
                  <div className="avatar mx-auto bg-white">
                    <img src={user.avatar} className="rounded-circle img-fluid" alt="User Avatar" />
                  </div>
                  <hr />
                  <div className="card-body">
                    <h4 className="mb-4">{`${user.first_name} ${user.last_name}`}</h4>
                    <h4 className="mb-4">{user.email}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
