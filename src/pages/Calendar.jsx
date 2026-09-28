import { useState } from "react";
import Layout from "../components/Layout";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const events = {
  8: [{ label: "Sprint planning", variant: "primary" }],
  12: [{ label: "Design review", variant: "warning" }],
  19: [
    { label: "Accessibility audit due", variant: "danger" },
    { label: "Team sync", variant: "info" },
  ],
  22: [{ label: "Checkout prototype", variant: "success" }],
  28: [{ label: "Landing page handoff", variant: "primary" }],
};

export default function Calendar() {
  const [current, setCurrent] = useState(new Date(2026, 7, 1));

  const year = current.getFullYear();
  const month = current.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstWeekday; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) cells.push(day);
  while (cells.length % 7 !== 0) cells.push(null);

  const shiftMonth = (delta) => setCurrent(new Date(year, month + delta, 1));

  return (
    <Layout title="Calendar" subtitle="Deadlines and team events at a glance.">
      <div className="card">
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <h2 className="h5 mb-0">
            {current.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </h2>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={() => shiftMonth(-1)}
            >
              <i className="bi bi-chevron-left" aria-hidden="true" /> Prev
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={() => shiftMonth(1)}
            >
              Next <i className="bi bi-chevron-right" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="row row-cols-7 g-2 text-center text-secondary small fw-semibold mb-2">
            {weekDays.map((day) => (
              <div className="col" key={day}>
                {day}
              </div>
            ))}
          </div>
          <div className="row row-cols-7 g-2">
            {cells.map((day, index) => (
              <div className="col" key={`${day}-${index}`}>
                <div className={`tf-calendar-cell ${day ? "" : "muted"}`}>
                  <div className="small fw-semibold mb-1">{day ?? ""}</div>
                  {day && events[day]
                    ? events[day].map((event) => (
                        <span
                          key={event.label}
                          className={`badge text-bg-${event.variant} d-block text-truncate mb-1`}
                          title={event.label}
                        >
                          {event.label}
                        </span>
                      ))
                    : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
