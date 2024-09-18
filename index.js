var string = 'Hello World.';
var search = 'l';
var count = 0 ;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++){
  //'l' 이면 카운트를 증가시킨다.
  if (string[i] === search) count++;
}

console.log(count); // 3

//참고로 String.prototype.match 매서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); // 3