import { signal } from '@angular/core';

export interface UseCharacterLimitProps {
    maxLength: number;
    initialValue?: string;
}

/**
 * An Angular Signals-based implementation of a character limit hook.
 */
export function createCharacterLimit({ maxLength, initialValue = '' }: UseCharacterLimitProps) {
    const value = signal(initialValue);

    const characterCount = signal(initialValue.length);

    /**
     * Handles changes in the input field.
     * Updates `value` and `characterCount` only if the new value is within the limit.
     */
    function handleChange(newValue: string) {
        if (newValue.length <= maxLength) {
            value.set(newValue);
            characterCount.set(newValue.length);
        }
    }

    return {
        value, // signal<string>
        characterCount, // signal<number>
        handleChange,
        maxLength // number (passed as-is)
    };
}
