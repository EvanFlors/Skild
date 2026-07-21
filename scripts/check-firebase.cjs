#!/usr/bin/env node

/**
 * Check Firebase Connection Status
 * Usage: node scripts/check-firebase.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Firebase Connection Status Check\n');

// Check if .env file exists
const envPath = path.join(__dirname, '..', '.env.local');
const envExists = fs.existsSync(envPath);

console.log('📁 Environment File:');
console.log(`   .env file: ${envExists ? '✅ Found' : '❌ Not found (create from .env.example)'}\n`);

if (envExists) {
  const envContent = fs.readFileSync(envPath, 'utf8');

  console.log('🔑 Firebase Configuration:');
  const vars = {
    'VITE_FIREBASE_API_KEY': 'API Key',
    'VITE_FIREBASE_AUTH_DOMAIN': 'Auth Domain',
    'VITE_FIREBASE_PROJECT_ID': 'Project ID',
    'VITE_FIREBASE_APP_ID': 'App ID',
    'VITE_USE_FIREBASE_EMULATOR': 'Use Emulator',
  };

  for (const [key, label] of Object.entries(vars)) {
    const match = envContent.match(new RegExp(`${key}=(.+)`));
    const value = match ? match[1].trim() : '';
    const status = value ? '✅' : '❌';
    console.log(`   ${status} ${label}: ${value ? '(set)' : '(not set)'}`);
  }

  console.log('\n📡 Connection Mode:');
  const useEmulator = envContent.match(/VITE_USE_FIREBASE_EMULATOR=(.*)/);
  const emulatorValue = useEmulator ? useEmulator[1].trim() : 'true';

  if (emulatorValue === 'false') {
    console.log('   ☁️  Cloud Firebase Instance');
    console.log('   → Your app will connect to production Firebase');
    console.log('   → Make sure you\'ve deployed: firebase deploy --only dataconnect');
  } else {
    console.log('   🔧 Local Emulator');
    console.log('   → Your app will connect to localhost:9399');
    console.log('   → Make sure emulator is running: firebase emulators:start --only dataconnect');
  }
}

console.log('\n📚 Next Steps:');
if (!envExists) {
  console.log('   1. Create .env file: cp .env.example .env');
  console.log('   2. Fill in your Firebase credentials from Firebase Console');
  console.log('   3. Set VITE_USE_FIREBASE_EMULATOR=false for cloud or true for emulator');
  console.log('   4. Restart your dev server');
} else {
  console.log('   1. Make sure your configuration is correct');
  console.log('   2. Restart your dev server if you made changes');
  console.log('   3. Check the console logs for connection confirmation');
}

console.log('\n💡 Tip: Run "firebase deploy --only dataconnect" to deploy schema to cloud');
console.log('   See CLOUD_FIREBASE_GUIDE.md for detailed instructions\n');
