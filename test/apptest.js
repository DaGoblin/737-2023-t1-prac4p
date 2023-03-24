var expect = require("chai").expect;
var request = require("axios");

describe("Test Addition", () => {
  let url = "http://localhost:3000/add/2/4";
  it("Return status code 200", async () => {
    const response = await request.post(url);
    expect(response.status).to.equal(200);
  });

  it("add 2 to 4 = 6", async () => {
    const response = await request.post(url);
    console.log(response);
    expect(response.data).to.equal(6);
  });
});
