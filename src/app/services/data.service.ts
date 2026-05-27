import { Injectable } from '@angular/core';
import { Project, Skill, Experience, Education } from '../models/index';

/**
 * DataService — single source of truth for all portfolio content.
 * All data is sourced from Ankita Patel's actual portfolio at
 * https://ankita-portfolio-react.netlify.app/
 *
 * To update content: edit the arrays below. No component changes needed.
 */
@Injectable({ providedIn: 'root' })
export class DataService {

  readonly projects: Project[] = [
    {
      id: 1,
      title: 'TaskFlow — Full-Stack Task Management SaaS',
      description:
        'A production-grade, full-stack SaaS productivity platform featuring Kanban boards with drag-and-drop, habit tracking, a Pomodoro timer, GitHub-style activity heatmaps, productivity scoring, notebooks, sticky notes, task calendar, timeline views, global search, notifications, data export (PDF/CSV/JSON), and role-based team collaboration — all in one app.',
      highlights: [
        'Kanban boards with drag-and-drop & team collaboration',
        'Habit tracker + Pomodoro timer + productivity scoring',
        'GitHub-style activity heatmap & analytics dashboard',
        'Data export to PDF / CSV / JSON',
        'Role-based access control & real-time notifications',
      ],
      techStack: ['React 19', 'NestJS 10', 'PostgreSQL', 'Prisma ORM', 'Redux Toolkit', 'TypeScript'],
      githubUrl: 'https://github.com/AnKiTa2456/Task_Management_App_FullStack',
      liveUrl: 'https://task-management-app-full-stack.vercel.app/login',
      imageUrl: '',
      featured: true,
      showcase: true,
      category: 'fullstack',
    },
    {
      id: 6,
      title: 'ShopiFy — Demo E-Commerce Store',
      description:
        'A Shopify-inspired demo e-commerce store built with React and Vite. Showcases a clean product browsing experience with cart functionality, responsive design, and a modern storefront UI.',
      highlights: [
        'Shopify-inspired product listing and detail pages',
        'Shopping cart with add/remove functionality',
        'Responsive, mobile-first storefront UI',
        'Fast Vite-powered build and dev experience',
      ],
      techStack: ['React.js', 'Vite', 'JavaScript', 'CSS3'],
      githubUrl: 'https://github.com/AnKiTa2456/ShopiFy-Demo-Store',
      liveUrl: 'https://shopi-fy-demo-store.vercel.app',
      imageUrl: '',
      featured: true,
      category: 'frontend',
    },
    {
      id: 7,
      title: 'NovaVest AI — Fintech Investment SaaS',
      description:
        'A full-stack fintech SaaS platform delivering AI-powered investment intelligence. Features a secure JWT-authenticated dashboard with real-time portfolio tracking, analytics (Sharpe ratio, drawdown), AI investment recommendations with confidence scoring, transaction history, and an admin panel.',
      highlights: [
        'AI investment recommendations with confidence scoring',
        'Portfolio dashboard with real-time metrics & Recharts analytics',
        'Sharpe ratio, drawdown & performance analytics',
        'JWT-secured auth with httpOnly cookies',
        'Admin panel for user management',
      ],
      techStack: ['Next.js 14', 'TypeScript', 'Express.js', 'MongoDB Atlas', 'Prisma ORM', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/AnKiTa2456/Nova-Vest-AI',
      liveUrl: 'https://nova-vest-ai.vercel.app',
      imageUrl: '',
      featured: true,
      category: 'fullstack',
    },
    {
      id: 2,
      title: 'UserVault — User Management Dashboard',
      description:
        'An Angular-based user management web application with a clean, responsive dashboard interface. Built with Angular 19 and TypeScript, demonstrating component architecture, routing, and modern Angular patterns.',
      techStack: ['Angular 19', 'TypeScript', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/AnKiTa2456/UserVault',
      liveUrl: 'https://user-vault-xem5.vercel.app/loginsignup',
      imageUrl: '',
      featured: true,
      category: 'frontend',
    },
    {
      id: 3,
      title: 'Sundown — Animated Website',
      description:
        'A visually rich, scroll-driven animated website built with pure HTML, CSS, and JavaScript. Showcases advanced CSS animation techniques, smooth scroll interactions, and layered UI/UX design without any framework.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'CSS Animations', 'UI/UX'],
      githubUrl: 'https://github.com/AnKiTa2456/AnimatedWebsite',
      liveUrl: 'https://gorgeous-travesseiro-024861.netlify.app/',
      imageUrl: '',
      featured: false,
      category: 'frontend',
    },
    {
      id: 4,
      title: 'Family Golf — Website Clone',
      description:
        'A pixel-perfect front-end clone replicating smooth CSS animations, responsive layout, and interactive UI elements. Demonstrates mastery of advanced CSS transitions and layout techniques.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'CSS Animations'],
      githubUrl: 'https://github.com/AnKiTa2456/Family_clone',
      liveUrl: 'https://podstream.netlify.app/',
      imageUrl: '',
      featured: false,
      category: 'frontend',
    },
    {
      id: 5,
      title: 'Password Generator',
      description:
        'A utility React app that generates secure, customizable passwords. Users can mix numeric, alphabetic, and special characters, control length, and instantly copy the result.',
      techStack: ['React.js', 'JavaScript', 'CSS3'],
      githubUrl: 'https://github.com/AnKiTa2456/Password_generator',
      imageUrl: '',
      featured: false,
      category: 'tool',
    },
  ];

  readonly skills: Skill[] = [
    // Frontend
    { name: 'React.js',      color: '#61DAFB', category: 'frontend' },
    { name: 'Next.js',       color: '#000000', category: 'frontend' },
    { name: 'Angular',       color: '#DD0031', category: 'frontend' },
    { name: 'Redux',         color: '#764ABC', category: 'frontend' },
    { name: 'JavaScript',    color: '#F7DF1E', category: 'frontend' },
    { name: 'TypeScript',    color: '#3178C6', category: 'frontend' },
    { name: 'HTML5',         color: '#E34F26', category: 'frontend' },
    { name: 'CSS3',          color: '#1572B6', category: 'frontend' },
    { name: 'Bootstrap',     color: '#7952B3', category: 'frontend' },
    { name: 'Material UI',   color: '#007FFF', category: 'frontend' },
    // Backend
    { name: 'Node.js',       color: '#339933', category: 'backend' },
    { name: 'Express.js',    color: '#404D59', category: 'backend' },
    { name: 'NestJS',        color: '#E0234E', category: 'backend' },
    { name: 'REST API',      color: '#6366f1', category: 'backend' },
    { name: 'MERN Stack',    color: '#61DAFB', category: 'backend' },
    { name: 'MEAN Stack',    color: '#DD0031', category: 'backend' },
    // Databases
    { name: 'MongoDB',       color: '#47A248', category: 'database' },
    { name: 'PostgreSQL',    color: '#4169E1', category: 'database' },
    { name: 'MySQL',         color: '#4479A1', category: 'database' },
    { name: 'SQL',           color: '#336791', category: 'database' },
    // Tools
    { name: 'Git',           color: '#F05032', category: 'tools' },
    { name: 'GitHub',        color: '#181717', category: 'tools' },
    { name: 'VS Code',       color: '#007ACC', category: 'tools' },
    { name: 'Figma',         color: '#F24E1E', category: 'tools' },
    { name: 'Netlify',       color: '#00C7B7', category: 'tools' },
    { name: 'Android Studio',color: '#3DDC84', category: 'tools' },
  ];

  readonly experiences: Experience[] = [
    {
      id: 1,
      role: 'Software Developer',
      company: 'Innovation M',
      location: 'On-site',
      startDate: '15 Feb 2026',
      endDate: '10 Mar 2026',
      summary: 'Joined as a Software Developer contributing to web application development using modern frontend technologies.',
      responsibilities: [
        'Developed and maintained web application features using modern frontend frameworks.',
        'Collaborated with cross-functional teams to deliver product requirements on schedule.',
        'Participated in code reviews and contributed to improving development standards.',
      ],
      technologies: ['JavaScript', 'React.js', 'HTML5', 'CSS3', 'Git'],
    },
    {
      id: 2,
      role: 'NOC Engineer',
      company: 'Cemtics',
      location: 'On-site',
      startDate: '13 Nov 2024',
      endDate: '13 Feb 2026',
      summary: 'Worked as a NOC (Network Operations Center) Engineer, monitoring systems and ensuring uptime of critical infrastructure while supporting web-based dashboards.',
      responsibilities: [
        'Monitored network infrastructure and resolved incidents to maintain system uptime and performance.',
        'Maintained and updated internal web-based monitoring dashboards using HTML, CSS, and JavaScript.',
        'Coordinated with technical teams to troubleshoot and escalate network-related issues.',
        'Documented incidents, root cause analyses, and resolution steps in ticketing systems.',
        'Ensured SLA compliance by responding to alerts and resolving issues within defined timeframes.',
      ],
      technologies: ['Network Monitoring', 'HTML5', 'CSS3', 'JavaScript', 'Incident Management'],
    },
    {
      id: 3,
      role: 'Frontend Engineer Intern',
      company: 'Topperworld',
      location: 'Remote',
      startDate: 'Aug 2023',
      endDate: 'Sep 2023',
      summary: 'Contributed to the frontend of a live web application, working with ReactJS, Redux, and Material UI in a production codebase.',
      responsibilities: [
        'Developed and maintained UI components using ReactJS and Material UI for a live educational platform.',
        'Implemented state management with Redux to streamline data flow across complex component trees.',
        'Collaborated with backend developers to integrate REST APIs and display dynamic data.',
        'Ensured cross-browser compatibility and responsiveness across all assigned pages.',
      ],
      technologies: ['React.js', 'Redux', 'Material UI', 'JavaScript', 'CSS3'],
      certificateUrl: 'https://drive.google.com/file/d/1ZsAPwxtuUoBCwpIVJ74O3QAtMEEbPmbm/view?usp=drivesdk',
    },
    {
      id: 4,
      role: 'Web Developer Intern',
      company: 'InternPe',
      location: 'Remote',
      startDate: 'Jul 2023',
      endDate: 'Aug 2023',
      summary: 'Built responsive web pages and interactive UI components using core front-end technologies.',
      responsibilities: [
        'Designed and coded responsive web pages using HTML5, CSS3, and vanilla JavaScript.',
        'Applied Bootstrap to accelerate layout development and ensure mobile-first design.',
        'Practiced writing clean, semantic HTML following accessibility best practices.',
        'Delivered multiple mini-projects on schedule under internship task deadlines.',
      ],
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      certificateUrl: 'https://drive.google.com/file/d/1WeLoKYU7yawbzGxEWg6YbGRM6-28Z5bC/view?usp=drivesdk',
    },
  ];

  readonly education: Education[] = [
    {
      id: 1,
      degree: 'Bachelor of Technology — Computer Science & Engineering',
      school: 'Dr. A.P.J Abdul Kalam Technical University, Lucknow',
      date: 'Oct 2020 – Sep 2024',
      grade: '7.97 CGPA',
      description:
        'Completed B.Tech in CSE with coursework in Data Structures, Algorithms, DBMS, Operating Systems, OOP, and Computer Networks. Active member of the Voygers Club Research & Innovation team.',
      icon: 'university',
    },
    {
      id: 2,
      degree: 'Class XII — Science with Mathematics (State Board)',
      school: 'Kisan Inter Mediate College, Rajgarh Mirzapur, UP',
      date: 'Apr 2016 – Apr 2018',
      grade: '78%',
      description: 'Completed higher secondary education with Physics, Chemistry, and Mathematics.',
      icon: 'school',
    },
    {
      id: 3,
      degree: 'Class X — Science with PCM (State Board)',
      school: 'Kisan Inter Mediate College, Rajgarh Mirzapur, UP',
      date: 'Apr 2014 – Apr 2016',
      grade: '86.66%',
      description: 'Completed secondary education with a strong foundation in Science and Mathematics.',
      icon: 'school',
    },
  ];
}
