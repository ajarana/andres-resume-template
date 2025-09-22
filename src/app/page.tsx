import Resume from "@/components/resume";
import { CANDIDATE_INFO } from "@/data";

export default function App() {
  return (
    <main className="resumePage">
      <Resume candidate={CANDIDATE_INFO} printMediaType={true} />
    </main>
  );
}
