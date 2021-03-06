<h1 align="center">
  smart-brain
</h1>
<p align="center">
  A Full-Stack Image Recognition App. Created for the "The Complete Web Developer in 2020: Zero to Mastery" course by Andrei Neagoie. Deployed on <a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku</a>.
</p>
<p align="center">
  This project was bootstrapped with <a href="https://github.com/facebook/create-react-app">Create-React-App</a>.
</p>
<p align="center">
  Here is the <a href="https://github.com/khoaHyh/smart-brain" target="_blank" rel="noopener noreferrer">front end</a> of the project.
</p>

![demo](https://raw.githubusercontent.com/khoaHyh/smart-brain/master/src/images/smart-brain.png)

## Tech/framework used
#### Built with:
  * React.js
  * Node.js
  * Express.js
  * Knex.js
  * PostgreSQL

## API Reference
This app uses the <a href="https://www.clarifai.com/models/face-detection" target="_blank" rel="noopener noreferrer">Clarifai Face Detection Model API</a>.

## Credits
  * <a href="https://github.com/aneagoie">Andrei Neagoie</a> for the tutorial on creating this project and giving us the room to make our own mistakes!

## Notes
  * The Clarifai API does not work with data/image(base64) types of images.
  * This app is using the free services that Heroku provides. As such, the app gets unloaded from server memory when it is unused for a while. Functions such as signing in and register may take a while to update because of this. For more information, here is the [official note](https://devcenter.heroku.com/articles/dynos#dyno-sleeping).