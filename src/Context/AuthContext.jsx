import React, { createContext, useEffect, useState, useRef } from "react";
import instance from "../api/axios";
import { useNavigate } from "react-router-dom";

const Context = createContext();

const AuthContext = ({ children }) => {
  const [deleted, setDeleted] = useState(false);
  const [cars, setCars] = useState([]);
  const nameRef = useRef();
  const colorRef = useRef();
  const priceRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    instance()
      .get("/Cars")
      .then((res) => {
        setCars(res.data);
      });
  }, [deleted]);

  const deleteItem = (e) => {
    instance()
      .delete(`/Cars/${e.target.id}`)
      .then((res) => {
        setDeleted(!deleted);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      color: colorRef.current.value,
      price: priceRef.current.value,
    };
    instance()
      .post("Cars", data)
      .then((promise) => {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      });
  };

  const updeteItem = (e) => {
    e.preventDefault();
  };

  return (
    <Context.Provider
      value={{
        cars,
        deleteItem,
        handleSubmit,
        nameRef,
        colorRef,
        priceRef,
        updeteItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, AuthContext };
