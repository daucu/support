// "use client";
// import { useState, useEffect } from "react";
// import { ref, set, get, push, child } from "firebase/database";
// import { database } from "@/app/lib/firebase";

// export default function Page() {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [phoneNumbers, setPhoneNumbers] = useState([]);

//   useEffect(() => {
//     const fetchPhoneNumbers = async () => {
//       try {
//         const dataRef = ref(database, "forworder");
//         const snapshot = await get(dataRef);
//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           const phoneNumbersArray = Object.keys(data).map(key => ({
//             id: key,
//             phoneNumber: data[key].phoneNumber
//           }));
//           setPhoneNumbers(phoneNumbersArray);
//         } else {
//           console.log("No data available");
//         }
//       } catch (error) {
//         console.error("Error fetching phone numbers from Firebase:", error);
//       }
//     };

//     fetchPhoneNumbers();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Add phone number data to Firebase with a unique ID
//     try {
//       const newPhoneNumberRef = push(child(ref(database), "forworder"));
//       await set(newPhoneNumberRef, { phoneNumber });
//       console.log("Phone number added to Firebase:", phoneNumber);
//       // Reset phone number input
//       setPhoneNumber("");
//       // Update current phone numbers
//       setPhoneNumbers(prev => [...prev, { id: newPhoneNumberRef.key, phoneNumber }]);
//     } catch (error) {
//       console.error("Error adding phone number to Firebase:", error);
//     }
//   };

//   const handlePhoneNumberChange = (event) => {
//     setPhoneNumber(event.target.value);
//   };

//   return (
//     <div className="bg-white">
//       <div className="bg-white px-6 py-10 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Forworder
//           </h2>
//           <p className="mt-2 text-lg leading-8 text-gray-600">
//             Add Phone number to forward SMS
//           </p>
//         </div>
//         <div className="mx-auto max-w-xl">
//           <p className="text-center text-sm font-semibold leading-6 text-gray-900">
//             Current Phone Numbers:
//           </p>
//           <ul>
//             {phoneNumbers.map(({ id, phoneNumber }) => (
//               <li key={id}>{phoneNumber}</li>
//             ))}
//           </ul>
//         </div>
//         <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl">
//           <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="phone-number"
//                 className="block text-sm font-semibold leading-6 text-gray-900"
//               >
//                 Phone number
//               </label>
//               <div className="relative mt-2.5">
//                 <input
//                   type="tel"
//                   name="phone-number"
//                   id="phone-number"
//                   value={phoneNumber}
//                   onChange={handlePhoneNumberChange}
//                   autoComplete="tel"
//                   className="block w-full rounded-md border-0 px-3.5 py-2 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="mt-10">
//             <button
//               type="submit"
//               className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Add Number
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { firestore } from "@/app/lib/firebase";

export default function Page() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState([]);

  useEffect(() => {
    const fetchPhoneNumbers = async () => {
      try {
        const q = query(collection(firestore, "forworder"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const phoneNumbersArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          phoneNumber: doc.data().phoneNumber
        }));
        setPhoneNumbers(phoneNumbersArray);
      } catch (error) {
        console.error("Error fetching phone numbers from Firestore:", error);
      }
    };

    fetchPhoneNumbers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Add phone number data to Firestore with a timestamp
    try {
      const docRef = await addDoc(collection(firestore, "forworder"), {
        phoneNumber,
        timestamp: new Date()
      });
      console.log("Phone number added to Firestore:", phoneNumber);
      // Reset phone number input
      setPhoneNumber("");
      // Update current phone numbers
      setPhoneNumbers(prev => [...prev, { id: docRef.id, phoneNumber }]);
    } catch (error) {
      console.error("Error adding phone number to Firestore:", error);
    }
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="bg-white">
      <div className="bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Forworder
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Add Phone number to forward SMS
          </p>
        </div>
        <div className="mx-auto max-w-xl">
          <p className="text-center text-sm font-semibold leading-6 text-gray-900">
            Current Phone Numbers:
          </p>
          <ul>
            {phoneNumbers.map(({ id, phoneNumber }) => (
              <li key={id}>{phoneNumber}</li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Number
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
