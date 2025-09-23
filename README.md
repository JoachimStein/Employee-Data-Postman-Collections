# Employee API with Newman Report
## Pre-requisite
- Postman
- NodeJS
- Visual Studio Code

## About This Project

This is an `Employee API Collection Automation Project.` Here, we have *Create*, *Update*, *Get Data* and *Delete* employee information with assertion.
In this project, we have validate the test cases and generated _Newman Report_. The test scripts were written in such a manner so that the project can run with dynamic values. Data driven testing approach has also been implemented within this project via postman collection runner through uploading the data file in the postman workspace for multiple iteration. The sample data file is in .csv format and attached along with the postman collection.

## How to run this project
- ```Clone this project``` [Employee API Project](https://github.com/JoachimStein/Employee-Data-Postman-Collections.git)
- ```Hit the Command```
  ```bash
    npm i newman
  ```
  ```bash
    node newman-employee-config.js
  ```

## API Documentation [API Document File](https://documenter.getpostman.com/view/36869923/2sB3HtEw4x)

## Newman Report
<img width="707" height="878" alt="image" src="https://github.com/user-attachments/assets/66c6a6cd-9cff-45aa-80e0-9d3ccd8241df" />

_Newman Report Front Page_

<img width="701" height="405" alt="image" src="https://github.com/user-attachments/assets/ee14020e-69ab-4888-bfd7-d5a3a9976fdf" />

_Test Execution: All Passed_

<img width="701" height="181" alt="image" src="https://github.com/user-attachments/assets/7bbbb7c1-be91-46b8-993b-4c49679823ba" />

_No failed test!_

<img width="699" height="178" alt="image" src="https://github.com/user-attachments/assets/f4901c49-4c92-4a54-bca2-9db1522c5a80" />

_No Test Skipped!_
