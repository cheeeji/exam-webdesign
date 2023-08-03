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

  // 3초마다 실행 - setInterval(함수, 시간);
  setInterval(function () {
    slide();
  }, 3000);

  function slide() {
    console.log("dd");
    // .lst-slide를 에니메이션(top:-300px)
    // 3초 후 -300px(-100%) 6초 후 -600px(-200%)
    $(".lst-slide").animate({
      top: 100 * now * -1 + "%",
    });
  }
});
