import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-auto mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your market place for high-quality{" "}
          <span className="text-blue-600">digital asset</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to DigitalHippo. Every asset on our platform is verified from
          our team to ensure our highest quality standard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products"> Browse Trending</Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
