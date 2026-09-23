/* =========================================================
   R2021 CSE GPA & CGPA DASHBOARD
   ========================================================= */

/* -----------------------------
   GRADE POINTS
----------------------------- */

const GP = {
    O: 10,
    "A+": 9,
    A: 8,
    "B+": 7,
    B: 6,
    C: 5,
    U: 0
};

const GRADES = ["", "O", "A+", "A", "B+", "B", "C", "U"];


/* -----------------------------
   COMMON / FIXED COURSES
----------------------------- */

const COMMON = {
    1: [
        ["HS3152", "Professional English - I", 3],
        ["MA3151", "Matrices and Calculus", 4],
        ["PH3151", "Engineering Physics", 3],
        ["CY3151", "Engineering Chemistry", 3],
        ["GE3151", "Problem Solving and Python Programming", 3],
        ["GE3152", "தமிழர் மரபு / Heritage of Tamils", 1],
        ["GE3171", "Problem Solving and Python Programming Laboratory", 2],
        ["BS3171", "Physics and Chemistry Laboratory", 2],
        ["GE3172", "English Laboratory", 1]
    ],

    2: [
        ["HS3252", "Professional English - II", 2],
        ["MA3251", "Statistics and Numerical Methods", 4],
        ["PH3256", "Physics for Information Science", 3],
        ["BE3251", "Basic Electrical and Electronics Engineering", 3],
        ["GE3251", "Engineering Graphics", 4],
        ["CS3251", "Programming in C", 3],
        ["GE3252", "Tamils and Technology", 1],
        ["GE3271", "Engineering Practices Laboratory", 2],
        ["CS3271", "Programming in C Laboratory", 2],
        ["GE3272", "Communication Laboratory / Foreign Language", 2]
    ],

    3: [
        ["MA3354", "Discrete Mathematics", 4],
        ["CS3351", "Digital Principles and Computer Organization", 4],
        ["CS3352", "Foundations of Data Science", 3],
        ["CS3301", "Data Structures", 3],
        ["CS3391", "Object Oriented Programming", 3],
        ["CS3311", "Data Structures Laboratory", 1.5],
        ["CS3381", "Object Oriented Programming Laboratory", 1.5],
        ["CS3361", "Data Science Laboratory", 2],
        ["GE3361", "Professional Development", 1]
    ],

    4: [
        ["CS3452", "Theory of Computation", 3],
        ["CS3491", "Artificial Intelligence and Machine Learning", 4],
        ["CS3492", "Database Management Systems", 3],
        ["CS3401", "Algorithms", 4],
        ["CS3451", "Introduction to Operating Systems", 3],
        ["GE3451", "Environmental Sciences and Sustainability", 2],
        ["CS3461", "Operating Systems Laboratory", 1.5],
        ["CS3481", "Database Management Systems Laboratory", 1.5]
    ],

    5: [
        ["CS3591", "Computer Networks", 4],
        ["CS3501", "Compiler Design", 4],
        ["CB3491", "Cryptography and Cyber Security", 3],
        ["CS3551", "Distributed Computing", 3]
    ],

    6: [
        ["CCS356", "Object Oriented Software Engineering", 4],
        ["CS3691", "Embedded Systems and IoT", 4]
    ],

    7: [
        ["GE3791", "Human Values and Ethics", 2]
    ],

    8: []
};


/* -----------------------------
   NCC COURSES
   NOT INCLUDED IN CGPA
----------------------------- */

const NCC = {
    2: ["NCC", "NCC Credit Course Level 1", 2],
    4: ["NCC", "NCC Credit Course Level 2", 3],
    6: ["NCC", "NCC Credit Course Level 3", 3]
};


/* -----------------------------
   PROFESSIONAL ELECTIVES
----------------------------- */

const PE = [
    [
        "Vertical I — Data Science",
        [
            ["CCS346", "Exploratory Data Analysis"],
            ["CCS360", "Recommender Systems"],
            ["CCS355", "Neural Networks and Deep Learning"],
            ["CCS369", "Text and Speech Analysis"],
            ["CCW331", "Business Analytics"],
            ["CCS349", "Image and Video Analytics"],
            ["CCS338", "Computer Vision"],
            ["CCS334", "Big Data Analytics"]
        ]
    ],

    [
        "Vertical II — Full Stack Development",
        [
            ["CCS375", "Web Technologies"],
            ["CCS332", "App Development"],
            ["CCS336", "Cloud Services Management"],
            ["CCS370", "UI and UX Design"],
            ["CCS366", "Software Testing and Automation"],
            ["CCS374", "Web Application Security"],
            ["CCS342", "DevOps"],
            ["CCS358", "Principles of Programming Languages"]
        ]
    ],

    [
        "Vertical III — Cloud Computing and Data Center Technologies",
        [
            ["CCS335", "Cloud Computing"],
            ["CCS372", "Virtualization"],
            ["CCS336", "Cloud Services Management"],
            ["CCS341", "Data Warehousing"],
            ["CCS367", "Storage Technologies"],
            ["CCS365", "Software Defined Networks"],
            ["CCS368", "Stream Processing"],
            ["CCS362", "Security and Privacy in Cloud"]
        ]
    ],

    [
        "Vertical IV — Cyber Security and Data Privacy",
        [
            ["CCS344", "Ethical Hacking"],
            ["CCS343", "Digital and Mobile Forensics"],
            ["CCS363", "Social Network Security"],
            ["CCS351", "Modern Cryptography"],
            ["CB3591", "Engineering Secure Software Systems"],
            ["CCS339", "Cryptocurrency and Blockchain Technologies"],
            ["CCS354", "Network Security"],
            ["CCS362", "Security and Privacy in Cloud"]
        ]
    ],

    [
        "Vertical V — Creative Media",
        [
            ["CCS333", "Augmented Reality / Virtual Reality"],
            ["CCS352", "Multimedia and Animation"],
            ["CCS371", "Video Creation and Editing"],
            ["CCS370", "UI and UX Design"],
            ["CCW332", "Digital marketing"],
            ["CCS373", "Visual Effects"],
            ["CCS347", "Game Development"],
            ["CCS353", "Multimedia Data Compression and Storage"]
        ]
    ],

    [
        "Vertical VI — Emerging Technologies",
        [
            ["CCS333", "Augmented Reality / Virtual Reality"],
            ["CCS361", "Robotic Process Automation"],
            ["CCS355", "Neural Networks and Deep Learning"],
            ["CCS340", "Cyber security"],
            ["CCS359", "Quantum Computing"],
            ["CCS339", "Cryptocurrency and Blockchain Technologies"],
            ["CCS347", "Game Development"],
            ["CCS331", "3D Printing and Design"]
        ]
    ],

    [
        "Vertical VII — Artificial Intelligence and Machine Learning",
        [
            ["CCS350", "Knowledge Engineering"],
            ["CCS364", "Soft Computing"],
            ["CCS355", "Neural Networks and Deep Learning"],
            ["CCS369", "Text and Speech Analysis"],
            ["CCS357", "Optimization Techniques"],
            ["CCS348", "Game Theory"],
            ["CCS337", "Cognitive Science"],
            ["CCS345", "Ethics And AI"]
        ]
    ]
];


/* -----------------------------
   OPEN ELECTIVES
----------------------------- */

const OE = {
    1: [
        ["OAS351", "Space Science"],
        ["OIE351", "Introduction to Industrial Engineering"],
        ["OBT351", "Food, Nutrition and Health"],
        ["OCE351", "Environmental and Social Impact Assessment"],
        ["OEE351", "Renewable Energy System"],
        ["OEI351", "Introduction to Industrial Instrumentation and Control"],
        ["OMA351", "Graph Theory"]
    ],

    2: [
        ["OIE352", "Resource Management Techniques"],
        ["OMG351", "Fintech Regulation"],
        ["OFD351", "Holistic Nutrition"],
        ["AI3021", "IT in Agricultural System"],
        ["OEI352", "Introduction to Control Engineering"],
        ["OPY351", "Pharmaceutical Nanotechnology"],
        ["OAE351", "Aviation Management"]
    ],

    3: [
        ["OHS351", "English for Competitive Examinations"],
        ["OMG352", "NGOs and Sustainable Development"],
        ["OMG353", "Democracy and Good Governance"],
        ["CME365", "Renewable Energy Technologies"],
        ["OME354", "Applied Design Thinking"],
        ["MF3003", "Reverse Engineering"],
        ["OPR351", "Sustainable Manufacturing"],
        ["AU3791", "Electric and Hybrid Vehicles"],
        ["OAS352", "Space Engineering"],
        ["OIM351", "Industrial Management"],
        ["OIE354", "Quality Engineering"],
        ["OSF351", "Fire Safety Engineering"],
        ["OML351", "Introduction to Non-destructive Testing"],
        ["OMR351", "Mechatronics"],
        ["ORA351", "Foundation of Robotics"],
        ["OAE352", "Fundamentals of Aeronautical Engineering"],
        ["OGI351", "Remote Sensing Concepts"],
        ["OAI351", "Urban Agriculture"],
        ["OEN351", "Drinking Water Supply and Treatment"],
        ["OEE352", "Electric Vehicle Technology"],
        ["OEI353", "Introduction to PLC Programming"],
        ["OCH351", "Nano Technology"],
        ["OCH352", "Functional Materials"],
        ["OFD352", "Traditional Indian Foods"],
        ["OFD353", "Introduction to food processing"],
        ["OPY352", "IPR for Pharma Industry"],
        ["OTT351", "Basics of Textile Finishing"],
        ["OTT352", "Industrial Engineering for Garment Industry"],
        ["OTT353", "Basics of Textile Manufacture"],
        ["OPE351", "Introduction to Petroleum Refining and Petrochemicals"],
        ["CPE334", "Energy Conservation and Management"],
        ["OPT351", "Basics of Plastics Processing"],
        ["OEC351", "Signals and Systems"],
        ["OEC352", "Fundamentals of Electronic Devices and Circuits"],
        ["CBM348", "Foundation Skills in Integrated Product Development"],
        ["CBM333", "Assistive Technology"],
        ["OMA352", "Operations Research"],
        ["OMA353", "Algebra and Number Theory"],
        ["OMA354", "Linear Algebra"],
        ["OCE353", "Lean Concepts, Tools and Practices"],
        ["OBT352", "Basics of Microbial Technology"],
        ["OBT353", "Basics of Biomolecules"],
        ["OBT354", "Fundamentals of Cell and Molecular Biology"]
    ],

    4: [
        ["OHS352", "Project Report Writing"],
        ["OMA355", "Advanced Numerical Methods"],
        ["OMA356", "Random Processes"],
        ["OMA357", "Queuing and Reliability Modelling"],
        ["OMG354", "Production and Operations Management for Entrepreneurs"],
        ["OMG355", "Multivariate Data Analysis"],
        ["OME352", "Additive Manufacturing"],
        ["CME343", "New Product Development"],
        ["OME355", "Industrial Design & Rapid Prototyping Techniques"],
        ["MF3010", "Micro and Precision Engineering"],
        ["OMF354", "Cost Management of Engineering Projects"],
        ["AU3002", "Batteries and Management system"],
        ["AU3008", "Sensors and Actuators"],
        ["OAS353", "Space Vehicles"],
        ["OIM352", "Management Science"],
        ["OIM353", "Production Planning and Control"],
        ["OIE353", "Operations Management"],
        ["OSF352", "Industrial Hygiene"],
        ["OSF353", "Chemical Process Safety"],
        ["OML352", "Electrical, Electronic and Magnetic materials"],
        ["OML353", "Nanomaterials and Applications"],
        ["OMR352", "Hydraulics and Pneumatics"],
        ["OMR353", "Sensors"],
        ["ORA352", "Concepts in Mobile Robots"],
        ["MV3501", "Marine Propulsion"],
        ["OMV351", "Marine Merchant Vessels"],
        ["OMV352", "Elements of Marine Engineering"],
        ["CRA332", "Drone Technologies"],
        ["OGI352", "Geographical Information System"],
        ["OAI352", "Agriculture Entrepreneurship Development"],
        ["OEN352", "Biodiversity Conservation"],
        ["OEE353", "Introduction to control systems"],
        ["OEI354", "Introduction to Industrial Automation Systems"],
        ["OCH353", "Energy Technology"],
        ["OCH354", "Surface Science"],
        ["OFD354", "Fundamentals of Food Engineering"],
        ["OFD355", "Food safety and Quality Regulations"],
        ["OPY353", "Nutraceuticals"],
        ["OTT354", "Basics of Dyeing and Printing"],
        ["FT3201", "Fibre Science"],
        ["OTT355", "Garment Manufacturing Technology"],
        ["OPE353", "Industrial safety"],
        ["OPE354", "Unit Operations in Petro Chemical Industries"],
        ["OPT352", "Plastic Materials for Engineers"],
        ["OPT353", "Properties and Testing of Plastics"],
        ["OEC353", "VLSI Design"],
        ["CBM370", "Wearable Devices"],
        ["CBM356", "Medical Informatics"],
        ["OCE354", "Basics of Integrated Water Resources Management"],
        ["OBT355", "Biotechnology for Waste Management"],
        ["OBT356", "Lifestyle Diseases"],
        ["OBT357", "Biotechnology in Health Care"]
    ]
};


/* -----------------------------
   MANAGEMENT ELECTIVES
----------------------------- */

const MGMT = [
    ["GE3751", "Principles of Management"],
    ["GE3752", "Total Quality Management"],
    ["GE3753", "Engineering Economics and Financial Accounting"],
    ["GE3754", "Human Resource Management"],
    ["GE3755", "Knowledge Management"],
    ["GE3792", "Industrial Management"]
];


/* -----------------------------
   MANDATORY COURSES
   NON-CREDIT
----------------------------- */

const MANDATORY = {
    5: [
        ["MX3081", "Introduction to Women and Gender Studies"],
        ["MX3082", "Elements of Literature"],
        ["MX3083", "Film Appreciation"],
        ["MX3084", "Disaster Risk Reduction and Management"]
    ],

    6: [
        ["MX3085", "Well Being with Traditional Practices - Yoga, Ayurveda and Siddha"],
        ["MX3086", "History of Science and Technology in India"],
        ["MX3087", "Political and Economic Thought for a Humane Society"],
        ["MX3088", "State, Nation Building and Politics in India"],
        ["MX3089", "Industrial Safety"]
    ]
};


/* -----------------------------
   STORAGE
----------------------------- */

const STORE = "r2021-cse-dashboard-v3";

let state;

try {
    state = JSON.parse(
        localStorage.getItem(STORE) ||
        '{"semesters":{},"theme":"light"}'
    );
} catch {
    state = {
        semesters: {},
        theme: "light"
    };
}

if (!state.semesters) {
    state.semesters = {};
}

if (!state.theme) {
    state.theme = "light";
}


/* -----------------------------
   HELPERS
----------------------------- */

const $ = selector => document.querySelector(selector);

const roman = n =>
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"][n] || "";

const esc = value =>
    String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");

function persist() {
    localStorage.setItem(STORE, JSON.stringify(state));
}

function semData(semester) {
    return state.semesters[semester] || {
        courses: {},
        electives: {}
    };
}


/* -----------------------------
   NAVIGATION
----------------------------- */

function nav(view) {
    window.scrollTo(0, 0);
    document
        .querySelectorAll(".view")
        .forEach(viewElement => {
            viewElement.classList.add("hidden");
        });

    const target = $("#" + view + "View");

    if (target) {
        target.classList.remove("hidden");
    }

    document
        .querySelectorAll(".nav-item")
        .forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.view === view
            );
        });

    if (view === "dashboard") {
        renderDashboard();
    }

    if (view === "subjects") {
        renderCurriculum();
    }

    if (view === "semester") {
        renderSemester();
    }
}


/* -----------------------------
   NAV EVENTS
----------------------------- */

document
    .querySelectorAll(".nav-item")
    .forEach(button => {
        button.addEventListener(
            "click",
            () => nav(button.dataset.view)
        );
    });

$("#openCalculator").addEventListener(
    "click",
    () => nav("semester")
);

$("#openCurriculum").addEventListener(
    "click",
    () => nav("subjects")
);


/* -----------------------------
   GRADE SELECT
----------------------------- */

function gradeSelect(value = "") {
    return `
        <select class="grade">
            ${GRADES.map(grade => `
                <option
                    value="${esc(grade)}"
                    ${grade === value ? "selected" : ""}
                >
                    ${grade || "Grade"}
                </option>
            `).join("")}
        </select>
    `;
}


/* -----------------------------
   ELECTIVE OPTIONS
----------------------------- */

function electiveOptions(kind, slot, savedValue = "") {
    let html = `
        <option value="">
            Select ${kind === "PE" ? "professional" : "open"} elective
        </option>
    `;

    if (kind === "PE") {
        PE.forEach(vertical => {
            html += `
                <optgroup label="${esc(vertical[0])}">
                    ${vertical[1].map(course => {
                        const value = `${course[0]}|${course[1]}`;

                        return `
                            <option
                                value="${esc(value)}"
                                ${savedValue === value ? "selected" : ""}
                            >
                                ${esc(course[0])} — ${esc(course[1])}
                            </option>
                        `;
                    }).join("")}
                </optgroup>
            `;
        });
    } else {
        (OE[slot] || []).forEach(course => {
            const value = `${course[0]}|${course[1]}`;

            html += `
                <option
                    value="${esc(value)}"
                    ${savedValue === value ? "selected" : ""}
                >
                    ${esc(course[0])} — ${esc(course[1])}
                </option>
            `;
        });
    }

    return html;
}


/* -----------------------------
   SEMESTER RENDER
----------------------------- */

function renderSemester() {
    const semester = +$("#semesterSelect").value;
    const data = semData(semester);

    let html = "";

    /* COMMON COURSES */

    if (COMMON[semester]) {
        html += `
            <div class="course-group">
                <h3>Common / Fixed Courses</h3>

                <div class="course-table">

                    <div class="course-row head">
                        <div>Code</div>
                        <div>Subject</div>
                        <div>Credits</div>
                        <div>Grade</div>
                    </div>

                    ${COMMON[semester].map(course => {
                        const savedGrade =
                            data.courses[course[0]] || "";

                        return `
                            <div class="course-row">

                                <div class="code">
                                    ${esc(course[0])}
                                </div>

                                <div class="course-name">
                                    ${esc(course[1])}
                                </div>

                                <div class="credit">
                                    ${course[2]}
                                </div>

                                <div class="grade">
                                    ${gradeSelect(savedGrade)}
                                </div>

                            </div>
                        `;
                    }).join("")}

                </div>
            </div>
        `;
    }


    /* NCC */

    if (NCC[semester]) {
        html += `
            <div class="course-group">

                <h3>NCC</h3>

                <div
                    class="elective-card"
                    data-kind="NCC"
                    data-slot=""
                >

                    <div class="elective-head">

                        <div class="elective-title">
                            ${esc(NCC[semester][1])}
                        </div>

                        <div class="elective-meta">
                            ${NCC[semester][2]} credits ·
                            Not included in CGPA
                        </div>

                    </div>

                    <div class="elective-grid">

                        <div>
                            <strong>
                                ${esc(NCC[semester][0])}
                            </strong>
                        </div>

                        ${gradeSelect(
                            data.electives.NCC?.grade || ""
                        )}

                    </div>

                </div>

            </div>
        `;
    }


    /* SEMESTER V */

    if (semester === 5) {
        html += `
            <div class="course-group">

                <h3>Professional Electives</h3>

                ${[1, 2]
                    .map(slot =>
                        professionalElectiveCard(data, slot)
                    )
                    .join("")}

            </div>
        `;

        html += mandatoryCard(5, data);
    }


    /* SEMESTER VI */

    if (semester === 6) {
        html += `
            <div class="course-group">

                <h3>Open Elective</h3>

                ${openElectiveCard(data, 1)}

            </div>

            <div class="course-group">

                <h3>Professional Electives</h3>

                ${[3, 4, 5, 6]
                    .map(slot =>
                        professionalElectiveCard(data, slot)
                    )
                    .join("")}

            </div>
        `;

        html += mandatoryCard(6, data);
    }


    /* SEMESTER VII */

    if (semester === 7) {
        html += `
            <div class="course-group">

                <h3>Management Elective</h3>

                ${managementCard(data)}

            </div>

            <div class="course-group">

                <h3>Open Electives</h3>

                ${[2, 3, 4]
                    .map(slot =>
                        openElectiveCard(data, slot)
                    )
                    .join("")}

            </div>

            <div class="course-group">

                <h3>Summer Internship</h3>

                <div
                    class="elective-card"
                    data-kind="INTERNSHIP"
                >

                    <div class="elective-head">

                        <div class="elective-title">
                            CS3711 — Summer Internship
                        </div>

                        <div class="elective-meta">
                            2 credits
                        </div>

                    </div>

                    ${gradeSelect(
                        data.courses["CS3711"] || ""
                    )}

                </div>

            </div>
        `;
    }


    /* SEMESTER VIII */

    if (semester === 8) {
        html += `
            <div class="course-group">

                <h3>Project Work / Internship</h3>

                <div class="course-table">

                    <div class="course-row">

                        <div class="code">
                            CS3811
                        </div>

                        <div class="course-name">
                            Project Work / Internship
                        </div>

                        <div class="credit">
                            10
                        </div>

                        <div class="grade">
                            ${gradeSelect(
                                data.courses["CS3811"] || ""
                            )}
                        </div>

                    </div>

                </div>

            </div>
        `;
    }


    /* ADDITIONAL / CUSTOM SUBJECTS */
    html += customSubjectsSection(data);

    $("#courseArea").innerHTML =
        html ||
        '<p class="muted">No courses configured.</p>';


    /* LIVE UPDATE */
    $("#courseArea").addEventListener("input", event => {
        if (event.target.matches(".custom-code, .custom-name, .custom-credits")) {
            calculateSemester(false);
            updateDashboardFromCurrentSemester();
        }
    });

    $("#courseArea").addEventListener("change", event => {
        if (event.target.matches("select, .custom-counted")) {
            calculateSemester(false);
            updateDashboardFromCurrentSemester();
        }
    });

    bindCustomSubjectEvents();
    calculateSemester(false);
}


/* -----------------------------
   PROFESSIONAL ELECTIVE CARD
----------------------------- */

function professionalElectiveCard(data, slot) {
    const saved =
        data.electives["PE" + slot] || {};

    const savedValue =
        saved.code
            ? `${saved.code}|${saved.name}`
            : "";

    return `
        <div
            class="elective-card"
            data-kind="PE"
            data-slot="${slot}"
        >

            <div class="elective-head">

                <div class="elective-title">
                    Professional Elective ${roman(slot)}
                </div>

                <div class="elective-meta">
                    3 credits
                </div>

            </div>

            <div class="elective-grid">

                <select class="elective">
                    ${electiveOptions(
                        "PE",
                        slot,
                        savedValue
                    )}
                </select>

                ${gradeSelect(
                    saved.grade || ""
                )}

            </div>

        </div>
    `;
}


/* -----------------------------
   OPEN ELECTIVE CARD
----------------------------- */

function openElectiveCard(data, slot) {
    const saved =
        data.electives["OE" + slot] || {};

    const savedValue =
        saved.code
            ? `${saved.code}|${saved.name}`
            : "";

    return `
        <div
            class="elective-card"
            data-kind="OE"
            data-slot="${slot}"
        >

            <div class="elective-head">

                <div class="elective-title">
                    Open Elective ${roman(slot)}
                </div>

                <div class="elective-meta">
                    3 credits
                </div>

            </div>

            <div class="elective-grid">

                <select class="elective">
                    ${electiveOptions(
                        "OE",
                        slot,
                        savedValue
                    )}
                </select>

                ${gradeSelect(
                    saved.grade || ""
                )}

            </div>

        </div>
    `;
}


/* -----------------------------
   MANAGEMENT CARD
----------------------------- */

function managementCard(data) {
    const saved =
        data.electives.MGMT || {};

    const savedValue =
        saved.code
            ? `${saved.code}|${saved.name}`
            : "";

    return `
        <div
            class="elective-card"
            data-kind="MGMT"
            data-slot=""
        >

            <div class="elective-head">

                <div class="elective-title">
                    Management Elective
                </div>

                <div class="elective-meta">
                    3 credits
                </div>

            </div>

            <div class="elective-grid">

                <select class="elective">

                    <option value="">
                        Select management elective
                    </option>

                    ${MGMT.map(course => {

                        const value =
                            `${course[0]}|${course[1]}`;

                        return `
                            <option
                                value="${esc(value)}"
                                ${savedValue === value
                                    ? "selected"
                                    : ""}
                            >
                                ${esc(course[0])}
                                —
                                ${esc(course[1])}
                            </option>
                        `;

                    }).join("")}

                </select>

                ${gradeSelect(
                    saved.grade || ""
                )}

            </div>

        </div>
    `;
}


/* -----------------------------
   MANDATORY COURSE CARD
   NON-CREDIT
----------------------------- */

function mandatoryCard(semester, data) {
    const saved =
        data.electives.MANDATORY || {};

    const savedValue =
        saved.code
            ? `${saved.code}|${saved.name}`
            : "";

    return `
        <div class="course-group">

            <h3>
                Mandatory Course
                <span class="muted">
                    · Non-credit
                </span>
            </h3>

            <div
                class="elective-card"
                data-kind="MANDATORY"
                data-slot=""
            >

                <div class="elective-head">

                    <div class="elective-title">
                        Mandatory Course-${semester === 5 ? "I" : "II"}
                    </div>

                    <div class="elective-meta">
                        0 credits · Not included in CGPA
                    </div>

                </div>

                <div class="elective-grid">

                    <select class="elective">

                        <option value="">
                            Select mandatory course
                        </option>

                        ${(MANDATORY[semester] || [])
                            .map(course => {

                                const value =
                                    `${course[0]}|${course[1]}`;

                                return `
                                    <option
                                        value="${esc(value)}"
                                        ${savedValue === value
                                            ? "selected"
                                            : ""}
                                    >
                                        ${esc(course[0])}
                                        —
                                        ${esc(course[1])}
                                    </option>
                                `;

                            })
                            .join("")}

                    </select>

                    ${gradeSelect(
                        saved.grade || ""
                    )}

                </div>

            </div>

        </div>
    `;
}


/* -----------------------------
   ADDITIONAL / CUSTOM SUBJECTS
----------------------------- */

function customSubjectRow(subject = {}) {
    return `
        <div class="custom-subject-row">
            <input class="custom-code" type="text" placeholder="Subject code"
                   value="${esc(subject.code || "")}">
            <input class="custom-name" type="text" placeholder="Subject name"
                   value="${esc(subject.name || "")}">
            <input class="custom-credits" type="number" min="0" step="0.5"
                   placeholder="Credits" value="${subject.credits ?? ""}">
            <select class="custom-grade">
                ${GRADES.map(grade => `
                    <option value="${esc(grade)}"
                        ${grade === (subject.grade || "") ? "selected" : ""}>
                        ${grade || "Grade"}
                    </option>
                `).join("")}
            </select>
            <label class="custom-count">
                <input type="checkbox" class="custom-counted"
                       ${subject.counted !== false ? "checked" : ""}>
                <span>Count in GPA / CGPA</span>
            </label>
            <button type="button" class="custom-remove"
                    title="Remove subject" aria-label="Remove subject">Remove</button>
        </div>
    `;
}

function customSubjectsSection(data) {
    const subjects = Array.isArray(data.customSubjects) ? data.customSubjects : [];

    return `
        <div class="course-group custom-subjects-group">
            <div class="custom-subjects-head">
                <div>
                    <h3>Additional Subjects</h3>
                    <p class="muted">
                        Add extra subjects for this semester. Only checked subjects are included in GPA / CGPA.
                    </p>
                </div>
                <button type="button" id="addCustomSubject" class="primary-btn">＋ Add Subject</button>
            </div>
            <div id="customSubjectsList">
                ${subjects.length
                    ? subjects.map(subject => customSubjectRow(subject)).join("")
                    : '<div class="custom-empty">No additional subjects added yet.</div>'}
            </div>
        </div>
    `;
}

function collectCustomSubjects() {
    return Array.from(document.querySelectorAll("#customSubjectsList .custom-subject-row"))
        .map(row => {
            const credits = parseFloat(row.querySelector(".custom-credits")?.value || "0");
            return {
                code: row.querySelector(".custom-code")?.value.trim() || "",
                name: row.querySelector(".custom-name")?.value.trim() || "",
                credits: Number.isFinite(credits) ? credits : 0,
                grade: row.querySelector(".custom-grade")?.value || "",
                counted: !!row.querySelector(".custom-counted")?.checked
            };
        });
}

function bindCustomSubjectEvents() {
    const list = document.querySelector("#customSubjectsList");
    const addButton = document.querySelector("#addCustomSubject");
    if (!list || !addButton) return;

    addButton.onclick = () => {
        list.querySelector(".custom-empty")?.remove();
        list.insertAdjacentHTML("beforeend", customSubjectRow());
        calculateSemester(false);
        updateDashboardFromCurrentSemester();
    };

    list.onclick = event => {
        const button = event.target.closest(".custom-remove");
        if (!button) return;
        button.closest(".custom-subject-row")?.remove();

        if (!list.querySelector(".custom-subject-row")) {
            list.innerHTML = '<div class="custom-empty">No additional subjects added yet.</div>';
        }

        calculateSemester(false);
        updateDashboardFromCurrentSemester();
    };
}


/* -----------------------------
   COLLECT CURRENT SEMESTER
----------------------------- */

function collectSemester() {
    const data = {
        courses: {},
        electives: {}
    };


    /* Common + internship + project courses */

    document
        .querySelectorAll(
            "#courseArea .course-row:not(.head)"
        )
        .forEach(row => {

            const code =
                row.querySelector(".code");

            const grade =
                row.querySelector("select.grade");

            if (code && grade) {
                data.courses[
                    code.textContent.trim()
                ] = grade.value;
            }

        });


    /* Internship */

    const internshipCard =
        document.querySelector(
            '#courseArea .elective-card[data-kind="INTERNSHIP"]'
        );

    if (internshipCard) {
        const grade =
            internshipCard.querySelector(".grade");

        if (grade) {
            data.courses["CS3711"] = grade.value;
        }
    }


    /* Elective cards */

    document
        .querySelectorAll(
            "#courseArea .elective-card"
        )
        .forEach(card => {

            const kind =
                card.dataset.kind;

            const slot =
                card.dataset.slot || "";

            const select =
                card.querySelector(".elective");

            const grade =
                card.querySelector(".grade");

            if (!kind || !select || !grade) {
                return;
            }


            /* NCC */

            if (kind === "NCC") {

                data.electives.NCC = {
                    grade: grade.value
                };

                return;
            }


            /* Nothing selected */

            if (!select.value) {

                delete data.electives[
                    kind + slot
                ];

                return;
            }


            const parts =
                select.value.split("|");

            const code =
                parts.shift();

            const name =
                parts.join("|");


            data.electives[
                kind + slot
            ] = {
                code,
                name,
                grade: grade.value
            };

        });


    data.customSubjects = collectCustomSubjects();

    return data;
}


/* -----------------------------
   CALCULATE SEMESTER GPA
----------------------------- */

function calculateSemester(save = false) {
    const semester =
        +$("#semesterSelect").value;

    const data =
        collectSemester();

    let credits = 0;
    let points = 0;


    /* Common courses */

    (COMMON[semester] || [])
        .forEach(course => {

            const grade =
                data.courses[course[0]];

            if (
                grade &&
                GP[grade] !== undefined
            ) {

                credits += course[2];

                points +=
                    course[2] * GP[grade];

            }

        });


    /* Additional / custom subjects */
    (data.customSubjects || []).forEach(subject => {
        if (
            subject.counted &&
            subject.credits > 0 &&
            subject.grade &&
            GP[subject.grade] !== undefined
        ) {
            credits += subject.credits;
            points += subject.credits * GP[subject.grade];
        }
    });


    /* Professional / Open / Management electives */

    Object.entries(data.electives)
        .forEach(([key, course]) => {

            /*
                NCC and Mandatory courses
                are excluded from CGPA.
            */

            if (
                key === "NCC" ||
                key === "MANDATORY"
            ) {
                return;
            }


            if (
                course &&
                course.code &&
                course.grade &&
                GP[course.grade] !== undefined
            ) {

                credits += 3;

                points +=
                    3 * GP[course.grade];

            }

        });


    /* Semester VII internship */

    if (semester === 7) {

        const grade =
            data.courses["CS3711"];

        if (
            grade &&
            GP[grade] !== undefined
        ) {

            credits += 2;

            points +=
                2 * GP[grade];

        }

    }


    /* Semester VIII project */

    if (semester === 8) {

        const grade =
            data.courses["CS3811"];

        if (
            grade &&
            GP[grade] !== undefined
        ) {

            credits += 10;

            points +=
                10 * GP[grade];

        }

    }


    const gpa =
        credits > 0
            ? points / credits
            : 0;


    /* Update semester GPA */

    $("#semesterGpa")
        .textContent =
        gpa.toFixed(2);

    $("#semesterCredits")
        .textContent =
        `${credits} credits entered`;


    /* Save */

    if (save) {

        state.semesters[semester] = {
            ...data,
            gpa,
            credits,
            points
        };

        persist();

        renderDashboard();
    }


    return {
        gpa,
        credits,
        points,
        data
    };
}


/* -----------------------------
   LIVE DASHBOARD UPDATE
----------------------------- */

function updateDashboardFromCurrentSemester() {

    const current =
        calculateSemester(false);

    const semester =
        +$("#semesterSelect").value;


    /*
        Temporarily combine the current
        semester with already saved data.
    */

    const all = {
        ...state.semesters,

        [semester]: {
            ...current.data,
            gpa: current.gpa,
            credits: current.credits,
            points: current.points
        }
    };


    let totalCredits = 0;
    let totalPoints = 0;

    Object.values(all)
        .forEach(item => {

            if (
                item &&
                typeof item.gpa === "number"
            ) {

                totalCredits +=
                    item.credits || 0;

                totalPoints +=
                    item.points || 0;

            }

        });


    const cgpa =
        totalCredits > 0
            ? totalPoints / totalCredits
            : 0;


    $("#dashCgpa")
        .textContent =
        cgpa.toFixed(2);

    $("#dashCredits")
        .textContent =
        totalCredits;

    $("#dashSemesters")
        .textContent =
        `${Object.keys(all).filter(key =>
            all[key] &&
            typeof all[key].gpa === "number"
        ).length} / 8`;
}


/* -----------------------------
   SAVE SEMESTER
----------------------------- */

$("#saveSemester")
    .addEventListener(
        "click",
        () => {

            calculateSemester(true);

            const button =
                $("#saveSemester");

            const oldText =
                button.textContent;

            button.textContent =
                "✓ Saved locally";

            setTimeout(() => {
                button.textContent =
                    oldText;
            }, 1200);

        }
    );


/* -----------------------------
   DASHBOARD
----------------------------- */

function renderDashboard() {

    const semesters =
        Object.entries(state.semesters)
            .map(([semester, value]) => ({
                semester: +semester,
                ...value
            }))
            .filter(
                item =>
                    typeof item.gpa === "number"
            )
            .sort(
                (a, b) =>
                    a.semester - b.semester
            );


    let totalCredits = 0;
    let totalPoints = 0;

    semesters.forEach(item => {

        totalCredits +=
            item.credits || 0;

        totalPoints +=
            item.points || 0;

    });


    const cgpa =
        totalCredits > 0
            ? totalPoints / totalCredits
            : 0;


    $("#dashCgpa")
        .textContent =
        cgpa.toFixed(2);

    $("#dashCredits")
        .textContent =
        totalCredits;

    $("#dashSemesters")
        .textContent =
        `${semesters.length} / 8`;


    const latest =
        semesters.at(-1);


    $("#dashGpa")
        .textContent =
        latest
            ? latest.gpa.toFixed(2)
            : "—";


    $("#latestSemester")
        .textContent =
        latest
            ? `Semester ${latest.semester}`
            : "No semester saved";


    $("#cgpaTrend")
        .textContent =
        semesters.length
            ? `${cgpa.toFixed(2)} across recorded credits`
            : "Add semester results";


    $("#semesterMiniList")
        .innerHTML =
        semesters.length
            ? semesters.map(item => `
                <div class="mini-row">

                    <span>
                        Sem ${item.semester}
                    </span>

                    <div class="bar">
                        <i
                            style="
                                width:${Math.min(
                                    100,
                                    item.gpa / 10 * 100
                                )}%
                            "
                        ></i>
                    </div>

                    <b>
                        ${item.gpa.toFixed(2)}
                    </b>

                </div>
            `).join("")
            : `
                <p class="muted">
                    No results saved yet.
                </p>
            `;


    /*
        Build cumulative GPA progression.
        This makes the chart genuinely represent
        CGPA instead of semester GPA.
    */

    let runningCredits = 0;
    let runningPoints = 0;

    const chartData =
        semesters.map(item => {

            runningCredits +=
                item.credits || 0;

            runningPoints +=
                item.points || 0;

            return {
                s: item.semester,
                g:
                    runningCredits > 0
                        ? runningPoints / runningCredits
                        : 0
            };

        });


    drawChart(chartData);
}


/* -----------------------------
   CHART
----------------------------- */

function drawChart(data) {

    const canvas =
        $("#cgpaChart");

    if (!canvas) {
        return;
    }

    const ctx =
        canvas.getContext("2d");

    const dpr =
        window.devicePixelRatio || 1;

    const width =
        canvas.clientWidth;

    const height =
        canvas.clientHeight;


    if (width <= 0 || height <= 0) {
        return;
    }


    canvas.width =
        width * dpr;

    canvas.height =
        height * dpr;

    ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );

    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    $("#emptyChart")
        .style.display =
        data.length
            ? "none"
            : "grid";


    if (!data.length) {
        return;
    }


    const pad = {
        l: 38,
        r: 15,
        t: 15,
        b: 32
    };


    const innerWidth =
        width -
        pad.l -
        pad.r;

    const innerHeight =
        height -
        pad.t -
        pad.b;


    const x = index =>
        pad.l +
        (
            data.length === 1
                ? innerWidth / 2
                : innerWidth *
                  (
                      index /
                      (data.length - 1)
                  )
        );


    const y = value =>
        pad.t +
        innerHeight -
        (value / 10) *
        innerHeight;


    const styles =
        getComputedStyle(
            document.documentElement
        );


    const lineColor =
        styles.getPropertyValue("--line").trim();

    const mutedColor =
        styles.getPropertyValue("--muted").trim();

    const textColor =
        styles.getPropertyValue("--text").trim();

    const accentColor =
        styles.getPropertyValue("--accent").trim();


    /* Grid */

    ctx.strokeStyle =
        lineColor;

    ctx.fillStyle =
        mutedColor;

    ctx.lineWidth = 1;

    ctx.font =
        "12px system-ui";


    [0, 2.5, 5, 7.5, 10]
        .forEach(value => {

            ctx.beginPath();

            ctx.moveTo(
                pad.l,
                y(value)
            );

            ctx.lineTo(
                width - pad.r,
                y(value)
            );

            ctx.stroke();


            ctx.fillText(
                value.toFixed(
                    value % 1
                        ? 1
                        : 0
                ),
                6,
                y(value) + 4
            );

        });


    /* Line */

    ctx.beginPath();

    data.forEach((point, index) => {

        if (index === 0) {

            ctx.moveTo(
                x(index),
                y(point.g)
            );

        } else {

            ctx.lineTo(
                x(index),
                y(point.g)
            );

        }

    });


    ctx.strokeStyle =
        accentColor;

    ctx.lineWidth = 3;

    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    ctx.stroke();


    /* Points */

    data.forEach((point, index) => {

        ctx.beginPath();

        ctx.arc(
            x(index),
            y(point.g),
            5,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            accentColor;

        ctx.fill();


        /* Semester label */

        ctx.fillStyle =
            mutedColor;

        ctx.font =
            "11px system-ui";

        ctx.textAlign = "center";

        ctx.fillText(
            "S" + point.s,
            x(index),
            height - 10
        );


        /* CGPA value */

        ctx.fillStyle =
            textColor;

        ctx.font =
            "bold 11px system-ui";

        ctx.fillText(
            point.g.toFixed(2),
            x(index),
            y(point.g) - 11
        );

    });


    ctx.textAlign = "start";
}


/* =========================================================
   FULL CURRICULUM PAGE
   ========================================================= */

function renderCurriculum() {

    let html = "";


    /* SEMESTERS 1 - 8 */

    for (
        let semester = 1;
        semester <= 8;
        semester++
    ) {

        html += `
            <div class="curriculum-sem">

                <h3>
                    Semester ${semester}
                </h3>

                <div class="subject-list">

                    ${(COMMON[semester] || [])
                        .map(course => `
                            <div class="subject-item">

                                <span>
                                    <b>${esc(course[0])}</b>
                                    ${esc(course[1])}
                                </span>

                                <small>
                                    ${course[2]} cr
                                </small>

                            </div>
                        `)
                        .join("")}


                    ${
                        NCC[semester]
                            ? `
                                <div class="subject-item">

                                    <span>

                                        <b>NCC</b>

                                        ${esc(
                                            NCC[semester][1]
                                        )}

                                        <small>
                                            · Not included in CGPA
                                        </small>

                                    </span>

                                    <small>
                                        ${NCC[semester][2]} cr
                                    </small>

                                </div>
                            `
                            : ""
                    }

                </div>


                ${
                    semester === 5
                        ? `
                            <div class="curriculum-category">

                                <h4>
                                    Professional Electives I–II
                                </h4>

                                ${renderPECurriculum(1, 2)}

                            </div>


                            <div class="curriculum-category">

                                <h4>
                                    Mandatory Course-I
                                    <small>
                                        Non-credit
                                    </small>
                                </h4>

                                ${renderMandatoryCurriculum(5)}

                            </div>
                        `
                        : ""
                }


                ${
                    semester === 6
                        ? `
                            <div class="curriculum-category">

                                <h4>
                                    Open Elective-I
                                </h4>

                                ${renderOECurriculum(1)}

                            </div>


                            <div class="curriculum-category">

                                <h4>
                                    Professional Electives III–VI
                                </h4>

                                ${renderPECurriculum(3, 6)}

                            </div>


                            <div class="curriculum-category">

                                <h4>
                                    Mandatory Course-II
                                    <small>
                                        Non-credit
                                    </small>
                                </h4>

                                ${renderMandatoryCurriculum(6)}

                            </div>
                        `
                        : ""
                }


                ${
                    semester === 7
                        ? `
                            <div class="curriculum-category">

                                <h4>
                                    Management Elective
                                </h4>

                                ${MGMT.map(course => `
                                    <div class="subject-item">

                                        <span>
                                            <b>${esc(course[0])}</b>
                                            ${esc(course[1])}
                                        </span>

                                        <small>
                                            3 cr
                                        </small>

                                    </div>
                                `).join("")}

                            </div>


                            <div class="curriculum-category">

                                <h4>
                                    Open Electives II–IV
                                </h4>

                                ${[2, 3, 4]
                                    .map(slot =>
                                        renderOECurriculum(slot)
                                    )
                                    .join("")}

                            </div>


                            <div class="curriculum-category">

                                <h4>
                                    CS3711 — Summer Internship
                                </h4>

                                <div class="subject-item">

                                    <span>
                                        <b>CS3711</b>
                                        Summer Internship
                                    </span>

                                    <small>
                                        2 cr
                                    </small>

                                </div>

                            </div>
                        `
                        : ""
                }


                ${
                    semester === 8
                        ? `
                            <div class="curriculum-category">

                                <h4>
                                    Project Work / Internship
                                </h4>

                                <div class="subject-item">

                                    <span>
                                        <b>CS3811</b>
                                        Project Work / Internship
                                    </span>

                                    <small>
                                        10 cr
                                    </small>

                                </div>

                            </div>
                        `
                        : ""
                }

            </div>
        `;
    }


    /* PE VERTICALS */

    html += `
        <div class="curriculum-sem">

            <h3>
                Professional Elective Verticals
            </h3>

            ${PE.map(vertical => `
                <div class="curriculum-category">

                    <h4>
                        ${esc(vertical[0])}
                    </h4>

                    ${vertical[1].map(course => `
                        <div class="subject-item">

                            <span>
                                <b>${esc(course[0])}</b>
                                ${esc(course[1])}
                            </span>

                            <small>
                                3 cr
                            </small>

                        </div>
                    `).join("")}

                </div>
            `).join("")}

        </div>
    `;


    $("#curriculumArea")
        .innerHTML = html;
}


/* -----------------------------
   PE CURRICULUM
----------------------------- */

function renderPECurriculum(start, end) {

    let html = "";

    for (
        let i = start;
        i <= end;
        i++
    ) {

        html += `
            <div class="subject-item">

                <span>
                    <b>PE ${roman(i)}</b>
                    Professional Elective
                </span>

                <small>
                    3 cr
                </small>

            </div>
        `;

    }

    return html;
}


/* -----------------------------
   OE CURRICULUM
----------------------------- */

function renderOECurriculum(slot) {

    return `
        <div class="subject-item">

            <span>
                <b>OE ${roman(slot)}</b>
                Open Elective
            </span>

            <small>
                3 cr
            </small>

        </div>
    `;
}


/* -----------------------------
   MANDATORY CURRICULUM
----------------------------- */

function renderMandatoryCurriculum(semester) {

    return (MANDATORY[semester] || [])
        .map(course => `
            <div class="subject-item">

                <span>
                    <b>${esc(course[0])}</b>
                    ${esc(course[1])}
                </span>

                <small>
                    0 cr
                </small>

            </div>
        `)
        .join("");
}


/* -----------------------------
   THEME
----------------------------- */

function applyThemeColor() {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = state.theme === "dark" ? "#080d1a" : "#ffffff";
}

function themeToggle() {

    state.theme =
        state.theme === "dark"
            ? "light"
            : "dark";

    document.documentElement.dataset.theme =
        state.theme;

    applyThemeColor();
    persist();


    const themeText =
        $("#themeBtn span");

    if (themeText) {
        themeText.textContent =
            state.theme === "dark"
                ? "Light mode"
                : "Dark mode";
    }


    /*
        Redraw chart so its colors
        immediately match the theme.
    */

    if (
        $("#dashboardView") &&
        !$("#dashboardView")
            .classList
            .contains("hidden")
    ) {
        renderDashboard();
    }
}


$("#themeBtn")
    .addEventListener(
        "click",
        themeToggle
    );

$("#mobileTheme")
    .addEventListener(
        "click",
        themeToggle
    );


/* -----------------------------
   RESET
----------------------------- */

$("#resetBtn")
    .addEventListener(
        "click",
        () => {

            if (
                confirm(
                    "Reset all saved semester results?"
                )
            ) {

                state = {
                    semesters: {},
                    theme: state.theme
                };

                persist();

                renderDashboard();
                renderSemester();

            }

        }
    );


/* -----------------------------
   SEMESTER DROPDOWN
----------------------------- */

$("#semesterSelect")
    .innerHTML =
    Array.from(
        { length: 8 },
        (_, index) => `
            <option value="${index + 1}">
                Semester ${index + 1}
            </option>
        `
    )
    .join("");


/*
    Default semester.
    If the user already has saved semesters,
    open the latest saved semester.
*/

const savedSemesterNumbers =
    Object.keys(state.semesters)
        .map(Number)
        .filter(number =>
            number >= 1 &&
            number <= 8
        )
        .sort((a, b) => a - b);

$("#semesterSelect").value =
    savedSemesterNumbers.length
        ? savedSemesterNumbers.at(-1)
        : 5;


$("#semesterSelect")
    .addEventListener(
        "change",
        renderSemester
    );


/* -----------------------------
   INITIALIZATION
----------------------------- */

document.documentElement.dataset.theme =
    state.theme || "light";
applyThemeColor();


$("#themeBtn span")
    .textContent =
    state.theme === "dark"
        ? "Light mode"
        : "Dark mode";


renderDashboard();
renderSemester();
renderCurriculum();


/* -----------------------------
   RESIZE CHART
----------------------------- */

window.addEventListener(
    "resize",
    () => {

        if (
            $("#dashboardView") &&
            !$("#dashboardView")
                .classList
                .contains("hidden")
        ) {

            renderDashboard();

        }

    }
);

/* -----------------------------
   MOBILE MENU (off-canvas sidebar)
----------------------------- */

(function () {
    const menuBtn = $("#menuBtn");
    const setOpen = open => {
        document.body.classList.toggle("menu-open", open);
        menuBtn.setAttribute("aria-expanded", String(open));
    };
    menuBtn.addEventListener("click", () => setOpen(true));
    $("#menuClose").addEventListener("click", () => setOpen(false));
    $("#scrim").addEventListener("click", () => setOpen(false));
    $("#resetBtn").addEventListener("click", () => setOpen(false));
    document.querySelectorAll(".nav-item").forEach(b => b.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
    window.matchMedia("(min-width: 1001px)").addEventListener("change", e => { if (e.matches) setOpen(false); });
})();
