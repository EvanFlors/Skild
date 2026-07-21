/**
 * Quick seed script to add one skill properly
 */

import { initializeApp } from "firebase/app";
import {
	connectDataConnectEmulator,
	getDataConnect,
} from "firebase/data-connect";

// @ts-ignore
import { connectorConfig, createUser, createSkill } from "../src/dataconnect-generated/esm/index.esm.js";

const firebaseConfig = {
	apiKey: "demo-api-key",
	authDomain: "demo.firebaseapp.com",
	projectId: "demo-project",
	appId: "demo-app-id",
};

const app = initializeApp(firebaseConfig);
const dataConnect = getDataConnect(app, connectorConfig);
connectDataConnectEmulator(dataConnect, "localhost", 9399);

console.log("🌱 Creating test data...\n");

async function seed() {
	try {
		// Create user first
		console.log("👤 Creating user...");
		await createUser(dataConnect, {
			clerkId: "user_3GmE8DjtSFnFmM63KiYps4TzUm6",
			email: "evan@example.com",
			username: "evanflores",
			image: "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMUXROemFmMTgtSGZ1X2NCakhNVVg1N3FuR2YzVjB6bkpNLVlvRHR6RFVaMXM1aGc9czEwMDAtYyIsInMiOiJSTmozaDNGc0FGVmtFYjdMaVU3V3BpeDRpMmVmMW1zVEhjdHJ4TStYRVVNIn0"
		});
		console.log("✅ User created\n");

		// Create skill (createdAt will be auto-generated)
		console.log("📚 Creating skill...");
		await createSkill(dataConnect, {
			authorId: "user_3GmE8DjtSFnFmM63KiYps4TzUm6",
			title: "Performance Tuner",
			description: "Identifying performance bottlenecks in web applications.",
			tags: ["AI Agent", "Engineering"],
			installCommand: "npx skild add performance-tuner",
			promptConfig: "You are a performance optimization engineer.",
			usageExample: "Review the code and optimize it."
		});
		console.log("✅ Skill created with auto-generated createdAt\n");

		console.log("🎉 Done! Now test your app.");
	} catch (error) {
		console.error("❌ Error:", error);
	}
}

seed();
