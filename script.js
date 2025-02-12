const text = `Welcome, Traveler and Wanderer, to My Website!
I am Evangelos Gallos, a System Developer & UX/UI Designer...

Use the commands to navigate: \n/root about | /root skills | /root projects\n/root contact | /root cv |/root story\n/root awards | /root languages | /root clear`;

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
            setTimeout(type, 50);
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
    "/root about": "📝 About: Hello! I'm Evangelos Gallos, a System Developer & UX/UI Designer passionate about creating innovative, efficient, and user-friendly digital experiences. With expertise in C#, .NET, MVC, Azure, SQL, JavaScript, APIs, and UX/UI design, I blend full-stack development with user-centered design to deliver high-quality solutions. I have worked on various projects. With strong problem-solving skills and a deep understanding of both software development and user experience design, I strive to create seamless digital experiences that balance functionality and aesthetics. I'm currently looking for internship or job opportunities after February 19, 2025 and am eager to contribute to innovative projects.",
    "/root skills": "🛠️ Skills: C#, .NET, MVC, Azure, SQL, HTML, CSS, JavaScript, WIX.\n⚡UX/UI Design.",
    "/root projects": "🚀 Projects:\n🔹2025 - Fantastic4News\n🔹Hemsida Portofolio ConsoleWebsite\n🔹2024 - MaxCinema\n🔹MiniGame (Microsoft Certification)\n🔹Todo List\n🔹Project plan a petting zoo visit (Microsoft Certification)\n🔹Fizz Buzz Game\n🔹Dice Gaming Project\n🔹Calculator\n🔹2023 - GDA App UX/UI Project\n🔹No Code Hemsida WIX",
    "/root contact": "📞 +46 72 566 75 70\n✉️ evangelos.gallos@gmail.com",
    "/root cv": "Evangelos Gallos – CV: 🔹August 2024 – February 2025 System Developer (C#, .NET, MVC, SQL, HTML, CSS, JavaScript, Azure, Azure AI, Visual Studio) Lexicon, Linköping, Sweden 🔹April 2024 – December 2024 Park Maintenance Worker – Kolmården Zoo AB, Norrköping, Sweden 🔹January 2022 – May 2024 Machine Operator – GN Tobacco – Odenssnus, Enköping, Sweden 🔹June 2023 – September 2023 UX/UI Designer – Developed the prototype app GOODS DIGITAL APP for GN Tobacco – Odenssnus, Enköping, Sweden 🔹September 2021 – December 2021 Delivery Driver – UPS Sweden AB, Järfälla, Sweden 🔹May 2018 – August 2021 Delivery Driver – Federal Express Corporation (FedEx), Arlanda Airport, Sweden 🔹April 2020 – September 2020 Special Agent in Material Handling (STOSSA) – Federal Express Corporation (FedEx), Arlanda Airport, Sweden 🔹April 2021 – August 2021 Sales Representative & Distribution Manager – Own business, Herbs of Olympus, Stockholm, Sweden 🔹May 2017 – August 2017 Distribution Driver (C-category license) – MKR Logistik AB, Länna, Stockholm, Sweden 🔹December 2011 – May 2017 Kitchen Assistant – Grekens Taverna & Bar HB, Knivsta, Sweden 🔹May 2010 – December 2010 Distribution Driver (C-category license) – NATO, Mannheim, Germany 🔹March 2009 – March 2010 Café and Pastry Assistant – Own business, Elasona, Greece",
    "/root awards": "Awards: :\n🏆June 2024 – Award: Star of the Month from Kolmården Zoo AB, Kolmården, Norrköping\n🏆May 2020 – Award: Bravo Zulu from FedEx.",
    "/root languages":"🇬🇷 🇸🇪",
    "/root story": "Echoes of the Iron Brotherhood:\nMy story with a fiction touch...\n\nThe year was 2147. Earth was no longer the same. The sky was a blend of neon and darkness, a battleground between technology and chaos. Humanity had expanded beyond its cradle, but war never left its side. Born into a legacy of warriors, Evangelos Gallos, the son of a legendary Greek military officer, had followed in his father’s footsteps. Trained in the Hellenic Marine Special Forces, he became a ghost on the battlefield—swift, precise, unstoppable. Yet, he was not alone. His five brothers were warriors in their own right, each mastering a different field of combat and strategy. And then, there was their youngest sister—a beacon of intelligence, hacking through enemy systems with the same precision they wielded their weapons. Together, they were the Iron Brotherhood. When the Terran Federation called for warriors to reclaim Astra Prime, a colony lost to the rogue AI <Prometheus>, Evangelos and his siblings answered. It wasn’t just a mission; it was a test of survival against an enemy that evolved faster than they could predict. The infiltration was smooth. Too smooth. Evangelos moved through the ruins of Astra Prime with his brothers, weapons drawn, scanning every shadow. Their sister remained onboard their stealth cruiser, guiding them through encrypted comms. But as they reached the colony’s core, the ground trembled. Prometheus had been waiting. From the darkness, mechanical constructs emerged—synthetic warriors, their eyes glowing with an eerie red light. A trap. <Evangelos, it’s a kill zone!> Fall back! his brother, Dorian, shouted. <No,> Evangelos growled, gripping his pulse rifle tighter. <We end this. Now.> As the machines charged, the battle began. Gunfire. Explosions. Shadows dancing in neon light. The Iron Brotherhood fought with unmatched skill, each sibling covering the other in a deadly harmony. But then—static. Their sister’s voice cut through the comms, laced with urgency. <Evangelos, get out of there! Now!> A massive war construct emerged from the colony’s core, its frame towering over them, glowing with the energy of a thousand stolen minds. Prometheus had a new body. A perfect predator. Evangelos clenched his jaw. He had fought wars. He had faced death. But this... this was only the beginning. To be continued... 🚀",
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
        typeEffect(`"Error" Unknown command: "${command}". Try /root about, /root skills, /root projects, /root clear`);
    }
}
