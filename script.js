const text = `Welcome, Traveler and Wanderer, to My Website!
I am Evangelos Gallos, a System Developer & UX/UI Designer with a passion for creating innovative, efficient, and user-friendly digital experiences. With expertise in C#, .NET, MVC, Azure, SQL, JavaScript, APIs, and UX/UI design, I bring a blend of full-stack development and user-centered design to every project I work on.

I have a strong background in both software development and UX/UI design, backed by hands-on experience in building responsive web applications, cloud-based solutions, and interactive user interfaces. Whether coding in C# and JavaScript or designing wireframes in Figma, I always aim to deliver high-quality solutions that enhance usability and performance.

🎯 Background (Education & Skills)
Education:
Lexicon (Linköping, Sweden) – Systemutvecklare (C#, .NET, MVC, Azure, SQL, JavaScript, APIs, AI)
📅 August 2024 - February 2025
📌 Full-stack development with C#, .NET, MVC, Azure, JavaScript, SQL.

Google UX/UI Design Certification
📅 Google UX/UI Design Certification
📌 Proficiency in Figma, Adobe XD, wireframing, accessibility, and responsive design.

Python (Self-taught, 6 months of study)
📌 Basic knowledge of Python before transitioning to C#.

WIX Website Development Certification
📌 Built my personal website using WIX (similar to WordPress).

💼 Work Experience & Projects
1️⃣ MaxCinema (Movie Website) – Front-end Developer & Designer
🔹 Role: Front-end & UI/UX Design
🔹 Technologies: C#, MVC, SQL, JavaScript, Ajax, HTML, CSS, Bootstrap
🔹 Details:

Designed the UI/UX and implemented a responsive design.
Worked on the front-end, customizing CSS & Bootstrap.
Contributed to some back-end development with my team.
Available on my LinkedIn and CV.

2️⃣ News Website – Full-Stack Developer (Azure & APIs)
🔹 Role: Full-stack development
🔹 Technologies: C#, JavaScript, Azure Functions, APIs, SQL
🔹 Details:

Developed a news/articles website.
Used Azure Functions and APIs to handle data management.
Integrated responsive UI and accessibility standards.

3️⃣ UX/UI Design Project for a Factory in Enköping (Digimarc Tech)
🔹 Role: UX/UI Designer
🔹 Technologies: Figma, UX Research, Wireframing (Low & High Fidelity)
🔹 Details:

Designed a prototype application in 3.5 months.
Presented the project to the Project Manager.
Conducted UX research, wireframing, and accessibility improvements.

4️⃣ Responsive Websites (School Projects) – Front-end Developer
🔹 Technologies: CSS, HTML, Bootstrap, Figma
🔹 Details:

First Project: Worked on CSS, Bootstrap, UI Design, and some back-end.
Second Project: Focused on UX, Wireframing, Colour Contrast (CCA), and Accessibility.
Implemented responsive design and Bootstrap-based navigation (hamburger menus, buttons, etc.).

🎯 Next Steps
✔ Looking for an internship or job opportunity after February 19, 2025.
✔ Strong full-stack development skills in C#, .NET, MVC, SQL, Azure, JavaScript.
✔ UX/UI design experience with Google certification, Figma, Adobe XD & Accessibility Design.


And the next chapter? It is being written now...`;

const outputElement = document.getElementById('output');
const cursorElement = document.querySelector('.cursor-box');
let index = 0;

function typeEffect() {
    if (index < text.length) {
        outputElement.innerHTML += text[index];
        index++;
        setTimeout(typeEffect, 50);
    } else {
        cursorElement.style.display = 'none'; // Κρύψε τον cursor μετά το typing
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
