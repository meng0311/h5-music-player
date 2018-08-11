(function($,root){
    function controlManager(len){
        this.index = 0;
        this.length = len;
    }

    controlManager.prototype = {
        next:function(){
            return this.getIndex(1)
        },
        prev:function(){ 
            return this.getIndex(-1)
        },
        getIndex:function(number){
            var index = this.index;
            var len = this.length;
            var curIndex = (index + len + number) % len;
            this.index = curIndex;
            return curIndex;
        }
    }

    root.controlManager = controlManager;
})(window.Zepto,window.player)