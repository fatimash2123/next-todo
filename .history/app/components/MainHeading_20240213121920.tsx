interface MainHeadingProps {
  title: string;
}

export default function ({ title }: MainHeadingProps) {
  return (
    <h1 className="font-bold text-lg text-center text-3xl underline">
      TODO App
    </h1>
  );
}
