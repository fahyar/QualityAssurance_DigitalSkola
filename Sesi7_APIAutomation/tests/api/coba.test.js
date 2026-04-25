import fetch from "node-fetch";
import { expect } from "chai";
import Ajv from "ajv";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { schemaUser, schemaCreateUser } from "../../schema/reqresSchema.js";

// Setup environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath });

describe("API Automation Tests", function () {
  const baseURL = "https://reqres.in";
  const ajv = new Ajv();
  const API_KEY = process.env.API_KEY;

  // Verification that API_KEY is loaded
  before(function () {
    console.log("\n=== Environment Configuration ===");
    console.log(`API_KEY Loaded: ${API_KEY ? "✓ YES" : "✗ NO"}`);
    if (API_KEY) {
      console.log(`API_KEY Value: ${API_KEY.substring(0, 10)}...`);
    } else {
      console.warn("⚠️ WARNING: API_KEY not loaded from .env file!");
    }
    console.log(`ENV Path: ${envPath}\n`);
  });

  // METHOD GET - Get single user
  it("GET - Get single user by ID (user 2)", async function () {
    const userId = 1;

    const response = await fetch(`${baseURL}/api/users/${userId}`, {
      method: "GET",
      headers: {
        "x-api-key": API_KEY,
      },
    });

    // Status validation
    expect(
      response.status,
      `Expected status 200 but got ${response.status}`,
    ).to.equal(200);
    expect(response.ok, "Response should be successful").to.be.true;

    // Parse response
    const result = await response.json();
    console.log(`GET /api/users/${userId} - Status: ${response.status}`);

    // Schema validation
    const validateSchema = ajv.compile(schemaUser);
    const isValidSchema = validateSchema(result);
    expect(
      isValidSchema,
      `Schema validation failed: ${JSON.stringify(validateSchema.errors)}`,
    ).to.be.true;
    console.log("✓ Response matches schema");
  });

  // METHOD POST - User registration
  it("POST - User registration with email and password", async function () {
    const credentials = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };

    const response = await fetch(`${baseURL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": API_KEY },
      body: JSON.stringify(credentials),
    });

    expect(
      response.status,
      `Expected status 200 but got ${response.status}`,
    ).to.equal(200);

    const result = await response.json();
    console.log(`POST /api/register - Status: ${response.status}`);

    expect(result).to.have.property("id");
    expect(result).to.have.property("token");
    expect(result.id).to.be.a("number");
    expect(result.token).to.be.a("string");
    console.log("✓ Registration successful with token received");
  });
});
