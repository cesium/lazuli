import Question from "./Question";

import questions from "/data/faqs";

export default function Faqs() {
  return (
    <div className="flex flex-col justify-between py-20 spacing lg:flex-row bg-secondary lg:h-3/4">
      <div className="mb-10 text-white lg:w-2/5">
        <h1 className="mb-4 text-4xl font-bold lg:text-6xl font-iextrabold">
          Frequently Asked Questions
        </h1>
        <p className="text-lg">
        This list of frequently asked questions serves to complement the general rules that you can find below. Get in touch with the organizing team whenever a question arises and we will add answers to the most frequently asked questions here.
        </p>
      </div>
      <div className="lg:w-1/3">
        <div className="flex flex-col">
          {questions.map((question, i) => (
            <Question key={i} {...question} />
          ))}
        </div>
      </div>
    </div>
  );
}
