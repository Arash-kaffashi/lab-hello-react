import Feature from "../components/Feature";
import data from "../data/features.json";

import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

const images = [icon1, icon2, icon3, icon4];

export default function Features() {
  return (
    <article className="flex justify-between my-32 px-8 pt-4 md:px-32 md:pt-8 gap-4">
      {data.features.map(({ title, p }, index) => (
        <Feature title={title} p={p} src={images[index]} />
      ))}
    </article>
  );
}
