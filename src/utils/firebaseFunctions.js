import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL  } from "firebase/storage";
import storage from '../configs/firebase.config';

// 'file' comes from the Blob or File API
export const uploadImage = (file, name) => {
    const storageRef = ref(storage, `images/${name}`);
    return uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);
    }).catch((error) => {
        console.log('Error uploading image to storage', error);
        switch (error.code) {
            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
            case 'storage/canceled':
                // User canceled the upload
                break;
        }
    });
}
// 'file' comes from the Blob or File API
export const uploadBytesResumableP = (file, name) => {
    const storageRef = ref(storage, `images/${name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    return uploadTask.on('state_changed', 
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      // Handle unsuccessful uploads
    }, 
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    }
  );
  
}


export const downloadImage = (name) => {
    const storageRef = ref(storage, `images/${name}`);
    getDownloadURL(storageRef)
        .then((url) => {
            // Insert url into an <img> tag to "download"
            console.log('Downloaded image from storage', url);
        })
        .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            console.log('Error downloading image from storage', error);
            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    break;
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
            }
        }
    );
}
