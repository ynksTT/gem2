$(function () {

  // ボタンアニメーション
  $('a').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5, 
    }, 100);
  });
  
  $('a').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
    }, 100);
  });
  });
  
  
  document.addEventListener('DOMContentLoaded', function() {
    // 監視する要素を取得
    const targetElementAbout2 = document.querySelector('#access2');
    const targetElementAbout1 = document.querySelector('#access_1');
    const navElement = document.querySelector('.nav_top2');
  
    if (!targetElementAbout2 || !targetElementAbout1 || !navElement) {
      console.error('必要な要素が見つかりませんでした');
      return;
    }
  
    // スクロールイベントを追加
    window.addEventListener('scroll', function() {
      const targetPositionAbout2 = targetElementAbout2.getBoundingClientRect().top;
      const targetPositionAbout1 = targetElementAbout1.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (targetPositionAbout2 < windowHeight && targetPositionAbout2 >= 0) {
        navElement.classList.add('fade-in');
        navElement.classList.remove('fade-out');
      } else if (targetPositionAbout1 >= 0) {
        navElement.classList.add('fade-out');
        navElement.classList.remove('fade-in');
      }
    });
  });
  
  
  
  
  
  // $(function () {
  //   const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
  //   const fade_move = 100; // どのぐらい要素を動かすか(px)
  //   const fade_time = 800; // フェードの時間(ms)
  //   // フェード前のcssを定義
  //   $(".nav_top2").css({
  //     opacity: 0,
  //     transform: "translateY(" + fade_move + "px)",
  //     transition: fade_time + "ms",
  //   });
  //   // スクロールまたはロードするたびに実行
  //   $(window).on("scroll load", function () {
  //     const scroll_top = $(this).scrollTop();
  //     const scroll_bottom = scroll_top + $(this).height();
  //     const fade_position = scroll_bottom - fade_bottom;
  //     $(".nav_top2").each(function () {
  //       const this_position = $(this).offset().top;
  //       if (fade_position > this_position) {
  //         $(this).css({
  //           opacity: 1,
  //           transform: "translateY(0)",
  //         });
  //       }
  //     });
  //   });
  // });
  
  
  
  //  // /画像の拡大表示/ 
  //     // Worksの画像をクリックしたときにモーダルで拡大表示する
  //     $('.pickup_js img').click(function () {
  //       const imgSrc = $(this).attr('src');
  //       $('.big-img').attr('src', imgSrc);
  //       $('.modal').fadeIn();
  //       return false
  //     });
    
  //     // 閉じるボタンをクリックしたときにモーダルを閉じる
  //     $('.close-btn').click(function () {
  //       $('.modal').fadeOut();
  //       return false
  //     });
    
  //      // スクロールアニメーション
  //      var showFlag = false;
  //      var topBtn = $('#page-top');	
  //      topBtn.css('bottom', '-100px');
  //      var showFlag = false;
  //      //スクロールが100に達したらボタン表示
  //      $(window).scroll(function () {
  //        if ($(this).scrollTop() > 100) {
  //          if (showFlag == false) {
  //            showFlag = true;
  //            topBtn.stop().animate({'bottom' : '20px'}, 200); 
  //          }
  //        } else {
  //          if (showFlag) {
  //            showFlag = false;
  //            topBtn.stop().animate({'bottom' : '-100px'}, 200); 
  //          }
  //        }
  //      });
       
  //      //スクロールしてトップ
  //        topBtn.click(function () {
  //        $('body,html').animate({
  //          scrollTop: 0
  //        }, 500);
  //        return false;
  //        });
  
  
  
  
  
  
  