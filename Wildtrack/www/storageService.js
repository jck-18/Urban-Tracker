function uploadImage() {
    navigator.camera.getPicture(
      function(imageUri) {
        const storageRef = storage.ref("wildlife/" + Date.now() + ".jpg");
        fetch(imageUri)
          .then(res => res.blob())
          .then(blob => storageRef.put(blob))
          .then(() => alert("Image uploaded successfully"));
      },
      function(error) {
        alert("Error: " + error.message);
      },
      { quality: 50, destinationType: Camera.DestinationType.FILE_URI }
    );
  }
  