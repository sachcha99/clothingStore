import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TokenValidation = ({ children }) => {
    let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
        navigate("/login");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default TokenValidation;
