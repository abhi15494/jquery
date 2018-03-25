$(document).ready(function(){   
    function returnCheckboxVal(i){
        if( $("input[name='c"+i+"'][type='checkbox']").is(":checked")) 
            return parseInt($("input[name='c"+i+"'][type='checkbox']").val());   
        else return 0;      
    };
    
    function sum(arr){
        var sum = 0;
        $.each(arr, function(index, element){
            sum += returnCheckboxVal(index);
        });
        return sum;
    }
    
    $("#submit").on("click", function(){
        var chkarr = $("input[type='checkbox']");
        $("#result").text(sum(chkarr));
    });
});