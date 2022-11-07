export default function HeroContent() {
  return (
    <div className="text-white flex flex-col items-start gap-y-4">
      <h1 className="text-8xl font-bold mt-32">
        Say hello to
        <br />
        ReactJS
      </h1>
      <p>
        You will learn how to use
        <br />
        the most popular frontend library,
        <br />
        and become a super Ninja developer.
      </p>
      <button className="bg-white text-3xl font-bold text-slate-900 px-6 py-6 my-8 rounded">
        Awesome!
      </button>
    </div>
  );
}
