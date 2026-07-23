export const PROFILE = {
  name: "Susan Seyram Darke",
  shortName: "Susie",
  role: "Cloud Engineer & Web Developer",
  location: "Accra, Ghana",
  email: "seyhram@gmail.com",
  phone: "+233 27 175 9470",
  linkedin: "linkedin.com/in/susan-seyram-darke",
  linkedinUrl: "https://linkedin.com/in/susan-seyram-darke",
  github: "github.com/Susie288",
  githubUrl: "https://github.com/Susie288",
  summary:
    "Cloud Engineer with 1+ years of experience designing and troubleshooting cloud architectures, proficient in AWS services including EC2, S3, and IAM. I lead end-to-end cloud deployments and build full-stack web products — turning infrastructure and interfaces into things teams can actually ship.",
};

export const STATS = [
  { value: "1+", label: "Years experience" },
  { value: "100%", label: "Milestone completion rate" },
  { value: "4+", label: "Team members led" },
  { value: "35%", label: "Fewer missed deadlines" },
];

// Lines replayed in the hero terminal — a real deploy, not decorative filler.
export const TERMINAL_LINES = [
  { text: "git push origin main", type: "cmd" },
  { text: "aws s3 sync ./build s3://susie-portfolio", type: "cmd" },
  { text: "24 files uploaded to S3", type: "out" },
  { text: "aws cloudfront create-invalidation --paths '/*'", type: "cmd" },
  { text: "Deployment successful — live in 1.2s", type: "ok" },
];
