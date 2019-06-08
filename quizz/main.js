(function() {

function Question(question, answers, correct) { 
    this.question = question; 
    this.answers = answers; 
    this.correct = correct; 
} 

Question.prototype.displayQuestion = 
function()  { 
    console.log(this.question);  

    for(var i = 0; i < this.answers.length; i++) { 
        console.log(i + ': ', this.answers[i]); 
    }
} 

Question.prototype.checkAnswer = 
function(answer) { 
    if(answer === this.correct) { 
        console.log('Bingo! You\'re right! God bless ya!'); 
    } else { 
        console.log('Wrrrroooong.. Try again, buddy.'); 
    }
}

var q1 = new Question('Who is the father of Computer Science?', 
    ['Alan Turing', 
    'Charles Babbage', 
    'John von Neumann'], 0); 

var q2 = new Question('Which one is the first fully supported 64-bit OS?', 
    ['Mac', 
    'Linux', 
    'Windows XP'], 1); 

var q3 = new Question('In a coputer world, Trojan refers to..?', 
    ['Virus', 
    'Malware', 
    'Worm', 
    'Spyware'], 1); 

var q4 = new Question('What allows multiple programs to run on a computer?', 
    ['NIC', 
    'OS', 
    'API', 
    'GUI'], 1); 

var q5 = new Question('Everything physical in a computer is attached to the..?', 
    ['Hard Drive', 
    'CPU',
    'Memory', 
    'Motherboard'], 3); 

var q6 = new Question('Which computer program converts assembly languge to machine language?', 
    ['Interpreter', 
    'Compiler', 
    'Assembler', 
    'Comparator'], 2); 

var q7 = new Question('When was the World Wide Web invented?', 
    ['1974', 
    '1982', 
    '1991', 
    '1999'], 2); 

var q8 = new Question('Which protocol is used to received e-mail?', 
    ['SMTP', 
    'POP3', 
    'HTTP', 
    'FTP'], 1); 

var q9 = new Question('In which year \'@\' sign was first chosen for its use in e-mail address?', 
    ['1976', 
    '1980', 
    '1977',
    '1972'], 3); 

var q10 = new Question('Which protocol is used to send e-mail?', 
    ['HTTP', 
    'POP3', 
    'SMTP', 
    'SSH'], 2);  


// put all the objects into one array
var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]; 

// randomize
var number = Math.floor(Math.random() * questions.length);  

questions[number].displayQuestion();

//parseInt method will convert string to a number
var answer = parseInt(prompt('Hey, dude, guess the correct answer!')); 

questions[number].checkAnswer(answer); 

})(); 