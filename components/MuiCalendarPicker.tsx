"use client";

import { useState } from "react";
import dayjs from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import { Popover } from "@mui/material";

export default function MuiCalendarPicker({
  value,
  onChange,
  minDate,
  maxDate,
}) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [view, setView] = useState("year");
  const [tempDate, setTempDate] = useState(value ? dayjs(value) : null);

  const open = Boolean(anchorEl);

  // Format display date
  const formattedDate = value
    ? dayjs(value).format("DD MMM YYYY")
    : "Select Date";

  // ---------------- OPEN CALENDAR ----------------

  const handleOpen = (event) => {

    setAnchorEl(event.currentTarget);
    setView("year");

    const baseDate =
      value
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

  const handleDateChange = (newValue) => {

    if (!newValue) return;

    setTempDate(newValue);

    if (view === "year") {

      setView("month");

    } else if (view === "month") {

      setView("day");

    } else {

      onChange(newValue.format("YYYY-MM-DD"));
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
            onViewChange={setView}
            onChange={handleDateChange}
            minDate={minDate ? dayjs(minDate) : undefined}
            maxDate={maxDate ? dayjs(maxDate) : undefined}
          />

        </Popover>

      </div>

    </LocalizationProvider>
  );
}