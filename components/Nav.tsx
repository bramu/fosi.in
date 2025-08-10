"use client";

import { Button } from "./ui/button";
import { LogOut, User } from "lucide-react";
import { useAuth } from "./AuthProvider";

export const Nav = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div
      className={"fixed top-0 right-0 px-4 py-2 flex items-center h-14 z-50"}
    >
      <div className={"ml-auto flex items-center gap-1"}>
        {user && (
          <div className="flex items-center gap-2 mr-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full">
              <User className="size-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {user.email}
              </span>
            </div>
            <Button
              onClick={handleSignOut}
              variant={"ghost"}
              className={"flex items-center gap-1.5 rounded-full"}
              size="sm"
            >
              <LogOut className={"size-4"} />
              <span>Sign Out</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
