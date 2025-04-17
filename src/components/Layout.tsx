
import React, { useState } from 'react';
import { Layout as AntLayout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined, BulbOutlined, BulbFilled } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { useIsMobile } from '@/hooks/use-mobile';

const { Header, Content, Footer } = AntLayout;

const navItems = [
  { key: 'home', label: 'Home', href: '#home' },
  { key: 'about', label: 'About', href: '#about' },
  { key: 'skills', label: 'Skills', href: '#skills' },
  { key: 'projects', label: 'Projects', href: '#projects' },
  { key: 'contact', label: 'Contact', href: '#contact' },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleMenuClick = (key: string) => {
    setActiveSection(key);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  // Intersection Observer to track the active section
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const headerStyle = {
    position: 'fixed',
    zIndex: 10,
    width: '100%',
    background: theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(5px)',
    padding: isMobile ? '0 16px' : '0 50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  
  return (
    <AntLayout className="min-h-screen">
      <Header style={headerStyle as React.CSSProperties}>
        <div className="flex items-center justify-between w-full">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl font-bold text-primary"
          >
            Portfolio
          </motion.div>
          
          {isMobile ? (
            <div className="flex items-center gap-3">
              <Button
                type="text"
                icon={theme === 'dark' ? <BulbFilled /> : <BulbOutlined />}
                onClick={toggleTheme}
              />
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setDrawerOpen(true)}
              />
              <Drawer
                title="Menu"
                placement="right"
                onClose={() => setDrawerOpen(false)}
                open={drawerOpen}
              >
                <Menu
                  mode="vertical"
                  selectedKeys={[activeSection]}
                  items={navItems.map((item) => ({
                    key: item.key,
                    label: <a href={item.href} onClick={() => handleMenuClick(item.key)}>{item.label}</a>,
                  }))}
                />
              </Drawer>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Menu
                mode="horizontal"
                selectedKeys={[activeSection]}
                style={{ background: 'transparent', borderBottom: 'none' }}
                items={navItems.map((item) => ({
                  key: item.key,
                  label: (
                    <a href={item.href} onClick={() => handleMenuClick(item.key)}>
                      {item.label}
                    </a>
                  ),
                }))}
              />
              <Button
                type="text"
                icon={theme === 'dark' ? <BulbFilled /> : <BulbOutlined />}
                onClick={toggleTheme}
                className="ml-3"
              />
            </div>
          )}
        </div>
      </Header>
      <Content className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={theme} // Re-render when theme changes
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Content>
      <Footer className="text-center p-6 bg-background">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </Footer>
    </AntLayout>
  );
};

export default Layout;
