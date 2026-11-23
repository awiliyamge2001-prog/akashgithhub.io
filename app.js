/**
 * Akash Williyamge — Software Engineering Portfolio
 * Professional, reliable client-side interactions and simulator workbench.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Initialize Mermaid with clean engineering dark palette
  if (window.mermaid) {
    window.mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      themeVariables: {
        darkMode: true,
        background: '#090d16',
        primaryColor: '#1e293b',
        primaryTextColor: '#f8fafc',
        primaryBorderColor: '#3b82f6',
        lineColor: '#64748b',
        secondaryColor: '#059669',
        tertiaryColor: '#4f46e5'
      }
    });
  }

  // 1. Setup Architecture Tabs (TransitFlow)
  setupProjectTabs();

  // 2. Setup Agentic AI Developer Simulator Workbench
  setupAiPlayground();

  // 3. Setup Categorized Skills Filter
  setupSkillFilters();

  // 4. Setup Professional Inquiry Builder
  setupInquiryBuilder();

  // 5. Setup Copy to Clipboard & Professional Toasts
  setupCopyButtons();

  // 6. Setup Resume Modal
  setupResumeModal();

  // 7. Setup Mobile Navigation
  setupMobileNav();
});

// -------------------------------------------------------------
// 1. PROJECT TABS (ARCHITECTURE & DETAILED SYSTEM DESIGN)
// -------------------------------------------------------------
function setupProjectTabs() {
  const tabButtons = document.querySelectorAll('[data-tab-group]');
  
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.getAttribute('data-tab-group');
      const targetId = btn.getAttribute('data-tab-target');

      // Deactivate all buttons in group
      document.querySelectorAll(`[data-tab-group="${group}"]`).forEach(b => {
        b.classList.remove('bg-blue-600/20', 'text-blue-400', 'border-blue-500/40');
        b.classList.add('bg-slate-900/60', 'text-slate-400', 'border-slate-800');
      });

      // Activate selected button
      btn.classList.add('bg-blue-600/20', 'text-blue-400', 'border-blue-500/40');
      btn.classList.remove('bg-slate-900/60', 'text-slate-400', 'border-slate-800');

      // Hide all panels in group
      document.querySelectorAll(`[data-tab-panel="${group}"]`).forEach(panel => {
        panel.classList.add('hidden');
      });

      // Reveal target panel
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.remove('hidden');
      }
    });
  });
}

// -------------------------------------------------------------
// 2. AGENTIC AI DEVELOPER SIMULATOR WORKBENCH
// -------------------------------------------------------------
const SIMULATION_CASES = {
  passion: {
    title: "Post-Harvest Tropical Fruit Preservation Protocol",
    query: "How do I preserve passion fruit during transport from Central Province to Colombo?",
    intent: "AGRONOMY_PRESERVATION",
    route: "SalesOrchestratorAgent → FarmOperationsAgent",
    inferenceEngine: "Groq (Llama-3.3-70B Fast Router, 240ms)",
    reasoningEngine: "OpenAI GPT-4o / OpenRouter",
    ragSource: "Doc #14: Post-Harvest Storage & Tropical Fruit Logistics (Central Province)",
    retrievalScore: "0.96 (Vector Cosine Similarity)",
    latency: "380ms",
    steps: [
      { timestamp: "00.012s", component: "SalesOrchestrator", log: "Inbound customer query parsed. Forwarding payload to Groq classification router." },
      { timestamp: "00.045s", component: "IntentRouter", log: "Intent scored: [AGRONOMY_PRESERVATION] (Confidence: 0.992). Delegating context to FarmOperationsAgent." },
      { timestamp: "00.120s", component: "FarmOperationsAgent", log: "Executing vector similarity search against 20-document embedded knowledge corpus." },
      { timestamp: "00.198s", component: "RAG Engine", log: "Retrieved Doc #14 (Score: 0.96). Extracting cold-chain packaging constraints." },
      { timestamp: "00.320s", component: "FarmOperationsAgent", log: "Synthesizing domain recommendations with post-harvest preservation rules." }
    ],
    output: `**Agronomy & Cold-Chain Preservation Protocol (Sri Lankan Passion Fruit):**
• **Optimal Transit Temperature**: Maintain 10°C – 12°C in ventilated crates. Ambient temperatures above 28°C induce rapid pericarp dehydration and shriveling within 36 hours.
• **Packaging & Cushioning**: Use perforated corrugated cartons with shredded organic pulp liners to absorb vibration and preserve skin bloom.
• **Relative Humidity**: 85% – 90% RH. Never pack fruit with surface condensation present.
• **Shelf-Life Horizon**: Up to 14 days of export-grade freshness across central island freight routes.`
  },
  delivery: {
    title: "Deterministic Freight & Cold-Chain Fare Calculation",
    query: "Calculate delivery fee for 8kg avocado to Kandy",
    intent: "LOGISTICS_CALCULATION",
    route: "SalesOrchestratorAgent → Deterministic Python Logistics Tool",
    inferenceEngine: "Groq (Llama-3.3-70B, 180ms)",
    reasoningEngine: "Python Runtime (geo_logistics_calculator.py)",
    ragSource: "Doc #03: Provincial Logistics Tiers & Cold-Chain Packing Rates",
    retrievalScore: "1.00 (Exact Rule-Based Match)",
    latency: "210ms",
    steps: [
      { timestamp: "00.010s", component: "SalesOrchestrator", log: "Extracting entity parameters: Weight=8.0kg, Commodity=Avocado, Destination=Kandy (Central Province)." },
      { timestamp: "00.038s", component: "IntentRouter", log: "Intent scored: [LOGISTICS_CALCULATION] (Confidence: 0.998). Invoking Python logistics engine." },
      { timestamp: "00.095s", component: "Python Tool", log: "Computing: Base_Zone_Rate(CP: 450 LKR) + Weight_Tier(8kg × 75 LKR = 600 LKR) + Cold_Packing(150 LKR)." },
      { timestamp: "00.180s", component: "SalesOrchestrator", log: "Validating perishable delivery slot availability (Next-Day Morning Slot)." }
    ],
    output: `**Delivery Quotation & Dispatch Schedule:**
• **Destination**: Kandy Municipal District (Central Province)
• **Consignment Weight**: 8.00 kg (Fresh Butter Avocados)
• **Base Provincial Tariff**: 450 LKR
• **Weight-Tier Surcharge**: 600 LKR (8 kg × 75 LKR/kg)
• **Perishable Cold-Packing**: 150 LKR
• **Total Freight Cost**: **1,200 LKR**
• **Estimated Delivery Window**: Next business day (08:30 – 11:30 AM).`
  },
  fertilizer: {
    title: "Organic Soil Protocol & Nutrient Regimen",
    query: "What organic fertilizer ratio is recommended for dragon fruit cultivation?",
    intent: "AGRONOMY_FERTILIZATION",
    route: "SalesOrchestratorAgent → FarmOperationsAgent",
    inferenceEngine: "Groq (Llama-3.3-70B, 210ms)",
    reasoningEngine: "OpenAI GPT-4o / RAG Knowledge Base",
    ragSource: "Doc #08: Organic Cultivation Standards for Pitaya (Low Country Zones)",
    retrievalScore: "0.94 (Vector Cosine Similarity)",
    latency: "340ms",
    steps: [
      { timestamp: "00.011s", component: "SalesOrchestrator", log: "Botanical query identified. Routing to FarmOperationsAgent domain context." },
      { timestamp: "00.052s", component: "IntentRouter", log: "Intent scored: [AGRONOMY_FERTILIZATION] (Confidence: 0.989)." },
      { timestamp: "00.115s", component: "FarmOperationsAgent", log: "Querying organic fertilization standards for Hylocereus (Pitaya)." },
      { timestamp: "00.185s", component: "RAG Engine", log: "Retrieved Doc #08: N-P-K organic ratios, compost intervals, and brix management." },
      { timestamp: "00.290s", component: "FarmOperationsAgent", log: "Compiling seasonal application protocol." }
    ],
    output: `**Organic Nutrient Protocol for Pitaya (Dragon Fruit):**
• **Vegetative Phase**: Apply 10–12 kg decomposed cow compost or vermicompost + 100g rock phosphate per trellis pole every 90 days.
• **Flowering & Fruit Induction**: Incorporate wood ash or fermented banana peel solution (high Potassium) to maximize fruit brix and rind resilience.
• **Root Zone Application**: Trench method at 30cm radius around root collar; mulch with straw to conserve root moisture under dry zone sunlight.`
  }
};

function setupAiPlayground() {
  const terminalSteps = document.getElementById('ai-terminal-steps');
  const terminalResponse = document.getElementById('ai-terminal-response');
  const terminalMeta = document.getElementById('ai-terminal-meta');
  const presetButtons = document.querySelectorAll('[data-ai-preset]');
  const customInput = document.getElementById('ai-custom-input');
  const submitBtn = document.getElementById('ai-submit-btn');

  if (!terminalSteps || !terminalResponse) return;

  function runSimulation(dataKey) {
    const data = SIMULATION_CASES[dataKey] || SIMULATION_CASES.passion;

    // Reset Console View
    terminalSteps.innerHTML = '';
    terminalResponse.innerHTML = `
      <div class="flex items-center gap-2 text-xs font-mono text-slate-400 p-4">
        <span class="inline-block w-3 h-3 rounded-full border-2 border-blue-400 border-t-transparent animate-spin"></span>
        <span>Executing autonomous agent pipeline [${data.intent}]...</span>
      </div>
    `;

    // Metadata Chips
    if (terminalMeta) {
      terminalMeta.innerHTML = `
        <div class="flex flex-wrap gap-2 text-xs font-mono">
          <span class="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-blue-400">Route: ${data.route}</span>
          <span class="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-indigo-400">Router: ${data.inferenceEngine}</span>
          <span class="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400">RAG: ${data.ragSource}</span>
          <span class="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">Latency: ${data.latency}</span>
        </div>
      `;
    }

    // Step-by-step Execution Log
    data.steps.forEach((step, idx) => {
      setTimeout(() => {
        const stepRow = document.createElement('div');
        stepRow.className = 'text-xs font-mono flex items-start gap-2.5 p-2 rounded bg-slate-900/70 border border-slate-800/80';
        stepRow.innerHTML = `
          <span class="text-slate-500 shrink-0">${step.timestamp}</span>
          <span class="text-blue-400 font-semibold shrink-0">[${step.component}]</span>
          <span class="text-slate-300">${step.log}</span>
        `;
        terminalSteps.appendChild(stepRow);
        terminalSteps.scrollTop = terminalSteps.scrollHeight;
      }, (idx + 1) * 280);
    });

    // Synthesized Output
    setTimeout(() => {
      terminalResponse.innerHTML = `
        <div class="p-4 rounded-lg bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line">
          <div class="text-xs font-mono text-emerald-400 font-semibold pb-2 mb-2 border-b border-slate-800 flex items-center justify-between">
            <span class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>SYNTHESIZED AGENT RESPONSE</span>
            </span>
            <span class="text-slate-500">Score: ${data.retrievalScore}</span>
          </div>
          ${data.output.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')}
        </div>
      `;
    }, (data.steps.length + 1) * 280);
  }

  // Hook preset buttons
  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      presetButtons.forEach(b => {
        b.classList.remove('bg-blue-600/20', 'text-blue-400', 'border-blue-500/40');
        b.classList.add('bg-slate-900/80', 'text-slate-400', 'border-slate-800');
      });
      btn.classList.add('bg-blue-600/20', 'text-blue-400', 'border-blue-500/40');
      btn.classList.remove('bg-slate-900/80', 'text-slate-400', 'border-slate-800');

      const key = btn.getAttribute('data-ai-preset');
      runSimulation(key);
    });
  });

  // Hook custom input
  if (submitBtn && customInput) {
    submitBtn.addEventListener('click', () => {
      const q = customInput.value.trim().toLowerCase();
      if (!q) return;

      if (q.includes('deliver') || q.includes('fee') || q.includes('rate') || q.includes('cost') || q.includes('kandy')) {
        runSimulation('delivery');
      } else if (q.includes('fertilizer') || q.includes('grow') || q.includes('dragon') || q.includes('soil')) {
        runSimulation('fertilizer');
      } else {
        runSimulation('passion');
      }
      customInput.value = '';
    });

    customInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') submitBtn.click();
    });
  }

  // Run initial simulation
  runSimulation('passion');
}

// -------------------------------------------------------------
// 3. CATEGORIZED SKILLS FILTER
// -------------------------------------------------------------
function setupSkillFilters() {
  const filterBtns = document.querySelectorAll('[data-skill-filter]');
  const skillCards = document.querySelectorAll('[data-skill-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-skill-filter');

      // Update button active states
      filterBtns.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'font-medium');
        b.classList.add('bg-slate-900/60', 'text-slate-400');
      });
      btn.classList.add('bg-blue-600', 'text-white', 'font-medium');
      btn.classList.remove('bg-slate-900/60', 'text-slate-400');

      // Filter skill cards
      skillCards.forEach(card => {
        const cats = card.getAttribute('data-skill-category').split(' ');
        if (category === 'all' || cats.includes(category)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// -------------------------------------------------------------
// 4. PROFESSIONAL INQUIRY MESSAGE BUILDER
// -------------------------------------------------------------
function setupInquiryBuilder() {
  const pills = document.querySelectorAll('[data-inquiry-topic]');
  const textarea = document.getElementById('inquiry-message');
  const sendBtn = document.getElementById('inquiry-send-btn');

  if (!pills.length || !textarea || !sendBtn) return;

  const TEMPLATES = {
    internship: {
      subject: "Software Engineering Internship Opportunity — Akash Williyamge",
      body: "Hi Akash,\n\nI reviewed your portfolio and technical case studies for TransitFlow and Smart Farm Hub. We are currently evaluating candidates for a Software Engineering Internship on our team and would like to arrange an introductory interview."
    },
    architecture: {
      subject: "Technical Inquiry: TransitFlow Distributed Architecture",
      body: "Hi Akash,\n\nI was reviewing your microservices blueprint for TransitFlow. I am interested in discussing your architectural trade-offs around Spring Cloud Gateway rate limiting and the internal zero-trust Docker network."
    },
    ai: {
      subject: "Technical Inquiry: Smart Farm Hub Multi-Agent & RAG Pipeline",
      body: "Hi Akash,\n\nYour 2-agent autonomous architecture with Groq intent classification and vector RAG retrieval caught our attention. I would like to learn more about your experience developing agentic pipelines with Python."
    },
    general: {
      subject: "General Technical Connect — Akash Williyamge",
      body: "Hi Akash,\n\nI came across your portfolio and wanted to connect regarding your experience with Spring Boot microservices, containerization, and distributed systems."
    }
  };

  function selectTopic(key) {
    const data = TEMPLATES[key] || TEMPLATES.internship;
    textarea.value = data.body;
    updateMailto(data.subject, data.body);

    pills.forEach(pill => {
      if (pill.getAttribute('data-inquiry-topic') === key) {
        pill.classList.add('bg-blue-600', 'text-white', 'font-medium');
        pill.classList.remove('bg-slate-900', 'text-slate-400');
      } else {
        pill.classList.remove('bg-blue-600', 'text-white', 'font-medium');
        pill.classList.add('bg-slate-900', 'text-slate-400');
      }
    });
  }

  function updateMailto(subject, body) {
    sendBtn.href = `mailto:a.wiliyamge2001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      selectTopic(pill.getAttribute('data-inquiry-topic'));
    });
  });

  textarea.addEventListener('input', () => {
    updateMailto("Inquiry for Akash Williyamge", textarea.value);
  });

  selectTopic('internship');
}

// -------------------------------------------------------------
// 5. COPY TO CLIPBOARD & PROFESSIONAL TOAST
// -------------------------------------------------------------
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-box px-4 py-3 rounded-lg bg-slate-900/95 border border-slate-700 text-slate-200 text-xs font-mono shadow-2xl flex items-center gap-2 pointer-events-auto backdrop-blur-md';
  toast.innerHTML = `
    <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 2600);
}

function setupCopyButtons() {
  document.querySelectorAll('[data-copy-text]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy-text');
      const label = btn.getAttribute('data-copy-label') || 'Copied to clipboard';

      navigator.clipboard.writeText(text).then(() => {
        showToast(label);
      }).catch(() => {
        showToast('Copied: ' + text);
      });
    });
  });
}

// -------------------------------------------------------------
// 6. RESUME MODAL
// -------------------------------------------------------------
function setupResumeModal() {
  const modal = document.getElementById('resume-modal');
  const openBtns = document.querySelectorAll('[data-open-resume]');
  const closeBtns = document.querySelectorAll('[data-close-resume]');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  });
}

// -------------------------------------------------------------
// 7. MOBILE NAVIGATION
// -------------------------------------------------------------
function setupMobileNav() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}
