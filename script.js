$("#count").text($("p").length);

$("body").on("click", ".trash",
    function(){
        $(this).parent().remove();
        $("#count").text($("p").length);
    }
)

$("#btn-search").click(
    function(){
        $("h6").each(
            function() {
                if($("#search-message").val() != $(this).text()) {
                    $(this).parent().parent().hide();   
                }
                else if($("#search-message").val() == $(this).text()) {
                    $(this).parent().parent().show(); 
                }
            }
        );  
        $("#search-message").val("");
    }
)

$("#btn-add").click(
    function(){
        $("body").append(
            `<div class="row last-row">
                <img class="avatar" src="avatar-2.jpg">
                <div>
                    <h6>Marion Toutant</h6>
                    <p>`+$("#add-message").val()+`</p>
                </div>
                <img class="trash" src="trash.png">
            </div>`
            );
        $("#add-message").val("");
        $("#count").text($("p").length);
    }
)

