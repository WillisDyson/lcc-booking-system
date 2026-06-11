import { Link } from "react-router-dom";
import styles from "./ActivityDetails.module.scss";

const ActivityDetails = () => {
    return (
        <div className={styles["activity-details"]}>
            <Link to="/">Back to search</Link>
            <h1>Activity Details</h1>
            <p>This is where the details of the activity will be displayed.</p>
        </div>
    );
};

export default ActivityDetails;