import { LocalSystem } from "./LocalSystem";

interface SDKObject {
    /**
     * Gets the value of the specifed field by field name
     * @param {string} fieldName 
     * @returns {string | number | null}
     */
    GetField?(fieldName: string): string | number | null;

    /**
     * Sets the value for the specified field
     * @param {string} fieldName
     * @param {string | number} newValue
     */
    SetField?(fieldName: string, newValue: string | number): void;
}

interface EnvironmentFile {
    /**
     * Checks if a child object exists by object name
     * @type {Function}
     * @param {string} objectName
     * @returns {boolean}
     */
    DoesChildObjectExist(objectName: string): boolean;

    /**
     * Gets the count of collection objects by collection name
     * @type {Function}
     * @param {string} collectionName
     * @returns {number}
     */
    GetCollectionCount(collectionName: string): number;

    /**
     * Gets the collection object (**SDKObject**) by collection name and index
     * @type {Function}
     * @param {string} collectionName
     * @param {number} index
     * @returns An SDKObject
     */
    GetCollectionObject(collectionName: string, index: number): SDKObject;

    /**
     * Gets all collection names currently in the environment's file
     * @type {Function}
     * @returns An array of collection names
     */
    GetCollectionObjectNames(): string[];

    /**
     * Deletes a specified collection object by collection name and index
     * @type {function}
     * @param {string} collectionName
     * @param {number} index
     */
    DeleteCollectionObject(collectionName: string, index: number): void;
}

/**
 * **Environment**: Holds the current information and methods pertaining to the current environment
 * @class
 */
class Environment {

    /**
     * **Validation Rule**: Creates a hard stop when set to *true*
     * @type {boolean}
     */
    public static Cancel: boolean = true;

    /**
     * **Macro + Validation Rule**: Allows access to the current file pertaining to the environment
     * 
     */
    public static File: EnvironmentFile = {
        DoesChildObjectExist: (objectName: string): boolean => {
            return true;
        },
        GetCollectionCount: (collectionName: string): number => {
            return 1;
        },
        GetCollectionObject: (collectionName: string, index: number): SDKObject => {
            return {};
        },
        GetCollectionObjectNames: (): string[] => {
            return [];
        },
        DeleteCollectionObject: (collectionName: string, index: number): void => {
            return;
        }
    };
}

export { Environment as ev, LocalSystem as los };
