# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1 - Add custom Agent IDs to database

#### Description

Add CustomId column to Agents table. Because this is a user-facing field, the column data type should support Unicode. An appropriate size may be 255 characters. Because the value is an ID, a unique constraint should be applied to the column. Because there are existing rows and no suitable default value, the column must be made nullable.

#### Time Estimate

1 Hour

### Ticket 2 - Add custom Agent IDs to the API

#### Description

Modify the API functions for creating, reading, and updating an Agent to include a nullable CustomId field. Perform validation and return appropriate errors if the field is the wrong type, an empty string, exceeds the allowed length, or matches an existing value.

#### Time Estimate

2 Hours

### Ticket 3 - Add custom Agent IDs to the UI

#### Description

Update UI elements such as forms for creating and updating Agents to include optional fields for the CustomId and to pass its value to the appropriate API functions. Add error messages to help users enter valid values. When showing a summary of an Agent in the UI, display the CustomId if it exists.

#### Time Estimate

2 Hours

### Ticket 4 - Add custom Agent IDs to reports

#### Description

Update `generateReport` to include the CustomId when it exists.

#### Time Estimate

1 Hour
