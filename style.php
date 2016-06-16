<?php header("Content-type: text/css; charset: UTF-8"); ?>  

<? 
	$blue = '#66C2FF';
	$red = '#ff6767';
	$green = '#4ab94a';
	$yellow = '#fcd757';
	$light_red = '#FFA8A8';
	$faded_red =  '#FFDCDC';
	$light_blue = '#99E6E6';
	$light_green = '#E6F9E6';
	
	$prefWidth = '21%';
	$functionWidth = '60%';
	$personalWidth = '17%';
	
	$functionsPadding = '10px 20px';
?>

/* clearfix */
/* clearfix to fix floats */		
.clearfix:after {
	visibility: hidden;
	display: block;
	font-size: 0;
	content: " ";
	clear: both;
	height: 0;
}

/* my stuff */
body {
	font-family: 'Open Sans'; font-weight: 300;
	margin: 0;
	color: #333;
}

h1, h2, h3, h4 {
	font-family: 'Montserrat'; font-weight: 700;
}

h1, h2, h3 {
	margin: 0 0 5px 0; 
}

p {
	margin: 0;
}

li {
	list-style-type: none;
}

a:link,
a:visited,
a:hover,
a:active  {
	text-decoration: none;
	color: <?=$red ?>;
}

div#title_wrapper {
	width: 100%;
	background-color: <?=$blue ?>;  
	min-width: 1740px;
}

div#title {
	margin: 0 auto 20px auto;
	
	width: 1700px;
	color: white;
	padding: 20px;
	font-size: 125%;
}

#body {	
	margin: 0 auto;
	padding: 20px;
	width: 1700px;
}

#title h1, #title  h2, #title  p{
	display: inline;
	font-family: 'Montserrat';
} 

#title  p {
	display: inline;
	font-family: 'Roboto';
	font-size: 175%;
	margin-left: 20px;
} 

#title  .fb-like {
	display: inline;
	position: relative;
	float: right;
	margin: 0 20px;
	top: 8px;
	//width: 70px;
} 

.subheader {
	padding: 10px 20px;
	color: white;
	width: 100%;
	margin-bottom: 20px;
	font-size: 170%;
	font-weight: 400px;
}

.subbody {	
	margin: 20px;
}

.desc {
	margin-bottom: 20px;
}

#preferences {
	float: left;
	width: <?=$prefWidth ?>; 
}

#preferences .subheader {
	background-color: <?=$yellow ?>;
}

#preferences .subheader:after{
	float: right;
	position: relative;
	top: -10px;
	right: 20px;
	content: url('arrow1.png');
}

#preferences .subbody {
	width: 75%;
}

#preferences .desc p {
	margin-bottom: 10px;
}

div#choose h3, div#choose h4 , div#choose p  {
	text-align: center;
	margin: 0;
}

div#choose h3, div#choose h4 {
	margin: 0 0 5px 0;
}

div#choose > div {
	margin: 20px 0;
	text-align: center;
}

<? $button_height = '50px'; ?>

/* buttons */
div.button {
	width: <?= $button_height?>;
	height: <?= $button_height?>;
	box-shadow: 0 2px 3px #ccc;
	border-radius: 8px;
	font-size: 125%;
	cursor: pointer;
}
div.button.selected {
	box-shadow: inset 0 1px 10px #333;
}

div#choose > div > div:first-child {
	float: left;
}

div#choose > div > div:nth-child(2) {
	float: right;
}

div#choose > div > div:nth-child(3) {
	width:100%;
	height: <?= $button_height?>;
}

div#choose > div > div > span { 
	position: relative;
	top: 25%;
	cursor: pointer;
}

/* color buttons */
div#energy > div:first-child, div#energy > div:nth-child(2){
	background-color: <?=$yellow ?>;
}

div#information > div:first-child, div#information > div:nth-child(2) {
	background-color: <?=$blue ?>;
}

div#decisions > div:first-child, div#decisions > div:nth-child(2) {
	background-color: <?=$red ?>;
}

div#organize > div:first-child, div#organize > div:nth-child(2) {
	background-color: <?=$green ?>;
}

/* pref descriptions */
div.pref-desc {
	font-family: 'Roboto';
	background-color: #eee;
	padding: 10px;
	margin-top: 10px;
	//width: 240px;
}
 
div.pref-desc h4 {
	font-family: 'Roboto'; font-weight: 700;
}

div.pref-desc  > div:first-child{
	float: left;
	width: 45%;
}

div.pref-desc  > div:last-child{
	float: right;
	width: 45%;
}

div#submit {
	background-color: <?= $red?>;
	padding: 30px 20px;
	box-shadow: 0 2px 3px #ccc;
	border-radius: 8px;
	opacity: 0.5;
	cursor: pointer;
}

div#submit:active {
	position: relative;
	top: 2px;
}

div#submit span{
	color: white;
	font-size: 150%;
	font-family: 'Roboto'; 
	font-weight: 400;
	text-shadow: -1px -1px #333;
}

/* 8 functions theory */
#functions .desc {
	border-bottom: 1px solid #ddd;
	padding: 10px 0;
}

div#theory {
	border-top: 1px solid #ddd;
	padding: 20px;
	margin-top: 10px;
}

#theory p {
	margin-bottom: 5px;
}

#theory > ul {
	margin-bottom: 30px;
}

#theory > ul > li {
	margin-bottom: 10px;
}

#theory > ul > li  li{
	margin-bottom: 5px;
}

#theory > ul > li  li .bold{
	color: #555;
}

#theory #perceive {
	font-weight: 700;
	color: <?= $red ?>;
}

#theory #judge {
	font-weight: 700;
	color: <?= $blue ?>;
}

/* functions */
#functions {
	width: <?=$functionWidth ?>;
	padding: <?=functionsPadding ?>;
	float: left;
}

#functions .subheader {
	background-color: <?=$red ?>;
}

#functions .subheader:after{
	float: right;
	position: relative;
	top: -10px;
	right: 20px;
	content: url('arrow2.png');
}

#functions .subbody {
	width: 90%;
}

#functions .title {
	//height: 70px;
	margin:  0 0 10px 0;
}

#functions #animate {
	height: 70px;
}

#functions #first_thought {
	position: relative;
	top: 50px;
	left: 290px;
	margin:0;
}

#functions #second_thought{
	position: relative;
	left: 550px;
	top: 50px;
	margin:0;
	opacity: 0.75;
	
}
#functions #third_thought{
	position: relative;
	left: 670px;
	top: 200px;
	margin:0;
	opacity: 0.5;
	
}

<? $func_height = '70px';
	$func_width = '350px'; 
 ?>
 
.function {
	width: <?=$func_height ?>;
	height: <?=$func_height ?>;
	border-radius: 5px;
	border: 5px solid black;
	background-color: white;
	text-align: center;
	float: left;
	display: inline;
	position: absolute;
	cursor: pointer;
}
 
.function > span{
	position: relative;
	top: 20%;
	font-size: 200%;
	color: #555;
	z-index:50;
}

.function.sensing.selected {
	background-color: <?=$light_red ?>;
	opacity: 1.0!important;
}

.function.judging.selected {
	background-color: <?=$light_blue ?>;
	opacity: 1.0!important;
}

#diagram_wrapper {
	background-image: url('head.png');
	background-position: 52% 57%;
	background-repeat: no-repeat;
	background-size: 15%;
	height: 486px;
	width:100%;
	position: relative;
	opacity: 0.25;
} 

#diagram {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 3%;
}

#function_desc_center {
	position: absolute;
	text-align: center;
	top: 35%;
	left: 36%;
	height: 150px;
	width: 200px;
	border: 5px solid black;
	border-radius: 10px;
	padding: 25px;
}

#function_desc_center > h4 {
	margin: 0 0 20px 0;
}

#function_desc_center > .summary {
	display: block;
	margin: 0 0 10px 0;
}

#function_desc_center > .example {
	margin: 0;
	font-style: italic; 
}

.sensing {
	border-color: <?=$red ?>;
}

#function_desc_center.sensing {
	background-color: <?= $light_red ?>;
	border-color: <?=$red ?>;
}

.judging {
	border-color: <?=$blue ?> ;
}

#function_desc_center.judging {
	background-color: <?=$light_blue ?>;
	border-color: <?=$blue ?>;
}


/*personal*/
#personal {
	display: block;
	float: left;
	width: <?=$personalWidth ?>;
}

#personal .subheader {
	background-color: <?=$green ?>;
}

#personal .subheader:after {
	float: right;
	position: relative;
	top: -10px;
	right: -50px;
	content: url('arrow3.png');
}

#personal li {
	list-style-type: disc;
	margin-bottom: 10px;
}

#head h3, #head p{
	display: inline;
}

#strengths {
}

#weaknesses {
}

#careers {
}

#careers_link {
	margin-bottom: 10px;
	display: inline;
}

/* credits */
#credits_link {
	color: white;
	float: right;
	margin-top: 10px;
}

#credits {
	position: absolute;
	background-color: #ccc;
	color: white;
	padding: 20px;
	right: 50px;
	top: 85px;
	z-index: 200;
	width: 600px;
}

#credits ul {
//	margin:0;
	width: 100%;
}

#credits li {
	margin-bottom: 10px;
}

/* first times */
.subheader:after {
	height: 53px;
}


#preferences .subheader.first_time:after {
	content: url('arrow1-first.png');
}

#functions .subheader.first_time {
	background-color: <?= $faded_red ?>;
}

#functions .subheader.still_first_time:after {
	content: url('arrow2-first2.png');
}

#functions .subheader.first_time:after {
	content: url('arrow2-first1.png');
}

#functions .subbody.first_time {
	opacity: 0.25;
}

#personal .subheader.first_time {
	background-color: <?= $light_green?>;
}

#personal .subheader.first_time:after {
	content: url('arrow3-first.png');
}



/* overrides */
p.important {
	font-size: 115%;
}

.hidden {
	display: none;
}

#head .hidden {
	display: none;
}

.bold {
	font-weight: 700;
}

.italic{
	font-style: italic;
}

.fade {
	opacity: 0.75;
}

.twice_fade {
	opacity: 0.5;
}

.triple_fade {
	opacity: 0.25;
}

.inline {
	display: inline;
}
