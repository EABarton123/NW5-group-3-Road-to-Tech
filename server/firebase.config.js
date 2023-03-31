import { v4 as uuidv4 } from "uuid";
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
} from "firebase/storage";
import { initializeApp } from "@firebase/app";

export const firebaseConfig = {
	apiKey: "AIzaSyD9YcnCuR25oI63oRpdlsZXG1YinSV0ono",
	authDomain: "road-to-tech.firebaseapp.com",
	projectId: "road-to-tech",
	storageBucket: "road-to-tech.appspot.com",
	messagingSenderId: "465639387649",
	appId: "1:465639387649:web:cd6369b0f381006eea4600",
	measurementId: "G-06E84LZKM7",
};

initializeApp(firebaseConfig);
const storage = getStorage();

export const uploadFirebase = async (file) => {
	const storageRef = await ref(
		storage,
		`images/${uuidv4()}${file.originalname}`
	);
	const metaData = {
		contentType: file.mimetype,
	};

	const snapshot = await uploadBytesResumable(
		storageRef,
		file.buffer,
		metaData
	);

	const downloadUrl = await getDownloadURL(snapshot.ref);
	return downloadUrl;
};
