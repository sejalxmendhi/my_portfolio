import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Cloud Arcade Game',
      description: 'An interactive cloud-based arcade gaming platform featuring multiple classic games with smooth gameplay and modern graphics.',
      image: 'https://images.unsplash.com/photo-1656662961786-b04873ceb4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNhZGUlMjBnYW1lJTIwY29uc29sZXxlbnwxfHx8fDE3Njk1OTk2MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React', 'Typescript', 'Node.js'],
      category: 'Gaming',
    },
    {
      title: 'Basic Calculator',
      description: 'A sleek and functional calculator application with a modern UI, supporting basic arithmetic operations.',
      image: 'https://images.unsplash.com/photo-1709536777126-238639005f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdG9yJTIwZGV2aWNlfGVufDF8fHx8MTc2OTU5OTYzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['HTML', 'JavaScript', 'Tailwind CSS'],
      category: 'Utility',
    },
    {
      title: 'Wonderlust',
      description: 'A comprehensive hotel booking platform with search, filters, booking management, and user reviews. Features an elegant design and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2OTU4MjYxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['HTML/CSS', 'Node.js', 'MongoDB', 'Javascript'],
      category: 'E-Commerce',
    },
    {
      title: 'Audio Player',
      description: 'A feature-rich audio player with playlist management, equalizer controls, and a beautiful visualizer. Supports multiple audio formats.',
      image: 'https://images.unsplash.com/photo-1687166440943-cbd8f4f406f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMG11c2ljJTIwcGxheWVyfGVufDF8fHx8MTc2OTU5NzM2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React', 'Web Audio API', 'JavaScript'],
      category: 'Media',
    },
    {
      title: 'Spotify Clone',
      description: 'A pixel-perfect clone of Spotify with music streaming, playlist creation, search functionality, and responsive design.',
      image: 'https://images.unsplash.com/photo-1703115015343-81b498a8c080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG90aWZ5JTIwbXVzaWMlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5NTk5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['HTML', 'CSS' ],
      category: 'Media',
    },
    {
      title: 'Amazon Clone',
      description: 'A fully functional e-commerce platform mimicking Amazon with product listings, cart management, checkout process, and order tracking.',
      image: 'https://images.unsplash.com/photo-1591270551371-3401a1a9382f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWF6b24lMjBzaG9wcGluZyUyMHBhY2thZ2VzfGVufDF8fHx8MTc2OTU5OTYzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['HTML', 'CSS'],
      category: 'E-Commerce',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-4"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700"
            >
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-white text-gray-900 rounded-lg flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center justify-center"
                    >
                      <Github className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in collaborating?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
