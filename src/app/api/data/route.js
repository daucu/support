import { NextResponse } from "next/server";
import admin from "firebase-admin";

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  const serviceAccount = require("@/app/lib/support-01-ee56b-firebase-adminsdk-rswiz-22f28b15a7.json"); // Update the path

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://yesyes-256bf-default-rtdb.firebaseio.com" // Update with your project ID
  });
}

const db = admin.database();

// To handle a GET request to /api/data
export async function GET(req, res) {
  try {
    const snapshot = await db.ref("users").once("value");
    const users = snapshot.val();

    // Return the response
    return NextResponse.json({ data: users }, { status: 200 });
  } catch (error) {
    console.error("Error fetching users data:", error);
    return NextResponse.json(
      { data: "Internal Server Error" },
      { status: 500 }
    );
  }
}
