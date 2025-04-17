
import React from 'react';
import { Typography, Row, Col, Card, Progress } from 'antd';
import {
  HtmlFilled,
  CodeFilled,
  DatabaseFilled,
  RocketFilled,
  ToolFilled,
  CloudServerOutlined,
} from '@ant-design/icons';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  skills: Array<{ name: string; percentage: number }>;
}

const skillCategories: Skill[] = [
  {
    name: 'Frontend',
    icon: <HtmlFilled />,
    color: '#f56a00',
    skills: [
      { name: 'HTML/CSS', percentage: 90 },
      { name: 'JavaScript', percentage: 85 },
      { name: 'React', percentage: 80 },
    ],
  },
  {
    name: 'Backend',
    icon: <DatabaseFilled />,
    color: '#722ed1',
    skills: [
      { name: 'Node.js', percentage: 75 },
      { name: 'Python', percentage: 70 },
      { name: 'SQL', percentage: 80 },
    ],
  },
  {
    name: 'Design',
    icon: <CodeFilled />,
    color: '#13c2c2',
    skills: [
      { name: 'Figma', percentage: 85 },
      { name: 'Adobe XD', percentage: 75 },
      { name: 'UI/UX', percentage: 80 },
    ],
  },
  {
    name: 'DevOps',
    icon: <CloudServerOutlined />,
    color: '#1890ff',
    skills: [
      { name: 'Docker', percentage: 70 },
      { name: 'CI/CD', percentage: 65 },
      { name: 'AWS', percentage: 60 },
    ],
  },
  {
    name: 'Tools',
    icon: <ToolFilled />,
    color: '#fa8c16',
    skills: [
      { name: 'Git', percentage: 85 },
      { name: 'VS Code', percentage: 90 },
      { name: 'Jira', percentage: 75 },
    ],
  },
  {
    name: 'Soft Skills',
    icon: <RocketFilled />,
    color: '#52c41a',
    skills: [
      { name: 'Communication', percentage: 90 },
      { name: 'Teamwork', percentage: 85 },
      { name: 'Problem Solving', percentage: 85 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <FadeInWhenVisible>
          <Title level={2} className="text-center mb-6 text-3xl font-bold">
            My Skills
          </Title>
          <Paragraph className="text-center mb-12 text-lg max-w-2xl mx-auto">
            I've worked with a wide range of technologies across the full stack.
            Here's a breakdown of my technical and professional skills.
          </Paragraph>
        </FadeInWhenVisible>

        <Row gutter={[24, 24]}>
          {skillCategories.map((category, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <FadeInWhenVisible delay={index * 0.1}>
                <Card 
                  bordered={false} 
                  className="h-full shadow-md hover:shadow-lg transition-shadow"
                  actions={[]}
                >
                  <div className="flex items-center mb-6">
                    <div 
                      className="flex items-center justify-center w-10 h-10 rounded-full mr-3"
                      style={{ backgroundColor: category.color + '20', color: category.color }}
                    >
                      {category.icon}
                    </div>
                    <Meta title={category.name} className="mb-0" />
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
                          <span>{skill.percentage}%</span>
                        </div>
                        <Progress 
                          percent={skill.percentage} 
                          strokeColor={category.color}
                          showInfo={false}
                          size="small"
                        />
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeInWhenVisible>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Skills;
