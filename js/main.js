const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () { 
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () { 
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () { 
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () { 
  console.log(window.screenY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소,지속시간,옵션);
    gsap.to(badgeEl, .4, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });

  } else { 
    // 배지 보이기
    gsap.to(badgeEl, .4, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo:0
  })
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
  fadeEls.forEach(function (fadeEl, index) { 
    gsap.to(fadeEl, 1, {
      opacity: 1,
      delay: (index + 1) * 0.7,
    })
  });





      
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay : true,
  loop : true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView : 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: { delay: 5000 },
  pagination: {
    el: '.promotion .swiper-pagination', 
    clickable: true
  },
  navigation: {
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  direction: 'horizontal',
  autoplay : true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl : '.awards .swiper-prev',
    nextEl : '.awards .swiper-next'
  }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () { 
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add('hide');
  } else { 
    //보임처리
    promotionEl.classList.remove('hide');
  }
});

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floationObject(selector, delay, size) {
  gsap.to(selector, random(1.5,2.5),{
    y:size,
    repeat : -1 ,
    //무한반복 은 -1임
    yoyo : true,
    ease: "power1.inOut",
    delay: random(0, delay),
  })
}
floationObject('.floating1', 1, 15);
floationObject('.floating2', 0.5, 15);
floationObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정 
      triggerHook: 0.8 // 감시하고 있는 요소가 뷰포트의 어떠한 지점(0~1사이)을 지날때 트리거로 작용
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});
 

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

/* setAttribute
 HTML 속성을 지정한다

  window = 브라우저의 창

 구글에서 lodash cdn 검색 -> cdnjs.com 사이트 들어가서 상위에 있는 js 링크 복사 -> 
 index.html 에 복붙
 _.throttle(function () { console.log('scroll!!');}, 300)
 _.throttle(함수, 숫자ms)
 -> 숫자ms마다 함수가 재실행 됨

 gsap cdn 검색
  gsap.to(요소,지속시간s,옵션);
  요소를 어떠한 옵션으로 얼마만큼 지속하여 할지 

  new = js 에서 생성자(클래스 개념)

  swiper 기능 구현 방법
  new Swiper(선택자, 옵션); -> 기능을 구현
  ->direction : 수평으로 동작할지, 아니면 수직으로 동작할지
  ->autoplay : (자동 재생) true = 자동재생을 하겠다 ('true' 이렇게쓰면 안됨!!) 
  { delay : 3000이 기본값 }
  ->loop (루프로 반복시킬것인지) : true -> 반복시킬것이다
  ->slidesPerView : 한번에 보여지는 슬라이드 갯수
  ->spaceBetween : 슬라이드 사이 여백 (px)
  ->centeredSlides : 1번 슬라이드 중앙 배치

  '.promotion .swiper-pagination' -> 페이지 번호 요소 선택자
  clickable : 사용자의 페이지 번호 요소 제어 가능


  !isHidePromotion -> 반대값으로 표시할때 느낌표를 앞에 붙임


  scrollMagic cdn ->구글 검색 ->api 추가하는거임
*/