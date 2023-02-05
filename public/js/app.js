$(document).ready(function () {
  $("#profile_ripple").ripples({
    resolution: 512,
    dropRadius: 10,
  });

  const bars=document.querySelectorAll('.progress-bar');

bars.forEach(function(bar) {
let percantage =bar.dataset.percent;
let tooltip =bar.children[0];
tooltip.innerText=percantage + '%';
bar.style.width=percantage + '%';
});
const counters = document.querySelectorAll(".counter");
  const runCounter = () => {
    counters.forEach((counter) => {
      counter.innerText = 0;
      let target = +counter.dataset.count;
      let step = target / 100;

      let countIt = () => {
        let displayCount = +counter.innerText;
        if (displayCount < target) {
          counter.innerText = Math.ceil(displayCount + step);
          setTimeout(countIt, 1);
        } else {
          counter.innerText = target;
        }
      };
      countIt();
    });
  };

  let counterSection = document.querySelector(".counter-section");
  let options = {
    rootMargin: "0px 0px -200px 0px",
  }
  let done=0;
  const sectionObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && done!==1) {
      runCounter();
    }
  }, options);
  sectionObserver.observe(counterSection);



  $(".slider").slick({
    arrows: false,
    autoplay: true,
  });


});

