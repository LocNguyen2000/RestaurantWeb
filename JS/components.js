const components = {};

components.home = `
<style>

.box{
    width: 900px;
    float: right;
}
.box ul li{
    width: 120px;
    float: left;
    margin: 10px auto;
    text-align: center;
    list-style: none;
    background: rgba(0,0,0,0.9);
    height: 40px
}
.box ul li a{
    font-size: 17px;
    text-decoration: none;
    color: darkgray;
}

.box ul li a:hover{
    color: white;
}
.wd{
    width: 500px;
    height: 740px;
    background-color: black;
    opacity: 0.9;
    padding: 55px;
}
.wd p{
  text-align: center;
  font-style: italic;
}
.wd h1{
    text-align: center;
    text-transform: uppercase;
    font-weight: 100px;
}
.wd h2{
    text-align: center;
    text-transform: uppercase;
    font-weight: normal;
    padding: 5px;
    margin: 5px auto;
    font-style: italic;
}
.opt form, input[type="button"]{
    background-color: black;
    color: white;
    padding: 10px;
    margin: 10px;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
}
form, input[type="button"]:hover{
    background-color: green;
}

</style>
<section id = "home">
<div class="box">
    <ul>
        <li><a href = "">Home</a></li>
        <li><a href = "">Menu</a></li>
        <li><a href = "">Contact</a></li>
        <li ><a href = "" id = "sign-out">Sign Out</a></li>
    </ul>
</div>

<div class = "wd">
    <h1>My Restaurant.com</h1><br>

    <p> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero laborum sequi quos ratione iusto beatae nesciunt tempora, 
    nulla velit atque, debitis aspernatur vel voluptates, eum facilis odio animi. 
    Eum, cum?
    </p>

    <br>
    <h2>Reservation</h2>
    <div class = "opt">
        <form method = "post">
            <input id = "start" type = "button" value = "Start Now">
        </form>
    </div>
    <div>
        <hr>
        <br>
        <style> span{display: flex; justify-content: center; align-items: center;} </style>
        <span> Location: West Lake View </span>
        <span> Open everyday: 7:00pm - 11:00pm </span>
        <span> Started since 24-10-2020.</span>
        <span> Build by Team L-N-Q</span>
    </div>
    <div>
    </div>
</div>
</section>

`;
components.chooseLogin = `
<style>
 
  .login-form {
    display: flex;
    position: absolute;
    top: 20%;
    left: 28%;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 400px;
    background: rgba(0, 0, 0, 0.65);
  }
  .header-container p {
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    top: 5%;
    left: 39%;
  }
  .header-container span {
    position: relative;
    font-size: 15px;
    font-weight: bold;
    top: 20%;
    left: 42%;
  }
  .form-container .input-wrapper {
    position: relative;
    left: 0%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 500px;
  }
  .form-container .input-wrapper input {
    border: none;
    border-bottom: 1px solid #ffffff;
    height: 45px;
    background-color: chocolate;
    font-size: 17px;
    color: #ffffff;
    display: 16px;
    margin: 20px;
    width: 200px;
    height: 100px;
  }

  .form-container .input-wrapper input:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image-slice: 1;
  }
  .form-container .input-wrapper input:hover {
    background-color: cyan;
    color: white;
  }
</style>

  <section class="login-form">
    <div class="form-container">
      <div class="header-container">
        <p>MY RESTAURANT</p>
        <span>Choose User</span>
      </div>
      <form class="input-wrapper">
        <input id="customer" type="button" value="Customer" />
        <input id="staff" type="button" value="Staff" />
      </form>
    </div>
  </section>
  
`;
components.login = `
<style>
    .form-area{
        position: absolute;
        top: 25%;
        left: 35%;
        // transform: (translate(-50%, -50%));
        width: 400px;
        height: 500px;
        box-sizing: border-box;
        background: rgba(0,0,0,0.5);
        padding: 40px;
    }
    h3{
        display:flex;
        justify-content: center;
        margin: 0;
        padding: 0 0 20px;
        font-weight: bold;
        color: #ffffff;
    }
    .form-area p{
        margin: 0;
        padding: 0;
        font-weight: bold;
        color: #ffffff;
    }
    ::placeholder{
        color: #ffffff;
    }
    .form-area input{
        margin-bottom: 20px;
        width: 100%;
    }
    .form-area input[type = tel],
    .form-area input[type = text],
    .form-area input[type = password] {
        border:none;
        border-bottom: 1px solid #ffffff;
        background-color: transparent;
        outline: none;
        height: 45px;
        color: #ffffff;
        display: 16px;
    }
    .form-area input[type = tel]:focus,
    .form-area input[type = text]:focus,
    .form-area input[type = text]:focus{
        padding-bottom: 6px;  
        font-weight: 700;
        border-width: 3px;
        border-image-slice: 1;
    }
    .form-area input[type = submit]{
        border: none;
        height: 40px;
        outline: none;
        color: #ffffff;
        font-size: 15px;
        background-color: tomato;
        cursor: pointer;
        border-radius: 20px;
    }
    .form-area input[type = submit]:hover{
        background-color: cyan;
        color:white;
    }
    .form-area a{
        color: #ffffff;
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
    }
    
    #error{
      color: red;
      padding-bottom: 9px;
    }
    </style>
    <div class = "form-area">
        <h3 id = 'user'></h3>
        <form id = "log-in-form" >
            <p> Name </p>
            <input type = "text" name = "name" placeholder = "Enter name" required>
            <p>Phone </p>
            <input type = "tel" name = "phone"  placeholder = " Enter phone number" required>
            <p>Password</p>
            <input type = "password" name = "password"  placeholder = " Enter password" required>
            <div id = "error"> </div>
            <input type = "submit" name = "" id = "log-in-btn" placeholder = "Sign In">
        </form>
    </div>     
`;
components.reservation = `
<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap");

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: "Poppins", sans-serif;
  }
  .banner {
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("./img/banner.jpg") center/cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding-bottom: 20px;
  }
  .card-container {
    display: grid;
    grid-template-columns: 420px 420px;
  }
  .card-img {
    background: url("./img/card-img.jpg") center/cover no-repeat;
  }
  .banner h2 {
    padding-bottom: 40px;
    margin-bottom: 20px;
  }
  .card-content {
    background: #fff;
    height: 400px;
  }
  .card-content h3 {
    text-align: center;
    color: #000;
    padding: 25px 0 10px 0;
    font-size: 26px;
    font-weight: 500;
  }
  .form-row {
    display: flex;
    width: 90%;
    margin: 0 auto;
  }
  form select,
  form input {
    display: block;
    width: 100%;
    margin: 15px 12px;
    padding: 5px;
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    outline: none;
    border: none;
    border-bottom: 1px solid #eee;
    font-weight: 300;
  }
  form input[type="text"],
  form input[type="number"],
  form input::placeholder,
  select {
    color: #9a9a9a;
  }
  form input[type="submit"] {
    color: #fff;
    background: #f2745f;
    padding: 12px 0;
    border-radius: 4px;
    cursor: pointer;
  }
  form input[type="submit"]:hover {
    opacity: 0.9;
  }
  @media (max-width: 992px) {
    .card-container {
      grid-template-columns: 100%;
      width: 100vw;
    }
    .card-img {
      height: 330px;
    }
  }
</style>
<section class="banner">
  <h2>BOOK YOUR TABLE</h2>
  <div class="card-container">
    <div class="card-img"></div>
    <div class="card-content">
      <h3>Reservation</h3>
      <form id = "reservation-form">
        <div class="form-row">
          <select name="day">
            <option selected="selected" disabled="disabled">Select day</option>
            <option value="Sunday">Sunday</option>
            <option value="Saturday">Saturday</option>
            <option value="Friday">Friday</option>
            <option value="Thursday">Thursday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Monday">Monday</option>
          </select>
        </div>
        <div class="form-row">
          <input type="text" name="fullName" placeholder="Full Name" />
          <input type="tel" name="phoneNumber" placeholder="Phone Number" />
        </div>
        <div class="form-row">
          <input type="number" name="size" max = 5 placeholder="Party Size" min="1" />
          <select name = "time">
            <option selected = "selected" disabled = "disabled"> Choose Time</option>
            <option value = "07:00pm - 07:30pm">07:00pm - 07:30pm</option>
            <option value = "07:30pm - 08:00pm">07:30pm - 08:00pm</option>
            <option value = "08:00pm - 08:30pm">08:00pm - 08:30pm</option>
            <option value = "08:30pm - 09:00pm">08:30pm - 09:00pm</option>
            <option value = "09:00pm - 09:30pm">09:00pm - 09:30pm</option>
            <option value = "09:30pm - 10:00pm">09:30pm - 10:00pm</option>
            <option value = "10:00pm - 10:30pm">10:00pm - 10:30pm</option>
            <option value = "10:30pm - 11:00pm">10:30pm - 11:00pm</option>
          </select>
        </div>
        <div class = "form-row">
          <input id = "form-button" type="submit" value="BOOK TABLE" />
        </div>
      </form>
    </div>
  </div>
</section>

`;
components.staffPage = `
<section id="staff-page">
<style>
  body{
    font-family: "Poppins", sans-serif;
    color: whitesmoke;
    background: none;
  }
  
  .nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
  }
  .nav-bar span {
    color: coral;
    padding: 13px;
    font-size: 20px;
  }

  .nav-bar .nav-item {
    display: flex;
    list-style: none;
    background: coral;
    width: 200px;
    height: 40px;
    padding: 10px;
    margin-left:5px;
  }
  .nav-bar .nav-item:hover {
    background: sandybrown;
    cursor: pointer;
  }

  .container {
    margin-top: 10px;
    padding-top: 20px;
  }
  .container p {
    color: coral;
    font-size: 20px;
    font-weight: bold;
    padding-left: 10px;
  }
  .container table {
    margin-top: 10px;
    color: black;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 90%;
  }

  .container td,th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  .container table tr:nth-child(even) {
    background-color: #dddddd;
  }
</style>

<ul class="nav-bar">
  <span>My Restaurant.com</span>
  <li class="nav-item" id="infos">
    <p>User Info</p>
  </li>
  <li class="nav-item" id = "sign-out-btn">
    <p>Sign Out</p>
  </li>
</ul>
<div class="container">
  <p>Orders</p>
  <hr />
  <table id="booking-table">
    
  </table>
</div>
<div class="container">
  <p>Billing</p>
  <hr/>
  <table id="billing-table">
    
  </table>
</div>

</section>

`;
