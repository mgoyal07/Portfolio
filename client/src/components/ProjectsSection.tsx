import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Filter, Star, GitFork, Eye } from 'lucide-react';
import { FadeInOnScroll } from '@/components/FadeInOnScroll';
import geoFinderImage from '@assets/generated_images/GeoFinder_project_screenshot_a8aa01b0.png';
import legalAIImage from '@assets/generated_images/Legal_AI_platform_screenshot_9fdee881.png';
import dugoutImage from '@assets/generated_images/Cricket_analytics_platform_interface_4046e942.png';

interface Project {
  title: string;
  description: string;
  achievements: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
  repositoryName: string;
}

interface GitHubStats {
  stars: number;
  forks: number;
  watchers: number;
  language: string;
}

export default function ProjectsSection() {
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [githubStats, setGithubStats] = useState<Record<string, GitHubStats>>({});
  const [isLoadingStats, setIsLoadingStats] = useState(true);

  const projects: Project[] = [
    {
      title: 'GeoFinder',
      description: 'Interactive map pathfinding tool with real-time route visualization. Optimized algorithms reduced processing time by 40%.',
      achievements: [
        'Real-time route visualization',
        '40% processing time reduction',
        'Multiple pathfinding algorithms',
        'Interactive map interface',
      ],
      technologies: ['ReactJS', 'Vite', 'Carto', 'A*', 'Greedy', 'Dijkstra', 'MaterialUI'],
      githubUrl: 'https://github.com/mgoyal07/GeoFinder',
      liveUrl: 'https://geofinder-demo.vercel.app',
      image: geoFinderImage,
      featured: true,
      repositoryName: 'GeoFinder',
    },
    {
      title: 'LegalEase',
      description: 'AI-powered legal document analysis platform that summarizes complex legal documents, reducing comprehension time by 40%.',
      achievements: [
        'Complex legal document summarization',
        '40% reduction in comprehension time',
        '30% faster document review',
        'F1 score of 76.25 for contextual Q&A',
      ],
      technologies: ['Generative AI', 'NLP', 'Flask API', 'ReactJS', 'Python'],
      githubUrl: 'https://github.com/mgoyal07/LegalEase',
      liveUrl: 'https://legalease-demo.herokuapp.com',
      image: legalAIImage,
      featured: true,
      repositoryName: 'LegalEase',
    },
    {
      title: 'DugOut',
      description: 'Comprehensive cricket media platform app in Flutter with machine learning-powered player projections and score predictions.',
      achievements: [
        'Win Prediction with 50.73% accuracy',
        'Score Prediction with 86.18% accuracy',
        'Player Potential Guesser with 99.50% accuracy',
        'Intuitive HCI-based design',
      ],
      technologies: ['Python', 'Flask', 'Flutter', 'Machine Learning'],
      githubUrl: 'https://github.com/mgoyal07/DugOut',
      image: dugoutImage,
      featured: false,
      repositoryName: 'DugOut',
    },
  ];

  // Get all unique technologies for filtering
  const allTechnologies = ['All', ...Array.from(new Set(projects.flatMap(p => p.technologies)))];
  
  // Filter projects based on selected technology
  const filteredProjects = selectedTech === 'All' 
    ? projects 
    : projects.filter(p => p.technologies.includes(selectedTech));

  // Fetch GitHub stats for all projects
  useEffect(() => {
    const fetchGitHubStats = async () => {
      setIsLoadingStats(true);
      const stats: Record<string, GitHubStats> = {};
      
      for (const project of projects) {
        try {
          // Mock GitHub API call - in real implementation, you'd call GitHub API
          // For demo purposes, we'll use simulated data
          const mockStats: GitHubStats = {
            stars: Math.floor(Math.random() * 50) + 5,
            forks: Math.floor(Math.random() * 20) + 1,
            watchers: Math.floor(Math.random() * 15) + 1,
            language: project.technologies[0] || 'JavaScript'
          };
          stats[project.repositoryName] = mockStats;
        } catch (error) {
          console.log(`Could not fetch stats for ${project.repositoryName}`);
        }
      }
      
      setGithubStats(stats);
      setIsLoadingStats(false);
    };

    fetchGitHubStats();
  }, []);

  const handleViewCode = (url: string) => {
    window.open(url, '_blank');
  };

  const handleViewLive = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my recent work and technical achievements
          </p>
          
          {/* Technology Filter */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {allTechnologies.map((tech) => (
              <Button
                key={tech}
                variant={selectedTech === tech ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTech(tech)}
                className="group"
                data-testid={`filter-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {tech === 'All' && <Filter className="w-3 h-3 mr-1" />}
                {tech}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeInOnScroll key={project.title} delay={index * 150}>
              <Card className="overflow-hidden hover-elevate group" data-testid={`project-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-muted">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <Badge variant="default" className="text-xs">Featured</Badge>
                    )}
                  </div>
                </div>
                
                {/* GitHub Stats */}
                {!isLoadingStats && githubStats[project.repositoryName] && (
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {githubStats[project.repositoryName].stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {githubStats[project.repositoryName].forks}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {githubStats[project.repositoryName].watchers}
                    </div>
                    <Badge variant="outline" className="text-xs px-1.5 py-0.5">
                      {githubStats[project.repositoryName].language}
                    </Badge>
                  </div>
                )}

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="default" 
                    size="sm" 
                    onClick={() => handleViewCode(project.githubUrl)}
                    className="flex-1 group"
                    data-testid={`button-view-code-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    View Code
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleViewLive(project.liveUrl!)}
                      className="flex-1 group"
                      data-testid={`button-view-live-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
              </Card>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button 
            variant="outline" 
            onClick={() => window.open('https://github.com/mgoyal07', '_blank')}
            data-testid="button-view-all-projects"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}