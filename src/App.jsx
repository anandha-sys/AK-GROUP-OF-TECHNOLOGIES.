import { motion } from 'framer-motion';

function App() {
  // Animation variants for smooth, staggered reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-studio-dark font-sans relative overflow-hidden">
      
      {/* Subtle Background Animation */}
      <motion.div 
        className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]"
        style={{ backgroundImage: 'radial-gradient(circle at center, #D4AF37 0%, transparent 50%)' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className="z-10 text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-studio-gold tracking-[0.3em] uppercase text-sm mb-4 font-semibold"
        >
          Welcome to the Future
        </motion.h2>
        
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-serif font-bold text-studio-light mb-6 tracking-wide"
        >
          AK Group of<br/>Technologies
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10"
        >
          Crafting intelligent digital experiences through code, animation, and classic studio design.
        </motion.p>
        
        <motion.button 
          variants={itemVariants}
          whileHover={{ scale: 1.05, backgroundColor: "#F5F5DC", color: "#121212" }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-studio-gold text-studio-gold px-8 py-3 uppercase tracking-widest text-sm transition-colors duration-300"
        >
          Enter the Studio
        </motion.button>
      </motion.div>
    </div>
  );
}

export default App;
