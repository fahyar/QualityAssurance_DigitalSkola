import fetch from "node-fetch";
import { expect } from "chai";

describe("API Automation Tests", function () {
  const baseURL = "https://reqres.in";

  // METHOD GET
  it("GET - Get list of users", async function () {
    const response = await fetch(`${baseURL}/api/users/2`, {
      headers: { "x-api-key": "reqres_2a997c74e08742a0b981d2c1ad7584d9" },
      method: "GET",
    });

    const result = await response.json();
    console.log(result.data);
    //const body = await response.json();

    expect(response.status, "Status should be 200").to.equals(200);
  });
});

// METHOD POST
// it("POST - Create a new user", async function () {
//   const newUser = {
//     name: "Sena Rider",
//     job: "Runner",
//   };

//   const response = await fetch(`${baseURL}/api/users`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newUser),
//   });
//   const body = await response.json();

// });
