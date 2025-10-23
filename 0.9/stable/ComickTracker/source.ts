export default class ComickTracker implements Tracker {
  getTitle(): string {
    return "ComickTracker Test Title";
  }

  getCover(): string {
    return "https://comick.io/assets/logo.png"; // placeholder image
  }

  getDescription(): string {
    return "This is a test tracker extension for Comick.dev.";
  }

  getProgress(): number {
    return 0; // placeholder progress
  }
}
