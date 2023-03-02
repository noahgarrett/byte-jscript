# Byte Pro Helper Library 

## `npm install byte-jscript`

## **Usage Instructions**
### **Usage Disclaimer**
This library is not functional in any way, shape, or form. This should not be used in any running Javascript project, as the types and function definitions are purely for assisting development teams create Macros and Validation Rules for the Byte Pro system.

#### Environment Requirements
* [Node](https://nodejs.org/en/download/) (LTS Version Recommended)
* [VSCode](https://code.visualstudio.com/download)

#### Environment Setup
* Create a new folder and name it anything you want
* Open VSCode and navigate to your newly created folder
* Open the terminal within VSCode
    * Type the following commands (in order)
        * `npm init -y`
        * `npm install byte-jscript`
* Create a new file named `index.js`
* Import the library at the top
    * Non-module
        * `const { ev, los } = require("byte-jscript")`
    * Module
        * `import { ev, los } from "byte-jscript"`
* Start writing your macro / validation rule below the import statement
    * All code below the import statement can be copy/paste into the Byte software

## **Examples**
```javascript
// Import
const { ev, los } = require("byte-jscript");

// Macro
if (los.GetField("FileData.FileName") == "123456") {

    for (var i = 1; i <= ev.File.GetCollectionCount("Condition"); i++) {
        var obj = ev.File.GetCollectionObject("Condition", i);
        var desc = obj.GetField("_Description");

        if (desc == "Example Desc") {
            los.Application.ShowMessageBox("Description Found:" + desc);

            obj.SetField("_Description", "Not an example I promise");
        }
    }
}

// Validation Rule
if (ev.ButtonID == "exampleButton1") {
    ev.Cancel = true;
}
```