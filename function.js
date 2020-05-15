// جلسه اول
// function getJS(){
  // console.log(document); 
  // console.log(document.getElementById('title')); 
  // console.log(document.getElementById('title').innerHTML); 
  // document.getElementById('title').innerHTML = 'Googooli';
  // document.getElementById('title').innerHTML = 'Please Search On <a href="http://www.google.com">GOOGLE</a>';
  // document.getElementById('title').innerHTML = 'Please \'Search\' On <a href="http://www.google.com">GOOGLE</a>';
  // document.getElementById('title').innerHTML = 'Please "Search" On <a href="http://www.google.com">GOOGLE</a>';
  // var name;
  // name = 'Sepehr';
  // console.log(name);
  // name = 1717;
  // console.log(name);
  // var famili;
  // console.log(famili);
  // }

// جلسه دوم
  // function getJS(){
  //  var name = 'Ali';
  //  var num1 = 110;
  //  var num2 = 34.25;
  //  var num3 = 4e4;
  //  var x = true;
  //  var y = false;
  //  var z = null;
  //  var kol = new Array(name, num1, num2, num3, x, y, z);
  // var kol = [name, num1, num2, num3, x, y, z];
  // var kol = new Array();
  // kol[0] = name;
  // kol[1] = num1;
  // kol[2] = num2;
  // kol[3] = num3;
  // kol[4] = x;
  // kol[5] = y;
  // kol[6] = z; 
  //  console.log(kol);
  // var sepehr = {family: 'Roshe', age:27, place: 'Tehran', birthDate: '20-01-1372'};
  // var sorush = {family: 'Roshe', age:21, place: 'Bushehr', birthDate: '17-02-1378'};
  // var children = [sepehr, sorush];
  // console.log(children);
  // console.log(children[0].place);
  // console.log(sorush.age);
  // console.log(sepehr["birthDate"]);
  // console.log(children[1]);
  //  var num4 = 20;
  //  var num5 = num4++;
  //  var num6 = num4++;
  //  var num7 = ++num4;
  // var num8 = 10;
  // num8 += num4;
  // num8 *= num4;
  // num8 /= num4;
  // num8 %= num4;
//   var num9 = 'goli'
//   var num10 = '100'
//    console.log(num4+num9); 
//    console.log(num4+num10); 
//    console.log(2*(num4+num10));
//    var a = num4 > 10 ? 1: 0;
//    console.log(a);
// }


// function getJS(){
// var x = prompt('enter a number:');
// if (x>10 && x<100) {
//   alert('your number is more than 10');
// } else if(x<10) {
//   alert('your number is less than 10');
// } 
// else if (x == 10 || x ==100) {
//   alert('BINGO!!!')
// }
// console.log(x);
// switch (x) {
//   case 'a':
//     alert('ashghal kalle');
//     break;
//   case 'b':
//     alert('bi level');
//     break;
//   case 'c':
//     alert('choskhol');
//     break;
//   default:
//     alert('jakash');
//     break;
// }
// }

// جلسه چهارم
// function getJS(){
//   var n1 = eval(prompt ('enter first number:'));
//   var n2 = parseInt(prompt ('enter second number:'));
//   var op = prompt ('enter operator:');
//   calc(n1, n2, op);
//   function calc (x, y, z) {
//     switch (z) {
//       case '-':
//         alert(x-y);
//         break;
//         case '*':
//         alert(x*y);
//         break;
//         case '+':
//         alert(x+y);
//         break;
    
//       default:
//         alert('enter correct values')
//         break;
//     }
//   }

// }

// جلسه پنجم
// function getJS(){
  // for (let i = 0; i < 10; i++) {
  //   document.write(i+ "<br/>"); 
  // }
  
  // var max = eval(prompt('max:'));
  // var min = eval(prompt('min:'));
  // for (let i = min; i < max; i++) {
  //   document.write(i+ "<br/>");
  // }
  
// var s = ['ali', 'goli', 'kosar', 'hani'];
// for (let i = 0; i < s.length; i++) {
//   const element = s[i];
//   console.log(element);
// }

// while (min <= max) {
// document.write(min + '<br\>');
// min++; 
// }

// var input = prompt('please enter a number(* for finish):')
// var sum = 0; 
// while (input !='*') {
// sum += eval(input);
// input = prompt('please enter a number(* for finish):')
// }
// console.log(sum);

// var i = 10;
// do {console.log(i);
// i++; }
// while (i < 50)

// for (let i = 0; i < s.length; i++) {
//   console.log(s[i]);
//   if (s[i] === 'goli') {
//     break;
//   }
  
//   for (let i = 0; i < s.length; i++) {
    
//     if (s[i] === 'goli') {
     
//       continue;
//     }
//     console.log(s[i]);
// }

// var txt = '';
// var object = {firstName: 'John', lastName: 'Snow', age: 25};
// for (const key in object) {
//     txt += object[key] + ' ';
//   }
//   console.log(txt);
// }

// جلسه ششم - event
  // function txtBlur() {
  //   console.log('Im Out');
  // }
  // function txtFocus() {
  //   console.log('Im In');
  // }
  // function txtKeyup(e) {
  // //  console.log(e.keyCode);
  //   if (e.keyCode !== 8 && e.keyCode !== 13) {
  //     document.getElementById('counter').innerHTML = eval(document.getElementById('counter').innerHTML) + 1;
  //   } else if (e.keyCode == 8) {
  //     document.getElementById('counter').innerHTML = eval(document.getElementById('counter').innerHTML) - 1;
  //   } else if (e.keyCode == 13) {
  //     document.getElementById('txt2').focus();
  //   }
  // }
  // function txtKeydown(e) {
  // //  console.log('key is down');
  // console.log(e.keyCode);
  //   if (e.keyCode == 56) {
  //     e.preventDefault();
  //   }
  // }
  // function txtMouseover(th) {
  //   th.value = 'Mouse Is Over';
  // }
  // function txtMouseout(th) {
  //   th.value = 'Mouse Is Out';
  // }
  
  // جلسه هفتم مدیریت خطاها
  // function txtFocus() {
  //   console.log('22');
  //  try{
     
  //   console.log(error);
  //    }  
  // catch(e1){
  //   alert('there is an error' + '\n' + 'come back again');
  // }}

  // جلسه هشتم DOM
// var tar = document.getElementById('div1').getElementsByTagName('p');
// for (let i = 0; i < tar.length; i++) {
//  tar[i].innerHTML = i;
  
// }
// document.getElementById('div2').style.color = 'red';
// tar[1].style.borderWidth = '4px';
// tar[1].style.borderStyle = 'solid';

// alert(document.getElementById('div1'));
// alert(document.getElementById('div1').childNodes);
// alert(document.getElementById('div1').childNodes.length);
// alert(document.getElementById('div1').childNodes[1]);
// alert(document.getElementById('div1').parentNode);
// alert(document.getElementById('div1').parentNode.parentNode);
// alert(document.getElementById('div1').parentNode.firstChild);
// alert(document.getElementById('div1').parentNode.firstChild.nodeName);
// alert(document.getElementById('div1').parentNode.firstChild.nextSibling.nodeName);
// alert(document.nodeName);
// alert(document.getElementById('div1').parentNode.firstChild.nodeType);
// alert(document.getElementById('div1').firstChild.nextSibling.nodeType);
// alert(document.nodeType);
// alert(document.getElementById('div1').parentNode.firstChild.nodeValue);
// alert(document.getElementById('div1').firstChild.nextSibling.nodeValue);
// alert(document.nodeValue);

 // جلسه نهم تغییر درخت DOM

// function addLink() {
//   var link3 = document.createElement('a');
//   // var linkText = document.createTextNode('Link 3');
//   // link3.appendChild(linkText);
//   // console.log(link3);
//  link3.innerHTML = 'Link 3';
//  link3.href = '#';
//   // document.getElementById('d1').appendChild(link3);
// //   var target = document.getElementById('d1').getElementsByTagName('a')[1];
// //   document.getElementById('d1').insertBefore(link3, target);
// var prnt = document.getElementById('d1')
// var child1 = document.getElementById('d1').getElementsByTagName('a')[1];

// // prnt.removeChild(child);
// prnt.replaceChild (link3, child1);
// link3.onclick = function() {
//   console.log('goli');
//   console.log(document.documentElement);
//   console.log(document.body);
// }
// }

 // جلسه دهم رشته

//  var txt = 'salaamsvsfewvewvew';
//  console.log(txt.charAt(3));
//  console.log(txt.charCodeAt(3));
// console.log(txt); 
// console.log(txt.length);
// console.log(txt.constructor);
// function person(name, job, age){
// this.name = name;
// this.job = job;
// this.age = age;
// }
// var person1 = new person('ahmad', 'hammal', 23);
// console.log(person1);
// person.prototype.salary = null;
// person1.salary = '200$';
// console.log(txt.concat(' ali')); 
// console.log(txt.indexOf('a'));
// console.log(txt.indexOf(' ali')); 
// console.log(txt.indexOf('a', 3));  
// console.log(txt.lastIndexOf('a'));
// function addLink (){
// while (txt.indexOf('a') !== -1) {
//   txt.replace('a', 'b'); 
// }
// console.log(txt);
// }
// console.log(txt);
// console.log(txt.search('sa'));
// console.log(txt.slice(0,6));
// console.log(txt.split('a'));
// console.log(txt.split('s', 2));
// console.log(txt.substr(5, 3));
// console.log(txt.toUpperCase());
// console.log(txt.toLowerCase());
// console.log(txt.big());
// console.log(txt.bold());
// console.log(txt.anchor('top'));
// console.log(txt.fixed());
// console.log(txt.italics());
// console.log(txt.link());
// console.log(txt.small());
// console.log(txt.strike());
// console.log(txt.sup());
// console.log(txt.sub());
// document.getElementById('d1').innerHTML = txt.big();
// document.getElementById('d2').innerHTML = txt.anchor('top');
// document.getElementById('d3').innerHTML = txt.bold();
// document.getElementById('d4').innerHTML = txt.fixed();
// document.getElementById('d5').innerHTML = txt.italics();
// document.getElementById('d6').innerHTML = txt.link();
// document.getElementById('d7').innerHTML = txt.small();
// document.getElementById('d8').innerHTML = txt.strike();
// document.getElementById('d9').innerHTML = txt.sup();
// document.getElementById('d10').innerHTML = txt.sub();

//جلسه ۱۱ شی زمان
// var d = new Date();
// var d = new Date(111111111111111);
// var d = new Date('1980/05/29');
// var d = new Date(2010, 12, 03, 12, 35, 51, 45);
// console.log(d.getDay());
// console.log(d.getDate());
// console.log(d.getFullYear());
// console.log(d.getMilliseconds());
// console.log(d.getMinutes());
// console.log(d.getMonth());
// console.log(d.getSeconds());
// console.log(d.getTime());
// console.log(Date.parse('march 21, 2013'));
// console.log(d.setTime(1111111111111));
// console.log(d.toDateString());
// console.log(d.toString());

// جلسه ۱۲ - شی آرایه
// var persons = ['ali', 'goli', 'sali', 'abe'];
// console.log(persons.length);
// console.log(persons.concat('gull', 'ragnar'));
// console.log(persons.indexOf('gull'));
// console.log(persons.lastIndexOf('ali'));
// console.log(persons.join(','));
// console.log(persons.pop());
// persons.push('hes');
// persons.shift();
// persons.unshift('kamal');
// persons.reverse();
// console.log(persons.slice(1, 3));
// console.log(persons);
// console.log(persons.splice(1, 2, 'galum', 'mah'));
// console.log(persons.toString());
// console.log(persons.valueOf());

// جلسه ۱۳ - کلاس ریاضیات
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.round(Math.E));
// console.log(Math.random());
// console.log(Math.floor(3.1));
// console.log(Math.abs(-48));
// console.log(Math.ceil(2.1));
// console.log(Math.exp(2));
// console.log(Math.sqrt(81));
// console.log(Math.pow(3,3));
// console.log(Math.min(81, 33, 44, 33, 12, 4));
// console.log(Math.max(81, 33, 44, 33, 12, 4));

// جلسه ۱۴ RegExp
// var patt = new RegExp()
// var txt = 'sCrfvasrvemoagrvmersov';
// var patt = /[acgm]/;
// var patt = /[a-g]/;
// var patt = /[a-gB-D]/;
// var patt = /[^a-gB-D]/;
// console.log(patt.test(txt));
// console.log(patt.exec(txt));
// var txt2 = 'ali'
// var pat = /[a.i]/;
// console.log(pat.test(txt2));
// var txt3 = 'rslgn8j32!n';
// var pattt = /\w/;
// var pattt = /\W/;
// pattt = /\d/;
// pattt = /\D/;
// pattt = /\s/;
// pattt = /\S/;
// pattt = /\bars/;
// pattt = /\Bad/
// pattt = /a?/;
// pattt = /\d{3}/;
// pattt = /n$/;
// pattt = /^[a-z]/;
// console.log(pattt.test(txt3));
// console.log(pattt.exec(txt3));
// var patttt = /[^a-z]/;
// var pro = prompt('what is your name');
// if (!patttt.test(pro)) {
//  alert('it is valid')  
// } else {
//   alert('it is not valis');
// }

// جلسه ۱۵ BOM
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// var x;
// function openSite() {
//   x = window.open('http://www.google.com' , '', '_blank');
//   x.moveTo(600, 300);
//   x.resizeTo(1200,760);
// }
// function closeSite(){
//   x.close();
// }
// function closePage(){
//   window.close();
// }
// console.log(window.screen.availHeight);
// console.log(window.screen.availWidth);
// console.log(window.history.length);
// console.log(window.history.forward());
// console.log(window.history.back());
// console.log(window.navigator.appName);
// var y = setInterval(function () {
//   var d = new Date();
//   document.getElementById('timer').innerHTML = d.toLocaleTimeString()
// }, 1000);
// var timeState = true;
// function toggleTime(btn) {
//  if(timeState){
//    clearInterval(y);
//    btn.value = "play";
//    timeState = false;
//  } 
//  else{
//   y = setInterval(function () {
//     var d = new Date();
//     document.getElementById('timer').innerHTML = d.toLocaleTimeString()
//   }, 1000);
//   btn.value = 'pause';
//   timeState = true;
//  }
// }

// جلسه ۱۶ تمرین
// var persons = new Array;
// var num = 0;
// function addData() {
//   var name = prompt('What Is The Name?');
//   var job = prompt('What Is The Job?');
//   var age = prompt('What Is The Age?');    
//   person = {
//    name: name,
//    job: job,
//    age: age 
//   }
//   persons[num++] = person;
// }
// function showData() {
 
//   var table = '<table><tr><th>Name</th><th>Job</th><th>Age</th></tr>'
//   for (let i = 0; i < persons.length; i++) {
//     table += '<tr>'
//     table += '<td>'+persons[i].name+'</td>';
//     table += '<td>'+persons[i].job+'</td>'
//     table += '<td>'+persons[i].age+'</td>'
//     table += '</tr>'
    
//   }
//   table += '</table>'
//   document.getElementById('table').innerHTML = table;
// جلسه ۱۷ تمرین فاکتوریل، بمم، فیبوناچی

//n! = n(n-1)!
function factorial(a){
  var a = document.getElementById('txt1').value;
//   var aa = 1;

//   for (let index = a; index > 0; index--) {
//     aa *= index;
//   }
// document.getElementById('ans1').innerHTML = aa;
document.getElementById('ans1').innerHTML = recFac(a);
}

function recFac(k) {
  if (k == 1 || k == 0) {
    return 1;
  } else {
    return k*recFac(k-1);
  }
}


function gcd(a, b) {
  var b = document.getElementById('txt2').value;
  var c = document.getElementById('txt3').value;
//   var x;
//  do {
//   x = b%c;
//   b = c;
//   c = x;

//  } while (x!==0){
//   document.getElementById('ans2').innerHTML = b;
//  };
 document.getElementById('ans2').innerHTML = recGCD(b, c);
}

function recGCD(b, c) {
  if (b%c == 0) {
    return c
  } else {
    return recGCD(c, b%c)
  }
}

//1 1 2 3 5 
function fibonachi(d) {
  var d = document.getElementById('txt4').value;
  var fib = new Array();
  fib[1] = 1;
  fib[2] = 1;
  for (let i = 3; i <= d; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }
  document.getElementById('ans3').innerHTML = fib[d];
  // document.getElementById('ans3').innerHTML = recfib(d);
}
// function recfib(d) {
//   if (d == 1 || d == 2) {
//     return 1;
//   } else {
//     return recfib (d-1)  + recfib (d-2);
//   }
// }