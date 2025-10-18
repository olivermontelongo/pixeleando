import React, { useState } from "react";

function App() {
  const [completado, setCompletado] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      {/* Header */}
      <header style={{ background: "#282c34", color: "white", padding: "20px", borderRadius: "8px" }}>
        <h1>🚀 Sprint 1 – Pixeleando</h1>
        <h2>Gestión de Campañas Digitales</h2>
      </header>

      {/* Descripción */}
      <p style={{ marginTop: "20px" }}>
        Este sprint se centra en la planificación de campañas en Google Ads y Meta Business Suite.
      </p>

      {/* Objetivos */}
      <section style={{ textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
        <h3>✅ Objetivos del Sprint</h3>
        <ul>
          <li>Configurar cuenta de Google Ads y Meta Business.</li>
          <li>Definir público objetivo.</li>
          <li>Crear primeras campañas de prueba.</li>
        </ul>
      </section>

      {/* Botón interactivo */}
      <button
        onClick={() => setCompletado(!completado)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: completado ? "green" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        {completado ? "Sprint Completado ✅" : "Marcar Sprint como Completado"}
      </button>

      {/* Footer */}
      <footer style={{ marginTop: "40px", fontSize: "14px", color: "#555" }}>
        <p>📅 Duración: 13 - 17 octubre 2025</p>
        <p>👨‍💻 Responsable: Oliver Montelongo</p>
      </footer>
    </div>
  );
}

export default App;
