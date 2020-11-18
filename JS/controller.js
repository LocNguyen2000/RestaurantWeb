const controller = {};
controller.login = function (loginInfo) {
  staffUser = {
    name: "Nguyen Huu Loc",
    phone: "0384696172",
    password: "admin123",
  };
  let error = true;
  if (model.user == "Customer") {
    for (let account of customer.account) {
      if (
        loginInfo.name == account.name &&
        loginInfo.phone == account.phone &&
        loginInfo.password == account.password
      )
        view.showComponents("home");
      else error = true;
    }
  } else if (model.user == "Staff") {
    for (let account of staff.account){
      if (
        loginInfo.phone == account.phone &&
        loginInfo.password == account.password &&
        loginInfo.name == account.name
      )
        view.showComponents("staffPage");
      else error = true;
    }
  }
  if (error == true)
    view.setError("Wrong account. Try again.")
};
controller.initApp = function () {
  view.showComponents("chooseLogin");
};
