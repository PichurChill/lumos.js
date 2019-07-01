$(function () {


  // 挥魔杖
  setTimeout(() => {
    $("#wand-img").addClass("animated wobble");
  }, 800);

  // 挥魔杖结束 咒语生效
  setTimeout(() => {
    $("#light-spot").addClass("light-spot-animate");
    // $("#halo").addClass("bright");
  }, 1700);

});