INPUT : 
 
1) index.html 
<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <title>Netflix Clone</title> 
    <link rel="stylesheet" href="styles.css"> 
</head> 
<body> 
 
    <!-- Navbar --> 
    <div class="navbar"> 
        <h2 class="logo">NETFLIX</h2> 
        <button class="signin">Sign In</button> 
    </div> 
 
    <!-- Banner --> 
    <div class="banner"> 
        <div class="banner-content"> 
            <h1>Stranger Things</h1> 
            <p>When a young boy disappears, his friends uncover supernatural 
mysteries.</p> 
            <div class="banner-buttons"> 
                <button class="play">▶ Play</button> 
                <button class="info">ℹ More Info</button> 
            </div> 
        </div> 
    </div> 
 
    <!-- Movies Section --> 
    <div class="row"> 
        <h2>Trending Now</h2> 
        <div class="row-posters"> 
            <img src="images/stranger.jpg"> 
            <img src="images/moneyheist.jpg"> 
            <img src="images/dark.jpg"> 
            <img src="images/witcher.jpg"> 
            <img src="images/lucifer.jpg"> 
        </div> 
    </div> 
 
    <div class="row"> 
        <h2>Top Rated</h2> 
        <div class="row-posters"> 
            <img src="images/dark.jpg"> 
            <img src="images/witcher.jpg"> 
            <img src="images/stranger.jpg"> 
            <img src="images/lucifer.jpg"> 
        </div> 
    </div> 
 
</body> 
</html> 
 
 
2) styles.css 
* { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
    font-family: Arial, sans-serif; 
} 
 
body { 
    background-color: #111; 
    color: white; 
} 
 
/* Navbar */ 
.navbar { 
    position: fixed; 
    top: 0; 
    width: 100%; 
    padding: 15px 30px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent); 
    z-index: 10; 
} 
 
.logo { 
    color: red; 
    font-size: 28px; 
} 
 
.signin { 
    background: red; 
    border: none; 
    padding: 8px 16px; 
    color: white; 
    cursor: pointer; 
    border-radius: 4px; 
} 
 
/* Banner */ 
.banner { 
    height: 450px; 
    background: url("images/banner.jpg") center/cover no-repeat; 
    display: flex; 
    align-items: center; 
    padding: 40px; 
} 
 
.banner-content { 
    max-width: 500px; 
} 
 
.banner h1 { 
    font-size: 48px; 
} 
 
.banner p { 
    margin: 15px 0; 
    font-size: 16px; 
} 
 
.banner-buttons button { 
    padding: 10px 20px; 
    border: none; 
    margin-right: 10px; 
    cursor: pointer; 
    font-weight: bold; 
    border-radius: 4px; 
} 
 
.play { 
    background: white; 
    color: black; 
} 
 
.info { 
    background: gray; 
    color: white; 
} 
 
/* Rows */ 
.row { 
    margin-top: 20px; 
    padding: 20px; 
} 
 
.row h2 { 
    margin-bottom: 10px; 
} 
 
.row-posters { 
    display: flex; 
    overflow-x: auto; 
    gap: 10px; 
} 
 
.row-posters img { 
    width: 150px; 
    border-radius: 6px; 
    transition: transform 0.3s; 
    cursor: pointer; 
} 
 
.row-posters img:hover { 
    transform: scale(1.15); 
} 
 
/* Hide scrollbar */ 
.row-posters::-webkit-scrollbar { 
    display: none; 
} 
 
3) index.js 
const express = require('express'); 
const app = express(); 
app.use(express.static('public')); 
app.listen(4000,()=>{ 
console.log("Server is Running"); 
}) 
OUTPUT : 
