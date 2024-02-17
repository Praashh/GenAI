"use client";

// import { Icons } from "@/components/ui/icons";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { useMounted } from "../hooks/useMounted";
import { Button } from "../ui/button";
import { FaRedo } from 'react-icons/fa';

export function Logout() {
  const isMounted = useMounted();
  const [isLoading, setIsLoading] = useState(false);
  
  if (!isMounted) {
    return null;
  }
  return (
    <div
      className="cursor-pointer"
      onClick={async () => {
        setIsLoading(true);
        await signOut();
      }}
    >
      {isLoading ? (
        <div className="items-center w-full flex justify-center my-2">
          <Button disabled>
          <FaRedo className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
        </div>
      ) : (
        <div className="flex m-2 items-center">
          <Button  variant="secondary">Logout</Button>
        </div>
      )}
    </div>
  );
}