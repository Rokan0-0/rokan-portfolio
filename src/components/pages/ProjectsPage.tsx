import { motion } from 'motion/react';
import { useState } from 'react';
import { ProjectCard } from '../ProjectCard';
import { Button } from '../ui/button';

const allProjects = [
  {
    title: 'CodeReplay VS Code Extension',
    description: 'AI-powered code review and playback extension for Visual Studio Code.',
    image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYxNTUwOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['TypeScript', 'VS Code API', 'AI'],
    category: 'Developer Tools',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Fintech Escrow App',
    description: 'Secure escrow platform with real-time transaction monitoring and multi-party verification.',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNTU0NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'Full-Stack',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'ATS Resume Optimizer',
    description: 'ML-powered tool that analyzes and optimizes resumes for Applicant Tracking Systems.',
    image: 'https://images.unsplash.com/photo-1738003946582-aabeabf5e009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsfGVufDF8fHx8MTc2MTQ5Mjg1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'NLP', 'React', 'OpenAI'],
    category: 'AI',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Real-Time Collaboration Platform',
    description: 'WebSocket-based platform for real-time document collaboration with version control.',
    image: 'https://images.unsplash.com/photo-1593442257276-1895e27c8ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxNTQxOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'WebSocket', 'Redis', 'MongoDB'],
    category: 'Full-Stack',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Smart Code Snippet Manager',
    description: 'Chrome extension for developers to save, organize, and share code snippets with syntax highlighting.',
    image: 'https://images.unsplash.com/photo-1760536928911-40831dacdbc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB0b29scyUyMGxhcHRvcHxlbnwxfHx8fDE3NjE1MTg2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['JavaScript', 'Chrome API', 'Firebase'],
    category: 'Developer Tools',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'SaaS platform that generates blog posts, social media content, and marketing copy using GPT-4.',
    image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNTMwMzMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'FastAPI', 'OpenAI', 'Stripe'],
    category: 'AI',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const categories = ['All', 'Full-Stack', 'AI', 'Developer Tools'];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="mb-4">Projects</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore my portfolio of full-stack applications, AI integrations, and developer tools.
            Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
