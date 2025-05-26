import { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50 py-4">
        <div className="container flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary"
          >
            Obed Pakpahan
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-8"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary dark:text-gray-300'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary dark:text-gray-300'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary dark:text-gray-300'
                }`
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary dark:text-gray-300'
                }`
              }
            >
              Contact
            </NavLink>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <MoonIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                  >
                    <SunIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </nav>

      <main className="pt-20">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
