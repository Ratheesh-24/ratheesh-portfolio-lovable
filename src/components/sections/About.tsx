
import React from 'react';
import { Typography, Row, Col, Image } from 'antd';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="section-container">
        <FadeInWhenVisible>
          <Title level={2} className="text-center mb-12 text-3xl font-bold">
            About Me
          </Title>
        </FadeInWhenVisible>
        
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <FadeInWhenVisible delay={0.2}>
              <div className="flex justify-center">
                <Image
                  src="https://placehold.co/400x500"
                  alt="Profile"
                  className="rounded-lg shadow-lg"
                  width={300}
                  height={375}
                  preview={false}
                />
              </div>
            </FadeInWhenVisible>
          </Col>
          
          <Col xs={24} md={12}>
            <FadeInWhenVisible delay={0.4}>
              <Title level={3} className="mb-4">
                Who am I?
              </Title>
              
              <Paragraph className="text-lg mb-4">
                I'm a passionate web developer with over 5 years of experience creating
                modern and responsive websites. I specialize in frontend development
                with a strong background in UI/UX design.
              </Paragraph>
              
              <Paragraph className="text-lg mb-4">
                My journey in web development started when I was in college, and since
                then, I've worked with various clients across different industries to
                bring their ideas to life.
              </Paragraph>
              
              <Paragraph className="text-lg mb-4">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying outdoor activities.
              </Paragraph>
              
              <Row gutter={[16, 16]} className="mt-6">
                <Col span={12}>
                  <div className="font-medium">Name:</div>
                  <div>John Doe</div>
                </Col>
                <Col span={12}>
                  <div className="font-medium">Email:</div>
                  <div>john.doe@example.com</div>
                </Col>
                <Col span={12}>
                  <div className="font-medium">From:</div>
                  <div>New York, USA</div>
                </Col>
                <Col span={12}>
                  <div className="font-medium">Experience:</div>
                  <div>5+ Years</div>
                </Col>
              </Row>
            </FadeInWhenVisible>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
