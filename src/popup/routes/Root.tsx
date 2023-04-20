import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import NavTest from "../components/NavTest";
// import { getProfiles } from "../common";

import "./Root.css";
import { getProfiles } from "../common";
export default function Root() {
  const profiles: any = useLoaderData();

  return (
    <>
      <NavTest {...profiles} />
      <div className=" bg-aka-blue text-aka-yellow">
        <div id="sidebar">
          <h1>
            {profiles.selected} ( {window.location.pathname} )
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/badge">Badge</Link>
              </li>
              <li>
                <Link to="/bad">Bad Link</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bg-green-300 border-green-600 border-b p-4 m-4 rounded">
          Hello World
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export const loader = async () => {
  console.log("root loader called");
  const profiles = await getProfiles();
  return profiles;
};
