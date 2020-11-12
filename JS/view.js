const view = {};

view.showComponents = function (name) {
  switch (name) {
    case "chooseLogin": {
      let app = document.getElementById("app");
      app.innerHTML = components.chooseLogin;

      let customerLogin = document.getElementById("customer");
      customerLogin.onclick = CustomerLinkHandler;

      let staffLogin = document.getElementById("staff");
      staffLogin.onclick = StaffLinkHandler;

      function CustomerLinkHandler(e) {
        e.preventDefault();
        alert("Customer Login");
        model.currentUser("Customer");
        view.showComponents("login");
      }

      function StaffLinkHandler(e) {
        e.preventDefault();
        alert("Staff Login");
        model.currentUser("Staff");
        view.showComponents("login");
      }

      break;
    }
    case "login": {
      let app = document.getElementById("app");
      app.innerHTML = components.login;

      let user = document.getElementById("user");
      user.innerText = model.user + " Login Form";

      let form = document.getElementById("log-in-form");
      form.onsubmit = formSubmitHandler;

      function formSubmitHandler(e) {
        e.preventDefault();
        let loginInfo = {
          name: form.name.value,
          phone: form.phone.value,
          password: form.password.value,
        };
        model.setInfo(loginInfo);
        controller.login(loginInfo);
      }
      break;
    }
    case "home": {
      let app = document.getElementById("app");
      app.innerHTML = components.home;

      let reservation = document.getElementById("start");
      reservation.onclick = linkCLickHandler;

      let signOutBtn = document.getElementById("sign-out")
      signOutBtn.onclick = function(e){
        e.preventDefault()
        view.showComponents("chooseLogin")
      }

      function linkCLickHandler(e) {
        e.preventDefault();
        view.showComponents("reservation");
      }
      break;
    }
    case "reservation": {
      let app = document.getElementById("app");
      app.innerHTML = components.reservation;

      let form = document.getElementById("reservation-form");
      form.onsubmit = formSubmitHandler;

      function formSubmitHandler(e) {
        e.preventDefault();
        let ReservationForm = {
          name: form.fullName.value,
          phone: form.phoneNumber.value,
          day: form.day.value,
          time: form.time.value,
          size: form.size.value,
        };
        console.log(ReservationForm);
        customer.addBooking(ReservationForm);
        view.showComponents("home");
      }
      break;
    }
    case "staffPage": {
      let app = document.getElementById("app");
      app.innerHTML = components.staffPage;

      view.addTableById("booking-table");
      view.addTableById("billing-table");

      let signOutBtn = document.getElementById("sign-out-btn");
      signOutBtn.onclick = linkCLickHandler;

      function linkCLickHandler(e) {
        e.preventDefault();
        model.signOut();
        view.showComponents("chooseLogin");
      }

      break;
    }
   
  }
};
view.setError = function (text) {
  var error = document.getElementById("error");
  error.innerHTML = text;
};

view.addTableById = function (id) {
  let table = document.getElementById(`${id}`);
  table.innerHTML += `<tr>
  <th>Order</th>
  <th>Name</th>
  <th>Phone</th>
  <th>Date</th>
  <th>Time</th>
  <th>Size</th>
  <th>Amount</th>
  <th>Confirm Booking</th>
</tr>`;
  let userTable;
  if (id == "billing-table") userTable = staff.billing;
  else if (id == "booking-table") userTable = customer.booking;
  for (let order of userTable) {
    let row = table.insertRow(1);
    let cell = (row.innerHTML +=
      "<td>" +
      order.id +
      "</td>" +
      "<td>" +
      order.name +
      "</td>" +
      "<td>" +
      order.phone +
      "</td>" +
      "<td>" +
      order.date +
      "</td>" +
      "<td>" +
      order.time +
      "</td>" +
      "<td>" +
      order.size +
      "</td>" +
      "<td>" +
      order.amount +
      "</td>" +
      "<td>" +
      "<input type='checkbox' name='status'" +
      order.status +
      "/> </td>");
  }
};
