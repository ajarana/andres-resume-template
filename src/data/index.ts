import { Candidate } from "../types/Candidate";

const path =
  process.env.NEXT_PUBLIC_USE_REAL_DATA === "true" ?
    "candidate-data"
  : "mock-data";

const { CANDIDATE_INFO }: { CANDIDATE_INFO: Candidate } = await import(
  "./" + path
);

export { CANDIDATE_INFO };
