import Notification from './Notification';

export default class SmsNotification implements Notification {
  send(message: string): void {
    console.log(`Sending SMS notification with message: ${message}`);
  }
}
