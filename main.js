var step = 0;   // 전역변수로 더보기 1,2를 호출할지 접기를 호출할지 판단
function Show(){    //세계 코로나 현황표의 더보기 기능 구현
    switch(step){
        case 0: Show1();
            break;
        case 1: Hide();
            break;
    }
}
function Show1() {  //step2클래스를 받아와서 tr이 보이도록 스타일 변경
        var step2 = document.getElementsByClassName("step2");
        for (var i = 0; i < 22; i++) {
            step2[i].style.visibility = "visible";
        }
        this.step=1;
        var button1=document.getElementById("showbutton");
        var button2=document.getElementById("hidebutton");
        button1.style.display="none"
        button2.style.display="inline"
}
function Hide(){    //밑에서부터 tr을 안보이도록 스타일 변경
    var step2=document.getElementsByClassName("step2");
    for (var i = 21; i >= 0; i--) {
        step2[i].style.visibility = "collapse";
    }
    this.step=0
    var button1=document.getElementById("showbutton");
    var button2=document.getElementById("hidebutton");
    button1.style.display="inline"
    button2.style.display="none"
}
function Drama(){  //데이터를 출력할 hallyuData클래스를 불러와서 콘텐츠에 대한 정보를 innerHTML를 이용하여 넣어줍니다.
    let result=document.getElementsByClassName("hallyuData");    
    result[0].innerHTML="온라인 플랫폼"
    result[1].innerHTML="유튜브 68.4%"
    result[2].innerHTML="스토리 15.9%"
    result[3].innerHTML="오징어 게임,사랑의 불시착, 빈센조"
    result[4].innerHTML="88.9%"
    result[5].innerHTML="태국 92.6%"
}
function Movie(){
    var result=document.getElementsByClassName("hallyuData");
    result[0].innerHTML="온라인플랫폼"
    result[1].innerHTML="넷플릭스 70.1%"
    result[2].innerHTML="스토리 17.3%"
    result[3].innerHTML="기생충,부산행,서복"
    result[4].innerHTML="88.9%"
    result[5].innerHTML="태국 91.5%"
}
function Anima(){
    var result=document.getElementsByClassName("hallyuData");
    result[0].innerHTML="온라인플랫폼"
    result[1].innerHTML="유튜브 72.7%"
    result[2].innerHTML="영상미 18.8%"
    result[3].innerHTML="라바,뽀로로,뿌까"
    result[4].innerHTML="81.9%"
    result[5].innerHTML="인도 86.9%"
}
function Kpop(){
    var result=document.getElementsByClassName("hallyuData");
    result[0].innerHTML="온라인플랫폼"
    result[1].innerHTML="유튜브뮤직 80.3%"
    result[2].innerHTML="후렴구와 리듬18.3%"
    result[3].innerHTML="방탄소년단,블랙핑크,아이유"
    result[4].innerHTML="89.1%"
    result[5].innerHTML="인도 92.4%"
}