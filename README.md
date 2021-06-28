# GraphQL Crash-Course

This is an basic structure example for understanding how GraphQL works.
We are using 2 resolvers, 

1. GetCourse
2. CreateCourse

# Use the URL : http://localhost:8082/graphql

# Query that is used for Creating in the GraphQL UI
mutation{
  createCourse(input:{
    courseName:"JS Bootcamp"
    price: 199
    stack: WEB
    teachingAssists: [
      {
        firstName:"Anantha"
        lastName:"Subramanian"
        experience:1
      },
      {
        firstName:"a"
        lastName:"s"
        experience:12
      }
    ]
  }){
    id,
    courseName
  }
}
![image](https://user-images.githubusercontent.com/35069575/123602184-1d74b500-d816-11eb-83d6-29d618272c71.png)


# Query to get the GraphQL UI
query{
  getCourse(id: "ZHBu3wXzPm8fI8nDmILmr") {
    id
    teachingAssists{
      experience
    }
  }
}

![image](https://user-images.githubusercontent.com/35069575/123602281-33827580-d816-11eb-9a9a-82dcfdbc3069.png)


# Steps used for installation from scratch

  npm install

  npm install express graphql express-graphql nanoid



