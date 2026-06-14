import { useId, useState } from "react";
import styles from "./DropdownSelect.module.scss";

type DropdownSelectProps = {
    dropdownText: string;
    options: string[];
    selectedValues: string[];
    onToggleValue: (value: string) => void;
    onClearValues: () => void;
};

/**
 * Component for a generic dropdown select menu, allowing for multiple selections and displaying the count of selected items.
 */


const DropdownSelect = ({
    dropdownText,
    options,
    selectedValues,
    onToggleValue,
    onClearValues,
}: DropdownSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);

    // Give each instance of the dropdown menu a unique ID for accessibility purposes.
    const panelId = useId();
    const selectedCount = selectedValues.length;

    // If filter options are selected, display the number of filters applied in the button text.
    const buttonText = selectedCount > 0 ? `${dropdownText} (${selectedCount})` : dropdownText;

    return (
        <div
            className={`${styles["dropdown-select"]} ${isOpen ? styles["dropdown-select--open"] : ""}`}
            onKeyDown={(e) => {
                if (e.key === "Escape") {
                    setIsOpen(false);
                }
            }}

            // Close the dropdown when focus leaves the component, but not when focus moves to one of the select options within.
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
                <span className={styles["dropdown-select__button-text"]}>{buttonText}</span>
                <span className={styles["dropdown-select__arrow"]}></span>
            </button>

            <fieldset
                id={panelId}
                className={`${styles["dropdown-select__content"]} `}
                onMouseDown={(e) => e.preventDefault()} // Prevent the dropdown from closing when clicking on a <label> or on space between options
            > 
                <label className={styles["dropdown-select__option"]}>
                    <input
                        className={styles["dropdown-select__checkbox"]}
                        type="checkbox"
                        checked={selectedValues.length === 0}
                        onChange={() => onClearValues()}
                    />
                    All
                </label> 

                {options.map((option) => ( // Render each option as a checkbox input.
                    <label key={option} className={styles["dropdown-select__option"]}>
                        <input
                            className={styles["dropdown-select__checkbox"]}
                            type="checkbox"
                            checked={selectedValues.includes(option)}
                            onChange={() => onToggleValue(option)}
                        />
                        {option}
                    </label>
                ))}
            </fieldset>
        </div>
    );
};

export default DropdownSelect;