import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function FadeInOnScroll({ 
  children, 
  delay = 0, 
  threshold = 0.1, 
  duration = 600, 
  className, 
  style 
}: FadeInOnScrollProps) {
  const { ref, fadeInStyle } = useFadeInOnScroll({ delay, threshold, duration });
  
  return (
    <div 
      ref={ref} 
      style={{ ...fadeInStyle, ...style }} 
      className={className}
    >
      {children}
    </div>
  );
}