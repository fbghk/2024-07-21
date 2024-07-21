function foo () {
  return
  {}
  // asi => return; {};
  // 개발자 => return{};
}

console.log(foo());

var bar = function () {}
(function() {})();

//asi 예측 -> var bar = function () {} (function() {})();
//개발자 예측 -> var bar = function () {}; (function() {})();
//* Type Error: (intermediate value)(...) is not a function