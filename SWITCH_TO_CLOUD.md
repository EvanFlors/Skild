# 🌐 Switching to Cloud Firebase Instance

## ✅ Configuration Complete!

I've set up your project to use the **cloud Firebase instance** instead of the local emulator.

---

## 📋 **What You Need to Do:**

### **Step 1: Get Your Firebase Credentials**

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: **skild-6f15f**
3. Click the gear icon ⚙️ > **Project Settings**
4. Scroll to "Your apps" section
5. If you don't see a web app:
   - Click **Add app** > Select **Web** (</> icon)
   - Register app name: "Skild Web"
6. Copy the config values

### **Step 2: Fill in Your `.env` File**

Open `.env` and add your Firebase credentials:

```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSy...           # ← Paste your API key
VITE_FIREBASE_AUTH_DOMAIN=skild-6f15f.firebaseapp.com  # ✅ Already set
VITE_FIREBASE_PROJECT_ID=skild-6f15f      # ✅ Already set
VITE_FIREBASE_APP_ID=1:...                # ← Paste your App ID
```

**Important:** Keep `VITE_USE_FIREBASE_EMULATOR=false` to use cloud!

### **Step 3: Deploy Your Schema to Cloud**

Your schema and queries need to be deployed to the cloud:

```bash
firebase deploy --only dataconnect
```

This will deploy:

- ✅ Schema (`User` and `Skill` tables)
- ✅ Queries (`GetSkills`)
- ✅ Mutations (`CreateUser`, `CreateSkill`, etc.)

### **Step 4: Stop the Local Emulator**

Since you're using cloud now, stop the emulator:

```bash
pkill -9 -f dataconnect
```

### **Step 5: Restart Your Dev Server**

```bash
# Stop current server (Ctrl+C)
# Then start again:
npm run dev
```

You should see in the console:

```
☁️  Connecting to Firebase Data Connect cloud instance
```

---

## 🔄 **VS Code Extension Configuration**

The Firebase Data Connect VS Code extension is currently configured for emulator. To use cloud:

1. Open VS Code Command Palette (`Cmd+Shift+P`)
2. Type: "Firebase: Configure Data Connect"
3. Select your cloud project
4. Or comment out the emulator port in `.vscode/settings.json`:
   ```json
   // "firebase.dataconnect.emulatorPort": 9399
   ```

---

## 📊 **Verify It's Working**

After restarting your dev server:

1. Check browser console for: `"☁️  Connecting to Firebase Data Connect cloud instance"`
2. Your app should now read/write from cloud database
3. Data persists across server restarts (unlike emulator)

---

## 🔄 **Switch Back to Emulator (If Needed)**

To switch back to local development:

1. Change in `.env`:

   ```bash
   VITE_USE_FIREBASE_EMULATOR=true
   ```

2. Start emulator:

   ```bash
   npm run emulator:start
   ```

3. Restart dev server

---

## 🎯 **Current Status:**

- ✅ `.env` file created with cloud configuration
- ✅ `VITE_USE_FIREBASE_EMULATOR=false` (cloud mode)
- ⚠️ **ACTION REQUIRED:** Add your Firebase API Key and App ID to `.env`
- ⚠️ **ACTION REQUIRED:** Deploy schema with `firebase deploy --only dataconnect`

---

## 📝 **Next Steps Checklist:**

- [ ] Get Firebase credentials from console
- [ ] Fill in `.env` file
- [ ] Run `firebase deploy --only dataconnect`
- [ ] Stop local emulator
- [ ] Restart dev server
- [ ] Verify cloud connection in console
- [ ] Test creating/reading skills from cloud

**Need help?** Run `npm run check-firebase` to verify your configuration!
