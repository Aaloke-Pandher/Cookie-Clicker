// Cookie Clicker

// Variables 
let cookieBtn = document.getElementById("cookie-btn");
let total = document.getElementById("Total"); 
let totalCookies = 0; 
let upgradeBtn = document.getElementById("upgrade-click"); 
let x = 1;
let upgradeBtn2 = document.getElementById("upgrade-click2"); 
let upgradeBtn3 = document.getElementById("upgrade-click3"); 
let autoBtn = document.getElementById("Auto-Click"); 
let autoCookies = x;  
let chefBtn = document.getElementById("Chef"); 
let autoChef = 2; 
let cost = 200; 

// Event Listener 
cookieBtn.addEventListener("click", cookieClick);  
upgradeBtn.addEventListener("click", upgradeClick); 
upgradeBtn2.addEventListener("click", upgradeClicktwo);
upgradeBtn3.addEventListener("click", upgradeClickthree); 
autoBtn.addEventListener("click", autoClick); 
chefBtn.addEventListener("click", chefCookies); 

// Upgrade 
function upgradeClick() { 
    if (totalCookies >= 100) { 
        upgradeBtn.style.visibility="hidden"; 
        document.getElementById("upgrade-text").style.visibility="hidden";
        totalCookies-=100;
        x = x * 2;  
        upgradeBtn2.style.visibility="visible"; 
        document.getElementById("upgrade-text2").style.visibility="visible"; 
    } 
} 

// Upgrade 2
function upgradeClicktwo() {
    if (totalCookies >= 500) { 
        upgradeBtn2.style.visibility="hidden";
        document.getElementById("upgrade-text2").style.visibility="hidden";
        totalCookies-=500;
        x = x * 2;  
        upgradeBtn3.style.visibility="visible"; 
        document.getElementById("eightxc").style.visibility="visible";
        autoBtn.style.visibility="visible"; 
        document.getElementById("Auto-Text").style.visibility="visible";
    }
} 

// Upgrade 3
function upgradeClickthree() { 
    if (totalCookies >= 2000) {
        upgradeBtn3.style.visibility="hidden";
        document.getElementById("eightxc").style.visibility="hidden"; 
        totalCookies-=2000;
        x = x * 2;
    } 
} 

// Auto Clicker
function autoClick() {
    if (totalCookies >= 10000) {  
        autoBtn.style.visibility="hidden";
        document.getElementById("Auto-Text").style.visibility="hidden"; 
        totalCookies-=10000;
    } 
    function autoCookies () {      
        totalCookies += x;
        total.innerHTML = totalCookies
    } 
    setInterval(autoCookies, 10);
} 

// Chef 
function chefCookies () {
    if (totalCookies >= cost) { 
            totalCookies-=cost; 
            cost = cost * 1.2;
            document.getElementById("COST").innerHTML = cost; 
            Math.round(cost);
    } 
    function autoChef () {  
        totalCookies += 2; 
        total.innerHTML = totalCookies;
        }
    setInterval(autoChef, 600); 
}

// Event Function 
function cookieClick() {
totalCookies = totalCookies + x; 
total.innerHTML = totalCookies;
} 