import DropdownSelect from "../generic/dropdown-select/DropdownSelect";
import SearchResultsTile from "./search-results-tile/SearchResultsTile";
import styles from "./SearchResults.module.scss";

const SearchResults = ({ }) => {
    return (
        <div className={styles["search-results"]}>
            <div className={styles["search-results__filters"]}>
                <DropdownSelect dropdownText="Select an activity type" />
                <DropdownSelect dropdownText="Select a location" />
            </div>
            <div className={styles["search-results__grid"]}>
                <SearchResultsTile />
                <SearchResultsTile />
                <SearchResultsTile />
                <SearchResultsTile />
                <SearchResultsTile />
                <SearchResultsTile />
                <SearchResultsTile />
                <SearchResultsTile />
                <SearchResultsTile />
                <SearchResultsTile />
                <SearchResultsTile />
                <SearchResultsTile />
            </div>
        </div>
    );
};

export default SearchResults;