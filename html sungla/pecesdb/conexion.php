<?php
// Datos de conexión
$servidor = "localhost"; // porque estás trabajando localmente
$usuario = "root";       // usuario predeterminado de MySQL en XAMPP o WAMP
$contrasena = "";        // generalmente root no tiene contraseña por defecto
$baseDeDatos = "pecesbd";

// Crear conexión
$conn = new mysqli($servidor, $usuario, $contrasena, $baseDeDatos);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
} else {
    echo "Conexión exitosa a la base de datos pecesbd";
}
?>
