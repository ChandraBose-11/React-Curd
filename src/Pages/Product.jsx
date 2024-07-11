import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ setId }) => {
  const [products, setProducts] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchdata();
  }, [deleteData]);
  const fetchdata = async () => {
    await axios
      .get("https://668df0dbbf9912d4c92c47e4.mockapi.io/api/user")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`https://668df0dbbf9912d4c92c47e4.mockapi.io/api/user/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="p-1 table-responsive">
        <table className="table table-hover table-danger table-bordered">
          <thead className="fs-3 text-center">
            <tr className="table-success">
              <th colSpan={4}>User Details</th>
              <th colSpan={6}>Address</th>
              <th colSpan={2}>Contact</th>
              <th colSpan={3}>Company</th>
              <th colSpan={2}>Action</th>
            </tr>
            <tr className="table-danger">
              <th>Id</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Street</th>
              <th>Suite</th>
              <th>City</th>
              <th>Zipcode</th>
              <th>Lat</th>
              <th>Lng</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Name</th>
              <th>CatchPhrase</th>
              <th>Bs</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody
            className="table-group-divider table-warning"
            style={{ textAlign: "center" }}
          >
            {products.map((ele, ind) => {
              return (
                <tr key={ind}>
                  <th>{ele.id}</th>
                  <td>{ele.name}</td>
                  <td>{ele.username}</td>
                  <td>{ele.email}</td>
                  <td>{ele.street}</td>
                  <td>{ele.suite}</td>
                  <td>{ele.city}</td>
                  <td>{ele.zipcode}</td>
                  <td>{ele.latitude}</td>
                  <td>{ele.longitude}</td>
                  <td>{ele.phone}</td>
                  <td>{ele.website}</td>
                  <td>{ele.companyname}</td>
                  <td>{ele.catchphrase}</td>
                  <td>{ele.bs}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        handleEdit(ele.id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(ele.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
              className="btn btn-success m-3"
              onClick={() => {
                navigate("/create");
              }}
            >
              Create
            </button>
      </div>
    </div>
  );
};

export default Product;
