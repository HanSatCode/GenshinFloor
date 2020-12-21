var onlyFifthCount = 0;
var onlyFifthUpCount = 0;
var oneCount = 0;
var oneResult = [];
var tenCount = 0;
var tenResult = [];
var totalCount = 0;
var totalPay = 0;

var searchCount = 0;

var thirdList = ["탄궁", "신궁의 서약", "까마귀깃 활", "비취 오브", "드래곤 슬레이어 영웅담", "마도 서론", "흑술창", "훌륭한 대화수단", "드래곤 블러드 소드", "강철의 그림자", "비천어검", "여명신검", "차가운 칼날"];
var fourthUpList = ["신염", "증운", "레이저"];
var fourthList =  ["설탕", "노엘", "베넷", "피슬", "응광", "행추", "북두", "향릉", "바바라", "녹슨 활", "제례활", "절현", "페보니우스 활", "소심", "제례의 악장", "음유시인의 악장", "페보니우스 비전", "페보니우스 장창", "용학살창", "빗물 베기", "제례 대검", "시간의 검", "페보니우스 대검", "용의 포효", "제례검", "피리검", "페보니우스 검"];
var fifthUpList = ["종려"];
var fifthList = ["각청", "모나", "치치", "다이루크", "진"];

function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
}

// 5성확률 0.6%. 종려확률 50%. 90회 기원시 반드시 획득. 얻은적 없다면 그다음 무조건.
// 4성확률 5.1%. 신염 증운 레이저 확률 50%. 10회기원시 반드시 획득. 얻은적 없다면 그다음 무조건.

function oneGotcha() {
    oneResult = [];

    if(onlyFifthCount==89) {
        var fifthRandom = Math.random();
        if (fifthRandom >= 0.5) {
            document.getElementById("gotchaResult").style.color = "#ffc375";
            oneResult.push(randomItem(fifthUpList));
        }
        else {
            document.getElementById("gotchaResult").style.color = "#ffe075";
            oneResult.push(randomItem(fifthList));
            onlyFifthUpCount = 1;
        }
        onlyFifthCount = 0;
    }

    else if(onlyFifthUpCount==1) {
        var fifthRandom = Math.random();
        if (fifthRandom >= 0.5) {
            document.getElementById("gotchaResult").style.color = "#ffc375";
            oneResult.push(randomItem(fifthUpList));
        }
        onlyFifthCount = 0;
        onlyFifthUpCount = 0;
    }

    else {
        for(oneCount=0; oneCount<1; oneCount++) {
            var oneRandom = Math.random();
    
            if (oneRandom <= 0.006) {
                var fifthRandom = Math.random();
                if (fifthRandom >= 0.5) {
                    document.getElementById("gotchaResult").style.color = "#ffc375";
                    oneResult.push(randomItem(fifthUpList));
                    onlyFifthCount = 0;
                }
                else {
                    document.getElementById("gotchaResult").style.color = "#ffe075";
                    oneResult.push(randomItem(fifthList));
                    onlyFifthCount = 0;
                }
            }
    
            else if (oneRandom > 0.006 && oneRandom <= 0.051) {
                var fourthRandom = Math.random();
                if (fourthRandom >= 0.5) {
                    document.getElementById("gotchaResult").style.color = "#c050ff";
                    oneResult.push(randomItem(fourthUpList));
                    onlyFifthCount += 1;
                }
                else{
                    document.getElementById("gotchaResult").style.color = "#f775ff";
                    oneResult.push(randomItem(fourthList));
                    onlyFifthCount += 1;
                }
            }
    
            else if (oneRandom > 0.051) {
                document.getElementById("gotchaResult").style.color = "#75c3ff";
                oneResult.push(randomItem(thirdList));
                onlyFifthCount += 1;
            }
        }
    }
    totalCount += 1;
    totalPay += 160;
    document.getElementById("gotchaResult").innerText = oneResult;
    document.getElementById("gotchaCount").innerText = totalCount+"회 도전";
    document.getElementById("gotchaPay").innerText = totalPay+"개의 원석 사용";
}


```function tenGotcha() {
    tenResult = [];
    for(tenCount=0; tenCount<10; tenCount++) {
        var tenRandom = Math.random();

        if (tenRandom <= 0.006) {
            var fifthRandom = Math.random();
            if (fifthRandom >= 0.5) {
                tenResult.push(randomItem(fifthUpList));
            }
            else {
                tenResult.push(randomItem(fifthList));
            }
        }

        else if (tenRandom >= 0.006 && tenRandom <= 0.051) {
            var fourthRandom = Math.random();
            if (fourthRandom >= 0.5) {
                tenResult.push(randomItem(fourthUpList));
            }
            else{
                tenResult.push(randomItem(fourthList));
            }
        }

        else{
            tenResult.push(randomItem(thirdList));
        }
    }
    totalCount += 10;
    document.getElementById("gotchaResult").innerText = tenResult;
    document.getElementById("gotchaCount").innerText = totalCount;
}```

function keqingGotcha(){
    oneGotcha();
    for(searchCount; searchCount++;) {
        if(document.getElementById("gotchaResult").innerText == "각청"){
            break;
        }
        else {
            oneGotcha();
        }
    }  
}

function monaGotcha(){
    oneGotcha();
    for(searchCount; searchCount++;) {
        if(document.getElementById("gotchaResult").innerText == "모나"){
            break;
        }
        else {
            oneGotcha();
        }
    }  
}

function zhongilGotcha(){
    oneGotcha();
    for(searchCount; searchCount++;) {
        if(document.getElementById("gotchaResult").innerText == "종려"){
            break;
        }
        else {
            oneGotcha();
        }
    }  
}

function qiqiGotcha(){
    oneGotcha();
    for(searchCount; searchCount++;) {
        if(document.getElementById("gotchaResult").innerText == "치치"){
            break;
        }
        else {
            oneGotcha();
        }
    }  
}

function dilucGotcha(){
    oneGotcha();
    for(searchCount; searchCount++;) {
        if(document.getElementById("gotchaResult").innerText == "다이루크"){
            break;
        }
        else {
            oneGotcha();
        }
    }  
}

function jinGotcha(){
    oneGotcha();
    for(searchCount; searchCount++;) {
        if(document.getElementById("gotchaResult").innerText == "진"){
            break;
        }
        else {
            oneGotcha();
        }
    }  
}

function searchGotcha(){
    alert("조금만 기다려 자연어는 맞는데 구현이 힘들다");
}