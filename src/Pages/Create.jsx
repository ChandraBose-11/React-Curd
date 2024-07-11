import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuClipboardEdit } from "react-icons/lu";

const Create = () => {
    const navigate = useNavigate();
    const [createData, setCreateData] = useState({
      name: "",
      username: "",
      email: "",
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      latitude: "",
      longitude: "",
      phone: "",
      website: "",
      companyname: "",
      catchphrase: "",
      bs: "",
      user_id: "",
    });
    const handleChange = (e) => {
        //e.target.value
        const { name, value } = e.target; //e.target.name e.target.value
        setCreateData((preData) => ({
          ...preData,
          [name]: value //product_name:iphone
        }));
      };
      const handlesubmit = async (e) => {
        e.preventDefault();//avoid rerender 
        await axios
          .post(
            'https://668df0dbbf9912d4c92c47e4.mockapi.io/api/user/',
            createData
          )
          .then((res) => console.log(res.data))
          .catch((error) => console.log(error));
    
        navigate("/product");
      };
    return (
            <div className="container">
      <div className="card">
      <div className="card-header text-center" style={{backgroundColor:'lightseagreen'}} ><h2>Create UserDetails <LuClipboardEdit /></h2></div>
        <div className="card-body"  style={{backgroundColor:'whitesmoke'}}>
          <form className="row g-3" onSubmit={handlesubmit}>
            <div className=" col-6 col-md-2">
              <label for="user_id" className="form-label">
                Id
              </label>
              <input
                type="text"
                className="form-control"
                id="user_id"
                name="user_id"
                value={createData.user_id}
                onChange={handleChange}
                   placeholder="Enter your Id"
              />
            </div>
            <div className=" col-6 col-md-5">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                 placeholder="Enter your name"
                value={createData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 col-md-5">
              <label for="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                 placeholder="Enter your username"
                value={createData.username}
                onChange={handleChange}
              />
            </div>
            <div className=" col-6 col-12">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={createData.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-6 col-md-6">
              <label for="street" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="street"
                name="street"
                value={createData.street}
                onChange={handleChange}
                placeholder="Enter your Address"
              ></input>
            </div>
            <div className="col-6 col-md-6">
              <label for="suite" className="form-label">
                Suite
              </label>
              <input
                type="text"
                className="form-control"
                id="suite"
                name="suite"
                 placeholder="Enter your suite"
                value={createData.suite}
                onChange={handleChange}
              />
            </div>
            <div className=" col-6 col-md-3">
              <label for="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                 placeholder="Enter your city "
                value={createData.city}
                onChange={handleChange}
              />
            </div>
            <div className=" col-6 col-md-3">
              <label for="zipcode" className="form-label">
                ZipCode
              </label>
              <input
                type="text"
                className="form-control"
                id="zipcode"
                name="zipcode"
                value={createData.zipcode}
                onChange={handleChange}
                placeholder="Enter your Zipcode"
              />
            </div>
            <div className="col-6 col-md-3">
              <label for="latitude" className="form-label">
                Lat
              </label>
              <input
                type="text"
                className="form-control"
                id="latitude"
                name="latitude"
                value={createData.latitude}
                onChange={handleChange}
                placeholder="Enter your latitude"
              />
            </div>
            <div className="col-6 col-md-3">
              <label for="longitude" className="form-label">
                Lng
              </label>
              <input
                type="text"
                className="form-control"
                id="longitude"
                name="longitude"
                value={createData.longitude}
                onChange={handleChange}
                placeholder="Enter your longitude"
              />
            </div>
            <div className="col-6 col-md-6">
              <label for="phone" className="form-label">
                Phone No
              </label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                name="phone"
                value={createData.phone}
                onChange={handleChange}
                placeholder="Enter your number"
              />
            </div>
            <div className="col-6 col-md-6">
              <label for="website" className="form-label">
                Website
              </label>
              <input
                type="text"
                className="form-control"
                id="website"
                name="website"
                value={createData.website}
                onChange={handleChange}
                placeholder="Enter your url"
              />
            </div>
            <div className="col-6 col-md-4">
              <label for="companyname" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="companyname"
                name="companyname"
                value={createData.companyname}
                onChange={handleChange}
                placeholder="Enter your companyname"
              />
            </div>
            <div className="col-6 col-md-4">
              <label for="catchphrase" className="form-label">
                Catchphrase
              </label>
              <input
                type="text"
                id="catchphrase"
                className="form-control"
                name="catchphrase"
                value={createData.catchphrase}
                onChange={handleChange}
                placeholder="Enter your catchphrase"
              />
            </div>
            <div className="col-6 col-md-4">
              <label for="bs" className="form-label">
                Bs
              </label>
              <input
                type="text"
                className="form-control"
                id="bs"
                name="bs"
                value={createData.bs}
                onChange={handleChange}
                   placeholder="Enter your bs"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
        </div>
    );
};

export default Create;