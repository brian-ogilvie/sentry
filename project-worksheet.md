# Sentry Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description: Wireframes / Priority Matrix / Component Hierarchy| Complete
|Day 2| Core Application Structure (HTML, Components, CSS, etc.). MVP: 1st API call. Render data to list component | Incomplete
|Day 3| Begin Post MVP. More Info Page with data for single asteroid (2nd API call). About page with info about Sentry | Incomplete
|Day 4| BG image for page. Transitions between pages. Search filters. Google Fonts | Incomplete
|Day 5| Present | Incomplete

## Project Description

The Sentry App will query the NASA Sentry API for data about potential asteroid impacts with earth in the next 100+ years and give detailed information about each "virtual impactor," including calculated date of impact, velocity upon reaching Earth's atmosphere, impact probability, and more.

## Wireframes

[Wireframe (Desktop)](https://res.cloudinary.com/brian-ogilvie/image/upload/v1547527210/Sentry/Wireframe%20%28Desktop%29.jpg)  
[Wireframe (Mobile)](https://res.cloudinary.com/brian-ogilvie/image/upload/v1547527206/Sentry/Wireframe%20Mobile.jpg)  
[Wireframe ImpactList Component](https://res.cloudinary.com/brian-ogilvie/image/upload/v1547527206/Sentry/Wireframe--Impact%20List%20Component.jpg)

## Priority Matrix

1. API call for all probable impacts in next 100 years.
2. API call for info on a single asteroid
3. Static content about Sentry and how calculations are performed
4. Display List in Main content
5. Displey More Info in main content (triggered by click event on list item)
6. Choose Fonts for page
7. Background Image for page
8. Nice CSS transitions for navigation and user interaction
9. Searchable Query/Filters

<details>
<summary><b>Priority Matrix</b></summary>
<img alt="priority matrix" src="https://res.cloudinary.com/brian-ogilvie/image/upload/v1547527210/Sentry/Priority%20Matrix.jpg" >
</details>

### MVP/PostMVP - 5min
#### MVP 

- Fetch date from Sentry API for all impacts with probability >= 1e-3
- Render data in a list in Main content

#### PostMVP 

- More Info page with lots more data on any single asteroid impact. * Second API call.
- Make list sortable by date/object/impact probability
- Well-written About page with information about Sentry
- Customizeable Search Query/Filters

## React Architectural Design

<details>
	<summary><b>Component Hierarchy</b></summary>
	<img alt="component hierarchy" src="https://res.cloudinary.com/brian-ogilvie/image/upload/v1547528616/Sentry/Component%20Hierarchy.jpg" >
</details>

## Functional Components
| Component | Description | 
| --- | :---: |
|App | Class: Maintains array of impact data and passes to child components |  
| Header | Functional: Renders page title and source information | 
| Footer | Functional: More source information |
| Nav | Class: dictates the active content within the main section. Implements React Router Links |
| Main | Functional: Renders React Router Routes |
| ImpactList | Class: Initiates 1st API call and sends response back to App. Renders data in a list |
| ImpactItem | Functional: Displays data for one element of the list array |
| AsteroidData | Class: Initiates 2nd API call and renders data about a given virtual impactor |
| About | Functional: Static information about Sentry |

## Time Frames
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Core Application Structure | H | 2hrs| |
| 1st API call | H | 1hr |  |
| Render Data to ImpactList component | H | 2hrs | |
| Trigger & initiate 2nd API Call | M | 2hrs | |
| Render Asteroid Data to AsteroidData page | M | 2hrs | |
| Write content for About page | M | 1hr | |
| Render content in About page | M | 1hr | |
| Background Image conmponent for page | L | 1hr | |
| More robust CSS design/layout | L | 2hrs | |
| Nice CSS Transitions for navigation | L | 2hrs | |
| Searchable Query/Filters | L | 4hrs | |
| Total | n/a | 20hrs |  | 

## Helper Functions
| Function | Description |
| :---: | --- |
| convertExpToDecimal() | Converts a number in exponential notation to a decimal. |


## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
| Library | What it Does | 
| --- | :---: |  
| [Sentry API](https://ssd-api.jpl.nasa.gov.sentry.api) | Provides all data for my project | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
