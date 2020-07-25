import { UserRepository } from './repository/UserRepository';

let repo = new UserRepository()

let userDummyData = {
  name: 'Lehel',
  email: 'lehel@gmail.com',
  password: 'password123',
};
let TicketDummyData = {
  name: 'Mav',
  price: 350 ,
  description: 'Good for nothing but buy it ',
  icon: 'FaBeer'
};


repo.save(userDummyData);
repo.saveTicket(TicketDummyData);
