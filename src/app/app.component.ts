import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isDarkTheme = false;
  activeSection = 'about';

  // Project data with expanded state
  projects = [
    {
      id: 1,
      title: 'Kafka Migration',
      year: '2022',
      skills: 'Kafka, Java, Concurrency',
      shortDescription: 'Migrated a critical application processing over 1 billion transactions a day from batch to stream processing using Kafka.',
      fullDescription: 'Led the migration of a mission-critical payment processing application from traditional batch processing to real-time stream processing using Apache Kafka. This involved redesigning the data pipeline architecture, implementing concurrent processing patterns, and ensuring zero downtime during the transition. The new system improved processing latency by 95% and enabled real-time fraud detection capabilities. Worked closely with the operations team to monitor performance and fine-tune Kafka cluster configurations for optimal throughput.',
      expanded: false
    },
    {
      id: 2,
      title: 'Web Accessibility Revamp',
      year: '2023',
      skills: 'HTML, CSS, WCAG 2.1, JavaScript',
      shortDescription: 'Revamped internal web application to meet Visa Global Accessibility Requirements (WCAG 2.1 Level AA).',
      fullDescription: 'Spearheaded the accessibility overhaul of a critical internal web application used by thousands of employees globally. Conducted comprehensive accessibility audits, implemented ARIA labels, keyboard navigation, screen reader support, and color contrast improvements. Collaborated with UX designers to create accessible component patterns and established automated testing pipelines to prevent regression. The project resulted in 100% WCAG 2.1 Level AA compliance and improved usability for all users.',
      expanded: false
    },
    {
      id: 3,
      title: 'Multi-Datacenter Setup',
      year: '2024',
      skills: 'Kubernetes, Docker, Monitoring, DevOps',
      shortDescription: 'Handled migration of application from single datacenter to multi-datacenter setup for high availability.',
      fullDescription: 'Architected and executed the migration strategy to transform a single-datacenter application into a highly available multi-datacenter deployment. Implemented active-active replication patterns, set up cross-region monitoring and alerting systems, and designed failover mechanisms to ensure 99.99% uptime. Utilized Kubernetes for container orchestration, implemented blue-green deployment strategies, and established comprehensive observability with distributed tracing. The new architecture reduced recovery time objectives (RTO) from hours to minutes.',
      expanded: false
    }
  ];


  ngOnInit() {
    // Check for saved theme preference or default to light theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkTheme = true;
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  toggleProject(projectId: number) {
    const project = this.projects.find(p => p.id === projectId);
    if (project) {
      project.expanded = !project.expanded;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['about', 'experience', 'projects', 'contact'];
    const scrollPosition = window.pageYOffset + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}
