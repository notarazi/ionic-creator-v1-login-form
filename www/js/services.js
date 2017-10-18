angular.module('app.services', [])

.factory('UserFactory', [function(){

    return {
        doLogin: function(objLogin){
            try{
                window.localStorage['loggeduser']=
                angular.toJson(objLogin);
                return true;
            }catch(e){
                return false;
            }

        },
        doLogout: function(){
            try{
                window.localStorage['loggeduser']=
                '';
                return true;
            }catch(e){
                return false;
            }

        },
        isLoggedUser: function(){
            try{
                var loggedUser=window.localStorage['loggeduser'];
                if (loggedUser && loggedUser!=''){
                    return 1;
                }else{
                    return 0;
                }

            }catch(e){
                return 0;
            }

        },        
    }

}])

.service('BlankService', [function(){

}]);