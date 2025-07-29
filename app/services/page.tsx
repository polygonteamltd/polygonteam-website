import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AnimatedElement } from '../components/AnimatedElement'
import { 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Smartphone,
  Database,
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud infrastructure and migration services to optimize your business operations.',
      features: [
        'Cloud migration and strategy',
        'Infrastructure as a Service (IaaS)',
        'Platform as a Service (PaaS)',
        'Multi-cloud management',
        'Cost optimization',
        'Performance monitoring'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and maintain compliance.',
      features: [
        'Security assessments',
        'Threat detection & response',
        'Compliance management',
        'Identity & access management',
        'Data protection',
        'Security training'
      ],
      color: 'bg-red-500'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategies to modernize your business processes.',
      features: [
        'Process automation',
        'Legacy system modernization',
        'Digital strategy consulting',
        'Change management',
        'Technology roadmap',
        'Performance optimization'
      ],
      color: 'bg-yellow-500'
    },
    {
      icon: Users,
      title: 'Technology Consulting',
      description: 'Expert technology consulting to align IT strategy with your business objectives.',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Architecture design',
        'Vendor selection',
        'Project management',
        'Best practices guidance'
      ],
      color: 'bg-green-500'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence to drive data-driven decision making.',
      features: [
        'Data strategy & governance',
        'Business intelligence',
        'Predictive analytics',
        'Data visualization',
        'Machine learning',
        'Real-time analytics'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      features: [
        'Native app development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Maintenance & support',
        'Performance optimization'
      ],
      color: 'bg-indigo-500'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Database design, optimization, and management services for optimal performance.',
      features: [
        'Database design & architecture',
        'Performance optimization',
        'Data migration',
        'Backup & recovery',
        'Security implementation',
        'Monitoring & maintenance'
      ],
      color: 'bg-pink-500'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern web applications and e-commerce solutions with cutting-edge technologies.',
      features: [
        'Custom web applications',
        'E-commerce solutions',
        'Progressive web apps',
        'API development',
        'Performance optimization',
        'SEO optimization'
      ],
      color: 'bg-teal-500'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We begin by understanding your business needs, challenges, and objectives.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive technology strategy aligned with your business goals.'
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Create and implement solutions using best practices and modern technologies.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing to ensure reliability, security, and performance.'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Smooth deployment with minimal disruption to your operations.'
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, monitoring, and continuous improvement.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideUp" className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth 
              and digital transformation journey.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedElement
                key={service.title}
                animation="slideUp"
                delay={index * 100}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                                         <button className="mt-6 flex items-center text-green-600 font-medium hover:text-green-700 transition-colors duration-200">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideUp" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and maximum value for your business.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <AnimatedElement
                key={step.step}
                animation="slideUp"
                delay={index * 100}
                className="card text-center"
              >
                                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <span className="text-2xl font-bold text-green-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="slideUp" className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
                         <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss how our technology solutions can help you achieve your goals 
              and drive sustainable growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                             <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Get Started
              </button>
                             <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </main>
  )
} 