#!/usr/bin/env node

/**
 * Simple seed script using GraphQL mutations
 * This can be run with: node scripts/seed-simple.js
 */

console.log('🌱 Starting database seeding...\n');
console.log('⚠️  Please use the Firebase Data Connect VS Code extension to seed data.');
console.log('\nSteps:');
console.log('1. Open VS Code');
console.log('2. Open the Firebase Data Connect extension panel');
console.log('3. Make sure the local emulator is connected');
console.log('4. Open dataconnect/seed.sql');
console.log('5. Execute the SQL statements\n');
console.log('Or use the extension UI to run these mutations:\n');

const users = [
  {
    clerkId: 'user_test_alice',
    email: 'alice@example.com',
    username: 'Alice Developer',
  },
  {
    clerkId: 'user_test_bob',
    email: 'bob@example.com',
    username: 'Bob Engineer',
  },
  {
    clerkId: 'user_test_carol',
    email: 'carol@example.com',
    username: 'Carol Designer',
  },
];

console.log('📝 Create these users using CreateUser mutation:');
users.forEach((user, i) => {
  console.log(`\n${i + 1}. ${user.username}`);
  console.log(JSON.stringify(user, null, 2));
});

console.log('\n\n📚 Then create skills using CreateSkill mutation');
console.log('(See dataconnect/seed.sql for full skill data)\n');
