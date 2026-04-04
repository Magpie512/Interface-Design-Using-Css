var canvas = document.getElementById('main'); 
var context = canvas.getContext('2d'); 
context.fillRect(0, 0, 50, 50);

context.beginPath(); 
context.moveTo(0, 0); 
context.lineTo(100, 100); 
context.lineWidth = 1; 
context.strokeStyle = 'rgb(255, 0, 0)'; 
context.stroke();
