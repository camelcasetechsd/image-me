export var global = {
    host : "http://192.168.1.18:8000/",
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