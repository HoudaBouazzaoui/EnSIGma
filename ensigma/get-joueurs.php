<?php
$res=json_decode(file_get_contents('php://input'), true);
$pseudo=$res["pseudo"];
$score=$res["score"];
$serveur = "localhost:3307";
    $dbname = "ensigma";
    $user = "root";
    $pass = "root";
    try{
        //On se connecte à la BDD
        $dbco = new PDO("mysql:host=$serveur;dbname=$dbname",$user,$pass);
        $dbco->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //On insère les données reçues
        $sth = $dbco->prepare("
            INSERT INTO joueurs(pseudo, score)
            VALUES(:pseudo, :score)");
        $sth->bindParam(':pseudo',$pseudo);
        $sth->bindParam(':score',$score);
        $sth->execute();

        //On renvoie l'utilisateur vers la page de remerciement
        header("Location:ensigma.php");
    }
    catch(PDOException $e){
        echo 'Impossible de traiter les données. Erreur : '.$e->getMessage();
    }
?>
