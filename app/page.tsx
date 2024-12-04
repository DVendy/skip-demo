import Main from "@/components/global/Main";
import SplineScene from "@/components/global/SplineScene";

export default function Home() {
  return (
    <div className="container mx-auto flex">
      <div className="flex-1 min-h-screen">
        <SplineScene />
      </div>
      <Main />
    </div>
  );
}
