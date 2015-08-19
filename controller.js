$(document).ready( function() {
  $(".input-box").on("keyup", function(event){
    event.preventDefault();
    var content = $(this).val();
    // console.log(content);
    var md = renderMD(content);
    console.log(md);
    $(".rendered-md").html(md);
  });
});
