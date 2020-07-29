import { UserRepository } from './repository/UserRepository';
import { TicketRepository } from './repository/TicketTypesRepository';
let userRepo = new UserRepository()
let ticketRepo = new TicketRepository()

let userDummyData = {
  name: 'Lehel',
  email: 'lehel@gmail.com',
  password: 'password123',
};
let adminDummyData = {
  name: 'Vivien',
  email: 'vivi@gmail.com',
  password: 'password1223',
  isAdmin: true
};
let TicketDummyData = {
  name: 'Mav',
  price: 350 ,
  description: 'Good for nothing but buy it ',
  icon: 'FaBeer'
};

userRepo.save(userDummyData);
userRepo.saveAdmin(adminDummyData);
ticketRepo.saveTicket(TicketDummyData);
