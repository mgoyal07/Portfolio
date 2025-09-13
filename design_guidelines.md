# Modern Personal Portfolio Design Guidelines

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern developer portfolios like those on Dribbble and Behance, with dark theme aesthetics similar to GitHub's dark mode and Linear's interface.

## Core Design Elements

### Color Palette
**Dark Mode Primary:**
- Background: 220 20% 8% (deep dark blue-gray)
- Surface: 220 15% 12% (elevated dark surface)
- Primary: 210 100% 60% (bright blue for accents and CTAs)
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 220 10% 70% (muted gray)
- Success/Skills: 150 80% 50% (green for progress bars)

**Gradients:**
- Hero background: Subtle gradient from 220 20% 8% to 240 25% 10%
- Button gradients: 210 100% 60% to 260 80% 55% (blue to purple)
- Accent overlays: Use sparingly on project cards and skill bars

### Typography
- **Primary Font:** Inter or Poppins from Google Fonts
- **Headings:** Font weights 600-700, sizes from text-2xl to text-6xl
- **Body Text:** Font weight 400-500, text-base to text-lg
- **Code/Tech:** JetBrains Mono for technology tags

### Layout System
**Tailwind Spacing Units:** Primarily use 2, 4, 6, 8, 12, 16, 24 for consistent spacing
- Container max widths: max-w-6xl for main content
- Section padding: py-16 to py-24 for desktop, py-8 to py-12 for mobile
- Grid gaps: gap-6 to gap-8 for card layouts

### Component Library

**Navigation:**
- Fixed header with glassmorphism effect (backdrop-blur-md)
- Smooth scroll highlighting for active sections
- Mobile hamburger with slide-in animation

**Hero Section:**
- Full viewport height with animated typing effect for name/title
- Floating geometric shapes with subtle animation
- Gradient overlay on background
- Primary CTA button with hover lift effect

**Content Sections:**
- **About Me:** Two-column layout with personal info and quick facts sidebar
- **Skills:** Categorized skill groups with animated progress bars on scroll
- **Experience:** Vertical timeline with expandable cards and company logos
- **Projects:** Grid layout with hover effects, technology tags, and live/code buttons
- **Education:** Clean card design with institution logos and achievement highlights
- **Contact:** Professional form with floating labels and validation states

**Interactive Elements:**
- Subtle hover states with 200-300ms transitions
- Scroll-triggered animations using intersection observer
- Micro-interactions on buttons and cards
- Smooth parallax effects on background elements

### Animations
Use sparingly but meaningfully:
- **Entrance animations:** Fade up with stagger delays for sections
- **Typing effect:** For hero title with cursor blink
- **Progress bars:** Fill animation on scroll into view
- **Hover states:** Subtle scale and glow effects
- **Page transitions:** Smooth scrolling between sections

## Images
- **Hero Background:** Abstract geometric pattern or subtle gradient (no large hero image)
- **Profile Photo:** Professional headshot in About section (rounded with subtle border)
- **Project Screenshots:** High-quality previews in project cards
- **Company/Education Logos:** Small icons in timeline and education sections
- **Skill Icons:** Technology logos for visual skill representation

## Key Design Principles
- **Minimalist Dark Aesthetic:** Clean, professional with strategic use of color
- **Performance Focus:** Optimized animations and efficient layouts
- **Mobile-First:** Responsive design with touch-friendly interactions
- **Professional Branding:** Consistent visual identity throughout
- **Accessibility:** High contrast ratios and keyboard navigation support