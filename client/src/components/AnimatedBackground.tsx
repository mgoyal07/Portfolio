interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

export function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Circles - Light Mode: Pink & White, Dark Mode: Pink & Dark */}
        <div className="floating-shapes">
          {/* Large floating circle */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-pink-200/30 to-white/20 dark:from-pink-500/20 dark:to-pink-800/10 rounded-full blur-3xl animate-float-slow" />
          
          {/* Medium floating circles */}
          <div className="absolute top-1/3 right-20 w-48 h-48 bg-gradient-to-br from-pink-300/25 to-rose-200/15 dark:from-pink-600/15 dark:to-pink-900/10 rounded-full blur-2xl animate-float-medium" />
          
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-white/30 to-pink-100/20 dark:from-pink-700/10 dark:to-pink-950/5 rounded-full blur-2xl animate-float-reverse" />
          
          {/* Small floating dots */}
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-white/15 dark:from-pink-400/15 dark:to-pink-600/8 rounded-full blur-xl animate-float-fast" />
          
          <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-gradient-to-br from-rose-300/25 to-pink-200/20 dark:from-pink-500/12 dark:to-pink-800/8 rounded-full blur-xl animate-float-slow-reverse" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/10 via-transparent to-rose-50/5 dark:from-pink-950/20 dark:via-transparent dark:to-pink-900/10" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-20" 
               style={{
                 backgroundImage: `radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.3) 1px, transparent 0)`,
                 backgroundSize: '40px 40px',
                 animation: 'grid-move 20s linear infinite'
               }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}