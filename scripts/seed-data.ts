/**
 * Seed script for Firebase Data Connect
 * Run with: npm run seed
 *
 * Note: Using @ts-ignore for generated imports as they may not have proper type declarations
 */

import { initializeApp } from "firebase/app";
import {
	connectDataConnectEmulator,
	getDataConnect,
} from "firebase/data-connect";

// @ts-ignore - Generated SDK imports
import { connectorConfig, createUser, createSkill } from "../src/dataconnect-generated/esm/index.esm.js";

// For local emulator, we can use demo credentials
const firebaseConfig = {
	apiKey: "demo-api-key",
	authDomain: "demo.firebaseapp.com",
	projectId: "demo-project",
	appId: "demo-app-id",
};

const app = initializeApp(firebaseConfig);
const dataConnect = getDataConnect(app, connectorConfig);

// Connect to emulator (default port is 9399)
connectDataConnectEmulator(dataConnect, "localhost", 9399);

// Test users
const testUsers = [
	{
		clerkId: "user_test_alice",
		email: "alice@example.com",
		username: "Alice Developer",
		image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
	},
	{
		clerkId: "user_test_bob",
		email: "bob@example.com",
		username: "Bob Engineer",
		image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
	},
	{
		clerkId: "user_test_carol",
		email: "carol@example.com",
		username: "Carol Designer",
		image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carol",
	},
];

// Test skills
const testSkills = [
	{
		authorId: "user_test_alice",
		title: "React Component Builder",
		description:
			"Build reusable React components with TypeScript, props validation, and best practices. Includes hooks, context, and modern patterns.",
		tags: ["react", "typescript", "components", "frontend"],
		installCommand: "npm install react react-dom @types/react",
		promptConfig: JSON.stringify({
			systemPrompt:
				"You are an expert React developer. Create clean, reusable components with TypeScript.",
			temperature: 0.7,
		}),
		usageExample:
			"Ask: 'Create a reusable Button component with variants and TypeScript'",
	},
	{
		authorId: "user_test_alice",
		title: "API Route Generator",
		description:
			"Generate RESTful API routes with proper error handling, validation, and TypeScript types. Supports Express, Fastify, and Next.js.",
		tags: ["api", "backend", "typescript", "rest"],
		installCommand: "npm install express @types/express zod",
		promptConfig: JSON.stringify({
			systemPrompt:
				"You are a backend expert. Create secure, validated API routes with proper error handling.",
			temperature: 0.6,
		}),
		usageExample: "Ask: 'Create a REST API endpoint for user authentication'",
	},
	{
		authorId: "user_test_bob",
		title: "Database Schema Designer",
		description:
			"Design and generate database schemas with migrations, indexes, and relationships. Supports PostgreSQL, MySQL, and MongoDB.",
		tags: ["database", "schema", "sql", "migrations"],
		installCommand: "npm install prisma @prisma/client",
		promptConfig: JSON.stringify({
			systemPrompt:
				"You are a database architect. Design normalized, efficient schemas with proper indexes.",
			temperature: 0.5,
		}),
		usageExample:
			"Ask: 'Design a schema for an e-commerce platform with users, products, and orders'",
	},
	{
		authorId: "user_test_bob",
		title: "TailwindCSS Styler",
		description:
			"Create beautiful, responsive designs with TailwindCSS. Includes custom utilities, animations, and design system patterns.",
		tags: ["css", "tailwind", "design", "ui"],
		installCommand: "npm install -D tailwindcss postcss autoprefixer",
		promptConfig: JSON.stringify({
			systemPrompt:
				"You are a UI/UX expert. Create beautiful, accessible designs with TailwindCSS.",
			temperature: 0.8,
		}),
		usageExample:
			"Ask: 'Style this card component with Tailwind to look modern and professional'",
	},
	{
		authorId: "user_test_carol",
		title: "Test Suite Generator",
		description:
			"Generate comprehensive test suites with unit tests, integration tests, and e2e tests. Supports Jest, Vitest, and Playwright.",
		tags: ["testing", "jest", "vitest", "quality"],
		installCommand: "npm install -D vitest @testing-library/react",
		promptConfig: JSON.stringify({
			systemPrompt:
				"You are a QA expert. Write comprehensive, maintainable tests with good coverage.",
			temperature: 0.6,
		}),
		usageExample: "Ask: 'Write tests for this authentication service'",
	},
	{
		authorId: "user_test_carol",
		title: "Documentation Writer",
		description:
			"Generate clear, comprehensive documentation with examples, API references, and guides. Supports Markdown, MDX, and JSDoc.",
		tags: ["documentation", "markdown", "jsdoc", "guides"],
		installCommand: "npm install -D typedoc",
		promptConfig: JSON.stringify({
			systemPrompt:
				"You are a technical writer. Create clear, comprehensive documentation with examples.",
			temperature: 0.7,
		}),
		usageExample:
			"Ask: 'Document this API with usage examples and parameter descriptions'",
	},
	{
		authorId: "user_test_alice",
		title: "GraphQL Schema Builder",
		description:
			"Design and implement GraphQL schemas with resolvers, mutations, and subscriptions. Includes best practices and performance optimization.",
		tags: ["graphql", "api", "schema", "backend"],
		installCommand: "npm install graphql @graphql-tools/schema",
		promptConfig: JSON.stringify({
			systemPrompt:
				"You are a GraphQL expert. Design efficient schemas with proper type safety.",
			temperature: 0.6,
		}),
		usageExample: "Ask: 'Create a GraphQL schema for a blog with posts and comments'",
	},
	{
		authorId: "user_test_bob",
		title: "Docker Compose Setup",
		description:
			"Generate Docker Compose configurations for development and production. Includes multi-container setups, networking, and volumes.",
		tags: ["docker", "devops", "containers", "infrastructure"],
		installCommand: "docker compose --version",
		promptConfig: JSON.stringify({
			systemPrompt:
				"You are a DevOps expert. Create efficient Docker configurations with best practices.",
			temperature: 0.5,
		}),
		usageExample:
			"Ask: 'Create a Docker Compose setup for a Node.js app with PostgreSQL and Redis'",
	},
];

async function seedData() {
	console.log("🌱 Starting database seeding...\n");

	try {
		// Create users
		console.log("👤 Creating test users...");
		for (const user of testUsers) {
			try {
				await createUser(dataConnect, user);
				console.log(`  ✓ Created user: ${user.username} (${user.email})`);
			} catch (error: any) {
				if (error.message?.includes("duplicate key")) {
					console.log(`  ⚠ User already exists: ${user.username}`);
				} else {
					console.error(`  ✗ Failed to create user ${user.username}:`, error.message);
				}
			}
		}

		console.log("\n📚 Creating test skills...");
		for (const skill of testSkills) {
			try {
				await createSkill(dataConnect, skill);
				console.log(`  ✓ Created skill: ${skill.title}`);
			} catch (error: any) {
				console.error(`  ✗ Failed to create skill ${skill.title}:`, error.message);
			}
		}

		console.log("\n✅ Database seeding completed successfully!");
		console.log(`\n📊 Summary:`);
		console.log(`   - Users: ${testUsers.length}`);
		console.log(`   - Skills: ${testSkills.length}`);
		console.log(`\n🚀 Your app should now display the seeded skills!`);
	} catch (error) {
		console.error("\n❌ Error seeding database:", error);
		process.exit(1);
	}
}

// Run the seed function
seedData();
