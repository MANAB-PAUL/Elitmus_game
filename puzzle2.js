correct_answer = 'something'
flag = false;
document.getElementById('button').onclick = function() {
    for(i=0;i<5;++i){
        let answer = prompt("read the clue and give your answer","give your answer")
        if(answer == correct_answer)
        {
            alert('You have given correct answer, click ok to move on')
            window.location.replace("level2.html");
            flag = true
            break;
        }
        else
        {
            attempts_left = 5 - i - 1;
            alert('Read the clue properly you have only '+attempts_left+ ' attempts left')
        }
    }
}​;

if(!flag) window.location.replace('gameOver.html');