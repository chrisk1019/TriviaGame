let score = 0;
let currentQuestion = 0;
let questions = [
    {
        title: "Who loves sandwiches?"
        answers: ['Ross','Chandler','Joey','Phoebe','Rachel']
        correct:2
    },
    {
        title: "Who's dad was in a Vegas show?"
        answers: ['Ross','Chandler','Joey','Phoebe','Rachel']
        correct:1
    },
    {
        title: "Who was an obese child?"
        answers: ['Ross','Chandler','Monica','Joey','Phoebe','Rachel']
        correct:2
    },
    {
        title: "Who was homeless for a time?"
        answers: ['Ross','Chandler','Joey','Phoebe','Rachel']
        correct:3
    },
];

function showQuestion(){
    let question = questions{currentQuestion}
    $('.quiz h2').text (question.title);
    $('.quiz ul').html('')
    for (var i=0; i<questions.answers.length; i++){
        
    }
}

$(document).ready(function()){
    $('.start a').click(function(e{
        e.preventDefault();
        $('.start').hide();
        $('.quiz').show();
        showQuestion();
    }))


});



function showQuestion(){
    let question = questions(currentQuestion);
    $('.quiz h2').text(question.title)
    $('.quiz ul').html('');
    for (var i=0; i<questions.answers.length; i++){
        $('.quiz ul').append('
            <li id="${i}">${questions.answers[i]</li>');
    
    }
    
}
function checkAnswer(){

}
function showSummary(){

}