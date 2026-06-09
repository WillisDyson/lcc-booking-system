import { createContext, useContext, useState, type PropsWithChildren } from "react";

export type SelectedDay = {
    date: string;
    dayOfWeek: string;
    displayDate: string;
    totalActivities: number;
};

type SelectedDayContextValue = {
    selectedDay: SelectedDay | null;
    setSelectedDay: (day: SelectedDay) => void;
};

const SelectedDayContext = createContext<SelectedDayContextValue | undefined>(undefined);

const SelectedDayProvider = ({ children }: PropsWithChildren) => {
    const [selectedDay, setSelectedDay] = useState<SelectedDay | null>(null);

    return (
        <SelectedDayContext.Provider value={{ selectedDay, setSelectedDay }}>
            {children}
        </SelectedDayContext.Provider>
    );
};

const useSelectedDay = () => {
    const context = useContext(SelectedDayContext);

    if (!context) {
        throw new Error("useSelectedDay must be used within SelectedDayProvider");
    }

    return context;
};

export { SelectedDayProvider, useSelectedDay };
