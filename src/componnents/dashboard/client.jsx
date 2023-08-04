"use client";

import { useEffect } from "react";

export default function ClientDash() {

  useEffect(()=>{
    document.title = "Client Dashboard | Alan Tutoring";
  },[])

  return (
    <div>
      <div>Client Dashboard</div>
    </div>
  );
}
