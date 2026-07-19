import { yearsFrom } from "../utils/yearsFrom";
import avatar from "../assets/images/9da59552-da8c-4924-a829-35409af9ea7e.jpg";

const profile = {
  name: "Rajarsi Saha",
  pronouns: "He/Him",
  title: "Technical Architect",
  company: "SysCloud",
  location: "Hyderabad, Telangana, India",
  summary: `Passionate database expert with ${yearsFrom("2021-01-01")} years of experience in cloud ops and DevOps at SysCloud. Deep expertise in AWS, PostgreSQL, and multi-cloud SaaS platforms — focused on application scalability, performance, availability, fault tolerance, and cost optimization. AWS Certified Developer | Microsoft Certified | GenAI enthusiast.`,
  avatar: avatar,
  resumeUrl: "/Profile.pdf",
  phone: "+91 89107 42101",
  socials: [
    { name: "Email", href: "mailto:rajarsi3997@gmail.com", slug: "Gmail" },
    { name: "GitHub", href: "https://github.com/RajarsiGit", slug: "Github" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rajarsi-saha-2709a297",
      slug: "FaLinkedin",
    },
  ],

  // Flat skills list (used by search index)
  skills: [
    "PostgreSQL",
    "AWS RDS",
    "Multi-Tenant Management",
    "IT Cost Optimization",
    "GraphQL / PostGraphile",
    "Terraform",
    "Liquibase",
    "Azure DevOps",
    "Application Security",
    "GenAI",
    "PgBouncer",
    "pg_repack",
    "AWS Lambda",
    "AWS S3",
    "Jenkins",
    "AI Agents",
    "AWS DMS",
    "Claude API",
    "MCP Servers",
  ],

  // Grouped skills with brand slugs for icons (used by Skills section)
  skillGroups: [
    {
      label: "Databases & Data",
      color: "blue",
      skills: [
        { name: "PostgreSQL", slug: "Postgresql" },
        { name: "AWS RDS / Aurora", slug: null },
        { name: "DynamoDB", slug: "FaAws" },
        { name: "MS SQL Server", slug: "FaMicrosoft" },
        { name: "AWS DMS", slug: "FaAws" },
        { name: "PgBouncer", slug: null },
        { name: "RDS Proxy", slug: null },
        { name: "pg_partman", slug: null },
      ],
    },
    {
      label: "Cloud & DevOps",
      color: "orange",
      skills: [
        { name: "AWS", slug: "FaAws" },
        { name: "AWS Lambda", slug: "FaAws" },
        { name: "AWS S3", slug: "FaAws" },
        { name: "Terraform", slug: "Terraform" },
        { name: "Liquibase", slug: "Liquibase" },
        { name: "Jenkins", slug: "Jenkins" },
      ],
    },
    {
      label: "Backend & APIs",
      color: "violet",
      skills: [
        { name: "GraphQL", slug: "Graphql" },
        { name: "PostGraphile", slug: null },
        { name: "PL/pgSQL", slug: null },
        { name: "Node.js", slug: "Nodedotjs" },
        { name: "AWS Cognito", slug: "FaAws" },
        { name: "AWS SQS", slug: "FaAws" },
      ],
    },
    {
      label: "Architecture & Security",
      color: "emerald",
      skills: [
        { name: "Multi-Tenant SaaS", slug: null },
        { name: "Row-Level Security", slug: null },
        { name: "Cost Optimization", slug: null },
        { name: "Application Security", slug: null },
        { name: "CI/CD Pipelines", slug: null },
      ],
    },
    {
      label: "Emerging Tech",
      color: "rose",
      skills: [
        { name: "GenAI / LLMs", slug: null },
        { name: "AI Agents", slug: null },
        { name: "Claude API", slug: null },
        { name: "MCP Servers", slug: null },
        { name: "Prompt Engineering", slug: null },
        { name: "Claude Code", slug: "Anthropic" },
      ],
    },
  ],

  highlights: [
    { label: "Years at SysCloud", value: yearsFrom("2021-01-01") },
    { label: "PostgreSQL DB Servers Managed", value: "40+" },
    { label: "Cloud Cost Saved (Year)", value: "$228K" },
    { label: "Data Under Management", value: "500+ TB" },
    { label: "Engineers Led (DAL Team)", value: "9" },
    { label: "Cross-Training User Stories Authored", value: "128" },
  ],

  experience: [
    {
      role: "Technical Architect",
      company: "SysCloud",
      period: "May 2025 — Present",
      bullets: [
        "Driving cost optimization to ensure efficient cloud resource utilization.",
        "Leading performance optimization for faster, more reliable systems.",
        "Architecting resilient and secure platforms for system stability.",
        "Continuously evolving SysCloud's technology to meet future demands.",
      ],
    },
    {
      role: "Lead Engineer",
      company: "SysCloud",
      period: "May 2024 — August 2025",
      bullets: [
        "Built Meta Data Layer Framework to scale multi-cloud SaaS backup by auto-generating SQL and GraphQL queries.",
        "Integrated PostGraphile to deliver up to 60% better frontend performance vs REST APIs with MS SQL Server.",
        "Managed Liquibase CI/CD pipelines across 1500+ PostgreSQL databases and multiple AWS regions.",
        "Optimized AWS infrastructure (instance sizes, storage) and migrated from Aurora Serverless to RDS, saving $200–$250/month.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "SysCloud",
      period: "June 2023 — May 2024",
      bullets: [
        "Developed optimized PostgreSQL queries with continuous maintenance and security, leveraging AWS RDS & EnterpriseDB.",
        "Assisted in building the Infra Config Framework using Terraform for rapid cloud infrastructure deployments.",
        "Completed AWS Certified Developer Associate and Microsoft Certified Azure Fundamentals.",
      ],
    },
    {
      role: "Software Engineer",
      company: "SysCloud",
      period: "May 2021 — June 2023",
      bullets: [
        "Built foundational components of the Meta Data Layer Framework for multi-cloud SaaS application backup.",
        "Worked on PostGraphile-based GraphQL web servers in collaboration with Benjie Gillam (creator of PostGraphile).",
        "Set up Liquibase pipelines for PostgreSQL database CI/CD across multiple servers and AWS regions.",
        "Core contributor to the year-long migration of 800+ MSSQL databases from EC2 instances to PostgreSQL on Amazon RDS — designed AWS DMS replication workflows and orchestrated DynamoDB login record updates for all migrated tenants.",
      ],
    },
    {
      role: "Graphic Designer",
      company: "Happy Dude",
      period: "Dec 2018 — Jan 2021",
      bullets: [
        "Designed visual assets and graphics remotely over a 2+ year engagement.",
        "Developed strong communication skills collaborating across distributed teams.",
      ],
    },
    {
      role: "Subject Expert",
      company: "Chegg Inc.",
      period: "Apr 2020 — May 2020",
      bullets: [
        "Provided subject-matter expertise and answered academic questions for students on the Chegg platform.",
        "Demonstrated strong communication and problem-solving skills under time constraints.",
      ],
    },
    {
      role: "Student Partner",
      company: "Internshala",
      period: "Dec 2018 — Mar 2019",
      bullets: [
        "Represented Internshala on campus, promoting internship and training opportunities to peers.",
        "Built communication and outreach skills through peer engagement initiatives.",
      ],
    },
  ],

  certifications: [
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      abbr: "AZ",
      badgeColor: "blue",
      issued: "2023",
      credentialId: "ce4c0514-60df-4b6f-b5dc-4ef3b1eb8051",
      verifyUrl:
        "https://www.credly.com/badges/ce4c0514-60df-4b6f-b5dc-4ef3b1eb8051",
    },
    {
      name: "AWS Certified Developer — Associate",
      issuer: "Amazon Web Services",
      abbr: "AWS",
      badgeColor: "orange",
      issued: "2023",
      credentialId: "ec64ed4d-9cbb-4438-967a-4f1a47e548b2",
      verifyUrl:
        "https://www.credly.com/badges/ec64ed4d-9cbb-4438-967a-4f1a47e548b2",
    },
    {
      name: "EDB Certified Associate - PostgreSQL 13",
      issuer: "EnterpriseDB",
      abbr: "EDB",
      badgeColor: "teal",
      issued: "2022",
      credentialId: "0f0ad437-ca88-4a87-96ba-ce16b211e13f",
      verifyUrl:
        "https://www.credly.com/badges/0f0ad437-ca88-4a87-96ba-ce16b211e13f",
    },
    {
      name: "Liquibase and the CI/CD Process",
      issuer: "Liquibase",
      abbr: "DB",
      badgeColor: "violet",
      issued: "2023",
      credentialId: "008426aa-0e79-486a-86d1-e2155b2b522c",
      verifyUrl:
        "https://www.credential.net/008426aa-0e79-486a-86d1-e2155b2b522c",
    },
    {
      name: "Getting Started with AWS Machine Learning",
      issuer: "Coursera",
      abbr: "ML",
      badgeColor: "orange",
      issued: "2023",
      credentialId: "2UWG75943DWH",
      verifyUrl:
        "https://www.coursera.org/account/accomplishments/verify/2UWG75943DWH",
    },
    {
      name: "Agentic AI Fundamentals: Architectures, Frameworks, and Applications",
      issuer: "LinkedIn Learning",
      abbr: "AI",
      badgeColor: "blue",
      issued: "2026",
      credentialId:
        "8a439bc94c7636d007629ef73c9f46fa64127e390093a34423a77303e8f01123",
      verifyUrl:
        "https://www.linkedin.com/learning/certificates/8a439bc94c7636d007629ef73c9f46fa64127e390093a34423a77303e8f01123",
    },
  ],

  leadership: [
    {
      title: "DAL Team Lead — 9-Person Engineering Team",
      period: "May 2025 — Present",
      bullets: [
        "Lead sprint planning, task breakdown, and technical direction for a 9-person Data Access Layer team across PostgreSQL, GraphQL, and AWS infrastructure domains.",
        "Authored weekly DAL progress reports covering sprint velocity, incident status, hiring progress, and infrastructure health — distributed to engineering leadership every week.",
        "Led Q2 2026 feature assignment planning with VP of Engineering — mapping team capacity against the full product roadmap.",
        "Conducted formal design gate reviews for all Liquibase schema migrations before production deployment across 1,500+ PostgreSQL databases.",
      ],
    },
    {
      title: "Senior Database Engineer Hiring Pipeline",
      period: "November 2025 — March 2026",
      bullets: [
        "Owned end-to-end hiring for the Senior Database Platform & Performance Engineer role — LinkedIn shortlisting, Mettl assessment design, take-home evaluation, and 7+ Round 1 technical interviews.",
        "Designed the technical interview question set and assessment criteria for PostgreSQL performance engineering candidates.",
      ],
    },
    {
      title: "External Security Audit Representation",
      period: "January 2026",
      bullets: [
        "Represented the DAL team in a formal external security assessment — presenting data access architecture, RLS policies, IAM posture, and multi-tenant isolation controls to auditors.",
      ],
    },
    {
      title: "DAL Knowledge Pack — Engineering Enablement Program",
      period: "Q2 2026",
      bullets: [
        "Authored 32 Feature work items with 128 child User Stories spanning L1–L4 ownership tiers, building a structured cross-training path for the full DAL team across PostgreSQL, GraphQL, and AWS infrastructure domains.",
        "Converted Fireflies-recorded DBA Drill sessions into Markdown operational runbooks (connection exhaustion, locks/deadlocks, RDS monitoring, autovacuum/bloat) published to the DAL AI Runbooks wiki.",
        "Built the onboarding presentation and credential provisioning guide for a new Junior DBA hire, covering the complete SysCloud DAL stack.",
      ],
    },
  ],

  contributions: [
    {
      project: "PostGraphile",
      role: "Collaborator",
      description:
        "Worked directly with Benjie Gillam (creator of PostGraphile) on GraphQL web server architecture and production deployment for SysCloud's multi-cloud SaaS backup platform.",
      url: "https://www.graphile.org/postgraphile/",
      tags: ["GraphQL", "Node.js", "PostgreSQL", "Open Source"],
    },
  ],

  writings: [
    {
      title: "Implementing Row-Level Security on Billion-Row Hash-Partitioned PostgreSQL Tables",
      type: "Medium Article",
      description:
        "Deep dive into applying PostgreSQL Row-Level Security on billion-row hash-partitioned tables — covering partition-aware policy design, performance implications of RLS on large datasets, and production lessons from SysCloud's multi-tenant data architecture.",
      url: "https://medium.com/datadriveninvestor/implementing-row-level-security-on-billion-row-hash-partitioned-postgresql-tables-f617ce5045ef",
      date: "April 2026",
      tags: [
        "PostgreSQL",
        "Row-Level Security",
        "Hash Partitioning",
        "Multi-Tenant",
        "Performance",
      ],
    },
    {
      title: "Indexes don't lie — but they don't tell the whole story either",
      type: "LinkedIn Article",
      description:
        "Deep dive into PostgreSQL performance work — analyzing execution plans, tuning materialized views, chasing down GroupAggregate bottlenecks, investigating JSONB expansion costs, and watching queries flip between Index Scans and Seq Scans with a single schema change.",
      url: "https://www.linkedin.com/pulse/indexes-dont-lie-they-tell-whole-story-either-rajarsi-saha",
      date: "March 2026",
      tags: [
        "PostgreSQL",
        "Index Scan",
        "Seq Scan",
        "Execution Plans",
        "Performance",
      ],
    },
    {
      title: "An Insight Into Genetic Algorithms",
      type: "Medium Article",
      description:
        "Explains genetic algorithms as search-based optimization techniques inspired by natural selection. Covers selection, crossover, and mutation operations with a Python implementation example.",
      url: "https://medium.datadriveninvestor.com/an-insight-into-genetic-algorithms-93428953c098",
      date: "September 2020",
      tags: [
        "Genetic Algorithms",
        "Machine Learning",
        "Optimization",
        "Python",
        "Evolutionary Computation",
      ],
    },
    {
      title: "A Shallow Dive Into Universal Usability",
      type: "Medium Article",
      description:
        "Explores universal usability — the idea that interfaces should be accessible and intuitive for all users regardless of technical experience, age, or ability. Examines how universal design principles apply across GUIs, voice, and gesture-based interfaces.",
      url: "https://medium.com/@rajarsi3997/a-shallow-dive-into-universal-usability-382b9e62b17b",
      date: "September 2020",
      tags: ["Usability", "UX", "Accessibility", "HCI", "Interface Design"],
    },
  ],

  projects: [
    {
      name: "MSSQL → PostgreSQL Migration — 800+ Databases",
      tagline:
        "Year-long migration of 800+ MSSQL databases from EC2 instances to PostgreSQL on Amazon RDS. Designed AWS DMS replication workflows and orchestrated DynamoDB login record updates across all migrated tenants.",
      link: "#",
      category: "Database",
      tags: ["AWS DMS", "PostgreSQL", "MS SQL Server", "DynamoDB", "Amazon RDS"],
    },
    {
      name: "PostgreSQL Performance Engineering",
      tagline:
        "Query optimization, materialized views, execution plan analysis, and RLS on billion-row hash-partitioned tables.",
      link: "#",
      category: "Database",
      tags: ["PostgreSQL", "RLS", "Hash Partitioning", "EXPLAIN ANALYZE"],
    },
    {
      name: "RDS Fleet Right-Sizing & Graviton Migration",
      tagline:
        "Migrated 15+ RDS instances from Graviton2 to Graviton4 across 7 regions with Database Savings Plans.",
      link: "#",
      category: "Cloud",
      tags: ["AWS RDS", "Graviton4", "Cost Optimization", "Multi-Region"],
    },
    {
      name: "Meta Data Layer Framework",
      tagline:
        "Auto-generates SQL & GraphQL queries to scale multi-cloud SaaS backup across cloud platforms.",
      link: "#",
      category: "Backend",
      tags: ["PostgreSQL", "GraphQL", "Multi-Cloud", "SaaS"],
    },
    {
      name: "RBAC Architecture Migration & MVW Performance",
      tagline:
        "73% full-stack refresh improvement and 97% addon aggregation gain (7m 41s → 15s) on 1.2M-row production tables.",
      link: "#",
      category: "Performance",
      tags: ["PostgreSQL", "RBAC", "Materialized Views", "1.2M rows"],
    },
    {
      name: "ACF & ODD/EVEN Queue Population System",
      tagline:
        "5-layer DynamoDB availability model, ODD/EVEN SQS pipeline, PL/pgSQL triggers, ACFAnalyzer Lambda, and daily health script.",
      link: "#",
      category: "Infrastructure",
      tags: ["DynamoDB", "SQS", "PL/pgSQL", "Lambda"],
    },
    {
      name: "RDS Cost Optimization — 6-Month Spend Analysis",
      tagline:
        "$672K spend across 89 usage types & 7 regions. GP3 Storage (53%) identified as primary lever; 17% MoM cost reduction achieved.",
      link: "#",
      category: "Cloud",
      tags: ["AWS RDS", "Cost Analysis", "GP3", "7 Regions"],
    },
    {
      name: "pg_repack Fleet Bloat Recovery — 122+ TB",
      tagline:
        "Zero-downtime table bloat recovery across 7-region RDS fleet using pg_repack. Recovered 122+ TB of dead tuple bloat during business hours with no customer impact.",
      link: "#",
      category: "Database",
      tags: ["PostgreSQL", "pg_repack", "Zero-Downtime", "7 Regions"],
    },
    {
      name: "AI Hunters — Autonomous PostgreSQL Monitor",
      tagline:
        "Designed the DAL AI Log Monitoring platform — a cron-based async system spanning 15 planned hunter modules across restore, export, backup, PgBouncer, PostGraphile, and S3 health domains. The slow-queries hunter alone dispatches Claude as a live DB investigator with 35+ health checks (autovacuum, bloat, XID wraparound, replica lag), 5-min polling, and MCP-integrated tooling (CloudWatch, Performance Insights, PgBouncer, pgDBA, Grafana, Sentry).",
      link: "#",
      category: "AI / Infrastructure",
      tags: ["Claude API", "MCP Servers", "PostgreSQL", "AI Agents", "AWS RDS"],
    },
    {
      name: "Intelligence Plane — AI Agent Framework",
      tagline:
        "Contributed DAL/data layer architecture to SysCloud's Intelligence Plane AI Agent Framework — defining how agents interact with the platform's data infrastructure for next-gen AI-powered product capabilities.",
      link: "#",
      category: "AI / Architecture",
      tags: ["AI Agents", "LLMs", "Data Architecture", "PostgreSQL"],
    },
    {
      name: "PgBouncer Weighted Pool Allocation",
      tagline:
        "Designed and rolled out weighted pool allocation for PgBouncer across all 7 production regions — dynamically favouring healthier DB nodes to reduce connection saturation and improve query throughput for 5,000+ customers.",
      link: "#",
      category: "Infrastructure",
      tags: ["PgBouncer", "PostgreSQL", "Connection Pooling", "7 Regions"],
    },
    {
      name: "Aurora PostgreSQL Migration Proposal",
      tagline:
        "Authored full architecture for migrating 12 production Trans DB servers (384.6 TB) to Aurora PostgreSQL with dedicated read replicas — 3-year TCO model and HA failover strategy.",
      link: "#",
      category: "Architecture",
      tags: ["Aurora PostgreSQL", "Read Replicas", "HA", "Cost Modelling"],
    },
    {
      name: "Cognito User Management Enhancements",
      tagline:
        "Enhanced AWS Cognito user management layer with improved edge-case handling across user creation, update, and deletion flows — reducing silent auth failures across the platform's authentication surface.",
      link: "#",
      category: "Platform",
      tags: ["AWS Cognito", "Authentication", "Node.js", "IAM"],
    },
    {
      name: "PgBouncer vs RDS Proxy Cost Analysis",
      tagline:
        "Ran a detailed cost and architecture comparison between PgBouncer and AWS RDS Proxy across the 22-instance us-east-1 fleet, confirming PgBouncer as the substantially cheaper option and informing the team's pooling strategy.",
      link: "#",
      category: "Cloud",
      tags: ["PgBouncer", "RDS Proxy", "Cost Analysis", "AWS"],
    },
  ],
};

export default profile;
