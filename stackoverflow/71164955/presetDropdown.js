module.exports = class PresetDropdown {
  constructor(Api, objectId, titleSort) {
    this.Api = Api;
    this.objectId = objectId;
    this.presets = [];
  }

  handleError(err) {
    console.log(err);
  }
  handleEmpty(data) {
    console.log(data);
  }

  get() {
    return this.Api.getMany(this.objectId)
      .then((data) => {
        this.handleEmpty(data);

        this.isError = false;
      })
      .catch((err) => {
        this.isError = true;
        this.handleError(err);
      });
  }
};
