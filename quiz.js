/* *************************************************************************
GLOBALS AND UTILITY FUNCTIONS
Purpose of utility functions are to allow a novice user to add questions to questions.js
without having to worry about naming objects
**************************************************************************/
var globalmodule
var globalset
var globalquiz //really not necessary but put for completeness
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function nextmodule(name)
{
globalquiz.add(name)
}

function nextset(name)
{
globalmodule.add(name)
}

function addproblem(question,answer)
{
globalset.add(arguments)	
}


/* *************************************************************************
MAIN QUIZ class

**************************************************************************/
function quiz(name)
{
	this.right = 0
	this.wrong = 0
	this.name = name
	this.modules = new Array()
}

quiz.prototype.add = function(name)
{
	this.modules.push(new module(name))	
	globalmodule = eval(this.modules[this.modules.length-1])
}

quiz.prototype.get = function(module)
{
	return this.modules[module]	
}

quiz.prototype.total = function()
{
	return this.modules.length	
}
/* ***********************************************************************
MODULE CLASS
**************************************************************************/

function module(name)
{
	this.name = name
	this.sets = new Array()
}

module.prototype.add = function(name)
{
	this.sets.push(new set(name))
	globalset = eval(this.sets[this.sets.length-1])
}

module.prototype.get = function(set)
{
	return this.sets[set]	
}

module.prototype.total = function()
{
	return this.sets.length	
}

/*******************************************************************
SET CLASS

********************************************************************/
function set(name)
{
	this.name = name
	this.rightanswers = 0
	this.problems = new Array()
}

set.prototype.add = function(args)
{
	this.problems.push(new problem(args))	
}

set.prototype.get = function(problem)
{
	return this.problems[problem]	
}

set.prototype.total = function()
{
	return this.problems.length	
}

/*******************************************************************
SETUP QUESTIONS AND ANSWERS
PROBLEM CLASS

********************************************************************/

function problem(args)
{
	this.choices = new Array()	
	this.selection = -1 //have not chosen an answer
	this.question = args[0]
	this.answer = chars.indexOf(args[1])

    for (var i = 2; i < args.length; i++) 
    {
		this.choices.push(args[i])
    }
}

problem.prototype.totalchoices = function()
{
	return this.choices.length	
}
problem.prototype.getchoice = function(choice)
{
	return this.choices[choice]	
}


