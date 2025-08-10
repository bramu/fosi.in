"use client";

import dynamic from "next/dynamic";
import { useAuth } from "@/components/AuthProvider";
import LandingPage from "@/components/LandingPage";

const Chat = dynamic(() => import("@/components/Chat"), {
  ssr: false,
});

const HumeAccessTokenProvider = dynamic(() => import("@/components/HumeAccessTokenProvider"), {
  ssr: false,
});

const StartCall = dynamic(() => import("@/components/StartCall"), {
  ssr: false,
});

// Wrapper component that can access the HumeAccessToken context
const AuthenticatedContent = dynamic(() => import("@/components/AuthenticatedContent"), {
  ssr: false,
});

function HomePage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin size-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LandingPage />;
  }

  return (
    <HumeAccessTokenProvider>
      <AuthenticatedContent />
    </HumeAccessTokenProvider>
  );
}

export default function Page() {
  return <HomePage />;
}
