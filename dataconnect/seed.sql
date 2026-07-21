-- Seed data for Firebase Data Connect
-- Run this in the Firebase Data Connect VS Code extension

-- Insert test users
INSERT INTO "User" ("clerkId", "email", "username", "image") VALUES
('user_test_alice', 'alice@example.com', 'Alice Developer', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice'),
('user_test_bob', 'bob@example.com', 'Bob Engineer', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob'),
('user_test_carol', 'carol@example.com', 'Carol Designer', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carol')
ON CONFLICT ("clerkId") DO NOTHING;

-- Insert test skills
INSERT INTO "Skill" ("authorClerkId", "title", "description", "tags", "installCommand", "promptConfig", "usageExample") VALUES
(
  'user_test_alice',
  'React Component Builder',
  'Build reusable React components with TypeScript, props validation, and best practices. Includes hooks, context, and modern patterns.',
  ARRAY['react', 'typescript', 'components', 'frontend'],
  'npm install react react-dom @types/react',
  '{"systemPrompt":"You are an expert React developer. Create clean, reusable components with TypeScript.","temperature":0.7}',
  'Ask: ''Create a reusable Button component with variants and TypeScript'''
),
(
  'user_test_alice',
  'API Route Generator',
  'Generate RESTful API routes with proper error handling, validation, and TypeScript types. Supports Express, Fastify, and Next.js.',
  ARRAY['api', 'backend', 'typescript', 'rest'],
  'npm install express @types/express zod',
  '{"systemPrompt":"You are a backend expert. Create secure, validated API routes with proper error handling.","temperature":0.6}',
  'Ask: ''Create a REST API endpoint for user authentication'''
),
(
  'user_test_bob',
  'Database Schema Designer',
  'Design and generate database schemas with migrations, indexes, and relationships. Supports PostgreSQL, MySQL, and MongoDB.',
  ARRAY['database', 'schema', 'sql', 'migrations'],
  'npm install prisma @prisma/client',
  '{"systemPrompt":"You are a database architect. Design normalized, efficient schemas with proper indexes.","temperature":0.5}',
  'Ask: ''Design a schema for an e-commerce platform with users, products, and orders'''
),
(
  'user_test_bob',
  'TailwindCSS Styler',
  'Create beautiful, responsive designs with TailwindCSS. Includes custom utilities, animations, and design system patterns.',
  ARRAY['css', 'tailwind', 'design', 'ui'],
  'npm install -D tailwindcss postcss autoprefixer',
  '{"systemPrompt":"You are a UI/UX expert. Create beautiful, accessible designs with TailwindCSS.","temperature":0.8}',
  'Ask: ''Style this card component with Tailwind to look modern and professional'''
),
(
  'user_test_carol',
  'Test Suite Generator',
  'Generate comprehensive test suites with unit tests, integration tests, and e2e tests. Supports Jest, Vitest, and Playwright.',
  ARRAY['testing', 'jest', 'vitest', 'quality'],
  'npm install -D vitest @testing-library/react',
  '{"systemPrompt":"You are a QA expert. Write comprehensive, maintainable tests with good coverage.","temperature":0.6}',
  'Ask: ''Write tests for this authentication service'''
),
(
  'user_test_carol',
  'Documentation Writer',
  'Generate clear, comprehensive documentation with examples, API references, and guides. Supports Markdown, MDX, and JSDoc.',
  ARRAY['documentation', 'markdown', 'jsdoc', 'guides'],
  'npm install -D typedoc',
  '{"systemPrompt":"You are a technical writer. Create clear, comprehensive documentation with examples.","temperature":0.7}',
  'Ask: ''Document this API with usage examples and parameter descriptions'''
),
(
  'user_test_alice',
  'GraphQL Schema Builder',
  'Design and implement GraphQL schemas with resolvers, mutations, and subscriptions. Includes best practices and performance optimization.',
  ARRAY['graphql', 'api', 'schema', 'backend'],
  'npm install graphql @graphql-tools/schema',
  '{"systemPrompt":"You are a GraphQL expert. Design efficient schemas with proper type safety.","temperature":0.6}',
  'Ask: ''Create a GraphQL schema for a blog with posts and comments'''
),
(
  'user_test_bob',
  'Docker Compose Setup',
  'Generate Docker Compose configurations for development and production. Includes multi-container setups, networking, and volumes.',
  ARRAY['docker', 'devops', 'containers', 'infrastructure'],
  'docker compose --version',
  '{"systemPrompt":"You are a DevOps expert. Create efficient Docker configurations with best practices.","temperature":0.5}',
  'Ask: ''Create a Docker Compose setup for a Node.js app with PostgreSQL and Redis'''
);
