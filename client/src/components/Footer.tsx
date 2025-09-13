import { Github, Linkedin, Mail, Heart, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, url: 'https://github.com/mgoyal07', label: 'GitHub' },
    { icon: <Linkedin className="w-4 h-4" />, url: 'https://linkedin.com/in/mgoyal07', label: 'LinkedIn' },
    { icon: <Mail className="w-4 h-4" />, url: 'mailto:mridulgoyal03@gmail.com', label: 'Email' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (url: string) => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Mridul Goyal</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI Engineer passionate about creating meaningful impact through technology. Always learning, always building.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSocialClick(social.url)}
                  data-testid={`footer-${social.label.toLowerCase()}`}
                >
                  {social.icon}
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover-elevate px-2 py-1 rounded"
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <p className="text-muted-foreground">
              Open to new opportunities and interesting projects.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:mridulgoyal03@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors duration-200"
                data-testid="footer-email"
              >
                mridulgoyal03@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Mridul Goyal. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-amber-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}