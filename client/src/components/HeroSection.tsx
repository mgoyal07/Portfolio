import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Download, Github, Linkedin } from 'lucide-react';
import profileImage from '@assets/WhatsApp Image 2025-09-13 at 00.54.17_caf3e642_1757712620631.jpg';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ['AI Engineer', 'Full Stack Developer', 'Tech Innovator', 'Problem Solver'];
  const currentTitle = titles[currentIndex % titles.length];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex(currentIndex + 1);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, currentTitle]);

  const handleGetInTouch = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    console.log('Download resume triggered');
    // TODO: Implement actual download functionality
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-card">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-chart-2/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-40 w-12 h-12 bg-chart-3/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <p className="text-primary text-lg mb-4 font-medium">Hi there! I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Mridul Goyal
            </h1>
            <div className="h-16 mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              I'm passionate about using technology to solve real-world problems and create meaningful impact. What excites me most is learning continuously, experimenting, and pushing myself to turn ideas into reality.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={handleGetInTouch}
                className="group"
                data-testid="button-get-in-touch"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                onClick={handleDownloadResume}
                className="group"
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open('https://linkedin.com/in/mgoyal07', '_blank')}
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open('https://github.com/mgoyal07', '_blank')}
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-colors duration-300">
                <img 
                  src={profileImage} 
                  alt="Mridul Goyal - AI Engineer"
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-chart-2 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}