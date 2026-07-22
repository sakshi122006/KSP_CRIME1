// ==============================
// KSP Crime Intelligence AI
// dashboard.js
// ==============================

// Welcome Message
window.onload = function () {
    setTimeout(() => {
        alert("👮 Welcome to KSP Crime Intelligence AI Dashboard");
    }, 500);
};

// ==============================
// Animated Counter
// ==============================

const counters = document.querySelectorAll(".card h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText.replace(/,/g, ''));

    let count = 0;

    const speed = target / 80;

    function updateCounter() {

        if (count < target) {

            count += speed;

            counter.innerText = Math.floor(count).toLocaleString();

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target.toLocaleString();

        }

    }

    updateCounter();

});

// ==============================
// Crime Trend Chart
// ==============================

const crimeCtx = document.getElementById("crimeChart");

if (crimeCtx) {

new Chart(crimeCtx, {

type: "line",

data: {

labels: [

"Jan",

"Feb",

"Mar",

"Apr",

"May",

"Jun"

],

datasets: [

{

label: "Crime Cases",

data: [

980,

1045,

1120,

1015,

1234,

1190

],

borderColor: "#1565C0",

backgroundColor: "rgba(21,101,192,.15)",

fill: true,

tension: .4,

pointRadius:5

}

]

},

options: {

responsive:true,

plugins:{

legend:{

display:true

}

}

}

});

}

// ==============================
// Crime Category Chart
// ==============================

const pieCtx = document.getElementById("pieChart");

if(pieCtx){

new Chart(pieCtx,{

type:"doughnut",

data:{

labels:[

"Theft",

"Cyber Crime",

"Murder",

"Fraud",

"Robbery",

"Others"

],

datasets:[{

data:[

35,

20,

10,

15,

12,

8

],

backgroundColor:[

"#1565C0",

"#29B6F6",

"#FF5252",

"#FFA726",

"#66BB6A",

"#9E9E9E"

]

}]

},

options:{

responsive:true

}

});

}

// ==============================
// Quick Action Buttons
// ==============================

const actionButtons=document.querySelectorAll(".action-grid button");

actionButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

alert(btn.innerText+" Module Coming Soon");

});

});

// ==============================
// AI Assistant Buttons
// ==============================

const aiButtons=document.querySelectorAll(".buttons button");

aiButtons.forEach(button=>{

button.addEventListener("click",()=>{

if(button.innerText==="Ask AI"){

alert(

"🤖 AI Assistant\n\n" +

"• Bengaluru Urban has the highest crime density today.\n\n" +

"• 3 repeat offenders identified.\n\n" +

"• Vehicle theft expected to increase this weekend."

);

}

else{

alert("🎤 Voice Assistant Prototype");

}

});

});

// ==============================
// View FIR Buttons
// ==============================

const viewButtons=document.querySelectorAll(".view-btn");

viewButtons.forEach(button=>{

button.addEventListener("click",()=>{

alert("Opening FIR Details...");

});

});

// ==============================
// Sidebar Navigation
// ==============================

const menu=document.querySelectorAll(".sidebar ul li");

menu.forEach(item=>{

item.addEventListener("click",()=>{

menu.forEach(i=>i.classList.remove("active"));

item.classList.add("active");

});

});

// ==============================
// Card Hover Animation
// ==============================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// ==============================
// Notification Popup
// ==============================

setTimeout(()=>{

console.log("AI Alert Loaded Successfully");

},2000);

// ==============================
// Current Date & Time
// ==============================

const today=new Date();

console.log("Login Time : "+today.toLocaleString());

// ==============================
// Fake AI Alert Rotation
// ==============================

const alerts=[

"🚨 High crime activity detected in Bengaluru.",

"📈 Cyber fraud increased by 18% this week.",

"🕵 Repeat offender linked to 3 FIRs.",

"📍 New hotspot identified near Mysuru."

];

let index=0;

setInterval(()=>{

console.log(alerts[index]);

index++;

if(index>=alerts.length){

index=0;

}

},5000);

// ==============================
// Logout
// ==============================

const logout=document.querySelector(".sidebar li:last-child");

if(logout){

logout.addEventListener("click",()=>{

if(confirm("Logout from Dashboard?")){

window.location.href="index.html";

}

});

}
