import { ElementTypeE, QuestionE } from "@/lib/enums";

interface QuestionI {
  question: string;
  key: string;
  elementType?: QuestionE;
  options?: string[];
  children?: { [option: string]: QuestionI };
  type?: ElementTypeE;
  placeholder?: string;
}

export type { QuestionI };
