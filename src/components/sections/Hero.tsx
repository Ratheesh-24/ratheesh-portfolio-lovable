
import React from 'react';
import { Button, Typography } from 'antd';
import { DownOutlined, GithubOutlined, FilePdfOutlined, LinkedinOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import StaggeredText from '../animations/StaggeredText';

const { Title, Paragraph } = Typography;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    }
  })
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center section-padding" 
      style={{ 
        background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            initial={{
              x: Math.random() * 100 - 50 + '%',
              y: Math.random() * 100 - 50 + '%',
              scale: Math.random() * 1 + 0.5,
            }}
            animate={{
              x: [
                Math.random() * 100 - 50 + '%',
                Math.random() * 100 - 50 + '%',
                Math.random() * 100 - 50 + '%',
              ],
              y: [
                Math.random() * 100 - 50 + '%',
                Math.random() * 100 - 50 + '%',
                Math.random() * 100 - 50 + '%',
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 300 + 50 + 'px',
              height: Math.random() * 300 + 50 + 'px',
              opacity: Math.random() * 0.2,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Paragraph className="text-blue-400 font-medium mb-2">Hello, I'm</Paragraph>
          </motion.div>
          
          <StaggeredText
            text="John Doe"
            component="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
          />
          
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Title level={2} className="text-2xl sm:text-3xl font-medium mb-6 text-gray-300">
              Web Developer & Designer
            </Title>
          </motion.div>
          
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Paragraph className="text-lg mb-8 max-w-2xl text-gray-400">
              I create engaging digital experiences with clean code and innovative design.
              Specializing in building responsive websites and interactive applications 
              that deliver exceptional user experiences.
            </Paragraph>
          </motion.div>
          
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Button 
              type="primary" 
              size="large" 
              icon={<GithubOutlined />}
              href="https://github.com"
              target="_blank"
              className="bg-gradient-to-r from-blue-600 to-blue-800 border-0"
            >
              GitHub Profile
            </Button>
            <Button 
              size="large" 
              icon={<FilePdfOutlined />}
              href="#"
              target="_blank"
              className="border-blue-600 text-blue-400 hover:text-white hover:border-blue-400"
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex gap-4"
          >
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
            >
              <LinkedinOutlined style={{ fontSize: '18px' }} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
            >
              <GithubOutlined style={{ fontSize: '18px' }} />
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-center"
          >
            <a href="#about" className="text-gray-400 opacity-60 hover:opacity-100 hover:text-blue-400 transition-colors">
              <div className="text-sm mb-2 uppercase tracking-widest">Scroll Down</div>
              <DownOutlined style={{ fontSize: '24px' }} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
