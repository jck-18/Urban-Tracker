function saveSighting() {
    const speciesName = prompt("Enter species name:");
    const imageUrl = prompt("Enter image URL:");
  
    db.collection("sightings").add({
      speciesName,
      imageUrl,
      timestamp: new Date()
    }).then(() => {
      alert("Sighting saved!");
    }).catch(error => {
      alert("Error: " + error.message);
    });
  }
  