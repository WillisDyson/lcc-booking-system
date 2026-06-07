import SearchResultsGrid from "./search-results-grid/SearchResultsGrid";
import DropdownSelect from "../generic/dropdown-select/DropdownSelect";
import styles from "./SearchResults.module.scss";

const SearchResults = ({ }) => {
    return (
        <div className={styles["search-results"]}>
            <div className={styles["search-results__filters"]}>
                <DropdownSelect dropdownText="Select an activity type" />
                <DropdownSelect dropdownText="Select a location" />
            </div>
            <SearchResultsGrid /> 
        </div>
    );
};

export default SearchResults;