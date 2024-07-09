"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const onSubmitHandler = (e) =>{
    e.preventDefault();
    router.push(`/search/${search}`)
  }
  return (
    <form className="max-w-screen-xl mx-auto mt-2 flex justify-between" onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Search Movies..."
        className="w-full h-14 rounded-md border-2 ps-2 hover:border-black outline-none mx-2"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button className="text-amber-500 disabled:text-gray-400 mx-2 cursor-pointer" disabled={search === ''}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;
