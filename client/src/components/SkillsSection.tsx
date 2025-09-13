import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Brain, Database, Palette } from 'lucide-react';
import { FadeInOnScroll } from '@/components/FadeInOnScroll';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: 'Python', level: 92 },
        { name: 'C++', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      title: 'AI/ML & Advanced Technologies',
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: 'Large Language Models (LLMs)', level: 90 },
        { name: 'Generative AI', level: 88 },
        { name: 'Machine Learning', level: 87 },
        { name: 'Deep Learning', level: 85 },
        { name: 'Natural Language Processing', level: 83 },
        { name: 'RAG (Retrieval Augmented Generation)', level: 85 },
      ],
    },
    {
      title: 'Development & Frameworks',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'React.js', level: 88 },
        { name: 'Node.js', level: 85 },
        { name: 'Django', level: 82 },
        { name: 'FastAPI', level: 80 },
        { name: 'MongoDB', level: 78 },
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Power BI', level: 80 },
        { name: 'Figma', level: 75 },
        { name: 'TensorFlow', level: 80 },
        { name: 'WebSocket', level: 85 },
        { name: 'Pytest', level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInOnScroll delay={100}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical skills and expertise in modern technologies
            </p>
          </div>
        </FadeInOnScroll>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <FadeInOnScroll key={category.title} delay={categoryIndex * 150 + 200}>
              <Card className="p-6 hover-elevate" data-testid={`skill-category-${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <Badge variant="secondary">{skill.level}%</Badge>
                      </div>
                      
                      {/* Simple Progress Bar with CSS Animation */}
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full animate-progress"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 0.1 + 0.3}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Skills Summary */}
        <FadeInOnScroll delay={800}>
          <div className="text-center mt-12">
            <div className="inline-flex flex-wrap gap-3 justify-center">
              <Badge variant="outline" className="text-sm">
                4+ Years Programming Experience
              </Badge>
              <Badge variant="outline" className="text-sm">
                AI/ML Specialist
              </Badge>
              <Badge variant="outline" className="text-sm">
                Full-Stack Development
              </Badge>
              <Badge variant="outline" className="text-sm">
                Open Source Contributor
              </Badge>
            </div>
          </div>
        </FadeInOnScroll>
      </div>

    </section>
  );
}