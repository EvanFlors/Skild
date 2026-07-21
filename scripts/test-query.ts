#!/usr/bin/env node

/**
 * Test Data Connect Query
 * This script tests if createdAt is being returned from the GetSkills query
 */

import { initializeApp } from "firebase/app";
import {
	connectDataConnectEmulator,
	getDataConnect,
} from "firebase/data-connect";

// @ts-ignore
import { connectorConfig, getSkills } from "../src/dataconnect-generated/esm/index.esm.js";

const firebaseConfig = {
	apiKey: "demo-api-key",
	authDomain: "demo.firebaseapp.com",
	projectId: "demo-project",
	appId: "demo-app-id",
};

const app = initializeApp(firebaseConfig);
const dataConnect = getDataConnect(app, connectorConfig);
connectDataConnectEmulator(dataConnect, "localhost", 9399);

console.log("🔍 Testing GetSkills query...\n");

async function testQuery() {
	try {
		const result = await getSkills(dataConnect, { limit: 1 });

		console.log("📦 Full result:");
		console.log(JSON.stringify(result, null, 2));

		if (result.data.skills.length > 0) {
			const skill = result.data.skills[0];
			console.log("\n📝 First skill:");
			console.log("  Title:", skill.title);
			console.log("  createdAt:", skill.createdAt);
			console.log("  createdAt type:", typeof skill.createdAt);
			console.log("  createdAt value is empty?", !skill.createdAt);

			console.log("\n✅ All fields present:");
			console.log(Object.keys(skill).sort());
		} else {
			console.log("\n⚠️  No skills found");
		}
	} catch (error) {
		console.error("\n❌ Error:", error);
	}
}

testQuery();
