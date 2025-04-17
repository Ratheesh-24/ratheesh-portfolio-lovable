
import React, { useState } from 'react';
import { Typography, Button, Tag } from 'antd';
import { GithubOutlined, GlobalOutlined, ArrowRightOutlined } from '@ant-design/icons';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';

const { Title, Paragraph } = Typography;

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform with advanced filtering, cart functionality, and secure payment processing using Stripe.',
    image: 'https://placehold.co/600x400',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Portfolio Template',
    description: 'A customizable portfolio template for creative professionals with animated sections and responsive design for all devices.',
    image: 'https://placehold.co/600x400',
    tags: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Responsive Design'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity app to help teams manage tasks and projects efficiently with real-time updates and custom workflow automation.',
    image: 'https://placehold.co/600x400',
    tags: ['React', 'Firebase', 'Redux', 'Material-UI', 'Real-time Database'],
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with interactive maps, forecasts, and historical data visualization using charts and graphs.',
    image: 'https://placehold.co/600x400',
    tags: ['JavaScript', 'Weather API', 'ChartJS', 'Mapbox', 'Responsive Design'],
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description: 'Search and discover recipes from around the world with detailed instructions, ingredient lists, and nutritional information.',
    image: 'https://placehold.co/600x400',
    tags: ['React', 'API Integration', 'CSS Grid', 'Context API', 'Progressive Web App'],
    github: '#',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Track your fitness goals, workouts, and progress over time with custom analytics and personalized recommendations.',
    image: 'https://placehold.co/600x400',
    tags: ['React Native', 'HealthKit', 'Firebase', 'Chart.js', 'Redux'],
    demo: '#',
  },
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    setActiveProject(project);
  };

  const handleCloseProject = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="section-padding" style={{ background: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)' }}>
      <div className="section-container relative">
        <FadeInWhenVisible>
          <Title level={2} className="text-center mb-6 text-3xl font-bold text-white">
            Featured Projects
          </Title>
          <Paragraph className="text-center mb-12 text-lg max-w-2xl mx-auto text-gray-300">
            Explore my recent work showcasing clean code, innovative solutions, and attention to detail.
          </Paragraph>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <FadeInWhenVisible key={project.id} delay={project.id * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="h-full"
                onClick={() => handleOpenProject(project)}
              >
                <div className="group cursor-pointer relative overflow-hidden rounded-xl h-full bg-gradient-to-br from-gray-900/95 to-gray-800/90 backdrop-blur-sm border border-gray-700/50">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Tag key={tag} className="bg-gray-800 text-blue-400 border-blue-500/30">
                          {tag}
                        </Tag>
                      ))}
                      {project.tags.length > 3 && (
                        <Tag className="bg-gray-800 text-gray-400">
                          +{project.tags.length - 3}
                        </Tag>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <Button 
                        type="text"
                        icon={<ArrowRightOutlined />}
                        className="text-blue-400 hover:text-blue-300 pl-0"
                      >
                        View Details
                      </Button>
                      <div className="flex gap-2">
                        {project.github && (
                          <Button 
                            type="text" 
                            icon={<GithubOutlined />}
                            className="text-gray-400 hover:text-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github, '_blank');
                            }}
                          />
                        )}
                        {project.demo && (
                          <Button 
                            type="text" 
                            icon={<GlobalOutlined />} 
                            className="text-gray-400 hover:text-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.demo, '_blank');
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>

        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={handleCloseProject}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 20 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-60">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="h-full w-full object-cover"
                  />
                  <Button 
                    type="text" 
                    icon={<span className="text-xl">×</span>}
                    className="absolute top-4 right-4 z-20 text-white hover:text-white bg-black/30 hover:bg-black/50 border-0"
                    onClick={handleCloseProject}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h2 className="text-2xl font-bold text-white">{activeProject.title}</h2>
                  </div>
                </div>
                
                <ScrollArea className="p-6 max-h-[calc(90vh-240px)]">
                  <Paragraph className="text-gray-300 mb-6">
                    {activeProject.description}
                  </Paragraph>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag) => (
                        <Tag key={tag} className="bg-blue-900/30 text-blue-400 border-blue-500/30 px-3 py-1">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {activeProject.github && (
                      <Button 
                        type="primary" 
                        icon={<GithubOutlined />}
                        onClick={() => window.open(activeProject.github, '_blank')}
                        className="bg-gradient-to-r from-gray-700 to-gray-900 border-0"
                      >
                        View Code
                      </Button>
                    )}
                    {activeProject.demo && (
                      <Button 
                        type="primary" 
                        icon={<GlobalOutlined />}
                        onClick={() => window.open(activeProject.demo, '_blank')}
                        className="bg-gradient-to-r from-blue-700 to-blue-900 border-0"
                      >
                        Live Demo
                      </Button>
                    )}
                  </div>
                </ScrollArea>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
