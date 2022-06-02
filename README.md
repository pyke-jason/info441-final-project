## Installation

Install node modules with `npm i`

Make sure to set the following environment variables:

- `SESSION_SECRET`: anything you want
- `MONGODB_URI`: `mongodb+srv://jpyke:a3!mongodb@cluster0.1guew.mongodb.net/final?retryWrites=true&w=majority` (or your testing server)

## Project Description 

For those whose primary language isn’t English, finding books in one’s own culture can be very difficult. In our project, we want to connect indigenous people who speak minoritized languages with public library books in their native tongue. Currently, after searching the American Library Association (ALA), the Society for American Archivists (SAA), and the Association for Tribal Libraries and Museums (ATALM), there are no tools available that can perform such duties as both a finding aid and as a data-driven illustration of library collections for minoritized and language-focused patrons. \
 \
As Developers, we want to build this tool to fill a niche and provide a usable social good to Public Library users and Library Administrators across the spectrum of cultures and languages. We envision an application built in collaboration with regional public libraries to encode less common languages or translated books in a way easily discoverable by native speakers. Our target audience is indigenous people seeking to discover more books in their native language. However, we also consider public library systems as another stakeholder in our application, because they will facilitate insertion of book and language data into our application. Those who wish to discover new books in their native language will want to use our application to greatly expedite the research process, as the relevant data is packaged in an intuitive and accessible manner. Conversely, libraries are incentivized to use our application as a means of attracting a wider range of readers.When implemented fully, our application will allow readers and libraries to connect with each other through a novel method.


## Technical Description


## Architectural Diagram


![alt_text](readmeimages/image1.png "image_tooltip")



## User Stories Summary


<table>
  <tr>
   <td>Priority 
   </td>
   <td>User
   </td>
   <td>Description
   </td>
   <td>Technical Implementation
   </td>
  </tr>
  <tr>
   <td>P0
   </td>
   <td>As a member of the public
   </td>
   <td>I want to search for books in public libraries using my native language
   </td>
   <td>When pulling books out of the database, add a <strong>filter to the query</strong> (as opposed to having the server filter the database results, or the client filters what the server sent). 
   </td>
  </tr>
  <tr>
   <td>P1
   </td>
   <td>As a librarian
   </td>
   <td>I want to enter books with specific language to the website to make it available to the public
   </td>
   <td>Add a <strong>post</strong> function to the front end so that the user could store data into our database. 
   </td>
  </tr>
  <tr>
   <td>P2
   </td>
   <td>As a librarian
   </td>
   <td>I want replace old version books with newer version data
   </td>
   <td>When storing book data into the database, also include a function to <strong>link</strong> different versions of the same book under the same <strong>primary key</strong>.
   </td>
  </tr>
  <tr>
   <td>p3
   </td>
   <td>As a member of the public
   </td>
   <td>I want to have my own account on the website to receive personal book recommendations
   </td>
   <td>Use the <strong>auth tokens</strong> to allow users to create accounts in the database using their email. Storing user languages, and reading history to tune the feed in the personal page. 
   </td>
  </tr>
</table>


 


## Available Endpoints

GET /books/query?{terms}



* Perform a book search using language, title and region search terms

GET /books/{id}, POST /books/{id}



* Get or add book name, translation name, original language, date created, etc. Does not require authentication to access these endpoints

GET /library/signin, GET /library/signout



* These endpoints handle library institution authentication. A library entity can authenticate and go through a verification process. We will use Microsoft Identity Express

GET /error 



* Returned when a server error occurs

GET /library/unauthorized



* Used for redirects when a user does not have permission to make changes a library would make