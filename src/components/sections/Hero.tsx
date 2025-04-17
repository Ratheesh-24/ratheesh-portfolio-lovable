
import React from 'react';
import { Button, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import StaggeredText from '../animations/StaggeredText';

const { Title, Paragraph } = Typography;

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center section-padding">
      <div className="section-container">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paragraph className="text-primary font-medium mb-2">Hello, I'm</Paragraph>
          </motion.div>
          
          <StaggeredText
            text="John Doe"
            component="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Title level={2} className="text-2xl sm:text-3xl font-medium mb-6">
              Web Developer & Designer
            </Title>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Paragraph className="text-lg mb-8 max-w-2xl">
              I design and build beautiful, responsive websites with clean code and user-friendly experiences.
            </Paragraph>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button type="primary" size="large" href="#projects">
              View My Work
            </Button>
            <Button size="large" href="#contact">
              Contact Me
            </Button>
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
          >
            <a href="#about" className="text-foreground opacity-60 hover:opacity-100">
              <DownOutlined style={{ fontSize: '24px' }} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
