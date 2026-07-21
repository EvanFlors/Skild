# Firebase Data Connect Setup

This directory contains the Firebase Data Connect configuration for the Skild project.

## Structure

- `dataconnect.yaml` - Main configuration file
- `schema/` - GraphQL schema definitions
  - `schema.gql` - Database schema (User and Skill tables)
- `connector/` - Data Connect connector
  - `connector.yaml` - Connector configuration
  - `queries.gql` - Query operations
  - `mutations.gql` - Mutation operations

## Schema

### User

- `clerkId` (String, Primary Key) - Clerk authentication ID
- `email` (String) - User email
- `username` (String) - User display name
- `image` (String) - User profile image URL

### Skill

- `id` (UUID, Primary Key) - Auto-generated ID
- `author` (User) - Reference to User who created the skill
- `title` (String) - Skill title
- `description` (String) - Skill description
- `tags` (Array of Strings) - Tags for categorization
- `installCommand` (String) - Installation command
- `promptConfig` (String) - Prompt configuration
- `usageExample` (String) - Usage example
- `createdAt` (Timestamp) - Auto-generated creation timestamp

## Available Operations

### Queries

- `ListSkills` - Get all skills with author information
- `GetSkill` - Get a single skill by ID
- `GetSkillsByAuthor` - Get all skills by a specific author
- `SearchSkillsByTag` - Search skills by tag

### Mutations

- `CreateUser` - Create a new user
- `UpdateUser` - Update user information
- `CreateSkill` - Create a new skill
- `UpdateSkill` - Update an existing skill
- `DeleteSkill` - Delete a skill

## Development

To start the local emulator:

```bash
firebase emulators:start
```

To deploy to production:

```bash
firebase deploy --only dataconnect
```
