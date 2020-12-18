<?php
// connect to database
$conn = new mysqli('localhost:3307', 'root', 'root', 'ensigma');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql ='SELECT pseudo,score FROM joueurs ORDER BY score LIMIT 3'; // Ceci est nôtre requête sql en tant que ressource
$result = mysqli_query($conn, $sql);

// Fetch all
$a=mysqli_fetch_all($result, MYSQLI_ASSOC);
$pseudos=[];
$scores=[];
foreach($a as $row){
    //echo $row['score'] . '<br/>';
    //echo $row['pseudo'] . '<br/>';
    $pseudos[]=$row['pseudo'];
	$scores[]=$row['score'];
}
//echo $pseudos[0];
mysqli_close($conn);
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<style>
		.team:hover .cover .overlay {
			background: rgba(2, 0, 85, 0.9);
			opacity: 1;}
		.intro-table-hover {
	-webkit-transition: background-image 0.3s ease, background-position 0.3s;
	transition: background-image 0.3s ease, background-position 0.3s;
	background-image: url('img/table-2.png');
}
	</style>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>ENSIGMA: Les énigmes autour du monde </title>
	<!-- Favicons (created with http://realfavicongenerator.net/)-->
	<link rel="apple-touch-icon" sizes="76x76" href="img/favicons/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="img/favicons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="img/favicons/favicon-16x16.png">
	<link rel="manifest" href="img/favicons/site.webmanifest">
	<link rel="mask-icon" href="img/favicons/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
	<!-- Normalize -->
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<!-- Bootstrap -->
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<!-- Owl -->
	<link rel="stylesheet" type="text/css" href="css/owl.css">
	<!-- Animate.css -->
	<link rel="stylesheet" type="text/css" href="css/animate.css">
	<!-- Font Awesome -->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.1.0/css/font-awesome.min.css">
	<!-- Elegant Icons -->
	<link rel="stylesheet" type="text/css" href="fonts/eleganticons/et-icons.css">
	<!-- Main style -->
	<link rel="stylesheet" type="text/css" href="css/cardio.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.2/howler.js"></script>
</head>

<body onload="myFunction()">
<script>
function myFunction() {
var sound = new Howl({
      src: ['./audio/Low-Chances.mp3'],
      autoplay: true,
      loop: false,
      volume: 0.5,
      onend: function() {
      }
  });}
</script>
	<div class="preloader">
		<img src="img/loader.gif" alt="Preloader image">
	</div>
	<nav class="navbar">
		<div class="container">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#"><img src="img\ensigma.png"  data-active-url="img\ensigma.png" alt=""></a>
			</div>
			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-right main-nav">
					<li><a href="#intro">Intro</a></li>
					<li><a href="#team">Top Players</a></li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
	</nav>
	<header id="intro">
		<div class="container">
			<div class="table">
				<div class="header-text">
					<div class="row">
						<div class="col-md-12 text-center">
							<h3 class="light white" style="font-weight: bolder; font-size:60px;font-family:cursive;">ENSIGMA</h3>
							<hr>
							<h1 class="white typed" style="font-size:40px;font-family:cursive;color: darkorange;">Ensigma est un jeu d'escape game géographique !! Résouds les énigmes en trouvant les objets qui sont sur une carte web..
							Chaque objet trouvé doit être récupéré en appuant sur une touche clavier.
							Le jeu s'arrête lorsque tu arrives à récupérer tous les objets qui sont sur la carte.</h1>
							<span class="typed-cursor"><img src="img/tresor.png"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<section>
		<div class="cut cut-top"></div>
		<div class="container">
			<div class="row intro-tables">
				<div class="col-md-12 text-center">
					<div class="intro-table intro-table-hover" style="height:550px;width:550px ;border-radius:10%;">
						<h5 class="white heading hide-hover" style="font-weight: bolder; font-size:50px;font-family:cursive;font-style: italic;">Enigme</h5>
						<h6 class="white heading hide-hover" style=" font-size:25px;font-family:cursive;">T'es au Venezuella ! résoud l'énigme pour rejoindre Anne et Ricardo les agents secrets qui ont remarqué qu'il y a des gens à l'air suspicieux autour de vous .Une fois ensemble une autre mission vous attends!!</h6>
						<div class="bottom">
							<h4 class="white heading small-heading no-margin regular" style="font-family:cursive;">VENEZUELLA</h4>
							<a href="#" data-toggle="modal" data-target="#modal1" class="btn btn-white-fill expand text-center" style="font-family:cursive;color: darkorange;font-weight: bolder;">Jouer</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="team" class="section gray-bg">
		<div class="container">
			<div class="row title text-center">
				<h2 class="margin-top" style="font-weight: bolder; font-size:60px;font-family:cursive;color: darkorange;">Top Players</h2>
				<h4 class="light muted" style="font-family:cursive;">Decouvrez les meilleurs scores !</h4>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div class="team text-center">
						<div class="cover" style="background:url('img/team/team-cover1.png'); background-size:cover;">
							<div class="overlay text-center">
								<h3 class="white" style="font-weight: bold;font-size:60px;">1</h3>
							</div>
						</div>
						<img src="img/team/team1.jpg" alt="Team Image" class="avatar">
						<div class="title">
							<?php
							echo '<h4>'.$pseudos[0].'</h4>';
							?>
						</div>
						<?php
						echo '<span class="btn btn-blue-fill ripple" style="cursor: auto;">'.$scores[0].'</span>'?>
					</div>
				</div>
				<div class="col-md-4">
					<div class="team text-center">
						<div class="cover" style="background:url('img/team/team-cover2.png'); background-size:cover;">
							<div class="overlay text-center">
								<h3 class="white" style="font-weight: bold;font-size:60px;">2</h3>
							</div>
						</div>
						<img src="img/team/team1.jpg" alt="Team Image" class="avatar">
						<div class="title">
							<?php
							echo '<h4>'.$pseudos[1].'</h4>';
							?>
						</div>
						<?php
						echo '<span class="btn btn-blue-fill ripple" style="cursor: auto;">'.$scores[1].'</span>'?>
					</div>
				</div>
				<div class="col-md-4">
					<div class="team text-center">
						<div class="cover" style="background:url('img/team/team-cover3.png'); background-size:cover;">
							<div class="overlay text-center">
								<h3 class="white" style="font-weight: bold;font-size:60px;">3</h3>
							</div>
						</div>
						<img src="img/team/team1.jpg" alt="Team Image" class="avatar">
						<div class="title">
							<?php
							echo '<h4>'.$pseudos[2].'</h4>';
							?>
						</div>
						<?php
						echo '<span class="btn btn-blue-fill ripple" style="cursor: auto;">'.$scores[2].'</span>'?>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content modal-popup">
				<a href="#" class="close-link"><i class="icon_close_alt2"></i></a>
				<h3 class="white">EnSIGma</h3>
				<form action="ensigma/Ensigma.php" method="POST" class="popup-form">
					<input id="pseudo" type="text" name="pseudo"class="form-control form-white" placeholder="Entrer votre Pseudo">
					<input type="submit" value="envoyer" class="btn btn-submit">
				</form>


			</div>
		</div>
	</div>
	<div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content modal-popup">
				<a href="#" class="close-link"><i class="icon_close_alt2"></i></a>
				<h3 class="white">ENSIGMA</h3>
				<form action="ensigma/ensigmaTest.php" method="POST" class="popup-form">
					<input id="pseudo" type="text" name="pseudo"class="form-control form-white" placeholder="Entrer votre Pseudo">
					<input type="submit" value="JOUER" class="btn btn-submit">
				</form>


			</div>
		</div>
	</div>
	<!-- Holder for mobile navigation -->
	<div class="mobile-nav">
		<ul>
		</ul>
		<a href="#" class="close-link"><i class="arrow_up"></i></a>
	</div>
	<!-- Scripts -->
	<script src="js/jquery-1.11.1.min.js"></script>
	<script src="js/owl.carousel.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/wow.min.js"></script>
	<script src="js/typewriter.js"></script>
	<script src="js/jquery.onepagenav.js"></script>
	<script src="js/main.js"></script>
</body>

</html>
