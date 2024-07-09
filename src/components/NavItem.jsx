"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const NavItem = ({ tittle, param }) => {
  const serachParams = useSearchParams();
  const genre = serachParams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-amber-500 ${
          genre === param
            ? "underline underline-offset-4 decoration-amber-500 rounded-lg my-1"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {tittle}
      </Link>
    </div>
  );
};

export default NavItem;
