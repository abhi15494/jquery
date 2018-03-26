$(document).ready(function(){   
    var obj = {
        text: [
            "the value is V1 and value is ",
            "the value is V2 and value is ",
            "the value is V3 and value is ",
            "the value is V4 and value is ",
            "the value is V5 and value is ",
            "the value is V6 and value is ",
            "the value is V7 and value is ",
            "the value is V8 and value is ",
            "the value is V9 and value is ",
            "the value is V10 and value is ",
            "the value is V11 and value is ",
            "the value is V12 and value is ",
            "the value is V13 and value is ",
            "the value is V14 and value is ",
            "the value is V15 and value is ",
        ],
        noSelect: "You have not selected any option"
    }

    function returnCheckbox(i){
        if( $("input[name='c"+i+"'][type='checkbox']").is(":checked")) return true;   
        else return false;      
    };

    function returnCheckboxVal(i){
        if(returnCheckbox(i)) return parseInt($("input[name='c"+i+"'][type='checkbox']").val());   
        else return 0;
    }

    function stringMake(i){
        var str = "";
        if(returnCheckbox(i)){
            str = 
            `<h3>
                ${i}). ${obj.text[i-1]}
            </h3><br />`;
        }
        else str = obj.noSelect;
        return  
    }
    
    function sum(arr){
        var sum = 0;
        $.each(arr, function(index, element){
            sum += returnCheckboxVal(index);
        });
        return sum;
    }
    
    $("#submit").on("click", function(){
        var chkarr = $("input[type='checkbox']");
        $("#result").text("SUM = " + sum(chkarr));
        $("#result1").text(stringMake(chkarr.length));
    });
});