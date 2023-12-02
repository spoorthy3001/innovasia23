var btn = document.querySelector('.btn');
var imageContainer = document.getElementById('image-container');
var VideoCon=document.getElementById('video-container');
var nam=document.getElementById('hii');
var nam2=document.getElementById('hii2');

function womanClick(){
    btn.style.left = '0'; 
    imageContainer.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxFCdAcHEtFS8EwzCxG_MUxA6u0npbljahw&usqp=CAU";
    VideoCon.src="https://www.youtube.com/embed/A6rX0cWf-_M";
    nam.innerHTML ='Saree';
    nam2.innerHTML='The saree, an ancient Indian garment, has a rich history spanning millennia. Originating from the Indus Valley Civilization, it has become a symbol of cultural heritage and timeless elegance. Today, it continues to be a revered and versatile attire.'
    
}
function manClick() { 
    btn.style.left = '110px'; 
    imageContainer.src ="https://www.cinejosh.com/newsimg/newsmainimg/nagarjuna-gets-anr-pancha-and-watch-for-oggade-chinni-nayana_b_1912150632.jpg";
    VideoCon.src="https://www.youtube.com/embed/rFJXUBodu98";
    nam.innerHTML ='Dhothi';
    nam2.innerHTML='The dhoti, a traditional Indian garment for men, has roots tracing back thousands of years. Originating in ancient India, it has been worn by various communities and holds cultural significance. The dhoti remains a symbol of tradition and simplicity in contemporary times.'
    
}
