const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let joke = '今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。';

let aList = [
    '怪兽威利',
    '大老爹',
    '圣诞老人'
];

let bList = [
    '肯德基',
    '迪士尼乐园',
    '白宫'
];

let cList = [
    '自燃了',
    '在人行道化成了一坨泥',
    '变成一条鼻涕虫爬走了'
];


randomize.addEventListener('click', result);

function result() {
  let newJoke = joke;
  if(customName.value !== '') {
    let name = customName.value;
    newJoke = newJoke.replace('李雷', name);
  }
//   console.log(newJoke.replace(/:inserta:'/g, randomValueFromArray(aList)));
  newJoke = newJoke.replace(/:inserta:/g, randomValueFromArray(aList));
  newJoke = newJoke.replace(':insertb:', randomValueFromArray(bList));
  newJoke = newJoke.replace(':insertc:', randomValueFromArray(cList));
//   console.log(newJoke)
  if(document.getElementById("american").checked) {
    let weight = Math.round(300);
    let temperature = Math.round(94);
    newJoke = newJoke.replace('34 摄氏度', temperature + ' 华氏度');
    newJoke = newJoke.replace('130 公斤', weight + ' 磅');
    // console.log(temperature + ' 华氏度');
  }

  story.textContent = newJoke;
  story.style.visibility = 'visible';
}