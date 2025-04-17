
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
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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

  return (
    <section id="skills" className="section-padding" style={{ background: 'linear-gradient(135deg, #1a1f2c 0%, #2c3e50 100%)' }}>
      <div className="section-container">
        <FadeInWhenVisible>
          <Title level={2} className="text-center mb-12 text-3xl font-bold text-white">
            My Skills
          </Title>
        </FadeInWhenVisible>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="my-12 px-4"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-1">
              {skillsData.map((skill, index) => (
                <div key={index} className="pl-1 min-w-[180px] sm:min-w-[200px] md:min-w-[250px] flex-[0_0_33%] md:flex-[0_0_25%]">
                  <div className="p-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-center p-6 rounded-lg bg-gradient-to-br from-gray-900/80 to-gray-800/90 shadow-xl backdrop-blur-sm border border-gray-700"
                    >
                      <div className="flex justify-center mb-4">{skill.icon}</div>
                      <div className="font-medium text-white">{skill.name}</div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
