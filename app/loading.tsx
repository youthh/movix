"use client";
import React from "react";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="loading__container">
      <CircularProgress size={100} />
    </div>
  );
};

export default Loading;
