import * as awilix from 'awilix';

import { db } from './src/data/connection';
import { AuthenticateMiddleware } from './src/middlewares/authenticate';

import { OrderController } from './src/controllers/OrderController';
import { SessionController } from './src/controllers';

import { OrderService } from './src/services/OrderService';
import { SessionService } from './src/services/SessionService';
import { EmailService } from './src/services/EmailService';
import { TicketTypeService } from './src/services/TicketTypeService';
import { UserService } from './src/services/UserService';

import { UserController } from './src/controllers/UserController';
import { EmailServiceController } from './src/controllers/EmailServiceController';
import { SubscribeController } from './src/controllers/SubscribeController';
import { TicketTypesController } from './src/controllers/TicketTypesController';

import { OrderRepository } from './src/repository/OrderRepository';
import { TicketRepository } from './src/repository/TicketRepository';
import { TicketTypeRepository } from './src/repository/TicketTypesRepository';
import { UserRepository } from './src/repository/UserRepository';
import { SubscriberRepository } from './src/repository/SubscriberRepository';
import { PasswordValidationService } from './src/services/PasswordValidationService';

export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

export const setup = () => {
  container.register({
    // controllers
    orderController: awilix.asClass(OrderController),
    sessionController: awilix.asClass(SessionController),
    emailServiceController: awilix.asClass(EmailServiceController),
    ticketTypesController: awilix.asClass(TicketTypesController),
    subscribeController: awilix.asClass(SubscribeController),
    userController: awilix.asClass(UserController),
    // services
    orderService: awilix.asClass(OrderService),
    sessionService: awilix.asClass(SessionService),
    emailService: awilix.asClass(EmailService),
    passwordValidationService: awilix.asClass(PasswordValidationService),
    ticketTypeService: awilix.asClass(TicketTypeService),
    userService: awilix.asClass(UserService),
    // repos
    ticketTypeRepository: awilix.asClass(TicketTypeRepository),
    ticketRepository: awilix.asClass(TicketRepository),
    orderRepository: awilix.asClass(OrderRepository),
    userRepository: awilix.asClass(UserRepository),
    subscriberRepository: awilix.asClass(SubscriberRepository),
    // db
    db: awilix.asValue(db),
    authenticateMiddleware: awilix.asClass(AuthenticateMiddleware),
  });
};
