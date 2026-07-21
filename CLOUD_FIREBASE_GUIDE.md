# 🌐 Using Cloud Firebase Instance

## 📋 **Prerequisites**

Before you can use the cloud Firebase instance, make sure you have:

1. ✅ Created a Firebase project (you have: `skild-6f15f`)
2. ✅ Set up Firebase Data Connect service in the cloud
3. ✅ Deployed your schema and connector to production

---

## 🔧 **Setup Steps**

### **Step 1: Get Your Firebase Configuration**

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `skild-6f15f`
3. Click the gear icon ⚙️ > **Project Settings**
4. Scroll down to "Your apps" section
5. If you haven't added a web app, click "Add app" and select Web (</>) icon
6. Copy your Firebase configuration values

### **Step 2: Create .env File**

Create a `.env` file in your project root (copy from `.env.example`):

```bash
# Copy the example file
cp .env.example .env
```

Then fill in your Firebase credentials:

```bash
# Clerk
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...

# Firebase Configuration (from Firebase Console)
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=skild-6f15f.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=skild-6f15f
VITE_FIREBASE_APP_ID=1:...

# PostHog Analytics (optional)
VITE_PUBLIC_POSTHOG_PROJECT_TOKEN=...
VITE_PUBLIC_POSTHOG_HOST=...

# Use cloud Firebase (set to "false" to disable emulator)
VITE_USE_FIREBASE_EMULATOR=false
```

### **Step 3: Deploy Your Schema to Cloud**

Make sure your Data Connect schema and connector are deployed:

```bash
# Deploy the schema and connector to production
firebase deploy --only dataconnect
```

This will deploy:

- `dataconnect/schema/schema.gql` - Your User and Skill tables
- `dataconnect/connector/queries.gql` - Your queries
- `dataconnect/connector/mutations.gql` - Your mutations

### **Step 4: Verify Connection**

After setting the environment variables:

```bash
# Restart your dev server
npm run dev
```

You should see in the console:

```
☁️  Connecting to Firebase Data Connect cloud instance
```

---

## 🔄 **Switching Between Emulator and Cloud**

### **Use Cloud (Production Data)**

```bash
# In your .env file:
VITE_USE_FIREBASE_EMULATOR=false
```

### **Use Emulator (Local Development)**

```bash
# In your .env file:
VITE_USE_FIREBASE_EMULATOR=true

# Start the emulator in another terminal:
firebase emulators:start --only dataconnect
```

---

## 📊 **Managing Data**

### **Viewing Cloud Data**

1. **Firebase Console:**
   - Go to Firebase Console > Data Connect
   - View your tables, data, and run queries

2. **VS Code Extension:**
   - Install "Firebase SQL Connect" extension
   - Connect to your cloud instance
   - Browse tables and run queries

### **Seeding Cloud Database**

You can seed your cloud database using the same mutations:

**Option 1: Using VS Code Extension**

1. Open Firebase Data Connect extension
2. Connect to cloud (not emulator)
3. Run the mutations from `dataconnect/connector/mutations.gql`

**Option 2: Using Firebase Console**

1. Go to Data Connect in Firebase Console
2. Use the GraphQL playground
3. Run CreateUser and CreateSkill mutations

---

## ⚠️ **Important Notes**

### **Schema Validation**

Your `dataconnect.yaml` has schema validation commented out:

```yaml
# schemaValidation: "STRICT"     # Postgres schema must match Data Connect exactly
# schemaValidation: "COMPATIBLE" # Postgres schema must be compatible
```

You may want to enable this for production.

### **Security**

- Never commit your `.env` file to git (it's already in `.gitignore`)
- Use different Firebase projects for development and production if possible
- Set up proper authentication rules in your Data Connect configuration

### **Cost Considerations**

- Cloud SQL instance has ongoing costs
- Free tier has limitations
- Monitor usage in Firebase Console

---

## 🐛 **Troubleshooting**

### **"Service not configured" Error**

- Make sure you've deployed with `firebase deploy --only dataconnect`
- Verify your service is active in Firebase Console

### **Authentication Errors**

- Check that your API key is correct
- Verify your domain is authorized in Firebase Console > Authentication > Settings

### **Connection Timeouts**

- Check your internet connection
- Verify the service region matches your `dataconnect.yaml` (`us-central1`)

---

## 📝 **Current Configuration**

Your cloud instance:

- **Service ID:** `skild-6f15f-service`
- **Location:** `us-central1`
- **Database:** `skild-6f15f-database`
- **Instance:** `skild-6f15f-instance`

Generated SDK is configured to connect to this service automatically when not using the emulator.

---

## 🚀 **Quick Commands**

```bash
# Deploy everything to production
firebase deploy --only dataconnect

# View deployment status
firebase dataconnect:services:list

# Test connection (after setting .env)
npm run dev

# Switch to emulator
# Set VITE_USE_FIREBASE_EMULATOR=true in .env
firebase emulators:start --only dataconnect
```
