/******************************************************************************* JavaScript Document

Interface functions responsible for displaying quiz elements and general flow of quiz

*********************************************************************************/


function displayset(module,set)
{
	getmodule = quiz1.get(module)
	getset = getmodule.get(set)
	globalset = getset
	
	//set subheader for set
	var sheader = document.getElementById('hl')
	headertext = getmodule.name + " - " + getset.name + ": Answer the following questions"
    sheader.childNodes[0].nodeValue = headertext
	
//	clear questions
	questionsdiv = document.getElementById('bodydiv')
	if(questionsdiv.childNodes)
	{
		for(var i = 0;i<questionsdiv.childNodes.length;i++)
		{
		questionsdiv.removeChild(questionsdiv.childNodes[i])		
		}
		
	}
	//write out questions and choices for current selected set
	totalproblems = getset.total()
	questionlist = document.createElement('OL')
	
	for(var i=0;i<totalproblems;i++)
	{
		currentproblem = getset.get(i)
		listitem = document.createElement('LI')
		questionbreak = document.createElement('BR')
		listquestion = document.createTextNode(currentproblem.question)
		
		//list choices for current problem
		choicelist = document.createElement('UL')
				
		uniqueid = uniquename(5)
		totalchoices = currentproblem.totalchoices()
		for(var x = 0;x < totalchoices;x++)
		{
			
			choiceitem = document.createElement('LI')	
			listradio = document.createElement('INPUT')
			listradio.setAttribute('type','radio')
			listradio.setAttribute('onClick','selectoption('+module+','+set+','+i+','+x+')')
			
			listradio.setAttribute('name',uniqueid)
			listradio.setAttribute('value',uniqueid)			
			choiceitemchar = document.createTextNode(chars.charAt(x) + ". ")
			choiceitemtext = document.createTextNode(currentproblem.getchoice(x))
			choiceitem.appendChild(listradio)
			choiceitem.appendChild(choiceitemchar)
			choiceitem.appendChild(choiceitemtext)
			choicelist.appendChild(choiceitem)
			
		}
		listitem.appendChild(listquestion)
		listitem.appendChild(choicelist)
		questionlist.appendChild(listitem)
		
	}
	questionsdiv.appendChild(questionlist) 
	iefix()
}

function selectoption(module,set,problem,roption)
{
	//alert(module +"/"+ set +"/"+ problem +"/"+ roption)
	getmodule = quiz1.get(module)
	getset = getmodule.get(set)
	getproblem = getset.get(problem)
	getproblem.selection = roption
}
function uniquename(length)
{
  
  name = "";
  for(x=0;x<length;x++)
  {
    i = Math.floor(Math.random() * 52);
    name += chars.charAt(i);
  }
  return name;
}
function displayresults()
{
	//alert(document.getElementById('bodydiv').innerHTML)
	var noanswer = new Array()
	globalset.rightanswers = 0
	for(var i = 0;i<globalset.total();i++)
	{
		getproblem = globalset.get(i)
		if(getproblem.selection == -1)
		{
			noanswer.push(i + 1)
		}
		if(getproblem.selection == getproblem.answer)
		{
		globalset.rightanswers++		
		}
	}
	switch(noanswer.length)
	{
		case 0 :
		percentage = Math.round(100 * (globalset.rightanswers/globalset.total()))
		//totalwrong =  (globalset.total() - globalset.rightanswers)
		var resultstring = globalmodule.name +' - '+ globalset.name + '\n\n'
		    resultstring+= 'Your Score is ' + percentage + '%'
			resultstring+= ' ('+ globalset.rightanswers+'/'+ globalset.total() +')\n\n'
			resultstring+= 'Question   Your Answer   Correct Answer  Result \n'
			for(var x=0;x<globalset.total();x++)
			{
				question = x+1
				getproblem = globalset.get(x)
				resultstring+='      '+ question + '               '
				resultstring+=chars.charAt(getproblem.selection) + '                        '
				resultstring+=chars.charAt(getproblem.answer) + '                     '
				resultstring+= (getproblem.selection == getproblem.answer)? 'o\n':'x\n'
			}
			
 		alert(resultstring);
		break;
		default :
		var noanswerstring =""
		for(var j=0;j<noanswer.length;j++)
		{
			noanswerstring += 'Question (' + noanswer[j] + ')\n'		
		}
		alert("The follwoing questions were not answered:\n\n" + noanswerstring)
	}
		
		
}
/*****************************************************************************
Function created to address issue with internet explorer after experiencing 
problems dynamically setting the name attribute of radio buttons. 
N.B. Other browsers don't need this.

******************************************************************************/
function iefix()
{
	if(document.all)
	{
		rawdata = document.getElementById('bodydiv').innerHTML
	    fixdata = rawdata.replace(/value/g,"name")
		document.getElementById('bodydiv').innerHTML = fixdata
	}
}