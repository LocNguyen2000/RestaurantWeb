const customer = {
  account: [
    { name: "Ta Dinh Quy", phone: "0123456789", password: "user123" },
    { name: "Nguyen Huu Loc", phone: "0384696172", password: "user456" },
    { name: "Tran Phan Nguyen", phone: "0987654321", password: "user789" },
  ],
  booking: [
    {
      id: "1",
      name: "Ta Dinh Quy",
      phone: "0123456789",
      date: "Saturday",
      time: "08:30pm - 09:00pm",
      size: "2",
      amount: "100000",
      status: "",
    },
    {
      id: "2",
      name: "Nguyen Huu Loc",
      phone: "0384696172",
      date: "Sunday",
      time: "08:30pm - 09:00pm",
      size: "1",
      amount: "50000",
      status: "",
    },
    {
      id: "3",
      name: "Nguyen Huu Loc",
      phone: "0384696172",
      date: "Monday",
      time: "08:30pm - 09:00pm",
      size: "1",
      amount: "50000",
      status: "",
    },
  ],
};

customer.addAccount = function(info) {
  customer.account.push(info);
  console.log(customer.account);
};
customer.addBooking = (order) => {
    console.log(order.name)
    console.log(order.phone)
    console.log(order.day)
    console.log(order.time)
    console.log(order.size)

    let data = {
        id: `${customer.booking.length +1}`,
        name: `${order.name}`,
        phone: `${order.phone}`,
        date: `${order.day}`,
        time: `${order.time}`,
        size: `${order.size}`,
        amount: `${order.size * 50000}`,
        status: ""
    }
    console.log(data)
  customer.booking.push(data);
  console.log(customer.booking)
};
