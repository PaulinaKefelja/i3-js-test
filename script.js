
function createQuestion(){
    var questionContainer = document.getElementById("questionContainer");
    var questionContent= document.createTextNode("Question 1"); 
    var question = document.createElement("H1");
    question.appendChild(questionContent);
    questionContainer.appendChild(question);    
}

function createAnswers() {
        for (var i=1; i<=8; i++){
            var checkbox = document.createElement('input');
           
            checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = i;
            checkbox.id = "id_" + i;
            
            
            var label = document.createElement('label');
            label.htmlFor = "answer_" + i;
            
            label.appendChild(document.createTextNode('Odgovor ' + i));
            
            questionContainer.appendChild(checkbox);
            questionContainer.appendChild(label);

            }  
        }

