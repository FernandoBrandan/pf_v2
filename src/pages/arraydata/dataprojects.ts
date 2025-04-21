// src/data/projects.ts
export interface Project {
    slug: string;
    title: string;
    description: string;
    content: string;
}

export const projects: Project[] = [
    {
        slug: "Arquitectura Microservicios",
        title: "Arquitectura Microservicios",
        description: `He trabajado distintas tecnologias para desarrollar microservicios, integraciones con bases de datos, y manejo de autenticaciones. 
        Me enfoco en la optimización del rendimiento y la escalabilidad de aplicaciones backend.  
        Aunque mi especialidad es el backend, mi experiencia en el frontend me permite colaborar eficazmente con equipos front,
        asegurando una integración fluida de las APIs y mejorando la experiencia de usuario final.`,
        content: ` `
    },
    {
        slug: "Microservicios",
        title: "Microservicios",
        description: `Contiene una colección de microservicios desarrollados en diferentes tecnologías y lenguajes de programación, 
        organizados dentro de una arquitectura de microservicios para proporcionar una solución escalable, flexible y modular.`,
        content: ` `
    },
    {
        slug: "MessageQueue",
        title: "MessageQueue",
        description: `Implementa un sistema de mensajería asíncrona para la comunicación entre microservicios, garantizando la entrega de mensajes y la escalabilidad de la aplicación. 
        Utiliza RabbitMQ como broker de mensajes y se integra con los microservicios mediante colas de mensajes.`,
        content: ` `
    },
];