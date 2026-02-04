import { motion } from 'motion/react';
import { MapPin, Mail, Code2, Database, Palette, Zap } from 'lucide-react';

export function About() {
  const skills = [
    { icon: Code2, name: 'Frontend Development', description: 'React, JavaScript, HTML/CSS, Tailwind' },
    { icon: Database, name: 'Backend Development', description: 'Node.js, APIs, Databases' },
    { icon: Palette, name: 'UI/UX Design', description: 'Figma, Responsive Design, User Experience' },
    { icon: Zap, name: 'Performance', description: 'Optimization, Best Practices' },
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
            About Me
          </h1>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Hello! I'm Sejal Mendhi
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate web developer based in Nagpur, India, with a love for creating
              beautiful and functional web applications. I enjoy turning complex problems into
              simple, elegant solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              My journey in web development has led me to work on various projects ranging from
              gaming applications to e-commerce platforms. I'm always eager to learn new
              technologies and improve my craft.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              When I'm not coding, I enjoy exploring new design trends, experimenting with creative layouts, 
              and designing intuitive, visually appealing user interfaces that enhance user experience.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Nagpur, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <a
                  href="mailto:sejalmendhi@gmail.com"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  sejalmendhi@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="w-64 h-64 bg-white/10 rounded-full"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Code2 className="w-32 h-32 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
