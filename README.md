# Web-Dev
Web dev projects
<!DOCTYPE html>
<html lang>
<head>
	<title> Violet Impact Designs</title>
  <meta name ="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="styles.css">
  <link rel="stylesheet" type="text/css" href="scrolleffect.css">
<!--	<script src="JS/jquery-3.5.1.min.js"></script> -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="main.js"></script>
  <script src="scrolleffectjs.js"></script>
  <meta charset="UTF-8">
</head>

<body>

  <div class="wrapper">

<header>
	<img alt ="Violet Impact Designs logo" width= "200" src="images/violetimpact-designs-logo.jpg">
	<h1 class ="violet">Violet Impact Designs</h1>

</header>

<nav>

<ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="projects.html">About Us</a></li>
        </ul>
</nav>

<main>



    <div class="intro-block">
      <p>Welcome to my project page!</p>
    </div>

    <div class="content-block">
      <div class="text-block">
        <h2>Posters</h2>
        <p>We have a list of posters to choose from.</p>
      </div>
      <img class="img1" src="images/Supershot-thumbnail.png" alt="">
    </div>
  
  <div class="content-block2">
      <div class="text-block2">
        <h2>Illustrations</h2>
        <p>Our ideas don't stop here. We can hand draw you any illustration to your desire.</p>
      </div>
      <img class="img2" src="images/Tide-Flow.png" alt="The Tide">
    </div>

    <div class="content-block3">
      <div class="text-block3">
        <h2>Post Cards</h2>
        <p>Want to express how you feel? We have a list of worthwhile post cards for your spouse, friends, and even family members!</p>
      </div>
      <img class="img3" src="images/Valentines-day-greeting.jpg" alt="Valentines Day">
    </div>

    <div class="content-block4">
      <div class="text-block4">
        <h2>Logos</h2>
        <p>In need of a design that describes your bussiness? We have a list of logos for you to choose at your delight!</p>
      </div>
      <img class="img4" src="images/Violetimpact-website-identity-logo.png" alt="Logo">
    </div>
  

</main>
<script>
function displayDate(){
  var year = new Date().getFullYear();
  var date = `&copy; VioletImpact ${year}. All Rights Reserved.`;
  document.getElementById("foot").innerHTML = date;
}
</script>



<footer> 
<!--

		<p>Credits to my other site:</p> <a href="https://violetimpact.com/">Violet Impact</a>
-->

        <div>
            <button id="copyright" type="button" onclick="displayDate()">Copyright</button>
            <p id = "foot"></p>

            <a href="index.html">Home</a> | <a href="projects.html">About Us</a>
            </a> | <a href="designs.html">See our Catalog!</a> | <a href="slideshows.html">View our Slideshows!</a>
        </div>
		</footer>
    <script src="animatedtext.js"></script>

  </div>
  </body>
</html>
