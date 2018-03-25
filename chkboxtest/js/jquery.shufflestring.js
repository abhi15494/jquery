(function($){
    $.fn.shufflestring = function(options){

        var setting = $.extend({
            color: "#fff",
            done: null
        }, options);

        return this.each(function(){
            $(this).text(shufflestring($(this).text()));
            $(this).css("color", setting.color);
            if( $.isFunction(setting.done)){
                setting.done.call(this);
            }

            function shufflestring(str){
                var arr = str.split("");

                for( var i = arr.length-1; i > 0; i--){
                    var val = Math.floor(Math.random() * (i + 1));
                    var temp = arr[i];
                    arr[i] = arr[val];
                    arr[val] = temp;
                }
                return arr.join("");
            }
        })
    }
}(jQuery));