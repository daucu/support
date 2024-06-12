"use client";
import { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
import { database } from "@/app/lib/firebase";

export default function Page(params) {
  const [data, setData] = useState({});

  useEffect(() => {
    const dataRef = ref(database, "users");

    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });

    return () => off(dataRef, "value", unsubscribe);
  }, []);

  const renderData = (obj) => {
    return Object.entries(obj).map(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        return (
          <div key={key} className="pl-4">
            <p className="font-semibold text-gray-800">{key}:</p>
            <div className="pl-4">{renderData(value)}</div>
          </div>
        );
      } else {
        return (
          <p key={key} className="flex space-x-6">
            <span className="font-semibold text-gray-800 md:w-1/3 text-sm leading-6">{key}:</span> 
            <span className="truncate text-xs leading-5 text-gray-500">{value}</span>
          </p>
        );
      }
    });
  };

  return (
    <div className="bg-white p-4 h-[70vh] overflow-y-scroll">
      {/* <h1 className="text-xl font-bold mb-4">Users Data</h1> */}
      <ul role="list" className="divide-y divide-gray-200">
        {Object.keys(data).reverse().map((key) => {
          const user = data[key];
          return (
            <li key={key} className="flex flex-col gap-y-2 py-5">
              <div className="pl-16">{renderData(user)}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
