$(function () {
  const modalWrap = $("#modal");
  // $("#modal button")
  // $("modal").find("button")
  const modalBtn = modalWrap.find("button");
  const listbbsEl = $(".lst-bbs li:first-child");

  // modal
  modalWrap.removeClass("active");
  // modal 열기
  // .lst-bbs li:first-child를 클릭했을 때
  listbbsEl.on("click", function () {
    // #modal에 .active를 추가
    modalWrap.addClass("active");
  });

  // modal 닫기
  // #modal button을 클릭했을 때
  modalBtn.on("click", function () {
    // #modal에 .active를 삭제
    $("#modal").removeClass("active");
  });

  // tabs
  const tabEl = $(".tab-item");
  const tabTit = tabEl.find(".tit");

  // tab-item 옆 .on 삭제
  tabEl.removeClass("on");
  // .tab-item:first-child에게 .on 추가
  // $(".tab-item:first-child").addClass("on");
  tabEl.first().addClass("on");

  // .tab-item .tit을 클릭했을 때
  tabTit.on("click", function () {
    // .tab-item .on 삭제
    tabEl.removeClass("on");
    // 방금 클릭한 나(this)의 부모(parent()에게 .on 추가
    $(this).parents().addClass("on");
  });

  // slide
  let now = 1;
  const slideEls = $(".lst-slide");
  let height = 100;

  // 3초마다 실행 - setInterval(함수, 시간);
  setInterval(function () {
    slide();
  }, 3000);

  // 슬라이드 함수(기능 만들기)
  function slide() {
    console.log("dd");

    // 조건문
    // now: 0일 경우 - 1 슬라이드
    // now: 1일 경우 - 2 슬라이드
    // now: 2일 경우 - 3 슬라이드
    // 참: 만약 1,2번째 슬라이드일 경우
    // 거짓(그 밖의 경우) : 3번 슬라이드일 경우
    if (now < 3) {
      // 참일 경우
      // 다음 슬라이드로 이동
      // .lst-slide를 에니메이션(top:-300px)
      // 3초 후 -300px(-100%) 6초 후 -600px(-200%)
      slideEls.animate({
        top: height * now * -1 + "%",
        // = top: 300 * now * -1 + "px"
      });
      // -> -100% 값

      // 변수 재선언
      now = now + 1;
      // -> now값 2 / -200%
    } else {
      // 거짓일 경우
      // 첫번째 슬라이드로 이동
      slideEls.animate({
        top: 0,
      });
      now = 1;
      // now값 다시 1로 재셋팅
    }
  }
});
