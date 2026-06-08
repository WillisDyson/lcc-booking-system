import { Link } from "react-router-dom";
import styles from "./SearchResultsTile.module.scss";
import timeIcon from "/src/assets/search-results-tile/time-icon.svg";

const SearchResultsTile = ({ }) => {
    return (
        <Link to="/activity/1" className={styles["search-results-tile"]}>
            <div className={styles["search-results-tile__details"]}>
                <div className={styles["search-results-tile__time"]}>
                    <img src={timeIcon} alt="Time" className={styles["search-results-tile__time-icon"]} />
                    07:00 - 08:00
                </div>
                <span className={styles["search-results-tile__spaces"]}>12 spaces</span>
            </div>
            <h3 className={styles["search-results-tile__title"]}>Lane Swim</h3>
            <table className={styles["search-results-tile__main-info"]}>
                <tbody>
                    <tr>
                        <th>Location</th>
                        <td>Pool 1</td>
                    </tr>
                    <tr>
                        <th>Type</th>
                        <td>Swim</td>
                    </tr>
                </tbody>
            </table>
        </Link>
    );
};

export default SearchResultsTile;