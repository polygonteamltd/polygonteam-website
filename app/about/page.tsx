import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Users, Award, Clock, Target, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  const timeline = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Polygon was established with a vision to transform businesses through innovative technology solutions.'
    },
    {
      year: '2016',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and successfully delivered a comprehensive digital transformation project.'
    },
    {
      year: '2018',
      title: 'Cloud Services Launch',
      description: 'Expanded our service portfolio to include cloud migration and infrastructure optimization services.'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Opened offices in multiple countries and established partnerships with leading technology providers.'
    },
    {
      year: '2022',
      title: 'AI & Analytics Division',
      description: 'Launched our AI and data analytics division to help clients leverage the power of machine learning.'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Received multiple industry awards and recognition for innovation and excellence in technology services.'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/team/sarah.jpg',
      bio: 'Visionary leader with 15+ years of experience in technology and business transformation.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '/team/michael.jpg',
      bio: 'Technology expert specializing in cloud architecture and digital innovation strategies.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Operations',
      image: '/team/emily.jpg',
      bio: 'Operations specialist focused on delivering exceptional client experiences and project excellence.'
    },
    {
      name: 'David Kim',
      role: 'Head of Security',
      image: '/team/david.jpg',
      bio: 'Cybersecurity expert with deep knowledge in threat prevention and compliance frameworks.'
    }
  ]

  const values = [
         {
       icon: Target,
       title: 'Innovation',
       description: 'We constantly push the boundaries of what is possible with technology.'
     },
    {
      icon: CheckCircle,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Polygon</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a team of passionate technologists dedicated to helping businesses 
              thrive in the digital age through innovative solutions and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower organizations with cutting-edge technology solutions that drive growth, 
                enhance efficiency, and create sustainable competitive advantages in an ever-evolving digital landscape.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that technology should be an enabler, not a barrier. Our approach focuses 
                on understanding your unique challenges and delivering tailored solutions that align 
                with your business objectives.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Our Mission</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our relationships with clients, 
              partners, and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <value.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A decade of innovation, growth, and commitment to excellence in technology solutions.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card">
                      <div className="text-2xl font-bold text-green-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                                     <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced leadership team brings together decades of expertise in technology, 
              business strategy, and digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 