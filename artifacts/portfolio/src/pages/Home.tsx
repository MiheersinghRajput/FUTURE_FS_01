import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X, Terminal, Code2, Database, Layout, Server, Search } from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground dark selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-background/80 backdrop-blur-md border-border py-4 shadow-lg' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tighter text-primary">
            MB<span className="text-foreground">.</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-md hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">
              Hire Me
            </a>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex items-center justify-center">
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="min-h-[100dvh] flex items-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, var(--primary) 0%, transparent 8%)', backgroundSize: '60px 60px' }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary/50 border border-border mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Available for Freelance</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.1]">
              Hi, I'm <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                Miheersingh
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8">
              Full Stack Web Developer / Freelancer
            </h2>
            
            <p className="text-xl text-foreground/80 max-w-2xl mb-12 leading-relaxed border-l-4 border-primary pl-6">
              "Building digital experiences that make an impact."
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] flex items-center gap-2">
                View My Work
              </a>
              <div className="flex items-center gap-4 px-4">
                <a href="https://github.com/MiheersinghRajput" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/miheersingh-baghele-64520932b" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-secondary/20 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 relative inline-block">
                About Me
                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary"></div>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am a passionate and dedicated <strong className="text-foreground">Computer Engineering student</strong> currently pursuing a Diploma (2nd Year). 
                </p>
                <p>
                  Experienced in freelance client communication, digital marketing campaigns, and database management through my startup initiative, <strong className="text-primary">The Web Dev Studio</strong>. I have also actively participated in IoT innovation projects and hackathons.
                </p>
                <p>
                  Continuously learning new technologies and seeking internship opportunities to apply technical skills in real-world software development projects.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <div className="relative bg-card border border-border p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                  <Terminal className="text-primary" size={32} />
                  <div>
                    <h3 className="text-xl font-bold">The Web Dev Studio</h3>
                    <p className="text-sm text-muted-foreground">Startup Initiative</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Freelance Client Communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Digital Marketing Campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span>Database Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">Technical Arsenal</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Tools and technologies I use to build robust digital solutions.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Frontend Dev", desc: "HTML, CSS, JS", icon: <Layout className="mb-4 text-primary" size={40} /> },
              { name: "MySQL", desc: "Database Handling", icon: <Database className="mb-4 text-primary" size={40} /> },
              { name: "C Programming", desc: "Core Logic", icon: <Code2 className="mb-4 text-primary" size={40} /> },
              { name: "Java (OOP)", desc: "Architecture", icon: <Server className="mb-4 text-primary" size={40} /> },
              { name: "Client Comm", desc: "Freelance", icon: <Mail className="mb-4 text-primary" size={40} /> },
              { name: "Outreach", desc: "Cold Calling", icon: <Phone className="mb-4 text-primary" size={40} /> },
              { name: "Digital Mktg", desc: "Campaigns", icon: <Search className="mb-4 text-primary" size={40} /> },
              { name: "MS Excel", desc: "Data Analysis", icon: <Layout className="mb-4 text-primary" size={40} /> },
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary/30 border border-border p-6 rounded-xl hover:bg-secondary hover:border-primary/50 transition-all group flex flex-col items-center text-center"
              >
                <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg">{skill.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-secondary/10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">Featured Work</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="p-8 h-full flex flex-col justify-between relative z-10 bg-gradient-to-b from-transparent to-background/90">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      <Layout size={32} />
                    </div>
                    <a href="#" className="p-2 bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground rounded-full transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Freelance Web Development Website</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Developed a personal freelance website to provide web development services and showcase portfolio projects. Showcases design sensibility, client-facing professionalism, and the ability to build end-to-end web products.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["HTML", "CSS", "JavaScript", "UI/UX"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-xs font-mono rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="p-8 h-full flex flex-col justify-between relative z-10 bg-gradient-to-b from-transparent to-background/90">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      <Terminal size={32} />
                    </div>
                    <a href="#" className="p-2 bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground rounded-full transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">IoT Traffic Rule Detection System</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Developed an IoT-based system using sensors to detect traffic rule violations and improve road safety. Built as part of a hackathon initiative combining hardware, sensor data, and software logic.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["C/C++", "Sensors", "Hardware", "Logic"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-secondary text-xs font-mono rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            <div className="md:w-2/5 bg-secondary/50 p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-black mb-4">Let's Connect</h2>
                <p className="text-muted-foreground mb-8">
                  Looking for a dedicated developer to bring your ideas to life? Let's talk about your next project.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-background rounded-full text-primary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:rajputmiheersingh0212@gmail.com" className="font-medium hover:text-primary transition-colors break-all">
                        rajputmiheersingh0212@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-background rounded-full text-primary">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+918010599060" className="font-medium hover:text-primary transition-colors">
                        +91 80105 99060
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex gap-4">
                <a href="https://github.com/MiheersinghRajput" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-full hover:border-primary hover:text-primary transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/miheersingh-baghele-64520932b" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-full hover:border-primary hover:text-primary transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="md:w-3/5 p-10 bg-background">
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent successfully! (UI Feedback only)");
              }}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input type="text" id="name" required className="w-full bg-secondary border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Your name" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input type="email" id="email" required className="w-full bg-secondary border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="your@email.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" required rows={4} className="w-full bg-secondary border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none" placeholder="How can I help you?"></textarea>
                </div>
                
                <button type="submit" className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-all">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter text-primary">
            MB<span className="text-foreground">.</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Miheersingh Baghele. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/MiheersinghRajput" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/miheersingh-baghele-64520932b" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
