"use client";

import { useBalance } from "@repo/store/balance";
import React from "react";

export default function() {
  const balance = useBalance();
  return <div>
    hi there {balance}
  </div>
}