"use client";

import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { Button } from "@/components/ui/button";

interface UserProps {
  email: string;
  username: string;
  exp: number;
}

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState("");
  const [expToken, setExpToken] = useState(0);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const refreshToken = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/token`,
        {
          withCredentials: true,
        }
      );

      setToken(res.data.accessToken);
      const decoded: UserProps = jwt_decode(res.data.accessToken);
      setExpToken(decoded.exp);
      setEmail(decoded.email);
      setUsername(decoded.username);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshToken();
  }, []);

  console.log("token", token);

  const axiosInstance = axios.create();

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 403 && !originalRequest.sent) {
        originalRequest.sent = true;
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/token`,
          { withCredentials: true }
        );

        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${res.data.accessToken}`;
        setToken(res.data.accessToken);
        const decoded: UserProps = jwt_decode(res.data.accessToken);
        setExpToken(decoded.exp);
        setEmail(decoded.email);
        setUsername(decoded.username);
        return axiosInstance(originalRequest);
      }
      return Promise.reject(error);
    }
  );

  const getUsers = async () => {
    try {
      const res = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setUsers(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>Hello, {username}</div>
      <Button onClick={getUsers}>Get Users</Button>
      {users.map((user) => (
        <div key={user._id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
};

export default Dashboard;
