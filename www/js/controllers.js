angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$state', '$ionicHistory', 'UserFactory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $ionicHistory, UserFactory) {
    /*make sure the Back Button does not work for Login Page*/
    var backToLogin=false;
    var strLoginPageRef='login';
    
    $scope.$on('$stateChangeStart', 
       function(event, toState, toParams, fromState, fromParams) {
           if(toState.name==strLoginPageRef &&
              backToLogin==false)
           {event.preventDefault();}
       }
    );
    $scope.doLogout=function(){
        if (UserFactory.doLogout()===true){
            backToLogin=true;
            $ionicHistory.nextViewOptions({disableBack: true});
            $state.go(strLoginPageRef);
        }else{
            alert('logout failed');
        }
    };

    $scope.$on('$ionicView.beforeEnter', function(){
        backToLogin=false;
    });
}])
   
.controller('cartCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloudCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$state', '$ionicHistory', 'UserFactory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $ionicHistory, UserFactory) {
    $scope.data={'ue': '','pw': ''}
    
    $scope.doLogin=function(){
        var invalidcheck=0;
        objLogin=$scope.data;
        console.log(objLogin.ue);
        if (objLogin.ue=='' || objLogin.ue==undefined){
            alert('invalid ue');
            invalidcheck+=1;
        }
        if (objLogin.pw=='' || objLogin.pw==undefined){
            alert('invalid pw');
            invalidcheck+=1;
        }        
        if (invalidcheck>0){return;}
        if (UserFactory.doLogin(objLogin)===true){
            
            $scope.goToHome();
        }else{
            alert('login failed');
        }
    }

    $scope.goToHome=function(){
        $ionicHistory.nextViewOptions({disableBack: true});
        $scope.data={'ue': '','pw': ''}
        $state.go('menu.home');
    }
    $scope.$on('$ionicView.beforeEnter', function(){
        if (UserFactory.isLoggedUser()==1){
            $scope.goToHome();
        }
    });
}])
 