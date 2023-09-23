# Test assignment aab
__testcafe and JavaScript__

The environment exists of 2 pages, which I mirrored in testcode:
- login_page.js
- index_page.js

__Login_page__

I combined the log in and log out function on the same page, they are both a authentication-related functionality and belong together. This makes them easy to find and maintain. 
Other features that are repeated on several pages or for example more complicated features I would usually give their own page.

The users.js file is copied to tests / data. Instead of using the same data source as the code, I chose to repeat the data so the tests fails when there are changes on the code side. After confirming that changes were made on purpose the test data should be changed.

On the login_page.js I made a login function that takes in the email and password as arguments.
The input field does not clear itself after a login attempt - in my opnion a big issue (escpecially for a bank or any other app with sensitive client information)

There is also a loginAdmin function that finds the user in the users data that contains admin and takes the email and password of this user as arguments for the login().
This way we have an Admin user that can be easily used in tests, but when the data needs changing there is only 1 point of truth.

I created a test for the Login page that logs in, asserts that it lands on the index page, and then logs out. The for loop is placed outside of the test so there is a separate test for all users. When a login fails it is immediately clear which user failed and the tests for the other users are still executed (testcafe does not seem to have soft assertions).

Other tests for the login page simply assert the header and footer text.


__Index_page__

For the index page I made a test that asserts the content text. The decision of whether to check the full text or only a certain part of it depends on the context and can be discussed.

There is also a test for the items in the navigation header. The login is a beforeEach that is moved to the fixture. The test is executed for each item in the navigation. If more items are added to the navigation, they only need to be added to the array of objects.


__Other automation / optimalizations__

I completed the yml testcafe file in the github folder so it can run in github actions. 
Locally I use the testfolder as the testdirectory, CI runs from what it considers workspace root. I added a patch in util.js to support both cases.

Running the tests was quite slow, therefor I tried to speed it up a bit by specifying in .testcaferc.js in which folder to look for tests, running the browser headless and use concurrency.
To speed the tests up in the pipeline I added in the yml cache for npm and dependencies in the package-lock.json, headless and concurrency.

Finally, I also incorporated an HTML reporter during the test execution process. This HTML reporter generates a detailed report that includes a timestamp, and is automatically saved as an artifact within the GitHub Actions workflow for easy access and review.


*Thanks for the assignment!*

*Elvira 't Hart*
