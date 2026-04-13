const CATEGORIES = [
  {
    id: 'philosophy',
    name: 'Sales Philosophy',
    accent: '#E8503A',
    description: 'How I think about selling, building pipeline, and running GTM teams. Opinionated, experience-backed, and mostly learned the hard way.',
    preview: ['How I Operate', 'On Pipeline', 'On Customer Success', 'On Hiring for Stage', 'The Pitch', 'On Legal & Contracts', 'On Building Product', 'Infra Hierarchy of Needs']
  },
  {
    id: 'playbooks',
    name: 'Playbooks',
    accent: '#7B72E9',
    description: 'Operational frameworks for the functions that make up a GTM org. Metrics, meetings, and what to watch out for at each stage.',
    preview: ['Sales', 'Demand Generation', 'Outbound Sequences', 'Customer Success', 'Revenue Operations']
  },
  {
    id: 'stories',
    name: 'Customer Stories',
    accent: '#1DB374',
    description: 'Real deals. What worked, what didn\'t, and what I\'d do differently. Names and companies included.',
    preview: ['The Apple POC', 'The Santander Deployment', 'The Snorkel POC', 'The Blackstone Close', 'The Fastly Loss', 'The Fannie Mae POC']
  },
  {
    id: 'background',
    name: 'Background',
    accent: '#C77DFF',
    description: 'My story. The good, the bad, the ugly, and the lessons along the way.',
    preview: []
  }
];

// ── Philosophy ──────────────────────────────────────────────────────────────

const PHILOSOPHY = [
  {
    id: 'on-selling',
    type: 'philosophy',
    name: 'How I Operate',
    accent: '#E8503A',
    purpose: 'The values and principles I bring to every GTM team I work with.',
    preview: 'Bad deals start bad. Get clear early or walk. No playbook — figure it out or go home.',
    tabs: [
      { key: 'principles', label: 'Principles', type: 'principles', content: [
        '<strong>Be the expert</strong> — Know the problem, product, outcomes, and implementation. If you can\'t connect them, nothing else matters.',
        '<strong>Qualify hard</strong> — Bad deals start bad. Get clear early or walk.',
        '<strong>Own the outcome</strong> — Your deal. Your problem. Drive it forward.',
        '<strong>Find a way</strong> — No playbook. Figure it out or go home.',
        '<strong>Do less, better</strong> — Focus. Build what works. Ignore the rest.',
        '<strong>Move with urgency</strong> — Momentum wins. Slow kills.',
        '<strong>Care (and be real)</strong> — Give a damn. Tell the truth. Don\'t optimize for being liked.',
        '<strong>Work hard</strong> — No shortcuts. Sometimes you still lose.'
      ]}
    ]
  },
  {
    id: 'on-pipeline',
    type: 'philosophy',
    name: 'On Building Pipeline',
    accent: '#1DB374',
    purpose: 'How I think about filling the top of funnel.',
    preview: 'Outbound is not spray and pray. Have a point of view on why this company should care right now.',
    tabs: [
      { key: 'principles', label: 'Principles', type: 'principles', content: [
        '<strong>Inbound: build the system first</strong> — Crack this early. Get to predictable meetings per week. Track conversion end to end.',
        '<strong>Outbound: go all in on a small list</strong> — Target ~50 accounts. High effort, highly personalized. Exec to exec, top down and bottom up. Everything in between.',
        '<strong>Create demand, don\'t wait for it</strong> — Outbound is not spray and pray. Have a point of view on why this company should care right now.',
        '<strong>Optimize for reply, not pitch</strong> — First touch earns attention, not a sale.',
        '<strong>Network (but don\'t depend on it)</strong> — Helpful, but doesn\'t scale. Same with VCs. Use it, don\'t rely on it.',
        '<strong>Be careful with partners</strong> — Only works with real alignment and exec support on both sides. Otherwise it\'s a distraction.',
        '<strong>In-person wins</strong> — Dinners, events, conferences. But have a plan. Random activity doesn\'t convert.',
        '<strong>Work the edges</strong> — Engage people interacting with content. LinkedIn, webinars, exec outreach. Pull signal, don\'t ignore it.',
        '<strong>Separate and measure</strong> — Inbound and outbound need different owners, metrics, and feedback loops.',
        '<strong>Hire a killer</strong> — You can fake it early, but you need someone in the weeds owning growth. This is a fight.'
      ]}
    ]
  },
  {
    id: 'on-cs',
    type: 'philosophy',
    name: 'On Customer Success',
    accent: '#2A9FD6',
    purpose: 'How I think about retention and expansion.',
    preview: 'Usage is truth. If it drops, you have a problem. Don\'t wait for a QBR to find out.',
    tabs: [
      { key: 'principles', label: 'Principles', type: 'principles', content: [
        '<strong>Put experts on the account</strong> — CS should be technical. FDEs or SAs who can actually help customers get value and own renewals. If they can\'t do the work, they won\'t earn trust.',
        '<strong>Own the outcome</strong> — This isn\'t check-ins and reporting. You\'re responsible for the customer being successful, not just informed.',
        '<strong>Watch usage like a hawk</strong> — Usage is truth. If it drops, you have a problem. Don\'t wait for a QBR to find out.',
        '<strong>Set triggers, not meetings</strong> — Define what good and bad usage looks like. Act early when things drift. No surprises at renewal.',
        '<strong>Avoid the swamp</strong> — Silence, low engagement, unclear ownership. This is where deals go to die. If things feel off, they are.',
        '<strong>Build real adoption</strong> — Get to real usage in real workflows. Shelfware churns.',
        '<strong>Expansion follows value</strong> — Don\'t ask for it. Earn it by making the first use case work, then pull the next one through.'
      ]}
    ]
  },
  {
    id: 'on-hiring',
    type: 'philosophy',
    name: 'On Hiring for Stage',
    accent: '#FF9B54',
    purpose: 'Who you hire will make or break you.',
    preview: 'If they don\'t raise the bar, it\'s the wrong hire. Built for scale ≠ built for zero to one.',
    tabs: [
      { key: 'principles', label: 'Principles', type: 'principles', content: [
        '<strong>Hire people better than you</strong> — If they don\'t raise the bar, it\'s the wrong hire.',
        '<strong>Avoid the big box hire</strong> — Built for scale ≠ built for zero to one.',
        '<strong>Backchannel everything</strong> — Talk to people who\'ve actually worked with them.',
        '<strong>Work ethic matters</strong> — This is hard. Effort is non-negotiable.',
        '<strong>Look for builders</strong> — They figure things out. They don\'t wait for a playbook.',
        '<strong>Test for curiosity</strong> — Don\'t ask, have them show you. What are they building? How are they using AI? Talk is cheap.',
        '<strong>Hire for the trench</strong> — You\'ll be in it together when things break. Choose people you trust and want to go through it with.'
      ]}
    ]
  }
  ,
  {
    id: 'the-pitch',
    type: 'philosophy',
    name: 'The Pitch',
    accent: '#00B4D8',
    purpose: 'A repeatable structure for any enterprise pitch. Plug in your company, your problem, your product. The bones don\'t change.',
    preview: 'Establish credibility. Name their pain. Visualize the mess. Earn the right to show product.',
    tabs: [
      {
        key: 'company-bg',
        label: 'Company Background',
        type: 'pitch-section',
        content: {
          section: '01',
          headline: 'Establish credibility fast. Then stop talking.',
          coaching: 'This is not a company story — it\'s a proof point. 60 seconds max. Lead with the strongest signal that matches your buyer\'s world (customers they recognize, certifications they require, numbers that land). Then ask if they know you and move on.',
          points: [
            '<strong>Your one-line positioning.</strong> What you do and who it\'s for. Crisp enough to repeat.',
            '<strong>Your top 2–3 metrics.</strong> Pick the ones that prove you\'re real — downloads, uptime, win rate, benchmark rank. Don\'t spray the whole slide.',
            '<strong>Logos they recognize.</strong> Customers, partners, or investors in their industry or peer set.',
            '<strong>Certifications that matter to them.</strong> SOC 2, HIPAA, FedRAMP — only show what\'s relevant to this account.',
            '<strong>Recognition that builds trust.</strong> Analyst coverage, media, awards. One or two. Not a trophy shelf.',
            '<strong>Ask before moving on.</strong> "Have you come across us before?" It resets the room and surfaces assumptions early.'
          ],
          avoid: 'Avoid: founding story, org charts, investor lists, a timeline of your product releases. They don\'t care yet.',
          callout: '"Before we get into it — can you tell me a bit about what you\'re working on right now and what brought you to this conversation?"'
        }
      },
      {
        key: 'problem',
        label: 'Problem Statement',
        type: 'pitch-section',
        content: {
          section: '02',
          headline: 'Name the pain they already feel.',
          coaching: 'You\'re not teaching them that a problem exists — they already know. You\'re proving you understand it better than they expected. Frame the problem in the language of their world, their moment, their pressure. If they\'re nodding before you finish the sentence, you\'ve got it right.',
          points: [
            '<strong>Set the context with timing.</strong> What\'s changed in their market or technology landscape that makes this problem acute right now?',
            '<strong>State the surface problem.</strong> What are teams or buyers visibly struggling with? Keep it concrete.',
            '<strong>Name the compounding effects.</strong> What does that surface problem actually cost — in time, money, risk, or credibility?',
            '<strong>Make it structural, not anecdotal.</strong> Show that this isn\'t one team\'s bad luck — it\'s a systemic condition affecting everyone at their stage.',
            '<strong>Use their language.</strong> Mirror the words your best customers used to describe the problem before they bought. That\'s what lands.'
          ],
          avoid: 'Avoid: leading with your product. If you\'re on slide 3 and you\'ve already said your product name more than twice, you\'re pitching too early.',
          callout: '"Does that match what you\'re seeing internally? Where are you feeling this the most right now?"'
        }
      },
      {
        key: 'visual-problem',
        label: 'Visual Problem',
        type: 'pitch-section',
        content: {
          section: '03',
          headline: 'Show them their own mess.',
          coaching: 'The best version of this slide makes them laugh, then grimace. It should feel uncomfortably familiar — like you\'ve been watching their team work. The goal isn\'t to embarrass them. It\'s to make the status quo viscerally real. A before-state diagram or a chaos map works better than words.',
          points: [
            '<strong>Draw the "before" state.</strong> What does the current solution actually look like — the duct tape, the custom code, the fragile handoffs?',
            '<strong>Make it visual if you can.</strong> Architecture diagrams, workflow sprawl, a list of 12 tools doing what one should — visuals stick.',
            '<strong>Show the hidden costs.</strong> Maintenance burden, the person who left who knew how it worked, the alert that fires at 2am.',
            '<strong>Use real specifics.</strong> Name the tools, the workarounds, the failure modes your customers actually described. Specificity = credibility.',
            '<strong>Let them react.</strong> Don\'t rush this slide. The pause after they recognize themselves is working time.'
          ],
          avoid: 'Avoid: making the "before" state feel like an attack on their team\'s decisions. They made reasonable choices with what was available. Honor that.',
          callout: '"How close is this to what your setup looks like today? What\'s the part that\'s causing the most pain?"'
        }
      },
      {
        key: 'enterprise-zoom',
        label: 'Enterprise Zoom Out',
        type: 'pitch-section',
        content: {
          section: '04',
          headline: 'Scale the pain to the org — not just the team.',
          coaching: 'This section is conditional. Use it for enterprise accounts where the problem multiplies across teams, departments, or business units. Skip it or shorten it for mid-market. If you\'re talking to a central platform or architecture team, lean hard into this. If you\'re talking to a single product team, come back to it later.',
          points: [
            '<strong>Multiply the problem.</strong> How many teams are independently building the same thing? What does that cost at scale?',
            '<strong>Show the governance gap.</strong> No standardization, no reuse, no visibility into what\'s running where. This is what keeps a CTO up at night.',
            '<strong>Name what compounds.</strong> Same failures discovered separately. Same bad decisions made independently. The org learns nothing.',
            '<strong>Reframe it as a platform decision.</strong> At a certain scale, this stops being a tooling conversation and starts being a strategic infrastructure decision.',
            '<strong>Connect to the economic buyer.</strong> Whoever owns the AI platform budget or architecture standard is who this section is written for. Make sure you\'re in the room with them or building toward it.'
          ],
          avoid: 'Avoid: overstating the enterprise angle if you\'re talking to a team-level buyer. It makes the problem feel too big to solve and the deal feel too small to move.',
          callout: '"Is this a decision that\'s being made at the team level, or is there a central group thinking about AI infrastructure across the org?"'
        }
      },
      {
        key: 'strategic-outcomes',
        label: 'Strategic Outcomes',
        type: 'pitch-section',
        content: {
          section: '05',
          headline: 'What solving this actually unlocks.',
          coaching: 'Don\'t pitch features. Pitch the future state. What does their world look like when this problem is gone? This section bridges the problem and the product. If you skip it and jump straight to your platform, you lose the thread. They need to feel the destination before they care about the vehicle.',
          points: [
            '<strong>Name the use cases they can activate.</strong> What becomes possible that\'s currently blocked? Be specific to their industry or function.',
            '<strong>Connect to the business outcome.</strong> Revenue saved, time recovered, risk reduced, products shipped. Ground it in the metric they\'re measured on.',
            '<strong>Show breadth without overselling.</strong> If your platform unlocks multiple outcomes, give them a category view — but focus depth on the one they care about most.',
            '<strong>Make the ROI implicit.</strong> You don\'t have to build a formal model here. Just make it obvious that solving this pays for itself.',
            '<strong>Pick their lane.</strong> Ask which use case maps to what they\'re building. You\'re narrowing toward qualification, not broadening toward a generic pitch.'
          ],
          avoid: 'Avoid: listing every use case you support. Breadth without relevance kills urgency. More categories ≠ more compelling.',
          callout: '"Of the outcomes I just described — which one maps most closely to what your team is trying to accomplish this year?"'
        }
      },
      {
        key: 'value-prop',
        label: 'Value Prop & Differentiation',
        type: 'pitch-section',
        content: {
          section: '06',
          headline: 'Where you fit. How you\'re different.',
          coaching: 'This is the "why us" section — but earn it. Only land here after they\'ve felt the pain and nodded at the outcomes. If you lead with this, it sounds like marketing. If you get here after sections 02–05, it sounds like the answer they\'ve been waiting for. Keep it simple. Three differentiators max.',
          points: [
            '<strong>State your clear positioning.</strong> What category do you own or are you creating? Where do you sit in their stack?',
            '<strong>Lead with your sharpest differentiator.</strong> The one thing you do better than anyone else. Not a laundry list — one headline claim, well-supported.',
            '<strong>Proof the claim immediately.</strong> Every differentiator needs a proof point: a benchmark, a customer quote, a deployment stat. Claims without proof are just marketing copy.',
            '<strong>Address the obvious alternative.</strong> What are they doing today, or what competitor are they evaluating? Name it. Then say why you win that comparison.',
            '<strong>Keep it concise.</strong> This section should take 3–5 minutes. If it\'s going longer, you\'re pitching instead of having a conversation.'
          ],
          avoid: 'Avoid: comparing yourself to competitors by name without being ready to defend it. And avoid "we\'re the only company that..." unless you can back it up cold.',
          callout: '"Does that differentiation map to what matters most to your team, or is there a specific comparison you\'re working through right now?"'
        }
      },
      {
        key: 'platform',
        label: 'Platform',
        type: 'pitch-section',
        content: {
          section: '07',
          headline: 'Earn the product walk. Then go deep.',
          coaching: 'Don\'t open a demo or go deep on platform until they\'ve been through the problem and value prop. If you do it earlier, you\'re showing a product before they understand why they need it. This section is where technical credibility gets built — but only if you\'ve earned the right to be here. Calibrate depth to the room.',
          points: [
            '<strong>Start with architecture, not features.</strong> Show where your platform sits in their stack. What does it replace? What does it connect to?',
            '<strong>Walk the core workflow.</strong> The end-to-end motion — how data or a process moves through your system. Don\'t demo every feature. Demo the thing they care about.',
            '<strong>Match depth to the audience.</strong> Exec room = business outcomes and integrations. Technical room = architecture, APIs, configuration, observability.',
            '<strong>Show the connective tissue.</strong> Integrations, APIs, deployment options (cloud, on-prem, air-gapped). Enterprise buyers need to know this fits before they care about anything else.',
            '<strong>Let them drive.</strong> Ask what they want to see. "Is there a specific part of the platform you\'d like to go deeper on?" — then follow their lead.',
            '<strong>Leave time for questions.</strong> The best platform conversations are 60% questions, 40% showing. You\'re validating fit, not delivering a demo.'
          ],
          avoid: 'Avoid: showing every feature. It signals insecurity, not depth. Show one thing really well and let them ask for more.',
          callout: '"Before I go deeper — what does your current setup look like, and what\'s the specific workflow you\'re trying to improve? I want to make sure we\'re looking at the right part of the platform."'
        }
      }
    ]
  },
  {
    id: 'on-legal',
    type: 'philosophy',
    name: 'On Legal & Contracts',
    accent: '#F59E0B',
    purpose: 'How to run a clean legal process that closes deals instead of killing them.',
    preview: 'Your paper. Your terms. Deal size sets the redline budget — not their legal team.',
    tabs: [
      { key: 'rules', label: 'Rules', type: 'principles', content: [
        '<strong>Always use your paper</strong> — Every deal runs on your MSA. If you\'re in their paper, you\'ve already lost. Their contract was written for their lawyers, their risk, their world — not your product.',
        '<strong>Build MSAs around your product</strong> — Generic contracts create gaps. Your MSA should be written specifically for your deployment types, your data model, your liability exposure. One-size-fits-all is a legal liability.',
        '<strong>Deal size sets the redline budget</strong> — Get to a number before you get into a redline conversation. Don\'t open the negotiation door without knowing which room you\'re walking into.',
        '<strong>In mid-range deals, you prescribe what\'s negotiable</strong> — Not them. Come with three specific items you\'ll consider and hold the list. Nothing outside it.',
        '<strong>Speed is a competitive advantage</strong> — A clean MSA that closes in five days beats a negotiated one that closes in ninety. Make it easy to say yes.',
        '<strong>Legal cycles kill deals</strong> — Every week in legal is a week for the deal to die, for a competitor to close, for a champion to leave. Redlines cost time. Time kills momentum.',
        '<strong>Never move on indemnification or IP</strong> — These are the two clauses that will haunt you at scale. Hold the line. Every time. No exceptions.'
      ]},
      { key: 'tiers', label: 'Redline Tiers', type: 'pitch-section', content: {
        section: '$$',
        headline: 'Deal size determines how much you negotiate — not how much they demand.',
        coaching: 'This framework exists so your legal process is predictable, fast, and doesn\'t become a negotiation about the negotiation. Know your tier before the first redline request lands. Share it early. It resets expectations and puts you in control of the process.',
        points: [
          '<strong>$1K–$50K — No redlines.</strong> Standard MSA, your paper, your terms. Full stop. The deal doesn\'t justify legal hours on either side. If they push back, offer a call to walk them through it. Don\'t open the document.',
          '<strong>$50K–$100K — Three redlines max.</strong> You prescribe what\'s on the table. Define the three things you\'ll consider — typically: liability cap, indemnification scope, and data handling. Come to the conversation with that list. Nothing outside it.',
          '<strong>$100K+ — Open negotiation, but only on your paper.</strong> You can go deep. But you never take their MSA. It was written for their lawyers and their risk profile. You will lose every clause that matters. Negotiate on your document or don\'t negotiate at all.'
        ],
        avoid: 'Avoid their paper at any deal size. No matter how big the deal, no matter how much they insist. Their MSA was not written with your product, your deployment model, or your exposure in mind. Once you\'re in their paper you\'re playing defense on every clause from page one.',
        callout: '"We work from our standard MSA — it\'s purpose-built for this type of deployment and we can turn it around fast. What\'s the contract value looking like? That tells us where we land on terms flexibility."'
      }}
    ]
  },
  {
    id: 'on-building-product',
    type: 'philosophy',
    name: 'On Building Product',
    accent: '#6366f1',
    purpose: 'What an engineering org needs to deliver, in order. Built from the bottom up — skip a level and you\'ll pay for it later.',
    preview: 'Reliable before fast. Observable before scalable. You can\'t sell what you can\'t ship.',
    tabs: [
      {
        key: 'hierarchy',
        label: 'Hierarchy of Needs',
        type: 'pyramid',
        content: [
          {
            level: 1,
            name: 'Reliable',
            label: 'Physiological',
            color: '#7B72E9',
            items: [
              'The product does its core job consistently — 99.9% uptime you\'d put in a contract',
              'Core workflows don\'t regress when you ship',
              'Nothing is silently broken in production',
              'Data is accurate, consistent, and auditable',
              'The team knows when something is wrong before a customer does'
            ]
          },
          {
            level: 2,
            name: 'Deployable',
            label: 'Safety',
            color: '#2A9FD6',
            items: [
              'CI/CD pipeline catches and blocks bad code automatically',
              'Rollback completes in under 10 minutes',
              'You can ship any day, any time, without heroics',
              'SAs and field teams can confidently deploy for customers, POCs, and new installs in a timely manner',
              'Staging behaves like production'
            ]
          },
          {
            level: 3,
            name: 'Observable',
            label: 'Belonging',
            color: '#1DB374',
            items: [
              'Metrics, logs, and traces connected end to end',
              'Error messaging is clear, actionable, and understood by the field',
              'Customers never the first to tell you something broke',
              'Hooks into customer logging and observability services where possible',
              'On-call is real, rotated, and documented — P1 response under 30 minutes'
            ]
          },
          {
            level: 4,
            name: 'Velocity',
            label: 'Esteem',
            color: '#F59E0B',
            items: [
              'New engineer ships code in their first week',
              'Features ship on a predictable, committed cadence',
              'No single points of knowledge — no one is the bus',
              'We move fast without fear of breaking things',
              'Tech debt is managed, not accumulated in silence'
            ]
          },
          {
            level: 5,
            name: 'Flow State',
            label: 'Self-Actualization',
            color: '#E8503A',
            items: [
              'Every merge goes to production automatically',
              'Zero-downtime deploys — customers never notice releases',
              'You ship new things without breaking old ones',
              'Incident rate is near zero, not a background hum',
              'The team is proud of what they\'re building'
            ]
          }
        ]
      },
      { key: 'principles', label: 'Principles', type: 'principles', content: [
        '<strong>Build the foundation before velocity</strong> — Reliable before fast. Deployable before observable. Skipping levels creates the kind of compounding debt that becomes a crisis at the worst possible moment.',
        '<strong>Deployable is a muscle</strong> — Code that isn\'t shipped doesn\'t create value. Build the deploy motion early, make it safe, and use it constantly. Fear of shipping is a sign something is broken.',
        '<strong>Observability is your early warning system</strong> — You cannot sell what you cannot debug. Customers don\'t have patience for "we\'re investigating." Know before they do.',
        '<strong>Velocity is earned, not demanded</strong> — Once the foundation holds, velocity follows. Trying to force speed without the infrastructure creates firefighting, not shipping.',
        '<strong>Flow state is the goal</strong> — When engineering is in flow state, GTM moves faster. Reps can commit more confidently, demos don\'t break, and customers feel like they\'re buying a real product.',
        '<strong>The pyramid breaks when you skip levels</strong> — Outages during key demos. Releases that break customer workflows. Engineering firefighting that pulls people off roadmap. These are symptoms of a missing level, not bad luck.',
        '<strong>Product quality is a GTM problem</strong> — Every production incident is a deal at risk. Every deployment failure is a conversation your AE has to manage. Engineering and sales win or lose together.'
      ]}
    ]
  },
  {
    id: 'infra-hierarchy',
    type: 'philosophy',
    name: 'Infra Hierarchy of Needs',
    accent: '#06b6d4',
    purpose: 'What infra needs to deliver across every deployment model. SaaS is not the product. Parity is the product.',
    preview: 'If it only works in SaaS, it\'s broken. Parity across SaaS, Dedicated Instance, and in-VPC is the bar.',
    tabs: [
      {
        key: 'hierarchy',
        label: 'Hierarchy of Needs',
        type: 'pyramid',
        philosophy: 'We do not celebrate infra success unless it works across SaaS, Dedicated Instance, and in-VPC.<br><strong>SaaS is not the product. Parity is the product.</strong>',
        content: [
          {
            level: 1,
            name: 'Reliability',
            label: 'Physiological',
            color: '#7B72E9',
            items: [
              'All deployment types have versioned artifacts and reproducible builds',
              'Infrastructure-as-code across SaaS, Dedicated, and in-VPC',
              'Dedicated and in-VPC installs succeed >95% without intervention',
              'SaaS, Dedicated, and in-VPC run the same core infra primitives',
              'No environment-specific forks or one-off configs',
              '"If it only works in SaaS, it\'s broken"'
            ]
          },
          {
            level: 2,
            name: 'Deployability',
            label: 'Safety',
            color: '#2A9FD6',
            items: [
              'One-click / one-command deploy for SaaS, Dedicated Instance, and in-VPC',
              'Deploy times: SaaS <30 min · Dedicated <2 hrs · in-VPC <1 day',
              'Upgrades are reliable and repeatable across all environments',
              'No manual steps that differ by deployment type',
              'Versioning is consistent across all deployment modes'
            ]
          },
          {
            level: 3,
            name: 'Operability',
            label: 'Belonging',
            color: '#1DB374',
            items: [
              'Unified observability across all deployment types — logs, metrics, traces',
              'On-call can debug any deployment model in <30 minutes',
              'Standardized runbooks for SaaS, Dedicated, and in-VPC',
              'Customer environments are introspectable without heroics',
              'Clear ownership of infra across all deployment models'
            ]
          },
          {
            level: 4,
            name: 'Consistency',
            label: 'Esteem',
            color: '#F59E0B',
            items: [
              'All releases validated across SaaS, Dedicated, and in-VPC before GA',
              'CI/CD enforces deployment parity gates',
              '<5% of incidents are deployment-model-specific',
              'Infra bugs are fixed once, applied everywhere',
              'Engineers default to multi-deploy compatibility when building'
            ]
          },
          {
            level: 5,
            name: 'Infra Nirvana',
            label: 'Self-Actualization',
            color: '#E8503A',
            items: [
              'Infra is uniform across SaaS, Dedicated Instance, and in-VPC',
              'Every feature is simultaneously available across all deployment types',
              'Customers can move between deployment models with near-zero friction',
              'Deployment model is a commercial choice, not a technical constraint',
              'No "works in SaaS only" incidents in the last 90 days',
              'Infra differences are invisible to product and to customers'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'ai-seller',
    type: 'philosophy',
    name: 'The AI-Powered Seller',
    accent: '#a855f7',
    purpose: 'How AI tools transform a generalist seller into a precision machine.',
    preview: 'When legal, security, demos, and lead routing run on autopilot — you only touch deals you can win.',
    externalLink: 'transformer.html',
  }
];

// ── Stories ─────────────────────────────────────────────────────────────────

const STORIES = [
  {
    id: 'apple',
    type: 'story',
    name: 'The Apple POC',
    accent: '#FF9B54',
    label: 'Hard Lesson',
    company: 'Apple',
    context: 'Enterprise AE · Unstructured · Apple GenAI Data Platform',
    teaser: 'First call to in-VPC POC in 14 days. We had no business being there.',
    tabs: [
      { key: 'story', label: 'Story', type: 'prose', content: [
        'Apple\'s GenAI data platform team. 2,000 data scientists and AI researchers. First call to signed NDA to in-VPC POC scoped with their VP in 14 days.',
        'I was an enterprise AE selling a product I\'d never sold before, at a company that had never deployed in-VPC before. My CTO was skipping calls and blaming the customer. I ran the first technical scoping call alone — no engineering lead, no coverage, just me and an Apple VP asking questions I wasn\'t equipped to answer.',
        'We got in. And then the POC fell apart. No auth. Never deployed in-VPC. Apple told us we were JV and to come back when we\'d done this before.',
        'They weren\'t wrong. We didn\'t even measure our reliability rate. If you put 100 documents into our platform, you\'d get 7 JSON files on the other side. We spent three months fucking around and never got past auth. Nobody flagged it. Nobody owned it. We didn\'t have the data to know how bad it was.',
        'It also surfaced something bigger. The CTO was the wrong person for the job. You cannot sit back and let your AE and a new SA YOLO the first in-VPC deployment alone without knowing your own product\'s weakpoints. That\'s not leadership — that\'s ego dressed up as delegation. This was an opportunity to get in the room, learn, and improve. He missed it. It eventually led to a leadership shakeup. The exec leading the sales org was also the wrong profile — a big-box guy built for established products with known deployment patterns, not for navigating a technically immature platform into Apple\'s infrastructure.',
        'Sometimes the best thing you can do is turn a customer away. Apple was the wrong first in-VPC client. We learned that the hard way.'
      ]},
      { key: 'lesson', label: 'Lesson', type: 'principles', content: [
        'Know where your product falls down before you put it in front of a name-brand enterprise. Auth. Interoperability. Reliability. Auditability. These are not surprises you discover mid-POC.',
        'Measure everything. Reliability rate, time to deployment, first customer win criteria. If you don\'t have those numbers, you have no business selling enterprise deployments.',
        'Set honest success criteria. Set failure criteria too. If you can\'t define what good looks like in advance, you have no way to defend the timeline when it slips.',
        'Your CTO has to show up. No AE should run a first technical scoping call alone at a company this size. If your exec team won\'t get in the room, fix that before you go after Apple.',
        'Make sure the people selling are the right profile for the stage you\'re actually at. The big-box playbook does not work here.'
      ]}
    ]
  },
  {
    id: 'santander',
    type: 'story',
    name: 'The Santander Deployment',
    accent: '#1DB374',
    label: 'Win',
    company: 'Santander',
    context: 'Enterprise AE · Unstructured · Santander CTO, Head of AI Infra, exec team',
    teaser: 'Turned a brutal detractor into Santander\'s global tool buyer. WhatsApp, Madrid, and a lot of earned trust.',
    tabs: [
      { key: 'story', label: 'Story', type: 'prose', content: [
        'We walked into an in-person meeting in SF with Santander\'s CTO, Head of AI Infrastructure, and a room full of exec leads. They wanted us to deploy that day.',
        'We said no.',
        'We told them exactly how bad our deployments were. The room got tense. But we dug our heels in — because we\'d learned from Apple what happens when you don\'t. It worked. They respected it. You earn trust by being honest when it costs you something.',
        'Then everything that could go wrong, did.',
        'Our exec champion left mid-deployment. In came Fiorella — parachuted in, no context, and immediately furious about the timeline. We were also working across timezones with contractors who couldn\'t send emails. So I was DMing our data science champions on WhatsApp to get around the blockers, working with them behind the scenes to hit success criteria while the formal channels were on fire.',
        'Meanwhile, my own execs were pushing hard to go around Fio and escalate back to the CTO. Skip the difficult person. Jump back to the friendly face.',
        'I pushed back. Fio was the one making the technical decision. Going around her would have been fatal — she would have killed it the moment we weren\'t in the room. You don\'t circumvent your detractor. You bring them across the line.',
        'It took 1.5 months. We deployed. We hit success criteria.',
        'Fio is now inviting us to Madrid. She\'s the global tool buyer for all of Santander and wants to roll this out to every branch.'
      ]},
      { key: 'lesson', label: 'Lesson', type: 'principles', content: [
        'Honesty about your limitations isn\'t a weakness in a sales call. It\'s the only thing that survives a deployment. We earned Santander\'s trust by saying no to same-day deployment. That trust is what got us through everything that followed.',
        'When your champion leaves mid-deployment, you don\'t inherit their goodwill. You start over. Build the relationship with the new person from zero, even when it\'s frustrating.',
        'Never go around a detractor to get back to a friendly exec. Find out who is actually making the technical call first. A detractor you bring across the line is your most powerful reference.',
        'Be scrappy. If the formal channels are broken, find another way. WhatsApp, Slack, carrier pigeon — whatever it takes to keep the work moving. Championships are won in the gaps.',
        'When your execs pressure you to escalate over someone difficult, push back. Ask who is making the technical decision. Then stay in that room.'
      ]}
    ]
  },
  {
    id: 'snorkel',
    type: 'story',
    name: 'The Snorkel POC',
    accent: '#7B72E9',
    label: 'Win',
    company: 'Snorkel AI',
    context: 'Enterprise AE · Unstructured · Snorkel AI — horse-raced against the internal tool they built themselves',
    teaser: 'Horse-raced against the internal tool they built themselves. We weren\'t supposed to win.',
    tabs: [
      { key: 'story', label: 'Story', type: 'prose', content: [
        'Snorkel AI was not our ICP. They were a foundational AI lab — a team of researchers and engineers who thought about data infrastructure at a level most of our customers never would. Selling to them meant selling to people who could dismantle your product in real time and knew exactly what to look for.',
        'I walked into the first call confident. I\'d just gotten back from a week in Mexico, the use case sounded straightforward, and I figured this was a standard competitive POC. I was wrong about almost all of it.',
        'The call was Daniel, their PM on infrastructure and DaaS. Javier, Director of Engineering. Ashwini, a Staff AI Researcher — who, it turned out, had built the internal PDF parser we were being horse-raced against. And Smit, an engineer who proceeded to take our product apart with the kind of precision that only comes from someone who has built the thing you\'re selling.',
        'Pitching against the person who built what you\'re replacing is its own special experience. Ashwini wasn\'t hostile — he was methodical. He knew exactly where the edges were because he\'d already mapped them himself. There was no hiding. You either had a better answer or you didn\'t.',
        'Smit found the gaps. Real ones. He wasn\'t stress-testing our sales narrative — he was stress-testing the product, and the product had weaknesses we had to own in the room. The honest move was to not bullshit them, flag what we\'d need to solve, and figure it out. So that\'s what we did.',
        'To meet their success criteria, we had to build something non-standard — a solution that didn\'t fit cleanly into our existing deployment patterns. It was a calculated risk. Not pretty. But it worked, it was defensible, and it got us to their bar.',
        'We won the POC. We won the deal.',
        'Most of that team has since gone on to Anthropic, Google DeepMind, and some of the best AI startups in the industry. That\'s the kind of room it was.'
      ]},
      { key: 'lesson', label: 'Lesson', type: 'principles', content: [
        'Not every customer makes you better. This one did.',
        'When you sell outside your ICP, you don\'t get the benefit of the doubt. There\'s no goodwill from past deployments, no familiar use case to anchor on, no ceiling on how hard they\'ll push. You either figure it out in real time or you lose.',
        'Survive the technical ambush by staying honest. The worst thing you can do in a room full of brilliant engineers is oversell or deflect. They know. Own the gaps, show a path, and prove you can solve problems you haven\'t solved before.',
        'Be careful with customers who are 100x more advanced than your average user. Winning here was real. But the operational cost of meeting their bar — the custom work, the pressure on engineering, the non-standard deployment — isn\'t free. Know what you\'re signing up for before you get in the room.',
        'We had no business winning this one. We won it anyway.'
      ]}
    ]
  },
  {
    id: 'blackstone',
    type: 'story',
    name: 'The Blackstone Close',
    accent: '#E8503A',
    label: 'Win',
    company: 'Blackstone',
    context: 'Account Executive · MonkeyLearn · HR Technology Division',
    teaser: 'Up against Deloitte. A third of the price. Better tech. Nearly killed by legal.',
    tabs: [
      { key: 'story', label: 'Story', type: 'prose', content: [
        'Blackstone\'s HR technology division didn\'t have a budget problem. They had a standards problem. When you\'re one of the largest private equity firms in the world, every vendor gets scrutinized — not just on what they can do, but on whether they belong in the room at all.',
        'I was at MonkeyLearn. We were not a household name. They put us in a head-to-head evaluation against Deloitte and a handful of boutique AI consultancies — firms with established enterprise relationships, compliance infrastructure, and the kind of brand that makes a procurement team feel safe.',
        'We had better technology and came in at a third of the price. The SVP of Technology knew it. The eval made it clear. We won on merit.',
        'Then legal started.',
        'Blackstone\'s standard position: a minimum $10 million limitation of liability clause. On a $100K deal. Their logic wasn\'t unreasonable — brand damage at that scale doesn\'t care what you paid for the software — but the gap between what we were charging and what they were asking us to backstop was legitimately existential for a company our size.',
        'We couldn\'t match it. So we got creative. We went out and purchased additional insurance coverage specifically structured to cover their brand damage exposure. Not a typical move for a startup closing a $100K deal. We did it anyway, documented it, brought it back to legal, and closed.'
      ]},
      { key: 'lesson', label: 'Lesson', type: 'principles', content: [
        'Enterprise buying processes are not designed for startups. The legal requirements, the liability floors, the procurement timelines — they\'re built around vendors who have been doing this for decades and have the balance sheets to match. When you\'re small and your tech is better, you don\'t get a pass on any of it.',
        'Know exactly where the deal can die before you\'ve invested three months in it. Legal killed deals I\'ve seen go further than this one. It almost killed this one.',
        'Refusing to treat the obstacle as a wall is what saved it. Their ask wasn\'t unreasonable — it was just mismatched to our size. Find a way to meet the spirit of it without pretending you\'re something you\'re not.',
        'Deloitte lost on technology. We almost lost on paperwork. Know your exposure early, find the creative path, and don\'t let process beat product.'
      ]}
    ]
  },
  {
    id: 'fastly',
    type: 'story',
    name: 'The Fastly Loss',
    accent: '#2A9FD6',
    label: 'Hard Lesson',
    company: 'Fastly',
    context: 'Account Executive · Metaplane · Competing against Monte Carlo, the category incumbent',
    teaser: 'I had the intel, the champion, and the right read. I was validated. We still lost.',
    tabs: [
      { key: 'story', label: 'Story', type: 'prose', content: [
        'Fastly was never going to be an easy deal. Monte Carlo was the incumbent — category leader, enterprise-grade controls, a CEO with a direct relationship inside the account. We were the startup with better UX and a fraction of the brand recognition. The bakeoff was real, but the deck was stacked.',
        'My champion was exceptional. He gave me access I had no right to expect — their internal scorecard comparing us head-to-head with Monte Carlo, his read on the executive relationships, and eventually, the Monte Carlo invoice. He wasn\'t supposed to share that. He did because he believed in what we were building and wanted us to win.',
        'The scorecard was neck and neck. It was coming down to price.',
        'I brought the invoice back to my cofounder. His read: they were lying, the number was fabricated to anchor us lower, and we should double our price. He hadn\'t been in any of the conversations. He had no context on the champion, the relationship, the scorecard, or what I\'d observed across the entire cycle. But it was his call to make.',
        'I told him he was wrong. Directly and not diplomatically. I burned political capital I didn\'t have to spend, in a season where I was already on thin ice personally. He held his position. I played the game the way he wanted. We priced it the way he wanted.',
        'We lost the deal. Exactly the way I thought we would.',
        'Being right didn\'t feel like anything. I\'d already spent whatever leverage I had trying to stop it, and it cost me more than the deal.'
      ]},
      { key: 'lesson', label: 'Lesson', type: 'prose', content: [
        'There are three things I carry from this one.',
        'First: trust your champion when they\'re giving you real intel and taking real risk to do it. My champion handed me everything I needed to win. The scorecard, the competitive invoice, the internal dynamics. That\'s not something you manufacture — that\'s someone who believes in you. Honor it by using it correctly.',
        'Second: know when to fight your exec and, more importantly, how. I was right about the pricing call. I was wrong about how I handled being right. Calling someone a moron doesn\'t change their mind — it just makes you easier to dismiss when things go sideways. If you\'re going to push back on a decision made without context, bring the context. Make it hard to ignore. I made it personal instead.',
        'Third: leadership making calls without context is one of the most expensive things that can happen in a deal. Not because they\'re bad people — but because the field and the conference room are different places, and a deal lives or dies on what you know from inside the room. When an exec overrides a rep\'s read without engaging the evidence, they\'re not managing the deal — they\'re managing their own comfort level.',
        'I got fired not long after. I don\'t think this was the only reason. But I know it was one of them. I was right about Fastly. I was wrong about how I fought for it. Both things are true.'
      ]}
    ]
  },
  {
    id: 'fannie-mae',
    type: 'story',
    name: 'The Fannie Mae POC',
    accent: '#1DB374',
    label: 'Hard Lesson',
    company: 'Fannie Mae',
    context: 'Enterprise AE · Unstructured · 50M pages/month, via Hexaware partner',
    teaser: '50 million pages a month. Zero-shot demo. 90% accuracy. Partner misalignment.',
    tabs: [
      { key: 'story', label: 'Story', type: 'prose', content: [
        'The use case was real and it was massive. Fannie Mae processes roughly 100,000 mortgage applications a month — each one up to 500 pages of financial documents, disclosures, and supporting material. That\'s 50 million pages a month that need to be parsed, extracted, and evaluated to approve or deny a loan. They wanted to automate it.',
        'We came in through Hexaware, a global consulting partner with a $90 million contract already in place at Fannie Mae. They were our path into the room. On paper, it was a strong setup.',
        'We zero-shotted the technical demo. No rehearsal with their data, no safety net — straight live parsing in front of a room full of Fannie Mae executives. They were blown away. I used our CEO deliberately and well: his background running country-level operations for the White House and his intelligence community experience landed exactly the way it needed to in a room full of government-adjacent enterprise buyers. We made Hexaware look plugged in and informed. Everyone left the room feeling good.',
        'The in-VPC POC followed. We hit 90% accuracy on a document extraction problem that their existing tooling couldn\'t come close to solving. By any reasonable measure, we had earned the next step.',
        'Then Hexaware went quiet.',
        'The more I pulled on it, the clearer it became. Hexaware wasn\'t evaluating us as a technology to deploy — they were using us to signal to Fannie Mae that they had their finger on the pulse of frontier AI. They already had their contract. They didn\'t need us to win; they needed to be seen standing next to us. Once they\'d gotten what they came for, the motivation to push us through Fannie Mae\'s procurement process simply wasn\'t there.',
        'A month after they backed out of the POC, Hexaware published a blog post announcing their own internal document processing product. We\'d given them a single-node deployment — not our full Kubernetes stack — so whatever they took, they didn\'t take everything. But the timing was hard to ignore.'
      ]},
      { key: 'lesson', label: 'Lesson', type: 'prose', content: [
        'Three things.',
        'First: know your partner\'s actual motivation before you build on their foundation. Hexaware was never trying to close a deal with us — they were managing their own relationship with Fannie Mae. Those are completely different goals, and ours were only useful to them up to a point. A partner with a $90 million anchor contract doesn\'t need your $300K deal to close. They need to look innovative. The moment the demo was done, so were they. Qualify your partners the same way you qualify your customers.',
        'Second: use your CEO like a weapon, not a crutch. I was deliberate about when and how I brought him in. CIA and White House background in a room of government-adjacent enterprise buyers isn\'t a credential you lead with on every call — it\'s something you deploy at the moment it matters most. It worked. That\'s the lesson: know what your executive brings that you can\'t, and put them in the room at exactly the right time.',
        'Third: zero-shot demos are one of the highest-leverage things you can do in enterprise sales — and one of the highest-risk. When they work, they create a moment of genuine belief that no slide deck can manufacture. Walking into a room full of Fannie Mae executives and parsing their documents live, unrehearsed, with no fallback — that\'s the kind of confidence that changes how a buyer sees you. We earned that room. We just couldn\'t finish the job through a partner who had already gotten what they needed.',
        'The work was good. The execution was good. The partner was wrong. Sometimes that\'s all it is.'
      ]}
    ]
  }
];

// ── Background ──────────────────────────────────────────────────────────────

const BACKGROUND = [
  {
    id: 'stack-overflow',
    type: 'background',
    name: 'Stack Overflow',
    role: 'Account Executive & Team Lead',
    years: '2014–2017',
    location: 'Denver',
    acv: null,
    accent: '#E8503A',
    bullets: ['66% annual churn means you\'re rebuilding the entire book every 18 months. I learned what that does to a team — and what it forces you to get good at.', 'When the product can\'t carry the deal, stories do. Got good at selling outcomes that hadn\'t happened yet.', 'Culture kept me there longer than made sense. Great people can make you endure a broken business model. That\'s a feature and a trap.'],
    preview: '66% annual churn means rebuilding the entire business every 18 months.',
    lessons: [
      'A 66% annual churn rate means you\'re rebuilding the entire business every 18 months. I learned what that actually costs — in energy, in morale, in what\'s left to sell with.',
      'When the product can\'t carry the weight, stories do. I got good at selling outcomes that hadn\'t happened yet, which turned out to be one of the most transferable skills I\'d ever build.',
      'Great culture can make people endure things they shouldn\'t have to. I stayed longer than made sense on paper because the people made it worth it.'
    ],
    closing: 'The ceiling on a high-churn business is real. But learning to sell without a tailwind taught me things that compound in every role after.',
    tabs: [{ key: 'career', label: 'Story', type: 'career' }]
  },
  {
    id: 'twitter',
    type: 'background',
    name: 'Twitter',
    role: 'Data Sales',
    years: '2018–2019',
    location: 'Boulder',
    acv: null,
    accent: '#1DA1F2',
    bullets: ['Learned the difference between selling something and collecting rent. When you\'re the only option, you stop earning the deal — and it shows.', 'Watched a monopoly contract in real time. Pricing power without product investment is a countdown.', 'First exposure to enterprise data sales. Learned how to navigate procurement, legal, and stakeholders before I knew what any of that meant.'],
    preview: 'Selling from a monopoly position feels like flying — until the product stops earning the deal.',
    lessons: [
      'Selling from a monopoly position feels like flying — until you realize the product has stopped earning the deal and you\'re just applying pressure. That\'s the moment sales becomes extortion.',
      'I watched a contracting market close doors that had always been open. Timing and macro matter more than talent in those moments.',
      'Being inside a big acquisition can feel like a silo, but if you find the right pocket of people, it\'s also kind of a sandbox.',
      'Selling raw data — API access, JSON feeds — is a storytelling problem. The product is invisible until you can demo the end-to-end workflow and the vision behind it.'
    ],
    closing: 'I learned the difference between selling something people need and collecting rent. I\'d rather sell hard for something earned.',
    tabs: [{ key: 'career', label: 'Story', type: 'career' }]
  },
  {
    id: 'circleci',
    type: 'background',
    name: 'CircleCI',
    role: 'Success → Account Executive',
    years: '2019–2020',
    location: 'Denver',
    acv: null,
    accent: '#04AA51',
    bullets: ['Saw what a real PLG motion looks like at its best: self-serve signups, usage-based triggers, tight ICP, and the right plays. A lean team operating like a machine.', 'Then watched what happens when a company chases an IPO and stops listening to customers. We churned our best accounts. Built a Ferrari without brakes.', 'The gap between those two versions of CircleCI is the most important GTM lesson I\'ve ever witnessed firsthand.'],
    preview: 'A lean team with strong self-serve, usage triggers, and the right plays can operate like a machine.',
    lessons: [
      'A lean sales team with strong self-serve signups, usage-based triggers, a tight ICP, and the right plays can operate like a machine. I saw what that motion looks like at its best.',
      'I also saw what happens when a team loses sight of customers in the chase for an IPO. We built a Ferrari without brakes. Churned our best customers. That\'s a hard thing to watch.',
      'Usage-based pricing is honest — it rewards teams who actually deliver value and punishes those who don\'t.'
    ],
    closing: 'The best version of CircleCI taught me what a well-designed GTM motion looks like. The worst version taught me that customer trust is the first thing to go when ambition outpaces judgment.',
    tabs: [{ key: 'career', label: 'Story', type: 'career' }]
  },
  {
    id: 'monkeylearn',
    type: 'background',
    name: 'MonkeyLearn',
    role: 'Account Executive',
    years: '2020–2022',
    location: 'Denver',
    acv: '$30K–$100K ACV',
    accent: '#FF9B54',
    bullets: ['Had a CEO who\'d read one sales book and thought he was Jordan Belfort. Dominated every customer call, made it about himself, killed deals in real time. Learned to work around it without becoming it.', 'Hit quota anyway. That taught me something I use every day: you can\'t control the environment, only how you perform inside it.', 'Met a mentor here — a real operator who understood enterprise, knew how to build, and didn\'t need to be the loudest person in the room. Changed how I think about what good actually looks like.'],
    preview: 'No air cover, a CEO who thought he was Jordan Belfort. I closed anyway.',
    lessons: [
      'I learned how to survive inside a real startup with no air cover — where the CEO has read one sales book, thinks he\'s Jordan Belfort, and dominates every customer call talking about himself until the deal dies.',
      'I learned to work around bad leadership without becoming it. You close anyway. You find a way.',
      'Met a mentor here who shaped how I think about the craft — a genuine operator in a sea of imitators.'
    ],
    closing: 'Hitting quota despite the dysfunction taught me something I use every day: you can\'t control the environment, only how you perform inside it.',
    tabs: [{ key: 'career', label: 'Story', type: 'career' }]
  },
  {
    id: 'calixa',
    type: 'background',
    name: 'Calixa',
    role: 'Account Executive',
    years: '2022–2023',
    location: 'Remote',
    acv: '$5K–$30K ACV',
    accent: '#7B72E9',
    bullets: ['Pre-revenue, product still finding itself, and a CEO who\'d get frustrated when I asked discovery questions because it broke his pitch rhythm. The hardest selling environment I\'ve been in.', 'Went from $0 to $100K in 3 months anyway — pure outbound. Jasper, Miro, ClickUp. 71% POC-to-close conversion.', 'Eventually earned real trust with Tommy. We went from clashing to building something genuine together. Company shut down July 2023. Still one of my proudest runs.', 'If a founder can\'t sell their own product, pay attention to that before you sign.'],
    preview: '$0 to $100K in 3 months on pure outbound. 71% POC-to-close. Company shut down. Still proud.',
    lessons: [
      'Pre-revenue, product still finding itself, a CEO who\'d get angry when I asked discovery questions because it broke his pitch flow. The hardest selling environment I\'ve ever been in.',
      'I overcame it. Went from $0 to $100K in 3 months on pure outbound. Jasper, Miro, ClickUp. Closed some of my favorite deals in my career — 71% POC-to-close conversion rate.',
      'Eventually earned real trust with Tommy. We went from clashing early to building something genuine together. The company shut down in July 2023. Still proud of what we built.',
      'Founder selling is everything in early-stage. If the CEO can\'t sell their own product, watch closely before you sign.'
    ],
    closing: 'This job had no right to work. It worked anyway. That means something.',
    tabs: [{ key: 'career', label: 'Story', type: 'career' }]
  },
  {
    id: 'metaplane',
    type: 'background',
    name: 'Metaplane',
    role: 'GTM',
    years: '2023–2024',
    location: 'Denver',
    acv: '$10K–$50K ACV',
    accent: '#2A9FD6',
    bullets: ['Great product. Brilliant team. 113% in Q1 on ramp, 173% in Q2. I was selling well.', 'I was also going through something hard personally and wasn\'t the best version of myself in the ways that mattered off the floor.', 'Got let go. Don\'t have full clarity on every reason. Made peace with my part in it.', 'The lesson I took: don\'t let adversity become background noise. Don\'t let people outwork you when it counts. I learned both the hard way.'],
    preview: 'Amazing product. 173% to goal in Q2. I wasn\'t fully present in the ways that mattered.',
    lessons: [
      'Amazing product. Brilliant engineering team. I wanted to be great here.',
      'I went through something genuinely hard in my personal life and wasn\'t the best version of myself. I kept selling — 173% to goal in Q2, 113% in Q1 during ramp — but I wasn\'t fully present in the ways that mattered off the floor.',
      'I got let go. I don\'t have complete clarity on all the reasons, and I\'ve made peace with that. What I know is that I let adversity become background noise when it should have been a wake-up call.'
    ],
    closing: 'Don\'t let people outwork you when it matters most. Don\'t let the hardest moments in your personal life define your professional ones. I learned both the hard way.',
    tabs: [{ key: 'career', label: 'Story', type: 'career' }]
  },
  {
    id: 'unstructured',
    type: 'background',
    name: 'Unstructured',
    role: 'Enterprise GTM',
    years: '2024–Present',
    location: 'Remote',
    acv: '$100K POCs → multi-million dollar deals',
    accent: '#C77DFF',
    bullets: ['First time with real executive trust to build and sell my own way. First true enterprise motion — in-VPC deployments, dedicated instances, private links, Fortune 500 security requirements.', 'Was handed the most important deal the company had to drive revenue. Learned partnership GTM, field enablement, and what it actually takes to get a partner\'s team selling your product.', 'More battle scars here than anywhere else. Also more people I\'d go to war for.', 'Everything I\'ve built since Stack Overflow is being used at once. Building things that actually work, with people who care.'],
    preview: 'First real executive trust. First true enterprise motion. These are people I\'d go to war for.',
    lessons: [
      'First time I\'ve had real executive trust to build and sell my own way. That changes everything about how you show up.',
      'First true enterprise motion — in-VPC deployments, dedicated instances, private links, co-architecting AI solutions with Fortune 500 engineering teams. This is where I learned what enterprise actually means.',
      'Was thrown into the most important deal the company had. Learned partnership GTM, field enablement, and what it takes to enable a partner\'s team to sell your product — the good, the hard, and the humbling.',
      'Selling raw JSON as a product is hard. You need to demo the full end-to-end vision — not just the output, but where it lives in the customer\'s stack and why it matters. The product is invisible until the story lands.',
      'Super challenging product issues, lots of in-person, lots of battle scars. These are people I\'d go to war for.'
    ],
    closing: 'This is where everything I\'ve learned is being used at once. Building things that actually work, with people who care.',
    tabs: [{ key: 'career', label: 'Story', type: 'career' }]
  }
];

// ── Playbooks (GTM Departments) ─────────────────────────────────────────────

const GTM = [
  {
    id: 'sales',
    type: 'department',
    name: 'Sales',
    accent: '#E8503A',
    purpose: 'Convert pipeline into revenue. Every deal is a signal — on process, pricing, ICP, and competitive position.',
    stageImportance: { early: 'critical', growth: 'very-high', scale: 'high' },
    stageNotes: {
      early: 'Founders close everything, pattern-matching on ICP and deal mechanics before any rep is hired.',
      growth: 'Building repeatable motion, hiring and ramping reps, creating playbooks from what founders proved out.',
      scale: 'Systematized and forecast-driven. Comp plans, territories, and pipeline coverage ratios matter.'
    },
    metrics: [
      {
        name: 'SQL → Closed Won Rate',
        shortLabel: 'SQL→Won',
        shortValue: '20–30%',
        description: 'Tells you if your pipeline quality and sales execution are aligned. A dropping rate usually means either bad pipeline or execution gaps.',
        benchmark: 'Healthy: 20–30% for most B2B'
      },
      {
        name: 'Avg Sales Cycle Length',
        shortLabel: 'Sales Cycle',
        shortValue: 'Watch Trend',
        description: 'Proxy for deal complexity and process efficiency. Watch for lengthening cycles — they signal friction, poor qualification, or stakeholder expansion you didn\'t plan for.',
        benchmark: 'Watch the trend, not just the number. Lengthening = warning sign.'
      }
    ],
    meetingTags: ['Weekly Pipeline', 'Deal Strategy', 'Monthly Forecast', 'QBR'],
    meetings: [
      {
        name: 'Weekly Pipeline Review',
        cadence: 'Weekly',
        attendees: 'AEs + Sales Manager',
        decisions: 'Every open opp reviewed. Next action confirmed. Close date confidence pressure-tested. Move, stuck, or dead.'
      },
      {
        name: 'Deal Strategy Session',
        cadence: 'Per strategic opp',
        attendees: 'Sales + SE + sometimes Exec',
        decisions: 'Pressure-test deal assumptions, align on resource deployment, agree on multi-threaded plan.'
      },
      {
        name: 'Monthly Forecast Call',
        cadence: 'Monthly',
        attendees: 'Sales + CEO + Finance',
        decisions: 'Commit vs best case vs pipeline. Where are we vs plan? What needs to move?'
      },
      {
        name: 'QBR',
        cadence: 'Quarterly',
        attendees: 'Full GTM team',
        decisions: 'What worked, what didn\'t, what changes. Territory, quota, and motion adjustments for next quarter.'
      }
    ],
    risks: [
      {
        title: 'Hiring Reps Before a Repeatable Motion',
        body: 'You\'ll churn them and waste runway. A founder or VP needs to personally close 5–10 deals with a clear, documented pattern before you hire reps to replicate it.'
      },
      {
        title: 'Discounting Without Guardrails',
        body: 'Erodes ASP, trains buyers to wait for end-of-quarter deals, and destroys gross margin over time. Build a discount approval matrix early — even a simple one.'
      },
      {
        title: 'Ignoring Sales Cycle as a Leading Indicator',
        body: 'By the time close rates visibly drop, it\'s too late to course-correct the quarter. Watch cycle length weekly — it moves first.'
      }
    ],
    salesStrategy: true
  },
  {
    id: 'demandgen',
    type: 'department',
    name: 'Demand Generation',
    accent: '#1DB374',
    purpose: 'Build a demand engine rooted in ICP clarity, split-lane messaging, and experiments that actually reach a decision.',
    stageImportance: { early: 'critical', growth: 'very-high', scale: 'high' },
    stageNotes: {
      early: 'Figuring out which channels produce real pipeline — not just leads. Everything is an experiment.',
      growth: 'Doubling down on what works, cutting what doesn\'t, building repeatable channel playbooks.',
      scale: 'Channel diversification, efficiency metrics, and CAC payback discipline. Marketing becomes a revenue center.'
    },
    metrics: [
      {
        name: 'Pipeline Created by Channel',
        shortLabel: 'Pipeline / Channel',
        shortValue: 'Track All',
        description: 'Not leads. Not MQLs. Actual pipeline created. This is the only demand gen metric that maps directly to revenue.',
        benchmark: 'No universal target — optimize for channel efficiency relative to CAC payback.'
      },
      {
        name: 'Disco → Opp Rate by Source',
        shortLabel: 'Disco → Opp',
        shortValue: 'By Source',
        description: 'Not all booked meetings are equal. Know which sources convert to qualified opps and fund those — defund the ones that fill calendars but not pipeline.',
        benchmark: 'If a source has run 90 days with no qualified opps, it\'s not a runway problem. It\'s a channel or ICP problem.'
      }
    ],
    meetingTags: ['Weekly Review', 'Monthly Readout', 'Quarterly Budget'],
    tabs: [
      { key: 'principles', label: 'Principles', type: 'principles', content: [
        '<strong>Start with the ICP, not the channel</strong> — Before you write a single email or run a single ad, know exactly who you\'re targeting: role, company stage, tech stack, trigger event, and pain. Fuzzy ICP means wasted spend across every channel.',
        '<strong>Let the ICP shape both lanes</strong> — Your inbound and outbound strategy should look different for ICs versus DMs, and different again for SMB versus enterprise. One tight ICP doc should drive all of it.',
        '<strong>Fewer experiments, done better</strong> — The instinct is to run five tests at once. The discipline is to run one well: real hypothesis, real sample size, real timeline, real decision. Three experiments that reach a conclusion beat twelve that never do.',
        '<strong>Plan → Test → Decide</strong> — Every channel bet needs a written plan before it starts, a clear test window, and a binary outcome at the end. Scale it or kill it. No zombie experiments.',
        '<strong>Split lane your messaging</strong> — ICs and DMs are not the same buyer. They have different pain, different outcomes, different CTAs. Build sequences for each and don\'t blend them.',
        '<strong>Score every discovery call</strong> — Define what a good call looks like before you run the first one. Score them weekly. Track which sources produce calls that actually score well.',
        '<strong>Measure what converts to Opp, not what generates noise</strong> — Clicks, opens, and attendees don\'t pay the bills. What moves to a qualified opportunity? Find those patterns and repeat them relentlessly.',
        '<strong>Build feedback loops, not reports</strong> — Weekly reviews with Sales aren\'t about accountability. They\'re about signal. What\'s converting? What\'s stalling? Feed it back into channel and messaging strategy fast.'
      ]},
      { key: 'split-lane', label: 'IC vs DM', type: 'pitch-section', content: {
        section: '↕',
        headline: 'Same product. Different buyer. Different everything.',
        coaching: 'ICs and DMs share a problem but experience it differently. ICs feel the friction every day — they want to see the product work. DMs feel the cost every quarter — they want a business case. If you\'re sending the same message to both, you\'re converting neither. Build two lanes and treat them as separate motions.',
        points: [
          '<strong>IC messaging → lead with product.</strong> Show them how it changes their actual day. CTAs should go to a trial, a sandbox, a demo, or a how-to. They want to see before they commit to anything.',
          '<strong>DM messaging → lead with outcome.</strong> Cost reduction, team velocity, risk reduction, competitive positioning. CTAs should go to an intro call or an exec-to-exec conversation — not a product tour.',
          '<strong>ICs influence up — DMs decide down.</strong> Build IC sequences to generate champions. Build DM sequences to generate decisions. Know which motion you\'re in on every active target.',
          '<strong>Use different channels and timing.</strong> ICs respond to content, product-led signals, LinkedIn activity, and community. DMs respond to executive outreach, peer references, and events.',
          '<strong>Don\'t let the IC sequence close the deal.</strong> If an IC is engaged, get above them fast. A champion without a DM sponsor is just a fan.'
        ],
        callout: '"What does this person wake up thinking about? That\'s your opening line."'
      }},
      { key: 'experiments', label: 'Experiments', type: 'pitch-section', content: {
        section: '⚗',
        headline: 'Commit fewer bets. Win more of them.',
        coaching: 'Most demand gen teams run too many experiments at once — none reach the sample size needed to make a real decision. The result is a graveyard of inconclusive tests and no durable channel playbook. Pick fewer things. Go deeper. Build the feedback loop that compounds.',
        points: [
          '<strong>Write a one-pager before every test.</strong> Hypothesis, audience, sample size, timeline, success metric, and kill criteria. If you can\'t fill it out, you\'re not ready to run.',
          '<strong>Give tests real runway.</strong> Most channels need 4–6 weeks minimum to produce signal. Two-week tests with 40 contacts tell you nothing useful.',
          '<strong>Set a binary decision point.</strong> When the window closes: scale, kill, or run a new hypothesis. "Let\'s run it a bit longer" is a choice to avoid making a decision.',
          '<strong>Cap concurrent experiments at 2–3.</strong> More than that and none of them get the attention they need. Focus beats breadth.',
          '<strong>Nail one thing before you stack the next.</strong> Get inbound working before you layer paid. Nail outbound in one segment before you replicate it. Compounding only works if the foundation holds.'
        ],
        avoid: 'Avoid running experiments with no pre-defined success criteria. You\'ll always find a way to read ambiguous results as promising — and keep spending against something that\'s not working.',
        callout: '"If we can\'t make a go/no-go decision from this test, we\'re not running it."'
      }},
      { key: 'measure', label: 'Measure', type: 'principles', content: [
        '<strong>Score every discovery call</strong> — Build a scorecard before the first call happens. 5–7 criteria: ICP fit, pain clarity, timeline, DM access, next step quality. Score 1–3. Review weekly with the team.',
        '<strong>Measure disco → Opp rate by source</strong> — Not all meetings are equal. An inbound trial-request meeting converts differently than a cold SDR-sourced call. Know the rate for each source and fund accordingly.',
        '<strong>Track what converts, not what fills</strong> — Volume metrics are inputs. Opp creation and Opp-to-Close rates are outputs. Build your reporting stack around outputs and use inputs to explain them.',
        '<strong>Make every closed-won traceable</strong> — Every closed deal should trace back to its demand gen source. Review monthly: which sources actually produced revenue — not just pipeline.',
        '<strong>Weekly call scoring is also weekly coaching</strong> — What made a high-scoring call this week? What patterns are emerging across reps? The scoring process surfaces what to repeat.',
        '<strong>Kill non-converting channels in 90 days</strong> — If a channel has run a full quarter with no qualified opps, don\'t extend the runway. Diagnose: wrong channel, wrong ICP, or wrong message — then decide.'
      ]}
    ]
  },
  {
    id: 'outbound',
    type: 'department',
    name: 'Outbound Sequences',
    accent: '#F72585',
    purpose: 'Create demand through targeted, personalized outreach. Build sequences that earn replies, not just send emails.',
    stageImportance: { early: 'high', growth: 'very-high', scale: 'high' },
    stageNotes: {
      early: 'Outbound is often the fastest path to early revenue. Founders should run sequences personally before delegating.',
      growth: 'Systematize what worked in early stage. Build templates, hire SDRs, measure sequence performance ruthlessly.',
      scale: 'Specialization matters. Different sequences for different ICPs, verticals, and personas.'
    },
    tabs: [
      { key: 'principles', label: 'Principles', type: 'principles', content: [
        'Every sequence needs a hook: why this person, why this company, why now. If you can\'t answer all three, don\'t send it.',
        'Personalization at scale means researching the trigger, not rewriting the whole email. One specific sentence about their world beats five generic sentences about yours.',
        'The goal of the first email is not to sell the product. It is to earn a reply. Optimize for curiosity, not comprehension.',
        'Sequences should have a perspective. The best outbound takes a position on something the prospect cares about.',
        'Follow up. Most replies come after the 3rd–5th touch. One email is not a sequence.'
      ]},
      { key: 'sequence', label: 'Sequence Structure', type: 'steps', content: [
        { day: 'Day 1', action: 'Email', note: 'Hook + one-line value prop + soft CTA' },
        { day: 'Day 3', action: 'LinkedIn', note: 'Connection request — no pitch' },
        { day: 'Day 5', action: 'Email', note: 'Different angle, lead with insight or case study' },
        { day: 'Day 7', action: 'Call', note: 'Call + voicemail — reference the emails' },
        { day: 'Day 10', action: 'Email', note: 'Direct ask or breakup' },
        { day: 'Day 14', action: 'LinkedIn', note: 'Short, casual — different tone from email' },
        { day: 'Day 21', action: 'Email', note: 'The "breakup" — this consistently generates replies' }
      ]},
      { key: 'callscripts', label: 'Call Scripts', type: 'principles', content: [
        '<strong style="color:var(--text)">Opening (5 seconds):</strong> "Hey [name] — [your name] from [company]. Did I catch you at a bad time?" Wait. Don\'t apologize for calling.',
        '<strong style="color:var(--text)">The hook (10 seconds):</strong> "The reason I\'m calling — we work with [role] at companies like [peer] to [specific outcome]. Wanted to see if that\'s a problem you\'re dealing with."',
        '<strong style="color:var(--text)">The question:</strong> "Is [pain point] something your team is actively working on right now?" Then stop talking.',
        '<strong style="color:var(--text)">If yes:</strong> Book the meeting. Don\'t pitch on the cold call.',
        '<strong style="color:var(--text)">If no:</strong> "Who on your team would that be most relevant for?" or "What would need to change for it to be a priority?"'
      ]},
      { key: 'metrics', label: 'Metrics' },
      { key: 'risks', label: 'Risks' }
    ],
    metrics: [
      {
        name: 'Reply Rate',
        shortLabel: 'Reply Rate',
        shortValue: '3–5% healthy',
        description: 'The primary health metric for outbound sequences. Below 2% means the message or the list is wrong. Diagnose before scaling.',
        benchmark: 'Healthy: 3–5%. Below 2% = diagnose immediately.'
      },
      {
        name: 'Meeting Booked Rate',
        shortLabel: 'Meetings Booked',
        shortValue: 'Track',
        description: 'Replies are vanity if they don\'t convert to meetings. Track reply-to-meeting rate to understand if your CTA is working.',
        benchmark: 'Target 30–40% of positive replies converting to booked meetings.'
      }
    ],
    meetingTags: ['Sequence Review', 'Template Audit', 'Rep Training'],
    meetings: [
      {
        name: 'Weekly Sequence Performance Review',
        cadence: 'Weekly',
        attendees: 'SDR/BDR team + Manager',
        decisions: 'Reply rates by sequence and step. Which sequences are underperforming? What gets paused, tested, or killed?'
      },
      {
        name: 'Monthly Template Audit',
        cadence: 'Monthly',
        attendees: 'Demand Gen + Sales',
        decisions: 'Review top and bottom performing email templates. Update messaging based on sales feedback and market signal.'
      }
    ],
    risks: [
      {
        title: 'Generic Sequences at Scale',
        body: 'Spray-and-pray outbound at volume kills your domain reputation. One highly personalized sequence to 50 perfect-fit prospects outperforms a generic one to 500 marginal ones.'
      },
      {
        title: 'Optimizing for Sends, Not Replies',
        body: 'SDR activity metrics are not outcomes. Reply rate and meeting booked rate are the only metrics that matter. High activity with low reply rate means the message is broken.'
      },
      {
        title: 'No Feedback Loop to Demand Gen',
        body: 'What prospects say in replies and on calls is the most valuable market research you have. If that signal isn\'t making it back to message refinement, you\'re leaving a compounding advantage on the table.'
      }
    ]
  },
  {
    id: 'cs',
    type: 'department',
    name: 'Customer Success',
    accent: '#2A9FD6',
    purpose: 'Turn revenue into retention and expansion. NRR is the growth engine.',
    stageImportance: { early: 'medium', growth: 'very-high', scale: 'critical' },
    stageNotes: {
      early: 'Founders own CS. Stay close to every customer — churn is existential at small scale.',
      growth: 'Churn kills growth-stage companies. One bad cohort can wipe a quarter of ARR.',
      scale: 'Net revenue retention above 120% means you grow even without new logo sales. CS IS the growth engine.'
    },
    tabs: [
      { key: 'overview', label: 'Overview' },
      { key: 'principles', label: 'Principles', type: 'principles', content: [
        'If you have a technical product, you need technical success. A CSM who can\'t speak the language of the builders will never earn trust and will never catch churn before it happens.',
        'Monthly QBRs that nobody wants to attend don\'t drive NRR. You need to stay close through deployments, through getting-to-value, and through staying-at-value. The relationship has to mean something between renewal conversations.',
        'The best CS motion at early stage is almost indistinguishable from professional services. You\'re in the product with them, not reporting on it from the outside.',
        'NRR is a lagging indicator. The leading indicators are: time to first value, product adoption depth, stakeholder breadth, and whether your champion would take your call on a Saturday.',
        'Expansion doesn\'t come from asking for it. It comes from earning it by making the first use case undeniably successful, then making it obvious what the next one should be.'
      ]},
      { key: 'metrics', label: 'Metrics' },
      { key: 'meetings', label: 'Meetings' },
      { key: 'risks', label: 'Risks' }
    ],
    metrics: [
      {
        name: 'Net Revenue Retention (NRR)',
        shortLabel: 'NRR',
        shortValue: '>120% world-class',
        description: 'The single most important CS metric. Above 100% means expansion outpaces churn.',
        benchmark: '>100% = healthy, >110% = strong, >120% = world-class'
      },
      {
        name: 'Time to First Value',
        shortLabel: 'Time to Value',
        shortValue: 'Minimize',
        description: 'How fast does a new customer hit their first meaningful outcome? Predicts long-term retention better than almost any other early signal.',
        benchmark: 'Define your "first value moment" specifically, then track median days to reach it.'
      }
    ],
    meetingTags: ['Weekly At-Risk', 'Monthly Expansion', 'QBR w/ Accounts'],
    meetings: [
      {
        name: 'Weekly At-Risk Account Review',
        cadence: 'Weekly',
        attendees: 'CS team',
        decisions: 'Which accounts are showing churn signals? What\'s the save plan? Who owns the next touch and by when?'
      },
      {
        name: 'Monthly Expansion Pipeline Review',
        cadence: 'Monthly',
        attendees: 'CS + AEs',
        decisions: 'Which accounts are ready for upsell or cross-sell? What\'s the expansion strategy and timeline?'
      },
      {
        name: 'Quarterly Business Review (QBR)',
        cadence: 'Quarterly',
        attendees: 'CS + Customer Exec Sponsor',
        decisions: 'Value delivered vs. expected. Roadmap alignment. Renewal confidence. Expansion opportunities identified.'
      }
    ],
    risks: [
      {
        title: 'Treating CS as Support',
        body: 'If CS is just handling tickets, you\'re leaving expansion revenue on the table. CS should own a revenue number — expansion ARR at minimum.'
      },
      {
        title: 'Waiting Too Long to Build CS',
        body: 'Founders often delay hiring CS until churn is already a problem. By then, you\'re playing defense. Hire your first CS lead around $2–3M ARR.'
      },
      {
        title: 'No Early-Warning System',
        body: 'If you can\'t identify at-risk accounts 90 days before renewal, you can\'t save them. Build health scores early — product usage, support tickets, champion engagement.'
      }
    ]
  },
  {
    id: 'revops',
    type: 'department',
    name: 'Revenue Operations',
    accent: '#7B72E9',
    purpose: 'Remove friction from every seller touchpoint. Automate the admin. Let reps open their console, work their day, and go hunt.',
    stageImportance: { early: 'low', growth: 'high', scale: 'critical' },
    stageNotes: {
      early: 'Keep it simple. Founder does this with a spreadsheet and a basic CRM. Don\'t over-build.',
      growth: 'Without this function, chaos sets in. You can\'t forecast, can\'t diagnose, can\'t scale headcount safely.',
      scale: 'Forecasting, territory design, comp plans, ICP definition, and competitive intel all live here.'
    },
    metrics: [
      {
        name: 'Forecast Accuracy',
        shortLabel: 'Forecast Accuracy',
        shortValue: '±10%',
        description: 'How close is your commit to actual close? Consistently off = process problem.',
        benchmark: 'Healthy: commit within 10% of actual closed. Worse than ±20% = something is broken.'
      },
      {
        name: 'CRM Data Completeness',
        shortLabel: 'CRM Completeness',
        shortValue: '90%+',
        description: 'If reps aren\'t logging required fields, your data is fiction and your forecasts are guesses.',
        benchmark: 'Target 90%+ on required opp fields. Below 75% = data is not usable for planning.'
      }
    ],
    meetingTags: ['Weekly Standup', 'Monthly Systems', 'Quarterly Planning'],
    tabs: [
      { key: 'principles', label: 'Principles', type: 'principles', content: [
        '<strong>Build for the seller, not the spreadsheet</strong> — Every RevOps decision should be evaluated through one lens: does this make the rep\'s day easier or harder? If it\'s adding admin, you\'re solving the wrong problem.',
        '<strong>Every manual step is a process failure</strong> — If a rep is logging a call, updating a field, or copy-pasting data between tools, RevOps missed something. The goal is zero required manual input from reps wherever technically possible.',
        '<strong>Data quality is a system design problem</strong> — Reps don\'t update CRM because they\'re lazy. They don\'t update it because it\'s annoying and they don\'t trust it. Fix the system. Enforcement doesn\'t work — automation does.',
        '<strong>Automate activity capture first</strong> — Email sync, calendar sync, call recording integration. The system should know what happened without asking anyone. This is table stakes before anything else.',
        '<strong>The CRM should tell reps what to do next</strong> — Not ask them what happened. Surfacing next steps, at-risk deals, and overdue follow-ups is more valuable than any dashboard you\'ll build.',
        '<strong>Fewer tools that work beats more tools that don\'t connect</strong> — Every tool adds integration debt, data fragmentation, and a login reps won\'t use. Start with CRM + enrichment + sequencing. Add only when there\'s a clear gap and a measurable ROI.',
        '<strong>Forecasting should be driven by signals, not gut checks</strong> — Deal velocity, engagement data, stage duration, historical patterns. A rep\'s commit call should confirm what the data already suggests — not be the only input.',
        '<strong>RevOps is a strategic function, not a ticketing system</strong> — If RevOps is spending their time processing Salesforce requests, you\'ve staffed it wrong. They should be at the planning table for headcount, territory, comp, and GTM system design.'
      ]},
      { key: 'console', label: 'Seller Console', type: 'pitch-section', content: {
        section: '⌨',
        headline: 'A rep opens their console and knows exactly what to do. No hunting. No guessing.',
        coaching: 'The seller console is the most important surface RevOps owns. If a rep has to dig for their pipeline status, chase down data, or manually figure out who to call — the system has failed them. Design for the first 5 minutes of their day. Everything they need should be right there.',
        points: [
          '<strong>Today\'s priority list — surfaced automatically.</strong> Deals closing this month ranked by close date and health score. Opps that have gone cold (no activity in X days). Follow-ups that are overdue. Staged by urgency, not alphabetically.',
          '<strong>At-risk deal alerts — pushed, not pulled.</strong> If engagement drops, a key contact goes dark, or a deal has been in the same stage too long — flag it automatically and put it at the top of the queue. Reps shouldn\'t discover problems in pipeline reviews.',
          '<strong>One-click actions wherever possible.</strong> Log a call, schedule a follow-up, move a stage, enroll in a sequence — should be executable from the main view without opening the full record. Every extra click costs rep time and reduces adoption.',
          '<strong>Pipeline coverage visible at a glance.</strong> What\'s the rep\'s coverage ratio this quarter? Are they on track? Show it on the console so they own it — not just their manager.',
          '<strong>Next best action for every open deal.</strong> No next step defined = deal is at risk. The system should prompt the rep if a deal has no scheduled follow-up. Better yet, suggest one based on deal stage and contact history.'
        ],
        callout: '"If a rep has to think about where to start their day, the console hasn\'t done its job."'
      }},
      { key: 'automate', label: 'Automate First', type: 'principles', content: [
        '<strong>Activity capture — non-negotiable</strong> — Sync email, calendar, and call recordings directly to the CRM. Every meeting, call, and email thread logged automatically. Zero rep input required for activity history.',
        '<strong>Lead and account enrichment on creation</strong> — The moment a lead or account is created, it should auto-populate: company size, industry, tech stack, funding stage, LinkedIn data. Reps should never manually fill a firmographic field.',
        '<strong>Stage progression triggers</strong> — Define the criteria that qualify a deal to advance. Where possible, trigger stage moves automatically based on logged activity, email engagement, or completed steps — not rep memory.',
        '<strong>Stale deal alerts</strong> — Auto-flag any opp with no logged activity in X days by stage. Early stage: 7 days. Later stage: 4 days. Send the alert directly to the rep — not just their manager.',
        '<strong>Follow-up task creation</strong> — Every completed meeting or call should auto-create a follow-up task with a default due date. Reps can edit or dismiss — but the system creates it so nothing falls through.',
        '<strong>Sequence enrollment from CRM triggers</strong> — When a lead hits a defined qualification threshold or a deal moves to a certain stage, auto-enroll into the appropriate sequence. Remove the manual enrollment step entirely where the logic is clear.',
        '<strong>SDR → AE handoff automation</strong> — Accepted meeting = auto-create the opp, auto-assign to AE, auto-notify, auto-schedule intro. The handoff shouldn\'t require anyone to remember to do anything.',
        '<strong>AE → CS handoff on close</strong> — Closed-won = auto-trigger the CS onboarding workflow. Contract value, key contacts, implementation notes pulled from the opp and pushed to CS without a single manual step.'
      ]},
      { key: 'forecast', label: 'Data & Forecast', type: 'principles', content: [
        '<strong>Forecast from signals, not conversations</strong> — Deal velocity (days in stage vs. historical average), email engagement rate, meeting frequency, champion activity. Build a model. The weekly forecast call should be validation — not discovery.',
        '<strong>CRM completeness enforced at the workflow level</strong> — Required fields should block stage advancement, not just flag a warning. If it\'s truly required to forecast, make it required to move forward. No exceptions, no workarounds.',
        '<strong>Pipeline coverage is a system output, not a report</strong> — Every rep and manager should see their coverage ratio updated in real time. 3x coverage minimum going into a quarter. Surface it on the console — not buried in a BI tool.',
        '<strong>Weekly forecast without a forecast meeting</strong> — The goal is a system clean enough that the forecast is visible without a meeting to assemble it. Meetings should discuss exceptions and decisions — not gather data.',
        '<strong>Tag win/loss automatically where possible</strong> — Closed-won and closed-lost reasons should be a required field, but surface them in the close workflow, not after the fact. Aggregate monthly to find patterns.',
        '<strong>Comp plan visibility in the console</strong> — Reps should be able to see their attainment, accelerator status, and projected payout at any point in the quarter. If they can\'t, you\'re leaving motivation on the table.',
        '<strong>Quarterly territory and quota review — data driven</strong> — Quota should be set based on historical conversion rates, ramp time, territory potential, and market data — not last year\'s number plus 20%. RevOps owns this model.'
      ]}
    ]
  },
  {
    id: 'partnerships',
    type: 'department',
    name: 'Partnerships',
    accent: '#E8A020',
    purpose: 'Partnerships can unlock markets you can\'t reach alone — or become the most expensive distraction you\'ve ever funded. Know the difference before you sign.',
    stageImportance: { early: 'low', growth: 'medium', scale: 'high' },
    stageNotes: {
      early: 'Usually a distraction unless a partner IS the primary channel from day one. Don\'t build a partner motion before you have a direct motion.',
      growth: 'Channel and integration partnerships start to meaningfully contribute.',
      scale: 'Resellers, SIs, and co-sell programs can drive 20–40% of revenue at the right margin.'
    },
    metrics: [
      {
        name: 'Partner-Sourced Pipeline %',
        shortLabel: 'Partner Pipeline',
        shortValue: '20–30% target',
        description: 'What % of total pipeline came from or through a partner?',
        benchmark: 'Directional target at scale: 20–30% of pipeline partner-sourced or partner-influenced.'
      },
      {
        name: 'Partner Gross Margin',
        shortLabel: 'Partner GM',
        shortValue: 'Know Your Floor',
        description: 'What is your actual gross margin after the partner cut, implementation lift, and internal cost to support the deal? If you don\'t know this number, you\'re flying blind.',
        benchmark: 'Set a walk-away GM floor before signing any agreement. No exceptions.'
      }
    ],
    meetingTags: ['Monthly Pipeline', 'Quarterly PBR'],
    tabs: [
      { key: 'principles', label: 'Principles', type: 'principles', content: [
        '<strong>Build a direct motion first</strong> — Partnerships amplify a working GTM. They don\'t replace one. If you don\'t know why customers buy from you directly, a partner won\'t figure it out for you.',
        '<strong>Misaligned incentives kill partnerships before they start</strong> — Your partner has hundreds of products they can sell. You are one line item in their catalog. If selling you doesn\'t make their reps money, visibly and quickly, you will not be prioritized. Full stop.',
        '<strong>A signed agreement is not pipeline</strong> — Announcing a partnership is not a channel. The work starts after the ink dries. Most partnerships that fail do so because both sides thought the signing was the milestone.',
        '<strong>Protect gross margin from day one</strong> — Know your floor before you enter any negotiation. The partner cut, plus your cost to enable and support the deal, plus implementation lift — model it all before you agree to anything. Bad economics compound.',
        '<strong>Exec alignment on both sides, or don\'t start</strong> — A named exec champion at the partner who is accountable for the relationship and has pipeline targets attached. Not a "we\'re excited to work together" quote in a press release.',
        '<strong>One deep partnership beats ten shallow ones</strong> — Shallow partnerships are marketing events. Deep ones are revenue programs. Put your energy where you have real traction.',
        '<strong>Enablement is your job</strong> — Partner reps will not learn your product on their own. Self-service materials, a sandbox they can demo without you, a tight value prop they can deliver in two minutes. If they can\'t sell without you in the room, the economics will never work.',
        '<strong>Partners are not a substitute for your ICP problem</strong> — If you don\'t know who your best customer is, a partner with broad distribution will just help you reach more of the wrong people faster.'
      ]},
      { key: 'oem-trap', label: 'The OEM Trap', type: 'pitch-section', content: {
        section: '⚠',
        headline: 'The pitch sounds perfect. The reality is a different conversation.',
        coaching: 'OEM and reseller partnerships have a standard pitch: "We have thousands of reps, your product fits our portfolio perfectly, you\'ll barely have to do anything and the revenue just flows." This pitch has been delivered to thousands of companies. Most of them spent the next 18 months learning why it was wrong. Here\'s what actually happens.',
        points: [
          '<strong>You are one of 200 products in their catalog.</strong> Their reps have quarterly numbers to hit, accelerators to chase, and products they understand. You are not on that list until you\'ve proven you can make them money. Until then, you\'re a favor ask.',
          '<strong>Enablement never ends.</strong> Global sales teams rotate. The rep you trained in EMEA in January is in a different role by June. You\'ll spend months flying to Munich, Singapore, and Chicago to run the same enablement session to people who may or may not use it.',
          '<strong>Gross margins get shredded.</strong> The partner cut was the obvious cost. Add your internal cost to support every partner deal — the SEs, the partner manager, the legal time, the co-marketing spend. That\'s your real margin. Run the model before you\'re in it.',
          '<strong>Every deal still needs you.</strong> The promise was independence. The reality is the partner calls you in for every deal that gets serious. You\'re doing half the work at a fraction of the margin.',
          '<strong>You\'re on their timeline now.</strong> Their QBRs, their priority list, their product roadmap conflicts. When they deprioritize your category for a quarter, your pipeline dries up and there\'s nothing you can do about it.'
        ],
        avoid: 'Avoid anchoring your growth forecast to partner-sourced pipeline before you have 6 months of live data showing it actually converts. Partner pipeline that doesn\'t move is worse than no pipeline — it gives false comfort.',
        callout: '"If this partnership only works when we\'re in every deal, the economics don\'t work. What\'s the path to them closing without us?"'
      }},
      { key: 'when-it-works', label: 'When It Works', type: 'pitch-section', content: {
        section: '✓',
        headline: 'Partnerships create real leverage — when the conditions are right.',
        coaching: 'The companies that build successful partner channels aren\'t lucky. They\'re deliberate about which partnerships they pursue and ruthless about walking away from ones that don\'t meet the bar. Before you invest, check every item on this list. Partial credit doesn\'t count.',
        points: [
          '<strong>Your product is genuinely easy to deploy.</strong> Minimal implementation lift, no heavy customization, no dependency on your team to get a customer live. If it takes a specialist to implement, the partner will never own the full motion.',
          '<strong>Selling you drives them meaningful revenue.</strong> Not nominal. Meaningful — enough that you show up in their top 10 at a regional level. If the deal economics aren\'t exciting for their reps, you\'ll never be a priority.',
          '<strong>You make them look good to their customers.</strong> You solve a problem their customers are already asking about. You fill a gap in their portfolio. You add credibility, not complexity.',
          '<strong>They have accounts you genuinely can\'t reach.</strong> Installed base, regional coverage, regulated industry access, or procurement relationships. There has to be a real door they open that you can\'t open yourself.',
          '<strong>You\'ve already proven the direct motion.</strong> You know your ICP, your value prop converts, and your close rate is measurable. Partners amplify a working machine — they don\'t build it for you.',
          '<strong>Named exec sponsors exist on both sides.</strong> Not aspirational. Actual names, actual accountability, actual pipeline commitments in the partnership agreement.',
          '<strong>You have internal alignment across every function that will touch the partnership.</strong> Sales, engineering, marketing, and operations all need to understand what this partnership requires from them — and have agreed to deliver it. A partnership that only has a champion in one function will stall the moment it needs something from another.',
          '<strong>Engineering knows what\'s being committed to.</strong> If the partner needs an integration, a co-developed feature, or a certified connector — engineering has signed off on the scope and timeline before the deal is announced. Don\'t let partnerships commit your roadmap without the people who own it in the room.',
          '<strong>Marketing is aligned and resourced.</strong> Co-marketing, joint events, co-branded content, launch campaigns — these require real budget and real headcount. If marketing hasn\'t committed resources, the partnership launches quietly and dies quietly.',
          '<strong>Operations can support the motion.</strong> Partner deal registration, co-sell workflows, commission splits, contract routing — if RevOps and legal haven\'t built the process before the first deal lands, every deal will be a fire drill.',
          '<strong>Everyone understands why this partnership matters.</strong> Not just the partnerships team. The AE who gets a co-sell opportunity, the SE who gets pulled in for a partner demo, the CSM who onboards the partner customer — they all need to know this is a priority and why. Indifference at the execution layer kills partnerships that leadership thought were working.'
        ],
        callout: '"Before we go deeper — what does a rep at your firm earn from selling us? And how does that compare to the other products in your portfolio?"'
      }},
      { key: 'make-it-work', label: 'Make It Work', type: 'principles', content: [
        '<strong>Treat it like a sales motion</strong> — Define the ICP for partner deals (it may differ from your direct ICP), set pipeline targets, assign conversion metrics. A partnership without a pipeline model is a hope strategy.',
        '<strong>Start with a pilot, not a global rollout</strong> — Pick one region, one segment, one partner team. Prove the economics and the motion before you invest in global enablement. Every failed global rollout started as an unproven pilot that skipped this step.',
        '<strong>Build self-service enablement</strong> — Pitch deck, objection handler, demo environment they can run without you, a one-pager they can leave behind. The goal is a partner rep who can run a first call alone. Measure how many actually can.',
        '<strong>Know your walk-away number before you sit down</strong> — Model your fully-loaded gross margin at the deal sizes you expect. Set a floor. Don\'t negotiate against it. A bad partnership deal is worse than no deal — it sets precedent and it costs you time.',
        '<strong>Build pipeline accountability into the contract</strong> — Quarterly pipeline targets, not just activity. If the partner isn\'t generating pipeline after two quarters, the relationship needs to be restructured or ended.',
        '<strong>Assign a dedicated resource</strong> — A moonlighting AE running partner deals will not build a partner channel. If the motion is worth investing in, it needs an owner whose only job is partnerships.',
        '<strong>Co-sell is better than resell early on</strong> — You stay in the deal, you protect the relationship, you learn what the partner sales team actually needs. Pure resell before you have mature enablement is how deals get misrepresented and customers get oversold.'
      ]}
    ]
  },
  {
    id: 'events',
    type: 'department',
    name: 'Events',
    accent: '#FF9B54',
    purpose: 'Generate pipeline and relationships through in-person presence. Treat every event as a pipeline exercise.',
    stageImportance: { early: 'low', growth: 'medium', scale: 'high' },
    stageNotes: {
      early: 'Attend selectively. Don\'t sponsor — attend, network, host a small dinner.',
      growth: 'Strategic events worth sponsoring start to make sense.',
      scale: 'Events become a meaningful pipeline source. Flagship presence and hosted experiences compound.'
    },
    tabs: [
      { key: 'strategy', label: 'Strategy', type: 'principles', content: [
        'Events are expensive. Treat every event as a pipeline generation exercise, not a brand exercise.',
        'Tier your events: flagship (where your buyers actually go), secondary (worth a booth), and community (worth a presence but not a check).',
        'The ROI calculation: pipeline generated divided by total event cost including staff time. If you can\'t measure this, you shouldn\'t be spending.',
        'The best event strategy at early stage is often to not sponsor — attend, host a dinner, run a side event. More memorable, lower cost, better conversations.'
      ]},
      { key: 'before', label: 'Before', type: 'principles', content: [
        'Build your target account list 6 weeks out. Know who you want to meet before you arrive.',
        'Reach out before the event. "We\'ll both be at [conference] — would love to grab 20 minutes." Response rates are 3–5x higher than cold outbound.',
        'Brief your reps on the top 10 accounts you want to crack. Give them a conversation starter, not a pitch.',
        'Have a reason to follow up from the event. A dinner, a breakfast, a roundtable — something that isn\'t just "come to our booth."'
      ]},
      { key: 'after', label: 'After', type: 'principles', content: [
        'Follow up within 24 hours. The window is short — everyone gets back to their inbox and forgets the conversation.',
        'Personalize every follow-up to the specific conversation. "You mentioned X — here\'s what I was thinking about that" is the only acceptable format.',
        'Route leads to the right rep immediately. Leads that sit for 48+ hours after an event are effectively dead.',
        'Do a debrief within one week: what conversations happened, what pipeline was created, what follow-ups are outstanding.'
      ]},
      { key: 'metrics', label: 'Metrics' },
      { key: 'risks', label: 'Risks' }
    ],
    metrics: [
      {
        name: 'Pipeline Generated (90-day)',
        shortLabel: 'Event Pipeline',
        shortValue: 'Track',
        description: 'Pipeline sourced and influenced within 90 days of the event. The only metric that tells you if the event was worth the cost.',
        benchmark: 'Target 3–5x event cost in pipeline created within 90 days.'
      },
      {
        name: 'Cost per Qualified Meeting',
        shortLabel: 'Cost/Meeting',
        shortValue: 'Benchmark',
        description: 'Total event cost divided by qualified meetings booked — including pre-event outreach.',
        benchmark: 'Pre-event outreach meetings should outnumber on-site meetings.'
      }
    ],
    meetingTags: ['Event Strategy', 'Pre-Event Prep', 'Post-Event Debrief'],
    meetings: [
      {
        name: 'Event Strategy Session',
        cadence: 'Per event (6 weeks out)',
        attendees: 'Marketing + Sales',
        decisions: 'Which events, what\'s the goal, top 10 target accounts, pre-event outreach plan.'
      },
      {
        name: 'Post-Event Debrief',
        cadence: 'Within 1 week of event',
        attendees: 'Marketing + Sales + all attendees',
        decisions: 'What conversations happened? What pipeline was created? Was it worth the investment?'
      }
    ],
    risks: [
      {
        title: 'Sponsoring Without a Pipeline Plan',
        body: 'A logo on a lanyard without a pre-event outreach plan is an expensive brand exercise. If you can\'t measure pipeline from an event, you\'re paying for vibes.'
      },
      {
        title: 'Booth Without a Qualification Process',
        body: '200 badge scans without context is worthless. Train reps to qualify quickly and move on from poor fits.'
      },
      {
        title: 'No Follow-Up System Built in Advance',
        body: 'The half-life of an event conversation is 48 hours. Build the follow-up system before the event, not after.'
      }
    ]
  }
];
