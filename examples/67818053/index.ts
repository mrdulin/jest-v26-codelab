export const obj = {
  map: {
    // simulate real implementation
    forEachFeatureAtPixel(pixel, callback) {
      callback();
    },
  },
  method(e) {
    this.map.forEachFeatureAtPixel(e.pixel, (event: any) => {
      if (event.values_.name === 'name') {
        console.log('openWeatherData');
      }
    });
  },
};
