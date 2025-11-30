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
