document.addEventListener("DOMContentLoaded", function() {
    printResult();
  });

function printResult(){
    var topTwoResult = JSON.parse(localStorage.getItem("topTwoResult"));
    var isJoke = JSON.parse(localStorage.getItem("isJoke"));
    document.querySelector('.result1').innerHTML = '제 1 유형 : ' + typeValues[topTwoResult[0].index] + ' (' + String(topTwoResult[0].value) + '/8점)';
    document.querySelector('.result2').innerHTML = '제 2 유형 : ' + typeValues[topTwoResult[1].index] + ' (' + String(topTwoResult[1].value) + '/8점)';
    if(isJoke){
        document.querySelector('.result1').innerHTML = '장난으로 응하였습니다.';
        document.querySelector('.result2').innerHTML = '사형에 처합니다.';
    }
}

const typeValues = ['P', 'B', 'A', 'R', 'T', 'F', 'O', 'S', 'H'];