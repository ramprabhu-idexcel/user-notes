# User to create, store and view notes

User need to store notes using postgresql

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

We need to use below ruby, rails,
```
ruby - 2.5.5

rails - 5.2.3
```

### Installing

Please follow the below steps to install the application on local machine,

Go to the root directory of the application. Make sure that your ruby and rails versions are equilvanent to the above mentioned one.

Run following commands

```
bundle install

```

```
rails db:create
```
```
rails db:migrate
```

## Running the application

Please run following command to start rails application

```
rails s -p 5000
```

```
http://localhost:5000/notes
```

### Run rspec test cases

Please run below command for rspec test cases

```
rspec .
```
## Built With

* [Rails](https://guides.rubyonrails.org/) - The web framework used
 

## Authors

* **Ramprabu ** - *Initial work* - [Ramprabu](https://ramprabu.wordpress.com/author/ramprabu/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
