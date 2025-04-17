
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import { ConfigProvider, App as AntApp } from 'antd';
import { ThemeProvider } from '@/components/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  return (
    <ThemeProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1890ff',
            borderRadius: 8,
          },
        }}
      >
        <AntApp>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Layout>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </Layout>
            </motion.div>
          </AnimatePresence>
        </AntApp>
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default Index;
