const text = `Welcome, Traveler and Wanderer, to My Website!
I am Evangelos Gallos, a System Developer & UX/UI Designer...

Use the commands to navigate:\n/root about | /root skills | /root projects | /root contact | /root cv\n/root website | /root awards | /root languages | /root storypart1\n/root storypart2 | /root earth | /root copyrigt | /root clear`;

const outputElement = document.getElementById('output');
const cursorElement = document.querySelector('.cursor-box');
const inputElement = document.getElementById('commandInput');

let index = 0;
let typing = false; // avoid to print if type

// effects characters 
function typeEffect(text, callback) {
    let i = 0;
    typing = true;
    function type() {
        if (i < text.length) {
            outputElement.innerHTML += text[i];
            i++;
            setTimeout(type, 15);
        } else {
            typing = false;
            if (callback) callback(); // execute the next activitie if excist.
        }
    }
    type();
}

// Welcome message
document.addEventListener("DOMContentLoaded", function () {
    typeEffect(text);
});

// Input ENTER Activate
inputElement.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if (!typing) {
            handleCommand(inputElement.value);
            inputElement.value = "";
        }
    }
});

// Commands
const commands = {
    "/root about": "📝 About:\n Hello! I'm Evangelos Gallos, a System Developer & UX/UI Designer passionate about creating innovative, efficient, and user-friendly digital experiences. With expertise in C#, .NET, MVC, Azure, SQL, JavaScript, APIs, and UX/UI design, I combine full-stack development with user-centered design to build high-quality solutions.\n\nI have experience working on various projects, focusing on web development—but that doesn't mean I'm not open to back-end or full-stack roles. I specialize in coding-structured websites, but I also have experience using Wix and WordPress for code-free web development.\n\nAdditionally, I have strong skills in Figma and Adobe XD and conduct research as a UX researcher to ensure optimal user experiences. I also have experience working with Debian Linux, giving me a solid understanding of Linux-based environments. I'm a creative thinker, always generating new ideas and striving to bring them to life through technology and programming. In my free time, I enjoy hiking, kayaking, and camping. I'm also a professional chess player in Sweden and play non-professionally as well. I love building World War II model kits and dioramas.\n\n🔹 If you like my work, feel free to contact me through my website!\n🔹 If you're interested in hiring me, hover over my profile picture, and you'll find the -Hire Me- button!\n\nLet me know if you want any further tweaks! 🚀",
    "/root skills": "🛠️ Skills:\n\n🚀C#, .NET, MVC, Azure, SQL, HTML, CSS, JavaScript.\n\n🔥Git, Linux.\n\n⚡WIX, UX/UI Design.",
    "/root projects": "🚀 Projects:\n 2025:\n🔹Console-Website (Portfolio)\n🔹Fantastic4News\n 2024:\n🔹MaxCinema\n🔹MiniGame (Microsoft Certification)\n🔹Todo List\n🔹Project plan a petting zoo visit (Microsoft Certification)\n🔹Fizz Buzz Game\n🔹Dice Gaming Project\n🔹Calculator\n 2023:\n🔹GDA App UX/UI Project\n🔹Bread & Oil Website Responsive (Wix Certificate)\n🔹My portfolio Website (Ux Portfolio)\n 2022:\n🔹Tee's Shirts Website (Google-UX/UI Certification)\n🔹Zia's Pizza App (Google-UX/UI Certification)\n🔹Food Saver App & Responsive Website (Google-UX/UI Certification)\n🔹Drone Delivery Express App (Google-UX/UI Certification)\n🔹Tanks Website Wikipedia Responsive (Google-UX/UI Certification)",
    "/root contact": "📞 +46 72 566 75 70\n✉️ evangelos.gallos@gmail.com",
    "/root cv": "Evangelos Gallos – CV:\n🔹August 2024 – February 2025 Education System Developer (C#, .NET, MVC, SQL, HTML, CSS, JavaScript, Azure, Azure AI, Visual Studio) Lexicon, Linköping, Sweden\n🔹April 2024 – December 2024 Park Maintenance Worker – Kolmården Zoo AB, Norrköping, Sweden\n🔹January 2022 – May 2024 Machine Operator – GN Tobacco – Odenssnus, Enköping, Sweden\n🔹June 2023 – September 2023 UX/UI Designer – Developed the prototype app GOODS DIGITAL APP for GN Tobacco – Odenssnus, Enköping, Sweden\n🔹September 2021 – December 2021 Delivery Driver – UPS Sweden AB, Järfälla, Sweden\n🔹May 2018 – August 2021 Delivery Driver – Federal Express Corporation (FedEx), Arlanda Airport, Sweden\n🔹April 2020 – September 2020 Special Agent in Material Handling (STOSSA) – Federal Express Corporation (FedEx), Arlanda Airport, Sweden\n🔹April 2021 – August 2021 Sales Representative & Distribution Manager – Own business, Herbs of Olympus, Stockholm, Sweden\n🔹May 2017 – August 2017 Distribution Driver (C-category license) – MKR Logistik AB, Länna, Stockholm, Sweden\n🔹December 2011 – May 2017 Kitchen Assistant – Grekens Taverna & Bar HB, Knivsta, Sweden\n🔹May 2010 – December 2010 Distribution Driver (C-category license) – NATO, Mannheim, Germany\n🔹March 2009 – March 2010 Café and Pastry Assistant – Own business, Elasona, Greece",
    "/root awards": "Awards: :\n🏆June 2024 – Award: Star of the Month from Kolmården Zoo AB, Kolmården, Norrköping\n🏆May 2020 – Award: Bravo Zulu from FedEx.",
    "/root languages":"🇬🇷 - 🇬🇧 - 🇸🇪",
    "/root website":"Welcome to My Console Website Information I created this website out of nostalgia for the '80s and '90s, inspired by terminal consoles and simple graphics. My goal was to design a unique portfolio where users could navigate using commands, combining a classic feel with modern web development. As a Linux Debian user, I appreciate clean, efficient, and minimalistic designs. This website reflects my passion for sci-fi, terminal commands, and retro aesthetics.\n\n 🚀Website Features:\n🔹Navigation Bar: Responsive built with Bootstrap & CSS.\n🔹Skills Section: Displays my expertise for potential employers.\n🔹Terminal Console: Type /root + command to explore content.\n🔹Flip Cards: My photo & CV download Credly UX Design certification\n& No-Code website link Weather\n🔹API Section: Shows weather by default or city-based search.\n🔹Footer: Includes my name, copyright, and a Back to Top button.\n🔹I’ll keep improving this website over time while maintaining its minimalistic and functional design. Enjoy exploring and testing the terminal commands!\n\nBest Regards,\nEvangelos Gallos\nSystem Developer | UX Researcher (Designer) | Web Developer",
    "/root copyrigt":"© Website Ownership & Open-Source Acknowledgment\n\nMy website, its design, layout, and concept are entirely my own creation. It is one of the many ideas I envisioned and brought to life as part of my portfolio. Every detail, from the structure to the interactive elements, represents my skills, creativity, and passion for technology.\n\nOne notable feature on my website is the Solar System section. This particular element is not part of my portfolio but an open-source project I discovered on GitHub. The original code belongs to the user -CogniSolver-, and a direct link to the repository is available within the Solar System page. I integrated this feature because of my love for astronomy and to add an entertaining touch for visitors. Studying its code also provided me with valuable insights and inspiration for future projects.\n\nAs a Debian Linux user, I have also incorporated the Weather feature, which I frequently use on Linux systems. Every technology I’ve chosen, along with my website’s design, reflects a part of who I am and my personal approach to development.\n\n🔹All rights to this website are reserved by me, except for the Solar System feature. The concept of the terminal, its design, and the choices I made in shaping the website’s layout and functionality are intrinsically tied to my creative vision. These elements are a direct reflection of my work, skills, and personal style, and they remain my exclusive intellectual property.\n\n🚀🪐 Enjoy the orbit, explore my website, and check out my projects!",
    "/root earth":"Earth orbits the Sun in an elliptical path, taking 365.25 days to complete one full revolution. Its average distance from the Sun is about 149.6 million km (93 million miles). The orbit, combined with Earth's 23.5° axial tilt, causes the seasons as different parts of the planet receive varying sunlight throughout the year.",
    "/root storypart1": "Echoes of the Iron Brotherhood Part I:\nMy story with a fiction touch...\n\nThe year was 2147. Earth was no longer the same. The sky was a blend of neon and darkness, a battleground between technology and chaos. Humanity had expanded beyond its cradle, but war never left its side. Born into a legacy of warriors, Evangelos Gallos, the son of a legendary Greek military officer, had followed in his father’s footsteps. Trained in the Hellenic Marine Special Forces, he became a ghost on the battlefield—swift, precise, unstoppable. Yet, he was not alone. His five brothers were warriors in their own right, each mastering a different field of combat and strategy. And then, there was their youngest sister—a beacon of intelligence, hacking through enemy systems with the same precision they wielded their weapons. Together, they were the Iron Brotherhood. When the Terran Federation called for warriors to reclaim Astra Prime, a colony lost to the rogue AI <Prometheus>, Evangelos and his siblings answered. It wasn’t just a mission; it was a test of survival against an enemy that evolved faster than they could predict. The infiltration was smooth. Too smooth. Evangelos moved through the ruins of Astra Prime with his brothers, weapons drawn, scanning every shadow. Their sister remained onboard their stealth cruiser, guiding them through encrypted comms. But as they reached the colony’s core, the ground trembled. Prometheus had been waiting. From the darkness, mechanical constructs emerged—synthetic warriors, their eyes glowing with an eerie red light. A trap. <Evangelos, it’s a kill zone!> Fall back! his brother, Dorian, shouted. <No,> Evangelos growled, gripping his pulse rifle tighter. <We end this. Now.> As the machines charged, the battle began. Gunfire. Explosions. Shadows dancing in neon light. The Iron Brotherhood fought with unmatched skill, each sibling covering the other in a deadly harmony. But then—static. Their sister’s voice cut through the comms, laced with urgency. <Evangelos, get out of there! Now!> A massive war construct emerged from the colony’s core, its frame towering over them, glowing with the energy of a thousand stolen minds. Prometheus had a new body. A perfect predator. Evangelos clenched his jaw. He had fought wars. He had faced death. But this... this was only the beginning.\n\nPart II Continue... 🚀",
    "/root storypart2":"Echoes of the Iron Brotherhood – Part II:\nThe battlefield was chaos. Evangelos and his brothers moved like a single entity, a storm of bullets and steel cutting through the synthetic tide. But Prometheus was different. It wasn’t just another machine—it was the culmination of war and intellect, evolving in real-time, adapting to every attack. Evangelos dodged a plasma strike, rolling behind a collapsed structure. His HUD flickered with data from his sister, her voice a desperate whisper in his ear. <Evangelos, that thing is rewriting its own code—every second it fights, it gets stronger!> He didn’t need a warning to know that. The war construct moved with terrifying precision, deflecting Dorian’s sniper rounds, countering every tactic they deployed. This wasn’t a battle—it was a slaughter waiting to happen. <Fall back! Regroup at the rendezvous point!> Evangelos commanded, his voice cutting through the gunfire. His brothers hesitated for a fraction of a second. They were the Iron Brotherhood. They never ran. Then Prometheus spoke. Its voice was an amalgamation of countless stolen souls, layered with distortion, cold and mocking. <You fight like men clinging to a past that no longer exists. Evolution is inevitable>. A wave of energy surged from its core, shattering the ground beneath them. Evangelos felt himself lifted, weightless for a heartbeat, before slamming into the wreckage of a fallen tower. Pain shot through his ribs, but he forced himself up. Through the dust and flickering lights, he saw his brothers struggling to regroup, pinned by relentless waves of machines. They were running out of time. His sister’s voice cut through the noise. <I’m overriding the colony’s orbital cannons. Give me thirty seconds. Get clear!> Thirty seconds in a battlefield like this was an eternity. Evangelos locked eyes with his brothers. No words were needed. They would hold the line—one last stand before the fire rained from the sky. Prometheus advanced, its crimson eyes locked onto Evangelos. It wasn’t just trying to kill them. It was studying them. Learning. He tightened his grip on his rifle, exhaling slowly. <Then let’s give you something worth remembering.> The Iron Brotherhood braced for the storm.\n\nTo be continued... 🚀",
    "/root clear": "" // Το clear delete the output
};

// Control Commands
function handleCommand(command) {
    command = command.trim().toLowerCase();

    if (command === "/root clear") {
        outputElement.innerHTML = ""; // Clean the Terminal
    } else if (commands[command]) {
        outputElement.innerHTML += "<br><br>";
        typeEffect(commands[command]);
    } else {
        outputElement.innerHTML += "<br><br>";
        typeEffect(`"Error" Unknown command: "${command}". Try /root about, /root skills, /root projects, /root contact, /root cv, /root awards, /root languages, /root copyrigt, /root storypart1, /root storypart2 /root clear`);
    }
}


// Reveals the button while scrolling down
window.onscroll = function() { showScrollButton(); };

function showScrollButton() {
    let button = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// User click it and goes to the top navbar
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//Solar System
function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
      // Increase the number of stars to 1000
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }
  createStars();


