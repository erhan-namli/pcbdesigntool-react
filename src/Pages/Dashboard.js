import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
    const [authenticated, setauthenticated] = useState(null);

    useEffect(() => {

      const loggedInUser = localStorage.getItem("authenticated");

      console.log(loggedInUser)

      if (loggedInUser) {
   
        setauthenticated(loggedInUser);
      }
    }, []);

    console.log(authenticated)
    
    if (authenticated === false ) {
        
          return <Navigate replace to="/login" />;   
      
    } else {
        console.log("Javascript dünyası harbiden garip bir yer ")
      return (

        <div>
          <p>Welcome to your Dashboard</p>
        </div>

      );
    }
  };
  export default Dashboard;