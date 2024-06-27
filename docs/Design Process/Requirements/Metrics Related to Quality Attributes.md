# Metrics Related to Quality Attributes

## Content
- [Effectiveness Rate of Performing Tasks](#effectiveness-rate-of-performing-tasks)
  - [Metric, Object and  Measurement Attribute](#metric-object-and-measurement-attribute)
  - [Methodology](#methodology)
  - [Measurement Time](#measurement-time)
  - [Tools](#tools)
  - [Data Storage Media](#data-storage-media)
  - [Measurement Procedure](#measurement-procedure)
  - [Activities Calendar](#activities-calendar)
- [Number of User Errors](#number-of-user-errors)
  - [Metric, Object and  Measurement Attribute](#metric-object-and-measurement-attribute-1)
  - [Methodology](#methodology-1)
  - [Measurement Time](#measurement-time-1)
  - [Tools](#tools-1)
  - [Data Storage Media](#data-storage-media-1)
  - [Measurement Procedure](#measurement-procedure-1)
  - [Activities Calendar](#activities-calendar-1)
- [Interface Satisfaction Level](#interface-satisfaction-level)
  - [Metric, Object and  Measurement Attribute](#metric-object-and-measurement-attribute-2)
  - [Methodology](#methodology-2)
  - [Measurement Time](#measurement-time-2)
  - [Tools](#tools-2)
  - [Data Storage Media](#data-storage-media-2)
  - [Measurement Procedure](#measurement-procedure-2)
  - [Activities Calendar](#activities-calendar-2)
- [Interface Simplicity Level](#interface-simplicity-level)
  - [Metric, Object and  Measurement Attribute](#metric-object-and-measurement-attribute-3)
  - [Methodology](#methodology-3)
  - [Measurement Time](#measurement-time-3)
  - [Tools](#tools-3)
  - [Data Storage Media](#data-storage-media-3)
  - [Measurement Procedure](#measurement-procedure-3)
  - [Activities Calendar](#activities-calendar-3)

## Description

This document is intended for the definition of the metrics used to measure particular Quality Attributes, as well as the methodologies and procedure for applying each metric.

## Metrics

### **Effectiveness Rate of Performing Tasks**

#### ***Metric, Object and Measurement Attribute***

* **Metric:** Efficiency based on time.

* **Object:** Application of therapeutic complement.

* **Measurement attribute:** 
  - Direct Attribute: [Usability – Effectiveness](./Requirements%20Definition.md#effectiveness).
  - Indirect Attribute: [Usability - Simplicity](./Requirements%20Definition.md#simplicity)

#### ***Methodology***

Effectiveness can be calculated by measuring the completion rate of each of the program's tasks.

The completion rate of a specific task is calculated by means of a binary metric, that is, assign the binary value '1' if the test participant manages to complete a particular task, or assign the binary value '1' otherwise. '0', meaning no success.

It is thanks to its simplicity that the completion rate is a very easy to understand metric and therefore quite popular in the area of usability of a particular program. In addition to this, their respective results can be collected during any stage of development of the program to be measured. That is why the effectiveness will be represented as a percentage using the equation presented below:

$$ Effectiveness = \frac{ST}{TT} \times 100$$


$ST$ = Number of successfully completed tasks.

$TT$ = Total number of assigned tasks.

While you would expect to always aim for a 100% completion rate, according to a study by Jeff Sauro, the average task completion rate is 78% (based on an analysis of a total of 1200 tasks).

This metric is calculated based on a particular task that will be tested by the corresponding team (in this case, the testers), with the numerator representing the number of times that task was performed successfully divided by the total number in that the task was assigned, or the number of people responsible for performing the test.

#### ***Measurement Time***

As explained previously, the metric can be carried out together with the collection of data from it at any stage of program development, essential to have an estimate of the effectiveness that the program is carrying by the time it decides. be applied, and determine if said characteristic is being met properly or, on the contrary, make the respective corrections.

It is for the same reason that it can be performed at any stage of program development to individually check the effectiveness of each task, independent of any other (for example, to test the effectiveness of a ready-made module without the need to wait for the program is complete).

#### ***Tools***

* Computer equipment with internet connection.
* Spreadsheets.

#### ***Data Storage Media***

* Spreadsheets with the sections of each task and the fulfillment of these by each test user together with the corresponding value of success or not (1 or 0, respectively), together with the completion rate of each task.
* Sheets of paper with the same data mentioned above (optional in case you want to have a backup, or for simple convenience).


#### ***Measurement Procedure***

The step by step procedure for the measurement of the metric is detailed below:

* The Test Subjects that will test the system are defined.

* Once the data storage medium is ready and the date and time of the tests with the Test Subjects have been set, they are asked to carry out each of the system activities defined in the [Guide for the Application of Usability Tests](../Tests/Usability%20Tests/Guide%20for%20the%20Application%20of%20Usability%20Tests.md#tareas).
* At the time each activity is carried out by each Test Subject, a value of '1' will be assigned if the assigned task has been completed following the totallity of the steps required for the task, otherwise a '0' will be recorded.
* Once the activity is finished, the sum of the values ​​obtained from each activity divided by the total number of users will be made in order to obtain the completion rate of each task, that is, the effectiveness.
* Make the corresponding graphs of the percentage obtained for each task.
* Analyze the results obtained, draw conclusions and identify opportunities for improvement.

#### ***Activities Calendar***

Prior to the application of usability tests, the Testing Team must have done the following activities:

* Select the Test Subjects and ask them about their schedule availability.
* The Testing Team will set a date and time for the application of the test and will communicate the chosen date to the Test Subjects through Microsoft Teams, email or DM.

The following activities will be carried out in chronological order for the application of the test:

* Day 1: Preparation of the spreadsheet for the measurement process and recording of results.
* Day 2: The process of testing each of the tasks by the Test Subject and the Testing Team is carried out, and each of the results obtained will be recorded by the Testing Team.
* Day 3: The effectiveness calculation is made (by means of the completion rate of each of the tasks) and the corresponding graphs resulting from each task.
* Day 3: The results obtained and the identification of opportunities for improvement in the application are analyzed.

---

### **Number of User Errors**

#### ***Metric, Object and Measurement Attribute***

* **Metric:** Efficiency based on time.
* **Object:** Application of therapeutic complement.
* **Measurement attribute:**
  - Direct Attribute: [Usability – Effectiveness](./Requirements%20Definition.md#effectiveness).
  - Indirect Attribute: [Usability - Simplicity](./Requirements%20Definition.md#simplicity)

#### ***Methodology***

It consists of counting the number of errors that the participant makes when trying to complete a task. Errors can be unintentional actions, slips, errors, or omissions that a user makes while trying to perform a task. Ideally, assign a short description, a severity rating, and classify each bug in its respective category. Although it can be time consuming, counting the number of errors provides excellent diagnostic information.

Based on an analysis of 719 tasks performed with enterprise and consumer software, Jeff Sauro concluded that the average number of errors per task is 0.7, with 2 out of 3 users making a mistake. Only 10% of observed tasks completed without any errors, leading to the conclusion that it is perfectly normal for users to make errors while performing tasks.

In the case of the therapeutic complement application, two possible errors whose occurrence is important to measure were identified:

Number of times the user entered a section by mistake.
Number of times the user finished a task before its conclusion.

In this case, both errors are considered with the same level of importance, so, to standardize the results, they will be added and the system will be classified based on the following:

|Rate|Value|
| :- | :- |
|Between 0 and 1 errors|Easy to use|
|Between 2 and 3 errors|Need instructions to use|
|More than 3 errors|Hard to use|

#### ***Measurement Time***

This metric will be applied at the time of the system test, for this the applicator will need to be monitoring the user in order to observe their behavior with the system.

#### ***Tools***

* Computer equipment with internet connection.

#### ***Data Storage Media***

* Spreadsheet with the sections corresponding to each user and the possible errors that can be made.

#### ***Measurement Procedure***

As it is a simple count, when a user makes an error, it will be updated in the corresponding cell in the spreadsheet, later, a sum will be made with the value of the cells corresponding to each type of error, finally it will be classified based on the result.

#### ***Activities Calendar***
Prior to the application of usability tests, the testing team must have done the following activities:

* Select the Test Subjects and ask them about their schedule availability.
* The Testing Team will set a date and time for the application of the test and will communicate the chosen date to the Test Subjects through Microsoft Teams, email or DM.

The following activities will be carried out in chronological order for the application of the test:

* Day 1: The Testing Team prepare the environment in which the test subjects will test the system.
* Day 2: The corresponding metrics are applied and the results are collected.
* Day 3: The data obtained is analyzed and possible changes are planned.

---

### **Interface Satisfaction Level**

#### ***Metric, Object and Measurement Attribute***

* **Metric:** Interface satisfaction level.
* **Object:** Application of therapeutic complement.
* **Measurement attribute:** [Usability – Satisfaction](./Requirements%20Definition.md#satisfaction).

#### ***Methodology***

We can measure the interface satisfaction level through a questionnaire given to each test participant at the end of the test session. This in order to measure their impression of the overall ease of use of the system being tested.

For this purpose, we decided to use the *System Usability Scale (SUS)* to evaluate the usability of the application of therapeutic complement, because it has been proven to be one of the most efficient ways of collecting statistically valid data and giving to the websites a clear and reasonably precise score.

To perform this metric, after finishing the system tests, we will ask to the RP to answer a 10-question questionnaire.

The user will rank each question from 1 to 5 to evaluate the interface satisfaction level. The options corresponding to each number are as follows:

1. Strongly disagree
1. Disagree
1. Neutral
1. Agree
1. Strongly agree

Note that the type of statement alternates for each question, with positive odd and negative pair questions, this was done to reduce the bias that can occur in the case of respondents who answer the questions without taking the time to answer them properly.

After the respondent has had an opportunity to use the system being evaluated, we continue with the calculation of the metric:

1. For each one of the odd questions, the score contribution is the scale position minus 1.
1. For each of the even questions, we will subtract the value that the user assigned to 5.
1. We add all these values and multiply them by 2.5.
1. If we have more than one questionnaire answered, we simply calculate the average between all the results.

With this, we will obtain a score out of 100, however, this isn’t a percentage.

After 500 different evaluations, Jeff Sauro concludes that the average score is 68. Therefore, if the score is less than 68, there are probably several and serious problems with the website usability. On the other side, if the score is more than 68 you can relax a bit, as it is considered above average.

With the benefit of 30 years of use and data from over 10,000 responses and hundreds of products, you can interpret your SUS in at least five different ways:

![SUS-Scale](../resources/sus-scale.jpg)

* Raw SUS scores can be converted into percentile ranks. These indicate how well your raw score compares to others in the database.
* Closely related to percentile rankings are grades. These range from A, which indicates superior performance, to F, which indicates poor performance, and where C (the middle value) indicates “average”.
* The scale contains adjectives including “Good,” “OK,” and “Poor”—words users loosely associate with the usability of a product.
* Another variation on using words to describe the SUS is to think in terms of what’s “acceptable” or “not acceptable.” These terms were assigned for when the SUS was well above average or well below average.
* Finally, there is a strong correlation between the SUS and the Net Promoter Score (NPS). To achieve a Promoter classification, a SUS score needs to be reasonably close to 81 on average (which is a high bar). Detractors are associated with an average SUS of 53 and below and Passives are the scores in between (averaging 70). More information in: [Usability and Customer Loyalty- Correlation Between NPS and SUS](https://www.theuxbookmark.com/ux-articles-and-research-papers/usability-engineering/does-better-usability-increase-customer-loyalty-correlation-between-the-net-promoter-score-and-the-system-usability-scale-sus/).

Percentiles, grades, adjectives, and NPS categories to describe raw SUS scores:

*Table. SUS Results.*

|Grade|SUS score|Percentile range|Adjective|Acceptable|NPS|
| :- | :- | :- | :- | :- | :- |
|A+|84\.1 - 100|96 - 100|Best Imaginable|Acceptable|Promoter|
|A|80\.8 - 84.0|90 - 95|Excellent|Acceptable|Promoter|
|A-|78\.9 - 80.7|85 - 89||Acceptable|Promoter|
|B+|77\.2 - 78.8|80 - 84||Acceptable|Passive|
|B|74\.1 - 77.1|70 - 79||Acceptable|Passive|
|B-|72\.6 - 74.0|65 - 69||Acceptable|Passive|
|C+|71\.1 - 72.5|60 - 64|Good|Acceptable|Passive|
|C|65\.0 - 71.0|41 - 59||Marginal|Passive|
|C-|62\.7 - 64.9|35 - 40||Marginal|Passive|
|D|51\.7 - 62.6|15 - 34|OK|Marginal|Detractor|

#### ***Measurement Time***

This metric will be applied when each Test Subjhect finish the application tests, then, the Testing Team will immediately deliver the questionnaire in order to measure the metric.

#### ***Tools***

* Computer equipment with internet connection.
* Microsoft Excel Spreadsheet, or alternatively, blank sheets and pen.

#### ***Data Storage Media***

The responses to the questionnaires will be stored in spreadsheets or sheets of paper with the following structure:

|Timestamp|I think that I would like to use this system frequently.|I found the system unnecessarily complex.|I thought the system was easy to use.|...|SUS score|Average|
| :- | :- | :- | :- | :-: | :- | :- |
|~|~|~|~|~|~|~|

* For each Test Subject who answers the questionnaire, there will be a different row.
* In the *Timestamp* column, the time and date on which the survey was applied is recorded using the following format: mm/dd/yyyy hh:mm:ss (*4/28/2022 2:04:46*, for example).
* The following 10 columns correspond to the different statements of the SUS questionnaire. Therefore, a value from 1 to 5 will be entered in each column based on the user's response to that question.
* For each row, there is a *SUS Score* column in which the raw SUS result should be placed, that is, just the calculation obtained by performing the subtractions corresponding to each question and multiplying the value obtained by adding them by 2.5.
* In the last column *Average* it will have one unique record that will contain the average of all the values corresponding to the ‘SUS score’ column. 

#### ***Measurement Procedure***

* The Test Subject is asked to answer the SUS questionnaire after finishing the test session.
* For each participant:
  * The Testing Team records each answer in the corresponding row of the participant.
* The Excel file already has the formula for the SUS score of each row, so after finishing the questions and putting the answers in each cell, the SUS score will be calculated automatically.
* The responses from all PRs are averaged and recorded in the *Average* column.

#### ***Activities Calendar***
Prior to the application of usability tests, the testing team must have done the following activities:

* Select the Test Subjects and ask them about their schedule availability.
* The Testing Team will set a date and time for the application of the test and will communicate the chosen date to the Test Subjects through Microsoft Teams, email or DM.
* Prepare the questionnaires that will be delivered to the PR and the storage media for the data.

The following activities will be carried out in chronological order for the application of the test:

* Day 1: The Testing Team wll ensure the integrity and visibility of the questionnaires for their resolution.
* Day 2: The test session of the application is carried out and the results of the questionnaires are collected.
* Day 3: Calculations for the metric are performed and the results are interpreted.
* Day 3: The data obtained is analyzed and possible changes are planned.

---

### **Interface Simplicity Level**

#### ***Metric, Object and Measurement Attribute***

* **Metric:** Interface satisfaction level.
* **Object:** Application of therapeutic complement.
* **Measurement attribute:** [Usability – Satisfaction](./Requirements%20Definition.md#satisfaction).

#### ***Methodology***

Simplicity can be measured using an ordinal scale such as the SEQ (Single Ease Question), in this way the user's opinion regarding a question can be determined, in the case of this metric the question would be similar to the following "What How easy was it to perform the search task?”

And we proceed to answer the question using a 7-point scale:

![Single Ease Question Scale](../resources/seq-scale.png)

Where the value 1 represents "Very difficult", then the closer the value assigned to 1 is, the simplicity was considered as "Very difficult".

On the other hand, the value 7 represents "Very easy", so the closer the value assigned to 7 is, the simplicity was considered as "Very easy".

Also as part of the methodology, a question is usually asked asking for the reason why it qualified with said value, in this way a better vision of what has been done well and what has not is obtained.

#### ***Measurement Time***

The implementation of the metric is carried out at the exact moment when a user makes the attempt to carry out one of the possible tasks of the application in a usability test.

#### ***Tools***

* Computer equipment with internet connection.
* Spreadsheet, or alternatively, blank sheets and pen.

#### ***Data Storage Media***

Sheets where the value of the level of simplicity proposed by the User is recorded.

#### ***Measurement Procedure***

The procedure for the measurement will be carried out following the following steps:

1. Prepare the Test Subjects for the test.
1. Apply the task completion test to the RP.
1. Immediately after the completion of the test ask the question “How easy was it to perform the search task?”
1. Provide the Test Subject with the scale sheet to record their response.
1. Test Subject registers his perception of the level of simplicity and answers the question of why he assigned this value to it.
1. Finish the application of the metric.
1. Steps 1 through 6 are repeated until all Test Subjects have participated.
1. The average value of the results of the scale is calculated once all the tests have been applied and the usability has been measured with each Test Subject.

#### ***Activities Calendar***

Prior to the application of usability tests, the testing team must have done the following activities:

* Select the Test Subjects and ask them about their schedule availability.
* The Testing Team will set a date and time for the application of the test and will communicate the chosen date to the Test Subjects through Microsoft Teams, email or DM.
* Prepare the SEQ that will be delivered to the Test Subjects and the storage media for the data.

The following activities will be carried out in chronological order for the application of the test:

* Day 1: The Testing Team wll ensure the integrity and visibility of the SEQ for its resolution.
* Day 2: The test session of the application is carried out and the results of the questionnaires are collected.
* Day 3: Calculations for the metric are performed and the results are interpreted.
* Day 3: The data obtained is analyzed and possible changes are planned.