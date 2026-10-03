import { yearsFrom } from "../utils/yearsFrom";
import avatar from "../assets/images/9da59552-da8c-4924-a829-35409af9ea7e.jpg";

const profile = {
  name: "Rajarsi Saha",
  pronouns: "He/Him",
  title: "Technical Architect",
  company: "SysCloud",
  location: "Hyderabad, Telangana, India",
  summary: `Technical Architect with ${yearsFrom("2021-01-01")} years at SysCloud, designing the PostgreSQL, GraphQL and AWS data layer behind a multi-cloud SaaS backup platform with 500+ TB under management. I lead a 9-engineer team and focus on scalability, security, availability and cost — from large-scale database migrations and row-level security to AI-driven monitoring. Hands-on across TypeScript/NestJS services, KMS-backed encryption, ABAC authorization and CDC search pipelines, with a track record of cutting cloud spend and recovering 100+ TB of table bloat with zero downtime. I also write and mentor on PostgreSQL performance and help shape SysCloud's AI agent platform. AWS Certified Developer | Microsoft Certified | GenAI enthusiast.`,
  avatar: avatar,
  resumeUrl: "/Profile.pdf",
  phone: "+91 89107 42101",
  portfolioUrl: "https://personal-portfolio-flame-iota.vercel.app/",
  socials: [
    { name: "Email", href: "mailto:rajarsi3997@gmail.com", slug: "Gmail" },
    { name: "GitHub", href: "https://github.com/RajarsiGit", slug: "Github" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rajarsi-saha-2709a297",
      slug: "FaLinkedin",
    },
    {
      name: "Portfolio",
      href: "https://personal-portfolio-flame-iota.vercel.app/",
      slug: "FaGlobe",
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
    "OpenSearch Serverless",
    "AWS Kinesis",
    "CDC Pipelines",
    "TypeScript",
    "NestJS",
    "Docker",
    "AWS KMS",
    "AWS Step Functions",
    "AWS ECS / Fargate",
    "ABAC",
    "Row-Level Security",
    "AWS Bedrock",
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
        { name: "OpenSearch Serverless", slug: "Opensearch" },
        { name: "Parquet", slug: "Apacheparquet" },
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
        { name: "AWS Kinesis", slug: "FaAws" },
        { name: "CDC Pipelines", slug: null },
        { name: "AWS KMS", slug: "FaAws" },
        { name: "AWS Step Functions", slug: "FaAws" },
        { name: "AWS ECS / Fargate", slug: "FaAws" },
        { name: "Docker", slug: "Docker" },
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
        { name: "TypeScript", slug: "Typescript" },
        { name: "NestJS", slug: "Nestjs" },
        { name: "Jest", slug: "Jest" },
      ],
    },
    {
      label: "Architecture & Security",
      color: "emerald",
      skills: [
        { name: "Multi-Tenant SaaS", slug: null },
        { name: "Row-Level Security", slug: null },
        { name: "ABAC", slug: null },
        { name: "Encryption (KMS / AES-256)", slug: null },
        { name: "JWT / OAuth Authentication", slug: null },
        { name: "Least-Privilege IAM", slug: null },
        { name: "Secrets Management", slug: null },
        { name: "Audit Logging", slug: null },
        { name: "Zero-Downtime Migrations", slug: null },
        { name: "Event-Driven Architecture", slug: null },
        { name: "High Availability & Fault Tolerance", slug: null },
        { name: "Performance Engineering", slug: null },
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
        { name: "AWS Bedrock", slug: "FaAws" },
        { name: "LLM-Assisted Code Generation", slug: null },
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
        "Driving cost optimization across the cloud estate to ensure efficient resource utilization, from RDS fleet rightsizing and storage reclamation to savings-plan coverage.",
        "Leading performance optimization for faster, more reliable systems, covering PostgreSQL query tuning, materialized view refresh, connection pooling and fleet-wide bloat recovery.",
        "Architecting resilient and secure platforms for system stability, spanning multi-tenant PostgreSQL, GraphQL data access, AWS infrastructure and AI-assisted monitoring of the database fleet.",
        "Continuously evolving SysCloud's technology to meet future demands, shaping the data layer architecture behind next-generation AI agent capabilities across the platform.",
        "DAL Team Lead for a 9-person Data Access Layer team across PostgreSQL, GraphQL and AWS — sprint planning, weekly progress reports, Q2 2026 roadmap planning with the VP of Engineering, and design gate reviews for Liquibase migrations across 1,500+ databases.",
        "Led the RDS-to-Aurora PostgreSQL rollout across ~15 instances (~400TB) — built the snapshot-restore/promotion runbook, validated PgBouncer compatibility, and staged a TDL → trial → paid rollout for the top 25 databases (~150TB).",
        "Architected the RDS → DMS → Kinesis → OSI → OpenSearch Serverless CDC pipeline for two billion-row PostgreSQL tables to enable full-text search, and root-caused an OSI publication defect that led to an AWS Support escalation.",
      ],
    },
    {
      role: "Lead Engineer",
      company: "SysCloud",
      period: "June 2024 — May 2025",
      bullets: [
        "Integrated PostGraphile to deliver up to 60% better frontend performance versus REST APIs on MS SQL Server, replacing hand-written endpoints with an auto-generated GraphQL layer over PostgreSQL.",
        "Designed KMS-backed AES-256 encryption of QuickBooks Online OAuth tokens across Step Functions, Lambda, DynamoDB and a PostGraphile decryption layer, passing Intuit's Marketplace review (~30% trial sign-up lift reported; KMS calls cut ~70% via caching).",
        "Managed Liquibase CI/CD pipelines across 1500+ PostgreSQL databases and multiple AWS regions, giving schema changes a consistent, reviewable path to production.",
        "Optimized AWS infrastructure by rightsizing instances and storage, and migrated from Aurora Serverless to RDS to lower costs, saving $200–$250/month.",
        "Migrated 15+ RDS instances from Graviton2 to Graviton4 across 7 regions and covered them with Database Savings Plans to lower the fleet's compute cost.",
        "Analyzed six months of RDS spend ($672K across 89 usage types and 7 regions), identified GP3 storage (53%) as the main cost lever, and achieved a 17% month-over-month cost reduction.",
        "Enhanced the AWS Cognito user management layer with better edge-case handling across user creation, update and deletion flows, reducing silent auth failures across the platform's authentication surface.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "SysCloud",
      period: "June 2023 — May 2024",
      bullets: [
        "Developed optimized PostgreSQL queries with continuous maintenance and security, leveraging AWS RDS and EnterpriseDB to keep the multi-tenant data layer fast and well maintained.",
        "Built a distributed archival service that shards multi-tenant PostgreSQL tables into Parquet files on customer S3 buckets, using SKIP LOCKED job claiming across ECS tasks and forked worker pools (est. 15–20x throughput).",
        "Built request-level ABAC for the multi-tenant GraphQL server — declarative JSON mappers check role, user settings and variable ownership per operation, with LRU-cached roles and typed 403 errors.",
        "Extended the Cloud Config Framework, which auto-generates SQL and GraphQL queries, and built cloudgen, a TypeScript CLI that onboards new SaaS clouds (Box, Shopify, Xero) with Claude on Bedrock-assisted config generation.",
        "Built a graph-based typeahead Smart Search service (NestJS) that resolves multi-word queries into related entities via PostgreSQL node/edge materialized views, with ranked results and ABAC/JWT-secured access.",
        "Built and maintained Flow Control Automation (ACF), where a config-driven rule engine turns CloudWatch, log and DB events into real-time availability scores in DynamoDB that gate downstream workloads, with per-tenant kill-switches.",
        "Assisted in building the Infra Config Framework using Terraform for rapid, repeatable cloud infrastructure deployments.",
        "Completed AWS Certified Developer Associate and Microsoft Certified Azure Fundamentals, broadening cloud development and platform expertise alongside project work.",
      ],
    },
    {
      role: "Software Engineer",
      company: "SysCloud",
      period: "Jan 2021 — May 2023",
      bullets: [
        "Built foundational components of the Cloud Config Framework for multi-cloud SaaS application backup, laying the groundwork for generating SQL and GraphQL queries per cloud.",
        "Worked on PostGraphile-based GraphQL web servers in collaboration with Benjie Gillam (creator of PostGraphile) to power the platform's GraphQL data layer.",
        "Set up Liquibase pipelines for PostgreSQL database CI/CD across multiple servers and AWS regions, standardizing how schema changes are deployed.",
        "Core contributor to the year-long migration of 800+ MSSQL databases from EC2 to PostgreSQL on Amazon RDS, designing AWS DMS replication workflows and DynamoDB login record updates for all migrated tenants.",
        "Rolled out four PostGraphile servers with PgBouncer pooling, moved the MailRealTime and DriveRealTime databases from Aurora Serverless to provisioned clusters, and built the data layer for Google Classroom sync.",
        "Contributed to the PostGraphile/NestJS data access layer over Aurora PostgreSQL — the cm-runner-plus 2.0 workflow engine (370+ workflows), multi-tenant DB routing, RDS + OpenSearch archive retrieval, and layered security.",
        "Worked on a containerized PgBouncer sidecar on ECS/Fargate that KMS-decrypts multi-tenant credentials from Secrets Manager/SSM at startup, with per-role connection limits and a CodeBuild → ECR pipeline.",
        "Built and maintained an ECS service that populates SQS queues with backup and daily-sync jobs for six clouds, using odd/even queue rotation, trial/paid priority queues and SSM-toggled Multi-Tenant, Canary, UAT and Normal flows.",
      ],
    },
    {
      role: "Graphic Designer",
      company: "Happy Dude",
      period: "Dec 2018 — Jan 2021",
      bullets: [
        "Designed visual assets and graphics remotely over a 2+ year engagement, delivering work to distributed teams without in-person coordination.",
        "Developed strong communication skills collaborating across distributed teams, keeping design work aligned through remote feedback.",
      ],
    },
    {
      role: "Subject Expert",
      company: "Chegg Inc.",
      period: "Apr 2020 — May 2020",
      bullets: [
        "Provided subject-matter expertise and answered academic questions for students on the Chegg platform, explaining concepts clearly in writing.",
        "Demonstrated strong communication and problem-solving skills while answering questions under tight time constraints.",
      ],
    },
    {
      role: "Student Partner",
      company: "Internshala",
      period: "Dec 2018 — Mar 2019",
      bullets: [
        "Represented Internshala on campus, promoting internship and training opportunities to peers and encouraging them to apply.",
        "Built communication and outreach skills through peer engagement initiatives and campus promotion.",
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
      name: "PostGraphile & PgBouncer Server Rollout",
      tagline:
        "Stood up four PostGraphile GraphQL servers with PgBouncer pooling in 2022 and contributed to the NestJS/TypeScript data access layer over Aurora PostgreSQL, including the workflow engine, multi-tenant DB routing and layered security. Also worked on the ECS/Fargate PgBouncer sidecar that KMS-decrypts tenant credentials at startup.",
      link: "#",
      category: "Backend",
      tags: ["PostGraphile", "GraphQL", "NestJS", "TypeScript", "PgBouncer", "PostgreSQL", "Aurora", "AWS ECS/Fargate", "KMS"],
    },
    {
      name: "Aurora Serverless → Cluster Migration",
      tagline:
        "Migrated the MailRealTime and DriveRealTime databases from Aurora Serverless to provisioned clusters in 2022, ran post-migration performance validation, and provisioned new RDS servers with Secrets Manager integration.",
      link: "#",
      category: "Cloud",
      tags: ["Aurora", "Amazon RDS", "Secrets Manager", "Migration"],
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
      name: "Row-Level Security for Multi-Tenant PostgreSQL",
      tagline:
        "Designed and rolled out PostgreSQL RLS across a per-tenant fleet serving ~10M end users — JWT claims from NestJS drive PL/pgSQL helpers and three-tier policies on 25+ tables via Liquibase, with no per-user DB credentials. Extended as a retention guardrail for S3 Tables (Iceberg) migrations.",
      link: "#",
      category: "Security",
      tags: ["PostgreSQL", "RLS", "PL/pgSQL", "PostGraphile", "NestJS", "AWS Cognito", "Liquibase"],
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
      name: "Cloud Config Framework & CLI",
      tagline:
        "Metadata-driven framework that auto-generates SQL & GraphQL queries so each new cloud plugs into the same backup data layer, plus an interactive TypeScript CLI (cloudgen) that onboards clouds like Box, Shopify and Xero — generating DAL schemas, backup/restore service code and dashboard metadata, with Claude on Bedrock extracting API definitions and an ANTLR4 parser driving DDL.",
      link: "#",
      category: "Backend",
      tags: ["PostgreSQL", "GraphQL", "TypeScript", "Node.js", "ANTLR4", "AWS Bedrock", "Claude", "Multi-Cloud"],
    },
    {
      name: "Table Vertical Sharding",
      tagline:
        "Distributed archival pipeline that moves large multi-tenant PostgreSQL tables to Parquet on customer S3 buckets — SKIP LOCKED job claiming across 4–5 ECS tasks, forked worker pools (estimated 15–20x throughput), STS cross-account access and encrypted credential caching.",
      link: "#",
      category: "Infrastructure",
      tags: ["TypeScript", "Node.js", "PostgreSQL", "AWS S3", "ECS", "Parquet", "Docker"],
    },
    {
      name: "Attribute-Based Access Control (ABAC) for GraphQL",
      tagline:
        "Request-level authorization for a multi-tenant GraphQL server — declarative JSON mappers define required role settings, variable-ownership checks and custom validators, with LRU-cached roles and settings, per-tenant JWT caching and typed 403 errors. Rules change by editing JSON, not validator code.",
      link: "#",
      category: "Security",
      tags: ["TypeScript", "NestJS", "GraphQL", "JWT", "ABAC", "LRU Cache"],
    },
    {
      name: "QuickBooks OAuth Token Encryption (Intuit Marketplace)",
      tagline:
        "KMS-backed AES-256 encryption of QuickBooks Online OAuth refresh tokens and realm IDs to pass Intuit's Marketplace security review — Step Functions connection flow, HMAC-hashed lookup keys, a transparent PostGraphile decryption layer, key rotation, CloudTrail auditing and a revoke-on-disconnect flow. In-memory caching cut KMS calls by up to ~70%; the listing brought an internally reported ~30% lift in trial sign-ups and ~20% higher Marketplace referral conversion.",
      link: "#",
      category: "Security",
      tags: ["AWS KMS", "Step Functions", "Lambda", "DynamoDB", "PostGraphile", "TypeScript"],
    },
    {
      name: "Smart Search — Graph-Based Typeahead",
      tagline:
        "Typeahead search service that resolves multi-word queries across Account, Domain, User, Cloud, App and Object entities by traversing PostgreSQL node/edge materialized views — partial-term matching, concatenated-query fallback, ranked and grouped results, per-tenant LRU-cached read-only pools, and JWT/ABAC-secured access.",
      link: "#",
      category: "Backend",
      tags: ["TypeScript", "NestJS", "PostgreSQL", "Materialized Views", "Graph Traversal", "Jest"],
    },
    {
      name: "Flow Control Automation (ACF)",
      tagline:
        "Flow-control and rate-limiting platform for multi-region cloud backup — a Collector → Aggregator → Watcher pipeline ingests CloudWatch metrics, logs and DB triggers, and a config-driven JSON rule engine with SSM-managed thresholds writes real-time availability scores to DynamoDB. Includes per-tenant kill-switches and runs as PM2 services and Lambda.",
      link: "#",
      category: "Infrastructure",
      tags: ["TypeScript", "Node.js", "AWS Lambda", "DynamoDB", "CloudWatch", "SSM", "PM2", "Docker"],
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
      name: "Incremental Queue Population Service",
      tagline:
        "Containerized ECS service that populates AWS SQS queues with backup and daily-sync jobs for six cloud platforms (Google Workspace, Office 365, HubSpot, Salesforce, Slack, QuickBooks Online) — odd/even queue rotation with trial and paid priority queues, four SSM-toggled execution flows (Multi-Tenant, Canary, UAT, Normal), parallel child processes, and retry, monitoring and alerting safeguards.",
      link: "#",
      category: "Infrastructure",
      tags: ["Node.js", "TypeScript", "AWS ECS", "SQS", "DynamoDB", "PostgreSQL", "Docker"],
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
      category: "AI",
      tags: ["Claude API", "MCP Servers", "PostgreSQL", "AI Agents", "AWS RDS"],
    },
    {
      name: "Intelligence Plane — AI Agent Framework",
      tagline:
        "Contributed DAL/data layer architecture to SysCloud's Intelligence Plane AI Agent Framework — defining how agents interact with the platform's data infrastructure for next-gen AI-powered product capabilities.",
      link: "#",
      category: "AI",
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
      name: "RDS-to-Aurora Migration Execution — 400TB Fleet",
      tagline:
        "Led execution of the RDS-to-Aurora rollout across ~15 RDS instances (~400TB): built the snapshot-restore/promotion runbook, diagnosed abnormal Aurora I/O back to MVW refresh frequency, validated PgBouncer compatibility over RDS Proxy, and staged a TDL → trial → paid rollout targeting the top 25 databases (~150TB) by size.",
      link: "#",
      category: "Architecture",
      tags: ["Aurora PostgreSQL", "PgBouncer", "Migration", "400TB"],
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
    {
      name: "OpenSearch Serverless NextGen CDC Migration",
      tagline:
        "Evaluated native OSI-to-RDS CDC and DMS-to-OpenSearch-Serverless paths for streaming two billion-row PostgreSQL tables into OpenSearch NextGen for full-text/fuzzy search, ruled both out on pipeline-per-database scaling and missing DMS target support, and landed on an RDS → DMS → Kinesis → OSI → OpenSearch Serverless architecture — also root-caused and drove AWS Support engagement on an OSI publication-identifier defect blocking native CDC.",
      link: "#",
      category: "Architecture",
      tags: ["OpenSearch Serverless", "AWS DMS", "Kinesis", "CDC", "PostgreSQL"],
    },
  ],
};

export default profile;
