# Factory Creational Design Pattern

The Factory Design Pattern is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. It promotes loose coupling by eliminating the need to bind application-specific classes into the code.

In this example, we have a `Notification` interface that defines a method `send()`. We then have two concrete implementations of this interface: `EmailNotification` and `SmsNotification`. The `NotificationFactory` class is responsible for creating instances of these notifications based on the type specified.

## Notification Interface

```typescript
export default interface Notification {
  send(message: string): void;
}
```

## EmailNotification Class

```typescript
import Notification from './Notification';
export default class EmailNotification implements Notification {
  send(message: string): void {
    console.log(`Sending email notification with message: ${message}`);
  }
}
```

## SmsNotification Class

```typescript
import Notification from './Notification';

export default class SmsNotification implements Notification {
  send(message: string): void {
    console.log(`Sending SMS notification with message: ${message}`);
  }
}
```

## NotificationFactory Class

```typescript
import EmailNotification from './notification/EmailNotification';
import SmsNotification from './notification/SmsNotification';
import Notification from './notification/Notification';

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
``` 

## Usage Example

```typescript

import NotificationFactory from './NotificationFactory';

const emailNotification = NotificationFactory.createNotification('email');
emailNotification.send('Hello via Email!');
const smsNotification = NotificationFactory.createNotification('sms');
smsNotification.send('Hello via SMS!');
```
