import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building2 } from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  achievements: string[];
  technologies: string[];
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      role: 'AI Engineer',
      company: 'Rupee112',
      location: 'Gurugram',
      duration: 'Jan 2025 – Present',
      type: 'Full-time',
      achievements: [
        'Built AI-powered voice assistant for automating loan workflows, reducing manual effort by 60%.',
        'Integrated Deepgram (STT) + ElevenLabs (TTS) for real-time bidirectional audio, achieving sub-500ms latency.',
        'Designed dialogue flow using RAG, RLHF, and LLMs, improving query resolution by 38%.',
        'Developed FastAPI + WebSocket backend handling 100+ concurrent sessions.',
        'Built automation testing suite with Pytest & Appium, cutting QA cycles by 70%.',
      ],
      technologies: ['Python', 'FastAPI', 'WebSocket', 'Deepgram', 'ElevenLabs', 'RAG', 'RLHF', 'LLMs', 'Pytest', 'Appium'],
    },
    {
      role: 'SDE Intern',
      company: 'InnoVyt',
      location: 'Noida',
      duration: 'Jun 2024 – Jul 2024',
      type: 'Internship',
      achievements: [
        'Boosted email classification accuracy from 86.4% → 96.3% using deep learning neural nets.',
        'Applied TensorFlow + NLP for optimization, achieving 10% performance gain.',
        'Developed a framework for HRs to review different types of resumes comprehensively.',
        'Created Python-based solution for automated resume processing and interactive dashboard.',
      ],
      technologies: ['Python', 'TensorFlow', 'NLP', 'Deep Learning', 'AI/ML', 'Data Analytics'],
    },
    {
      role: 'AI/ML Intern',
      company: 'Suyati Technologies',
      location: 'Kochi',
      duration: 'Jun 2023 – Jul 2023',
      type: 'Internship',
      achievements: [
        'Developed a framework for HRs to review different types of resumes comprehensively with the help of Python, prompt engineering, SQL, and Power BI.',
        'Python-based solution that automates the extraction of resume attachments from an HR\'s email account into a DB and presents it in the form of an interactive dashboard.',
        'Reduced the shortlisting time of candidates by 37%.',
      ],
      technologies: ['Python', 'AI/ML', 'Prompt Engineering', 'SQL', 'Power BI', 'Data Analytics'],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey in AI, machine learning, and software development
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`experience-${exp.company.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-lg text-muted-foreground font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Current Status */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Currently working as AI Engineer at Rupee112</span>
          </div>
        </div>
      </div>
    </section>
  );
}