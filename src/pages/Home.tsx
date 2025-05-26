import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Hello, I'm{' '}
              <span className="text-primary">
                <TypeAnimation
                  sequence={[
                    'Obed Pakpahan',
                    2000,
                    'a Junior Web Developer',
                    2000,
                    'a UI/UX Designer',
                    2000,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300">
              I create beautiful and functional websites with modern technologies
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex gap-4"
            >
              <a
                href="/portfolio"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium 
                         transition-all hover:shadow-lg"
              >
                View My Work
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-primary 
                         border-2 border-primary rounded-lg font-medium
                         transition-all hover:shadow-lg"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <img
                src="/images/miku.jpg"
                alt="Profile"
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/500x500.png?text=Your+Photo+Here';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
