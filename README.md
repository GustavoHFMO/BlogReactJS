# BlogReactJS

Web application developed to learning React Js concepts. This application allows to create, read, update and delete (CRUD) posts. All posts are stored using Mongo db. Besides that, there are registration and login pages to control the user session. To understand the BlogReactJs application, follow this structure:

1. [Blog Images](#head1)
2. [Technologies](#head2)
3. [How to run](#head3)


# <span id="head1">1. Blog Images<span/>
## 1.1. Login Page
![](https://github.com/GustavoHFMO/BlogReactJS/blob/master/blog_presentation/login_page.PNG)

## 1.2. Listing Posts
![](https://github.com/GustavoHFMO/BlogReactJS/blob/master/blog_presentation/blog_presentation.png)

## 1.3. Updating the User Settings
![](https://github.com/GustavoHFMO/BlogReactJS/blob/master/blog_presentation/settings.PNG)

## 1.4. Writting a New Post
![](https://github.com/GustavoHFMO/BlogReactJS/blob/master/blog_presentation/writting_post.PNG)

## 1.5. Updating a Post
![](https://github.com/GustavoHFMO/BlogReactJS/blob/master/blog_presentation/editting_post.PNG)

# <span id="head2">2. Technologies<span/>
* API
  * [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme)
  * [cors](https://github.com/expressjs/cors#readme)
  * [dotenv](https://github.com/motdotla/dotenv#readme)
  * [express](http://expressjs.com/)
  * [mongoose](https://mongoosejs.com)
  * [multer](https://github.com/expressjs/multer#readme)
  * [nodemon](https://nodemon.io)
  * [path](http://nodejs.org/docs/latest/api/path.html)

* Client
  * [axios](http://nodejs.org/docs/latest/api/path.html)
  * [react-router-dom](https://github.com/ReactTraining/react-router#readme)
  * [styled-components](https://styled-components.com/)

# <span id="head3">3. How to run<span/>
```
# Cloning the repository
$ https://github.com/GustavoHFMO/BlogReactJS.git

# Acessing the API repository
$ cd BlogReactJS/api/

# Installing the API dependencies
$ yarn install 

# Running the API
$ yarn start

# Acessing the client repository
$ cd BlogReactJS/client/

# Installing the client dependencies
$ yarn install 

# Running the client
$ yarn start
```

## License
This project is under a GNU General Public License (GPL) Version 3. See [LICENSE](https://www.gnu.org/licenses/gpl-3.0-standalone.html) for more information.
