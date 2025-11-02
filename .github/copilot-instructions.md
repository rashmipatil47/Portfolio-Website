# AI Agent Instructions for Portfolio Website

## Project Overview
This is a React-based personal portfolio website featuring multiple pages and sections including Home, About, Projects, and Resume. The project uses React Bootstrap for styling and responsive design.

## Key Architecture Components

### Component Structure
- `src/components/` - All React components organized by feature
  - `Home/` - Landing page components (`Home.js`, `Home2.js`, `Type.js`)
  - `About/` - About section components including tech stack
  - `Projects/` - Project showcase components
  - `Resume/` - Resume display components
  - Common components: `Navbar.js`, `Footer.js`, `Particle.js`

### Key Patterns
1. **Component Organization**: Each major section has its own directory with related components
2. **Styling**: 
   - React Bootstrap for layout and components
   - Custom CSS in `src/App.css` and `src/style.css`
   - Responsive design using Bootstrap grid system

### Dependencies
- React.js 17.x
- React Bootstrap for UI components
- React Router for navigation
- react-tsparticles for background effects
- react-github-calendar for GitHub activity display
- typewriter-effect for text animations

## Development Workflow

### Setup
1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

### Common Tasks
- Adding new pages: Create components in appropriate subdirectory under `src/components/`
- Adding assets: Place in `src/Assets/` under appropriate subdirectory
- Styling changes: Modify `src/style.css` or component-specific CSS

## Integration Points
- GitHub Calendar integration in `About/Github.js`
- Social media links in navigation
- PDF resume rendering using react-pdf

## Performance Considerations
- Use appropriate image formats and sizes in `src/Assets/`
- Lazy load components for better initial load time
- Optimize particle effects in `Particle.js` for performance