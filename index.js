var count = 0;
var result = [];

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

function process() {
    result = [];
    for(count=0; count<10; count++) {
        var random = Math.random();

        if (random <= 0.006) {
            var fifthRandom = Math.random();
            if (fifthRandom >= 0.5) {
                result.push("★★★"+randomItem(fifthUpList)+"★★★");
            }
            else {
                result.push("☆☆☆"+randomItem(fifthList)+"☆☆☆");
            }
        }

        else if (random >= 0.006 && random <= 0.051) {
            var fourthRandom = Math.random();
            if (fourthRandom >= 0.5) {
                result.push(randomItem(fourthUpList));
            }
            else{
                result.push(randomItem(fourthList));
            }
        }

        else{
            result.push(randomItem(thirdList));
        }
    }

    document.getElementById("result").innerText = result;
}