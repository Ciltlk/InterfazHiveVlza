// ⚠️ Este archivo es una plantilla
// Los valores reales se inyectan desde GitHub Secrets durante el build

window.SCADA_CREDENTIALS = {
    users: {
        "{{ADMIN_USERNAME}}": "{{ADMIN_PASSWORD}}",
        "{{USER_USERNAME}}": "{{USER_PASSWORD}}"
    }
};
