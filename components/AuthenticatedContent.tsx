"use client";

import { useHumeAccessToken } from "./HumeAccessTokenProvider";
import dynamic from "next/dynamic";

const Chat = dynamic(() => import("./Chat"), {
  ssr: false,
});

export default function AuthenticatedContent() {
  const { accessToken } = useHumeAccessToken();
  
  return (
    <div className={"grow flex flex-col"}>
      <Chat />
    </div>
  );
} 