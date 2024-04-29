<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["firstname"]) && isset($_POST["lastname"]) && isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["university"])) {
        
        $firstname = $_POST["firstname"];
        $lastname = $_POST["lastname"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $university = $_POST["university"];

      
        $servername = "localhost";
        $username = "votre_nom_utilisateur";
        $password_db = "votre_mot_de_passe";
        $dbname = "votre_base_de_données";

      
        $conn = new mysqli($servername, $username, $password_db, $dbname);

      
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        
        $sql = "INSERT INTO users (firstname, lastname, email, password, university) VALUES ('$firstname', '$lastname', '$email', '$password', '$university')";

        if ($conn->query($sql) === TRUE) {
            echo "Inscription réussie!";
        } else {
            echo "Erreur: " . $sql . "<br>" . $conn->error;
        }

        
        $conn->close();
    } else {
        echo "Tous les champs doivent être remplis.";
    }
}
?>
