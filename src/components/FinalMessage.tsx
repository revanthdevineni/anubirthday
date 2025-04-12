import React from 'react';
import { motion } from 'framer-motion';
import { Cake, Heart, Smile, SmileIcon } from 'lucide-react';

export const FinalMessage: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="max-w-2xl bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mb-6"
        >
          <Cake className="text-pink-500" size={48} fill="currentColor" />
        </motion.div>

        <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">
          Happy Birthday Anu!!
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed font-semibold text-center">
        Your presence brings so much positivity to everyone around you , You’re so incredible and so special, It’s always inspiring to see you, your strength, kindness and grace. . I feel so lucky to know you and have met you. Keep Smiling and shining always✨
        </p>

        <div className="text-center mt-8 text-2xl">
          With lots of Respect & Admiration🤗
        </div>
      </motion.div>
    </motion.div>
  );
};