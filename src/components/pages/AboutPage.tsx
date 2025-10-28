import { motion } from 'motion/react';
import { Download, Code, Database, Wrench } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const techStack = {
  Frontend: [
    'React.js',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Redux',
    'Vue.js',
  ],
  Backend: [
    'Node.js',
    'Express',
    'Python',
    'Django',
    'FastAPI',
    'GraphQL',
  ],
  'Tools & Databases': [
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Docker',
    'Git',
    'AWS',
  ],
};

const icons = {
  Frontend: Code,
  Backend: Database,
  'Tools & Databases': Wrench,
};

export function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="mb-12">About Me</h1>
          
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mx-auto lg:mx-0"
            >
              <div className="relative group">
                {/* Decorative border */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                
                {/* Image container */}
                <div className="relative aspect-square w-full max-w-[300px] rounded-2xl overflow-hidden border-2 border-border bg-card">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTQ5MzEyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Porter Oluwadamilola - Full-Stack Developer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <div>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Hey there! I'm Porter Oluwadamilola, a passionate Full-Stack Developer and Software Engineer 
                  dedicated to creating impactful digital experiences. My journey in tech started with 
                  a curiosity about how things work under the hood, and it's evolved into a deep love 
                  for building elegant solutions to complex problems.
                </p>
                
                <p>
                  I specialize in modern web technologies, with a strong focus on creating scalable, 
                  performant applications. Whether it's architecting robust backends, crafting intuitive 
                  user interfaces, or integrating AI capabilities, I approach each project with attention 
                  to detail and a commitment to quality.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring the latest tech trends, contributing to 
                  open-source projects, or mentoring fellow developers. I believe in continuous learning 
                  and sharing knowledge with the community.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8"
              >
                <Button size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8">My Tech Stack</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, skills], index) => {
              const Icon = icons[category as keyof typeof icons];
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3>{category}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-accent rounded-full text-accent-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Years Coding', value: '4+' },
            { label: 'Projects Completed', value: '25+' },
            { label: 'Technologies', value: '15+' },
            { label: 'Coffee Consumed', value: '∞' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-xl bg-card border border-border"
            >
              <div className="text-3xl mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
