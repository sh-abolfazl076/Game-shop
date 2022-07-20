// noresponsiv
let menu = document.querySelector(".noresponsiv");
let icon = document.querySelector(".icon");

icon.addEventListener("click",function() {
  if (this.classList.contains("fa-bars")){
    this.classList = "fas fa-times icon";
    menu.style.left = 0;
  } else {
    this.classList = "fas fa-bars icon";
    menu.style.left = "-340px";
  }

})

// slider
$(function () {

    $(".btnItem1").click(function () {
        $(".imgItem1").show();
        $(".imgItem2").hide();
        $(".imgItem3").hide();
        $(".imgItem4").hide();

        $(".btnItem1").addClass("active");
        $(".btnItem2").removeClass("active");
        $(".btnItem3").removeClass("active");
        $(".btnItem4").removeClass("active");
    });
    $(".btnItem2").click(function () {
        $(".imgItem1").hide();
        $(".imgItem2").show();
        $(".imgItem3").hide();
        $(".imgItem4").hide();

        $(".btnItem1").removeClass("active");
        $(".btnItem2").addClass("active");
        $(".btnItem3").removeClass("active");
        $(".btnItem4").removeClass("active");
    });
    $(".btnItem3").click(function () {
        $(".imgItem1").hide();
        $(".imgItem2").hide();
        $(".imgItem3").show();
        $(".imgItem4").hide();

        $(".btnItem1").removeClass("active");
        $(".btnItem2").removeClass("active");
        $(".btnItem3").addClass("active");
        $(".btnItem4").removeClass("active");
    });
    $(".btnItem4").click(function () {
        $(".imgItem1").hide();
        $(".imgItem2").hide();
        $(".imgItem3").hide();
        $(".imgItem4").show();

        $(".btnItem1").removeClass("active");
        $(".btnItem2").removeClass("active");
        $(".btnItem3").removeClass("active");
        $(".btnItem4").addClass("active");
    });
    


    $(".group1").click(function () {
      $(".groupBox1").show();
      $(".groupBox2").hide();
      $(".groupBox3").hide();
      $(".group1").addClass("active2");
      $(".group2").removeClass("active2");
      $(".group3").removeClass("active2");
    });

    $(".group2").click(function () {
      $(".groupBox1").hide();
      $(".groupBox2").show();
      $(".groupBox3").hide();
      $(".group1").removeClass("active2");
      $(".group2").addClass("active2");
      $(".group3").removeClass("active2");
    });

    $(".group3").click(function () {
      $(".groupBox1").hide();
      $(".groupBox2").hide();
      $(".groupBox3").show();
      $(".group1").removeClass("active2");
      $(".group2").removeClass("active2");
      $(".group3").addClass("active2");
    });


    $('.prevNext1').click(function () {
      $(".groupBox1").hide();
      $(".groupBox2").show();
      $(".groupBox3").hide();

      $(".group1").removeClass("active2");
      $(".group2").addClass("active2");
      $(".group3").removeClass("active2");
    });

    $(".groupNext2").click(function () {
      $(".groupBox1").show();
      $(".groupBox2").hide();
      $(".groupBox3").hide();

      $(".group1").addClass("active2");
      $(".group2").removeClass("active2");
      $(".group3").removeClass("active2");
     });

     $(".groupPrev2").click(function () {
      $(".groupBox1").hide();
      $(".groupBox2").hide();
      $(".groupBox3").show();
      $(".group1").removeClass("active2");
      $(".group2").removeClass("active2");
      $(".group3").addClass("active2");
     });
     
     $(".groupNext3").click(function () {
      $(".groupBox1").hide();
      $(".groupBox2").show();
      $(".groupBox3").hide();
      $(".group1").removeClass("active2");
      $(".group2").addClass("active2");
      $(".group3").removeClass("active2");
     });

});