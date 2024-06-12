"use client";
import { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
import { database } from "@/app/lib/firebase";

export default function Page(params) {
  const [data, setData] = useState({});

  useEffect(() => {
    const dataRef = ref(database, "sms");

    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      // Sort the data based on timestamp in descending order
      const sortedData = Object.keys(data || {}).sort((a, b) => new Date(data[b].time) - new Date(data[a].time)).reduce((acc, key) => {
        acc[key] = data[key];
        return acc;
      }, {});
      setData(sortedData);
    });

    return () => off(dataRef, "value", unsubscribe);
  }, []);

  return (
    <div className="bg-white p-4 h-[70vh] overflow-y-scroll">
      <ul role="list" className="divide-y divide-gray-100">
        {Object.keys(data).map((key) => {
          const sms = data[key];
          return (
            <li key={key} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {sms.title}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {sms.content}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{sms.sender}</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Received <time dateTime={sms.time}>{new Date(sms.time).toLocaleString()}</time>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
