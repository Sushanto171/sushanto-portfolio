export interface ILearningStep {
  id: string;
  title: string;
  desc: string;
  date?: string;
}

export const learningPath: ILearningStep[] = [
  { id: "1", title: "HTML5", desc: "Learned structure & semantics" },
  { id: "2", title: "CSS3", desc: "Styled layouts, flexbox, grid" },
  { id: "3", title: "JavaScript", desc: "Logic, DOM, events" },
  { id: "4", title: "React", desc: "Components, state, props" },
  { id: "5", title: "Next.js", desc: "SSR, SSG, routing" },
];
