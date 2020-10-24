const controller = {};
controller.login = function (loginInfo) {
  console.log(loginInfo);
  
 
  view.showComponents('home');
};
controller.reservation = function(form){
  
}

controller.initApp = function () {
  view.showComponents("login");
};



