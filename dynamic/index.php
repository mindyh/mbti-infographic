<!DOCTYPE html> 
<html xmlns="http://www.w3.org/1999/xhtml">

<head> 
	<!--fb-->
	<meta property="fb:admins" content="1560511928" />
	
	<!-- fonts-->
	<link href='http://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
	
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<title>Understand Yourself | the MBTI</title> 
	<link rel="stylesheet" href="style.php" />
	<script src="jquery-1.8.3.min.js"></script>
</head> 

<body>
	<!--setting up fb-->
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>


	<div id="title_wrapper">
		<div id="title" class="clearfix">
			<h1>Understand Yourself</h1>
			<p>The Myers-Briggs Personality Type</p>
			<a href="#" id="credits_link">Credits</a>
			<div class="fb-like" data-href="http://stanford.edu/~mindyh/cgi-bin/pwr/" data-send="false" data-layout="button_count" data-width="450" data-show-faces="false" data-font="tahoma"></div>
		</div><!--title-->
	</div><!--title-wrapper-->
	
	<div id="credits" class="hidden">
		<h3>Mindy Huang </h3>
		mindyh@stanford.edu <br/ >
		Made for PWR2SLA <br />
		<br />
		<p class='bold'>Sources:</p>
		<ul>
			<li>http://www.wsc.edu/advising_services/career_planning/</li>
			<li>Berens, Linda V. and Dario Nardi. Understanding Yourself and Others: An Introduction to the Personality Type Code. Huntington Beach, CA: Telos Publications, 2004. Book.</li>
			<li>http://cdn4.ngin.com/attachments/photo/0851/3230/MBTI_chart_3_large.jpg</li>
			<li>http://psychology-tools.com/myers-briggs-type-indicator/</li>
			<li>http://www.cognitiveprocesses.com/</li>
			<li>http://faculty.ccbcmd.edu/~hzlotow1/</li>
		</ul>
	</div><!--credits-->
	
	<div id="body" class="clearfix">			
		<? include 'pref.php' ?>
		<? include 'functions.php'?>
		<? include 'personal.php'?>
	</div><!--body-->
	
	<script type="text/javascript" src="js.js"></script>
	<script type="text/javascript" src="jstest.js"></script>
</body>

</html>