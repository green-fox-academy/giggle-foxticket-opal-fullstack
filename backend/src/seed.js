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

ticketTypeRepo.saveTicketType({
  name: 'Mav',
  price: 350,
  description: 'Good for nothing but buy it ',
  icon: 'FaBeer',
});

ticketTypeRepo.saveTicketType({
  name: 'Volan',
  price: 500,
  description: 'Tick form Pest to Vac ',
  icon: 'FaBeer',
});
