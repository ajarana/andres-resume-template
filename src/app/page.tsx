import Resume from "@/components/resume/resume";
import { CANDIDATE_INFO } from "@/data/get-candidate-data";

export default function App() {
  return (
    <main className="resumePage">
      <Resume candidate={CANDIDATE_INFO} printMediaType={true} />
    </main>
  );
}
