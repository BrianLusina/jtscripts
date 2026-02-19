import Notification from './Notification';

export default class EmailNotification implements Notification {
  send(message: string): void {
    console.log(`Sending email notification with message: ${message}`);
  }
}
