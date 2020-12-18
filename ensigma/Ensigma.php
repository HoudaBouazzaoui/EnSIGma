<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EnSIGma</title>
  <!-- Bootstrap core CSS -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!--external css-->
  <link href="lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="lib/gritter/css/jquery.gritter.css" />
  <!-- Custom styles for this template -->
  <link href="css/style.css" rel="stylesheet">
  <link href="css/style-responsive.css" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin="" />
  <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    crossorigin=""></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.2/howler.js"></script>

  <style>

  div.panier {
 position: absolute;
 right: 0;
 width: 19%;
 height: 85%;
 border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
 border:dashed 5px hsla(0, 95%, 35%, 1);
}

#map {
 position: absolute;
 right: 20%;
 width: 64%;
 height:85%;
 border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
 border:dashed 5px hsla(0, 95%, 35%, 1);
}

    a.logo span {
    color: darkorange;
  }
  ul.top-menu > li > .logout {
	color: #f2f2f2;
	font-size: 12px;
	border-radius: 4px;
	-webkit-border-radius: 4px;
	border: 1px solid darkorange; !important;
	padding: 5px 15px;
	margin-right: 15px;
	background: darkorange;;
	margin-top: 15px;
}
  </style>


</head>

<body>
  <section id="container">
    <!-- **********************************************************************************************************************************************************
        TOP BAR CONTENT
        *********************************************************************************************************************************************************** -->
    <!--header start-->
    <header class="header black-bg">
      <div class="sidebar-toggle-box">
        <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
      </div>
      <!--logo start-->
      <a href="index.html" class="logo"><b>En<span>SIG</span>ma</b></a>
      <!--logo end-->

      <div class="top-menu">
        <ul class="nav pull-right top-menu">
          <li><a class="logout" href="../index.php">Retour</a></li>
        </ul>
      </div>
    </header>
    <!--header end-->
    <!-- **********************************************************************************************************************************************************
        MAIN SIDEBAR MENU
        *********************************************************************************************************************************************************** -->
    <!--sidebar start-->
    <aside>
      <div id="sidebar" class="nav-collapse ">
        <!-- sidebar menu start-->
        <ul class="sidebar-menu" id="nav-accordion">
        <!-- image ! -->
          <p class="centered"><img src="images\joueur.jpg" class="img-circle" width="80"></p>
        <!-- on affiche le pseudo -->
          <?php
          $pseudo=$_POST["pseudo"];
          echo '<h5 class="centered" style="font-style: italic; font-size: 20px;color: darkorange;font-family:cursive;">Saluut <span id="pseudo"> '.$pseudo.' </span> !!!</h5>';
          ?>
          <!-- chrono-score -->
          <div class="centered" style="margin-top: 50px;">
            <span id='p1'>00</span> :
            <span id='p2'>00</span>

          </div>
          <div class="centered" style="margin-top: 20px;color: rgba(23, 137, 202, 0.815);font-style:italic ;font-family: 'Lucida Sans';font-weight: bold;font-size: 15px;" >
            <p id="bravo" style="color: darkorange;font-family:cursive;"></p>
            <span id="time" style="color: darkorange;font-family:cursive;">
            </span>
          </div>
          <style media="screen">
              #p1,#p2{
          display: inline-block;
          margin: auto;
          text-decoration: none ;
          text-align: center;
          width: 44px;
          height: 44px;
          line-height: 44px;
          border-radius: 50%;
          color: #ffffff;
          font-size: 23px;
          background: linear-gradient(45deg,#8916d6,#602d81);
          box-shadow: 0 8px 25px #bf5fc045,0 8px 25px #ff00ec50 ;
          transition: all ease 0.1s;
  }
              </style>

    </aside>
    <!--sidebar end-->
    <!-- **********************************************************************************************************************************************************
        MAIN CONTENT
        *********************************************************************************************************************************************************** -->
    <!--main content start-->
    <section id="main-content">
      <section class="wrapper"></section>

               <div class="row">
                 <div id="map"></div>
                   <div class="panier">
                   <br>
                 <diV>
                    <span id="mdp"></span>
                    <span id="tel"></span>
                    <span id="qrcode"></span>
                 </div>
                   <br>
                   <div>
                     <span id="position"></span>
                     <span id="contact"></span>
                     <span id="voiture"></span>
                   </div>
                   <br>
                   <div>
                     <span id="bateau"></span>
                     <span id="ticket"></span>
                     <span id="train"></span>
                   </div>
                   <br>
                   <div>
                     <span id="poste_office"></span>
                     <span id="archive"></span>
                     <span id="sheet"></span>
                   </div>
                   <div style="height:60px">
                     <span id="mall"></span>
                     <span id="stock"></span>
                     <span id="cutter"></span>
                    </div>
                   <br>
                   <div>
                     <span id="box"></span>
                     <span id="code"></span>
                     <span id="coffre"></span>
                   </div>
                 </div>

              </div>



    </section>

    <!--main content end-->

  </section>
  <!-- js placed at the end of the document so the pages load faster -->



  <script src="lib/jquery/jquery.min.js"></script>

  <script src="lib/bootstrap/js/bootstrap.min.js"></script>
  <script class="include" type="text/javascript" src="lib/jquery.dcjqaccordion.2.7.js"></script>
  <script src="lib/jquery.scrollTo.min.js"></script>
  <script src="lib/jquery.nicescroll.js" type="text/javascript"></script>
  <script src="lib/jquery.sparkline.js"></script>
  <!--common script for all pages-->
  <script src="lib/common-scripts.js"></script>
  <script type="text/javascript" src="lib/gritter/js/jquery.gritter.js"></script>
  <script type="text/javascript" src="lib/gritter-conf.js"></script>
  <script type="text/javascript" src="js/Enigme.js"></script>
  <!--script for this page-->


  <script type="text/javascript">
    $(document).ready(function () {
      var unique_id = $.gritter.add({
        // (string | mandatory) the heading of the notification
        title: 'Welcome to EnSIGma!',
        // (string | mandatory) the text inside the notification
        text: "T'es au Venezuella ! résoud l'énigme pour rejoindre Anne et Ricardo les agents secrets qui ont remarqué qu'il y a des gens à l'air suspicieux autour de vous.",
        // (bool | optional) if you want it to fade out on its own or just sit there
        sticky: false,
        // (int | optional) the time you want it to be alive for before fading out
        time: 8000,
        // (string | optional) the class name you want to apply to that specific message
        class_name: 'my-sticky-class'
      });

      return false;
    });
  </script>

</body>

</html>
