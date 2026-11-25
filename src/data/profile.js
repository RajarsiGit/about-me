import { yearsFrom } from "../utils/yearsFrom";
import avatar from "../assets/images/9da59552-da8c-4924-a829-35409af9ea7e.jpg";

const profile = {
  name: "Rajarsi Saha",
  pronouns: "He/Him",
  title: "Technical Architect",
  company: "SysCloud",
  location: "Hyderabad, Telangana, India",
  summary: `Technical Architect with ${yearsFrom("2021-01-01")} years at SysCloud, progressing from hands-on backend and database engineering to leading a 9-engineer Data Access Layer team. I architect and operate a multi-tenant SaaS backup platform managing 500+ TB across 7 AWS regions and 40+ PostgreSQL servers, owning data access architecture, production change governance and technical mentorship, with 3 years of on-call incident response leadership. Hands-on across AWS data engineering (S3 Tables, Apache Iceberg, Glue, Athena), TypeScript/NestJS and GraphQL services, KMS-backed encryption and ABAC/RLS authorization, and AI engineering tools — remote MCP services, a 31-agent monitoring fleet and RAG/pgvector workflows on Amazon Bedrock. Track record of cutting cloud spend and reclaiming 122+ TB of PostgreSQL bloat with no customer downtime. I also write and mentor on PostgreSQL performance and help shape SysCloud's AI agent platform. AWS Certified Developer & AI Practitioner | EDB Advanced PostgreSQL | GenAI enthusiast.`,
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
    "pgvector",
    "Python",
    "JavaScript",
    "AWS S3 Tables",
    "RDS Proxy",
    "AWS CDK",
    "Grafana",
    "CloudWatch",
    "Langflow",
    "RAG",
    "FastMCP",
    "Amazon Aurora",
    "DynamoDB",
    "Apache Iceberg",
    "AWS Glue",
    "PySpark",
    "Athena",
    "Lake Formation",
    "AWS Batch",
    "AWS SQS",
    "EventBridge",
    "API Gateway",
    "AWS Cognito",
    "Secrets Manager",
    "IAM Database Authentication",
    "Logical Replication",
    "pg_partman",
    "postgres_fdw",
    "Performance Insights",
    "Node.js",
    "REST",
    "OAuth 2.0",
    "Bash",
    "PM2",
    "SonarQube",
    "Trivy",
    "CodeBuild / CodePipeline",
    "Elasticsearch / Kibana",
    "Incident Response",
    "FinOps",
    "Titan Embeddings",
    "Tool Calling",
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
        { name: "pgvector", slug: null },
        { name: "S3 Tables / Apache Iceberg", slug: null },
        { name: "OpenSearch Serverless", slug: "Opensearch" },
        { name: "Parquet", slug: "Apacheparquet" },
        { name: "AWS Glue", slug: "FaAws" },
        { name: "PySpark", slug: "Apachespark" },
        { name: "Amazon Athena", slug: "FaAws" },
        { name: "Lake Formation", slug: "FaAws" },
        { name: "Logical Replication", slug: null },
        { name: "pg_repack", slug: null },
        { name: "postgres_fdw", slug: null },
        { name: "B-tree / GIN / Trigram Indexing", slug: null },
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
        { name: "AWS CDK", slug: "FaAws" },
        { name: "CodeBuild / CodePipeline", slug: "FaAws" },
        { name: "Grafana", slug: "Grafana" },
        { name: "CloudWatch", slug: "FaAws" },
        { name: "Git", slug: "Git" },
        { name: "AWS Batch", slug: "FaAws" },
        { name: "EventBridge", slug: "FaAws" },
        { name: "API Gateway", slug: "FaAws" },
        { name: "VPC / PrivateLink / NLB", slug: "FaAws" },
        { name: "Fargate Spot", slug: "FaAws" },
        { name: "Performance Insights", slug: "FaAws" },
        { name: "Elasticsearch", slug: "Elasticsearch" },
        { name: "Kibana", slug: "Kibana" },
        { name: "SonarQube", slug: "Sonarqubeserver" },
        { name: "Trivy", slug: "Trivy" },
        { name: "PM2", slug: "Pm2" },
        { name: "Azure DevOps", slug: "FaMicrosoft" },
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
        { name: "Python", slug: "Python" },
        { name: "JavaScript", slug: "Javascript" },
        { name: "REST / Microservices", slug: null },
        { name: "Bash", slug: "Gnubash" },
        { name: "AWS SNS", slug: "FaAws" },
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
        { name: "IAM Database Authentication", slug: null },
        { name: "Incident Response (Sev-1 / On-Call)", slug: null },
        { name: "Backup & Disaster Recovery", slug: null },
        { name: "Container Hardening", slug: null },
        { name: "Change Governance (CCB)", slug: null },
        { name: "FinOps", slug: null },
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
        { name: "Langflow", slug: null },
        { name: "RAG / Tool Calling", slug: null },
        { name: "FastMCP", slug: null },
        { name: "Titan Embeddings", slug: "FaAws" },
      ],
    },
  ],

  highlights: [
    { label: "Years at SysCloud", value: yearsFrom("2021-01-01") },
    { label: "PostgreSQL DB Servers Managed", value: "40+" },
    { label: "Annualized RDS Cost Savings", value: "$228K" },
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
        "Own Data Access Layer architecture for 500+ TB across 7 AWS regions and 40+ PostgreSQL servers (including 25–40 TB RDS instances) — design reviews, incident response, production change approvals and cost optimization from RDS fleet rightsizing to savings-plan coverage.",
        "Leading performance optimization across PostgreSQL query tuning, B-tree/GIN/trigram indexing, JSONB, materialized view refresh, connection pooling and fleet-wide bloat recovery, including cutting an addon aggregation from 7m 41s to 15s on a 1.2M-row workload.",
        "Architecting resilient and secure platforms for system stability, spanning multi-tenant PostgreSQL, GraphQL data access, AWS infrastructure and AI-assisted monitoring of the database fleet.",
        "Continuously evolving SysCloud's technology to meet future demands, shaping the data layer architecture behind next-generation AI agent capabilities across the platform.",
        "DAL Team Lead for a 9-person Data Access Layer team across PostgreSQL, GraphQL and AWS — sprint planning, weekly progress reports, Q2 2026 roadmap planning with the VP of Engineering, and design gate reviews for Liquibase migrations across 1,500+ databases.",
        "Led the RDS-to-Aurora PostgreSQL modernization in 2 of 6 regions using Aurora replicas and cutover after data migration, and wrote the runbook covering restore, promotion, high availability, replicas and PgBouncer/connection compatibility for the remaining rollout.",
        "Architected a tenant-isolated batch processing platform (Lambda/EventBridge control plane, DynamoDB-cached STS credentials, SQS, AWS Batch/PM2 workers) across thousands of PostgreSQL tenant databases in 7 regions, with incremental sync to S3 Tables and per-tenant OpenSearch Serverless.",
        "Architected the S3 Tables (Apache Iceberg) cold-data migration for billion-row PostgreSQL tables across a ~570 TB fleet using Glue/PySpark, DynamoDB routing and Athena, targeting ~50% RDS storage reduction (~$650K/yr projected), with a CDC backup layer because AWS Backup doesn't cover table buckets.",
        "Built metadata-driven AWS Glue/PySpark migration jobs (~100 customer jobs, parallel JDBC reads up to 200 partitions) with row-count, key-range and dual xxhash64 checksum verification plus DynamoDB delta retries, and Iceberg-to-RDS recovery and write-order maintenance pipelines via CodeBuild.",
        "Implemented IAM, KMS, Lake Formation and tenant-level database access controls, and owned the phased RDS IAM Auth / RDS Proxy release plan (15-minute SigV4 tokens, STS AssumeRole, full TLS verification).",
        "Provisioned VPC-endpoint-isolated OpenSearch Serverless collection groups, ingestion pipelines, data access policies and indexing/search OCUs, and scoped CodeBuild schema pipelines inside VPC subnets and security groups.",
        "Developed a CDC proof of concept (RDS → DMS → Kinesis → OSI → OpenSearch Serverless) for search across billion-row datasets, investigated ingestion constraints and escalated an OSI platform defect to AWS Support (on hold for other priorities); later built a Glue/PySpark backfill job from RDS into OpenSearch Serverless.",
        "Built organization-wide remote Model Context Protocol (MCP) services for PostgreSQL, CloudWatch, Azure DevOps and internal engineering systems, now used across SysCloud engineering; the wider platform supports 15 services and 280+ tools.",
        "Hardened a 31-agent ECS AI monitoring fleet with IAM-authenticated PostgreSQL access, RDS Proxy and 32 automated diagnostic rules, resolving 89% of ~220K diagnoses, opening 245 AI-generated fix PRs, and eliminating token leaks, failed jobs and alert noise.",
        "Used Amazon Bedrock to vectorize internal engineering documentation and Grafana dashboards, enabling vector search from an internal chat application to retrieve actual dashboard queries and data.",
        "Authored operational runbooks for connection exhaustion, deadlocks, autovacuum and bloat, and led investigations into LSN receive/replay replication lag and replication-slot WAL growth.",
        "Delivered 5 Grafana dashboards for SLOs, workflows, authorization, RDS capacity and golden signals, and improved 15+ dashboards covering replica lag, locks, autovacuum and connection saturation.",
      ],
    },
    {
      role: "Lead Engineer",
      company: "SysCloud",
      period: "June 2024 — May 2025",
      bullets: [
        "Builder and lead contributor to the production Meta Data Layer (MDL) framework on PostGraphile, generating SQL and GraphQL for the multi-cloud backup platform and improving frontend performance by up to 60% over the legacy REST/MS SQL Server path.",
        "Built cloudgen, a TypeScript CLI that onboards new SaaS clouds (Box, Shopify, Xero), using Claude on Amazon Bedrock to generate cloud-integration code, SQL and GraphQL configurations.",
        "Designed KMS-backed AES-256 encryption of QuickBooks Online OAuth tokens across Step Functions, Lambda, DynamoDB and a PostGraphile decryption layer, passing Intuit's Marketplace review (~30% trial sign-up lift reported; KMS calls cut ~70% via caching).",
        "Led Sev-1 incident response and AWS Support RCA for a forced anti-wraparound autovacuum and WAL/gp3 IOPS saturation on a multi-tenant RDS PostgreSQL server — coordinating crash recovery and backup isolation, and driving per-table autovacuum tuning and MaximumUsedTransactionIDs / CheckpointLag alerting.",
        "Built and hardened the production Grafana 12.3 platform on AWS ECS (non-root container, 19 baked-in plugins, reduced Trivy findings, runtime Secrets Manager injection) with CodeBuild/ECR versioning, CodePipeline/ASG rollouts and SonarQube PR quality gates.",
        "Investigated PostgreSQL archive table bottlenecks (writes over 5s against a 2–3s target, JSON/TOAST bloat, IOPS/throughput pressure) and documented S3/Parquet archival and ECS/SQS SKIP LOCKED parallelization proposals.",
        "Built an automated pg_repack service for scheduled online bloat cleanup, with its own CI/CD pipeline.",
        "Optimized AWS infrastructure by rightsizing instances and storage, and migrated from Aurora Serverless to RDS to lower costs, saving $200–$250/month.",
        "Migrated 15+ RDS instances from Graviton2 to Graviton4 across 7 regions and covered them with Database Savings Plans to lower the fleet's compute cost.",
        "Analyzed six months of RDS spend ($672K across 89 usage types and 7 regions), identified GP3 storage (53%) as the main cost lever, and achieved a 17% month-over-month cost reduction (~$228K annualized), including a 64 TiB RDS retirement initiative.",
        "Authored the CEO-approved RDS-to-Aurora conversion proposal to eliminate unused retention-lifecycle storage.",
        "Enhanced the AWS Cognito user management layer with better edge-case handling across user creation, update and deletion flows, reducing silent auth failures across the platform's authentication surface.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "SysCloud",
      period: "June 2023 — May 2024",
      bullets: [
        "Developed optimized PostgreSQL queries with continuous maintenance and security, leveraging AWS RDS and EnterpriseDB to keep the multi-tenant data layer fast and well maintained.",
        "Built an ECS vertical partitioning service that exports multi-tenant PostgreSQL columns as Parquet to tenant-isolated S3 paths to reduce hot-database load, and implemented pg_partman partitioning and checkpoint-aware batch hard-deletion orchestration.",
        "Applied PostgreSQL row-level security across 25+ tables with SECURITY DEFINER helper functions, combining JWT claims and database policies with GraphQL ABAC authorization.",
        "Built a configurable request-level ABAC framework for the multi-tenant GraphQL server — declarative JSON mappers check role, user settings and variable ownership per operation, with LRU role/JWT caching and typed HTTP 403 errors, enforcing tenant isolation without per-resolver auth code.",
        "Extended the metadata-driven Cloud Config Framework, which auto-generates SQL, GraphQL and backup/restore configuration for each new cloud.",
        "Built Smart Search, a multi-tenant NestJS/PostgreSQL typeahead API over a two-hierarchy node/edge materialized-view graph (postgres_fdw-fed read-only cache DB, concurrent non-blocking refreshes), with synonym matching, match-count ranking, per-tenant LRU pools and ABAC/JWT-secured access.",
        "Designed SysCloud's first PostgreSQL vector-based metadata search solution (vector storage tables and query functions) for tokenized file and email data populated by Apache Tika.",
        "Built and maintained Flow Control Automation (ACF), where a config-driven rule engine turns CloudWatch, log and DB signals into real-time DynamoDB availability scores across 9 SaaS clouds that gate downstream workloads, with per-tenant kill-switches; redesigned its health monitoring with Aurora-aware metrics and isolated collectors.",
        "Deployed multi-regional API Gateway (HTTP) infrastructure across 6 regions with custom domains, VPC Links to private PostGraphile ECS servers and custom Lambda authorizers.",
        "Audited AWS Batch/Fargate workloads with Container Insights, CloudKeeper and Cost Explorer, cutting Fargate costs by more than 50% through rightsized task definitions and 40–50% Fargate Spot adoption.",
        "Configured AWS Elasticsearch log aggregation, shipping ECS application logs through a logrouter sidecar, and built Lambda OAuth disconnect workflows for Xero and QuickBooks Online.",
        "Assisted in building the Infra Config Framework and authored Terraform configurations for Amazon RDS, Aurora, API Gateway and Cognito for rapid, repeatable cloud deployments.",
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
        "Built and owned the Jenkins + Liquibase database CI/CD platform on EC2 across 1,500+ PostgreSQL databases, replacing CodeBuild/Node deployments with per-RDS-instance pipelines in all production regions, including a new Japan region rollout.",
        "Contributed to the year-long migration of 800+ MSSQL databases from EC2 to PostgreSQL on Amazon RDS, using AWS DMS replication workflows, logical replication, snapshot-based dumps and DynamoDB login record updates for all migrated tenants.",
        "Rolled out four PostGraphile servers with PgBouncer pooling, moved the MailRealTime and DriveRealTime databases from Aurora Serverless to provisioned clusters, and built the data layer for Google Classroom sync.",
        "Contributed to the PostGraphile/NestJS data access layer over Aurora PostgreSQL (~110 operations) — the cm-runner-plus 2.0 workflow engine (370+ workflows), tenant routing across primary/replica/cache/archive databases, RDS + OpenSearch archive retrieval, and layered security.",
        "Architected 1:1:1 PgBouncer (transaction mode) on ECS/Fargate behind NLBs with region-weighted pooling across 7 regions for 5,000+ customers (~200,000 client / 3,000 server connections, 40–80% fewer idle connections), with a sidecar that KMS-decrypts multi-tenant credentials from Secrets Manager/SSM at startup, per-role connection limits and a CodeBuild → ECR pipeline.",
        "Built DAL stacks with AWS CDK (ECS, API Gateway, Cognito) and contributed to the later move to Terraform.",
        "Provisioned an EC2-hosted open-source Grafana integrated with PostgreSQL, enabling engineering teams to adopt centralized monitoring.",
        "Built a Node.js/TypeScript scheduling engine (ECS Fargate, EventBridge, Lambda, AWS Batch, SQS, DynamoDB) for daily backup and sync jobs across six SaaS clouds and 5 AWS regions, using odd/even queue rotation, trial/paid priority queues and SSM-toggled Multi-Tenant, Canary, UAT and Normal flows.",
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
      name: "EDB Advanced for PostgreSQL v18 Certification",
      issuer: "EnterpriseDB",
      abbr: "EDB",
      badgeColor: "teal",
      issued: "2026",
      credentialId: null,
      verifyUrl: "#",
    },
    {
      name: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      abbr: "AWS",
      badgeColor: "orange",
      issued: "2026",
      credentialId: null,
      verifyUrl: "#",
    },
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
        "Contributed to the year-long migration of 800+ MSSQL tenant databases from EC2 to PostgreSQL on Amazon RDS — AWS DMS replication workflows, logical replication and snapshot-based dumps, DynamoDB login/routing record updates for migrated tenants, and Liquibase-standardized schema releases.",
      link: "#",
      category: "Database",
      tags: ["AWS DMS", "PostgreSQL", "MS SQL Server", "Logical Replication", "DynamoDB", "Amazon RDS"],
    },
    {
      name: "PostGraphile & PgBouncer Server Rollout",
      tagline:
        "Stood up four PostGraphile GraphQL servers with PgBouncer pooling in 2022 and contributed to the NestJS/TypeScript data access layer over Aurora PostgreSQL (~110 operations), including the workflow engine, tenant routing across primary/replica/cache/archive databases and layered security. Also built the ECS/Fargate PgBouncer layer that KMS-decrypts tenant credentials at startup, cut startup secret calls from ~12,000 to 3,000, and merged per-role tenant secrets into one secret per tenant (~75% fewer secrets).",
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
      name: "PostgreSQL Backup, Restore & Migration Platform",
      tagline:
        "Containerized Docker/AWS Batch/ECS dispatcher driving 9 modes — full pg_dump with SIGTERM/OOM handling, parallel table-level backups, aws_s3 chunked S3 exports, size-tuned migration dumps (1–12 workers), matching restores and multi-DB pg_repack — tracking 270K+ backups across 14.7K+ databases and 33 RDS servers across regions and AWS accounts. Restores enforce manifest parity (row count, checksum, PK min/max) with transactional rollback, collision-free restore names and pre-flight CloudWatch/DynamoDB safety gates.",
      link: "#",
      category: "Database",
      tags: ["PostgreSQL", "pg_dump", "AWS Batch", "AWS ECS", "Docker", "aws_s3", "Disaster Recovery"],
    },
    {
      name: "Low-Downtime Logical Replication & Cutover",
      tagline:
        "Snapshot-consistent logical replication migrations (slot snapshot, bulk load, lag catch-up, source blocking, cleanup) with automated cutover across DynamoDB hosts, postgres_fdw cache repointing, credential-migration and S3 Tables Lambdas, and a dry-run mode.",
      link: "#",
      category: "Database",
      tags: ["PostgreSQL", "Logical Replication", "postgres_fdw", "DynamoDB", "AWS Lambda", "Migration"],
    },
    {
      name: "RDS Sev-1 Incident Response & Wraparound Prevention",
      tagline:
        "Led Sev-1 incident response and AWS Support RCA for a forced anti-wraparound autovacuum (~400M XID age) and WAL/gp3 IOPS saturation on a multi-tenant RDS PostgreSQL server — coordinating write-disable, WAL replay/crash recovery and backup isolation, and driving per-table autovacuum tuning and MaximumUsedTransactionIDs / CheckpointLag alerting.",
      link: "#",
      category: "Database",
      tags: ["PostgreSQL", "AWS RDS", "Autovacuum", "Incident Response", "CloudWatch"],
    },
    {
      name: "PostgreSQL Performance Engineering",
      tagline:
        "Query optimization across execution plans, B-tree/GIN/trigram indexes, JSONB, lateral joins and materialized views, plus RLS on billion-row hash-partitioned tables.",
      link: "#",
      category: "Database",
      tags: ["PostgreSQL", "RLS", "Hash Partitioning", "EXPLAIN ANALYZE"],
    },
    {
      name: "Row-Level Security for Multi-Tenant PostgreSQL",
      tagline:
        "Designed and rolled out PostgreSQL RLS across a per-tenant fleet serving ~10M end users — JWT claims from NestJS drive SECURITY DEFINER PL/pgSQL helpers and three-tier policies on 25+ tables via Liquibase, with no per-user DB credentials. Extended as a retention guardrail for S3 Tables (Iceberg) migrations.",
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
      name: "Meta Data Layer (MDL) Framework",
      tagline:
        "Builder and lead contributor to the production Meta Data Layer framework on PostGraphile, which generates SQL and GraphQL for the multi-cloud backup platform and improved frontend performance by up to 60% over the legacy REST/MS SQL Server path.",
      link: "#",
      category: "Backend",
      tags: ["PostGraphile", "GraphQL", "PostgreSQL", "TypeScript"],
    },
    {
      name: "Login-Triggered Refresh Service",
      tagline:
        "ECS service that polls DynamoDB sessions every 30 seconds to drive login-triggered refreshes across 97 SQL jobs and 14 integrations, with JWT/AES-256 caching.",
      link: "#",
      category: "Backend",
      tags: ["AWS ECS", "DynamoDB", "PostgreSQL", "JWT", "AES-256"],
    },
    {
      name: "Table Vertical Sharding",
      tagline:
        "ECS vertical partitioning service that exports large multi-tenant PostgreSQL columns as Parquet to tenant-isolated S3 paths, with STS cross-account access and encrypted credential caching. Followed up with an investigation of archive write bottlenecks (over 5s against a 2–3s target, JSON/TOAST bloat) and documented S3/Parquet archival and ECS/SQS SKIP LOCKED parallelization proposals (estimated 15–20x throughput).",
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
      name: "Zero-Downtime RDS Credential Rotation",
      tagline:
        "Weekly Lambda rotation of RDS admin credentials with zero-downtime cutover via postgres_fdw, Secrets Manager and PgBouncer.",
      link: "#",
      category: "Security",
      tags: ["AWS Lambda", "Amazon RDS", "Secrets Manager", "postgres_fdw", "PgBouncer"],
    },
    {
      name: "Smart Search — Graph-Based Typeahead",
      tagline:
        "Multi-tenant typeahead search API that resolves multi-word queries across Account, Domain, User, Cloud, App and Object entities over a two-hierarchy PostgreSQL node/edge materialized-view graph — fed via postgres_fdw to a read-only cache DB with concurrent non-blocking refreshes, with synonym and partial-term matching, concatenated-query fallback, match-count ranking, per-tenant LRU-cached pools, and JWT/ABAC-secured access.",
      link: "#",
      category: "Backend",
      tags: ["TypeScript", "NestJS", "PostgreSQL", "Materialized Views", "postgres_fdw", "Graph Traversal", "Jest"],
    },
    {
      name: "Flow Control Automation (ACF)",
      tagline:
        "Adaptive flow-control and rate-limiting platform for multi-region backup across 9 SaaS clouds — a Collector → Aggregator → Watcher pipeline ingests CloudWatch metrics, logs and DB triggers, and a config-driven JSON rule engine with SSM-managed thresholds writes real-time availability scores to DynamoDB. Includes per-tenant kill-switches and redesigned health monitoring with Aurora-aware metrics and isolated collectors, running as PM2 services and Lambda.",
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
        "Node.js/TypeScript scheduling engine (ECS Fargate, EventBridge, Lambda, AWS Batch) that populates AWS SQS queues with backup and daily-sync jobs for six cloud platforms (Google Workspace, Office 365, HubSpot, Salesforce, Slack, QuickBooks Online) across 5 AWS regions — odd/even queue rotation with trial and paid priority queues, staged rollouts through four SSM-toggled execution flows (Multi-Tenant, Canary, UAT, Normal), parallel child processes, and retry, monitoring and alerting safeguards.",
      link: "#",
      category: "Infrastructure",
      tags: ["Node.js", "TypeScript", "AWS ECS", "EventBridge", "AWS Batch", "SQS", "DynamoDB", "PostgreSQL", "Docker"],
    },
    {
      name: "RDS Cost Optimization — 6-Month Spend Analysis",
      tagline:
        "$672K spend across 89 usage types & 7 regions. GP3 Storage (53%) identified as primary lever; 17% MoM cost reduction achieved (~$228K annualized) through Graviton4 migrations, rightsizing, Database Savings Plans, gp3 optimization and a 64 TiB RDS retirement initiative.",
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
      name: "Queue Population Error-Resolution Agent",
      tagline:
        "Built a Langflow tool-calling agent that triages DAL incremental queue population errors from ELK logs and suggests exact fixes. The agent chains three sub-flows as tools — CodeAnalysisAgent (pulls the failing SQL function body), GetSchema (resolves referenced table schemas), and GetVectorSearch (semantic search over past Azure DevOps defects for prior resolutions) — then posts a structured analysis and code fix to Teams via the AI Access Layer API.",
      link: "#",
      category: "AI",
      tags: ["Langflow", "AI Agents", "RAG", "Vector Search", "PostgreSQL"],
    },
    {
      name: "Semantic Search Embedding Pipeline — Bedrock + pgvector",
      tagline:
        "Node.js service that chunks rows from any PostgreSQL table, embeds them with Amazon Bedrock Titan Text Embeddings V2 and stores the vectors in pgvector for cosine-similarity search over an HNSW index. Supports a resumable, checkpointed backfill and an SQS-driven incremental worker, with idempotent upserts, bounded concurrency with jittered backoff on Bedrock throttling, per-row model tracking, and tenant-filtered search using pgvector 0.8 iterative scans.",
      link: "#",
      category: "AI",
      tags: ["pgvector", "AWS Bedrock", "Titan Embeddings", "PostgreSQL", "HNSW", "Node.js", "AWS SQS", "Docker"],
    },
    {
      name: "PostgreSQL Vector Metadata Search",
      tagline:
        "Designed SysCloud's first PostgreSQL vector-based metadata search solution — vector storage tables and query functions for tokenized file and email data populated by Apache Tika.",
      link: "#",
      category: "AI",
      tags: ["PostgreSQL", "Vector Search", "PL/pgSQL", "Apache Tika"],
    },
    {
      name: "Docs & Dashboard Vector Search",
      tagline:
        "Used Amazon Bedrock to vectorize internal engineering documentation and Grafana dashboards, enabling vector search from an internal chat application to retrieve actual dashboard queries and data for downstream AI ops workflows.",
      link: "#",
      category: "AI",
      tags: ["AWS Bedrock", "Vector Search", "Grafana"],
    },
    {
      name: "PgBouncer Weighted Pool Allocation",
      tagline:
        "Designed and rolled out weighted pool allocation for PgBouncer across all 7 production regions — dynamically favouring healthier DB nodes to reduce connection saturation and improve query throughput for 5,000+ customers, with ~200,000 client / 3,000 server connections and 40–80% fewer idle connections. Runs 1:1:1 in transaction mode on ECS Fargate behind NLBs, with endpoint remapping for Aurora migrations.",
      link: "#",
      category: "Infrastructure",
      tags: ["PgBouncer", "PostgreSQL", "Connection Pooling", "ECS Fargate", "NLB", "7 Regions"],
    },
    {
      name: "Aurora PostgreSQL Migration Proposal",
      tagline:
        "Authored full architecture for migrating 12 production Trans DB servers (384.6 TB) to Aurora PostgreSQL with dedicated read replicas — 3-year TCO model and HA failover strategy — and the CEO-approved RDS-to-Aurora conversion proposal to eliminate unused retention-lifecycle storage.",
      link: "#",
      category: "Architecture",
      tags: ["Aurora PostgreSQL", "Read Replicas", "HA", "Cost Modelling"],
    },
    {
      name: "RDS-to-Aurora PostgreSQL Modernization",
      tagline:
        "Led the RDS-to-Aurora PostgreSQL modernization in 2 of 6 regions using Aurora replicas and cutover after data migration. Wrote the runbook covering restore, promotion, high availability, replicas and connection compatibility for the remaining rollout, validated PgBouncer compatibility, and traced abnormal Aurora I/O back to materialized-view refresh frequency.",
      link: "#",
      category: "Architecture",
      tags: ["Aurora PostgreSQL", "Aurora Replicas", "PgBouncer", "Migration", "High Availability"],
    },
    {
      name: "Cognito User Management Enhancements",
      tagline:
        "Enhanced AWS Cognito user management with improved edge-case handling across user creation, update and deletion flows, reducing silent auth failures. Configured Cognito identity providers including Google, Microsoft, Xero and Okta, with client IDs, secrets and separate app clients.",
      link: "#",
      category: "Platform",
      tags: ["AWS Cognito", "Authentication", "OAuth", "Okta", "Node.js", "IAM"],
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
      name: "S3 Tables (Iceberg) Cold-Data Migration — 570 TB Fleet",
      tagline:
        "Architected and led the move of cold data from billion-row, hash-partitioned PostgreSQL tables (googledocs_tbl, googlemails_tbl, o365mails_tbl) across a ~570 TB, 7-region, 23,000+ tenant-database RDS fleet to Amazon S3 Tables (Apache Iceberg) queried through Athena, targeting ~50% RDS storage reduction (~$650K/yr projected). Designed the V2 plan end to end (per-business migration status flag, DynamoDB read routing, cutover, delete and pg_repack reclaim), chose S3 + Athena over an archive RDS instance, and enforced 12/18-month tiered hot/cold retention with PostgreSQL RLS and partial indexes. Delivered Glue/PySpark batches across 10+ customer schemas (raising DynamoDB from 40k to 60k WCU and fixing Spark driver failures) as metadata-driven jobs (~100 customer Glue jobs, parallel JDBC reads up to 200 partitions, row-count, key-range and dual xxhash64 checksum verification, DynamoDB delta retries), built a CDC backup layer (Node.js Lambda → Parquet on S3) because AWS Backup doesn't support table buckets, resolved Iceberg commit-concurrency errors with retry/backoff, set the 14-day time-travel and snapshot-retention policy, and added Iceberg-to-RDS recovery and write-order maintenance pipelines via CodeBuild.",
      link: "#",
      category: "Architecture",
      tags: ["S3 Tables", "Apache Iceberg", "AWS Glue", "PySpark", "Athena", "DynamoDB", "PostgreSQL", "RLS", "AWS Lambda", "CDC"],
    },
    {
      name: "OpenSearch Serverless Search Migration — Billion-Row Tables",
      tagline:
        "Brought full-text and fuzzy search to the three largest PostgreSQL tables by moving them into per-customer OpenSearch Serverless collections. Set up collection groups, collections, ingestion pipelines, access policies and search/indexing OCUs. Evaluated native OSI-to-RDS CDC and DMS-to-AOSS, ruled both out on per-database pipeline scaling and missing DMS target support, and built an RDS → DMS → Kinesis → OSI → OpenSearch Serverless CDC proof of concept (~$20K/month estimate, on hold for other priorities), root-causing and escalating an OSI publication-identifier defect to AWS Support. Built the Glue/PySpark backfill job from RDS: PK-partitioned parallel JDBC reads, document shaping that matches the update-buffer contract (pk _id, per-user routing, allowed fields, epoch/date formats), parallel streaming_bulk writes, S3 (Iceberg) chunk-coverage prerequisites, and verification by range _count plus a routed mget sample before flipping the read path.",
      link: "#",
      category: "Architecture",
      tags: ["OpenSearch Serverless", "AWS Glue", "PySpark", "AWS DMS", "Kinesis", "OSI", "CDC", "PostgreSQL", "DynamoDB"],
    },
    {
      name: "Tenant-Isolated Batch Processing Platform",
      tagline:
        "Architected a batch processing platform across thousands of PostgreSQL tenant databases in 7 regions — a Lambda/EventBridge control plane, DynamoDB 24-hour STS cache, SQS, and AWS Batch/PM2 workers — with incremental sync to S3 Tables (Athena MERGE INTO) and per-tenant OpenSearch Serverless, circuit-breaker retries, PgBouncer pooling, and hardened non-root containers with JSON trace logs, Grafana, Jest and SonarQube.",
      link: "#",
      category: "Architecture",
      tags: ["AWS Lambda", "EventBridge", "AWS Batch", "SQS", "DynamoDB", "S3 Tables", "Athena", "OpenSearch Serverless", "PM2"],
    },
    {
      name: "Syscloud Multi-MCP Remote Server",
      tagline:
        "Core contributor to a team-built remote MCP platform on AWS Lambda behind an ALB — JSON-RPC 2.0 with path-based routing to 15 production MCPs (280+ tools). Built the AWS RDS MCP (34 tools incl. Performance Insights, wait-event breakdown by query, Aurora cluster parameter groups and snapshots), the Cost Explorer MCP with service-name aliasing, CloudWatch metrics and alarms, the PostgreSQL DBA and PgBouncer pool-health MCPs, and RDS IAM authentication with connection pooling for the Postgres MCPs.",
      link: "#",
      category: "MCP",
      tags: ["MCP", "Python", "AWS Lambda", "JSON-RPC", "AWS RDS", "Performance Insights", "PgBouncer", "RDS IAM"],
    },
    {
      name: "RDS Performance Diagnostics MCP",
      tagline:
        "15-tool MCP server for diagnosing slow queries and timeouts across a ~22-instance RDS PostgreSQL fleet. It pulls Performance Insights (DB load, top SQL, wait events, top users/hosts), CloudWatch, parameter groups, RDS events and DB logs into one diagnose_instance call that flags issues automatically: XID wraparound risk, replication slot lag, burst-balance throttling, unset timeouts and slow-query logging left off. Also runs a parallel fleet-wide health sweep.",
      link: "#",
      category: "MCP",
      tags: ["MCP", "Python", "AWS RDS", "Performance Insights", "CloudWatch", "PostgreSQL"],
    },
    {
      name: "RDS IAM Database MCP",
      tagline:
        "Password-free MCP server that connects to any RDS PostgreSQL database using short-lived IAM auth tokens. A business-lookup mode resolves a tenant's RDS endpoint, database and region from MasterDB using a businessuserid, so Claude can query any of 800+ per-tenant databases without stored credentials.",
      link: "#",
      category: "MCP",
      tags: ["MCP", "Python", "FastMCP", "RDS IAM", "PostgreSQL", "boto3", "Multi-Tenant"],
    },
    {
      name: "Azure DevOps MCP Suite",
      tagline:
        "Family of Python MCP servers for Azure DevOps, 65 tools in total. They cover work item CRUD and WIQL queries, wiki read/write/search and revision history, plus a dedicated work-item creator that turns pasted text or screenshots into batches of work items linked under existing stories, features or epics.",
      link: "#",
      category: "MCP",
      tags: ["MCP", "Python", "FastMCP", "Azure DevOps", "WIQL"],
    },
    {
      name: "AWS Ops & Observability MCPs",
      tagline:
        "Single-purpose MCP servers built for day-to-day DBA and DevOps work. They cover SSM Parameter Store (8 tools), RDS parameter group inspection and diffing, RDS CloudWatch metrics and alarms, Grafana dashboard/folder/alert management (14 tools), Kibana/OpenSearch log error and pattern analysis, and DynamoDB lookups through the AI-AccessLayer so Claude reuses its cross-account role.",
      link: "#",
      category: "MCP",
      tags: ["MCP", "Python", "TypeScript", "AWS SSM", "Grafana", "OpenSearch", "DynamoDB", "CloudWatch"],
    },
    {
      name: "SaaS Cloud Integrations (OAuth 2.0)",
      tagline:
        "Integrated SaaS apps with SysCloud's backup platform via OAuth 2.0 connect/disconnect and token-revocation flows across Google Workspace, Microsoft 365, HubSpot, Salesforce, QuickBooks, Slack, Box and Xero, including Lambda disconnect workflows for Xero and QuickBooks Online, and managed the Google Admin Console and Microsoft Entra integrations.",
      link: "#",
      category: "Platform",
      tags: ["OAuth 2.0", "Google Workspace", "Microsoft 365", "Salesforce", "HubSpot", "QuickBooks", "Slack", "Box", "Xero"],
    },
    {
      name: "AI Monitoring Agent Fleet Hardening",
      tagline:
        "Hardened a 31-agent ECS AI monitoring fleet with IAM-authenticated PostgreSQL access, RDS Proxy routing and 32 automated diagnostic rules — resolving 89% of ~220K diagnoses, opening 245 AI-generated fix PRs, and eliminating token leaks, failed jobs and alert noise. Also designed IAM-based, tenant-aware PostgreSQL diagnostics for the agents.",
      link: "#",
      category: "AI",
      tags: ["AI Agents", "AWS ECS", "RDS IAM", "RDS Proxy", "PostgreSQL"],
    },
    {
      name: "Grafana Observability Dashboards & Delivery",
      tagline:
        "Delivered 5 Grafana dashboards for SLOs, workflows, authorization, RDS capacity and golden signals, and improved 15+ dashboards covering replica lag, locks, autovacuum and connection saturation. Built and hardened the production Grafana 12.3 platform on ECS/Auto Scaling (non-root container, 19 baked-in plugins, stripped cross-arch binaries to reduce Trivy findings, runtime Secrets Manager injection, ~1,800-line grafana.ini) with CodeCommit, CodeBuild/ECR and CodePipeline releases and automated SonarQube PR comments and approvals.",
      link: "#",
      category: "Infrastructure",
      tags: ["Grafana", "SLOs", "AWS ECS", "Auto Scaling", "CodePipeline", "ECR", "Trivy", "SonarQube", "PostgreSQL"],
    },
    {
      name: "AWS Batch & Fargate Right-Sizing",
      tagline:
        "Reduced over-allocated CPU for scheduled AWS Batch jobs, saving more than $20K per month. Audited unmonitored Batch/Fargate workloads with Container Insights, CloudKeeper and Cost Explorer (under 50% CPU/memory utilization) and cut Fargate costs by more than 50% with rightsized task definitions and 40–50% Fargate Spot capacity.",
      link: "#",
      category: "Cloud",
      tags: ["AWS Batch", "AWS Fargate", "Fargate Spot", "Container Insights", "Cost Optimization", "Right-Sizing"],
    },
    {
      name: "Storage Gateway S3 VPC Endpoint Reconfiguration",
      tagline:
        "Reconfigured EC2-based Storage Gateways in at least 6 regions to use S3 VPC endpoints, cutting the related NAT/data-transfer costs by approximately 50%.",
      link: "#",
      category: "Cloud",
      tags: ["AWS Storage Gateway", "S3", "VPC Endpoints", "EC2", "Cost Optimization"],
    },
    {
      name: "DAL Infrastructure as Code (AWS CDK → Terraform)",
      tagline:
        "Built the Data Access Layer stacks with AWS CDK, including ECS, API Gateway and Cognito, and contributed to the later move to Terraform, authoring configurations for Amazon RDS, Aurora, API Gateway and Cognito for repeatable cloud infrastructure deployments.",
      link: "#",
      category: "Infrastructure",
      tags: ["AWS CDK", "Terraform", "AWS ECS", "API Gateway", "AWS Cognito", "Amazon RDS", "Aurora"],
    },
    {
      name: "Jenkins + Liquibase Database CI/CD Platform",
      tagline:
        "Built and owned the Jenkins + Liquibase database CI/CD platform on EC2 across 1,500+ PostgreSQL databases, replacing CodeBuild/Node deployments with per-RDS-instance pipelines in all production regions, including a new Japan region rollout.",
      link: "#",
      category: "Infrastructure",
      tags: ["Jenkins", "Liquibase", "PostgreSQL", "AWS EC2", "CI/CD"],
    },
    {
      name: "Multi-Region API Gateway for PostGraphile",
      tagline:
        "Deployed multi-regional API Gateway (HTTP) infrastructure with custom domains, VPC Links for private PostGraphile ECS servers, custom Lambda authorizers and private integrations across 6 regions.",
      link: "#",
      category: "Infrastructure",
      tags: ["API Gateway", "VPC Link", "AWS Lambda", "PostGraphile", "AWS ECS", "6 Regions"],
    },
  ],
};

export default profile;
