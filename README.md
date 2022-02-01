# Little Library Front End Development

This will be my main repo for my capstone project for the General Assembly Software Engineering Immersive using Angular Framework for the front end. For a look at my SpringBoot application go to [LittleBackEnd](https://github.com/SethThomaspowered/littlebackend). 

## Project Proposal

Build a website for the books that I have in my little library. People should be able to view books that are currently available. Users should be able to marks books that are checked out and add books to library.

## User Stories

### MVP
A visitor to the website:
  - See the most recent additions to library.
  - Click on books to get more details.
  - Leave a comment 

A library steward should be available to: 
  - Add books to a database
  - Update status of book availability 
  - Add book recommendations
 
 ### Bonus
 - Add log in functionality
 - Allow visitors to search for a book, by title, author, or genre
  - If book is not found offer recommendations on where to find
 - Add additional libraries
 - Access API for additional book details
 - Access API for local current events and weather


## ERD

| Books | datatype |
|:-----:|:-----:|
| id    | Long PK |
| bookTitle | string |
| authorName | string |
| Date Added | number |
| IsAvailable | boolean |
| GoogleBooksID | string FK |

| Users | datatype |
|:-----:|:------:|
| id | Long PK |
| username | string |
| email | string |
| password | string |

| Recommendations | datatype |
|:------:|:-----:|
| id | Long PK|
| title | string |
| post | string |
| date | number |
| userId | Long FK |
| bookId | Long FK |

## Resources
- Dealing with env files. (ITsolutionstuff)[https://www.itsolutionstuff.com/post/how-to-use-environment-variable-in-angularexample.html]
- Setting up a 404 page (GeeksforGeeeks)[https://www.geeksforgeeks.org/how-to-setup-404-page-in-angular-routing/]
- Connecting SpringBoot to Angular (Baeldung)[https://www.baeldung.com/spring-boot-angular-web]
- Handling No-Access-Control-Allow issue (StackOverflow)[https://stackoverflow.com/questions/20035101/why-does-my-javascript-code-receive-a-no-access-control-allow-origin-header-i]
- Angular documentation (Angular.io)[https://angular.io/api/common/http/HttpHeaders]
- Heroku issues (Heroku)[https://devcenter.heroku.com/]
