
import React from 'react';
import { Typography, Form, Input, Button, message } from 'antd';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  SendOutlined
} from '@ant-design/icons';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import { motion } from 'framer-motion';

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
    icon: <MailOutlined className="text-2xl text-blue-500" />,
    title: 'Email',
    value: 'john.doe@example.com',
    link: 'mailto:john.doe@example.com',
  },
  {
    icon: <PhoneOutlined className="text-2xl text-blue-500" />,
    title: 'Phone',
    value: '+1 (123) 456-7890',
    link: 'tel:+11234567890',
  },
  {
    icon: <EnvironmentOutlined className="text-2xl text-blue-500" />,
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
    <section id="contact" className="section-padding relative" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <FadeInWhenVisible>
          <Title level={2} className="text-center mb-6 text-3xl font-bold text-white">
            <span className="inline-block relative after:content-[''] after:absolute after:w-1/3 after:h-1 after:bg-blue-500 after:-bottom-4 after:left-1/2 after:transform after:-translate-x-1/2">
              Get In Touch
            </span>
          </Title>
          <Paragraph className="text-center mb-16 text-lg max-w-2xl mx-auto text-gray-400">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </Paragraph>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <FadeInWhenVisible delay={0.2}>
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <div className="mr-5 p-3 bg-gradient-to-br from-blue-900/30 to-blue-700/20 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-white">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-gray-400 hover:text-blue-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                <div className="mt-12">
                  <h4 className="text-lg font-medium mb-5 text-white">Find me on</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 text-gray-400 hover:text-blue-400 border border-gray-700 hover:border-blue-500 transition-colors"
                        aria-label={social.name}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
          
          <div className="lg:col-span-3">
            <FadeInWhenVisible delay={0.4}>
              <motion.div 
                className="p-8 rounded-xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-xl"
                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" }}
              >
                <Form
                  form={form}
                  name="contact"
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark={false}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Form.Item
                      name="name"
                      label={<span className="text-gray-300">Name</span>}
                      rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                      <Input 
                        placeholder="Your name" 
                        size="large" 
                        className="bg-gray-800/50 border-gray-700 text-gray-300 placeholder:text-gray-500" 
                      />
                    </Form.Item>
                    
                    <Form.Item
                      name="email"
                      label={<span className="text-gray-300">Email</span>}
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' },
                      ]}
                    >
                      <Input 
                        placeholder="Your email" 
                        size="large" 
                        className="bg-gray-800/50 border-gray-700 text-gray-300 placeholder:text-gray-500" 
                      />
                    </Form.Item>
                  </div>
                  
                  <Form.Item
                    name="subject"
                    label={<span className="text-gray-300">Subject</span>}
                    rules={[{ required: true, message: 'Please enter a subject' }]}
                    className="mb-6"
                  >
                    <Input 
                      placeholder="Subject of your message" 
                      size="large" 
                      className="bg-gray-800/50 border-gray-700 text-gray-300 placeholder:text-gray-500" 
                    />
                  </Form.Item>
                  
                  <Form.Item
                    name="message"
                    label={<span className="text-gray-300">Message</span>}
                    rules={[{ required: true, message: 'Please enter your message' }]}
                    className="mb-6"
                  >
                    <TextArea
                      placeholder="Write your message here..."
                      rows={5}
                      size="large"
                      className="bg-gray-800/50 border-gray-700 text-gray-300 placeholder:text-gray-500"
                    />
                  </Form.Item>
                  
                  <Form.Item className="mb-0">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button 
                        type="primary" 
                        htmlType="submit" 
                        size="large" 
                        icon={<SendOutlined />}
                        className="bg-gradient-to-r from-blue-600 to-blue-800 border-0 w-full md:w-auto px-8"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </Form.Item>
                </Form>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
