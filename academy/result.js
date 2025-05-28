document.addEventListener("DOMContentLoaded", function() {
    printResult();
  });

function printResult(){
    var sortedAns = JSON.parse(localStorage.getItem("sortedAns"));
    var isJoke = JSON.parse(localStorage.getItem("isJoke"));
    document.querySelector('.result1').innerHTML = '제 1 유형 : ' + typeValues[sortedAns[0].index] + ' (' + String(sortedAns[0].value) + '/8점)';
    document.querySelector('.result2').innerHTML = '제 2 유형 : ' + typeValues[sortedAns[1].index] + ' (' + String(sortedAns[1].value) + '/8점)';
    document.querySelector('.result3').innerHTML = '제 3 유형 : ' + typeValues[sortedAns[2].index] + ' (' + String(sortedAns[2].value) + '/8점)';
    document.querySelector('.result4').innerHTML = '제 4 유형 : ' + typeValues[sortedAns[3].index] + ' (' + String(sortedAns[3].value) + '/8점)';
    document.querySelector('.result5').innerHTML = '제 5 유형 : ' + typeValues[sortedAns[4].index] + ' (' + String(sortedAns[4].value) + '/8점)';
    document.querySelector('.result6').innerHTML = '제 6 유형 : ' + typeValues[sortedAns[5].index] + ' (' + String(sortedAns[5].value) + '/8점)';
    document.querySelector('.result7').innerHTML = '제 7 유형 : ' + typeValues[sortedAns[6].index] + ' (' + String(sortedAns[6].value) + '/8점)';
    document.querySelector('.result8').innerHTML = '제 8 유형 : ' + typeValues[sortedAns[7].index] + ' (' + String(sortedAns[7].value) + '/8점)';
    document.querySelector('.result9').innerHTML = '제 9 유형 : ' + typeValues[sortedAns[8].index] + ' (' + String(sortedAns[8].value) + '/8점)';
    if(isJoke){
        document.querySelector('.result1').innerHTML = '장난으로 응하였습니다.';
        document.querySelector('.result2').innerHTML = '사형에 처합니다.';
    }
}

const typeValues = ['P', 'B', 'A', 'R', 'T', 'F', 'O', 'S', 'H'];
