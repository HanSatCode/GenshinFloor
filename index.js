var onlyFifthCount = 0;
var onlyFifthUpCount = 0;
var onlyFourthCount = 0;
var oneCount = 0;
var oneResult = [];
var tenCount = 0;
var tenResult = [];
var totalCount = 0;
var totalPay = 0;

var searchCount = 0;

var bgVideoList = ["bg"];
var thirdList = ["탄궁" , "신궁의 서약" , "까마귀깃 활" , "비취 오브" , "드래곤 슬레이어 영웅담" , "마도 서론" , "흑술창" , "훌륭한 대화수단" , "드래곤 블러드 소드" , "강철의 그림자" , "비천어검" , "여명신검" , "차가운 칼날"];
var fourthUpList = ["북두", "바바라", "향릉"];
var fourthList =  ["도리" , "콜레이", "쿠키 시노부" , "운근" , "시카노인 헤이조" , "쿠죠 사라" , "고로" , "사유" , "토마" , "연비" , "로자리아" , "신염" , "설탕" , "디오나" , "중운" , "노엘" , "베넷" , "피슬" , "응광"  , "행추" , "레이저" , "녹슨 활" , "제례활" , "절현" , "페보니우스 활" , "소심" , "제례의 악장" , "음유시인의 악장" , "페보니우스 비전" , "페보니우스 장창" , "용학살창" , "빗물 베기" , "제례 대검" , "시간의 검" , "페보니우스 대검" , "용의 포효" , "제례검" , "피리검" , "페보니우스 검"];
var fifthUpList = ["닐루"];
var fifthList = ["각청", "모나", "치치", "다이루크", "진", "타이나리"];
var fullList = [];
var fullListPlus = fullList.concat(thirdList, fourthUpList, fourthList, fifthUpList, fifthList);

function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
}
document.onkeyup = function(){
    oneGotcha();
}

// 5성확률 0.6%. 확률 50%. 체감상 80회 기원시 반드시 획득. 얻은적 없다면 그 다음 무조건 획득.
// 4성확률 5.1%. 확률 50%. 10회 기원시 반드시 획득. 얻은적 없다면 그 다음 무조건 획득.

function oneGotcha() {
    oneResult = [];

    if(onlyFifthCount==79) {
        var fifthRandom = Math.random();
        if (fifthRandom >= 0.5) {
            document.getElementById("gotchaResult").style.color = "#ffebb3";
            oneResult.push(randomItem(fifthUpList));
        }
        else {
            document.getElementById("gotchaResult").style.color = "#fff2cc";
            oneResult.push(randomItem(fifthList));
            onlyFifthUpCount = 1;
        }
        onlyFifthCount = 0;
    }

    else if (onlyFourthCount==9) {
        var fourthRandom = Math.random();
        if (fourthRandom >= 0.5) {
            document.getElementById("gotchaResult").style.color = "#d6b3ff";
            oneResult.push(randomItem(fourthUpList));
        }
        else{
            document.getElementById("gotchaResult").style.color = "#e2ccff";
            oneResult.push(randomItem(fourthList));
        }
        onlyFourthCount = 0;
        onlyFifthCount += 1;
    }

    else if(onlyFifthUpCount==1) {
        var fifthRandom = Math.random();
        if (fifthRandom >= 0.5) {
            document.getElementById("gotchaResult").style.color = "#ffebb3";
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
                    document.getElementById("gotchaResult").style.color = "#ffebb3";
                    oneResult.push(randomItem(fifthUpList));
                }
                else {
                    document.getElementById("gotchaResult").style.color = "#fff2cc";
                    oneResult.push(randomItem(fifthList));
                }
                onlyFifthCount = 0;
                onlyFourthCount += 1;
            }
    
            else if (oneRandom > 0.006 && oneRandom <= 0.051) {
                var fourthRandom = Math.random();
                if (fourthRandom >= 0.5) {
                    document.getElementById("gotchaResult").style.color = "#d6b3ff";
                    oneResult.push(randomItem(fourthUpList));
                }
                else{
                    document.getElementById("gotchaResult").style.color = "#e2ccff";
                    oneResult.push(randomItem(fourthList));
                }
                onlyFourthCount = 0;
                onlyFifthCount += 1;
            }
    
            else if (oneRandom > 0.051) {
                document.getElementById("gotchaResult").style.color = "#ccdeff";
                oneResult.push(randomItem(thirdList));
                onlyFifthCount += 1;
                onlyFourthCount += 1;
            }
        }
    }
    // totalCount += 1;
    totalPay += 160;
    document.getElementById("gotchaResult").innerText = oneResult;
    // document.getElementById("gotchaCount").innerText = totalCount+"회 도전";
    document.getElementById("gotchaPay").innerText = totalPay+"개의 원석 사용";
}

function searchGotcha(){
    var searchGotchaOn = prompt("어떤 캐릭터나 장비가 나올때까지 넘기고 싶으신가요?", "");

    if (searchGotchaOn == null || searchGotchaOn == '') {
        return 0;
    }

    else {
        var checkSearchGotchaOn = fullListPlus.includes(searchGotchaOn);
        if(checkSearchGotchaOn != false) {
            while(document.getElementById("gotchaResult").innerText != searchGotchaOn){
                oneGotcha()
            }
        }
        else {
            alert(`${searchGotchaOn}(은)는 데이터베이스에 등록되어 있지 않아요.\n입력 내용 중 틀린 부분이 없는지 다시 한번 확인해 주세요.`);
        }
    }
}

function resetGotcha(){
    if (confirm("정말 지금까지 진행했던 데이터를 삭제하시겠어요?") == true) {
        history.go(0);
    }
}
