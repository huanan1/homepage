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
      "id": 1,
      "title": "Real-Time App Kafka Migration",
      "year": "2024",
      "skills": "Kafka, Java, Concurrency Optimization, Linux, DevOps",
      "shortDescription": "Designed and developed the migration of a critical real-time application processing 1B+ transactions/day from batch processing to stream processing on Kafka.",
      "details": [
        "Engineered and migrated high-throughput systems (~terabytes/day) from file-based and MQ systems to Kafka.",
        "Pieced together efforts from previous year and developers and merged these changes across several repositories to the current codebase",
        "Found existing bugs and fixed them to get the project to a steady state, which allowed more team members to join",
        "Led the discussion for several design initiatives and proposed several designs from which the team chose to implement",
        "Ensured no performance impact to production despite additional processing through concurrency optimizations and tuning of Kafka configurations.",
      ]
    },
    {
      "id": 2,
      "title": "Config-as-code POC",
      "year": "2023",
      "skills": "Process Design",
      "shortDescription": "Designed a technology-agnostic configuration management process that significantly reduces the time for config management.",
      "details": [
        "Designed a configuration management process that reduces the time taken for config management by up to 80%.",
        "Proposed a technology-agnostic configuration management process that can be used by all teams and applications after analysis of current practices and possible solutions.",
        "The proposal sets the stage for the migration of applications from VMs to containers and enables a more frictionless move for team members between applications."
      ]
    },
    {
      "id": 3,
      "title": "Web Accessibility Revamp",
      "year": "2023",
      "skills": "Angular, TypeScript, Web Accessibility, JavaScript, HTML, CSS",
      "shortDescription": "Spearheaded the revamp of an internal web application to comply with Visa Global Accessibility Requirements.",
      "details": [
        "Spearheaded the revamp of an internal web application to comply with Visa Global Accessibility Requirements.",
        "Addressed over 200 accessibility findings across 10+ pages, ensuring usability for people with disabilities.",
        "Led the development and project coordination effort to achieve compliance for an internal web app (Angular)."
      ]
    },
    {
      "id": 4,
      "title": "Web App Development",
      "year": "2021 - 2023",
      "skills": "Java, Angular, Data Visualization, Authentication",
      "shortDescription": "Developed and maintained features for internal risk management applications.",
      "details": [
        "Implemented secure authentication and integrated real-time data visualization features to monitor performance of models and systems supporting fraud prevention.",
        "Developed and maintained features for internal applications supporting risk management in Visa (Java/Angular).",
      ]
    },
    {
      "id": 5,
      "title": "Manual Process Automation",
      "year": "2020/21",
      "skills": "Python, Bash, Scripting, Jenkins, Automation",
      "shortDescription": "Proactively automated manual and repetitive operational processes, resulting in significant time savings.",
      "details": [
        "Proactively automated manual processes via Python/Bash scripts and Jenkins, saving 100+ hours annually.",
        "Improved several processes via scripting (Bash/Python), reducing errors and time spent from days/hours to minutes or less.",
        "Contributed to developer workflow automations through troubleshooting and editing Jenkins pipeline scripts and jobs."
      ]
    },
    {
      "id": 6,
      "title": "Live Datacenter Switching Interface",
      "year": "2019",
      "skills": "Java, Spring, Angular, Frontend/Backend Development",
      "shortDescription": "Developed an interface to allow authorized users to switch the active data center for a major application.",
      "details": [
        "Developed an interface for live datacenter switching (Java/Spring, Angular).",
        "The interface allows authorized users to switch the active data center for a major application, along with the display of its execution status.",
        "This reduces the time taken to carry out the activity by about 80% and can be outsourced to teams without production access."
      ],
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
