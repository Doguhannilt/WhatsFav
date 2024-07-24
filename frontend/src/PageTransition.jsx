// PageTransition.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <motion.div
            key={window.location.pathname}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
