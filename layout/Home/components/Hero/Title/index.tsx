import TypeWriter from "typewriter-effect";
import schedule from "@data/schedule.json";
import dayjs from "dayjs";

export default function Title() {
  /* Parse event dates info from schedule data */
  const dates = schedule.map((day) => day.date).sort();

  const firstDayDate = dayjs(dates[0], "YYYY/M/D");
  const lastDayDate = dayjs(dates[dates.length - 1], "YYYY/M/D");

  const month = firstDayDate.format("MMMM");
  const year = firstDayDate.format("YYYY");

  return (
    <div className="relative z-20 font-bold">
      <h5 className="font-terminal-uppercase m-1 text-2xl text-quinary">
        {firstDayDate.format("D")}-{lastDayDate.format("D")} {month} {year}
      </h5>
      {/* 2xl:leading-[6.5rem] is intended to only work with the following font - Terminal */}
      <h1
        aria-label="The software engineering week is back, let's just SEI that."
        className="font-terminal-uppercase h-72 w-11/12 text-4xl text-white xs:text-5xl sm:text-6xl md:h-96 md:w-full md:text-7xl lg:text-8xl 2xl:w-5/6 2xl:leading-[6.5rem]"
      >
        <TypeWriter
          aria-hidden
          onInit={(typewriter) => {
            typewriter
              .typeString("The software engineering week is back, let's ")
              .typeString("<span style='white-space: nowrap;'>just say</span>") // since this lib do not accept "&nbsp;", css "white-space: nowrap" will do the same
              .pauseFor(200)
              .deleteChars(3)
              .typeString("<u style='text-underline-offset: 8px;'>SEI</u>")
              .typeString(" that.")
              .start();
          }}
          options={{
            delay: 25,
            cursor: "_",
            cursorClassName:
              "text-5xl animate-[typewriter-cursor-pulse_1s_steps(1)_infinite] sm:text-5xl md-text-6xl lg:text-7xl",
          }}
        />
      </h1>
    </div>
  );
}
