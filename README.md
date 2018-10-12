## Remote FS
Remote FS is a project app. The objective is a cloud-based file storage and sharing platform with tools for organizing documents into projects, folders, etc, with invite-based access to private content.

Built with [Create React App](https://github.com/facebookincubator/create-react-app) and additional libaries including:  

* `styled-components` for CSS-in-JS styling
* `redux` for state management
* `axios` for API requests
* `express` for the server
* `sequelize` for ORM
* `postgres` for database
* `aws-sdk` for file storage (S3 bucket)

To run a local instance, run `yarn install` then `yarn dev`.

#### Todos
* Route uploads to S3 bucket
* Store file references in database
* Configure file downloads
* Host with continuous integration
* Tests
* Set up account creation and authentication
* Enable roll-based access to assets
* Enable invite access to projects 