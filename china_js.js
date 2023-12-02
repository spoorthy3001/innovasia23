var btn = document.querySelector('.btn');
var imageContainer = document.getElementById('image-container');
var VideoCon=document.getElementById('video-container');
var nam=document.getElementById('hii');
var nam2=document.getElementById('hii2');

function womanClick(){
    btn.style.left = '0'; 
    imageContainer.src ="https://www.shutterstock.com/image-photo/asian-chinese-woman-traditional-cheongsam-260nw-2259434275.jpg";
    VideoCon.src="https://www.youtube.com/embed/ygUTaG93IHRvIHdlYXIgYSBoYW5mdQ";
    nam.innerHTML ='Hanfu';
    nam2.innerHTML='This is the most traditional Chinese clothing. It is an ancient costume that has been updated by younger generations.'
    
}
function manClick() { 
    btn.style.left = '110px'; 
    imageContainer.src ="https://www.cinejosh.com/newsimg/newsmainimg/nagarjuna-gets-anr-pancha-and-watch-for-oggade-chinni-nayana_b_1912150632.jhttps://i.pinimg.com/564x/ec/f5/46/ecf546ffe1019f8ee7b848b303d4b7be.jpg";
    VideoCon.src="https://www.youtube.com/embed/xwalnJcsHDg";
    nam.innerHTML ='Manchu';
    nam2.innerHTML='The traditional Chinese Hanfu-style of clothing for men was gradually replaced. Over time, the Manchu-style of male dress gained popularity among Han men. Changshan was considered formal dress for Chinese men before Western-style suits were widely adopted in China.'
    
}
