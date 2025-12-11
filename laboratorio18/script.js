/*3. Usar fetch con promesas para leer datos de una API: crear una función cargarUsuario(), consultar
al API jsonplaceholder sobre el usuario 10, convertir la respuesta a JSON y mostrar en consola el
name, username y el email del usuario*/

function cargarUsuarioPromesas() {
    fetch('https://jsonplaceholder.typicode.com/users/10')
        .then(response => response.json())
        .then(usuario => {
            console.log("\n=== EJERCICIO 03 ===");
            console.log('Name:', usuario.name);
            console.log('Username:', usuario.username);
            console.log('Email:', usuario.email);
        })
        .catch(error => {
            console.error('Error al cargar el usuario:', error);
        });
}

/*4. Usar fetch con async/await para leer datos de una API: crear una función cargarUsuario(), consultar
al API jsonplaceholder sobre el usuario 10, convertir la respuesta a JSON y mostrar en consola el name,
username y el email del usuario*/

async function cargarUsuarioAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/10');
        const usuario = await response.json();

        console.log("\n=== EJERCICIO 04 ===");
        console.log('Name:', usuario.name);
        console.log('Username:', usuario.username);
        console.log('Email:', usuario.email);
    } catch (error) {
        console.error('Error al cargar el usuario:', error);
    }
}

/*5. Manipular arreglos devueltos por AJAX: consultar todos los usuarios del API jsonplaceholder,
mostrar en consola sólo los nombres de los usuarios. Usa un forEach para mostrarlos. Usar fetch con promesas*/

function cargarUsuariosPromesas() {
    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(data => {
            console.log("\n=== EJERCICIO 05 ===");
            data.forEach(user => {
                console.log("Name:", user.name);
            });
        })
        .catch(error => {
            console.error('Error al cargar nombres de usuarios:', error);
        })
}


/*6. Manipular arreglos devueltos por AJAX: consultar todos los usuarios del API jsonplaceholder, mostrar
en consola sólo los nombres de los usuarios. Usa un forEach para mostrarlos. Usar fetch con async/await*/

async function cargarUsuariosAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        const data = await response.json();
        
        console.log("\n=== EJERCICIO 06 ===");
            data.forEach(user => {
                console.log("Name:", user.name);
            });
        
    } catch (error) {
        console.error('Error al cargar nombres de usuarios:', error);
    }
}

/*7. Actualizar el DOM usando datos obtenidos por AJAX: crear un botón en HTML que diga: "Cargar usuario",
cuando el usuario haga click en el botón obtener los datos del usuario 2, mostrar en el HTML nombre, email,
ciudad (address.city). Usar fetch con promesas*/

const btnExc07 = document.getElementById("btnExc07");

btnExc07.addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/users/2')
        .then(response => response.json())
        .then(usuario => {
            const resultadoAnterior = document.getElementById("resultado");
            if (resultadoAnterior) {
                resultadoAnterior.remove();
            }

            resultado = document.createElement("div");
            resultado.id = "resultado";
            document.getElementById("Ejercicio07").appendChild(resultado);
            
            resultado.innerHTML = `
                <div>
                    <strong>Nombre:</strong> ${usuario.name}
                </div>
                <div>
                    <strong>Email:</strong> ${usuario.email}
                </div>
                <div>
                    <strong>Ciudad:</strong> ${usuario.address.city}
                </div>
            `;
        })
        .catch(error => {
            console.error('Error al cargar el usuario:', error);
        });
});

/*8. Actualizar el DOM usando datos obtenidos por AJAX: crear un botón en HTML que diga: "Cargar usuario",
cuando el usuariohaga click en el botón obtener los datos del usuario 2, mostrar en el HTML nombre, email,
ciudad (address.city). Usar fetch con async/await*/

const btnExc08 = document.getElementById("btnExc08");

btnExc08.addEventListener("click", () => {
    async function obtenerDatos() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
            const usuario = await response.json();
            
            const resultadoAnterior = document.getElementById("resultadoExc08");

            if (resultadoAnterior) {
            resultadoAnterior.remove();
            }

            resultado = document.createElement("div");
            resultado.id = "resultadoExc08";
            document.getElementById("Ejercicio08").appendChild(resultado);
            
            resultado.innerHTML = `
                <div>
                    <strong>Nombre:</strong> ${usuario.name}
                </div>
                <div>
                    <strong>Email:</strong> ${usuario.email}
                </div>
                <div>
                    <strong>Ciudad:</strong> ${usuario.address.city}
                </div>
            `;
        } catch (error) {
            console.error('Error al cargar el usuario:', error);
        }
    }

    obtenerDatos();
});

//*11. Crear la expresión regular para validar una contraseña fuerte Regla: mínimo 8 caracteres,
// 1 mayúscula, 1 minúscula, 1 número*/

const regex1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

console.log("\n=== EJERCICIO 11 ===");
console.log(regex1.test("Abc12345")); // true - cumple todos los requisitos
console.log(regex1.test("Abc123")); // false - menos de 8 caracteres

/*12. Crear la expresión regular para encontrar direcciones URL seguras en un texto*/

const regex2 = /https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?/g;

console.log("\n=== EJERCICIO 12 ===");
const texto2 = "Visita https://www.google.com y https://github.com/user/repo para más info";
console.log(texto2.match(regex2)); 

/*13. Crear la expresión regular para quitar etiquetas HTML <h1>Hola</h1> -> Hola*/

const regex3 = /<[^>]*>/g;

console.log("\n=== EJERCICIO 13 ===");
const html = "<h1>Hola</h1>";
console.log(html.replace(regex3, "")); 

/*14. Crear la expresión regular para dividir un texto en oraciones "Hola. Cómo estás? Bien!"
-> ["Hola", " Cómo estás", " Bien"]*/

const regex4 = /[.?!]/;

console.log("\n=== EJERCICIO 14 ===");
const texto4 = "Hola. Cómo estás? Bien!";
console.log(texto4.split(regex4)); 

/*15. Crear la expresión regular para detectar formato de fecha (dd/mm/yyyy)*/

const regex5 = /\b\d{2}\/\d{2}\/\d{4}\b/g;

console.log("\n=== EJERCICIO 15 ===");
const texto5 = "Las fechas son 25/12/2024 y 01/01/2025 para los eventos.";
console.log(texto5.match(regex5));