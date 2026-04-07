import { useState, useEffect } from 'react';
import { 
  Globe, 
  Heart, 
  Users, 
  BookOpen, 
  Zap, 
  Cross, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Gift
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Vision', href: '#vision' },
  { name: 'Register', href: '#register' },
  { name: 'Contact', href: '#contact' },
];

const programs = [
  {
    title: "Missions",
    description: "We mobilize the Body of Christ to actively engage in missions to places where darkness has not yet been confronted by the light — through both short-term and long-term mission trips.",
    icon: Globe,
    color: "bg-brand-primary"
  },
  {
    title: "Reboot Leaders’ Conferences",
    subtitle: "Focusing on Weightier Matters",
    description: "These gatherings bring church leaders together to empower them to be intentional about claiming what Christ paid for on the Cross.",
    icon: Users,
    color: "bg-brand-secondary"
  },
  {
    title: "ALL IN Conference",
    subtitle: "Mobilizing the full force – Multiplying Truth",
    description: "A conference designed to raise up believers who carry God’s burdens and multiply His truth in their generation.",
    icon: Zap,
    color: "bg-brand-accent"
  },
  {
    title: "ALL IN Youth Conference",
    subtitle: "From Here to All the nations",
    description: "Tapping the Strength, Maximizing Lives. We aim to raise a 'Daniel breed' of young people — fully sold out to living for what is uppermost in the heart of God.",
    icon: BookOpen,
    color: "bg-brand-primary"
  },
  {
    title: "Community Service",
    subtitle: "God’s Love Meeting Human Needs",
    description: "We demonstrate the love of Christ by bringing bread to the hungry, water to the thirsty, and love to the prisoner and the sick.",
    icon: Heart,
    color: "bg-brand-secondary"
  }
];

const areasOfOperation = [
  "Mission awareness and training",
  "Discipleship",
  "Local and international missions to unreached people groups",
  "Uniting believers for the Great Commission",
  "Resource mobilization and allocation",
  "Community service"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl">G</div>
            <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? 'text-brand-primary' : 'text-white'}`}>GoReach Worldwide</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-brand-secondary ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#donate" 
              className="bg-brand-secondary hover:bg-brand-secondary/90 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-display font-bold text-slate-800"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#donate" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-brand-primary text-white text-center py-4 rounded-xl font-bold text-lg"
              >
                Donate Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2000&auto=format&fit=crop" 
            alt="Christian Cross background" 
            className="w-full h-full object-cover brightness-40"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-secondary font-display font-bold tracking-widest uppercase mb-4">Full Price. Full Force. Full Harvest</h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              Reaching the World <br />
              <span className="text-brand-secondary">For Christ</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
              An interdenominational mission organization dedicated to empowering and refocusing believers on the fulfillment of the Great Commission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#about" className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                Learn Our Mission <ArrowRight size={20} />
              </a>
              <a href="#donate" className="bg-brand-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-secondary/90 transition-all flex items-center justify-center gap-2">
                Support the Harvest <Gift size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="rotate-90 text-white/50" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-secondary font-bold tracking-wider uppercase text-sm">About Us</span>
              <h2 className="text-4xl font-display font-bold mt-2 mb-6 text-slate-900">Dedicated to the Great Commission</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                GoReach Worldwide is an interdenominational mission organization dedicated to empowering and refocusing believers on the fulfillment of the Great Commission. We believe in mobilizing every believer to take their place in God's global plan.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-brand-primary">Our Main Areas of Operation</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {areasOfOperation.map((area, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <div className="mt-1 bg-brand-secondary/10 p-1 rounded-full">
                        <ChevronRight size={14} className="text-brand-secondary" />
                      </div>
                      <span className="text-sm">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop" 
                  alt="African Mission Community" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-primary text-white p-8 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <Cross className="mb-4 text-brand-secondary" size={32} />
                <p className="font-display font-bold text-lg italic">"Until Christ receives the full reward of His sacrifice."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-24 bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/10"
            >
              <div className="w-14 h-14 bg-brand-secondary rounded-2xl flex items-center justify-center mb-6">
                <Globe size={28} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-xl text-white/80 leading-relaxed italic">
                "A global army of believers, carrying the weight of the Cross from every nation to every nation, until Christ receives the full reward of His sacrifice."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/10"
            >
              <div className="w-14 h-14 bg-brand-accent rounded-2xl flex items-center justify-center mb-6">
                <Heart size={28} />
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-xl text-white/80 leading-relaxed">
                "To enlist and equip believers to advance the Gospel faithfully, to live sacrificially and serve God’s purpose in every sphere of influence."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-secondary font-bold tracking-wider uppercase text-sm">What We Do</span>
            <h2 className="text-4xl font-display font-bold mt-2 text-slate-900">Our Programs</h2>
            <div className="w-20 h-1.5 bg-brand-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className={`w-14 h-14 ${program.color} text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <program.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-1">{program.title}</h3>
                {program.subtitle && <p className="text-brand-secondary text-sm font-bold mb-4 uppercase tracking-tighter">{program.subtitle}</p>}
                <p className="text-slate-600 leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000&auto=format&fit=crop" 
                alt="Donation background" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 p-12 md:p-20 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Support the Mission</h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Your contribution helps us reach the unreached, train leaders, and serve communities in need. Together, we can fulfill the Great Commission.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {['$25', '$50', '$100', 'Custom'].map((amount) => (
                  <button 
                    key={amount}
                    className="py-4 px-6 rounded-2xl border border-white/20 hover:bg-white hover:text-slate-900 transition-all font-bold text-lg"
                  >
                    {amount}
                  </button>
                ))}
              </div>
              
              <button className="bg-brand-secondary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-brand-secondary/90 transition-all shadow-2xl shadow-brand-secondary/20">
                Donate via GoReachWorld.org
              </button>
              
              <p className="mt-8 text-white/40 text-sm">
                Secure donation processing powered by GoReach Worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-secondary font-bold tracking-wider uppercase text-sm">Join Us</span>
            <h2 className="text-4xl font-display font-bold mt-2 text-slate-900">Register for a Meeting</h2>
            <p className="text-slate-600 mt-4">Be part of the movement. Sign up for our upcoming conferences and mission trips.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100"
          >
            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for registering! We will contact you soon.');
            }}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all" placeholder="Enter your full name" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all" placeholder="e.g. 0712345678" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all" placeholder="name@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Age Group</label>
                <select required className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all appearance-none">
                  <option value="">Select age group</option>
                  <option value="under-18">Under 18</option>
                  <option value="18-24">18 - 24</option>
                  <option value="25-34">25 - 34</option>
                  <option value="35-44">35 - 44</option>
                  <option value="45-54">45 - 54</option>
                  <option value="55+">55 and above</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Designation</label>
                <select required className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all appearance-none">
                  <option value="">Select designation</option>
                  <option value="pastor">Pastor</option>
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="business">Business Leader</option>
                  <option value="missionary">Missionary</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Location</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all" placeholder="City, Country" />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">Select Meeting / Program</label>
                <select required className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all appearance-none">
                  <option value="">Choose a meeting</option>
                  <option value="missions">Short-term/Long-term Mission Trip</option>
                  <option value="reboot">Reboot Leaders’ Conference</option>
                  <option value="all-in">ALL IN Conference</option>
                  <option value="all-in-youth">ALL IN Youth Conference</option>
                  <option value="community">Community Service Project</option>
                </select>
              </div>

              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full bg-brand-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-secondary/90 transition-all shadow-lg shadow-brand-secondary/20 flex items-center justify-center gap-2">
                  Complete Registration <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8 text-slate-900">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-10">
                Have questions about our missions or want to get involved? We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Our Location</h4>
                    <p className="text-slate-600">Kinga Africa Centre, Matuu</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Us</h4>
                    <p className="text-slate-600">admin@GoReachWorld.org</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Call Us</h4>
                    <p className="text-slate-600">0712693471</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl">G</div>
                <span className="font-display font-bold text-2xl tracking-tight">GoReach Worldwide</span>
              </div>
              <p className="text-white/60 max-w-sm leading-relaxed mb-6">
                Full Price. Full Force. Full Harvest. <br />
                Empowering believers to fulfill the Great Commission through awareness, training, and missions.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-secondary transition-colors cursor-pointer">
                    <Globe size={18} />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/60">
                {navLinks.map(link => (
                  <li key={link.name}><a href={link.href} className="hover:text-brand-secondary transition-colors">{link.name}</a></li>
                ))}
                <li><a href="#donate" className="hover:text-brand-secondary transition-colors">Donate</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-white/60">
                <li className="flex items-center gap-2"><Mail size={16} /> admin@GoReachWorld.org</li>
                <li className="flex items-center gap-2"><Phone size={16} /> 0712693471</li>
                <li className="flex items-center gap-2"><MapPin size={16} /> Matuu, Kenya</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
            <p>© 2026 GoReach Worldwide. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
