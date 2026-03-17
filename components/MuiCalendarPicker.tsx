"use client";

import { useState, MouseEvent } from "react";
import dayjs, { Dayjs } from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import { Popover } from "@mui/material";

type MuiCalendarPickerProps = {
  value?: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
  minDate?: Dayjs | null;
  maxDate?: Dayjs | null;
};

export default function MuiCalendarPicker({
  value,
  onChange,
  minDate,
  maxDate,
}: MuiCalendarPickerProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [view, setView] = useState<"year" | "month" | "day">("year");
  const [tempDate, setTempDate] = useState<Dayjs | null>(
    value ? dayjs(value) : null
  );

  const open = Boolean(anchorEl);

  const formattedDate = value
    ? dayjs(value).format("DD MMM YYYY")
    : "Select Date";

  // ---------------- OPEN CALENDAR ----------------

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setView("year");

    const baseDate = value
      ? dayjs(value)
      : minDate
      ? dayjs(minDate)
      : dayjs();

    setTempDate(baseDate);
  };

  // ---------------- CLOSE ----------------

  const handleClose = () => {
    setAnchorEl(null);
  };

  // ---------------- DATE SELECT ----------------

  const handleDateChange = (newValue: Dayjs | null) => {
    if (!newValue) return;

    setTempDate(newValue);

    if (view === "year") {
      setView("month");
    } else if (view === "month") {
      setView("day");
    } else {
      onChange(newValue);
      handleClose();
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="relative w-full">
        {/* INPUT BUTTON */}

        <button
          type="button"
          onClick={handleOpen}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-left bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {formattedDate}
        </button>

        {/* CALENDAR */}

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <DateCalendar
            value={tempDate}
            view={view}
            views={["year", "month", "day"]}
            onViewChange={(v) => setView(v)}
            onChange={handleDateChange}
            minDate={minDate ? dayjs(minDate) : undefined}
            maxDate={maxDate ? dayjs(maxDate) : undefined}
          />
        </Popover>
      </div>
    </LocalizationProvider>
  );
}