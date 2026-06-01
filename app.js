// ══════════════════════════════════════════════════
//  MASSAR PORTAL — app.js
// ══════════════════════════════════════════════════

// ── DATA ──────────────────────────────────────────
// continuous[year][session] → array of subject rows
// Each row: { subject, coef, f1, f2, f3, f4, ai, classAvg, classHigh, classLow, examNote }
const DATA = {
  "2025/2026": {
    1: [
      { subject:"المواظبة و السلوك", coef:1, f1:10.75, f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الاجتماعيات",       coef:2, f1:13.5,  f2:8,     f3:"",    f4:12,    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"التربية الإسلامية", coef:2, f1:11,    f2:12,    f3:"",    f4:11,    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"التربية البدنية",   coef:1, f1:15.5,  f2:16,    f3:16.25, f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الرياضيات",         coef:7, f1:3,     f2:5.5,   f3:10.5,  f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الفلسفة",           coef:2, f1:9,     f2:9,     f3:"",    f4:14,    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الفيزياء والكيمياء",coef:7, f1:2.25,  f2:5,     f3:5.75,  f4:10,    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة الإنجليزية", coef:2, f1:4.25,  f2:9.5,   f3:"",    f4:11,    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة العربية",     coef:2, f1:9.25,  f2:10.5,  f3:"",    f4:8,     ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة الفرنسية",    coef:4, f1:1,     f2:6,     f3:1.5,   f4:14,    ai:5,     classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"علوم الحياة والأرض",coef:7, f1:4.25,  f2:2.25,  f3:4,     f4:14,    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
    ],
    2: [
      { subject:"المواظبة و السلوك", coef:1, f1:"",    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الاجتماعيات",       coef:2, f1:11.5,  f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"التربية الإسلامية", coef:2, f1:"",    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"التربية البدنية",   coef:1, f1:0,     f2:0,     f3:"",    f4:0,     ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الرياضيات",         coef:7, f1:"",    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الفلسفة",           coef:2, f1:8.5,   f2:"",    f3:"",    f4:15,    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الفيزياء والكيمياء",coef:7, f1:"",    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة الإنجليزية", coef:2, f1:"",    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة العربية",     coef:2, f1:"",    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة الفرنسية",    coef:4, f1:"",    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"علوم الحياة والأرض",coef:7, f1:13.5,  f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
    ]
  },
  "2024/2025": {
    1: [
      { subject:"المواظبة و السلوك", coef:1, f1:10.75, f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الاجتماعيات",       coef:2, f1:11.06, f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"التربية الإسلامية", coef:2, f1:11.38, f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"التربية البدنية",   coef:1, f1:15.92, f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الرياضيات",         coef:7, f1:6.33,  f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الفلسفة",           coef:2, f1:10.25, f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الفيزياء والكيمياء",coef:7, f1:5.75,  f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة الإنجليزية", coef:2, f1:8.52,  f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة العربية",     coef:2, f1:9.41,  f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة الفرنسية",    coef:4, f1:5.5,   f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"علوم الحياة والأرض",coef:7, f1:6.12,  f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
    ],
    2: [
      { subject:"المواظبة و السلوك", coef:1, f1:12,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الاجتماعيات",       coef:2, f1:13,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"التربية الإسلامية", coef:2, f1:14,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"التربية البدنية",   coef:1, f1:16,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الرياضيات",         coef:7, f1:7,     f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الفلسفة",           coef:2, f1:11,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الفيزياء والكيمياء",coef:7, f1:6.5,   f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة الإنجليزية", coef:2, f1:9,     f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة العربية",     coef:2, f1:10,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة الفرنسية",    coef:4, f1:6,     f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"علوم الحياة والأرض",coef:7, f1:7,     f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
    ]
  },
  "2023/2024": {
    1: [
      { subject:"المواظبة و السلوك", coef:1, f1:14,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الاجتماعيات",       coef:2, f1:12,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"التربية الإسلامية", coef:2, f1:13,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"التربية البدنية",   coef:1, f1:17,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الرياضيات",         coef:7, f1:8,     f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الفلسفة",           coef:2, f1:12,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الفيزياء والكيمياء",coef:7, f1:7,     f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة الإنجليزية", coef:2, f1:10,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة العربية",     coef:2, f1:11,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة الفرنسية",    coef:4, f1:7,     f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"علوم الحياة والأرض",coef:7, f1:8,     f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
    ],
    2: [
      { subject:"المواظبة و السلوك", coef:1, f1:15,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الاجتماعيات",       coef:2, f1:13,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"التربية الإسلامية", coef:2, f1:14,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"التربية البدنية",   coef:1, f1:18,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الرياضيات",         coef:7, f1:9,     f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الفلسفة",           coef:2, f1:13,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"الفيزياء والكيمياء",coef:7, f1:8,     f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة الإنجليزية", coef:2, f1:11,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة العربية",     coef:2, f1:12,    f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"اللغة الفرنسية",    coef:4, f1:8,     f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
      { subject:"علوم الحياة والأرض",coef:7, f1:9,     f2:"",    f3:"",    f4:"",    ai:"",    classAvg:"", classHigh:"", classLow:"", examNote:"" },
    ]
  }
};

// ── HELPERS ───────────────────────────────────────
function fmt(v) {
  if (v === "" || v === null || v === undefined) return "";
  return typeof v === "number" ? v : v;
}

function calcContinuousAvg(row) {
  const vals = [row.f1, row.f2, row.f3, row.f4, row.ai].filter(v => v !== "" && v !== null && v !== undefined);
  if (!vals.length) return "";
  const sum = vals.reduce((a, b) => a + Number(b), 0);
  return (sum / vals.length).toFixed(2);
}

// ── TABS ──────────────────────────────────────────
function switchTab(name) {
  ["continuous", "report", "summary"].forEach(t => {
    document.getElementById("content-" + t).classList.add("hidden");
    document.getElementById("tab-" + t).classList.remove("active-tab");
  });
  document.getElementById("content-" + name).classList.remove("hidden");
  document.getElementById("tab-" + name).classList.add("active-tab");
}

// ── RENDER ────────────────────────────────────────
function renderContinuous(rows) {
  const tbody = document.getElementById("continuousBody");
  tbody.innerHTML = "";
  rows.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="col-subject">${row.subject}</td>
      <td>${fmt(row.f1)}</td>
      <td>${fmt(row.f2)}</td>
      <td>${fmt(row.f3)}</td>
      <td>${fmt(row.f4)}</td>
      <td>${fmt(row.ai)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderReport(rows, session) {
  const tbody = document.getElementById("reportBody");
  const tfoot = document.getElementById("reportFoot");
  tbody.innerHTML = "";
  tfoot.innerHTML = "";

  let totalCoef = 0, totalWeighted = 0;

  rows.forEach(row => {
    const contAvg = calcContinuousAvg(row);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="col-subject">${row.subject}</td>
      <td>${row.coef}</td>
      <td>${contAvg}</td>
      <td>${fmt(row.classHigh)}</td>
      <td>${fmt(row.classAvg)}</td>
      <td>${fmt(row.classLow)}</td>
      <td>${fmt(row.examNote)}</td>
    `;
    tbody.appendChild(tr);

    if (contAvg !== "") {
      totalCoef += row.coef;
      totalWeighted += Number(contAvg) * row.coef;
    }
  });

  const sessionAvg = totalCoef > 0 ? (totalWeighted / totalCoef).toFixed(2) : "—";
  tfoot.innerHTML = `
    <tr>
      <td colspan="2" style="text-align:right">معدل الدورة</td>
      <td colspan="5" style="text-align:right;color:#f5a623;font-size:1rem">${sessionAvg}</td>
    </tr>
    <tr>
      <td colspan="2" style="text-align:right">معدل الإمتحان</td>
      <td colspan="5"></td>
    </tr>
  `;
}

function renderSummary(rows) {
  const tbody = document.getElementById("summaryBody");
  tbody.innerHTML = "";
  rows.forEach(row => {
    const contAvg = calcContinuousAvg(row);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="col-subject">${row.subject}</td>
      <td>${row.coef}</td>
      <td>${contAvg}</td>
      <td>${fmt(row.classHigh)}</td>
      <td>${fmt(row.classAvg)}</td>
      <td>${fmt(row.classLow)}</td>
      <td>${fmt(row.examNote)}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ── LOAD DATA ─────────────────────────────────────
function loadData() {
  const year    = document.getElementById("yearSelect").value;
  const session = parseInt(document.getElementById("sessionSelect").value);
  const spinner = document.getElementById("loadingSpinner");

  spinner.classList.remove("hidden");
  ["continuous","report","summary"].forEach(t =>
    document.getElementById("content-" + t).classList.add("hidden")
  );

  setTimeout(() => {
    spinner.classList.add("hidden");
    const rows = (DATA[year] && DATA[year][session]) ? DATA[year][session] : [];
    renderContinuous(rows);
    renderReport(rows, session);
    renderSummary(rows);
    // restore active tab
    const activeTab = document.querySelector(".active-tab");
    const tabName = activeTab ? activeTab.id.replace("tab-","") : "continuous";
    document.getElementById("content-" + tabName).classList.remove("hidden");
  }, 400);
}

// ── INIT ──────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  loadData();
});
