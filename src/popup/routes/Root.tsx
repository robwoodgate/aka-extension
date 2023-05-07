import "./Root.css";

import React from "react";
import {
  Link,
  Outlet,
  useLoaderData,
  redirect,
  useLocation,
} from "react-router-dom";
import ProfileNav from "../components/ProfileNav";
import Storage from "../../common/Storage";
import { KeyPair } from "../../common/model/KeyPair";

export default function Root() {
  // load data so can be accessed by other components
  const keypairs = useLoaderData() as KeyPair[];
  return (
    <div className="bg-gray-100 dark:bg-slate-900 w-full h-full">
      {/* 
      <div>
        {`windows: ${window.location.pathname} ${
          window.location.search
        }   locaton: ${useLocation().pathname}`}
        <Link to="/profile">Profile</Link>
      </div>
      */}
      <div className="relative z-50">
        <ProfileNav />
      </div>
      <div id="detail" className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}

export const loader = async (): Promise<KeyPair[]> => {
  const storage = Storage.getInstance();
  const keypairs = await storage.getKeys();
  // console.log("Root loader() returning " + JSON.stringify(keypairs));
  return keypairs;
};

export async function action({ request, params }) {
  let formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const selectedPubkey = updates.selectedPubkey;

  const storage = Storage.getInstance();
  await storage.setCurrentPubkey(selectedPubkey);
  return redirect("/profiles");
}
