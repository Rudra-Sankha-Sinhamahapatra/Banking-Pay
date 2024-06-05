import { SendCard } from "../../../components/SendCard";

export default async function Home() {
  return (
    <>
      <div className="relative items-center min-h-screen">
        P2P
        <div className="mt-10 w-full relative left-1/2  border border-slate-400">
          <SendCard />
        </div>
      </div>
    </>
  );
}
