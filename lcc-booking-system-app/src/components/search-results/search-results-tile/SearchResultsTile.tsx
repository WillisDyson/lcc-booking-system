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
        status: string;
        link: string;
    };
};

const SearchResultsTile = ({ activity }: SearchResultsTileProps) => {
    const isFullyBooked = activity.spaces <= 0;;
    const titleId = `search-results-tile-title-${activity.id}`;
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
            <h3 id={titleId} className={styles["search-results-tile__title"]}>{activity.name}</h3>
            <table className={styles["search-results-tile__main-info"]}>
                <tbody>
                    <tr>
                        <th scope="row">Location</th>
                        <td>{activity.location}</td>
                    </tr>
                    <tr>
                        <th scope="row">Type</th>
                        <td>{activity.type}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );

    if (isFullyBooked) {
        return (
        <li>
            <div aria-labelledby={titleId} className={styles["search-results-tile"] + " " + styles["search-results-tile--fully-booked"]}>{tileContent}</div>
        </li>
        )
    }

    return (
        <li>
            <Link to={`/book/${activity.id}`} aria-labelledby={titleId} className={styles["search-results-tile"]}>
                {tileContent}
            </Link>
        </li>
    );
};

export default SearchResultsTile;