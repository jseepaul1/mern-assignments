const express = require("express");
const app = express();
const faker = require("faker");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createUser = () => ({
  _id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.phoneNumber(),
  password: faker.internet.password(),
});

const createCompany = () => ({
  _id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  address: {
    street: faker.address.streetName(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
    country: faker.address.country(),
  },
});

app.get("/api/users/new", (req, res) => {
  console.log("This is a new user");
  res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
  console.log("This is a new company");
  res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
  console.log("This is a user with their company");
  res.json({
    user: createUser(),
    company: createCompany(),
  });
});

app.listen(8000, () => console.log(`Welcome to port 8000`));
