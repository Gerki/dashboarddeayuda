// Map menu items to module IDs
const menuMap = [
    { selector: '.fa-building', module: 'module-organizaciones' },
    { selector: '.fa-user', module: 'module-personas' },
    { selector: '.fa-file', module: 'module-archivos' },
    { selector: '.fa-industry', module: 'module-industrias' },
    { selector: '.fa-box', module: 'module-inventario' },
    { selector: '.fa-handshake', module: 'module-match' },
    { selector: '.fa-vr-cardboard', module: 'module-ar' },
    { selector: '.fa-map-marker-alt', module: 'module-gps' },
    { selector: '.fa-camera', module: 'module-evidencias' },
    { selector: '.fa-chart-bar', module: 'module-reportes' }
];

document.querySelectorAll('.menu a').forEach((link, idx) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Hide all modules
        document.querySelectorAll('.dashboard-module').forEach(mod => mod.style.display = 'none');
        // Show the selected module
        document.getElementById(menuMap[idx].module).style.display = 'block';
    });
}); 