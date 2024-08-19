$(document).ready(function () {
    loadComponents();
    console.log('El DOM ha sido completamente cargado');
});

/**
 * Carga los componentes estáticos del sitio
 */
function loadComponents() {
    loadComponent("components/Headers.html", "#header");
    loadComponent("components/Footers.html", "#footer");
    loadComponent("components/SideNav.html", "#navbar");
}

/**
 * Carga un componente HTML en un contenedor específico
 * @param {string} url - La URL del componente HTML
 * @param {string} selector - El selector del contenedor en el DOM
 */
function loadComponent(url, selector) {
    $.get(url)
        .done(function (data) {
            $(selector).html(data);
        })
        .fail(function () {
            console.error('Error al cargar el componente desde:', url);
            $(selector).html('<p>Error al cargar el contenido.</p>'); // Mensaje de error amigable
        });
}

/**
 * Carga una página dinámica en el contenedor principal
 * @param {string} page - El nombre de la página sin la extensión
 */
function loadPage(page) {
    $.get("page/" + page + ".html")
        .done(function (data) {
            $("#main").html(data);
        })
        .fail(function () {
            console.error('Error al cargar la página desde:', page);
            $("#main").html('<p>Error al cargar la página.</p>'); // Mensaje de error amigable
        });
}

/**
 * Muestra el modal de registro
 */
function login() {
    $('#formRegister').modal('show');
}
