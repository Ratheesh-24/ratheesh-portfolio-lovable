
import React, { useState } from 'react';
import { Layout as AntLayout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined, BulbOutlined, BulbFilled } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { useIsMobile } from '@/hooks/use-mobile';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';

const { Header, Content, Footer } = AntLayout;

const navItems = [
  { key: 'home', label: 'Home', href: '#home', icon: <Home size={16} /> },
  { key: 'about', label: 'About', href: '#about', icon: <User size={16} /> },
  { key: 'skills', label: 'Skills', href: '#skills', icon: <Code size={16} /> },
  { key: 'projects', label: 'Projects', href: '#projects', icon: <Briefcase size={16} /> },
  { key: 'contact', label: 'Contact', href: '#contact', icon: <Mail size={16} /> },
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
    background: theme === 'dark' 
      ? 'rgba(17, 25, 40, 0.85)' 
      : 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(10px)',
    padding: isMobile ? '0 16px' : '0 50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: theme === 'dark' 
      ? '1px solid rgba(255, 255, 255, 0.05)' 
      : '1px solid rgba(0, 0, 0, 0.05)',
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
                    icon: item.icon,
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
                style={{ 
                  background: 'transparent', 
                  borderBottom: 'none',
                  width: 'auto',
                  overflow: 'visible'
                }}
                items={navItems.map((item) => ({
                  key: item.key,
                  icon: item.icon,
                  label: (
                    <a href={item.href} onClick={() => handleMenuClick(item.key)} className="whitespace-nowrap flex items-center">
                      {item.label}
                    </a>
                  ),
                }))}
                className="text-nowrap"
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
