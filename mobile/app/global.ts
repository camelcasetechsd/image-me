export var global = {
    host : "http://192.168.1.105:8000/",
    userId : 100,
    userName: '',
    imageId : 0,
    facebookToken: 0,
    tokenCreationDate : 0,
    tokenExpirationDate : 0,

    setUserId : function(val) {
        this.userId = val;
    },

    getUserId : function(){
        return this.userId;
    },

    setUserName : function(val) {
        this.userName = val;
    },

    getUserName : function(){
        return this.userName;
    },

    setImageId : function(val) {
        this.imageId = val;
    },

    getImageId : function(){
    	return this.imageId;
    },
    
    //////////////////   FACE BOOK    ///////////////

    getFacebookAppId : function(){
        return "1217791084908148";
    },

    getFacebookAccessToken : function(){
        return this.facebookToken;
    },

    setFacebookAccessToken : function(tokenJson){
        this.facebookToken = tokenJson.access_token;
        this.updateLastLogin();
        this.updateExpirationDate(tokenJson.expires_in);
    },

    updateLastLogin(){
        this.tokenCreationDate = new Date();
    },

    updateExpirationDate(expires_in){
        let timeObj = new Date();
        this.tokenExpirationDate = new Date( 1000 * expires_in ); 
    }


};