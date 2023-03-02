interface LocalApplication {
    /**
     * Display a message box on screen with a provided message
     * @param message 
     */
    ShowMessageBox(message: string): void;
}

/**
 * **LocalSystem**: Holds all current information about the local instance and current loan in byte
 * @class
 */
export class LocalSystem { // eslint-disable-line max-classes-per-file
    
    public static GetField(fieldName: string): string | number | null {
        return "";
    };

    public static SetField(fieldName: string, newValue: string | number): void { 
        return;
    };

    public static Application: LocalApplication = {
        ShowMessageBox: (message: string): void => { 
            return;
        },
    }
}