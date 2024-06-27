# Scenarios for Test-Runner

## Content
- [Students Scenarios](#general-information-for-the-students-scenarios)
- [Professors Scenarios](#general-information-for-the-professors-scenarios)

[*Go to Personas Profiles Definition*](./Personas%20Profiles.md)


## General Information for the Students Scenarios

### Scenario 1

---

- **Scenario Name:** Running algorithm tests in vscode with local testrunner and git bash
- **Persona:** Software engineering student in early semesters
- **Situation:** The student needs to install the testrunner locally to subsequently run algorithm tests for exercises, following the installation and usage instructions provided in the exercise repository.
- **Technology:** VScode, git bash, GitHub, testrunner

**Questions:**

- **What challenges does the user face in this situation?**
  - Use git bash console to run tests with testrunner
  - Install dependencies of the program "testruner"
  - Navigate effectively among the different directories that will be generated
  - Use git to clone a repository

- **What specific steps does the user take to achieve their goal?**
  - Install dependencies for the program
  - Install the program in a local folder
  - Get the exercise repository
  - Clone the exercise repository into the folder where the program is installed (using git bash)
  - Use vscode to view the repository
  - Generate respective "Solution" files for each exercise
  - Generate a response for each exercise
  - Verify compilation
  - Save changes
  - Perform tests using git bash to run the testrunner with a local command
  - Compare the final results with the expected ones

- **What information does the user need to complete each step?**
  - Instructions to solve code tests (exercise statements)
  - Instructions to run tests in Testrunner
  - Instructions to install necessary dependencies to run testrunner locally
  - Instructions to install testrunner locally
  - Instructions to clone GitHub repositories
  - Instructions to install necessary programs like vscode and git

- **What obstacles or difficulties can the user encounter?**
  - Difficulty understanding error messages in git and test runner errors
  - Difficulty in handling the git bash console
  - Difficulties in setting up git credentials and cloning repositories
  - Difficulties in understanding if their algorithms meet the exercise requirements
  - Difficulties in installing dependencies and testrunner

- **How does Testrunner help the user overcome these obstacles?**
  - Provides detailed instructions on installing dependencies and testrunner
  - Provides detailed instructions on handling required git bash commands
  - Provides detailed reports with test results
  - Provides information about possible errors and how to resolve them

**Expected Results:**

- **Expected from the User:**
  - The student receives positive feedback on correct exercises and identifies failed exercises.
  - The student can easily test their algorithms based on teacher specifications.
  - The student can perform installations without difficulty by following the instructions.

- **System Perspective Results:**
  - Testrunner identifies both failed and successful exercises.
  - Testrunner provides clear feedback on the obtained results.
  - Testrunner offers an easy way to conduct exercises without local installation.

### Scenario 2

---

- **Scenario Name:** Running algorithm tests with testrunner through commits to a GitHub classroom repository using vscode as a code editor
- **Persona:** Software engineering student in early semesters
- **Situation:** The student needs to perform algorithm tests through commits to the corresponding repository, where exercises are located, using git bash.
- **Technology:** VScode, git bash, GitHub, testrunner on GitHub

**Questions:**

- **What challenges does the user face in this situation?**
  - Using the git bash console to make commits to a remote repository
  - Installing and configuring git credentials
  - Navigating effectively among the different directories that will be generated
  - Using git to clone a repository

- **What specific steps does the user take to achieve their goal?**
  - Get the GitHub classroom repository
  - Clone the GitHub classroom repository
  - Use vscode to view the repository
  - Generate respective "Solution" files for each exercise
  - Generate a response for each exercise
  - Verify compilation
  - Save changes in the local repository
  - Send changes to the remote repository by committing to apply the testrunner test
  - Compare the final results with the expected ones with the testrunner feedback in the repository

- **What information does the user need to complete each step?**
  - Instructions to solve code tests (exercise statements)
  - Instructions to make commits to local and remote repositories
  - Instructions to install necessary programs like vscode and git
  - Instructions to clone GitHub repositories
  - Information on where to view the feedback
  - Information about the vscode interface

- **What obstacles or difficulties can the user encounter?**
  - Difficulty understanding error messages in git when making commits and pushes
  - Difficulty in handling the git bash console
  - Difficulties in setting up git credentials and cloning repositories
  - Difficulties in understanding if their algorithms satisfy the exercise requirements
  - Difficulties in navigating easily within the vscode and GitHub interfaces
  - Difficulties in finding feedback in the repository

- **How does Testrunner help the user overcome these obstacles?**
  - Provides detailed instructions on handling required git bash commands
  - Provides detailed reports with test results
  - Provides information on possible errors and how to solve them.

**Expected Results:**

- **Expected from the User:**
  - The student receives positive feedback on correct exercises and identifies failed exercises.
  - The student can easily test their algorithms based on teacher specifications.
  - The student can perform installations without much difficulty by following the instructions.

- **System Perspective Results:**
  - Testrunner identifies both failed and successful exercises.
  - Testrunner provides clear feedback on the obtained results.
  - Testrunner offers an easy way to conduct exercises without the need for local installation.

## General Information for the Professors Scenarios

### Scenario 1

---

- **Scenario Name:** Create input/output template files for exercises.
- **Persona:** Programming Instructor.
- **Situation:** The instructor needs to edit input/output templates in the GitHub repository according to their needs and exercises.
- **Technology:** Test-Runner, GitHub.

**Questions:**

- **What challenges does the instructor face in this situation?**
   - Lack of time to manually review all tests.
   - Inconsistency in the evaluation of the tests.

- **What specific steps does the instructor take to achieve their goal?**
   - Obtain the repository with Testrunner.
   - Edit the input/output templates to use them in their own exercises.
   - Perform tests with the repository to verify that their templates are well implemented.
   - Create the classroom and assignments for their students.
   - Review the results of the tests.
   - Provide feedback to the students.

- **What information does the instructor need to complete each step?**
   - Location of the code tests.
   - Instructions on how to edit input/output templates and create new exercises.
   - Instructions to run the tests in Testrunner.
   - Interpretation of the results of the tests.

- **What obstacles or difficulties can the instructor encounter?**
   - Errors in the configuration of the tests.
   - Lack of time to review all student comments.

- **How does Testrunner help the user overcome these obstacles?**
   - Automates the execution of tests, saving time.
   - Provides reports with the results of the tests.

**Expected Results:**

- **Expected from the User:**
  - The instructor can review and correct code tests more efficiently.
  - Students receive more accurate and timely feedback on their work.
- **System Perspective Results:**
  - Testrunner identifies both failed and successful exercises.
  - Testrunner provides clear feedback on the obtained results.