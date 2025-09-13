/**
 * Represents a developer with first and last name.
 *
 * @class
 * @property {string} firstName - The first name of the developer.
 * @property {string} lastName - The last name of the developer.
 * @property {string} fullName - The full name of the developer, or "Unknown" if not available.
 * @example
 * const dev = new Developer("John", "Doe");
 * console.log(dev.fullName); // "John Doe"
 */
export class Developer {
    #firstName;
    #lastName;

    /**
     * Creates an instance of Developer.
     * @param {string} firstName - The first name of the developer.
     * @param {string} lastName - The last name of the developer.
     */
    constructor(firstName, lastName) {
        this.#firstName = firstName?.trim() || "";
        this.#lastName = lastName?.trim() || "";
    }

    /**
     * Gets the first name of the developer.
     * @returns {string} The first name of the developer.
     */
    get firstName() {
        return this.#firstName;
    }

    /**
     * Gets the last name of the developer.
     * @returns {string} The last name of the developer.
     */
    get lastName() {
        return this.#lastName;
    }

    /**
     * Gets the full name of the developer, or "Unknown" if either name is missing.
     * @returns {string} The full name of the developer or "Unknown".
     */
    get fullName() {
        return this.#firstName && this.#lastName
            ? `${this.#firstName} ${this.#lastName}`.trim()
            : "Unknown";
    }

}