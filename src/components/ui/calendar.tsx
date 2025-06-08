import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CalendarProps {
  mode?: "single";
  selected?: Date;
  className?: string;
}

export const Calendar = ({
  mode = "single",
  selected,
  className,
}: CalendarProps) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const currentMonth = selected || today;
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
  const startingDay = firstDay.getDay();
  const totalDays = lastDay.getDate();

  const renderDays = () => {
    const daysArray = [];
    for (let i = 0; i < startingDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="h-8" />);
    }
    for (let i = 1; i <= totalDays; i++) {
      const isSelected = selected && selected.getDate() === i && selected.getMonth() === currentMonth.getMonth();
      daysArray.push(
        <div
          key={i}
          className={cn(
            "h-8 w-8 flex items-center justify-center rounded-full text-sm",
            isSelected && "bg-primary text-primary-foreground",
            !isSelected && "hover:bg-accent hover:text-accent-foreground cursor-pointer"
          )}
        >
          {i}
        </div>
      );
    }
    return daysArray;
  };

  return (
    <div className={cn("p-3", className)}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">
          {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
        </h2>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
        {days.map((day) => (
          <div key={day} className="text-muted-foreground">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {renderDays()}
      </div>
    </div>
  );
}; 