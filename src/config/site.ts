/**
 * ---------------------------------------------------------------------------
 * SITE CONFIGURATION & CONTENT — GIRIDHARAN S
 * ---------------------------------------------------------------------------
 * Professional VLSI & Semiconductor Engineering Portfolio
 * ---------------------------------------------------------------------------
 */

export const site = {
  /** Shown letter-by-letter in the hero. */
  displayWord: 'PORTFOLIO',
  /** Index of character in `displayWord` where AnimatedFace lives (P-O-R-T-F-[O]-L-I-O) */
  faceLetterIndex: 5,

  eyebrow: 'VLSI / SEMICONDUCTOR ENGINEER',
  year: '2026',

  firstName: 'GIRIDHARAN',
  lastName: 'S',
  signatureName: 'GIRIDHARAN S',

  /** Professional positioning taglines */
  titleRole: 'VLSI Engineer',
  specialization: 'RTL Design | RTL-to-GDSII | Physical Design | DFT',
  primaryFocus: 'Physical Design',

  /** Professional Internship Statement */
  internshipStatement:
    'Seeking opportunities to contribute to VLSI and semiconductor engineering teams through internship roles across RTL Design, Physical Design, DFT, Verification, and related domains.',

  resumeUrl: '/resume/Giridharan_S_VLSI_Resume_v2.pdf',
  githubUrl: 'https://github.com/giridharansenthil416-png',
  linkedinUrl: 'https://www.linkedin.com/in/giridharan-s-13672932b/',
  contactEmail: 'giridharansenthil416@gmail.com',
  collegeEmail: 'giridharan.240034@vlsi.ritchennai.edu.in',
  phone: '+91 9884778461',
  location: 'Chennai, Tamil Nadu, India',

  /** CTAs */
  connect: {
    status: 'Open to VLSI & Semiconductor Internships',
    cta: "Let's connect",
    discuss: 'Discuss Opportunities',
    href: '#contact',
  },

  /** Engineering Snapshot Data */
  snapshot: [
    { label: 'DEGREE', value: 'B.Tech — VLSI Design & Tech' },
    { label: 'ACADEMICS', value: '8.00 CGPA' },
    { label: 'PRIMARY FOCUS', value: 'Physical Design' },
    { label: 'IMPLEMENTATION', value: 'RTL → OASIS Hands-on' },
    { label: 'EDA TOOLCHAIN', value: 'Synopsys + Cadence' },
    { label: 'DFT / TEST', value: 'Siemens Tessent (Hands-on)' },
    { label: 'HARDWARE / FPGA', value: 'Altera Cyclone II DE2' },
    { label: 'OPPORTUNITY', value: 'Open to All VLSI Internships' },
  ],

  /** About section data */
  intro: {
    heading: 'ABOUT ME',
    lede: "Hi, I'm GIRIDHARAN S.",
    roleBadge: 'VLSI Engineer & Engineering Student',
    paragraphs: [
      'I am an Electronics Engineering student specializing in VLSI Design and Technology at Rajalakshmi Institute of Technology, Chennai (CGPA: 8.00), building hands-on competencies across digital logic, RTL design, ASIC verification, and physical implementation.',
      'My primary career interest is Physical Design — taking logic from RTL through synthesis, floorplanning, power grid generation, placement, clock tree synthesis (CTS), routing, and layout generation. I have hands-on experience driving designs to OASIS format using Synopsys Fusion Compiler.',
      'Alongside physical design, I have independently worked through hands-on DFT exploration with Siemens Tessent, transistor-level custom IC design in Synopsys Custom Compiler and Cadence Virtuoso, and FPGA bitstream deployment on Altera Cyclone II hardware.',
      'I am actively seeking internship opportunities across RTL Design, Physical Design, DFT, and Verification to contribute to high-impact semiconductor teams.',
    ],
    terminal: {
      identity: 'GIRIDHARAN S',
      domain: 'VLSI & SEMICONDUCTOR ENGINEERING',
      degree: 'B.Tech — VLSI Design and Technology (2024–2028)',
      institution: 'Rajalakshmi Institute of Technology, Chennai',
      cgpa: '8.00 CGPA',
      primaryFocus: 'Physical Design (RTL-to-GDSII / OASIS)',
      goal: 'VLSI / Semiconductor Engineering Internship',
    },
    languages: ['English (Professional)', 'Tamil (Native)'],
    stats: [
      { value: '8.00', label: 'CGPA' },
      { value: '2028', label: 'GRADUATION' },
      { value: 'RTL→OASIS', label: 'IMPLEMENTATION' },
    ],
  },

  /** RTL-to-GDSII Flow Pipeline */
  flow: {
    heading: 'RTL → GDSII / OASIS FLOW',
    subheading: 'Complete ASIC Physical Design Methodology',
    primaryTool: 'Synopsys Fusion Compiler',
    note: 'Reviewed implementation, timing, power and routing reports as part of the physical design flow.',
    stages: [
      {
        step: '01',
        name: 'RTL Design',
        tool: 'Verilog HDL / VS Code',
        desc: 'Writing clean, synthesizable microarchitecture with modular register-transfer logic.',
      },
      {
        step: '02',
        name: 'Simulation & Verification',
        tool: 'Synopsys VCS / Verdi',
        desc: 'Functional verification using self-written testbenches and detailed waveform analysis.',
      },
      {
        step: '03',
        name: 'Logic Synthesis',
        tool: 'Fusion Compiler / DC (Learning)',
        desc: 'Translating RTL into target technology gate-level netlist with timing constraint mapping.',
      },
      {
        step: '04',
        name: 'Floorplanning',
        tool: 'Synopsys Fusion Compiler',
        desc: 'Defining core aspect ratio, boundary margins, IO pin arrangement, and macro placement.',
      },
      {
        step: '05',
        name: 'Power Planning',
        tool: 'Synopsys Fusion Compiler',
        desc: 'VDD/VSS power ring synthesis, multi-layer power straps, and followpin rail connection.',
      },
      {
        step: '06',
        name: 'Standard Cell Placement',
        tool: 'Synopsys Fusion Compiler',
        desc: 'Global placement, legalization, high-fanout net synthesis, and density optimization.',
      },
      {
        step: '07',
        name: 'Clock Tree Synthesis (CTS)',
        tool: 'Synopsys Fusion Compiler',
        desc: 'Clock buffer balancing, skew minimization, insertion delay control, and clock routing.',
      },
      {
        step: '08',
        name: 'Routing',
        tool: 'Synopsys Fusion Compiler',
        desc: 'Global routing and DRC-clean detailed multi-layer metal interconnect distribution.',
      },
      {
        step: '09',
        name: 'Signoff Checks & Reports',
        tool: 'Fusion Compiler Inspection',
        desc: 'Reviewing implementation, timing, power, placement density, and routing DRC reports.',
      },
      {
        step: '10',
        name: 'OASIS / GDSII Generation',
        tool: 'Stream-Out Artifact',
        desc: 'Exporting optimized compact layout stream data (.oasis) ready for fabrication checks.',
      },
    ],
  },

  /** Categorized Technical Skills */
  techSkills: {
    heading: 'TECHNICAL SKILLS',
    subheading: 'Organized by VLSI Design & Semiconductor Flow',
    categories: [
      {
        title: 'HDL & RTL DESIGN',
        skills: [
          { name: 'Verilog HDL', level: 'Strong' },
          { name: 'Digital Logic Design', level: 'Strong' },
          { name: 'RTL Microarchitecture', level: 'Strong' },
          { name: 'Functional Verification', level: 'Intermediate / Hands-on' },
          { name: 'Computer Architecture', level: 'Intermediate' },
          { name: 'SystemVerilog', level: 'Beginner / Learning' },
          { name: 'VHDL', level: 'Beginner / Learning' },
        ],
      },
      {
        title: 'VERIFICATION & DEBUG',
        skills: [
          { name: 'Synopsys VCS', level: 'Intermediate / Hands-on' },
          { name: 'Synopsys Verdi Debugger', level: 'Intermediate / Hands-on' },
          { name: 'Verilog Testbench Development', level: 'Strong' },
          { name: 'Directed Testing', level: 'Intermediate / Hands-on' },
          { name: 'Waveform Analysis', level: 'Intermediate / Hands-on' },
          { name: 'Cadence Xcelium', level: 'Hands-on / Learning' },
          { name: 'ModelSim', level: 'Intermediate / Hands-on' },
        ],
      },
      {
        title: 'SYNTHESIS & PHYSICAL DESIGN',
        skills: [
          { name: 'Synopsys Fusion Compiler (Primary)', level: 'Intermediate / Hands-on' },
          { name: 'RTL-to-OASIS / GDSII Flow', level: 'Intermediate / Hands-on' },
          { name: 'Floorplanning & Power Planning', level: 'Intermediate / Hands-on' },
          { name: 'Placement & CTS', level: 'Intermediate / Hands-on' },
          { name: 'Routing & Optimization', level: 'Intermediate / Hands-on' },
          { name: 'Timing Analysis / STA Review', level: 'Hands-on / Learning' },
          { name: 'Synopsys Design Compiler', level: 'Hands-on / Learning' },
        ],
      },
      {
        title: 'CUSTOM VLSI & CIRCUIT DESIGN',
        skills: [
          { name: 'Synopsys Custom Compiler', level: 'Intermediate / Hands-on' },
          { name: 'Cadence Virtuoso', level: 'Intermediate / Hands-on' },
          { name: 'CMOS Schematic Design', level: 'Intermediate / Hands-on' },
          { name: 'Transistor-Level Circuit Design', level: 'Intermediate / Hands-on' },
          { name: 'Full-Custom Layout', level: 'Intermediate / Hands-on' },
          { name: 'DRC / LVS / PEX Verification', level: 'Hands-on / Learning' },
        ],
      },
      {
        title: 'DFT & ATPG',
        skills: [
          { name: 'Siemens Tessent', level: 'Hands-on / Learning' },
          { name: 'Scan & Scan Chains', level: 'Hands-on / Learning' },
          { name: 'ATPG (Automatic Test Pattern Gen)', level: 'Hands-on / Learning' },
          { name: 'Tessent Shell Environment', level: 'Hands-on / Learning' },
          { name: 'DFT Design Setup & Debug', level: 'Hands-on / Learning' },
        ],
      },
      {
        title: 'FPGA DEVELOPMENT',
        skills: [
          { name: 'Xilinx Vivado', level: 'Intermediate / Hands-on' },
          { name: 'Intel / Altera Quartus', level: 'Intermediate / Hands-on' },
          { name: 'Altera Cyclone II DE2 Board', level: 'Intermediate / Hands-on' },
          { name: 'FPGA Synthesis & Bitstream', level: 'Intermediate / Hands-on' },
          { name: 'Hardware Testing & Debug', level: 'Intermediate / Hands-on' },
        ],
      },
      {
        title: 'PROGRAMMING & SCRIPTING',
        skills: [
          { name: 'Python', level: 'Strong' },
          { name: 'C', level: 'Intermediate' },
          { name: 'Java', level: 'Intermediate' },
        ],
      },
      {
        title: 'LINUX & AUTOMATION',
        skills: [
          { name: 'Linux / Rocky Linux', level: 'Intermediate / Hands-on' },
          { name: 'Bash / Shell Scripting', level: 'Intermediate / Hands-on' },
          { name: 'Tcl Scripting', level: 'Hands-on / Learning' },
          { name: 'Makefiles', level: 'Hands-on / Learning' },
          { name: 'Git & GitHub', level: 'Intermediate' },
        ],
      },
      {
        title: 'EDA PLAYGROUND & TESTING',
        skills: [
          { name: 'EDA Playground', level: 'Intermediate / Hands-on' },
          { name: 'Digital Design Testing', level: 'Strong' },
        ],
      },
    ],
  },

  /** Key Tool Logos for Logo Ribbon */
  skills: {
    heading: 'KEY TOOLS & PLATFORMS',
    items: [
      { label: 'Synopsys', short: 'Syn', src: '/assets/skills/synopsys.png', scale: 1 },
      { label: 'Cadence', short: 'Cad', src: '/assets/skills/cadence.png', scale: 1 },
      { label: 'Fusion Compiler', short: 'FC', src: '/assets/skills/fusion-compiler.png', scale: 1 },
      { label: 'AMD Vivado', short: 'Viv', src: '/assets/skills/vivado.png', scale: 1 },
      { label: 'Verilog HDL', short: 'Ver', src: '/assets/skills/verilog.png', scale: 1 },
      { label: 'Siemens Tessent', short: 'Tes', src: null, scale: 1 },
      { label: 'Linux / EDA', short: 'Lin', src: '/assets/skills/linux.png', scale: 1 },
      { label: 'Python', short: 'Py', src: '/assets/skills/python.png', scale: 1 },
    ],
  },

  /** Technical Experience & Hands-on Assignments */
  technicalExperience: {
    heading: 'TECHNICAL EXPERIENCE & ASSIGNMENTS',
    subheading: 'Hands-on Lab Assignments, Custom VLSI & Prototyping',
    items: [
      {
        id: 'tessent-dft',
        category: 'DFT / TEST',
        title: 'Siemens Tessent — Hands-on DFT Assignment',
        type: 'HOD-Assigned Technical Task',
        badge: 'HANDS-ON / LEARNING',
        organization: 'Rajalakshmi Institute of Technology',
        description:
          'HOD-assigned technical task focused on Siemens Tessent. Independently worked through the tool setup process, including download, installation, environment configuration, and practical exploration of the Tessent DFT flow.',
        coverage: [
          'Tool installation, licensing and environment configuration on Linux workstation',
          'Tessent Shell navigation and design setup/import procedures',
          'Scan insertion, scan chain configuration, and boundary scan concepts',
          'ATPG (Automatic Test Pattern Generation) flow exploration',
          'DFT rule violation debugging and test coverage report viewing',
        ],
        tags: ['Siemens Tessent', 'DFT', 'Scan Chains', 'ATPG', 'Tessent Shell', 'Testing'],
      },
      {
        id: 'custom-vlsi',
        category: 'CUSTOM IC DESIGN',
        title: 'Custom VLSI & Digital Circuit Design Experience',
        type: 'Transistor-Level Lab Exploration',
        badge: 'INTERMEDIATE / HANDS-ON',
        organization: 'VLSI Engineering Lab',
        description:
          'Transistor-level CMOS circuit schematic design, simulation, symbol generation, and full-custom physical layout using industry-standard tools.',
        tools: ['Synopsys Custom Compiler', 'Cadence Virtuoso'],
        coverage: [
          'CMOS Logic: Inverters, NAND, NOR, XOR, XNOR and complex gates',
          'Sequential Elements: Latches, D Flip-Flop, JK Flip-Flop, T Flip-Flop, Shift Registers, Counters',
          'Memory & Storage: SRAM cell design and Register File arrays',
          'Arithmetic Blocks: Ripple Carry Adder (RCA), Carry Lookahead Adder (CLA), Carry Select Adder, Carry Save Adder',
          'Multipliers: Array Multiplier, Booth Multiplier, Wallace Tree Multiplier',
          'Physical Verification: Design Rule Check (DRC), Layout Versus Schematic (LVS), and Parasitic Extraction (PEX)',
        ],
        tags: ['Custom Compiler', 'Cadence Virtuoso', 'CMOS Layout', 'DRC/LVS/PEX', 'Adders', 'Multipliers'],
      },
      {
        id: 'fpga-prototyping',
        category: 'FPGA IMPLEMENTATION',
        title: 'FPGA Design & Hardware Prototyping',
        type: 'FPGA Implementation Flow',
        badge: 'INTERMEDIATE / HANDS-ON',
        organization: 'Hardware Laboratory',
        description:
          'Implemented digital designs from Verilog RTL through synthesis, pin mapping, bitstream generation, and hardware testing on physical FPGA development boards.',
        hardware: 'Altera Cyclone II Development and Education Board (DE2)',
        tools: ['Xilinx Vivado', 'Intel / Altera Quartus', 'ModelSim'],
        evidenceImage: '/assets/fpga/altera.jpeg',
        simulationImage: '/assets/fpga/vivado_simulation.jpg',
        coverage: [
          'Target Hardware: Physical Altera Cyclone II DE2 Development Board',
          'Implemented Designs: ALU, adders, multipliers, counters, shift registers, and traffic-light controllers',
          'Complete Flow: Verilog RTL → Synthesis → Implementation → Bitstream Generation → Board Programming → Physical Hardware Testing',
          'Simulation Verification: Behavior simulation in Vivado and ModelSim prior to bitstream compilation',
        ],
        tags: ['Xilinx Vivado', 'Altera Quartus', 'Cyclone II DE2', 'Verilog', 'Bitstream', 'Hardware Testing'],
      },
    ],
  },

  /** Internship Experience (Preserved Structure) */
  experience: {
    heading: 'INTERNSHIP EXPERIENCE',
    items: [
      {
        num: '01',
        period: 'Virtual Internship 6.0',
        role: 'Python & Programming Track',
        company: 'Infosys Springboard',
        badge: 'PYTHON',
        duration: 'Virtual Practicum (Batch 7)',
        mode: 'Virtual / Online',
        status: 'Selected & Verified',
        commenced: 'November 2025',
        description:
          'Selected and enrolled in the Infosys Springboard Virtual Internship 6.0 (Batch 7) focusing on core programming foundations, software architecture concepts, and engineering problem-solving.',
        tags: ['Python', 'Software Engineering', 'Virtual Practicum', 'Infosys Springboard'],
        credentials: [
          {
            src: '/assets/internships/infosys/infosys_selection_letter.jpg',
            title: 'Infosys Springboard Selection Letter',
            alt: 'Infosys Springboard Virtual Internship 6.0 Selection Notice',
          },
          {
            src: '/assets/internships/infosys/infosys_badge_credential.jpg',
            title: 'Infosys Springboard Verified Badge',
            alt: 'Infosys Springboard Virtual Internship Credential Badge',
          },
        ],
      },
    ],
  },

  /** Hackathons & Competitions */
  hackathons: {
    heading: 'HACKATHONS & COMPETITIONS',
    items: [
      {
        id: 'innovaclash',
        num: '01',
        title: "INNOCLASH'26",
        subtitle: '24-Hour International Hybrid Hackathon',
        organizer: 'Dept. of Computer Science & Engineering, RIT in Association with iDatamind UAE',
        date: 'February 4th & 5th, 2026',
        role: 'Full Software Development (Team of 4)',
        description:
          "Participated as a team of 4 in INNOCLASH'26, an SDG-aligned 24-hour international hackathon. I independently engineered the entire software application component for our team's project solution.",
        tags: ['Hackathon', 'Software Development', 'Team of 4', 'RIT', 'iDatamind UAE'],
        certificate: {
          src: '/assets/hackathons/innovaclash/innovaclash_certificate.jpg',
          title: "INNOCLASH'26 Certificate of Participation",
          alt: "INNOCLASH'26 Participation Certificate for Giridharan S",
        },
      },
      {
        id: 'sih',
        num: '02',
        title: 'Smart India Hackathon (SIH)',
        subtitle: 'IoT Hardware & Real-Time Monitoring Project',
        organizer: 'National Level Technical Hackathon',
        role: 'Hardware Circuit Wiring, Integration & Project Presentation',
        description:
          'Collaborative hardware-software project built for Smart India Hackathon: an ESP32-WROVER controller interfaced with a PZEM-004T AC energy-metering module and relay for load management, paired with a real-time monitoring dashboard. My personal contribution was building all physical circuit connections and presenting the project.',
        tags: ['ESP32', 'PZEM-004T', 'Relay Circuit', 'Hardware Integration', 'SIH'],
        gallery: [
          {
            src: '/assets/hackathons/sih/sih-circuit-architecture.jpg',
            title: 'Hardware Circuit Architecture',
            alt: 'SIH Circuit Schematic and Relay Connections',
          },
          {
            src: '/assets/hackathons/sih/sih-hardware-prototype.jpg',
            title: 'Physical Hardware Prototype',
            alt: 'SIH ESP32 and Energy Metering Breadboard Setup',
          },
          {
            src: '/assets/hackathons/sih/sih-dashboard-monitor.jpg',
            title: 'Real-Time IoT Monitoring Dashboard',
            alt: 'SIH SmartHub JavaScript Energy Analytics Interface',
          },
          {
            src: '/assets/hackathons/sih/sih-team-experience.jpg',
            title: 'Team Presentation & Demonstration',
            alt: 'SIH Team Demo and Hardware Presentation',
          },
        ],
      },
    ],
  },

  /** Workshops & Technical Events */
  workshops: {
    heading: 'WORKSHOPS & TECHNICAL EVENTS',
    items: [
      {
        id: 'provlogic-workshop',
        num: '01',
        title: "2-Day Workshop on 'RTL to GDS-II'",
        organizer: 'ProV Logic',
        date: '13th & 14th June 2026',
        category: 'PHYSICAL DESIGN',
        description:
          'Comprehensive 2-day technical workshop on the complete VLSI Physical Design flow and industry-standard RTL-to-GDSII methodology, deepening insights into synthesis, floorplanning, placement, CTS, routing, and timing.',
        tags: ['ProV Logic', 'RTL to GDS-II', 'Physical Design Flow', 'ASIC Implementation'],
        certificate: {
          pdfUrl: '/certificates/Giridharan_ProV_Logic_RTL_to_GDSII_Workshop_Certificate.pdf',
          title: 'ProV Logic — RTL-to-GDSII Workshop Certificate',
          alt: 'Giridharan S Participation Certificate — ProV Logic RTL to GDSII Workshop, June 13–14 2026',
        },
      },
      {
        id: 'simats-nexora',
        num: '02',
        title: 'VLSI Workshop — NEXORA 2K25',
        organizer: 'SIMATS Engineering (Saveetha Institute), Chennai',
        date: '13th September 2025',
        category: 'SEMICONDUCTOR & VLSI',
        description:
          'Participated in the specialized VLSI technical workshop conducted during the National Level Technical Symposium NEXORA 2K25 by the Department of Materials Physics, SIMATS Engineering.',
        tags: ['SIMATS', 'Saveetha Institute', 'VLSI Workshop', 'NEXORA 2K25'],
        certificate: {
          src: '/assets/workshops/simats/simats_nexora_workshop_cert.jpg',
          title: 'SIMATS NEXORA 2K25 VLSI Workshop Certificate',
          alt: 'SIMATS NEXORA 2K25 Certificate of Appreciation for Giridharan S',
        },
      },
      {
        id: 'synopsys-cit',
        num: '03',
        title: 'Synopsys VLSI Workshop — VIDYUTRENZ',
        organizer: 'Chennai Institute of Technology (CIT) & IEEE ComSoc / EDS',
        date: '6th February 2026',
        category: 'EDA & SYNOPSYS',
        description:
          'Technical workshop on Synopsys EDA tools and semiconductor implementation flows organized by VIDYUTRENZ, Department of ECE at CIT, in collaboration with IEEE Electron Devices Society and IEEE ComSoc.',
        tags: ['Synopsys', 'Chennai Institute of Technology', 'IEEE EDS', 'IEEE ComSoc', 'VIDYUTRENZ'],
        certificate: {
          src: '/assets/workshops/synopsys/synopsys_cit_workshop_cert.jpg',
          title: 'Synopsys Workshop Certificate — CIT / IEEE',
          alt: 'Synopsys Technical Workshop Certificate from CIT for Giridharan S',
        },
      },
    ],
  },

  /** Education */
  education: {
    heading: 'EDUCATION',
    items: [
      {
        degree: 'B.Tech — Electronics Engineering',
        specialization: 'Specialization: VLSI Design and Technology',
        institution: 'Rajalakshmi Institute of Technology, Chennai',
        affiliation: 'Autonomous Institution',
        grade: 'CGPA: 8.00',
        period: '2024 – 2028',
        highlight: 'Focused on Digital Design, Physical Implementation & Semiconductor Technologies',
      },
      {
        degree: 'Higher Secondary Certificate (12th Standard)',
        specialization: 'Physics, Chemistry, Mathematics, Biology',
        institution: 'Bhagavan Higher Secondary School, Tiruvannamalai',
        affiliation: 'Tamil Nadu State Board',
        grade: '85.3%',
        period: 'Passed 2024',
        highlight: 'Strong mathematical and analytical foundation',
      },
      {
        degree: 'Secondary School Leaving Certificate (10th Standard)',
        specialization: 'General Secondary Curriculum',
        institution: 'Bhagavan Higher Secondary School, Tiruvannamalai',
        affiliation: 'Tamil Nadu State Board',
        grade: '89.2%',
        period: 'Passed 2022',
        highlight: 'Academic excellence and mathematics aptitude',
      },
    ],
  },

  /** Spoken Languages */
  languages: [
    { language: 'English', proficiency: 'Professional Working Proficiency' },
    { language: 'Tamil', proficiency: 'Native / Bilingual' },
  ],

  /** Engineering Principles Quotes */
  studio: {
    heading: 'ENGINEERING PRINCIPLES',
    items: [
      {
        quote: 'Designing hardware from RTL to silicon.',
        author: 'Giridharan S',
        rotation: 1.2,
        drop: 11,
        shade: 0.6,
        skew: 0.7,
        indent: 0,
        objectPosition: '56% 38%',
        href: null as string | null,
      },
      {
        quote: 'In digital hardware design, timing and architecture dictate all.',
        author: 'Semiconductor Axiom',
        rotation: 3.5,
        drop: 3,
        shade: 0.35,
        skew: -0.5,
        indent: 2,
        objectPosition: '50% 50%',
        href: null as string | null,
      },
      {
        quote: 'Simplicity is prerequisite for reliability.',
        author: 'Edsger W. Dijkstra',
        rotation: -4,
        drop: 0,
        shade: 0.2,
        skew: -0.9,
        indent: 1,
        objectPosition: '50% 50%',
        href: null as string | null,
      },
    ],
  },

  /** Footer & Contact */
  footer: {
    heading: "Let's connect",
    acknowledged: 'Message Sent',
    sub: 'Seeking opportunities to contribute to VLSI and semiconductor engineering teams through internship roles across RTL Design, Physical Design, DFT, Verification, and related domains.',
    location: 'Chennai, Tamil Nadu, India',
    phone: '+91 9884778461',
    href: 'mailto:giridharansenthil416@gmail.com',
    marquee: ['GIRIDHARAN S', 'VLSI ENGINEER', 'RTL TO OASIS', 'PHYSICAL DESIGN', 'SYNTHESIS & CTS'],
    links: [
      { label: 'Resume ↓', href: '/resume/Giridharan_S_VLSI_Resume_v2.pdf' },
      { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/giridharan-s-13672932b/' },
      { label: 'GitHub ↗', href: 'https://github.com/giridharansenthil416-png' },
      { label: 'Email', href: 'mailto:giridharansenthil416@gmail.com' },
      { label: 'Call (+91 9884778461)', href: 'tel:+919884778461' },
    ],
  },
} as const

export type Site = typeof site
