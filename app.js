// ============================================================
//  MASSAR PORTAL - app.js
// ============================================================

// ---------- DATA ----------
const GRADES_DATA = {
  "2025/2026": {
    1: [
      { subject: "التربية الإسلامية",       e1: 16, e2: 17, e3: 15, e4: 16, ai: 17 },
      { subject: "التربية على المواطنة",     e1: 15, e2: 14, e3: 16, e4: 15, ai: 16 },
      { subject: "الدراسات الاجتماعية",      e1: 14, e2: 15, e3: 13, e4: 14, ai: 15 },
      { subject: "التربية البدنية",          e1: 17, e2: 18, e3: 17, e4: 18, ai: 18 },
      { subject: "الرياضيات",               e1: 14, e2: 13, e3: 15, e4: 14, ai: 15 },
      { subject: "الفلسفة",                 e1: 13, e2: 14, e3: 12, e4: 13, ai: 14 },
      { subject: "الفيزياء والكيمياء",       e1: 13, e2: 14, e3: 12, e4: 13, ai: 14 },
      { subject: "اللغة العربية",            e1: 16, e2: 15, e3: 17, e4: 16, ai: 17 },
      { subject: "اللغة الفرنسية",           e1: 15, e2: 16, e3: 14, e4: 15, ai: 16 },
      { subject: "علوم الحياة والأرض",       e1: 14, e2: 15, e3: 13, e4: 14, ai: 15 },
    ],
    2: [
      { subject: "التربية الإسلامية",       e1: 18, e2: 17, e3: 18, e4: 17, ai: 18 },
      { subject: "التربية على المواطنة",     e1: 17, e2: 16, e3: 17, e4: 16, ai: 17 },
      { subject: "الدراسات الاجتماعية",      e1: 16, e2: 17, e3: 15, e4: 16, ai: 17 },
      { subject: "التربية البدنية",          e1: 18, e2: 19, e3: 18, e4: 19, ai: 19 },
      { subject: "الرياضيات",               e1: 17, e2: 16, e3: 18, e4: 17, ai: 18 },
      { subject: "الفلسفة",                 e1: 15, e2: 16, e3: 15, e4: 16, ai: 16 },
      { subject: "الفيزياء والكيمياء",       e1: 16, e2: 17, e3: 15, e4: 16, ai: 17 },
      { subject: "اللغة العربية",            e1: 18, e2: 17, e3: 18, e4: 17, ai: 18 },
      { subject: "اللغة الفرنسية",           e1: 18, e2: 17, e3: 19, e4: 18, ai: 19 },
      { subject: "علوم الحياة والأرض",       e1: 16, e2: 17, e3: 16, e4: 17, ai: 17 },
    ]
  },
  "2024/2025": {
    1: [
      { subject: "التربية الإسلامية",       e1: 14, e2: 15, e3: 13, e4: 14, ai: 15 },
      { subject: "التربية على المواطنة",     e1: 13, e2: 12, e3: 14, e4: 13, ai: 14 },
      { subject: "الدراسات الاجتماعية",      e1: 12, e2: 13, e3: 11, e4: 12, ai: 13 },
      { subject: "التربية البدنية",          e1: 16, e2: 17, e3: 15, e4: 16, ai: 17 },
      { subject: "الرياضيات",               e1: 12, e2: 11, e3: 13, e4: 12, ai: 13 },
      { subject: "الفلسفة",                 e1: 11, e2: 12, e3: 10, e4: 11, ai: 12 },
      { subject: "الفيزياء والكيمياء",       e1: 11, e2: 12, e3: 10, e4: 11, ai: 12 },
      { subject: "اللغة العربية",            e1: 14, e2: 13, e3: 15, e4: 14, ai: 15 },
      { subject: "اللغة الفرنسية",           e1: 13, e2: 14, e3: 12, e4: 13, ai: 14 },
      { subject: "علوم الحياة والأرض",       e1: 12, e2: 13, e3: 11, e4: 12, ai: 13 },
    ],
    2: [
      { subject: "التربية الإسلامية",       e1: 15, e2: 16, e3: 14, e4: 15, ai: 16 },
      { subject: "التربية على المواطنة",     e1: 14, e2: 13, e3: 15, e4: 14, ai: 15 },
      { subject: "الدراسات الاجتماعية",      e1: 13, e2: 14, e3: 12, e4: 13, ai: 14 },
      { subject: "التربية البدنية",          e1: 17, e2: 18, e3: 16, e4: 17, ai: 18 },
      { subject: "الرياضيات",               e1: 13, e2: 12, e3: 14, e4: 13, ai: 14 },
      { subject: "الفلسفة",                 e1: 12, e2: 13, e3: 11, e4: 12, ai: 13 },
      { subject: "الفيزياء والكيمياء",       e1: 12, e2: 13, e3: 11, e4: 12, ai: 13 },
      { subject: "اللغة العربية",            e1: 15, e2: 14, e3: 16, e4: 15, ai: 16 },
      { subject: "اللغة الفرنسية",           e1: 14, e2: 15, e3: 13, e4: 14, ai: 15 },
      { subject: "علوم الحياة والأرض",       e1: 13, e2: 14, e3: 12, e4: 13, ai: 14 },
    ]
  },
  "2023/2024": {
    1: [
      { subject: "التربية الإسلامية",       e1: 13, e2: 12, e3: 14, e4: 13, ai: 14 },
      { subject: "التربية على المواطنة",     e1: 12, e2: 11, e3: 13, e4: 12, ai: 13 },
      { subject: "الدراسات الاجتماعية",      e1: 11, e2: 12, e3: 10, e4: 11, ai: 12 },
      { subject: "التربية البدنية",          e1: 15, e2: 16, e3: 14, e4: 15, ai: 16 },
      { subject: "الرياضيات",               e1: 11, e2: 10, e3: 12, e4: 11, ai: 12 },
      { subject: "الفلسفة",                 e1: 10, e2: 11, e3:  9, e4: 10, ai: 11 },
      { subject: "الفيزياء والكيمياء",       e1: 10, e2: 11, e3:  9, e4: 10, ai: 11 },
      { subject: "اللغة العربية",            e1: 13, e2: 12, e3: 14, e4: 13, ai: 14 },
      { subject: "اللغة الفرنسية",           e1: 12, e2: 13, e3: 11, e4: 12, ai: 13 },
      { subject: "علوم الحياة والأرض",       e1: 11, e2: 12, e3: 10, e4: 11, ai: 12 },
    ],
    2: [
      { subject: "التربية الإسلامية",       e1: 14, e2: 13, e3: 15, e4: 14, ai: 15 },
      { subject: "التربية على المواطنة",     e1: 13, e2: 12, e3: 14, e4: 13, ai: 14 },
      { subject: "الدراسات الاجتماعية",      e1: 12, e2: 13, e3: 11, e4: 12, ai: 13 },
      { subject: "التربية البدنية",          e1: 16, e2: 17, e3: 15, e4: 16, ai: 17 },
      { subject: "الرياضيات",               e1: 12, e2: 11, e3: 13, e4: 12, ai: 13 },
      { subject: "الفلسفة",                 e1: 11, e2: 12, e3: 10, e4: 11, ai: 12 },
      { subject: "الفيزياء والكيمياء",       e1: 11, e2: 12, e3: 10, e4: 11, ai: 12 },
      { subject: "اللغة العربية",            e1: 14, e2: 13, e3: 15, e4: 14, ai: 15 },
      { subject: "اللغة الفرنسية",           e1: 13, e2: 14, e3: 12, e4: 13, ai: 14 },
      { subject: "علوم الحياة والأرض",       e1: 12, e2: 13, e3: 11, e4: 12, ai: 13 },
    ]
  }
};

// ---------- AUTH ----------
function doLogin() {
  const user = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value.trim();
  const err  = document.getElementById('loginError');
  if (user === 'G123456789' && pass === '123456') {
    err.classList.add('hidden');
    document.getElementById('loginPage').style.display = 'none';
    const app = document.getElementById('mainApp');
    app.style.display = 'flex';
    updateGrades();
  } else {
    err.textContent = 'رقم مسار أو كلمة المرور غير صحيحة';
    err.classList.remove('hidden');
  }
}

function doLogout() {
  document.getElementById('mainApp').style.display = 'none';
  document.getElementById('loginPage').style.display = 'flex';
}

function togglePass() {
  const inp  = document.getElementById('loginPass');
  const icon = document.getElementById('eyeIcon');
  if (inp.type === 'password') {
    inp.type = 'text';
    icon.className = 'fas fa-eye-slash';
  } else {
    inp.type = 'password';
    icon.className = 'fas fa-eye';
  }
}

// Allow Enter key on login
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !document.getElementById('loginPage').classList.contains('hidden')) {
    doLogin();
  }
});

// ---------- NAVIGATION ----------
const PAGE_TITLES = {
  dashboard:     'الرئيسية',
  grades:        'النقط والمعدلات',
  report:        'بطاقة التقرير',
  results:       'النتائج الدراسية',
  notifications: 'الإشعارات',
  profile:       'الملف الشخصي',
  settings:      'الإعدادات',
};

function showPage(name) {
  // Hide all pages
  document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
  // Remove active from all nav items
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  // Show target page
  const page = document.getElementById('page-' + name);
  if (page) page.classList.remove('hidden');
  // Activate nav item
  const nav = document.getElementById('nav-' + name);
  if (nav) nav.classList.add('active');
  // Update title
  document.getElementById('pageTitle').textContent = PAGE_TITLES[name] || '';
  // Close sidebar on mobile
  document.getElementById('sidebar').classList.remove('open');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ---------- TABS ----------
function switchTab(name) {
  ['continuous','report','academic'].forEach(t => {
    document.getElementById('tabContent-' + t).classList.add('hidden');
    document.getElementById('tab-' + t).classList.remove('active-tab');
  });
  document.getElementById('tabContent-' + name).classList.remove('hidden');
  document.getElementById('tab-' + name).classList.add('active-tab');
}

// ---------- GRADES ----------
function avg(row) {
  return ((row.e1 + row.e2 + row.e3 + row.e4 + row.ai) / 5).toFixed(2);
}

function gradeClass(v) {
  if (v >= 16) return 'grade-excellent';
  if (v >= 12) return 'grade-good';
  if (v >= 10) return 'grade-average';
  return 'grade-fail';
}

function updateGrades() {
  const year    = document.getElementById('yearSelect').value;
  const session = document.getElementById('sessionSelect').value;
  const loading = document.getElementById('loadingGrades');
  const tbody   = document.getElementById('gradesTableBody');

  // Show loading
  loading.classList.remove('hidden');
  tbody.innerHTML = '';

  setTimeout(() => {
    loading.classList.add('hidden');
    const rows = GRADES_DATA[year]?.[session] || [];
    renderGrades(rows);
    updateReportCard(rows, session);
    updateAcademicResults(year);
  }, 500);
}

function renderGrades(rows) {
  const tbody = document.getElementById('gradesTableBody');
  tbody.innerHTML = '';
  rows.forEach(row => {
    const a = parseFloat(avg(row));
    const tr = document.createElement('tr');
    tr.className = 'transition-colors';
    tr.innerHTML = `
      <td class="px-4 py-3 font-semibold text-gray-800">${row.subject}</td>
      <td class="px-4 py-3 text-center ${gradeClass(row.e1)}">${row.e1}</td>
      <td class="px-4 py-3 text-center ${gradeClass(row.e2)}">${row.e2}</td>
      <td class="px-4 py-3 text-center ${gradeClass(row.e3)}">${row.e3}</td>
      <td class="px-4 py-3 text-center ${gradeClass(row.e4)}">${row.e4}</td>
      <td class="px-4 py-3 text-center ${gradeClass(row.ai)}">${row.ai}</td>
      <td class="px-4 py-3 text-center">
        <span class="inline-block px-3 py-1 rounded-full text-sm font-bold ${a >= 16 ? 'bg-green-100 text-green-700' : a >= 12 ? 'bg-blue-100 text-blue-700' : a >= 10 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}">${a}</span>
      </td>`;
    tbody.appendChild(tr);
  });
}

function updateReportCard(rows, session) {
  if (!rows.length) return;
  const avgs   = rows.map(r => parseFloat(avg(r)));
  const total  = avgs.reduce((a, b) => a + b, 0);
  const mean   = (total / avgs.length).toFixed(2);
  const high   = Math.max(...rows.flatMap(r => [r.e1,r.e2,r.e3,r.e4,r.ai]));
  const low    = Math.min(...rows.flatMap(r => [r.e1,r.e2,r.e3,r.e4,r.ai]));
  const rank   = session == 1 ? 3 : 2;
  const remark = parseFloat(mean) >= 16
    ? '"تلميذ متميز، يُبدي جدية واجتهاداً ملحوظاً في جميع المواد. يُنصح بمواصلة هذا المستوى."'
    : '"مستوى جيد، يُنصح ببذل مزيد من الجهد في المواد العلمية."';

  document.getElementById('rc-avg').textContent  = mean;
  document.getElementById('rc-rank').textContent = rank;
  document.getElementById('rc-high').textContent = high;
  document.getElementById('rc-low').textContent  = low;
  document.getElementById('rc-remark').textContent = remark;

  document.getElementById('ar-sem').textContent = mean;
}

function updateAcademicResults(year) {
  const s1rows = GRADES_DATA[year]?.[1] || [];
  const s2rows = GRADES_DATA[year]?.[2] || [];
  const s1avg  = s1rows.length ? (s1rows.map(r => parseFloat(avg(r))).reduce((a,b)=>a+b,0)/s1rows.length).toFixed(2) : '—';
  const s2avg  = s2rows.length ? (s2rows.map(r => parseFloat(avg(r))).reduce((a,b)=>a+b,0)/s2rows.length).toFixed(2) : '—';
  const annual = s1rows.length && s2rows.length ? ((parseFloat(s1avg)+parseFloat(s2avg))/2).toFixed(2) : '—';
  const pass   = parseFloat(annual) >= 10;
  const mention = parseFloat(annual) >= 16 ? 'مشرف جداً 🏆' : parseFloat(annual) >= 14 ? 'مشرف 🥇' : parseFloat(annual) >= 12 ? 'حسن 🥈' : parseFloat(annual) >= 10 ? 'مقبول' : 'راسب';

  document.getElementById('ar-sem').textContent    = document.getElementById('sessionSelect').value == 1 ? s1avg : s2avg;
  document.getElementById('ar-annual').textContent = annual;
  document.getElementById('ar-status').textContent = pass ? 'ناجح ✓' : 'راسب ✗';
  document.getElementById('ar-status').className   = pass ? 'text-2xl font-bold text-green-600' : 'text-2xl font-bold text-red-600';
  document.getElementById('ar-mention').textContent = mention;
}

// ---------- SEARCH ----------
function filterGrades() {
  const q = document.getElementById('searchGrades').value.trim().toLowerCase();
  document.querySelectorAll('#gradesTableBody tr').forEach(tr => {
    const subject = tr.querySelector('td')?.textContent?.toLowerCase() || '';
    tr.style.display = subject.includes(q) ? '' : 'none';
  });
}

// ---------- DARK MODE ----------
let darkMode = false;
function toggleDark() {
  darkMode = !darkMode;
  document.body.classList.toggle('dark', darkMode);
  const btn  = document.getElementById('darkBtn');
  const tog  = document.getElementById('darkToggle');
  const dot  = document.getElementById('darkDot');
  if (btn)  btn.innerHTML  = darkMode ? '<i class="fas fa-sun text-xl text-yellow-400"></i>' : '<i class="fas fa-moon text-xl"></i>';
  if (tog)  tog.style.background = darkMode ? '#f97316' : '#d1d5db';
  if (dot)  dot.style.transform  = darkMode ? 'translateX(-24px)' : 'translateX(0)';
}

// ---------- EXPORT PDF ----------
function exportPDF() {
  alert('لتصدير PDF، استخدم زر الطباعة واختر "حفظ كـ PDF" من إعدادات الطابعة.');
  window.print();
}
