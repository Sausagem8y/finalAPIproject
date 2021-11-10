var span = document.getElementById("accountBalance");
const withdrawBtn = document.getElementById("withdrawButton");
const depositBtn = document.getElementById("depositButton");
var request = document.querySelector("input");
var accountTtl = 357.68;
var balance = 0;

// function Account (account, accountTtl) {
//   this.account = account;
//   this.accountTtl = accountTtl;
// }

// Account.prototype.deposit = function (accountTtl, request) {
//   // let parse = parseInt(request.value, 10);
//   var x = Math.floor(request.value)
//   let result = (accountTtl += request.value);
//   console.log(result);
//   console.log(accountTtl);
//   console.log(request.value);
//   console.log(testRun(accountTtl, request.value));
//   // return request;
//   return accountTtl;
// };

function depositFn(a, b) {
  var a = accountTtl;
  var b = Math.abs(request.value);
  balance = accountTtl += b;
  var c = b + 1;
  console.log(b);
  console.log(c);
  console.log(balance);
  span.innerHTML = `Available Balance $${accountTtl}`;
  return balance;
}

function withdrawFn(a, b) {
  var a = accountTtl;
  var b = Math.abs(request.value);
  if (b > accountTtl) {
    alert("please select a valid amount");
    console.error("please select a valid amount");
    return;
  } else {
    balance = accountTtl -= b;
    var c = b + 1;
    console.log(b);
    console.log(c);
    console.log(balance);
    span.innerHTML = `Available Balance $${accountTtl}`;
    return balance;
  }
}

// testRun(5, 6);

// console.log(testRun(accountTtl, request.value));
// const James = new Account(233, 233);
// function withdraw() {
//   Withdraw.updateBalance();
// }

withdrawBtn.addEventListener("click", withdrawFn);

depositBtn.addEventListener("click", depositFn);

// Account.prototype.deposit();
// Withdraw.updateBalance;
