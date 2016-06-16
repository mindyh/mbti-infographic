/* variables */
var first = true;
var second = false;

/* constants */
var NUM_FUNCTIONS = 8;
var NUM_TYPES = 16;

/* Arrays */
var descArr = [];
var processArr = [];
var functionNameArr = [];
var symbolArr = [];
var exampleArr = [];

var typeNameArr = [];
var typeFuncOrderArr = [];
var strengthsArr = [];
var weaknessesArr = [];
var careersArr = [];
var typeDescArr = [];

var functionArr = [];
var typeArr = [];
var locArr = [];

$(document).ready ( function() {
	populateArrs();
	populateTypeArr();
	populateFuncArr();

	//function calcLocation(centerX, centerY, radius, itemSize)
	var diagramPos = $("#diagram").position();
	var x = diagramPos.left + $("#diagram").width()/2.0;
	var y = diagramPos.top + $("#diagram").height()/2.0;
	var radius = 240;

	calcLocation(x ,y , radius, $(".function").width());
	placeFunctions();
});

/* preferences */
var numPrefSelected = "0";
var toggle = true;
/* toggle slideout pref info */
$("#choose>div").click( function() {
	if(toggle == false) {
		toggle = true;
		return;
	}
	
	if ( $(this).children('.pref-desc').css("display") == "none" ) {
		$(".pref-desc:visible").slideToggle(); 
		$(this).children('.pref-desc').slideToggle();
	}
});

/* select pref */
$(".button").click( function(){
	var clickedFunc = $(this);
	$(this).addClass('selected');
	$(this).siblings().removeClass('selected');
	
	if(numPrefSelected != 4) {
		if(!$(this).parent().hasClass('tag')) numPrefSelected++;
		$(this).parent().addClass('tag');
		
		 $("#choose>div").each( function (){
			 if( $(this).attr('id') == 'submit') return false;
			
			 if ( !$(this).hasClass("tag")) {
				toggle = false;
				$(".pref-desc:visible").slideToggle(); 
				 $(this).children('.pref-desc').slideToggle();
				 return false;	
			 }
		 });
	} 
	
	if(numPrefSelected == 4) $("#submit").css('opacity', 1.0);
});

/* calculate functions */
$("#submit").click( function() {
	if(numPrefSelected == 4) {
		if(first) {
			animate();
			$("#diagram_wrapper").css('background-image', 'none');
			first = false;
			second = true;
		} else {
			if(second) {
				$("#first_thought").fadeOut(300, 'swing');
				$("#second_thought").fadeOut(300, 'swing');
				$("#third_thought").fadeOut(300, 'swing');
			}
			reorderFunctions();
		}
		rewritePersonal();
	}
});

function animate() {
	$("#preferences .subheader").removeClass("first_time");
	$("#functions .subheader").removeClass("first_time");
	$("#functions .subbody").removeClass("first_time");
	
	/* let's say you see someone building a fence */
	$("#fence_building").fadeIn(300, 'swing');
	var deltaT = 1700;
	var diagramDelay = 1500;
	/* you first use */
	window.setTimeout(function (){ $("#first_thought").fadeIn(300, 'swing');}, 1000);
	window.setTimeout(function (){  
		$(".subbody").removeClass("first_time");
		$("#diagram_wrapper").animate({  
			opacity: 1.0,
		}, 1000 );
		reorderFunctions();}, diagramDelay);
	/* you then use */
	window.setTimeout(function (){ secondThought();}, diagramDelay+deltaT);
	/*etc */
	window.setTimeout(function (){ thirdThought();}, diagramDelay+ 2*deltaT);
	
	/* personal */
	window.setTimeout(function (){ 
		$("#personal .subbody").fadeIn(100, 'swing');
		$("#functions .subheader").removeClass("still_first_time");
		$("#personal .subheader").removeClass("first_time");
	}, diagramDelay+ 3*deltaT);
}

function secondThought() {
	$(".function").removeClass("selected");
	
	var auxFunc = getFuncByOrder(1);
	$("#" + auxFunc.symbol).addClass("selected");
	displayCenter(auxFunc.symbol);
	$("#second_thought").fadeIn(300, 'swing');
}

function thirdThought() {
	$(".function").removeClass("selected");
	var tertiaryFunc = getFuncByOrder(2);
	$("#" + tertiaryFunc.symbol).addClass("selected");
	displayCenter(tertiaryFunc.symbol);
	$("#third_thought").fadeIn(300, 'swing');
}

/* personal */
function rewritePersonal() {
	var currType = getType(calcTypeName());
	$("#head h3").html(currType.name+'s');
	$("#head p").removeClass("hidden");
	$("#head .desc span").html(currType.desc);
	
	$("#strengths ul").html(currType.strengths);
	
	$("#weaknesses ul").html(currType.weaknesses);
	
	$("#careers ul").html(currType.careers);
	
	$("#careers_link").removeClass("hidden");
	$("#careers_link").html('<a target="_blank" href="pdfs/'+currType.name.toLowerCase()+'.pdf">More information</a>');
	
}

function calcTypeName() {
	typeStr = "";
	$(".button").each( function() {
		if($(this).hasClass("selected"))
			typeStr += $(this).attr('id');
	});
	return typeStr;
}

/* function theory */
$("#learn_more").click( function() {
	if($("#theory").css('display') != 'none')
		$("#learn_more").html('&nbsp; Learn more &#9660;');
	else	
		$("#learn_more").html('&nbsp; Hide &#9650;');

	$("#theory").slideToggle();
});

/* click function */
$(".function").click( function() {
	displayCenter($(this).attr('id'));
	$(".function").removeClass("selected");
	$(this).addClass("selected");
});

/* functions */ 
function reorderFunctions() {
	if($("#function_desc_center").css("display") != "none") 
		$("#function_desc_center").fadeOut(300, 'swing');
	
	var currType = getType(calcTypeName());
	var numString = currType.funcOrder;
	
	for(var i = 0; i < NUM_FUNCTIONS; i++)
	{
		var index = parseInt(numString.charAt(i));
		functionArr[index].order = i;
		var funcID = "#"+functionArr[index].symbol;
		var funcOpacity = 1.0;
		
		/* set opacity */
		if (i > 1 && i < 4){
			funcOpacity = 0.75;
		}else if (i >= 4 && i < 6){
			funcOpacity = 0.50;
		} else if (i >=6 && i < 8) {
			funcOpacity = 0.50;
		}
		

		$(funcID).animate({ 
			left: locArr[i].x,
			top: locArr[i].y,
			opacity: funcOpacity,
		}, 1000 );
		
		$(funcID).removeClass("selected");
		if (i == 0) { 
			$(funcID).addClass("selected");
			displayCenter(functionArr[index].symbol);
		}
	}

	window.setTimeout(function(){$("#function_desc_center").fadeIn(300, 'swing');}, 200);	
}

/* function description */
function displayCenter(id) {
	currFunction = getFunction(id);
	$("#function_desc_center").removeClass("sensing");
	$("#function_desc_center").removeClass("judging");
	$("#function_desc_center").addClass(currFunction.process);
	$("#function_desc_center>h4").html(currFunction.name);
	$("#function_desc_center>.summary").html(currFunction.desc);
	$("#function_desc_center>.example").html('"'+currFunction.example+'"');
}

/* credits */
$("#credits_link").click( function () {
	$("#credits").toggleClass("hidden");
});


///////////////////////////////////////////////////////////////

/* order is 0-indexed */
function getFuncByOrder(order) {
	for (var i = 0; i < NUM_FUNCTIONS; i++)
		if(functionArr[i].order == order) return functionArr[i];
}

function getType(name)
{
	for(var i = 0; i < NUM_TYPES; i++) {
		if (typeArr[i].name == name){
			return typeArr[i];	
		}
	}
}

function getFunction (id) {
	for(i = 0; i < NUM_FUNCTIONS; i++)
	{
		if(functionArr[i].symbol == id) 
			return functionArr[i];
	}
}


function placeFunctions() {
	var i = 0;
	$("#diagram .function").each( function () {
		$(this).css('left', locArr[i].x + 'px'); 
        $(this).css('top', locArr[i].y  + 'px');  
		i++;
	});
}

function calcLocation(centerX, centerY, radius, itemSize) {
	var alpha = Math.PI * 2 / NUM_FUNCTIONS;
	for(i = 0; i < NUM_FUNCTIONS; i++) {
		locArr[i] = {};
		var theta = alpha * i - (2*alpha);
		locArr[i].x = centerX + Math.floor(Math.cos( theta ) * radius) - itemSize/2.0;  
		locArr[i].y = centerY + Math.floor(Math.sin( theta ) * radius) - itemSize/2.0; 
	}
}

function populateTypeArr() {
	for(var i = 0; i < NUM_TYPES; i++){
		typeArr[i] = {};
		typeArr[i].name = typeNameArr[i];
		typeArr[i].funcOrder = typeFuncOrderArr[i];
		typeArr[i].strengths = strengthsArr[i];
		typeArr[i].weaknesses = weaknessesArr[i];
		typeArr[i].careers = careersArr[i];	
		typeArr[i].desc = typeDescArr[i];
	}
}

function populateFuncArr() {
	for(var i = 0; i < NUM_TYPES; i++){
		functionArr[i] = {};
		functionArr[i].name = functionNameArr[i];
		functionArr[i].symbol = symbolArr[i];
		functionArr[i].process = processArr[i];
		functionArr[i].desc = descArr[i];
		functionArr[i].example = exampleArr[i];
		functionArr[i].order = i;
	}
}

function populateArrs() {
	/* function info */
	 symbolArr[0] = 'Se';
	 functionNameArr[0] = 'Extroverted Sensing';
	 descArr[0] = 'Experience the immediate situation';
	 exampleArr[0] = 'The fence is 6 ft tall, made of plywood, etc.';
	 processArr[0] = 'sensing';
	 
	 symbolArr[1] = 'Fi';
	 functionNameArr[1] = 'Introverted Feeling';
	 descArr[1] = 'Decide whether something is significant to you';
	 exampleArr[1] = 'I play ball a lot, the fence will be a problem';
	 processArr[1] = 'judging';
	 
	 symbolArr[2] = 'Te';
	 functionNameArr[2] = 'Extroverted Thinking';
	 descArr[2] = 'Decide whether something is works or not';
	 exampleArr[2] = 'The fence won\'t keep out burglars';
	 processArr[2] = 'judging';
	 
	 symbolArr[3] = 'Ni';
	 functionNameArr[3] = 'Introverted iNtuition';
	 descArr[3] = 'Synthesizing ideas to extract a pattern ';
	 exampleArr[3] = 'They are protective of their property';
	 processArr[3] = 'sensing';
	 
	 symbolArr[4] = 'Si';
	 functionNameArr[4] = 'Introverted Sensing';
	 descArr[4] = 'Remembering past experiences';
	 exampleArr[4] = 'I once fell off a fence...';
	 processArr[4] = 'sensing';
	 
	 symbolArr[5] = 'Fe';
	 functionNameArr[5] = 'Extroverted Feeling';
	 descArr[5] = 'Decide if something is acceptable to others';
	 exampleArr[5] = 'Kids that play catch might lose their ball';
	 processArr[5] = 'judging';
	 
	 symbolArr[6] = 'Ti';
	 functionNameArr[6] = 'Introverted Thinking';
	 descArr[6] = 'Evaluating data and fitting it into existing models ';
	 exampleArr[6] = 'The fence is taller than fences usually are';
	 processArr[6] = 'judging';
	 
	 symbolArr[7] = 'Ne';
	 functionNameArr[7] = 'Extroverted iNtuition';
	 descArr[7] = 'Interpreting situations, what things may imply';
	 exampleArr[7] = 'They want to keep people off their yard';
	 processArr[7] = 'sensing';	 
	 
	 
	/* type info */
	typeNameArr[0] = 'ESFP';
	typeFuncOrderArr[0] = '01234567';
	weaknessesArr[0] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	strengthsArr[0] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	careersArr[0] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	typeDescArr[0] = 'lorem ipsum';
	
	typeNameArr[1] =  'ISFP';
	typeFuncOrderArr[1] = '10325476';
	weaknessesArr[1] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	strengthsArr[1] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	careersArr[1] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	typeDescArr[1] = 'lorem ipsum';
	
	typeNameArr[2] =  'ENFP'; 
	typeFuncOrderArr[2] = '71243560';
	weaknessesArr[2] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	strengthsArr[2] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	careersArr[2] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	typeDescArr[2] = 'lorem ipsum';
	
	typeNameArr[3] =  'INFP'; 
	typeFuncOrderArr[3] = '17425306';
	weaknessesArr[3] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	strengthsArr[3] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	careersArr[3] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	typeDescArr[3] = 'lorem ipsum';
	
	typeNameArr[4] =  'ESTP'; 
	typeFuncOrderArr[4] = '06534217';
	weaknessesArr[4] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	strengthsArr[4] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	careersArr[4] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	typeDescArr[4] = 'lorem ipsum';
	
	typeNameArr[5] =  'ISTP'; 
	typeFuncOrderArr[5] = '60352471';	
	weaknessesArr[5] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	strengthsArr[5] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	careersArr[5] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	typeDescArr[5] = 'lorem ipsum';
	
	typeNameArr[6] =  'ENTP'; 
	typeFuncOrderArr[6] = '76543210';
	weaknessesArr[6] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	strengthsArr[6] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	careersArr[6] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';	
	typeDescArr[6] = 'lorem ipsum';
	
	typeNameArr[7] =  'INTP'; 
	typeFuncOrderArr[7] = '67452301';	
	weaknessesArr[7] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	strengthsArr[7] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	careersArr[7] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	typeDescArr[7] = 'lorem ipsum';
	
	typeNameArr[8] =  'ESFJ'; 
	typeFuncOrderArr[8] = '54761032';	
	weaknessesArr[8] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	strengthsArr[8] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	careersArr[8] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	typeDescArr[8] = 'lorem ipsum';
	
	typeNameArr[9] =  'ISFJ'; 
	typeFuncOrderArr[9] = '45670123';	
	weaknessesArr[9] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	strengthsArr[9] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	careersArr[9] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';	
	typeDescArr[9] = 'lorem ipsum';
	
	typeNameArr[10] =  'ENFJ'; 
	typeFuncOrderArr[10] = '53061742';
	weaknessesArr[10] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	strengthsArr[10] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	careersArr[10] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';	
	typeDescArr[10] = 'lorem ipsum';
	
	typeNameArr[11] =  'INFJ'; 
	typeFuncOrderArr[11] = '35607124';	
	weaknessesArr[11] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	strengthsArr[11] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	careersArr[11] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	typeDescArr[11] = 'lorem ipsum';
	
	typeNameArr[12] =  'ESTJ'; 
	typeFuncOrderArr[12] = '24716035';	
	weaknessesArr[12] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	strengthsArr[12] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	careersArr[12] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	typeDescArr[12] = 'lorem ipsum';
	
	typeNameArr[13] =  'ISTJ'; 
	typeFuncOrderArr[13] = '42170653';	
	weaknessesArr[13] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	strengthsArr[13] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	careersArr[13] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	typeDescArr[13] = 'lorem ipsum';
	
	typeNameArr[14] =  'ENTJ'; 
	typeFuncOrderArr[14] = '23016745';
	weaknessesArr[14] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	strengthsArr[14] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	careersArr[14] = '<li>lorem ipsum</li><li>lorem ipsum</li><li>lorem ipsum</li>';
	typeDescArr[14] = 'lorem ipsum';
	
	typeNameArr[15] =  'INTJ'; 
	typeFuncOrderArr[15] = '32107654';
	weaknessesArr[15] = 
		'<li>loses interest after creative problem solving is over</li>\
		<li>difficulty expressing ideas</li>\
		<li>antagonistic under stress</li>\
		<li>judges without understanding completely</li>';
	strengthsArr[15] = 
		'<li>logical, strategic</li>\
		<li>knows the limits, pragmatic</li>\
		<li>good at seeing trends</li>\
		<li>likes optimizing</li>';
	careersArr[15] = 
		'<li>independent work</li>\
		<li>creative and intellectual challenges</li>\
		<li>command of their own projects</li>';
	typeDescArr[15] = 'competence';
};	
 