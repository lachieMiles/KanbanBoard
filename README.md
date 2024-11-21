# Full-Stack React: Kanban Board

This week is we created a Kanban board, adding authentication with JWT.

## User Story

```md
AS A member of an agile team
I WANT a Kanban board with a secure login page
SO THAT I can securely access and manage my work tasks
```

## Acceptance Criteria

```md
GIVEN a Kanban board with a secure login page
WHEN I load the login page
THEN I am presented with form inputs for username and password
WHEN I enter my valid username and password
THEN I am authenticated using JSON Web Tokens (JWT) and redirected to the main Kanban board page
WHEN I enter an invalid username or password
THEN I am presented with an error message indicating that the credentials are incorrect
WHEN I successfully log in
THEN a JWT is stored securely in the client's local storage for subsequent authenticated requests
WHEN I log out
THEN the JWT is removed from the client's local storage and I am redirected to the login page
WHEN I try to access the Kanban board page without being authenticated
THEN I am redirected to the login page
WHEN I remain inactive for a defined period
THEN my session expires, the JWT is invalidated, and I am redirected to the login page upon my next action
```

## Mock-Up

The following images show the web application's appearance and functionality:

![The Kanban board application displays a Login Required page.](./Assets/14-00-unauthenticated-page.png)

![The Kanban board application displays a Login page.](./Assets/14-01-login-page.png)

![The Kanban board application includes a main page that displays a list of all tasks sorted into three columns according their statuses.](./Assets/14-02-main-page.png)
