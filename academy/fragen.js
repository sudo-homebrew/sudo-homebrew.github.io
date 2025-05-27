document.addEventListener("DOMContentLoaded", function() {
    // Call shuffle function on page load
    shuffleQuestions();
    nextQuery();
  });

function areAllElementsEqual(arr) {
    if (arr.length === 0) {
        return true;
    }

    const referenceValue = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== referenceValue) {
            return false;
        }
    }

    if (referenceValue == 8 || referenceValue == 0){
        return true;
    }
    else{
        return false;
    }
}

  function findTwoLargestWithIndex(arr) {
    var largest = { index: -1, value: Number.MIN_SAFE_INTEGER };
    var secondLargest = { index: -1, value: Number.MIN_SAFE_INTEGER };

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest.value) {
            secondLargest = largest;
            largest = { index: i, value: arr[i] };
        } else if (arr[i] > secondLargest.value && arr[i] <= largest.value) {
            secondLargest = { index: i, value: arr[i] };
        }
    }

    return [largest, secondLargest];
}
  
  function shuffleQuestions(){
    for(var i = questionStringArray.length - 1; i > 0 ; i--){
        var j = Math.floor(Math.random() * (i + 1));
        [questionStringArray[i], questionStringArray[j]] = [questionStringArray[j], questionStringArray[i]];
    }

    // for(var i = 0 ; i < questionQueryArray.length; i++){
    //     questionQueryArray[i].innerHTML = String(i + 1) + '. ' + questionStringArray[i][0];
    // }
}


function nextQuery(){
    var fragen = document.querySelector('.query');
    var pageNum = document.querySelector('.cur_page');

    if (curNum > questionNum) {
        resultPage();
        return;
    }

    fragen.innerHTML = questionStringArray[curNum - 1][0];
    pageNum.innerHTML = String(curNum) + '/' + String(questionNum);
}

function yesListener(){
    selectionHistory[curNum - 1] = true;
    curNum++;
    nextQuery();
}

function noListener(){
    selectionHistory[curNum - 1] = false;
    curNum++;
    nextQuery();
}

function backListener(){
    if(curNum == 1){
        window.location.href = 'ready.html';
    }
    else{
        curNum--;
    }
    nextQuery();
}

function resultPage(){
    var ans = Array(typeNum).fill(0)
    for(var i = 0; i < questionNum; i++){
        if(selectionHistory[i]){
            ans[parseInt(questionStringArray[i][1] - 1)]++;
        }
    }

    var isJoke = areAllElementsEqual(ans);

    topTwoResult = findTwoLargestWithIndex(ans);
    localStorage.setItem("topTwoResult", JSON.stringify(topTwoResult));
    localStorage.setItem("isJoke", JSON.stringify(isJoke));
    window.location.href = 'result.html';
}

const questionNum = 72;
const typeValues = ['P', 'B', 'A', 'R', 'T', 'F', 'O', 'S', 'H'];
const typeNum = typeValues.length;
var curNum = 1;
var selectionHistory = Array(questionNum).fill(false);


var questionQueryArray = [];
for(var i = 1; i <= questionNum; i++){
    var queryName = '.question_' + String(i);
    questionQueryArray.push(document.querySelector(queryName));
}

var questionStringArray = [['계획을 잘 세우고 그 계획을 꼭 지키려고 노력하는 편이다.', 1],
['정리 정돈을 잘하는 편이다.', 1],
['나에게 할당된 분량 이상으로 공부하려고 하는 편이다.', 1],
['문제가 안 풀리면 화가 나서 더 파고드는 편이다.', 1],
['다른 사람이 나에게 충고나 간섭하는 것이 싫다.', 1],
['나든 친구들이든 약속 시간 어기는 것을 싫어한다.', 1],
['화가 나거나 질투를 느낄 때 그것을 표현하지 않는 편이다.', 1],
['“성실하고 모범생이다.”라는 말을 듣는 편이다.', 1],
['집보다는 친구들과 도서관이나 독서실에서 공부하는 것이 더 좋다.', 2],
['내성적이라는 말을 듣는 편이다.', 2],
['다른 사람들 일에 관심이 많고 돕는 것을 좋아한다.', 2],
['친구가 많고 친구 사귀는 것이 좋고 친구와 함께 있을 때 즐겁다.', 2],
['시험을 망쳤을 때 부모님께 어떻게 말씀드려야 할지 고민스럽다.', 2],
['친구들과 영화를 볼 때 내가 보고 싶은 것보다는 친구가 보고 싶은 걸 보는 편이다.', 2],
['혼자서 옷을 사러 가지 않는 편이다.', 2],
['어려운 문제를 적절한 속도로 잘 해결해 나가는 편이다.', 2],
['시험 후 체점해 보면 틀린문제 중 아는 것들이 많은 편이다.', 3],
['진도를 빨리 나가면서 공부하는 편이다.', 3],
['약속 시간에 조금씩 늦는 경우가 많은 편이다.', 3],
['짧은 시간에 많은 일을 처리하는 것이 좋다.', 3],
['나는 지금 장래 희망이 있으며 전문직이다.', 3],
['내 친구들은 나보다 공부를 잘하거나 학교에서 인기가 많은 편이다.', 3],
['수학은 선행학습 진도가 친구들보다 빠른 편이다.', 3],
['친구들과 싸움을 가끔 하는 편이다.', 3],
['음악이나 그림을 잘 그리는 편이다.', 4],
['친구들이 가지고 있지 않은 옷을 입고 싶고 그런 책으로 공부하는 것이 좋다.', 4],
['나는 내가 혼자이며 외롭다고 느낄 때가 많고 가까운 사람들과 함께 있을 때도 그런 편이다.', 4],
['“시험 답안지에 밀려서 마킹하면 어쩌나?” “친구들이 나를 왕따 시키면 어떡하지?” 라는 걱정을 하는 편이다.', 4],
['나는 남 앞에 서는 것도, 남의 의견에 따르는 것도 별로 좋아하지 않는다.', 4],
['나만의 방법으로 사람들의 관심과 인정을 받아 성공하는 걸 원하는 편이다.', 4],
['반장이나 부반장을 하고 싶은 생각이 별로 없다.', 4],
['친구들이 우리 집에 와서 함께 노는 것을 좋아하지 않는 편이다.', 4],
['친구들과 있는것 보다 혼자서 무언가 관심이 있는 것을 추구하거나 즐겨하는 것을 좋아한다.', 5],
['나는 과목별 점수 차이가 큰 편이다.', 5],
['나는 내 고민을 다른 사람에게 얘기하는 것을 좋아하지 않는다.', 5],
['사람들이 많은 곳에서 부끄러움을 많이 느끼는 편이다.', 5],
['나는 혼자서 시간을 보내는 것이 더 편하다.', 5],
['나는 가끔 공부에 집중하느라 밥도 안 먹고 늦게까지 공부한 경험이 있다.', 5],
['나는 친구들과 함께 수행평가나 모둠활동 하는 것을 좋아하지 않는다.', 5],
['나는 말을 많이 하지는 않지만 질문은 많이 하는 편이다.', 5],
['“만약에 ∼하면 어떡하지? ”라는 상상을 많이 하는 편이다.', 6],
['어떤 일을 과감하게 결정하지 못하는 편이다.', 6],
['내가 부족하다고 생각하지만 다른 사람들을 부러워하거나 질투하지는 않는다.', 6],
['친구에게 화가 나도 겉으로 잘 표현하지 않는다.', 6],
['“시험을 못 보면 어떡하지?” 라는 걱정을 많이 하는 편이다.', 6],
['정해지지 않은 즉흥적인 일을 하게 되면 힘들다.', 6],
['공부할 때 친구들보다 진도 나가는 속도가 느린 편이다.', 6],
['나는 종종 어려운 수학 문제 한 문제를 풀기 위해 오랜 시간 고민한다.', 6],
['나는 계획을 꼼꼼하게 세우는 편이지만 그 계획을 실천하기가 참 어렵다.', 7],
['주위에 학원이나 독서실이 생기면 꼭 그곳에 가보는 편이다.', 7],
['시험을 못 봐도 별로 기분이 나쁘지 않으며 나는 매우 긍정적인 편이다.', 7],
['나는 위험한 모험을 하는 것이 멋있다고 생각한다.', 7],
['내가 좋아하는 일은 열심히 할 수 있지만 내가 싫어하는 일은 안 하는 편이다.', 7],
['나는 행복한 사람이다.', 7],
['“공부도 잘하고 성격도 좋다” 또는 “공부를 못해도 별로 걱정스럽지 않다”라는 평가를 받는 편이다.', 7],
['나는 갑자기 성적이 엄청나게 오르거나 떨어져 본 경험이 있다.', 7],
['무슨 일이든 계획을 세우고 움직이는 것을 좋아하며 계획을 지키지 못하는 것을 용납하지 않는 편이다.', 8],
['친구들과 조별 활동을 하면 항상 내가 조장을 맡고 나도 리더의 역할 하는 것을 좋아한다.', 8],
['자기주장이 강하다는 얘기를 자주 듣고 내 생각을 잘 이야기하는 편이다.', 8],
['내 친구 중에 내 의견을 존중하지 않는 친구는 없다.', 8],
['공부할 때 혼자서 할 때는 잘 되지만 누가 공부하라고 시키면 하기가 싫다.', 8],
['나의 문제점을 스스로 극복할 자신이 있지만 나에게 어떤 문제가 있는지는 잘 모르겠다.', 8],
['나는 마음만 먹으면 무조건 성적을 올릴 자신이 있다.', 8],
['내가 풀 수 있는 문제는 훑어보고 넘어가는 편이다.', 8],
['결정한 일을 바로 실천하지 않고 질질 끌고 있는 편이다.', 9],
['계획을 세우고 실천하지 못하는 것은 나 나름의 이유가 있기 때문이다.', 9],
['나는 사람들에게 부탁하지 않는 편이며 부탁받는 것도 싫다.', 9],
['식당에서 메뉴를 선택하기가 어렵다. 이것저것이 눈에 들어온다.', 9],
['나는 명예나 지위에 관심이 없고 그저 평범하고 무난하게 조용히 살고 싶다.', 9],
['나는 왜 그렇게 죽어라 공부해야 하는지 이해가 안된다.', 9],
['나는 싸움을 잘 중재하며 다른 사람과 싸워본 적이 별로 없다.', 9],
['내가 모르는 문제 중에 별로 중요하지 않은 문제들은 답안지를 훑어보고 넘어가는 편이다.', 9]];
