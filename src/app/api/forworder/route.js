import { NextResponse } from "next/server";
import admin from "firebase-admin";

export async function POST(req) {
  // Initialize Firebase Admin SDK
  if (!admin.apps.length) {
    const serviceAccount = require("@/app/lib/support-01-ee56b-firebase-adminsdk-rswiz-22f28b15a7.json"); // Update the path

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://yesyes-256bf-default-rtdb.firebaseio.com", // Update with your project ID
    });
  }

  const db = admin.firestore();

  try {
    const snapshot = await db
      .collection("forworder")
      .orderBy("timestamp", "desc")
      .limit(1)
      .get();

    let latestPhoneNumber = null;

    if (!snapshot.empty) {
      const latestUser = snapshot.docs[0].data();
      latestPhoneNumber = latestUser.phoneNumber;
    } else {
      console.log("No data found in Firestore"); // Log if no data is found
    }

    console.log("Fetched data:", latestPhoneNumber); // Log the fetched data

    // Return the response with cache-control headers set to disable caching
    return NextResponse.json(
      { data: { phoneNumber: latestPhoneNumber } },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        }
      }
    );
  } catch (error) {
    console.error("Error fetching users data:", error);
    return NextResponse.json(
      { data: "Internal Server Error" },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        }
      }
    );
  }
}
