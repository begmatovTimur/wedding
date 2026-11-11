import Heart from "./Heart";

const YEAR = 2026;
const MONTH = 10; // 0-based: 10 = Noyabr
const WEDDING_DAY = 18;
const WEEKDAYS = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];

export default function Calendar() {
  const daysInMonth = new Date(YEAR, MONTH + 1, 0).getDate();
  // JS: 0 = Sunday. Shift so the week starts on Monday (Dushanba).
  const offset = (new Date(YEAR, MONTH, 1).getDay() + 6) % 7;

  const cells: (number | null)[] = [
    ...Array(offset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="calendar">
      <div className="calendar__head">
        <span className="calendar__ornament" aria-hidden="true">❦</span>
        <h3 className="calendar__month">Noyabr</h3>
        <span className="calendar__year">{YEAR}</span>
      </div>

      <div className="calendar__grid" role="grid" aria-label="Noyabr 2026">
        {WEEKDAYS.map((d, i) => (
          <div key={d} className={`calendar__weekday${i >= 5 ? " is-weekend" : ""}`}>
            {d}
          </div>
        ))}

        {cells.map((day, i) =>
          day === WEDDING_DAY ? (
            <div key={i} className="calendar__day is-wedding" aria-label="18-noyabr — to‘y kuni">
              <span className="calendar__glow" aria-hidden="true" />
              <Heart className="calendar__heart" />
              <span className="calendar__wedding-num">{day}</span>
            </div>
          ) : (
            <div key={i} className={`calendar__day${day ? "" : " is-empty"}`}>
              {day ?? ""}
            </div>
          )
        )}
      </div>

      <p className="calendar__caption">
        <Heart className="calendar__caption-heart" />
        18-noyabr, chorshanba — to‘y kuni
      </p>
    </div>
  );
}
