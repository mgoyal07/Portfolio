import { Card } from '@/components/ui/card';

export default function AboutSection() {
  const quickFacts = [
    { label: 'Location', value: 'India' },
    { label: 'Current Focus', value: 'AI & Machine Learning' },
    { label: 'Education', value: 'B.Tech CSE' },
    { label: 'Experience', value: 'Full Stack Development' },
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, passions, and what drives me as a developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 hover-elevate">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm passionate about using technology to solve real-world problems and create meaningful impact. What excites me most is learning continuously, experimenting, and pushing myself to turn ideas into reality.
                </p>
                <p>
                  I enjoy building projects that blend creativity with logic, and I aim to grow into a leader who drives innovation in AI and beyond. My approach combines technical expertise with a deep understanding of user needs, ensuring that every solution I create is both powerful and accessible.
                </p>
                <p>
                  My long-term goal is to contribute to solutions that make life simpler, smarter, and more connected. I believe that the best technology is invisible - it just works, seamlessly integrating into people's lives to enhance their experiences.
                </p>
              </div>
            </Card>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">Quick Facts</h3>
            {quickFacts.map((fact, index) => (
              <Card key={index} className="p-4 hover-elevate" data-testid={`fact-${fact.label.toLowerCase().replace(' ', '-')}`}>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{fact.label}</p>
                  <p className="font-medium text-foreground">{fact.value}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}