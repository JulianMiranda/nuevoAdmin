import S3FileUpload from 'react-s3';
import uniqid from 'uniqid';
import imageCompression from 'browser-image-compression';


/* const saveImage = (image) => {
	return new Promise(async (resolve, reject) => {
		const {path, name, blob} = image;
		const storageRef = firebase.storage().ref();
		const uploadTask = storageRef.child(`${path}/${name}`).put(blob);
		uploadTask.on(
			firebase.storage.TaskEvent.STATE_CHANGED,
			(snapshot) => {},
			(error) => {
				reject(error);
			},
			() => {
				uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
					resolve(downloadURL);
				});
			}
		);
	});
}; */


 const saveImage = ( resource, image) =>{
     console.log('para subir',image);
    return new Promise(async (resolve, reject) => {
    const config = {
        bucketName: 'packuba-bucket',
        dirName: resource, /* optional */
        region: 'us-east-1',
        accessKeyId: 'AKIASRIDZMC3GAIYY27W',
        secretAccessKey: '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',
    };

    S3FileUpload
    .uploadFile(image, config)
    .then(data => {console.log(data.location);return resolve(data.location)})
    .catch(err => console.error(err))
})
}

const resize = async (path, image) => {
	const {url, rawFile} = image;
	const extension = rawFile.type.split('/')[1];
	const name = `${uniqid()}.${extension}`;
	const options = {
		maxWidthOrHeight: path === 'users' ? 80 : 1024,
		useWebWorker: true
	};
	try {
		
		const blobCreated = await fetch(url).then((r) => r.blob());
		const blob = await imageCompression(blobCreated, options);
		return {path, blob, name};
	} catch (e) {
		console.error(e);
	}
};


export const UploadImage = async (path, images) => {
    console.log('imagenes para proc',images);
	/* const processedImages = await Promise.all(
		images.map((image) => resize(path, image.rawFile))
	); */
    
	return Promise.all(images.map((image) => saveImage(path,image.rawFile)));
};