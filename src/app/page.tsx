import TeamViewer from "@/app/_components/TeamViewer";
import CustomButton from "@/app/_components/CustomButton";
import { Suspense } from "react";

const Page = () => {
  return (
    <>
      <Suspense fallback={"読み込み中"}>
        <TeamViewer />
      </Suspense>
      <CustomButton type="primary" size="sm">
        Button
      </CustomButton>
    </>
  );
};

export default Page;
