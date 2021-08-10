function endPoint(address, type, guarded) {
  this.address = address;
  this.type = type;
  this.guarded = guarded;
}

const endPoints = {
  getBreeds: new endPoint(`/`, "GET", false),
};

export default endPoints;
