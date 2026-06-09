import { useId, useState } from "react";
import styles from "./DropdownSelect.module.scss";

type DropdownSelectProps = {
    dropdownText: string;
    options: string[];
    selectedValues: string[];
    onToggleValue: (value: string) => void;
    onClearValues: () => void;
};

const DropdownSelect = ({
    dropdownText,
    options,
    selectedValues,
    onToggleValue,
    onClearValues,
}: DropdownSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const panelId = useId();
    const selectedCount = selectedValues.length;
    const buttonText = selectedCount > 0 ? `${dropdownText} (${selectedCount})` : dropdownText;

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
                <span className={styles["dropdown-select__button-text"]}>{buttonText}</span>
                <span className={styles["dropdown-select__arrow"]}></span>
            </button>

            <fieldset
                id={panelId}
                className={`${styles["dropdown-select__content"]} `}
                onMouseDown={(e) => e.preventDefault()} // Pres the dropdown from closing when on a <label> or on space between options
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

                {options.map((option) => (
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