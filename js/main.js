/* =========================================================
   Portfolio — single script (language, skills, projects, modal)
   Edit the SKILLS and PROJECTS arrays below to update content.
   ========================================================= */

/* ---------- SKILLS ---------- */
const SKILLS = [
  {
    icon: "fa-code",
    title: { en: "Programming", th: "การเขียนโปรแกรม" },
    tags: [
      "PHP 7",
      "Laravel",
      "JavaScript",
      "C# / WPF",
      "HTML",
      "CSS",
      "Bootstrap 5",
    ],
  },
  {
    icon: "fa-database",
    title: { en: "Database", th: "ฐานข้อมูล" },
    tags: [
      "MySQL / MySQLi",
      "SQL",
      "SQLite",
      "Eloquent ORM",
      "Multi-database design",
    ],
  },
  {
    icon: "fa-puzzle-piece",
    title: { en: "Libraries & Integrations", th: "ไลบรารีและการเชื่อมต่อ" },
    tags: [
      "PHPMailer",
      "mPDF",
      "DomPDF",
      "Chart.js",
      "SweetAlert",
      "LINE Messaging API",
    ],
  },
  {
    icon: "fa-diagram-project",
    title: { en: "Workflow & Automation", th: "Workflow และระบบอัตโนมัติ" },
    tags: [
      { en: "Multi-level approval", th: "อนุมัติหลายระดับ" },
      { en: "Email automation", th: "อีเมลอัตโนมัติ" },
      { en: "Role-based access", th: "สิทธิ์ตามบทบาท" },
      { en: "PDF reports", th: "รายงาน PDF" },
    ],
  },
  {
    icon: "fa-shield-halved",
    title: { en: "Security Practices", th: "ความปลอดภัย" },
    tags: [
      "Prepared statements",
      { en: "Private file storage", th: "Private storage" },
      { en: "Audit logging", th: "Audit log" },
      {
        en: "Digital signature / QR verify",
        th: "ลายเซ็นดิจิทัล / QR ตรวจสอบ",
      },
    ],
  },
  {
    icon: "fa-server",
    title: { en: "Infrastructure", th: "โครงสร้างพื้นฐาน" },
    tags: [
      "Server",
      "Network",
      "Backup",
      "CCTV",
      "PRTG",
      "Raspberry Pi",
      "Hardware I/O",
    ],
  },
  {
    icon: "fa-chart-line",
    title: { en: "Data Analytics", th: "การวิเคราะห์ข้อมูล" },
    tags: ["Power BI", "Data Analysis", "Dashboards", "Reporting"],
  },
  {
    icon: "fa-screwdriver-wrench",
    title: { en: "Tools", th: "เครื่องมือ" },
    tags: ["Git", "VS Code", "Visual Studio", "AppServ"],
  },
  {
    icon: "fa-headset",
    title: { en: "Support", th: "งานสนับสนุน" },
    tags: ["Helpdesk", "Troubleshooting", "User training"],
  },
];

/* ---------- PROJECTS ----------
   cat: web | desktop | infra  (a project can have several)
   status: "dev" shows an "In development" badge; omit for live systems
   images: optional screenshots shown in the detail window            */
const PROJECTS = [
  {
    id: "helpdesk",
    cat: ["web"],
    icon: "fa-headset",
    title: "IT Helpdesk System",
    desc: {
      en: "Online IT service request and approval system with real-time tracking.",
      th: "ระบบแจ้งซ่อมและขอรับบริการ IT แบบออนไลน์ พร้อมอนุมัติและติดตามสถานะแบบเรียลไทม์",
    },
    tech: ["PHP", "MySQL", "Bootstrap 5", "PHPMailer", "mPDF"],
    features: {
      en: [
        "Category-first request form that reveals options step by step",
        "Multi-level approval workflow",
        "HTML ticket email with a JO-###### reference number",
        "Job calendar with colour-coded status chips",
        "Real-time status dashboard and PDF job report",
      ],
      th: [
        "ฟอร์มแจ้งงานเลือกหมวดหมู่ก่อน แล้วแสดงตัวเลือกทีละขั้น",
        "อนุมัติหลายระดับ",
        "อีเมลตั๋วงานแบบ HTML พร้อมเลขอ้างอิง JO-######",
        "ปฏิทินงานแยกสีตามสถานะ",
        "แดชบอร์ดสถานะแบบเรียลไทม์ และส่งออกรายงาน PDF",
      ],
    },
    impact: {
      en: [
        "Less paperwork and faster processing",
        "Clear visibility between users and the IT team",
        "Full audit trail of every job",
      ],
      th: [
        "ลดเอกสารและเวลาในการดำเนินการ",
        "ผู้ใช้และทีม IT เห็นสถานะตรงกัน",
        "ตรวจสอบย้อนหลังได้ทุกงาน",
      ],
    },
    images: ["images/ithelpdesk-1.png", "images/ithelpdesk-2.png"],
  },
  {
    id: "asset",
    cat: ["web"],
    icon: "fa-laptop-code",
    title: "IT Asset Take-Out Control",
    desc: {
      en: "Digital approval and scan verification for taking IT equipment out of the company.",
      th: "ระบบควบคุม ตรวจสอบ และอนุมัติการนำอุปกรณ์ IT ออกนอกบริษัทแบบดิจิทัล",
    },
    tech: ["PHP", "MySQL", "Raspberry Pi 4B", "PHPMailer", "PDF"],
    features: {
      en: [
        "Request approval simplified to a single Head Section step",
        "Section-mapping table to handle cross-department approvals, with an admin CRUD page",
        "Kiosk scan page on a Raspberry Pi 4B with a 7-inch touchscreen",
        "Scan logs recorded per factory for historical verification",
        "Modernised email notification templates",
      ],
      th: [
        "ลดขั้นตอนอนุมัติเหลือหัวหน้าแผนกขั้นเดียว",
        "ตาราง section mapping รองรับการอนุมัติข้ามแผนก พร้อมหน้า admin จัดการ",
        "หน้าสแกนแบบ kiosk บน Raspberry Pi 4B จอสัมผัส 7 นิ้ว",
        "บันทึก log การสแกนแยกตามโรงงาน ตรวจสอบย้อนหลังได้",
        "ปรับปรุงเทมเพลตอีเมลแจ้งเตือนให้ทันสมัย",
      ],
    },
    impact: {
      en: [
        "Eliminated paper request forms",
        "Stronger control and transparency of IT assets",
      ],
      th: [
        "เลิกใช้แบบฟอร์มกระดาษ",
        "ควบคุมและตรวจสอบทรัพย์สิน IT ได้โปร่งใสขึ้น",
      ],
    },
    images: ["images/Asset-Control-1.png", "images/Asset-Control-2.png"],
  },
  {
    id: "signage",
    cat: ["web", "infra"],
    icon: "fa-tv",
    title: "Digital Signage System",
    desc: {
      en: "Central media management using Raspberry Pi instead of N-Computing devices.",
      th: "ระบบจัดการสื่อดิจิทัลแบบศูนย์กลาง ใช้ Raspberry Pi แทน N-Computing",
    },
    tech: ["PHP", "MySQL", "HTML/CSS", "Raspberry Pi"],
    features: {
      en: [
        "Central media upload and management",
        "Assign content per screen",
        "Scheduled playback",
        "Remote device control from a web panel",
      ],
      th: [
        "อัปโหลดและจัดการสื่อจากศูนย์กลาง",
        "กำหนดสื่อแยกตามหน้าจอ",
        "ตั้งเวลาแสดงผล",
        "ควบคุมอุปกรณ์ระยะไกลผ่านเว็บ",
      ],
    },
    impact: {
      en: [
        "Lower hardware and maintenance cost",
        "Faster, easier media updates",
        "More control and flexibility",
      ],
      th: [
        "ลดต้นทุนอุปกรณ์และการดูแล",
        "อัปเดตสื่อได้ง่ายและรวดเร็ว",
        "ควบคุมและปรับเปลี่ยนได้ยืดหยุ่น",
      ],
    },
    images: ["images/Digitalsignage-1.png", "images/Digitalsignage-2.png"],
  },
  {
    id: "spare",
    cat: ["web"],
    icon: "fa-boxes-stacked",
    title: "Spare Part Control",
    desc: {
      en: "Department spare-part stock and serial-number tracking.",
      th: "ระบบควบคุมสต็อกพัสดุประจำแผนกและ Serial Number",
    },
    tech: ["PHP", "MySQL", "Dashboard", "PDF"],
    features: {
      en: [
        "Control purchasing and disbursement",
        "Monthly disbursement status dashboard",
        "Serial-number tracking",
        "PDF report export",
      ],
      th: [
        "ควบคุมการสั่งซื้อและการเบิกจ่าย",
        "แดชบอร์ดสถานะการเบิกจ่ายประจำเดือน",
        "ติดตาม Serial Number",
        "ส่งออกรายงาน PDF",
      ],
    },
    images: ["images/it-helpdesk1.png", "images/pass1.png"],
  },
  {
    id: "stationery",
    cat: ["web"],
    icon: "fa-pen-ruler",
    title: "Stationery Withdrawal System",
    desc: {
      en: "Multi-factory stationery requisition with approval steps and a KPI dashboard.",
      th: "ระบบเบิกเครื่องเขียนหลายโรงงาน พร้อมขั้นตอนอนุมัติและแดชบอร์ด KPI",
    },
    tech: ["PHP 7", "MySQL", "Bootstrap 5", "Chart.js", "PHPMailer"],
    features: {
      en: [
        "Multi-factory support (FAST1 / FAST2 / FAST3) with separate item masters",
        "Card-based request list with a Head → Manager approval stepper",
        "Item cards with quantity steppers, toast notifications and out-of-stock handling",
        "KPI dashboard with year-over-year trends and multi-filter charts",
        "Close-withdrawal flow with paid / remaining badges",
      ],
      th: [
        "รองรับหลายโรงงาน (FAST1 / FAST2 / FAST3) แยกรายการสินค้า",
        "รายการเบิกแบบการ์ด พร้อมสถานะอนุมัติ หัวหน้า → ผู้จัดการ",
        "การ์ดสินค้าพร้อมปุ่มปรับจำนวน, Toast แจ้งเตือน และสถานะสินค้าหมด",
        "แดชบอร์ด KPI เทียบรายปี พร้อมกราฟและตัวกรองหลายแบบ",
        "ขั้นตอนปิดงานเบิก พร้อมแสดงจำนวนจ่ายแล้ว / คงเหลือ",
      ],
    },
  },
  {
    id: "jobpe",
    cat: ["web"],
    icon: "fa-gears",
    title: "Job PE System",
    desc: {
      en: "Laravel job-order system with Head and FM approval, assignment and completion tracking.",
      th: "ระบบใบสั่งงาน PE บน Laravel พร้อมอนุมัติโดยหัวหน้าและ FM มอบหมาย และติดตามการปิดงาน",
    },
    tech: ["Laravel", "MySQL", "Multi-database", "Mailables"],
    features: {
      en: [
        "Flow: create → Head approve → assign → FM approve (if needed) → complete → requester closes",
        "Assignment and completion emails sent automatically to the right people",
        "Staff work queue, completed-jobs page and completion photo proof",
        "Job status timeline built from per-stage timestamps",
        "Pending-approval count badges in the sidebar",
      ],
      th: [
        "ขั้นตอน: แจ้งงาน → หัวหน้าอนุมัติ → มอบหมาย → FM อนุมัติ (ถ้าจำเป็น) → จบงาน → ผู้ขอปิดงาน",
        "ส่งอีเมลมอบหมายงานและแจ้งจบงานให้ผู้เกี่ยวข้องอัตโนมัติ",
        "หน้างานของฉัน หน้างานที่เสร็จแล้ว และรูปถ่ายยืนยันการจบงาน",
        "Timeline สถานะงานจากเวลาของแต่ละขั้นตอน",
        "Badge แสดงจำนวนงานรออนุมัติบน sidebar",
      ],
    },
  },
  {
    id: "jobut",
    cat: ["web"],
    icon: "fa-clipboard-check",
    title: "Job Order UT System",
    desc: {
      en: "Role-based job order system with a 9-status workflow, 2-step approval and factory-scoped managers.",
      th: "ระบบใบสั่งงาน UT แบบแยกตามบทบาท มี workflow 9 สถานะ อนุมัติ 2 ขั้น และผู้จัดการแยกตามโรงงาน",
    },
    tech: ["Laravel", "MySQL", "Role-based access", "Email"],
    features: {
      en: [
        "Head approval, then FM approval only for jobs above the cost limit",
        "Roles for admin, management, head section, UT manager, UT staff and employee",
        "Reject, cancel and finish-date extension with reasons and audit trail",
        "Email to requester and managers at each key step",
        "Settings pages for departments, job types, staff and managers",
      ],
      th: [
        "หัวหน้าอนุมัติ และให้ FM อนุมัติเฉพาะงานที่เกินวงเงิน",
        "แยกสิทธิ์ admin, management, head section, UT manager, UT staff และพนักงาน",
        "ปฏิเสธ ยกเลิก และขยายวันเสร็จงาน พร้อมเหตุผลและประวัติ",
        "ส่งอีเมลถึงผู้ขอและผู้จัดการในแต่ละขั้นตอนสำคัญ",
        "หน้าตั้งค่าแผนก ประเภทงาน เจ้าหน้าที่ และผู้จัดการ",
      ],
    },
  },
  {
    id: "nda",
    cat: ["web"],
    icon: "fa-file-signature",
    status: "dev",
    title: "NDA Acceptance System",
    desc: {
      en: "Employee NDA acceptance with PDF generation, QR verification and an immutable audit log.",
      th: "ระบบยืนยันรับทราบสัญญารักษาความลับของพนักงาน พร้อมสร้าง PDF, QR ตรวจสอบ และ audit log ที่แก้ไขไม่ได้",
    },
    tech: ["Laravel", "MySQL", "DomPDF", "TH / EN / JA"],
    features: {
      en: [
        "HR imports employees from CSV and tracks signing status by factory",
        "PDF built from the company NDA template, with QR code and revision / effective-date tracking",
        "Private file storage, SHA-256 hashing and a public verification page",
        "Event-based audit log (login, view, accept, generate, download, verify)",
        "Real-time search and a Thai / English / Japanese language switcher",
      ],
      th: [
        "HR นำเข้าพนักงานจาก CSV และติดตามสถานะการลงนามแยกตามโรงงาน",
        "สร้าง PDF จากแบบฟอร์ม NDA ของบริษัท พร้อม QR และติดตามเลข revision / วันมีผล",
        "จัดเก็บไฟล์แบบ private, แฮช SHA-256 และหน้าตรวจสอบเอกสารสาธารณะ",
        "Audit log แบบ event (เข้าสู่ระบบ ดู ยืนยัน สร้าง ดาวน์โหลด ตรวจสอบ)",
        "ค้นหาแบบเรียลไทม์ และสลับภาษาไทย / อังกฤษ / ญี่ปุ่น",
      ],
    },
  },
  {
    id: "election",
    cat: ["web"],
    icon: "fa-check-to-slot",
    status: "dev",
    title: "Employee Election System",
    desc: {
      en: "Annual internal election system with eligibility checks and one vote per election.",
      th: "ระบบเลือกตั้งภายในองค์กรประจำปี ตรวจสอบสิทธิ์ผู้ลงคะแนน และลงคะแนนได้ครั้งเดียวต่อการเลือกตั้ง",
    },
    tech: ["Laravel", "MySQL", "Excel import"],
    features: {
      en: [
        "Multiple election types, each with its own details and eligible-voter list",
        "Admin manages voters (Excel import), elections, candidates and open / close",
        "Voting flow: login → eligibility check → choose → review → confirm",
        "One vote per employee per election, with voted status",
      ],
      th: [
        "รองรับการเลือกตั้งหลายประเภท แต่ละประเภทมีรายละเอียดและรายชื่อผู้มีสิทธิ์ของตัวเอง",
        "Admin จัดการผู้มีสิทธิ์ (นำเข้า Excel) การเลือกตั้ง ผู้สมัคร และเปิด / ปิดการลงคะแนน",
        "ขั้นตอน: เข้าสู่ระบบ → ตรวจสอบสิทธิ์ → เลือก → ตรวจทาน → ยืนยัน",
        "ลงคะแนนได้ครั้งเดียวต่อการเลือกตั้ง พร้อมสถานะใช้สิทธิ์แล้ว",
      ],
    },
  },
  {
    id: "workpermit",
    cat: ["web"],
    icon: "fa-hard-hat",
    status: "dev",
    title: "e-Workflow: Work Permit",
    desc: {
      en: "Digital work-permit form replacing the paper permit, as a 5-step wizard.",
      th: "ใบอนุญาตทำงานแบบดิจิทัลแทนฟอร์มกระดาษ ใช้งานเป็น wizard 5 ขั้นตอน",
    },
    tech: ["Laravel", "Blade", "MySQL"],
    features: {
      en: [
        "Steps: work type & department → requester → contractors → signatures → review",
        "Cold, hot, high-place and electrical work types",
        "Contractor list and five signature / date pairs",
      ],
      th: [
        "ขั้นตอน: ประเภทงานและแผนก → ผู้ขอ → ผู้รับเหมา → ลายเซ็น → ตรวจทาน",
        "รองรับงานทั่วไป งานที่ร้อน งานที่สูง และงานไฟฟ้า",
        "รายชื่อผู้รับเหมา และลายเซ็นพร้อมวันที่ 5 ตำแหน่ง",
      ],
    },
  },
  {
    id: "contacts",
    cat: ["web"],
    icon: "fa-address-book",
    title: "FAST Contact List",
    desc: {
      en: "Company contact directory with cascading department / section filters and an admin area.",
      th: "สมุดรายชื่อติดต่อภายในบริษัท มีตัวกรองแผนก / ส่วนแบบต่อเนื่อง และหน้า admin",
    },
    tech: ["PHP", "MySQL", "Bootstrap 5"],
    features: {
      en: [
        "Cascading department → section dropdowns",
        "Admin pages redesigned with one consistent Bootstrap 5 theme",
      ],
      th: [
        "Dropdown แผนก → ส่วน แบบเลือกต่อเนื่อง",
        "ปรับหน้า admin ให้เป็นธีม Bootstrap 5 เดียวกัน",
      ],
    },
  },
  {
    id: "jigcheck",
    cat: ["desktop"],
    icon: "fa-plug-circle-check",
    status: "dev",
    title: "HarnessCheck — Wire Jig Inspection",
    desc: {
      en: "Windows desktop app that checks wire-jig stamping points through a 128-channel USB I/O unit.",
      th: "แอปเดสก์ท็อป Windows ตรวจสอบจุดจ้ำของ wire jig ผ่านอุปกรณ์ USB I/O 128 ช่อง",
    },
    tech: ["C#", "WPF", "SQLite", "CONTEC DIO-128SLX-USB"],
    features: {
      en: [
        "Master layout of jig points; start point is red and turns green once stamped",
        "Reads required point numbers from part-number .hin files",
        "Per-part background images and file-based logging",
        "Built for 32-bit (x86) production PCs with two DIO boards",
      ],
      th: [
        "Master layout ของจุด jig จุดเริ่มต้นเป็นสีแดงและเปลี่ยนเป็นสีเขียวเมื่อจ้ำแล้ว",
        "อ่านเลขจุดที่ต้องตรวจจากไฟล์ .hin ของแต่ละ Part Number",
        "รูปพื้นหลังแยกตาม Part Number และบันทึก log เป็นไฟล์",
        "รองรับเครื่องหน้างาน Windows 32 บิต (x86) ที่ใช้บอร์ด DIO 2 ตัว",
      ],
    },
  },
  {
    id: "linealert",
    cat: ["infra"],
    icon: "fa-bell",
    status: "dev",
    title: "LINE Down Alert",
    desc: {
      en: "LINE Messaging API alerts when a server or CCTV camera goes down, via ping or PRTG.",
      th: "แจ้งเตือนผ่าน LINE Messaging API เมื่อเซิร์ฟเวอร์หรือกล้อง CCTV ใช้งานไม่ได้ ตรวจจับด้วย ping หรือ PRTG",
    },
    tech: ["PHP", "LINE Messaging API", "PRTG", "Ping"],
    features: {
      en: [
        "Dedicated LINE official account for IT system alerts",
        "Device checks by ping or PRTG across factory sites",
        "Designed around the PRTG sensor limit, since CCTV count is large",
      ],
      th: [
        "LINE Official Account สำหรับแจ้งเตือนระบบ IT โดยเฉพาะ",
        "ตรวจสอบอุปกรณ์ด้วย ping หรือ PRTG ในทุกโรงงาน",
        "ออกแบบรองรับข้อจำกัดจำนวน sensor ของ PRTG เพราะมีกล้อง CCTV จำนวนมาก",
      ],
    },
  },
];

/* ---------- INFRASTRUCTURE WORK ----------
   Edit these to match your real work (add numbers, sites, equipment). */
PROJECTS.push(
  {
    id: "network",
    cat: ["infra"],
    icon: "fa-network-wired",
    title: "Network & Telephone Installation",
    desc: {
      en: "Wired and wireless network and telephone installation, plus ongoing maintenance for office and factory areas.",
      th: "ติดตั้งเครือข่ายแบบมีสายและไร้สาย รวมถึงระบบโทรศัพท์ พร้อมดูแลรักษาต่อเนื่องในสำนักงานและโรงงาน",
    },
    tech: ["LAN", "Wi-Fi", "Telephone", "Troubleshooting"],
    features: {
      en: [
        "Install wired and wireless networks",
        "Install and maintain telephone lines",
        "Troubleshoot connectivity issues for 180+ users",
      ],
      th: [
        "ติดตั้งเครือข่ายแบบมีสายและไร้สาย",
        "ติดตั้งและดูแลระบบโทรศัพท์",
        "แก้ไขปัญหาการเชื่อมต่อให้ผู้ใช้งานมากกว่า 180 ราย",
      ],
    },
  },
  {
    id: "cctv",
    cat: ["infra"],
    icon: "fa-video",
    title: "CCTV Installation & Monitoring",
    desc: {
      en: "CCTV installation across factory sites with device monitoring and down alerts.",
      th: "ติดตั้งกล้อง CCTV ในโรงงาน พร้อมเฝ้าระวังอุปกรณ์และแจ้งเตือนเมื่อใช้งานไม่ได้",
    },
    tech: ["CCTV", "PRTG", "Ping", "LINE Alert"],
    features: {
      en: [
        "Install and maintain CCTV cameras",
        "Monitor camera and server status by ping or PRTG",
        "Instant LINE notification when a device goes down",
      ],
      th: [
        "ติดตั้งและดูแลกล้อง CCTV",
        "เฝ้าระวังสถานะกล้องและเซิร์ฟเวอร์ด้วย ping หรือ PRTG",
        "แจ้งเตือนผ่าน LINE ทันทีเมื่ออุปกรณ์ใช้งานไม่ได้",
      ],
    },
  },
  {
    id: "server",
    cat: ["infra"],
    icon: "fa-database",
    title: "Server, Backup & Monitoring",
    desc: {
      en: "Maintaining the servers that host the company's internal systems, with backup and monitoring.",
      th: "ดูแลเซิร์ฟเวอร์ที่ใช้รันระบบภายในบริษัท พร้อมระบบสำรองข้อมูลและการเฝ้าระวัง",
    },
    tech: ["Server", "Backup", "PRTG", "AppServ", "PHP / MySQL"],
    features: {
      en: [
        "Maintain servers hosting the internal PHP and Laravel applications",
        "Manage backup and monitoring systems",
        "Server configuration and troubleshooting, such as PHP upload limits",
      ],
      th: [
        "ดูแลเซิร์ฟเวอร์ที่รันระบบภายในด้วย PHP และ Laravel",
        "จัดการระบบสำรองข้อมูลและระบบเฝ้าระวัง",
        "ตั้งค่าและแก้ปัญหาเซิร์ฟเวอร์ เช่น ขีดจำกัดการอัปโหลดของ PHP",
      ],
    },
  },
  {
    id: "endpoint",
    cat: ["infra"],
    icon: "fa-computer",
    title: "Computer & Printer Support",
    desc: {
      en: "Day-to-day computer, printer and user support for 180+ staff.",
      th: "ดูแลคอมพิวเตอร์ เครื่องพิมพ์ และผู้ใช้งานมากกว่า 180 รายในแต่ละวัน",
    },
    tech: ["Helpdesk", "Maintenance", "Leased printers"],
    features: {
      en: [
        "Computer and printer maintenance, including leased printers",
        "Helpdesk handling through the in-house IT Helpdesk System",
        "Equipment tracking with the asset take-out and spare-part systems",
      ],
      th: [
        "ซ่อมบำรุงคอมพิวเตอร์และเครื่องพิมพ์ รวมถึงเครื่องพิมพ์เช่า",
        "รับงานแจ้งซ่อมผ่านระบบ IT Helpdesk ที่พัฒนาเอง",
        "ติดตามอุปกรณ์ด้วยระบบนำอุปกรณ์ออกนอกบริษัทและระบบพัสดุ",
      ],
    },
  },
);

const UI = {
  more: { en: "View details", th: "ดูรายละเอียด" },
  dev: { en: "In development", th: "กำลังพัฒนา" },
  features: { en: "Key Features", th: "ความสามารถหลัก" },
  impact: { en: "Impact", th: "ผลลัพธ์" },
  tech: { en: "Tech Stack", th: "เทคโนโลยี" },
  shots: { en: "Screenshots", th: "ภาพตัวอย่าง" },
};

let lang = "en";
try {
  lang = localStorage.getItem("lang") === "th" ? "th" : "en";
} catch (e) {}

const $ = (s) => document.querySelector(s);
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const tr = (v) => (v && typeof v === "object" ? v[lang] : v);

/* ---------- RENDER ---------- */
function renderSkills() {
  $("#skillsGrid").innerHTML = SKILLS.map(
    (s) => `
    <div class="skill">
      <div class="skill-head"><b>${esc(tr(s.title))}</b><i class="fa-solid ${s.icon}"></i></div>
      <div class="tags">${s.tags.map((t) => `<span>${esc(tr(t))}</span>`).join("")}</div>
    </div>`,
  ).join("");
}

function renderProjects() {
  const card = (p) => `
    <article class="card project-card" tabindex="0" data-id="${p.id}">
      <div class="pc-top">
        <div class="pc-icon"><i class="fa-solid ${p.icon}"></i></div>
        ${p.status === "dev" ? `<span class="status">${UI.dev[lang]}</span>` : ""}
      </div>
      <h4 class="pc-title">${esc(p.title)}</h4>
      <p class="pc-desc">${esc(tr(p.desc))}</p>
      <div class="tags">${p.tech
        .slice(0, 4)
        .map((t) => `<span>${esc(t)}</span>`)
        .join("")}</div>
      <div class="pc-more">${UI.more[lang]} <i class="fa-solid fa-arrow-right"></i></div>
    </article>`;
  const isInfra = (p) => p.cat.includes("infra");
  $("#devGrid").innerHTML = PROJECTS.filter((p) => !isInfra(p))
    .map(card)
    .join("");
  $("#infraGrid").innerHTML = PROJECTS.filter(isInfra).map(card).join("");
}

function openProject(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  const block = (title, items) =>
    items && items.length
      ? `<h4>${title}</h4><ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`
      : "";

  $("#modalBody").innerHTML = `
    <h2>${esc(p.title)} ${p.status === "dev" ? `<span class="status">${UI.dev[lang]}</span>` : ""}</h2>
    <p>${esc(tr(p.desc))}</p>
    <h4>${UI.tech[lang]}</h4>
    <div class="tags">${p.tech.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
    ${block(UI.features[lang], tr(p.features))}
    ${block(UI.impact[lang], tr(p.impact))}
    ${
      p.images && p.images.length
        ? `<h4>${UI.shots[lang]}</h4><div class="gallery">${p.images
            .map(
              (src) =>
                `<img src="${esc(src)}" alt="${esc(p.title)}" loading="lazy" onerror="this.remove()" />`,
            )
            .join("")}</div>`
        : ""
    }`;
  $("#modal").classList.add("open");
  $("#modal").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  openId = id;
}

let openId = null;
function closeModal() {
  $("#modal").classList.remove("open");
  $("#modal").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  openId = null;
}

/* ---------- LANGUAGE ---------- */
function applyLang() {
  document.documentElement.lang = lang;
  document.body.dataset.lang = lang;
  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = el.dataset[lang];
  });
  renderSkills();
  renderProjects();
  if (openId) openProject(openId);
}

/* ---------- EVENTS ---------- */
document.addEventListener("click", (e) => {
  const card = e.target.closest(".project-card");
  if (card) return openProject(card.dataset.id);

  if (e.target.closest("#langToggle")) {
    lang = lang === "en" ? "th" : "en";
    try {
      localStorage.setItem("lang", lang);
    } catch (err) {}
    return applyLang();
  }
  if (e.target.closest("#modalClose") || e.target === $("#modal"))
    return closeModal();

  const img = e.target.closest(".gallery img");
  if (img) {
    $("#lightbox img").src = img.src;
    return $("#lightbox").classList.add("open");
  }
  if (e.target.closest("#lightbox")) $("#lightbox").classList.remove("open");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if ($("#lightbox").classList.contains("open"))
      $("#lightbox").classList.remove("open");
    else closeModal();
  }
  if (
    (e.key === "Enter" || e.key === " ") &&
    e.target.classList &&
    e.target.classList.contains("project-card")
  ) {
    e.preventDefault();
    openProject(e.target.dataset.id);
  }
});

$("#statProjects").textContent = PROJECTS.filter(
  (p) => !p.cat.includes("infra"),
).length;
applyLang();
