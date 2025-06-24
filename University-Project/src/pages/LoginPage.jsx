import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      
    </div>
  );
}

export default LoginPage;