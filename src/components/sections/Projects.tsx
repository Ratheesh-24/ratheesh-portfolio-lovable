
import React from 'react';
import { Typography, Row, Col, Card, Button, Tag } from 'antd';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

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
    description: 'A fully responsive e-commerce platform built with React and Node.js.',
    image: 'https://placehold.co/600x400',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Portfolio Template',
    description: 'A customizable portfolio template for creative professionals.',
    image: 'https://placehold.co/600x400',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity app to help teams manage tasks and projects efficiently.',
    image: 'https://placehold.co/600x400',
    tags: ['React', 'Firebase', 'Redux'],
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with interactive maps and forecasts.',
    image: 'https://placehold.co/600x400',
    tags: ['JavaScript', 'Weather API', 'ChartJS'],
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description: 'Search and discover recipes from around the world with detailed instructions.',
    image: 'https://placehold.co/600x400',
    tags: ['React', 'API Integration', 'CSS Grid'],
    github: '#',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Track your fitness goals, workouts, and progress over time.',
    image: 'https://placehold.co/600x400',
    tags: ['React Native', 'HealthKit', 'Firebase'],
    demo: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="section-container">
        <FadeInWhenVisible>
          <Title level={2} className="text-center mb-6 text-3xl font-bold">
            My Projects
          </Title>
          <Paragraph className="text-center mb-12 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my 
            passion for creating intuitive and functional web applications.
          </Paragraph>
        </FadeInWhenVisible>

        <Row gutter={[24, 24]}>
          {projects.map((project, index) => (
            <Col xs={24} sm={12} lg={8} key={project.id}>
              <FadeInWhenVisible delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card
                    cover={
                      <img
                        alt={project.title}
                        src={project.image}
                        className="h-48 object-cover"
                      />
                    }
                    className="h-full shadow-md hover:shadow-lg transition-shadow"
                    actions={[
                      project.github && (
                        <Button type="text" icon={<GithubOutlined />} href={project.github}>
                          Code
                        </Button>
                      ),
                      project.demo && (
                        <Button type="text" icon={<GlobalOutlined />} href={project.demo}>
                          Demo
                        </Button>
                      ),
                    ].filter(Boolean)}
                  >
                    <Meta
                      title={project.title}
                      description={project.description}
                    />
                    <div className="mt-3">
                      {project.tags.map((tag) => (
                        <Tag key={tag} className="mr-1 mb-1">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </FadeInWhenVisible>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Projects;
