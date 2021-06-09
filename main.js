var reasons= ["The Family Book"
    ," Dayamay Maji ", 
"   Rama Maji", 
" Aabir Maji", 
"Chumki Maji",
"Daizy"];
var images= [
    "https://i.pinimg.com/originals/61/b2/d3/61b2d33f39927afa72e5f57a28cc7c83.gif",
    "https://cdn.videoplasty.com/gif/man-working-at-his-desk-stock-gif-3766-1280x720.gif",
"https://cdn.dribbble.com/users/1049434/screenshots/3646085/say_hello.gif",
"https://lh3.googleusercontent.com/proxy/4SPOKWUeccTCZm-a7UF3YMR2v4ZECCp4UQH4pNm00jcLEhYLAxvJUcZ6qXAsO67Ko5wMlCKDCVPSyb1waazbTQTn",
"https://lh3.googleusercontent.com/proxy/7eRq7d86VfXiJhWaExna-xf2o5KyYkzPjm7u5rLrOPCz2dc3CXQ46xL3jliuDZzvNB5hePnWmTNfDLHXUtRplY0vy6Mtiq8hI3cfLI4KKlgq1iC-3ybsvstpCywJ-a53IksPH1-c3yqC3gkb1FHMAGhuzOo",
"https://i.pinimg.com/originals/7d/de/cd/7ddecdee69cfc6a97e3b5beb9d3064df.jpg"];
var i = 0;
function next(){
  document.getElementById ("img1").src= images[i];
  document.getElementById ("1stp"). innerHTML= reasons[i];
i++;
if (i == 6) {i = 0}; }