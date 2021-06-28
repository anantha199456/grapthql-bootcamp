# GraphQL Crash-Course

This is an basic structure example for understanding how GraphQL works.
We are using 2 resolvers, 

1. GetCourse
2. CreateCourse

//Use the URL : http://localhost:8082/graphql

// Query that is used for Creating in the GraphQL UI
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


//Query to get the GraphQL UI
query{
  getCourse(id: "ZHBu3wXzPm8fI8nDmILmr") {
    id
    teachingAssists{
      experience
    }
  }
}

# Steps used for installation from scratch

  npm install

  npm install express graphql express-graphql nanoid



