import MaxWidthWapper from "@/components/MaxWidthWapper";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high-quality{" "}
          <span className="text-blue-600">digital assets</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          welcome to digitalHippo. Every asset on our platform is verified by
          our team to ensure highest quality standards.
        </p>
      </div>
    </MaxWidthWapper>
  );
}
