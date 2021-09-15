export class AppService {
  _buildBlobForProperties(app): Blob {
    return new Blob([JSON.stringify({ name: app.name, description: app.description })], { type: 'application/json' });
  }
}
