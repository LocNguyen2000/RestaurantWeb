const staff = {
  account: null,
  billing: null,
};

staff.account = [{ name: "Admin", phone: "0384696172", password: "admin123" }];

staff.addAccount = function (account_) {
  staff.account.push(account_);
};

staff.billing = [
  {
    id: "14",
    name: "Nguyen Xuong Thin",
    phone: "0246809751",
    date: "Sunday",
    time: "07:30pm - 08:00pm",
    size: "2",
    amount: "100000",
    status: "checked",
  },
  {
    id: "15",
    name: "Ta Dinh Quy",
    phone: "0123456789",
    date: "Thursday",
    time: "10:30pm - 11:00pm",
    size: "4",
    amount: "200000",
    status: "checked",
  },
  {
    id: "16",
    name: "Nguyen Xuong Thin",
    phone: "0246809751",
    date: "Friday",
    time: "08:30pm - 09:00pm",
    size: "1",
    amount: "50000",
    status: "checked",
  },
  {
    id: "17",
    name: "Tran Phan Nguyen",
    phone: "0987654321",
    date: "Friday",
    time: "08:30pm - 09:00pm",
    size: "2",
    amount: "100000",
    status: "checked",
  }
];
