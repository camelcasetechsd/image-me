export var global = {
    userId : 100,
    
    setUserId : function(val) {
        this.userId = val;
    },

    getUserId : function(){
    	return this.userId;
    }
};