import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Star, Code, ExternalLink } from 'lucide-react';

interface Achievement {
  platform: string;
  rating: string;
  badge: string;
  description: string;
  profileUrl: string;
  icon: React.ReactNode;
  color: string;
}

export default function AchievementsSection() {
  const [animatedCounters, setAnimatedCounters] = useState(false);
  const [platforms, setPlatforms] = useState(0);
  const [maxRating, setMaxRating] = useState(0);
  const [problemsSolved, setProblemsSolved] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const achievements: Achievement[] = [
    {
      platform: 'CodeChef',
      rating: '1600+',
      badge: '3★',
      description: 'Achieved 3-star rating on CodeChef with consistent performance in monthly contests',
      profileUrl: 'https://www.codechef.com/users/mrtechtroid',
      icon: <Code className="w-6 h-6" />,
      color: 'text-orange-500',
    },
    {
      platform: 'CodeForces',
      rating: '1200+',
      badge: 'Pupil',
      description: 'Pupil rank on Codeforces with strong problem-solving skills in competitive programming',
      profileUrl: 'https://codeforces.com/profile/itsme_uk',
      icon: <Star className="w-6 h-6" />,
      color: 'text-blue-500',
    },
    {
      platform: 'LeetCode',
      rating: '1750+',
      badge: 'Top Performer',
      description: 'High rating on LeetCode with expertise in data structures and algorithms',
      profileUrl: 'https://leetcode.com/u/micrb942/',
      icon: <Trophy className="w-6 h-6" />,
      color: 'text-yellow-500',
    },
  ];

  const stats = [
    { label: 'Platforms', value: 3, suffix: '+' },
    { label: 'Max Rating', value: 1750, suffix: '+' },
    { label: 'Problems Solved', value: 500, suffix: '+' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedCounters) {
            setAnimatedCounters(true);
            
            // Animate counters
            const duration = 2000;
            const interval = 50;
            const steps = duration / interval;
            
            let step = 0;
            const timer = setInterval(() => {
              step++;
              const progress = step / steps;
              
              setPlatforms(Math.floor(3 * progress));
              setMaxRating(Math.floor(1750 * progress));
              setProblemsSolved(Math.floor(500 * progress));
              
              if (step >= steps) {
                clearInterval(timer);
                setPlatforms(3);
                setMaxRating(1750);
                setProblemsSolved(500);
              }
            }, interval);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animatedCounters]);

  const handleVisitProfile = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section ref={sectionRef} id="achievements" className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and accomplishments in competitive programming and coding challenges
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="p-6 text-center hover-elevate" data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  {index === 0 ? platforms : index === 1 ? maxRating : problemsSolved}
                  {stat.suffix}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Platform Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={achievement.platform} className="p-6 hover-elevate group" data-testid={`achievement-${achievement.platform.toLowerCase()}`}>
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg bg-muted ${achievement.color}`}>
                    {achievement.icon}
                  </div>
                  <Badge variant="default">{achievement.badge}</Badge>
                </div>

                {/* Platform Info */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{achievement.platform}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-muted-foreground">Rating:</span>
                    <span className={`font-bold ${achievement.color}`}>{achievement.rating}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200"
                  onClick={() => handleVisitProfile(achievement.profileUrl)}
                  data-testid={`button-visit-${achievement.platform.toLowerCase()}`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Profile
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Consistently participating in competitive programming contests and solving algorithmic challenges
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Dynamic Programming', 'Graph Algorithms', 'Data Structures', 
              'Greedy Algorithms', 'Binary Search', 'Tree Algorithms'
            ].map((topic) => (
              <Badge key={topic} variant="secondary" className="text-sm">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}