import { Link } from "react-router-dom";
import styles from "./SearchResultsTile.module.scss";
import timeIcon from "/src/assets/search-results-tile/time-icon.svg";

type SearchResultsTileProps = {
    activity: {
        id: string;
        startTime: string;
        endTime: string;
        name: string;
        location: string;
        type: string;
        spaces: number;
    };
};

const SearchResultsTile = ({ activity }: SearchResultsTileProps) => {
    const isFullyBooked = activity.spaces <= 0;;
    const tileContent = (
        <>
            <div className={styles["search-results-tile__details"]}>
                <div className={styles["search-results-tile__time"]}>
                    <img src={timeIcon} alt="Time" className={styles["search-results-tile__time-icon"]} />
                    {activity.startTime} - {activity.endTime}
                </div>
                <span
                    className={`${styles["search-results-tile__spaces"]}`}
                >
                    {isFullyBooked ? "Fully booked" : `${activity.spaces} spaces`}
                </span>
            </div>
            <h3 className={styles["search-results-tile__title"]}>{activity.name}</h3>
            <table className={styles["search-results-tile__main-info"]}>
                <tbody>
                    <tr>
                        <th>Location</th>
                        <td>{activity.location}</td>
                    </tr>
                    <tr>
                        <th>Type</th>
                        <td>{activity.type}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );

    if (isFullyBooked) {
        return <div className={styles["search-results-tile"] + " " + styles["search-results-tile--fully-booked"]}>{tileContent}</div>;
    }

    return (
        <li>
            <Link to={`/activity/${activity.id}`} className={styles["search-results-tile"]}>
                {tileContent}
            </Link>
        </li>
    );
};

export default SearchResultsTile;