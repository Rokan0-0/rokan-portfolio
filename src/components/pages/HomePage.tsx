import { motion } from 'motion/react';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ProjectCard } from '../ProjectCard';

const featuredProjects = [
  {
    title: 'CodeReplay VS Code Extension',
    description: 'AI-powered code review and playback extension for Visual Studio Code.',
    image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYxNTUwOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['TypeScript', 'VS Code API', 'AI'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Fintech Escrow App',
    description: 'Secure escrow platform with real-time transaction monitoring and multi-party verification.',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNTU0NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'ATS Resume Optimizer',
    description: 'ML-powered tool that analyzes and optimizes resumes for Applicant Tracking Systems.',
    image: 'https://images.unsplash.com/photo-1738003946582-aabeabf5e009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsfGVufDF8fHx8MTc2MTQ5Mjg1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'NLP', 'React', 'OpenAI'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 lg:py-20 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.05),transparent_50%)]" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-border/50 mb-8 mt-16"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-muted-foreground">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6"
            >
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2">
                Porter Oluwadamilola
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-muted-foreground">
                Full-Stack Developer & Software Engineer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            >
              I build innovative web applications that solve real-world problems.
              Passionate about clean code, intuitive UX, and cutting-edge technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link to="/projects">
                <Button size="lg" className="group gap-2 text-lg px-8 py-6">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6">
                  <Code2 className="w-5 h-5" />
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              A selection of my recent work showcasing full-stack development, AI integration, and developer tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/projects">
              <Button variant="outline" size="lg" className="gap-2">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
