import Notification from './Notification';
import EmailNotification from './EmailNotification';
import SmsNotification from './SmsNotification';


export default class NotificationFactory {
  static createNotification(type: string): Notification {
    switch (type) {
      case 'email':
        return new EmailNotification();
      case 'sms':
        return new SmsNotification();
      default:
        throw new Error('Invalid notification type');
    }
  }
}
