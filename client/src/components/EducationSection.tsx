import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  grade: string;
  highlights: string[];
}

export default function EducationSection() {
  const educations: Education[] = [
    {
      institution: 'BML Munjal University',
      degree: 'Bachelor of Technology - Computer Science Engineering',
      duration: '2021 - 2025',
      location: 'Gurugram, India',
      grade: 'Aggregate: 8.09 CGPA',
      highlights: [
        'Chess Captain of the University',
        'Specialization in AI and Machine Learning',
        'Active participation in coding competitions',
        'Leadership roles in technical societies',
      ],
    },
    {
      institution: 'Sawan Senior Secondary School',
      degree: 'Class XII (Senior Secondary)',
      duration: '2020 - 2021',
      location: 'India',
      grade: '95.6%',
      highlights: [
        'Science Stream with Mathematics',
        'Consistent academic excellence',
        'Strong foundation in Mathematics and Physics',
      ],
    },
    {
      institution: 'The Sirsa School',
      degree: 'Class X (Secondary)',
      duration: '2018 - 2019',
      location: 'India',
      grade: '96.8%',
      highlights: [
        'All-round academic performance',
        'Mathematics and Science excellence',
        'Foundation for future technical studies',
      ],
    },
  ];

  return (
    <section id="education" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational background
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {educations.map((edu, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`education-${edu.institution.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Institution Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{edu.institution}</h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2">
                      <Badge variant="default" className="w-fit">{edu.grade}</Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Academic Focus */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Academic Focus Areas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Data Structures', 'Operating Systems', 'Database Management', 
              'Computer Networks', 'Algorithms', 'Software Engineering',
              'Machine Learning', 'Artificial Intelligence', 'Web Technologies'
            ].map((subject) => (
              <Badge key={subject} variant="secondary" className="text-sm py-1 px-3">
                {subject}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}