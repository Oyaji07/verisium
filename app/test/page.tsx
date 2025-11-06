"use client";
import { auth } from "@/firebase/client";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function TestFirebase() {
  async function test() {
    try {
      await createUserWithEmailAndPassword(
        auth,
        "testuser@gmail.com",
        "test123"
      );
      alert("✅ Firebase working!");
    } catch (err) {
      console.error(err);
      alert("❌ Firebase not working");
    }
  }

  return (
    <div style={{padding: 20}}>
      <button onClick={test}>
        Test Firebase
      </button>
    </div>
  );
}
