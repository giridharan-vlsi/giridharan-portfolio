/**
 * ---------------------------------------------------------------------------
 * PROJECTS CONFIGURATION — GIRIDHARAN S (VLSI & SEMICONDUCTOR ENGINEERING)
 * ---------------------------------------------------------------------------
 * Centralized, verifiable registry for all engineering projects.
 * 
 * Strict Technical Accuracy:
 * - No fabricated PDKs, technology nodes, frequencies, area, or fake metrics.
 * - Clear distinction between primary VLSI/silicon work and supporting embedded systems.
 * - Preserves existing layout evidence, OASIS artifacts, and interactive deep-dives.
 * ---------------------------------------------------------------------------
 */

export interface ProjectEvidence {
  src: string
  alt: string
  stage: string
  description?: string
  contain?: boolean
}

export interface ProjectData {
  id: string
  num: string
  category: 'flagship' | 'embedded'
  date: string
  title: string
  subtitle: string
  badge: string
  role: string
  roleNotes?: string
  description: string
  flow: string[]
  tools: string[]
  tags: string[]
  preview?: string
  evidenceLabel?: string
  oasis?: string
  gallery?: ProjectEvidence[]
  specHighlights?: Array<{ label: string; value: string }>
  deepDive: {
    overview: string
    architecture?: {
      description: string
      submodules?: Array<{ name: string; file: string; purpose: string }>
      opcodes?: Array<{ code: string; op: string; operation: string }>
    }
    systemModules?: Array<{ category: string; components: string; details: string }>
    customFlow?: Array<{ step: string; name: string; tools: string; description: string }>
    verification?: {
      description: string
      methods: string[]
      waveformNotes?: string
    }
    physicalDesign?: {
      tool: string
      flowStages: string[]
      reportHighlights: string[]
    }
    keyLearnings?: string[]
  }
}

export const projectsData: ProjectData[] = [
  /* ==========================================================================
     PROJECT 01: RTL ALU — Design, Verification & RTL-to-OASIS
     ========================================================================== */
  {
    id: 'alu-8bit',
    num: 'PROJECT / 01',
    category: 'flagship',
    date: '06/2026 – 07/2026',
    title: 'RTL ALU — Design, Verification & RTL-to-OASIS',
    subtitle: 'Arithmetic & Logic Unit Implementation',
    badge: 'SELF-DESIGNED RTL',
    role: 'RTL Architecture, Verilog Design, Testbench Verification & Physical Implementation',
    description:
      'Designed and implemented an ALU using Verilog RTL and validated its functionality through Synopsys VCS simulation and Verdi waveform analysis. Implemented the design through Synopsys Fusion Compiler, including floorplanning, power planning, placement, CTS/clock optimization, routing, and OASIS generation.',
    flow: ['VERILOG RTL', 'VCS SIMULATION', 'VERDI DEBUG', 'FUSION COMPILER', 'OASIS LAYOUT'],
    tools: ['Verilog HDL', 'Synopsys VCS', 'Synopsys Verdi', 'Synopsys Fusion Compiler', 'RTL-to-OASIS'],
    tags: ['Verilog HDL', 'Synopsys VCS', 'Synopsys Verdi', 'Synopsys Fusion Compiler', 'RTL-to-OASIS'],
    preview: '/assets/alu/01_alu_schematic.jpg',
    evidenceLabel: 'EXPLORE STAGE EVIDENCE (7) ↗',
    specHighlights: [
      { label: 'RTL Source', value: 'Self-Designed Synthesizable Verilog' },
      { label: 'Simulation & Debug', value: 'Synopsys VCS & Synopsys Verdi' },
      { label: 'Physical Synthesis', value: 'Synopsys Fusion Compiler' },
      { label: 'Stream-Out Format', value: 'OASIS Layout (.oasis)' },
    ],
    gallery: [
      {
        src: '/assets/alu/01_alu_schematic.jpg',
        alt: '8-Bit ALU Synthesized RTL Schematic',
        stage: 'RTL Synthesis & Schematic',
        description: 'Gate-level synthesized schematic showing control decode and combinational arithmetic blocks.',
        contain: true,
      },
      {
        src: '/assets/alu/02_fc_layout_view.jpg',
        alt: 'Synopsys Fusion Compiler Initial Floorplan and Cell Placement',
        stage: 'Floorplan & Placement',
        description: 'Core boundary definition, IO pin placement, and initial standard cell distribution.',
        contain: true,
      },
      {
        src: '/assets/alu/03_fc_layout_query_view.jpg',
        alt: 'Fusion Compiler Cell Query & Connectivity View',
        stage: 'Placement & Connectivity Inspection',
        description: 'Interactive cell query inspection verifying connectivity and density constraints.',
        contain: true,
      },
      {
        src: '/assets/alu/04_fc_intermediate_layout.jpg',
        alt: 'Clock Tree Synthesis & Power Routing Intermediate View',
        stage: 'CTS & Power Routing',
        description: 'Clock routing, buffer insertion, and intermediate power strap placement.',
        contain: true,
      },
      {
        src: '/assets/alu/05_fc_intermediate_layout_2.jpg',
        alt: 'Global and Detailed Routing Progression',
        stage: 'Detailed Routing Progression',
        description: 'Multi-layer metal routing tracking congestion, antenna prevention, and net routing.',
        contain: true,
      },
      {
        src: '/assets/alu/06_fc_layout_optimized.jpg',
        alt: 'Optimized Physical Layout in Fusion Compiler',
        stage: 'Post-Route Optimization',
        description: 'Timing optimization, wire widening, and spacing cleanup prior to signoff checks.',
        contain: true,
      },
      {
        src: '/assets/alu/07_fc_layout_view_2.jpg',
        alt: 'Final 8-Bit ALU Physical Layout View',
        stage: 'Final OASIS Layout View',
        description: 'Completed physical layout ready for stream-out and physical verification.',
        contain: true,
      },
    ],
    deepDive: {
      overview:
        'The 8-bit Arithmetic Logic Unit (ALU) was independently conceptualized and implemented in Verilog HDL. It supports arithmetic addition and subtraction alongside bitwise logic operations (AND, OR, XOR). The design was functionally validated using a dedicated Verilog testbench simulated with Synopsys VCS, analyzed in Verdi, and physically synthesized and placed using Synopsys Fusion Compiler.',
      architecture: {
        description:
          'Combinational 8-bit ALU architecture with 8-bit data inputs a and b, a 3-bit control opcode (op), and an 8-bit output result (y). Implemented with clean synthesizable case logic.',
        opcodes: [
          { code: "3'b000", op: 'ADD', operation: 'y = a + b' },
          { code: "3'b001", op: 'SUB', operation: 'y = a - b' },
          { code: "3'b010", op: 'AND', operation: 'y = a & b' },
          { code: "3'b011", op: 'OR',  operation: 'y = a | b' },
          { code: "3'b100", op: 'XOR', operation: 'y = a ^ b' },
          { code: 'default', op: 'CLEAR', operation: "y = 8'b00000000" },
        ],
      },
      verification: {
        description:
          'Developed a dedicated Verilog testbench covering directed edge cases (overflow, sign transitions, identity masks). Simulating under Synopsys VCS and debugging waveforms in Verdi ensured 100% functional match before physical design.',
        methods: [
          'Self-written directed test vectors for all 5 active operations',
          'Boundary condition checks (zero operands, maximum 0xFF values)',
          'Synopsys VCS compilation and run-time simulation',
          'Synopsys Verdi interactive waveform debugging',
        ],
        waveformNotes:
          'Signal traces confirmed zero-cycle combinational latency and accurate arithmetic transitions across all opcode shifts.',
      },
      physicalDesign: {
        tool: 'Synopsys Fusion Compiler',
        flowStages: [
          'Design Read & Elaboration: RTL read and technology library binding',
          'Synthesis: Optimization to target standard cell library',
          'Floorplanning: Core aspect ratio, row definitions, and IO pin placement',
          'Power Planning: VDD/VSS power rings, stripes, and followpins',
          'Placement: Global placement, legalization, and high-fanout net synthesis',
          'Clock Tree Synthesis (CTS): Clock buffer insertion and skew balancing',
          'Routing: Global routing followed by DRC-clean detailed routing',
          'OASIS Stream-Out: Generating compact layout database',
        ],
        reportHighlights: [
          'Reviewed implementation, timing, power and routing reports as part of the physical design flow',
          'Checked placement density and cell area utilization',
          'Verified zero unrouted nets post detailed routing',
        ],
      },
      keyLearnings: [
        'Writing clean, synthesizable RTL prevents logic synthesis anomalies in Fusion Compiler.',
        'Hands-on experience navigating the Fusion Compiler GUI and Tcl command environment.',
        'Understanding standard cell layout rules, congestion maps, and routing layers.',
      ],
    },
  },

  /* ==========================================================================
     PROJECT 02: RISC-V Processor — RTL Debugging, Verification & Physical Implementation
     ========================================================================== */
  {
    id: 'riscv-processor',
    num: 'PROJECT / 02',
    category: 'flagship',
    date: '07/2026 – 08/2026',
    title: 'RISC-V Processor — RTL Debugging, Verification & Physical Implementation',
    subtitle: 'RTL Debugging, Verification & Physical Implementation',
    badge: 'RTL DEBUG & IMPLEMENTATION',
    role: 'RTL Architecture Study, Debugging, Testbench Verification & Physical Implementation',
    roleNotes:
      'Note: The original RISC-V processor RTL was provided. Work focused on RTL debugging, verification testbench development, and the complete physical implementation flow.',
    description:
      'Analyzed the provided RISC-V processor RTL architecture and developed a self-written Verilog testbench for functional validation. Used Synopsys VCS and Verdi for simulation and waveform debugging, followed by physical implementation through Fusion Compiler toward OASIS output.',
    flow: ['RTL DEBUG', 'VCS SIMULATION', 'VERDI DEBUG', 'FUSION COMPILER', 'OASIS ARTIFACT'],
    tools: ['Verilog HDL', 'VCS', 'Verdi', 'Fusion Compiler', 'RTL Verification', 'Physical Implementation', 'OASIS'],
    tags: ['Verilog HDL', 'VCS', 'Verdi', 'Fusion Compiler', 'RTL Verification', 'Physical Implementation', 'OASIS'],
    preview: '/assets/cpu/02_fc_cpu_layout.jpg',
    evidenceLabel: 'EXPLORE STAGE EVIDENCE (8) ↗',
    oasis: '/assets/cpu/simple_single_core_cpu.oasis',
    specHighlights: [
      { label: 'RTL Codebase', value: 'Provided RISC-V Processor RTL' },
      { label: 'Candidate Role', value: 'RTL Debugging, Testbench & PnR Flow' },
      { label: 'Simulation & Debug', value: 'Synopsys VCS & Synopsys Verdi' },
      { label: 'Physical Implementation', value: 'Synopsys Fusion Compiler' },
      { label: 'Stream-Out Artifact', value: 'simple_single_core_cpu.oasis' },
    ],
    gallery: [
      {
        src: '/assets/cpu/01_cpu_schematic.jpg',
        alt: '8-Bit CPU Multi-module Synthesized Schematic',
        stage: 'RTL Elaboration & Schematic',
        description: 'Hierarchical RTL schematic showing PC, Instruction Memory, Control Unit, Register File, and ALU integration.',
        contain: true,
      },
      {
        src: '/assets/cpu/02_fc_cpu_layout.jpg',
        alt: 'Synopsys Fusion Compiler CPU Floorplan and Macro Placement',
        stage: 'Floorplanning & Macro Setup',
        description: 'Core boundary definition and standard cell utilization planning for the CPU core.',
        contain: true,
      },
      {
        src: '/assets/cpu/03_fc_cpu_layout_2.jpg',
        alt: 'Power Distribution Network and Ring Placement',
        stage: 'Power Planning',
        description: 'VDD and VSS power ring and power strap distribution across the CPU die area.',
        contain: true,
      },
      {
        src: '/assets/cpu/04_fc_cpu_layout_3.jpg',
        alt: 'Global Placement and Congestion Map Analysis',
        stage: 'Global Placement & Density',
        description: 'Standard cell placement inspection evaluating local density and congestion margins.',
        contain: true,
      },
      {
        src: '/assets/cpu/05_fc_cpu_optimized_view.jpg',
        alt: 'Optimization and Buffer Insertion in Fusion Compiler',
        stage: 'Timing Optimization & Buffering',
        description: 'High-fanout synthesis, buffer insertion, and setup timing slack improvements.',
        contain: true,
      },
      {
        src: '/assets/cpu/06_fc_cpu_cell_view.jpg',
        alt: 'Detailed Cell View and Local Logic Clustering',
        stage: 'Cell Placement & Cluster Inspection',
        description: 'Zoomed inspection of register file and control unit standard cells.',
        contain: true,
      },
      {
        src: '/assets/cpu/07_fc_cpu_routing_view.jpg',
        alt: 'Multi-layer Metal Routing View',
        stage: 'Detailed Clock & Signal Routing',
        description: 'Complete signal routing across multiple metal layers with clock tree distribution.',
        contain: true,
      },
      {
        src: '/assets/cpu/08_fc_cpu_final_view.jpg',
        alt: 'Final Completed CPU Physical Layout',
        stage: 'Final Signoff Layout & OASIS',
        description: 'Fully routed CPU layout ready for stream-out as simple_single_core_cpu.oasis.',
        contain: true,
      },
    ],
    deepDive: {
      overview:
        'Working with a provided RISC-V processor architecture, I analyzed the microarchitectural hierarchy, resolved RTL signal propagation bugs, wrote a comprehensive Verilog testbench, verified execution in VCS and Verdi, and carried the design through complete physical implementation using Synopsys Fusion Compiler to produce an OASIS stream-out artifact.',
      architecture: {
        description:
          'Provided processor microarchitecture containing an addressable Program Counter, Instruction Memory, Opcode Control Unit, Register File, and ALU execution datapath.',
        submodules: [
          { name: 'pc.v', file: 'pc.v', purpose: 'Program Counter maintaining instruction fetch address' },
          { name: 'imem.v', file: 'imem.v', purpose: 'Instruction Memory storing program opcodes and operands' },
          { name: 'control_unit.v', file: 'control_unit.v', purpose: 'Decodes instruction opcodes to control reg_we and alu_op' },
          { name: 'regfile.v', file: 'regfile.v', purpose: 'Synchronous dual-port register file for operand storage and writeback' },
          { name: 'alu.v', file: 'alu.v', purpose: 'Executes arithmetic and logical operations feeding back to writeback' },
          { name: 'cpu_top.v', file: 'cpu_top.v', purpose: 'Top-level interconnect integrating all processor building blocks' },
        ],
      },
      verification: {
        description:
          'Identified and resolved RTL connectivity issues in the initial codebase. Developed self-checking test vectors simulating instruction fetch, decode, ALU execution, and register writeback cycles.',
        methods: [
          'RTL review and debug of provided Verilog source modules',
          'Testbench simulation under Synopsys VCS verifying full instruction cycle',
          'Waveform analysis in Synopsys Verdi confirming clock and control transitions',
          'Data path integrity checks through register writeback',
        ],
        waveformNotes:
          'Verdi waveform traces confirmed correct instruction sequencing, program counter incrementation, and register file updates on positive clock edges.',
      },
      physicalDesign: {
        tool: 'Synopsys Fusion Compiler',
        flowStages: [
          'Design Read & Linking: Top-level compilation of hierarchical modules',
          'Timing & SDC Constraints: Clock definition and IO delay setup',
          'Floorplan Definition: Core boundary, IO ring allocation, aspect ratio',
          'Power Network Synthesis: VDD/VSS mesh and ring structure',
          'Placement & Legalization: Cell placement ensuring low congestion across bus wires',
          'CTS Implementation: Clock skew minimization across sequential flip-flops',
          'Routing & DRC Clean-up: Multi-metal layer routing and antenna avoidance',
          'Stream-Out: Output generated as simple_single_core_cpu.oasis',
        ],
        reportHighlights: [
          'Reviewed implementation, timing, power and routing reports as part of the physical design flow',
          'Inspected setup and hold slack metrics across sequential paths',
          'Monitored congestion and DRC violations through final routing stages',
        ],
      },
      keyLearnings: [
        'Navigating multi-module hierarchical designs through EDA physical synthesis.',
        'Debugging control signal race conditions and register file write timing.',
        'Understanding the significance of compact OASIS layout formatting compared to traditional GDSII.',
      ],
    },
  },

  /* ==========================================================================
     PROJECT 03: Self-Healing RISC-V SoC Architecture
     ========================================================================== */
  {
    id: 'self-healing-riscv',
    num: 'PROJECT / 03',
    category: 'flagship',
    date: '2026 – Present',
    title: 'Adaptive Multi-Stage Hardware Recovery Architecture for Performance- and Reliability-Aware Self-Healing RISC-V SoC',
    subtitle: 'Hardware Recovery Architecture & Reliability Exploration',
    badge: 'ACADEMIC RESEARCH',
    role: 'Architecture Analysis & Hardware Recovery Exploration',
    description:
      'Academic project focused on performance- and reliability-aware hardware recovery architecture for a RISC-V SoC.',
    flow: ['RISC-V ARCHITECTURE', 'RELIABILITY EVALUATION', 'MULTI-STAGE RECOVERY MODEL'],
    tools: ['RISC-V SoC', 'Hardware Recovery', 'Reliability Architecture', 'Academic Research'],
    tags: ['RISC-V', 'Hardware Recovery', 'Fault Tolerance', 'SoC Reliability', 'Academic Project'],
    specHighlights: [
      { label: 'Target Platform', value: 'RISC-V SoC Architecture' },
      { label: 'Focus Area', value: 'Hardware Recovery & Fault Mitigation' },
      { label: 'Exploration Scope', value: 'Performance- & Reliability-Aware Design' },
      { label: 'Project Status', value: 'Academic Project (2026 – Present)' },
    ],
    deepDive: {
      overview:
        'Academic project focused on performance- and reliability-aware hardware recovery architecture for a RISC-V SoC. Investigating multi-stage recovery concepts to balance execution reliability and system performance overhead under hardware anomaly conditions.',
      architecture: {
        description:
          'Exploring multi-stage hardware recovery concepts integrated into a RISC-V SoC framework, evaluating architectural trade-offs between performance preservation and fault mitigation.',
      },
      keyLearnings: [
        'Understanding hardware reliability constraints in RISC-V processor architectures.',
        'Balancing recovery overhead against execution performance in SoC designs.',
      ],
    },
  },

  /* ==========================================================================
     PROJECT 06: Custom CMOS VLSI Design & Layout (Primary Category)
     ========================================================================== */
  {
    id: 'custom-cmos-vlsi',
    num: 'PROJECT / 06',
    category: 'flagship',
    date: 'Academic',
    title: 'Custom CMOS VLSI Design & Layout',
    subtitle: 'Transistor-Level Schematic, Physical Layout & Verification',
    badge: 'CUSTOM IC / CADENCE & SYNOPSYS',
    role: 'Transistor-Level Schematic Design, Physical Layout, DRC, LVS & PEX Verification',
    description:
      'Performed hands-on transistor-level CMOS design and physical layout using Synopsys Custom Compiler and Cadence Virtuoso. Worked across sequential, memory, and arithmetic circuits including latches, flip-flops, shift registers, counters, SRAM, register files, adders, and multipliers. Applied the complete custom VLSI flow from schematic through DRC, LVS, and PEX.',
    flow: ['CMOS SCHEMATIC', 'CIRCUIT SIMULATION', 'PHYSICAL LAYOUT', 'DRC CHECK', 'LVS VERIFICATION', 'PEX EXTRACTION'],
    tools: [
      'CMOS',
      'Transistor-Level Design',
      'Synopsys Custom Compiler',
      'Cadence Virtuoso',
      'Schematic Design',
      'Physical Layout',
      'DRC',
      'LVS',
      'PEX',
    ],
    tags: [
      'CMOS',
      'Transistor-Level Design',
      'Synopsys Custom Compiler',
      'Cadence Virtuoso',
      'Schematic Design',
      'Physical Layout',
      'DRC',
      'LVS',
      'PEX',
    ],
    specHighlights: [
      { label: 'EDA Toolchains', value: 'Synopsys Custom Compiler & Cadence Virtuoso' },
      { label: 'Circuit Scope', value: 'CMOS Logic, Sequentials, SRAM, Adders, Multipliers' },
      { label: 'Physical Verification', value: 'DRC Clean, LVS Matched, PEX Parasitic Extraction' },
      { label: 'Flow Level', value: 'Transistor-Level Full-Custom Implementation' },
    ],
    deepDive: {
      overview:
        'Hands-on full-custom IC design methodology executed in Synopsys Custom Compiler and Cadence Virtuoso. Covered circuit schematic capture, functional simulation, mask-level physical layout design, and physical verification to ensure design rule compliance and schematic-to-layout consistency.',
      customFlow: [
        {
          step: '01',
          name: 'CMOS Schematic Design',
          tools: 'Custom Compiler / Virtuoso',
          description: 'Transistor-level schematic capture of basic logic, memory cells, and arithmetic building blocks.',
        },
        {
          step: '02',
          name: 'Circuit Simulation',
          tools: 'Analog / Mixed-Signal Simulator',
          description: 'Functional transient simulation verifying switching behavior and logic transitions.',
        },
        {
          step: '03',
          name: 'Physical Layout',
          tools: 'Layout XL / Custom Layout',
          description: 'Full-custom polygon and cell layout, diffusion routing, contact placement, and metal interconnects.',
        },
        {
          step: '04',
          name: 'Design Rule Check (DRC)',
          tools: 'Physical Verification Engine',
          description: 'Verification of geometrical design rules (spacing, enclosure, width, antenna) across all mask layers.',
        },
        {
          step: '05',
          name: 'Layout Versus Schematic (LVS)',
          tools: 'Layout Versus Schematic Engine',
          description: 'Device extraction and topological comparison guaranteeing exact schematic-to-layout netlist equivalence.',
        },
        {
          step: '06',
          name: 'Parasitic Extraction (PEX)',
          tools: 'Parasitic Extractor',
          description: 'Extraction of layout parasitic resistances and capacitances (R+C) for post-layout evaluation.',
        },
      ],
      systemModules: [
        {
          category: 'CMOS Basic Logic',
          components: 'Static CMOS Gates',
          details: 'Inverters, NAND, NOR, XOR, XNOR, and complex compound logic.',
        },
        {
          category: 'Sequential Elements',
          components: 'Latches & Flip-Flops',
          details: 'Level-sensitive latches, edge-triggered D and JK flip-flops, shift registers, and synchronous counters.',
        },
        {
          category: 'Memory & Storage',
          components: 'SRAM & Register Arrays',
          details: 'Static RAM bitcell architectures and multi-word register file arrays.',
        },
        {
          category: 'Arithmetic Blocks',
          components: 'Adders & Multipliers',
          details: 'Ripple carry adders (RCA), carry lookahead adders (CLA), and hardware multiplier circuits.',
        },
      ],
      keyLearnings: [
        'Navigating transistor-level schematic capture and symbol creation.',
        'Hands-on full-custom mask layout routing and DRC clean-up.',
        'Resolving LVS pin and connectivity mismatches prior to parasitic extraction.',
      ],
    },
  },

  /* ==========================================================================
     PROJECT 04: Air Mouse — Gesture-Controlled Human Interface
     ========================================================================== */
  {
    id: 'air-mouse',
    num: 'PROJECT / 04',
    category: 'embedded',
    date: '10/2025 – 11/2025',
    title: 'Air Mouse — Gesture-Controlled Human Interface',
    subtitle: 'Wireless Motion Sensing & HID System',
    badge: 'EMBEDDED HARDWARE',
    role: 'Hardware Interfacing, Firmware Development & Wireless Integration',
    description:
      'Developed a wireless air-mouse system using an ESP32 and gyroscope-based motion sensing for real-time cursor control. Implemented Bluetooth connectivity for wireless computer interaction, capacitive touch for click control, and gesture-based scrolling using Arduino IDE.',
    flow: ['GYROSCOPE SENSING', 'ESP32 FIRMWARE', 'BLUETOOTH HID', 'GESTURE DECODE', 'CURSOR CONTROL'],
    tools: ['ESP32', 'Gyroscope', 'Arduino IDE', 'Bluetooth', 'Capacitive Touch', 'Embedded Systems'],
    tags: ['ESP32', 'Gyroscope', 'Arduino IDE', 'Bluetooth', 'Capacitive Touch', 'Embedded Systems'],
    specHighlights: [
      { label: 'Compute Core', value: 'ESP32 Microcontroller' },
      { label: 'Motion Tracking', value: 'Gyroscope-Based Sensing' },
      { label: 'Host Connectivity', value: 'Bluetooth Wireless HID' },
      { label: 'Input Controls', value: 'Capacitive Touch & Gesture Scrolling' },
      { label: 'Firmware Stack', value: 'Arduino IDE / Embedded C/C++' },
    ],
    deepDive: {
      overview:
        'Developed a wireless air-mouse system using an ESP32 and gyroscope-based motion sensing for real-time cursor control. Implemented Bluetooth connectivity for wireless computer interaction, capacitive touch for click control, and gesture-based scrolling using Arduino IDE.',
      systemModules: [
        {
          category: 'Compute Core',
          components: 'ESP32 Microcontroller',
          details: 'Embedded processing, sensor interfacing, and wireless Bluetooth stack management.',
        },
        {
          category: 'Motion Sensing',
          components: 'Gyroscope Module',
          details: 'Continuous angular velocity and motion tracking translated into cursor coordinates.',
        },
        {
          category: 'User Input',
          components: 'Capacitive Touch Sensor',
          details: 'Solid-state touch detection for click control and gesture-based scrolling.',
        },
        {
          category: 'Host Communication',
          components: 'Bluetooth Interface',
          details: 'Wireless HID communication linking the embedded peripheral directly to host computers.',
        },
        {
          category: 'Firmware Stack',
          components: 'Arduino IDE / Embedded C/C++',
          details: 'Driver integration, sensor calibration routines, and real-time input handling.',
        },
      ],
      keyLearnings: [
        'Interfacing motion sensors with microcontrollers over standard hardware buses.',
        'Managing wireless Bluetooth HID profiles for computer peripheral emulation.',
        'Handling capacitive touch triggers and gesture thresholding in firmware.',
      ],
    },
  },

  /* ==========================================================================
     PROJECT 05: Vision Speak — AI-Powered Assistive System for Visually Impaired People
     ========================================================================== */
  {
    id: 'vision-speak',
    num: 'PROJECT / 05',
    category: 'embedded',
    date: '04/2025 – 08/2025',
    title: 'Vision Speak — AI-Powered Assistive System for Visually Impaired People',
    subtitle: 'Wearable Edge-AI Assistive Prototype',
    badge: 'EDGE AI & SENSOR INTEGRATION',
    role: 'Hardware Integration, Sensor Interfacing, Edge AI Software & Prototyping',
    description:
      'Developed a compact wearable assistive system built around ESP32-CAM, combining multi-sensor obstacle detection, computer vision, OCR, object and currency identification, face recognition, and voice interaction. The project combines hardware integration, AI software development, module integration, indoor testing, and optimization toward a wearable assistive prototype.',
    flow: ['MULTI-SENSOR SENSING', 'ESP32-CAM ACQUISITION', 'EDGE AI / OCR', 'VOICE & TACTILE FEEDBACK'],
    tools: [
      'ESP32-CAM',
      'Ultrasonic Sensor',
      'ToF Sensor',
      'IMU',
      'TensorFlow Lite',
      'Tesseract OCR',
      'Vosk / PocketSphinx',
      'MicroSD',
      'Audio Feedback',
      'Vibration Feedback',
      'Embedded AI',
    ],
    tags: [
      'ESP32-CAM',
      'Ultrasonic Sensor',
      'ToF Sensor',
      'IMU',
      'TensorFlow Lite',
      'Tesseract OCR',
      'Vosk / PocketSphinx',
      'MicroSD',
      'Audio Feedback',
      'Vibration Feedback',
      'Embedded AI',
    ],
    specHighlights: [
      { label: 'Controller & Vision', value: 'ESP32-CAM (Image Capture & Control)' },
      { label: 'Obstacle Detection', value: 'Ultrasonic & ToF Sensors' },
      { label: 'Orientation', value: 'Inertial Measurement Unit (IMU)' },
      { label: 'Vision & OCR', value: 'TensorFlow Lite & Tesseract OCR' },
      { label: 'Voice Stack', value: 'Vosk / PocketSphinx (Offline Voice)' },
      { label: 'Storage & Audio', value: 'MicroSD, Mini Speaker / Headphones' },
      { label: 'Tactile Alert', value: 'Vibration Motor' },
      { label: 'Power Architecture', value: '18650 Li-ion, TP4056 & Buck Converter' },
    ],
    deepDive: {
      overview:
        'Developed a compact wearable assistive system built around ESP32-CAM, combining multi-sensor obstacle detection, computer vision, OCR, object and currency identification, face recognition, and voice interaction. The system integrates hardware sensors, machine learning inference, offline speech processing, and multimodal feedback in a wearable enclosure evaluated through indoor testing.',
      systemModules: [
        {
          category: 'Central Controller & Vision',
          components: 'ESP32-CAM Module',
          details: 'Image capture, AI processing, and wireless control in a compact embedded form factor.',
        },
        {
          category: 'Obstacle & Distance Sensing',
          components: 'Ultrasonic & ToF Sensors',
          details: 'Multi-sensor obstacle detection for proximity monitoring and obstacle clearance.',
        },
        {
          category: 'Orientation',
          components: 'Inertial Measurement Unit (IMU)',
          details: 'Orientation and motion tracking providing spatial context.',
        },
        {
          category: 'Object & Face Recognition',
          components: 'TensorFlow Lite',
          details: 'On-device computer vision models for object, currency, and face recognition.',
        },
        {
          category: 'Text Reading',
          components: 'Tesseract OCR',
          details: 'Optical character recognition extracting printed text from captured imagery.',
        },
        {
          category: 'Voice Interaction',
          components: 'Vosk / PocketSphinx',
          details: 'Offline voice interaction engine enabling hands-free voice commands.',
        },
        {
          category: 'Local Storage',
          components: 'MicroSD Module',
          details: 'Stores product details, face data, and recognition history locally.',
        },
        {
          category: 'Audio Feedback',
          components: 'Mini Speaker / Headphones',
          details: 'Auditory feedback conveying detection results and spoken guidance.',
        },
        {
          category: 'Tactile Alerts',
          components: 'Vibration Motor',
          details: 'Haptic vibration alerts providing immediate tactile warnings for obstacles.',
        },
        {
          category: 'Power Management',
          components: '18650 Li-ion + TP4056 + Buck Converter',
          details: 'Rechargeable battery supply with dedicated charging and voltage regulation.',
        },
        {
          category: 'Mechanical Form Factor',
          components: 'Compact Wearable Enclosure',
          details: 'Wearable enclosure integrating all sensors and modules for indoor testing.',
        },
      ],
      keyLearnings: [
        'Integrating heterogeneous sensors (ultrasonic, ToF, IMU, camera) into a unified embedded framework.',
        'Deploying edge AI inference and offline speech recognition within embedded resource boundaries.',
        'Managing power distribution and multimodal feedback (audio and tactile) in a wearable prototype.',
      ],
    },
  },
]
