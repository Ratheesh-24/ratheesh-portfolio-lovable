
import React from 'react';
import { Typography, Row, Col, Form, Input, Button, Card, message } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined
} from '@ant-design/icons';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <MailOutlined className="text-2xl text-primary" />,
    title: 'Email',
    value: 'john.doe@example.com',
    link: 'mailto:john.doe@example.com',
  },
  {
    icon: <PhoneOutlined className="text-2xl text-primary" />,
    title: 'Phone',
    value: '+1 (123) 456-7890',
    link: 'tel:+11234567890',
  },
  {
    icon: <EnvironmentOutlined className="text-2xl text-primary" />,
    title: 'Location',
    value: 'New York, USA',
  },
];

const socialLinks = [
  {
    icon: <GithubOutlined />,
    link: 'https://github.com',
    name: 'GitHub',
  },
  {
    icon: <LinkedinOutlined />,
    link: 'https://linkedin.com',
    name: 'LinkedIn',
  },
  {
    icon: <TwitterOutlined />,
    link: 'https://twitter.com',
    name: 'Twitter',
  },
];

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    message.success('Message sent successfully!');
    form.resetFields();
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <FadeInWhenVisible>
          <Title level={2} className="text-center mb-6 text-3xl font-bold">
            Get In Touch
          </Title>
          <Paragraph className="text-center mb-12 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me
            using the contact form or through my social media profiles.
          </Paragraph>
        </FadeInWhenVisible>

        <Row gutter={[32, 32]}>
          <Col xs={24} md={10}>
            <FadeInWhenVisible delay={0.2}>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} bordered={false} className="shadow-sm">
                    <div className="flex items-start">
                      <div className="mr-4">{item.icon}</div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                        {item.link ? (
                          <a href={item.link} className="text-foreground hover:text-primary">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-3">Find me on</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </Col>
          
          <Col xs={24} md={14}>
            <FadeInWhenVisible delay={0.4}>
              <Card bordered={false} className="shadow-md">
                <Form
                  form={form}
                  name="contact"
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark={false}
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                      >
                        <Input placeholder="Your name" size="large" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                          { required: true, message: 'Please enter your email' },
                          { type: 'email', message: 'Please enter a valid email' },
                        ]}
                      >
                        <Input placeholder="Your email" size="large" />
                      </Form.Item>
                    </Col>
                  </Row>
                  
                  <Form.Item
                    name="subject"
                    label="Subject"
                    rules={[{ required: true, message: 'Please enter a subject' }]}
                  >
                    <Input placeholder="Subject of your message" size="large" />
                  </Form.Item>
                  
                  <Form.Item
                    name="message"
                    label="Message"
                    rules={[{ required: true, message: 'Please enter your message' }]}
                  >
                    <TextArea
                      placeholder="Write your message here..."
                      rows={5}
                      size="large"
                    />
                  </Form.Item>
                  
                  <Form.Item>
                    <Button type="primary" htmlType="submit" size="large">
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </FadeInWhenVisible>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
