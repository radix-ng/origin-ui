import { signal } from '@angular/core';

export interface UseSliderWithInputProps {
    minValue?: number;
    maxValue?: number;
    initialValue?: number[];
    defaultValue?: number[];
}

/**
 * An Angular Signals-based equivalent of "useSliderWithInput".
 */
export function createSliderWithInput({
    minValue = 0,
    maxValue = 100,
    initialValue = [0],
    defaultValue = [0]
}: UseSliderWithInputProps) {
    const sliderValue = signal<number[]>(initialValue);
    const inputValues = signal<string[]>(initialValue.map((v) => v.toString()));

    /**
     * Validates and updates the value by index.
     */
    function validateAndUpdateValue(rawValue: string, index: number) {
        // If the user enters an empty string or just a minus sign,
        // reset to "0"
        if (rawValue === '' || rawValue === '-') {
            inputValues.update((prev) => {
                const newInputs = [...prev];
                newInputs[index] = '0';
                return newInputs;
            });

            sliderValue.update((prev) => {
                const newSlider = [...prev];
                newSlider[index] = 0;
                return newSlider;
            });
            return;
        }

        const numValue = parseFloat(rawValue);

        // If the input is invalid (NaN), revert to the previous value
        if (isNaN(numValue)) {
            // Revert input to the previous slider value
            inputValues.update((prev) => {
                const newInputs = [...prev];
                newInputs[index] = sliderValue()[index].toString();
                return newInputs;
            });
            return;
        }

        let clampedValue = Math.min(maxValue, Math.max(minValue, numValue));

        // If there are multiple values (e.g., for "range"), ensure
        // that the minimum does not exceed the maximum
        const currentSlider = sliderValue();
        if (currentSlider.length > 1) {
            if (index === 0) {
                clampedValue = Math.min(clampedValue, currentSlider[1]);
            } else {
                clampedValue = Math.max(clampedValue, currentSlider[0]);
            }
        }

        sliderValue.update((prev) => {
            const newSlider = [...prev];
            newSlider[index] = clampedValue;
            return newSlider;
        });

        inputValues.update((prev) => {
            const newInputs = [...prev];
            newInputs[index] = clampedValue.toString();
            return newInputs;
        });
    }

    function handleInputChange(newValue: string, index: number) {
        // Allow empty string or minus sign,
        // and validate the input with a regex to ensure it is numeric
        if (newValue === '' || newValue === '-' || /^-?\d*\.?\d*$/.test(newValue)) {
            inputValues.update((prev) => {
                const newInputs = [...prev];
                newInputs[index] = newValue;
                return newInputs;
            });
        }
    }

    function handleSliderChange(newValues: number[]) {
        sliderValue.set(newValues);
        inputValues.set(newValues.map((v) => v.toString()));
    }

    function resetToDefault() {
        sliderValue.set(defaultValue);
        inputValues.set(defaultValue.map((v) => v.toString()));
    }

    return {
        sliderValue, // signal<number[]>
        inputValues, // signal<string[]>
        validateAndUpdateValue,
        handleInputChange,
        handleSliderChange,
        resetToDefault
    };
}
