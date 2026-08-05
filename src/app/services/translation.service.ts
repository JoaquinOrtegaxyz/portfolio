import { Injectable, signal, computed } from '@angular/core';

export const translations = {
  es: {
    NAV_ABOUT: 'Acerca de mi',
    NAV_SERVICES: 'Servicios',
    NAV_PORTFOLIO: 'Work Experience',
    NAV_WORK: 'Proyectos',
    NAV_STATISTICS: 'Estadísticas',
    NAV_CONTACT: 'Contacto',
    HERO_HI: 'Hola, soy Joaquin Ortega!',
    HERO_ROLE: 'Desarrollador Full Stack',
    HERO_BTN: 'Descargar CV',
    ABOUT_TITLE: 'Quien soy?',
    ABOUT_SUB: 'Soy Joaquin, Desarrollador Full Stack',
    ABOUT_DESC: 'Desarrollador de software recibido en la Universidad Tecnologica Nacional(UTN), con experiencia en el desarrollo de aplicaciones web y mobile. Me gusta crear soluciones innovadoras y eficientes, y estoy siempre dispuesto a aprender nuevas tecnologías.',
    ABOUT_LANG: 'Lenguajes',
    ABOUT_FW: 'Frameworks',
    ABOUT_DB: 'Bases de datos SQL/NoSQL',
    SERVICES_TITLE: 'Servicios Profesionales',
    SERVICES_SUB: 'Soluciones de Software de Alto Rendimiento',
    SERVICES_CARD1_TITLE: 'Desarrollo Web Full-Stack',
    SERVICES_CARD1_DESC: 'Creación de aplicaciones web escalables y robustas utilizando el ecosistema <strong>Java Spring Boot</strong> y <strong>Angular</strong> para las necesidades del negocio moderno.',
    SERVICES_CARD2_TITLE: 'Soluciones Empresariales (ERP/POS)',
    SERVICES_CARD2_DESC: 'Desarrollo de software a medida para gestión de inventarios, sistemas de ventas locales e implementación optimizada de lógica de negocio.',
    SERVICES_CARD3_TITLE: 'Arquitectura de Bases de Datos',
    SERVICES_CARD3_DESC: 'Diseño y optimización de bases de datos relacionales con <strong>PostgreSQL</strong> y <strong>MySQL</strong>, enfocado en la integridad de los datos y consultas de alta velocidad.',
    SERVICES_CARD4_TITLE: 'Implementación de IA Local',
    SERVICES_CARD4_DESC: 'Despliegue de Modelos de Lenguaje (LLMs) privados en hardware local usando <strong>Ollama</strong> para entornos de Inteligencia Artificial seguros y personalizados.',
    PORTFOLIO_TITLE: 'Work Experience',
    WORK_TITLE: 'Proyectos',
    WORK_SUB: 'Aquí te muestro algunos de mis proyectos',
    WORK_DATE: 'Dic 2025 - Mar 2026',
    WORK_DESC: 'Creación de un sistema transaccional de inventario con tienda online integrada para mi tesis de grado. Migré la base de datos a PostgreSQL, mejorando significativamente la escalabilidad del sistema y el manejo eficiente de estructuras de datos no estructuradas.',
    STATS_PROYECT_TITLE: 'Proyectos Completados',
    STATS_TECH_TITLE: 'Tecnologías Dominadas',
    CONTACT_TITLE: 'Contactame',
    CONTACT_PLACEHOLDER_NAME: 'Nombre',
    CONTACT_PLACEHOLDER_MSG: 'Mensaje',
    CONTACT_SEND: 'Enviar',
    TOGGLE_LANG: 'Change to English'
  },
  en: {
    NAV_ABOUT: 'About me',
    NAV_SERVICES: 'Services',
    NAV_PORTFOLIO: 'Work Experience',
    NAV_WORK: 'Projects',
    NAV_STATISTICS: 'Statistics',
    NAV_CONTACT: 'Contact',
    HERO_HI: 'Hello, I am Joaquin Ortega!',
    HERO_ROLE: 'Full Stack Developer',
    HERO_BTN: 'Download CV',
    ABOUT_TITLE: 'Who am I?',
    ABOUT_SUB: 'I am Joaquin, Full Stack Developer',
    ABOUT_DESC: 'Software developer graduated from the National Technological University (UTN), with experience in web and mobile application development. I enjoy creating innovative and efficient solutions, and I am always willing to learn new technologies.',
    ABOUT_LANG: 'Languages',
    ABOUT_FW: 'Frameworks',
    ABOUT_DB: 'SQL/NoSQL Databases',
    SERVICES_TITLE: 'Professional Services',
    SERVICES_SUB: 'High Performance Software Solutions',
    SERVICES_CARD1_TITLE: 'Full-Stack Web Development',
    SERVICES_CARD1_DESC: 'Creation of scalable and robust web applications using the <strong>Java Spring Boot</strong> and <strong>Angular</strong> ecosystem for modern business needs.',
    SERVICES_CARD2_TITLE: 'Enterprise Solutions (ERP/POS)',
    SERVICES_CARD2_DESC: 'Custom software development for inventory management, local sales systems, and optimized business logic implementation.',
    SERVICES_CARD3_TITLE: 'Database Architecture',
    SERVICES_CARD3_DESC: 'Design and optimization of relational databases with <strong>PostgreSQL</strong> and <strong>MySQL</strong>, focused on data integrity and high-speed queries.',
    SERVICES_CARD4_TITLE: 'Local AI Implementation',
    SERVICES_CARD4_DESC: 'Deployment of private Large Language Models (LLMs) on local hardware using <strong>Ollama</strong> for secure and customized Artificial Intelligence environments.',
    PORTFOLIO_TITLE: 'Work Experience',
    WORK_TITLE: 'Projects',
    WORK_SUB: 'Here are some of my projects',
    WORK_DATE: 'Dec 2025 - Mar 2026',
    WORK_DESC: 'Creation of a transactional inventory system with integrated online store for my degree thesis. I migrated the database to PostgreSQL, significantly improving system scalability and the efficient handling of unstructured data structures.',
    STATS_PROYECT_TITLE: 'Completed Projects',
    STATS_TECH_TITLE: 'Mastered Technologies',
    CONTACT_TITLE: 'Contact me',
    CONTACT_PLACEHOLDER_NAME: 'Name',
    CONTACT_PLACEHOLDER_MSG: 'Message',
    CONTACT_SEND: 'Send',
    TOGGLE_LANG: 'Cambiar a Español'
  }
};

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<'es' | 'en'>('es');
  
  // Computed signal that returns the current active dictionary
  t = computed(() => translations[this.currentLang()]);

  toggleLanguage() {
    this.currentLang.update(lang => lang === 'es' ? 'en' : 'es');
  }
}
