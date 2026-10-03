import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuOpen = false;
  navigateToSection(event: MouseEvent, sectionId: string): void {
    event.preventDefault();
    this.menuOpen = false;
    const section = document.getElementById(sectionId);
    if (!section) return;
    window.history.pushState(null, '', `#${sectionId}`);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  readonly skills = [
    { group: 'Frontend & móvil', items: ['Angular', 'TypeScript', 'JavaScript', 'React Native', 'Expo', 'Android'] },
    { group: 'Backend & APIs', items: ['Java', 'Node.js', 'APIs REST', 'Autenticación', 'Firebase Cloud Messaging'] },
    { group: 'Datos & diseño', items: ['MySQL', 'SQL Server', 'Python para analítica', 'Figma', 'Prototipado móvil'] }
  ];
  readonly academicModules = [
    { name: 'Académico', detail: 'Matrículas, asistencias, biometría y calificaciones.' },
    { name: 'Tesorería', detail: 'Procesos académicos relacionados con pagos y tesorería.' },
    { name: 'Intranet', detail: 'Área de intranet del sistema escolar.' },
    { name: 'Seguridad', detail: 'Módulo de seguridad de la plataforma.' },
    { name: 'Talleres', detail: 'Área para la gestión de talleres.' },
    { name: 'Ciclo verano', detail: 'Área para el ciclo de verano.' }
  ];
  activeAcademicModule = this.academicModules[0];
  readonly certificates = [
    { title: 'React - The Complete Guide', detail: 'incl. Next.js, Redux · Udemy · Jul. 2026' },
    { title: 'React Native - Advanced Concepts', detail: 'Udemy · Jun. 2026' },
    { title: 'Especialización en SQL Server for BI', detail: 'DMC Perú · Jun. 2024' },
    { title: 'Especialización en Python for Analytics', detail: 'DMC Perú · Mar. 2024' }
  ];
}
