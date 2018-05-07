
$(document).ready(function(){
  $('[data-toggle="popover"]').popover({
    trigger: 'click'
  });
$(".password .success").on("click", function(e){
  //console.log($(".password .frame").val());
  e.preventDefault();
  var pswIn = $(".password .frame").val();
  pswInTmp = pswIn.split(" ");
  pswIn = [];
  $.each(pswInTmp, function(i,v){
    if( pswInTmp[i] != "" ){
      pswIn.push(pswInTmp[i]);
    }
  });
  console.log(pswIn);
  pswCheck = ["government", "performance", "catalyzed", "policy", "censorship", "artists"];
  pswCheckTmp = pswCheck.slice(0);

  $.each(pswCheck, function(i, v){
    console.log(v,i);
    var indexIn = pswIn.indexOf(v);
    var indexCheck = pswCheckTmp.indexOf(v);

    if(indexIn >= 0){
      pswIn.splice(indexIn, 1);
      pswCheckTmp.splice(indexCheck, 1);
    }
  });

  if (!pswIn.length && !pswCheckTmp.length){
    window.location="content.html";
  }
  return false;
});



  $(".picture").on("click", function(){
    var $modal = $(".modal_window");
    $modal.css("display", "block");
    $(".overlay").css("display", "block");
    $(".modal_window .gelato").html("");
    var $previewImg = $(this).find("img");
    var images = $previewImg.data("images").split(",");
    var path = $previewImg.data("path");
    var descr = $(this).parents(".picture").find(".coment").html();
    $(".modal_window .content").html(descr);
    if(path) path = path+"/";
    var $activeImg = null;
    for(var i=0; i<images.length; i++){
      $img = $("<img>").attr("src", path+images[i].trim());
      if( i == 0 ){
        $img.addClass("hide");
        $activeImg = $img;
      }else{
        $img.addClass("hide");
      }
      $(".gelato").append($img);
    }
    console.log($activeImg);
    $($activeImg).on("load", function(){
      $activeImg.addClass("active");
      $activeImg.removeClass("hide");
      fitFrame();
    });

  });

  $(".close").on("click", function(){
    var $modal = $(".modal_window");
    $modal.css("display", "none");
    $(".overlay").css("display", "none");
  });
  $(".overlay").on("click", function(e){
    if(!$(e.target).parents(".overlay").length){
      $(".modal_window").css("display", "none");
      $(".overlay").css("display", "none");
    }
  });
  $(window).resize(function(){
    fitFrame();
    windowWidthCount();
  })

    function fitFrame(){
      var $modal= $(".modal_window");
      var $gallery = $(".content_pict");
      var curImg = $(".modal_window .content_pict img.active");
      if( !curImg.length) return false;

      var imgWidth = curImg[0].naturalWidth;//curImg.width();
      var imgHeight = curImg[0].naturalHeight;//curImg.height();
      var galleryWidth = $gallery.width();
      var galleryHeight = $gallery.height();
      //console.log(galleryHeight, gallery)

    // 714 * 396
    // 779 * 966

      if( imgHeight >= galleryHeight ){
        curImg.css("height", galleryHeight-20);
        var coef = curImg[0].naturalWidth / curImg[0].naturalHeight;
        curImg.css("width", (galleryHeight-20)*coef);
      }

      if( curImg.width() >= galleryWidth ){
        curImg.css("width", galleryWidth-20);
        var coef = curImg[0].naturalWidth / curImg[0].naturalHeight;
        curImg.css("height", (galleryWidth-20)/coef);
      }

      curImg.css("margin-top", (galleryHeight-curImg.height())/2);
      //$modal.css({"width":imgWidth, "height":imgHeight});


      //$modal.css("left", ($gallery.width()-imgWidth)/2);
      //$modal.css("top", ($gallery.height()-imgHeight)/2);
    }
});
