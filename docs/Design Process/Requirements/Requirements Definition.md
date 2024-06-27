# Requirements Definition

## Content

- [Functional Requirements](#functional-requirements)
    - [FR 1](#fr-1)
    - [FR 2](#fr-2)
    - [FR 3](#fr-3)
    - [FR 4](#fr-4)
    - [FR 5](#fr-5)
    - [FR 6](#fr-6)
    - [FR 7](#fr-7)
    - [FR 8](#fr-8)
    - [FR 9](#fr-9)
    - [FR 10](#fr-10)
    - [FR 11](#fr-11)
    - [FR 12](#fr-12)
    - [FR 13](#fr-13)
- [Non-Functional Requirements](#non-functional-requirements)
    - [NFR 1](#nfr-1)
    - [NFR 2](#nfr-2)
    - [NFR 3](#nfr-3)
    - [NFR 4](#nfr-4)
    - [NFR 5](#nfr-5)
    - [NFR 6](#nfr-6)
    - [NFR 7](#nfr-7)
    - [NFR 8](#nfr-8)
- [Quality Attributes Related to Non-Functional Requirements](#qualiity-attributes-related-to-non-functional-requirements)
    - [Portability](#portability)
    - [Understandability](#understandability)
    - [Interoperabiity](#interoperability)
    - [Satisfaction](#satisfaction)
    - [Simplicity](#simplicity)
    - [Effectiveness](#effectiveness)
- [References](#references)

[*Go to Metrics Related to Quality Attributes*](./Metrics%20Related%20to%20Quality%20Attributes.md)

[*Go to Exploratory Test Reports*](../Tests/Exploratory%20Tests/Exploratory%20Tests%20Reports/)

## Description
This section is intended to specify the functional requirements of the system to be developed during the period January-May 2024. In previous phases of the project, it was determined that the way to mitigate the usability problems present in the *Test-Runner* system and its currently established form of use, is through an extension of Visual Studio Code, which allows users to use the tool locally. 

## Abbreviations
- **OS:** Operating System
- **VSCode:** Visual Studio Code
- **FR:** Functional Requirement
- **NFR:** Non-Functional Requirement

## Functional Requirements

### FR 1

**Name:** *Detect automatically the user's OS*

**Description:** The system should be able to detect the user's OS without the user having to specify it, in order to install dependencies and configure environment variables. 

**Priority:** Low

**Conditions:** This requirement arises from [Functional Requirement 2](#fr-2) and [Functional Requirement 3](#fr-3), and from [Non-Functional Requirement 1](#nfr-1). The validity of this requirement is determined by the requirements mentioned above.

>  **Note:** For understanding the user interaction with this requirement, see the *Normal Flow* and *Alternative Flow* sections for the [FR2](#fr-2) or [FR3](#fr-3).

---

### FR 2

**Name:** *Install required dependencies*

**Description:** The system must have the option to install the required dependencies the first time the extension is configured. The user will be able to decide if they wants certain dependencies to be installed and select them manually (in case the user already has some dependencies installed), or if they wants to skip this option.

**Priority:** Low

**Conditions:** The user will choose whether to install the dependencies of their choice or not to install anything additional.

> **Note:** This requirement depends on [RF1](#fr-1).

**Normal Flow:** 

1. The user installs the extension.

2. The user specifies the dependencies to install.

3. The system automatically detects your OS (Depending on the OS, a specific dependency manager is used).

4. The system installs the specified dependencies.

**Alternative Flow:** 

1. The user has previously installed the required dependencies.

2. The user installs the extension.

3. The user omits the installation of dependencies through the extension.

---

### FR 3

**Name:** *Add installation paths to OS environment variables*

**Description:** The system must be able to add the installation path of the dependencies to the OS environment variables.

**Priority:** Low

**Conditions:** the user has previously selected the desired dependencies for installation through the system.

> **Note:** This requirement depends on [RF1](#fr-1) and [RF2](#fr-2).

**Normal Flow:** 

1. The system automatically detects your OS.

2. The system installs the specified dependencies.

3. The system adds the dependencies installation paths to the OS environment variables.

> **Note:** Depending of the OS, the command to add installation paths to the environment variables changes.

**Alternative Flow:** 

1. The user omits the installation of dependencies through the extension.

---

### FR 4

**Name:** *Install Test-Runner*

**Description:** The system must be able to install the Test-Runner tool through the dependency manager *npm*.

**Priority:** High

**Conditions:** The system will validate if the Test-Runner tool is already installed before trying to install it again.

**Normal Flow:** 

1. The user selects the option to install the Test-Runner tool.

2. The system validates if a Test-Runner installation is already installed on the system.

3. The validation determines that there are no previous installations of the tool.

4. The system installs the Test-Runner tool.

**Alternative Flow:** 

1. The user selects the option to install the Test-Runner tool.

2. The system validates if a Test-Runner installation is already installed on the system.

3. The validation determines that the Test-Runner tool is already installed on the system.

4. The system alerts the user about the present installation.

5. The system stops the installation process.

---

### FR 5

**Name:** *Show Test-Runner details tab*

**Description:** The system shall display a tab describing how the extension works, as well as the commands that the user can use to interact with it, and the new sections added by the extension.

**Priority:** Medium

**Conditions:** The tab will appear the first time the extension is installed, or if the user enters the *Help* command.

**Normal Flow 1:** 

1. The user installs the extension.

2. The extension displays the details tab.

**Normal Flow 2:** 

1. The user enters the *Help* command.

2. The extension displays the details tab.

---

### FR 6

**Name:** *Show individual test status*

**Description:** The system shall show, for each test present in the repository folder individually, if it has already been executed and has passed the test, or if on the contrary it has not passed the test.

**Priority:** Medium

**Conditions:** The flows presented below assume that the folder open at the time of performing the actions corresponds to that of a correct repository structure for the use of the Test-Runner tool.

**Normal Flow:** 

1. The user has executed the individual test.

2. The test has passed.

3. The system displays, for the individual test, the *Pass* status of the test.

**Alternative Flow:** 

1. The user has executed the individual test.

2. The test has failed.

3. The system displays, for the individual test, the *Not Passed* status of the test.

---

### FR 7

**Name:** *Show tests batch status*

**Description:** The system shall show, at the repository folder level, whether all tests have been executed and passed, or if not all tests have passed.

**Priority:** Medium

**Conditions:** The flows presented below assume that the folder open at the time of performing the actions corresponds to that of a correct repository structure for the use of the Test-Runner tool.

**Normal Flow:** 

1. The user executes all tests.

2. All tests have passed.

3. The system displays the *Passed* status of the repository tests.

**Alternative Flow:** 

1. The user runs all tests.

2. Not all tests have passed.

3. The system displays the *Not Passed* status of the repository tests.

---

### FR 8

**Name:** *Execute individual test*

**Description:** The system must be capable of running each of the tests individually.

**Priority:** High

**Conditions:** The flows presented below assume that the folder open at the time of performing the actions corresponds to that of a correct repository structure for the use of the Test-Runner tool.

**Normal Flow:**

1. The user presses the button / enters the command to run a test.

2. The system executes the selected test.

3. The system updates the status of the test.

---

### FR 9

**Name:** *Execute tests batch*

**Description:** The system should be able to batch run all tests from the repository folder.

**Priority:** High

**Conditions:** The flows presented below assume that the folder open at the time of performing the actions corresponds to that of a correct repository structure for the use of the Test-Runner tool.

**Normal Flow:** 

1. The user presses the button / enters the command to run all tests.

2. The system executes each test individually.

3. The system updates the status of the tests at the repository folder level.

---

### FR 10

**Name:** *Stop tests execution*

**Description:** During the execution of the tests, the system shall have the option to stop the execution of the test at any time.
**Priority:** Medium

**Conditions:** The flows presented below assume that the folder open at the time of performing the actions corresponds to that of a correct repository structure for the use of the Test-Runner tool.

**Normal Flow:** 

1. The user presses the button / enters the command to run a test.

2. The system executes the selected test.

3. Before the end of the test, the user presses the / button and enters the command to stop the test.

4. The system stops the test execution.

---

### FR 11

**Name:** *Show tests result*

**Description:** The system shall be able to display the execution of the tests performed, from the output returned by the Test-Runner tool.

**Priority:** Medium

**Conditions:** None.

**Normal Flow:** 

1. The user presses the button / enters the command to run a test.

2. The system executes the selected test.

3. It is determined whether the test has passed or failed.

4. The system displays the test result to the user.

### FR 12

**Name:** *Update individual test status*

**Description:** The system shall update the status of a test individually once it has been executed.

**Priority:** Medium

**Conditions:** The flows presented below assume that the folder open at the time of performing the actions corresponds to that of a correct repository structure for the use of the Test-Runner tool.

**Normal Flow:** 

1. The user presses the button / enters the command to run an individual test.

2. The system executes the selected test.

3. The test has passed.

4. The system displays the result of the execution to the user.

5. The system updates the status of the individual test to *Passed*.

**Alternative Flow:** 

1. The user presses the button / enters the command to run an individual test.

2. The system executes the selected test.

3. The test has not passed.

4. The system displays the result of the execution to the user.

5. The system updates the status of the individual test to *Not Passed*.

---

### FR 13

**Name:** *Update tests batch status*

**Description:** The system shall update the status of the tests at the repository folder level once they have been executed.

**Priority:** Medium 

**Conditions:** The flows presented below assume that the folder open at the time of performing the actions corresponds to that of a correct repository structure for the use of the Test-Runner tool.

**Normal Flow:** 

1. The user presses the button / enters the command to run all tests individually.

2. The system executes all tests.

3. All tests have passed.

4. The system displays the result of the execution to the user.

5. The system updates the status of the tests at the repository folder level to *Passed*.

**Alternative Flow:** 

1. The user presses the button / enters the command to run all tests individually.

2. The system executes all tests.

3. Not all tests have passed.

4. The system displays the result of the execution to the user.

5. The system updates the status of the tests at the repository folder level to *Not Passed*.

## Non-Functional Requirements

> **Note:** The **Priority** of Non-Functional Requirements was established by the identification of usability problems detected in the [Exploratory Tests](../Exploratory%20Tests/Exploratory%20Tests%20Reports/).

### NFR 1

**Name:** *Compatibility with Differents OS*

**Description:** The system must be compatible with OS that are compatible with VSCode, such as Windows, macOS and Linux.

**Priority:** Low.

**Quality Attribute Related:** [Portability](#portability)

---

### NFR 2

**Name:** *Ease of Configuration*

**Description:** The system should provide clear and simple instructions for installation and initial configuration.

**Priority:** High.

**Quality Attribute Related:** [Understandability](#understandability)

---

### NFR 3

**Name:** *Interaction with Github & Test-Runner*

**Description:** the system must be able to interact with git to make commits and with test-runner to obtain test results

**Priority:** Low.

**Quality Attribute Related:** [Interoperability](#interoperability)

---

### NFR 4

**Name:** *Test Scores*

**Description:** The system must provide feedback on the user's actions when making commits and running tests.

**Priority:** High.

**Quality Attribute Related:** [Satisfaction](#satisfaction)

---

### NFR 5

**Name:** *User Operational Simplicity*

**Description:** The system should minimize the number of steps required to perform common tasks, reducing operational complexity and avoiding redundancy of functions.

**Priority:** High.

**Quality Attributes Related:**
- [Simplicity](#simplicity)
- [Effectiveness](#effectiveness)

---

### NFR 6

**Name:** *Simplicity in the User Interface*

**Description:** The user interface should display only essential functions on the main screen and provide advanced options only when the user requests them.

**Priority:** High.

**Quality Attributes Related:**
- [Simplicity](#simplicity)
- [Effectiveness](#effectiveness)

---

### NFR 7

**Name:** *Ease of Use*

**Description:** The system should provide contextual help to improve efficiency and user understanding.

**Priority:** High.

**Quality Attribute Related:**
- [Effectiveness](#effectiveness)
- [Understandability](#understandability)

---

### NFR 8

**Name:** *Clarity of User Interfaces*

**Description:** The user interface should be clear and easy to understand, with an attractive and consistent visual design throughout the system.

**Priority:** High.

**Quality Attributes Related:**
- [Simplicity](#simplicity)
- [Satisfaction](#satisfaction)

**Priority:** High.

**Quality Attribute Related:** [Satisfaction](#satisfaction)

## Qualiity Attributes Related to Non-Functional Requirements

> **Note 1:** The **Priority** of Quality Attributes was established by the identification of usability problems detected in the [Exploratory Tests](../Exploratory%20Tests/Exploratory%20Tests%20Reports/).

> **Note 2:** The Quality Attributes with **High Priority** are eligible for measurement through formal metrics and procedures.

### Portability


## Quality Attributes Related to Non-Functional Requirements

> **Note 1:** The **Priority** of Quality Attributes was established by the identification of usability problems detected in the [Exploratory Tests](../Exploratory%20Tests/Exploratory%20Tests%20Reports/).

> **Note 2:** The Quality Attributes with **High Priority** are eligible for measurement through formal metrics and procedures.

### Portability

**Definition:** Effort required to transfer a program from one hardware configuration and/or software system environment to another.

**Priority:** Low.

---

### Understandability

**Definition:** Ease with which the implementation can be understood.

**Priority:** High.

> **Note:** This requirement was discarded by McCall due to the difficulty of measuring it, not to mention the repercussions on the cost of the project.

---

### Interoperability

**Definition:** Effort required to couple one system with another.

**Priority:** Low.

---

### Satisfaction

**Definition:** Reflects how pleasant and satisfying it is for users to interact with the software. High usability leads to increased user satisfaction and can contribute to the overall success of the software product.

**Priority:** Medium.

**Metric Related:**
- [Interface Satisfaction Level](./Metrics%20Related%20to%20Quality%20Attributes.md#interface-satisfaction-level)
- [Interface Simplicity Level](./Metrics%20Related%20to%20Quality%20Attributes.md#interface-simplicity-level)


---

### Simplicity

**Definition:** Those attributes of the software that provide implementation of-functions in the Maintainability most understandable manner (Usually avoidance of practices which increase complexity).

**Priority:** High.

**Metric Related:**
- [Effectiveness Rate of Performing Tasks](./Metrics%20Related%20to%20Quality%20Attributes.md#effectiveness-rate-of-performing-tasks)
- [Number of User Errors](./Metrics%20Related%20to%20Quality%20Attributes.md#number-of-user-errors)

---

### Effectiveness

**Definition:** Pertains to how quickly users can perform tasks once they are familiar with the software. It emphasizes the speed and accuracy with which users can achieve their goals using the software.

**Priority:** High.

**Metrics Related:** 
- [Effectiveness Rate of Performing Tasks](./Metrics%20Related%20to%20Quality%20Attributes.md#effectiveness-rate-of-performing-tasks)
- [Number of User Errors](./Metrics%20Related%20to%20Quality%20Attributes.md#number-of-user-errors)

## References

- Boehm, B.W., Brown, J.R., & Kaspar, H. (1978). Characteristics of software quality.
- McCall, J., Paul, K., Richards, & Walters, F. (1977). Factors in software quality: concept and definitions of software quality.