import TeamViewer from "@/components/TeamViewer";
import { Suspense } from "react";

const Page = () => {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TeamViewer userId="test" />
      </Suspense>
    </>
  );
};

export default Page;
