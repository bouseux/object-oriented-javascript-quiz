// JavaScript Document
/********************************************************************
Follow instructions to add new modules, sets and questions
1) To add a new module simply put in the following line
    nextmodule('Module Name') 
   'Module Name' will be displayed in module selection 

2) To add a new set simply put in the following line
    nextset('Set Name') 
   'Module Name' will be displayed in module selection 

3) to add a question observe the following pattern
   addproblem("your question",position of the correct answer,"answer1","answer2","answer3" etc)
  
*********************************************************************/


var quiz1 = new quiz('Sample Name')
globalquiz = quiz1

nextmodule('m1')
nextset('set 1')
addproblem("How old are you",'a',"10 to 13 years","14 to 20 years","21 to 25 years")
addproblem("your birth month?",'c',"Jan","mar","may","jul","dec")
addproblem("How old are you",'b',"10 to 13 years","14 to 20 years","21 to 25 years")

nextset('set 2')
addproblem("How old are you",'a',"10 to 13 years","14 to 20 years","21 to 25 years")
addproblem("your birth month?",'a',"Jan","mar","may","jul","dec")
addproblem("How old are you",'b',"10 to 13 years","14 to 20 years","21 to 25 years")
addproblem("your birth month?",'d',"Jan","mar","may","jul","dec")

nextmodule('m2')
nextset('set 1')
addproblem("How old are you",'b',"10 to 13 years","14 to 20 years","21 to 25 years")
addproblem("your birth month?",'b',"Jan","mar","may","jul","dec")
addproblem("How old are you",'a',"10 to 13 years","14 to 20 years","21 to 25 years")
addproblem("your birth month?",'c',"Jan","mar","may","jul","dec")

nextset('set 2')
addproblem("How old are you",'c',"10 to 13 years","14 to 20 years","21 to 25 years")
addproblem("your birth month?",'b',"Jan","mar","may","jul","dec")
addproblem("How old are you",'b',"10 to 13 years","14 to 20 years","21 to 25 years")
addproblem("your birth month?",'d',"Jan","mar","may","jul","dec")