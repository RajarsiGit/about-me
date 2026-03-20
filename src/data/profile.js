import { yearsFrom } from "../utils/yearsFrom";
import avatar from "../assets/images/9da59552-da8c-4924-a829-35409af9ea7e.jpg";

const profile = {
  name: "Rajarsi Saha",
  title: "Technical Architect",
  location: "Hyderabad, Telangana, India",
  summary: `Passionate database expert with ${yearsFrom("2021-01-01")} years of experience in cloud ops and DevOps at SysCloud. Deep expertise in AWS, PostgreSQL, and multi-cloud SaaS platforms — focused on application scalability, performance, availability, fault tolerance, and cost optimization. AWS Certified Developer | Microsoft Certified | GenAI enthusiast.`,
  avatar: avatar,
  resumeUrl: "/Profile.pdf",
  socials: [
    { name: "Email", href: "mailto:rajarsi3997@gmail.com", slug: "Gmail" },
    { name: "GitHub", href: "https://github.com/RajarsiGit", slug: "Github" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/rajarsisaha-2709a297", slug: "Linkedin" },
  ],
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
  ],
  highlights: [
    { label: "Years at SysCloud", value: yearsFrom("2021-01-01") },
    { label: "PostgreSQL DBs Managed", value: "1500+" },
    { label: "Cloud Cost Saved/mo", value: "$250" },
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
      ],
    },
  ],
  projects: [
    {
      name: "PostgreSQL Performance Engineering",
      tagline: "Query optimization, materialized views, execution plan analysis, and RLS on billion-row hash-partitioned tables.",
      link: "#",
    },
    {
      name: "RDS Fleet Right-Sizing & Graviton Migration",
      tagline: "Migrated 15+ RDS instances from Graviton2 to Graviton4 across 7 regions with Database Savings Plans.",
      link: "#",
    },
    {
      name: "Meta Data Layer Framework",
      tagline: "Auto-generates SQL & GraphQL queries to scale multi-cloud SaaS backup across cloud platforms.",
      link: "#",
    },
    {
      name: "PostGraphile Integration",
      tagline: "GraphQL web server deployment delivering 60% better frontend performance vs REST APIs with MS SQL Server.",
      link: "#",
    },
    {
      name: "RBAC Architecture Migration & MVW Performance",
      tagline: "73% full-stack refresh improvement and 97% addon aggregation gain (7m 41s → 15s) on 1.2M-row production tables.",
      link: "#",
    },
    {
      name: "ACF & ODD/EVEN Queue Population System",
      tagline: "Design doc for SysCloud's backup job control flow — 5-layer DynamoDB availability model, ODD/EVEN SQS pipeline, PL/pgSQL triggers, ACFAnalyzer Lambda, and daily health script.",
      link: "#",
    },
    {
      name: "RDS Cost Optimization — 6-Month Spend Analysis",
      tagline: "$672K spend across 89 usage types & 7 regions. GP3 Storage (53%) identified as primary lever; 17% MoM cost reduction achieved via Graviton migration and instance right-sizing.",
      link: "#",
    },
  ],
};

export default profile;
