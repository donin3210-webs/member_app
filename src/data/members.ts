export type Member = {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
};


export const members: Member[] = [
  { id: "1", name: "Lyndon Colonia", role: "Leader", email: "lyndon@gmail.com", phone: "0935 124 625" },
  { id: "2", name: "Krishna Paul Quisora", role: "Graphic Designer", email: "krishnapaul@gmail.com", phone: "0965 458 9678" }, 
  { id: "3", name: "Orlie Dela Pena", role: "Frontend Dev", email: "orlie@gmail.com", phone: "0915 658 476" },
  { id: "4", name: "Harry Dorong", role: "Backend Dev", email: "harry@gmail.com", phone: "0945 265 4089" },
  { id: "5", name: "Evewin Colita", role: "QA Lead", email: "evewin@gmail.com", phone: "0965 478 2301" },
  { id: "6", name: "Christian Ortega", role: "Tester", email: "christian@gmail.com", phone: "0910 652 9845" },
];