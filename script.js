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


// 文字と画像別別でフェードイン

// $(function() {
//   var fadeTimeout; // タイマーを格納する変数

//   $("#about_1_nav a").mouseover(function() {
//     var tagId = $(this).attr('id');

//     // 前回のフェードインのタイマーをクリア
//     clearTimeout(fadeTimeout);

//     // 全てのコンテンツを非表示にする
//     $("#about1_main div").stop(true, true).fadeOut(300);

//     // クリックされたタブに対応するコンテンツをフェードインする
//     if(tagId === 'about_site') {
//       fadeTimeout = setTimeout(function() {
//         $(".about_site").fadeIn(300);
//       }, 300); // 前のフェードアウトが完了してから0.3秒後にフェードイン開始
//       fadeTimeout = setTimeout(function() {
//         $(".about_site2").fadeIn(500);
//       }, 600); // about_siteのフェードイン後、0.6秒後にabout_site2をフェードイン
//     } else if(tagId === 'product_site') {
//       fadeTimeout = setTimeout(function() {
//         $(".product_site").fadeIn(300);
//       }, 300); // 前のフェードアウトが完了してから0.3秒後にフェードイン開始
//       fadeTimeout = setTimeout(function() {
//         $(".product_site2").fadeIn(500);
//       }, 600); // product_siteのフェードイン後、0.6秒後にproduct_site2をフェードイン
//     }
//   });
// });


//一緒にフェードイン 
$(function() {
  var fadeTimeout; // タイマーを格納する変数

  $("#about_1_nav a").mouseover(function() {
    var tagId = $(this).attr('id');

    // 前回のフェードインのタイマーをクリア
    clearTimeout(fadeTimeout);

    // 全てのコンテンツを非表示にする
    $("#about1_main div").stop(true, true).fadeOut(300);

    // クリックされたタブに対応するコンテンツを同時にフェードインする
    if(tagId === 'about_site') {
      fadeTimeout = setTimeout(function() {
        $(".about_site, .about_site2").fadeIn(300);
      }, 300); // 前のフェードアウトが完了してから0.3秒後に同時にフェードイン
    } else if(tagId === 'product_site') {
      fadeTimeout = setTimeout(function() {
        $(".product_site, .product_site2").fadeIn(300);
      }, 300); // 前のフェードアウトが完了してから0.3秒後に同時にフェードイン
    } else if(tagId === 'review_site') {
      fadeTimeout = setTimeout(function() {
        $(".review_site, .review_site2").fadeIn(300);
      }, 300); // 前のフェードアウトが完了してから0.3秒後に同時にフェードイン
    } else if(tagId === 'access_site') {
      fadeTimeout = setTimeout(function() {
        $(".access_site, .access_site2").fadeIn(300);
      }, 300); // 前のフェードアウトが完了してから0.3秒後に同時にフェードイン
    } else if(tagId === 'news_site') {
      fadeTimeout = setTimeout(function() {
        $(".news_site, .news_site2").fadeIn(300);
      }, 300); // 前のフェードアウトが完了してから0.3秒後に同時にフェードイン
    }
  });
});





