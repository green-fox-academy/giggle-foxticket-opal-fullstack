import { UserRepository } from './repository/UserRepository';
import { TicketTypeRepository } from './repository/TicketTypesRepository';

let userRepo = new UserRepository();
let ticketTypeRepo = new TicketTypeRepository();

userRepo.save({
  name: 'Lehel',
  email: 'lehel@gmail.com',
  password: '$2b$10$H7mQGKBAO66DkB2CY49LzujvzHeO9mB3OheHwzDvKfG7RlgTOq4Vm',
});
userRepo.save({
  name: 'Vivien',
  email: 'vivi@gmail.com',
  password: '$2b$10$9K8uV6EmwFnSU0gNZsiTv.wtsTFAr6SEzH4OcaADRZVOpTyczEIA6',
  isAdmin: true,
});
userRepo.save({
  name: 'demo',
  email: 'demo@foxticket.com',
  password: '$2b$10$VjVPag2XaXv.WBxfSR1sgOu9KzX05XczBwTmJUpe7L2NmWsRK8Px6',
  isAdmin: true,
});

ticketTypeRepo.saveTicketType({
  name: 'Mav',
  price: 350,
  description: 'Good for nothing but buy it ',
  icon: 'FaSubway',
});

ticketTypeRepo.saveTicketType({
  name: 'Volan',
  price: 500,
  description: 'Tick from Pest to Vac ',
  icon: 'FaBus',
});

ticketTypeRepo.saveTicketType({
  name: 'BKK',
  price: 300,
  description: 'You will have a marvelous journey! ',
  icon: 'MdTram',
});
