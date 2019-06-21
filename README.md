# githoogle
A fancy poc project to test Reactj Hooks, Redux, NextJs, Thunk, Styled Components, Material-ui and a lot more

Live version here: [https://githoogle.tadeuqc.now.sh/](https://githoogle.tadeuqc.now.sh/)
## Setup

- **Clone the repository with git** by running the following command:
```bash
  git clone git@github.com:tadeuqc/githoogle.git
  ```
- **Install the dependencies** with [**Yarn**](https://yarnpkg.com/en/) ...or [**Npm**](https://www.npmjs.com/). I'll be using Yarn on this README file. 

```bash
  cd githoogle
  yarn install
```

- **Run development server** with your preferred package manager

```bash
 yarn dev
 ```
 
 ## Run production version locally
 - **Run build script** with your preferred package manager
 ```bash
  yarn build
  ``` 
- **Comment the content of the next.config.js file** the file content must look like this:
 ```bash
  //module.exports = {
  //	target: 'serverless'
  //};

  ``` 
  
- **Run start script**. You can also set the port you want by running the command below with "PORT=[the port you want]" for example. The server runs on port 3000 by default
```bash
yarn start
``` 

 ## Run production version on NOW
 - **Run build script** with your preferred package manager
```bash
 yarn build
 ``` 
 
 - This project is configured to fast deploy production version into a Zeit's NOW serverless environment by default. You can deploy it by running the now command on the projects directory:
```bash
 now
 ``` 
 

