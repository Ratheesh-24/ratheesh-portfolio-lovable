
import React from 'react';
import { Typography, Row, Col, Image } from 'antd';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding" style={{ background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)' }}>
      <div className="section-container">
        <FadeInWhenVisible>
          <Title level={2} className="text-center mb-12 text-3xl font-bold text-white">
            <span className="inline-block relative after:content-[''] after:absolute after:w-1/3 after:h-1 after:bg-blue-500 after:-bottom-4 after:left-1/2 after:transform after:-translate-x-1/2">
              About Me
            </span>
          </Title>
        </FadeInWhenVisible>
        
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={12}>
            <FadeInWhenVisible delay={0.2}>
              <div className="flex justify-center">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75"></div>
                  <div className="relative">
                    <Image
                      src="https://placehold.co/400x500"
                      alt="Profile"
                      className="rounded-lg"
                      width={300}
                      height={375}
                      preview={false}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg"></div>
                </motion.div>
              </div>
            </FadeInWhenVisible>
          </Col>
          
          <Col xs={24} md={12}>
            <FadeInWhenVisible delay={0.4}>
              <Title level={3} className="mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Who am I?
              </Title>
              
              <Paragraph className="text-lg mb-5 text-gray-300">
                I'm a passionate web developer with over 5 years of experience creating
                modern and responsive websites. I specialize in frontend development
                with a strong background in UI/UX design.
              </Paragraph>
              
              <Paragraph className="text-lg mb-5 text-gray-300">
                My journey in web development started when I was in college, and since
                then, I've worked with various clients across different industries to
                bring their ideas to life.
              </Paragraph>
              
              <Paragraph className="text-lg mb-6 text-gray-300">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying outdoor activities.
              </Paragraph>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 p-4 rounded-lg border border-gray-700/50"
                >
                  <div className="text-blue-400 font-medium mb-1">Name:</div>
                  <div className="text-white">John Doe</div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 p-4 rounded-lg border border-gray-700/50"
                >
                  <div className="text-blue-400 font-medium mb-1">Email:</div>
                  <div className="text-white">john.doe@example.com</div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 p-4 rounded-lg border border-gray-700/50"
                >
                  <div className="text-blue-400 font-medium mb-1">From:</div>
                  <div className="text-white">New York, USA</div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 p-4 rounded-lg border border-gray-700/50"
                >
                  <div className="text-blue-400 font-medium mb-1">Experience:</div>
                  <div className="text-white">5+ Years</div>
                </motion.div>
              </div>
            </FadeInWhenVisible>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
