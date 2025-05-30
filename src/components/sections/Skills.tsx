
import React, { useEffect } from 'react';
import { Typography } from 'antd';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import {
  Html5Outlined,
  CoffeeOutlined,
  CodeOutlined,
  ApiOutlined,
  CloudServerOutlined,
  GitlabFilled,
  DatabaseFilled,
  CloudFilled,
  AppstoreFilled,
  FireFilled,
  RocketFilled,
  ThunderboltFilled,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const { Title } = Typography;

const Skills: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      Autoplay({ 
        delay: 2000, 
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
  );

  const skillsData = [
    { name: 'HTML5', icon: <Html5Outlined style={{ fontSize: '40px', color: '#E34F26' }} /> },
    { name: 'CSS3', icon: <CoffeeOutlined style={{ fontSize: '40px', color: '#1572B6' }} /> },
    { name: 'JavaScript', icon: <CodeOutlined style={{ fontSize: '40px', color: '#F7DF1E' }} /> },
    { name: 'React', icon: <ApiOutlined style={{ fontSize: '40px', color: '#61DAFB' }} /> },
    { name: 'Node.js', icon: <CloudServerOutlined style={{ fontSize: '40px', color: '#339933' }} /> },
    { name: 'GitLab', icon: <GitlabFilled style={{ fontSize: '40px', color: '#FCA121' }} /> },
    { name: 'Firebase', icon: <FireFilled style={{ fontSize: '40px', color: '#FFCA28' }} /> },
    { name: 'MongoDB', icon: <DatabaseFilled style={{ fontSize: '40px', color: '#47A248' }} /> },
    { name: 'AWS', icon: <CloudFilled style={{ fontSize: '40px', color: '#FF9900' }} /> },
    { name: 'Redux', icon: <ThunderboltFilled style={{ fontSize: '40px', color: '#764ABC' }} /> },
    { name: 'Docker', icon: <RocketFilled style={{ fontSize: '40px', color: '#2496ED' }} /> },
    { name: 'GraphQL', icon: <AppstoreFilled style={{ fontSize: '40px', color: '#E10098' }} /> },
  ];

  // Animation variants for staggered appearance of cards
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8,
      rotateY: -30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="section-padding" style={{ 
      background: 'linear-gradient(135deg, rgba(23, 28, 46, 0.95) 0%, rgba(44, 62, 80, 0.9) 100%)',
      boxShadow: 'inset 0 0 100px rgba(0,0,0,0.3)'
    }}>
      <div className="section-container">
        <FadeInWhenVisible>
          <Title level={2} className="text-center mb-12 text-3xl font-bold text-white">
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0)" }}
              transition={{ duration: 1 }}
            >
              My Skills
            </motion.span>
          </Title>
        </FadeInWhenVisible>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="my-12 px-4"
        >
          <motion.div 
            className="overflow-hidden relative" 
            ref={emblaRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Multiple animated glow effects */}
            <motion.div 
              className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-blue-500/30 blur-3xl -z-10"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 100, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div 
              className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-purple-500/30 blur-3xl -z-10"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.5, 0.2],
                x: [0, -100, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />
            
            <div className="flex -ml-1">
              {skillsData.map((skill, index) => (
                <div key={index} className="pl-1 min-w-[180px] sm:min-w-[200px] md:min-w-[250px] flex-[0_0_33%] md:flex-[0_0_25%]">
                  <div className="p-1">
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.08,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
                        rotate: 5,
                        y: -8
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="text-center p-6 rounded-lg bg-gradient-to-br from-gray-900/80 to-gray-800/90 shadow-xl backdrop-blur-sm border border-gray-700 relative overflow-hidden group h-[150px] flex flex-col items-center justify-center"
                    >
                      {/* Animated background gradient */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                      
                      {/* Animated border glow on hover */}
                      <motion.div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-700"
                        style={{ 
                          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                          transform: "translateX(-100%)",
                        }}
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      
                      <motion.div 
                        className="flex justify-center mb-4 relative"
                        whileHover={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.2, 1],
                          transition: { duration: 0.5 }
                        }}
                      >
                        {skill.icon}
                      </motion.div>
                      <div className="font-medium text-white">{skill.name}</div>
                      
                      {/* Subtle pulse effect */}
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        animate={{ 
                          boxShadow: ["0 0 0 rgba(255,255,255,0)", "0 0 8px rgba(255,255,255,0.3)", "0 0 0 rgba(255,255,255,0)"]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Enhanced scroll indicator */}
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="flex gap-2"
              animate={{
                x: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <motion.span 
                className="h-2 w-2 rounded-full bg-white/60"
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0
                }}
              />
              <motion.span 
                className="h-2 w-2 rounded-full bg-white/80"
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.2
                }}
              />
              <motion.span 
                className="h-2 w-2 rounded-full bg-white"
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.4
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
