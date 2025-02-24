document.addEventListener("DOMContentLoaded", function () {
    // Datos dinámicos
    const educationData = [
        { title: "Bachillerato (2017-2022)", institution: "Comfandi el Prado" },
        { title: "Tecnología en desarrollo de sistemas de información y software", institution: "Universidad Santiago de Cali" }
    ];
    
    const experienceData = [
        { title: "Modelador 3D", company: "Experiencia independiente (2020-presente)" },
        { title: "Desarrollador de juegos indie", company: "Semillero Informa (2024-presente)" }
    ];
    
    const skillsData = [
        "Java, JavaScript, Python",
        "Blender",
        "C#",
        "Inglés (Avanzado)",
        "Español (Nativo)"
    ];
    
    // Función para llenar listas dinámicamente
    function populateList(elementId, data, isObject = false) {
        const listElement = document.getElementById(elementId);
        if (!listElement) return;
        
        data.forEach(item => {
            const li = document.createElement("li");
            li.classList.add("list-group-item");
            li.textContent = isObject ? `${item.title} - ${item.institution || item.company}` : item;
            listElement.appendChild(li);
        });
    }
    
    // Poblamos las listas con los datos
    populateList("education-list", educationData, true);
    populateList("experience-list", experienceData, true);
    populateList("skills-list", skillsData);
});
