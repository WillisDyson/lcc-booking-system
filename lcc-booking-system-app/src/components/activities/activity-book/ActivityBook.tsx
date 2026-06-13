import { Link, useParams } from "react-router-dom";
import activityScheduleData from "../../../../data/activity-schedule.json";
import styles from "./ActivityBook.module.scss";

type Activity = {
    id: string;
    startTime: string;
    endTime: string;
    name: string;
    location: string;
    type: string;
    spaces: number;
    status: string;
    link: string;
};

type ScheduleDay = {
    date: string;
    displayDate: string;
    activities?: Activity[];
};

const ActivityBook = () => {
    const { activityId } = useParams();

    if (!activityId) {
        return (
            <div className={styles["activity-book"]}>
                <Link to="/">Go back to activity search</Link>
                <h1>No activity found</h1>
            </div>
        );
    }

    const matchedActivity = activityScheduleData.schedule
        .flatMap((day: ScheduleDay) =>
            (day.activities ?? []).map((activity) => ({
                ...activity,
                date: day.displayDate,
            })),
        )
        .find((activity: Activity & { date: string }) => activity.id === activityId);

    if (!matchedActivity) {
        return (
            <div className={styles["activity-book"]}>
                <Link to="/">Go back to activity search</Link>
                <h1>No activity found</h1>
            </div>
        );
    }

    return (
        <div className={styles["activity-book"]}>
            <h1>
                Success! You just booked {matchedActivity.name} at {matchedActivity.startTime} - {matchedActivity.endTime} on {matchedActivity.date}.
            </h1>
            <Link to="/">Book another activity</Link>
        </div>
    );
};

export default ActivityBook;