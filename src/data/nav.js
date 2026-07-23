// Each nav entry doubles as a stage on the pipeline rail (see PipelineRail).
// The stage names are deliberately deploy-pipeline vocabulary, since that
// mirrors what the sections actually represent in her career.
export const NAV_LINKS = [
  { id: "about", label: "About", stage: "INIT" },
  { id: "experience", label: "Experience", stage: "BUILD" },
  { id: "projects", label: "Projects", stage: "SHIP" },
  { id: "skills", label: "Skills", stage: "RUN" },
  { id: "contact", label: "Contact", stage: "CONNECT" },
];
