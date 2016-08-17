export var global = {
    userId : 100,
    imageId : 0,
    setUserId : function(val) {
        this.userId = val;
    },

    getUserId : function(){
    	return this.userId;
    },
    setImageId : function(val) {
        this.imageId = val;
    },

    getImageId : function(){
    	return this.imageId;
    },
};