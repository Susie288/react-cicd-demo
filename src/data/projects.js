export const PROJECTS = [
  {
    tag: "DEVOPS · CONTAINERS",
    name: "Buildspace: Kubernetes & Docker Demo",
    description:
      "A containerized web app with a multi-stage Docker build, served via Nginx, and deployed to a local Kubernetes cluster (Minikube) with Deployment/Service manifests and NodePort exposure.",
    stack: ["Docker", "Kubernetes", "Minikube", "Node.js", "Nginx"],
    status: "Deployed",
    link: "http://github.com/Susie288/buildspace",
  },
  {
    tag: "CLOUD DEPLOYMENT",
    name: "AWS Web App Deployment",
    description:
      "End-to-end cloud deployment led for a 4-person team — architecture diagrams, IAM setup, and a documented EC2 / S3 pipeline that new contributors could onboard onto without guesswork.",
    stack: ["AWS", "EC2", "S3", "IAM", "Trello"],
    status: "Delivered",
    link: "https://github.com/Immenz0260/aws-capstone-project-group-10",
  },
  {
    tag: "SAAS · FRONTEND",
    name: "PuzzleIt",
    description:
      "A SaaS platform that turns any image into an interactive puzzle. Built the frontend, shipped iteratively via GitHub PRs, and kept it live on Vercel through active testing.",
    stack: ["Next.js", "TypeScript", "Vercel", "GitHub"],
    status: "Live",
    link: "https://github.com/Susie288/PuzzleIt",
  },
];
