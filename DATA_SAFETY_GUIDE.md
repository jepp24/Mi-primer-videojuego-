# Guía de Seguridad de Datos para Google Play

Cuando subas tu aplicación a la Google Play Console, deberás completar la sección de **Seguridad de los Datos**. Basado en el código actual de tu aplicación, aquí tienes cómo debes responder:

### 1. Recopilación y uso de datos
*   **¿Tu aplicación recopila o comparte alguno de los tipos de datos de usuario requeridos?**
    *   Respuesta: **No**.
    *   *Razón*: Tu aplicación guarda el progreso localmente en el dispositivo usando `localStorage` y no envía nada a servidores externos.

### 2. Prácticas de seguridad
*   **¿Se cifran todos los datos de usuario en tránsito?**
    *   Respuesta: **Sí** (Aunque no envías datos, es la respuesta estándar si usas HTTPS para cualquier recurso externo).
*   **¿Ofreces a los usuarios una forma de solicitar que se eliminen sus datos?**
    *   Respuesta: **Sí**.
    *   *Razón*: El usuario puede borrar los datos de la aplicación desde los ajustes de Android o usar el botón de "Reiniciar progreso" que incluimos.

### 3. Enlace a la Política de Privacidad
Debes proporcionar la URL donde alojarás el archivo `PRIVACY_POLICY.html` que creamos. Puedes usar servicios gratuitos como GitHub Pages, Firebase Hosting o incluso un Google Drive público para alojar este archivo HTML.

---

### Próximos pasos técnicos recomendados:
1.  **Iconos de la App**: Generar iconos reales (actualmente usa los de por defecto).
2.  **Firma**: Generar el bundle de producción (`.aab`).
