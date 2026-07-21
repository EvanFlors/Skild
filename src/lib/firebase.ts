import { getApp, getApps, initializeApp } from "firebase/app";
import {
	connectDataConnectEmulator,
	getDataConnect,
} from "firebase/data-connect";
import { connectorConfig } from "#/dataconnect-generated";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const firebaseApp = !getApps().length
	? initializeApp(firebaseConfig)
	: getApp();

export const dataConnect = getDataConnect(firebaseApp, connectorConfig);

// Connect to Data Connect emulator in development (unless disabled)
const useEmulator =
	import.meta.env.DEV && import.meta.env.VITE_USE_FIREBASE_EMULATOR !== "false";

if (useEmulator) {
	console.log(
		"🔧 Connecting to Firebase Data Connect emulator on localhost:9399",
	);
	connectDataConnectEmulator(dataConnect, "localhost", 9399);
} else {
	console.log("☁️  Connecting to Firebase Data Connect cloud instance");
}
