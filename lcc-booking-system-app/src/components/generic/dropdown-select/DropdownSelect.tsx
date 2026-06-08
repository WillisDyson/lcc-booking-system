import { useId, useState } from "react";
import styles from "./DropdownSelect.module.scss";

const DropdownSelect = ({ dropdownText }: { dropdownText: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const panelId = useId();

    return (
        <div
            className={`${styles["dropdown-select"]} ${isOpen ? styles["dropdown-select--open"] : ""}`}
            onKeyDown={(e) => {
                if (e.key === "Escape") {
                    setIsOpen(false);
                }
            }}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setIsOpen(false);
                }
            }}
        >
            <button
                type="button"
                className={styles["dropdown-select__button"]}
                onClick={() => setIsOpen((previousState) => !previousState)}
                onFocus={(e) => {
                    if (e.currentTarget.matches(":focus-visible")) {
                        setIsOpen(true);
                    }
                }}
                aria-expanded={isOpen}
                aria-controls={panelId}
            >
                <span className={styles["dropdown-select__button-text"]}>{dropdownText}</span>
                <span className={styles["dropdown-select__arrow"]}></span>
            </button>

            {/* TODO: Add dynamic link generation */}
            
            <fieldset
                id={panelId}
                className={`${styles["dropdown-select__content"]} `}
                onMouseDown={(e) => e.preventDefault()} // Pres the dropdown from closing when on a <label> or on space between options
            >
                <label className={styles["dropdown-select__option"]}>
                    <input className={styles["dropdown-select__checkbox"]}type="checkbox" name="Filter" value="Swim"/>
                    Swim
                </label>

                <label className={styles["dropdown-select__option"]}>
                    <input className={styles["dropdown-select__checkbox"]} type="checkbox" name="Filter" value="Fitness"/>
                    Fitness
                </label>

                <label className={styles["dropdown-select__option"]}>
                    <input className={styles["dropdown-select__checkbox"]} type="checkbox" name="Filter" value="Yoga"/>
                    Yoga
                </label>

                <label className={styles["dropdown-select__option"]}>
                    <input className={styles["dropdown-select__checkbox"]} type="checkbox" name="Filter" value="Zumba"/>
                    Zumba
                </label>

                <label className={styles["dropdown-select__option"]}>
                    <input className={styles["dropdown-select__checkbox"]} type="checkbox" name="Filter" value="Health Programmes"/>
                    Health Programmes
                </label>

                <label className={styles["dropdown-select__option"]}>
                    <input className={styles["dropdown-select__checkbox"]} type="checkbox" name="Filter" value="Lane Swim" />
                    Lane Swim
                </label>
            </fieldset>
        </div>
    );
};

export default DropdownSelect;