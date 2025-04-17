
import React from 'react';
import { Typography, Row, Col } from 'antd';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import {
  Html5Outlined,
  CoffeeOutlined, // Replacement for CSS
  CodeOutlined, // Replacement for JavaScript
  ApiOutlined, // Replacement for React
  CloudServerOutlined, // Replacement for Node.js
  GitlabFilled,
} from '@ant-design/icons';

const { Title } = Typography;

const Skills: React.FC = () => {
  const skillsData = [
    { name: 'HTML5', icon: <Html5Outlined style={{ fontSize: '32px', color: '#E34F26' }} /> },
    { name: 'CSS3', icon: <CoffeeOutlined style={{ fontSize: '32px', color: '#1572B6' }} /> },
    { name: 'JavaScript', icon: <CodeOutlined style={{ fontSize: '32px', color: '#F7DF1E' }} /> },
    { name: 'React', icon: <ApiOutlined style={{ fontSize: '32px', color: '#61DAFB' }} /> },
    { name: 'Node.js', icon: <CloudServerOutlined style={{ fontSize: '32px', color: '#339933' }} /> },
    { name: 'GitLab', icon: <GitlabFilled style={{ fontSize: '32px', color: '#FCA121' }} /> },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="section-container">
        <FadeInWhenVisible>
          <Title level={2} className="text-center mb-8 text-3xl font-bold">
            My Skills
          </Title>
        </FadeInWhenVisible>
        
        <Row gutter={[32, 32]} justify="center">
          {skillsData.map((skill, index) => (
            <Col xs={12} sm={8} md={6} lg={4} key={index}>
              <FadeInWhenVisible delay={(index % 6) * 0.1}>
                <div className="text-center p-4 rounded-lg shadow-md bg-background">
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <div className="font-medium">{skill.name}</div>
                </div>
              </FadeInWhenVisible>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Skills;
