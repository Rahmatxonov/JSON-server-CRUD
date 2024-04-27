import React, { useContext } from "react";
import { Context } from "../Context/AuthContext";

const Create = () => {
  const { handleSubmit, nameRef, colorRef, priceRef } = useContext(Context);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-96 mx-auto p-4 mt-20 rounded-lg bg-gray-300 shadow-md"
    >
      <label className="block mb-2">
        <span>Faylni yuklang</span>
        <input
          type="file"
          className="mt-1 p-2 border border-gray-400 rounded-md"
        />
      </label>
      <label className="block mb-2">
        <span>Mashina turini kiriting</span>
        <input
          ref={nameRef}
          className="mt-1 p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Nom"
        />
      </label>
      <label className="block mb-2">
        <span>Mashina rangini kiriting</span>
        <input
          ref={colorRef}
          className="mt-1 p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Rang"
        />
      </label>
      <label className="block mb-2">
        <span>Mashina narxini kiriting</span>
        <input
          ref={priceRef}
          className="mt-1 p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
          type="number"
          placeholder="Narx"
        />
      </label>
      <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Jo'natish
      </button>
    </form>
  );
};

export default Create;
