'use client';
import React from 'react';

export default function CalendarButton() {
  const handleClick = () => {
    window.open(
      'https://calendar.google.com/calendar/appointments/schedules/AcZssZ34qNSCjIcUOUkKouNJx31bp8NxHG9KqAdWGoJAhaZ_CZbhVe0Lcn1qm2gdhg-M62eTS0he_46W?gv=true',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-2 bg-[#1FA09D] text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200 hover:bg-[#178B89] hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-[#1FA09D]"
      >
        📅 Réserver un appel découverte
      </button>
    </div>
  );
}
