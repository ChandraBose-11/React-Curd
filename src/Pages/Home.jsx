import axios from "axios";
import React, { useEffect, useState } from "react";
//React Icons
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    await axios
      .get("https://668df0dbbf9912d4c92c47e4.mockapi.io/api/user")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="container" id="container">
      <h2 className="text-center User-icons" > 
        <span>
        .....<MdOutlineDoubleArrow/>  
           <b><FaUsers /> User Details!!</b>
           <MdOutlineDoubleArrow/>.....
        </span>
        </h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((element, index) => {
          return (
            <div key={index}>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                  <h4 className="card-header text-center" style={{backgroundColor:'lightseagreen'}}>User:{element.id}</h4>
                    <div className="card-text fw-medium m-2">
                     <p>Name:{element.name}</p>
                     <p>Username:{element.username}</p>
                     <p>Email:{element.email}</p>
                     <h5>Address:</h5>
                     <ul>
                        <li>Street:{element.street}</li>
                        <li>Suite:{element.suite}</li>
                        <li>City:{element.city}</li>
                        <li>Zipcode:{element.zipcode}</li>
                     <li>Geo:
                     <ul>
                        <li>lat:{element.latitude}</li>
                        <li>lng:{element.longitude}</li>
                     </ul>
                     </li>
                     </ul>
                     <p>Phone:{element.phone}</p>
                     <p>Website:{element.website}</p>
                     <h5>Company:</h5>
                     <ul>
                        <li>Name:{element.companyname}</li>
                        <li>CatchPhrase:{element.catchPhrase}</li>
                        <li>bs:{element.bs}</li>
                     </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
   </div>
  );
};

export default Home;
