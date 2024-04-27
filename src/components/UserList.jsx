import React, { useContext } from "react";
import { Context } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const UserList = () => {
  const { cars, deleteItem, updeteItem } = useContext(Context);

  return (
    <ul className="space-y-5 m-5 relative">
      <Link to={"/create"}>
        <button className="create bg-orange-500 p-1 w-[150px] rounded-md text-white text-[26px] absolute right-0 top-[350px] rotate-90">
          Create
        </button>
      </Link>
      {cars.length > 0 &&
        cars.map((item) => {
          const { id, name, color, price } = item;
          return (
            <li
              className="text-[20px] flex flex-col bg-black rounded-md w-[400px]
             text-white p-5
"
              key={id}
            >
              <span>ID: {id}</span>
              <span>Name: {name}</span>
              <span>Color: {color}</span>
              <span>Price: {price}</span>
              <button
                id={id}
                onClick={deleteItem}
                className="p-2 bg-red-600 rounded-md mt-5"
              >
                Delete
              </button>
              <button
                onClick={updeteItem}
                className="p-2 bg-green-400 mt-5 text-white rounded-md w-full"
              >
                Update
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default UserList;
