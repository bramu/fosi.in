"use client";

import { motion } from 'motion/react';
import { MessageCircle, Sparkles, Chrome, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from './AuthProvider';
import dynamic from 'next/dynamic';

// Dynamically import StartCall to avoid the hook dependency when not needed
const StartCall = dynamic(() => import('./StartCall'), { ssr: false });

export default function LandingPage() {
  const { signInWithGoogle, user } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Talk to Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Experience the future of voice interaction with AI
          </p>
          
          {/* Conditional Button: Google Sign In or Start Call */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {!user ? (
              // Show Google Sign In button when not authenticated
              <Button
                onClick={handleGoogleSignIn}
                className="w-full h-14 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-200 text-lg font-semibold"
              >
                <Chrome className="w-6 h-6 mr-3" />
                Continue with Google
              </Button>
            ) : (
              // Show Start Call button when authenticated
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/20 rounded-full text-green-700 dark:text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Signed in as {user.email}
                </div>
                <Button
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Start Call
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400"
        >
          <Sparkles className="w-4 h-4" />
          <span>Powered by Hume AI</span>
        </motion.div>
      </div>
    </div>
  );
} 