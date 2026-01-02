const toggle = document.getElementById('menu-toggle');

if (toggle) {
    toggle.addEventListener('change', () => {
        document.body.classList.toggle('no-scroll', toggle.checked);
    });
}

const words = [
    "frontend developer",
    "web developer",
    "freelancer",
    "student",
    "learner",
];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        }
        else {
            setTimeout(type, typingDelay);
        }
    }
    else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }
        else {
            setTimeout(type, erasingDelay);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (words?.length) type();
});

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");


navlinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        link.classList.add('active');

        navlinks.forEach((l) => {
            if (l === link) {
                link.classList.add('active');
            }
            else {
                l.classList.remove("active")
            }
        });

        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {
            if (tab.id === tabName) {
                tab.classList.add("active");
            }
            else {
                tab.classList.remove("active");
            }
        });
        if (tabName === 'services') {
            const servicesList = [{
                id: 1,
                icon: "ph-code",
                text: "Website development",
                para: "I build responsive and modern websited using the latest technologies like HTML,CSS,JavaScript etc",
            },
            {
                id: 2,
                icon: "",
                text: "",
                para: "",
            },
            {
                id: 3,
                icon: "",
                text: "",
                para: "",
            },
            ];
            const services = document.getElementsByClassName("service-list");

            const innerContent = servicesList.map((l) => {
                return `
                <div class="box" key=${l?.id}>
                        <div class="head-icons">
                            <i class="ph ${l?.icon}"></i>
                            <span>
                                <i class="ph ph-arrow-down"></i>
                            </span>
                        </div>
                        <h3>${l?.text}</h3>
                        <span id="spacer">
                            
                        </span>
                        <p>${l?.para}</p>
                    </div>
                `;
            }).join(" ");

            Array.from(services).forEach((ele) => {
                ele.innerHTML = innerContent;
            });

        }
        toggle.checked = false;
    });
});

const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content")

// document.addEventListener('DOMContentLoaded' ,()=>{
//     if(aboutTabs){
//         aboutTabs[0].click
//     }
// });

aboutTabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();

        aboutTabs.forEach((a) => {
            a, classList.remove("active")
        });
        tab.classList.add("active");

        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });

        const activeTab = tab.dataset.section;
        document.getElementById(activeTab).classList.add("active");

        if (activeTab === 'experience') {
            const experience = document.querySelector(".experience-list");

            const experienceList = [{
                id: 1,
                data: "octomber 2025",
                position: 'Frontend Developer',
                details: "I worked on building responsive websites using HTML, CSS, and JavaScript."
            },
            {
                id: 2,
                data: "octomber 2025",
                position: 'Frontend Developer',
                details: "I worked on building responsive websites using HTML, CSS, and JavaScript."
            }
            ];

            const experienceContent = experienceList.map((ele)=>{
                return `
                
                `
            })
        }
    });
});
