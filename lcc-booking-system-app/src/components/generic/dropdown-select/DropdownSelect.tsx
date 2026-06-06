import styles from "./DropdownSelect.module.scss";

const DropdownSelect = ({ }) => {
    return (
        <div className={styles["dropdown-select"]}>
            <button type="button" className={styles["dropdown-select__button"]}>
                <span className={styles["dropdown-select__button-text"]}>Sort and filter</span>
                <span className={styles["dropdown-select__arrow"]}></span>
            </button>

            {/* TODO: Add dynamic link generation */}

            <div className={styles["dropdown-select__content"]}>
                <fieldset className={styles["dropdown-select__filters"]}>
                    <label className={styles["dropdown-select__label"]}>
                        <input className={styles["dropdown-select__checkbox"]}type="checkbox" name="Filter" value="Swim"/>
                        <span className={styles["dropdown-select__custom-checkbox"]}></span> Swim
                    </label>

                    <label className={styles["dropdown-select__label"]}>
                        <input className={styles["dropdown-select__checkbox"]} type="checkbox" name="Filter" value="Fitness"/>
                        <span className={styles["dropdown-select__custom-checkbox"]}></span> Fitness
                    </label>

                    <label className={styles["dropdown-select__label"]}>
                        <input className={styles["dropdown-select__checkbox"]} type="checkbox" name="Filter" value="Yoga"/>
                        <span className={styles["dropdown-select__custom-checkbox"]}></span> Yoga
                    </label>

                    <label className={styles["dropdown-select__label"]}>
                        <input className={styles["dropdown-select__checkbox"]} type="checkbox" name="Filter" value="Zumba"/>
                        <span className={styles["dropdown-select__custom-checkbox"]}></span> Zumba
                    </label>

                    <label className={styles["dropdown-select__label"]}>
                        <input className={styles["dropdown-select__checkbox"]} type="checkbox" name="Filter" value="Health Programmes"/>
                        <span className={styles["dropdown-select__custom-checkbox"]}></span> Health Programmes
                    </label>

                    <label className={styles["dropdown-select__label"]}>
                        <input className={styles["dropdown-select__checkbox"]} type="checkbox" name="Filter" value="Lane Swim" />
                        <span className={styles["dropdown-select__custom-checkbox"]}></span>Lane Swim
                    </label>
                </fieldset>
            </div>
        </div>
    );
};

export default DropdownSelect;