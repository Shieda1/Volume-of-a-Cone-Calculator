// https://calculator.swiftutors.com/volume-of-a-cone-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const volumeofConeRadio = document.getElementById('volumeofConeRadio');
const baseRadiusoftheConeRadio = document.getElementById('baseRadiusoftheConeRadio');
const heightofConefromVertextoBaseRadio = document.getElementById('heightofConefromVertextoBaseRadio');

let volumeofCone;
const PI = Math.PI;
let baseRadiusoftheCone = v1;
let heightofConefromVertextoBase = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

volumeofConeRadio.addEventListener('click', function() {
  variable1.textContent = 'Base Radius of the Cone';
  variable2.textContent = 'Height of Cone from Vertex to Base';
  baseRadiusoftheCone = v1;
  heightofConefromVertextoBase = v2;
  result.textContent = '';
});

baseRadiusoftheConeRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume of Cone';
  variable2.textContent = 'Height of Cone from Vertex to Base';
  volumeofCone = v1;
  heightofConefromVertextoBase = v2;
  result.textContent = '';
});

heightofConefromVertextoBaseRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume of Cone';
  variable2.textContent = 'Base Radius of the Cone';
  volumeofCone = v1;
  baseRadiusoftheCone = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(volumeofConeRadio.checked)
    result.textContent = `Volume of Cone = ${computeVolumeofCone().toFixed(2)}`;

  else if(baseRadiusoftheConeRadio.checked)
    result.textContent = `Base Radius of the Cone = ${computeBaseRadiusoftheCone().toFixed(2)}`;

  else if(heightofConefromVertextoBaseRadio.checked)
    result.textContent = `Height of Cone from Vertex to Base = ${computeHeightofConefromVertextoBase().toFixed(2)}`;
})

// calculation

function computeVolumeofCone() {
  return (1 / 3) * PI * Math.pow(Number(baseRadiusoftheCone.value), 2) * Number(heightofConefromVertextoBase.value);
}

function computeBaseRadiusoftheCone() {
  return Math.sqrt((Number(volumeofCone.value) * 3) / (PI * Number(heightofConefromVertextoBase.value)));
}

function computeHeightofConefromVertextoBase() {
  return (Number(volumeofCone.value) * 3) / (PI * Math.pow(Number(baseRadiusoftheCone.value), 2));
}