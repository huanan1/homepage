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
      "title": "Upstream Integration",
      "year": "2025",
      "skills": "Kafka, Java, Troubleshooting",
      "shortDescription": "Integrated encrypted Kafka upstream into legacy system, resolving critical dependency conflicts to enable successful production rollout.",
      "details": [
        "Integrated new Kafka data source with vendor encryption framework into existing real-time processing pipeline",
        "Resolved dependency conflicts between encryption library and legacy codebase through cross-team troubleshooting",
        "Minimized code changes by strategically reusing existing data flow patterns, reducing deployment risk",
      ],
      expanded: false
    },
    {
      "title": "Real-Time App Kafka Migration",
      "year": "2024",
      "skills": "Kafka, Java, Concurrency",
      "shortDescription": "Migrated a critical real-time application processing 1B+ transactions/day from batch to stream processing on Kafka.",
      "details": [
        "Engineered and migrated high-throughput systems (~terabytes/day) from file-based and MQ systems to Kafka.",
        "Pieced together efforts from previous year and developers and merged these changes across several repositories to the current codebase",
        "Found existing bugs and fixed them to get the project to a steady state, which allowed more team members to join",
        "Led the discussion for several design decisions and proposed several designs from which the team chose to implement",
        "Ensured no performance impact to production despite additional processing through concurrency optimizations and tuning of Kafka configurations.",
      ]
    },
    {
      "title": "Config-as-code POC",
      "year": "2023",
      "skills": "Software Design",
      "shortDescription": "Designed a technology-agnostic configuration management process that significantly reduces the time for config management.",
      "details": [
        "Designed a configuration management process that reduces the time taken for config management by up to 80%.",
        "Proposed a technology-agnostic configuration management process that can be used by all teams and applications after analysis of current practices and possible solutions.",
        "The proposal sets the stage for the migration of applications from VMs to containers and enables a more frictionless move for team members between applications."
      ]
    },
    {
      "title": "Web Accessibility Revamp",
      "year": "2023",
      "skills": "Angular, Web Accessibility, TypeScript",
      "shortDescription": "Spearheaded the revamp of an internal web application to comply with Visa Global Accessibility Requirements.",
      "details": [
        "Addressed over 200 accessibility findings across 10+ pages, ensuring usability for people with disabilities.",
        "Led the development and project coordination effort to achieve compliance for an internal web app."
      ]
    },
    {
      "title": "Feature Development",
      "year": "2022 - 2023",
      "skills": "Java, Angular, Data Visualization, Authentication",
      "shortDescription": "Worked on backlog of requests and developed various features for internal risk management applications.",
      "details": [
        "Implemented secure authentication and integrated real-time data visualization features to monitor performance of models and systems supporting fraud prevention.",
        "Developed and maintained features for internal applications supporting risk management in Visa (Java/Angular).",
      ]
    },
    {
      "title": "Application Migration to Higher Availability Setup",
      "year": "2022",
      "skills": "Project Coordination, Troubleshooting, Linux, DevOps",
      "shortDescription": "Coordinated a project to migrate a critical application to a new higher availability (HA) dual-datacenter setup.",
      "details": [
        "Handled the planning and coordination efforts across 5 teams, ranging from network, firewall, Splunk, Cybersecurity to the QA and Dev within our team, required to migrate an application to a higher availability set-up.",
        "Proactively provided timely updates to stakeholders and resolved issues that arose during the migration process.",
      ]
    },
    {
      "title": "Documentation & SOP",
      "year": "2020 - 2021",
      "skills": "Technical Writing, Incident Management, Process Improvement, Documentation",
      "shortDescription": "Led efforts to improve standard operating procedures (SOPs) and knowledge transfer for incident response and team operations.",
      "details": [
        "Drove efforts to have better SOPs by authoring and updating over 30 articles related to incident response and more.",
        "Shared knowledge on various work activities through clear documentations, speeding up onboarding and enabling backups in the team.",
      ]
    },
    {
      "title": "Manual Process Automation",
      "year": "2020 - 2021",
      "skills": "Python, Bash, Scripting, Jenkins, Automation",
      "shortDescription": "Proactively automated manual and repetitive operational processes, resulting in significant time savings.",
      "details": [
        "Proactively automated manual processes via Python/Bash scripts and Jenkins, saving 100+ hours annually.",
        "Improved several processes via scripting (Bash/Python), reducing errors and time spent from days/hours to minutes or less.",
        "Contributed to developer workflow automations through troubleshooting and editing Jenkins pipeline scripts and jobs."
      ]
    },
    {
      "title": "Live Datacenter Switching Interface",
      "year": "2019",
      "skills": "Java, Spring, Angular, Frontend/Backend Development",
      "shortDescription": "Developed an interface to allow authorized users to switch the active data center.",
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

  toggleProject(projectIdx: number) {
    const project = this.projects.at(projectIdx);
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
