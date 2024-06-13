# Running the project

1. Clone the repository or download the project files from GitHub.
2. Navigate to the root directory of the project using the cd command from your terminal.
3. Make sure you have Node.js and npm installed on your system.
4. Run `npm install`.
5. Once the installation is complete, run `npm start` to start the development server.
6. Your web browser should automatically open the React application. If not, you can manually navigate to `http://localhost:3000`

# Random user and profile
The goal of this assignment is to implement a **responsive web application** in `React` + `Typescript`, to fetch random user data from `randomuser` API and join dog pictures to user profiles from [dog-images](https://dog.ceo/dog-api/) API.

## Assignment
1. Implement a responsive SPA with 2 pages/views: `main` and `details`.

2. On the `main` view user can choose a `nationality` and provide a number (i.e. `N`) as input to fetch `N` number of random users from `randomuser` API by clicking a `fetch` button.

2. Display the fetched users in a list/grid with profile picture fetched from `dog-images` API on the `main` view.

3. Selecting a ramdom user from the list of results will navigate to `details` view, where only displaying profile photo, names, email and phone number is enough.

### How to fetch the data

Random users can be fetched from `randomuser` API endpoint. For example, if you would like to fetch 4 random users of Finnish nationality, request this: https://randomuser.me/api?seed=1234579&nat=fi&results=4, where the query parameters are:
* `seed`: random seed, which makes sure that the returned user is always the same. Field accepts both numbers and strings.
* `nat`: nationality code. Accepted values are: fi/de/es/us/au/dk/ir/no
* `results`: defines how many random users to be returned

Random dog picture for each user (as profile picture) can be fetched from `dog-images` API: https://dog.ceo/api/breeds/image/random

> [!NOTE]  
> API response returns url for image, not the image itself.
>
> To fetch multiple dog images, please request this: https://dog.ceo/api/breeds/image/random/4