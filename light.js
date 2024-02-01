const colors = ['#ff69b4', '#00ff00', '#0000ff', '#ffff00'];
var lightEntities = document.querySelectorAll('.blinking-light');
var currentIndex = 0;

function toggleColor() {
  currentIndex = (currentIndex + 1) % colors.length;
  lightEntities.forEach(function (lightEntity) {
    lightEntity.setAttribute('light', 'color', colors[currentIndex]);
  });
}
setInterval(toggleColor, 500);

var lights = [
    document.querySelector('#light1'),
    document.querySelector('#light2'),
    document.querySelector('#light3'),
    document.querySelector('#light4')
  ];

  var interval = 10; 
  var angles = [0, 180, 360 , 540];

  setInterval(function () {
    angles = angles.map(angle => angle + 1);

    angles.forEach(function (angle, index) {
      var x = -7 * (index + 1) + Math.cos(angle * Math.PI / 180) * 10;
      var z = 20 + Math.sin(angle * Math.PI / 180) * 10;

      lights[index].setAttribute('position', { x: x, y: -4, z: z });
      lights[index].setAttribute('light', 'color', getRandomColor());
    });
  }, interval);

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }