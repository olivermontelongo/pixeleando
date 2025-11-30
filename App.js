import React, { useState } from "react";

function App() {
  const [completado, setCompletado] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      
      {/* Header */}
      <header style={{ background: "#1a1a1a", color: "white", padding: "20px", borderRadius: "8px" }}>
        <h1>🚀 Proyecto Pixeleando</h1>
        <h2>Sprint 1 – Documentación y Roles</h2>
      </header>

      {/* Descripción */}
      <p style={{ marginTop: "20px" }}>
        Este sprint se enfocó en la organización del equipo, definición de roles, 
        estructura del proyecto y documentación base para iniciar el desarrollo.
      </p>

      {/* Objetivos */}
      <section style={{ textAlign: "left", maxWidth: "550px", margin: "0 auto" }}>
        <h3>📌 Objetivos del Sprint</h3>
        <ul>
          <li>Definir estructura y organización del repositorio.</li>
          <li>Crear y documentar los roles del equipo.</li>
          <li>Generar bitácora de actividades.</li>
          <li>Preparar la documentación técnica del proyecto.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section style={{ textAlign: "left", maxWidth: "550px", margin: "20px auto" }}>
        <h3>🛠 Actividades realizadas</h3>
        <ul>
          <li>Creación del repositorio GitHub.</li>
          <li>Generación del archivo README.md.</li>
          <li>Registro de avances en la bitácora.</li>
          <li>Documentación del archivo ROLES.md.</li>
        </ul>
      </section>

      {/* Botón */}
      <button
        onClick={() => setCompletado(!completado)}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: completado ? "green" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        {completado ? "Sprint Completado ✅" : "Marcar Sprint como Completado"}
      </button>

      {/* Footer */}
      <footer style={{ marginTop: "40px", fontSize: "14px", color: "#555" }}>
        <p>📅 Sprint 1 – Octubre 2025</p>
        <p>👨‍💻 Responsable: Oliver Montelongo</p>
        <p>📂 Repositorio GitHub: /documentacion + /src</p>
      </footer>
    </div>
  );
}

export default App;
