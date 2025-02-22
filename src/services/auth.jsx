import { useState } from "react";

export default function AuthServices() {
  const [authLoading, setAuthLoading] = useState(false);

  const url = "http://localhost:3000/auth";

  const signup = (formData) => {
    setAuthLoading(true);

    fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(result => {
      if(result.success && result.body.token) {
        localStorage.setItem(
          "auth",
          JSON.stringify({ 
            token: result.body.token, 
            user: result.body.user 
          })
        );
      }
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setAuthLoading(false);
    })
  }

  const login = (formData) => {
    setAuthLoading(true);

    fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(result => {
      if(result.success && result.body.token) {
        localStorage.setItem(
          "auth",
          JSON.stringify({ 
            token: result.body.token, 
            user: result.body.user 
          })
        );
      }
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setAuthLoading(false);
    })
  }

  const logout = () => {
    
  }

  return { signup, login, logout, authLoading };
}