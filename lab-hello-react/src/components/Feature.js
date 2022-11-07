export default function Feature(props) {
  return (
    <div className="grid grid-flow-row gap-2">
      <img className="mb-4" src={props.src} alt="icon" />
      <h2 className="font-bold text-4xl">{props.title}</h2>
      <p className="text-slate-500 text-xl">{props.p}</p>
    </div>
  );
}
