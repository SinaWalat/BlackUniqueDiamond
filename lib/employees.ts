export interface Employee {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  image: string;
  whatsapp?: string;
}

export const employees: Record<string, Employee> = {
  HamedMansouri: {
    id: "HamedMansouri",
    name: "Hamed Mansouri",
    title: "Chief Executive Officer",
    phone: "+964 750 455 0060",
    whatsapp: "+9647504550060",
    email: "HamedMansouri@Blackuniquediamond.com",
    location: "No.48, Vital Village, Erbil, Iraq",
    image: "/ceo-profile.png",
  },
  DaraRashid: {
    id: "DaraRashid",
    name: "Dara Rashid Mohammed",
    title: "Executive Manager",
    phone: "+964 750 445 9054",
    whatsapp: "+9647504459054",
    email: "DaraRashid@Blackuniquediamond.com",
    location: "No.48, Vital Village, Erbil, Iraq",
    image: "/dara-profile.png",
  },
  MahmoudYoussef: {
    id: "MahmoudYoussef",
    name: "Mahmoud Youssef Mahmoud",
    title: "Board Member and Deputy CEO",
    phone: "+964 750 450 9292",
    whatsapp: "+9647504509292",
    email: "MahmoudYoussef@Blackuniquediamond.com",
    location: "No.48, Vital Village, Erbil, Iraq",
    image: "/mahmoud-y-profile.png",
  },
  MahmoudAyoubizadeh: {
    id: "MahmoudAyoubizadeh",
    name: "Mahmoud Ayoubizadeh",
    title: "Deputy CEO",
    phone: "+964 750 653 3932",
    whatsapp: "+9647506533932",
    email: "MahmoudAyoubizadeh@Blackuniquediamond.com",
    location: "No.48, Vital Village, Erbil, Iraq",
    image: "/mahmoud-a-profile.png",
  },
  NazarMuhammad: {
    id: "NazarMuhammad",
    name: "Nazar M. Saleem Ahmed",
    title: "Shareholder & Board Member",
    phone: "+964 750 459 2199",
    whatsapp: "+9647504592199",
    email: "NazarMuhammad@Blackuniquediamond.com",
    location: "No.48, Vital Village, Erbil, Iraq",
    image: "/nazar-profile.png",
  },
  KimiaAbolhassani: {
    id: "KimiaAbolhassani",
    name: "Kimia Abolhassani",
    title: "Executive Assistant to the CEO & International Sales Executive",
    phone: "+964 750 150 7703",
    whatsapp: "+9647501507703",
    email: "KimiaAbdolhassani@Blackuniquediamond.com",
    location: "No.48, Vital Village, Erbil, Iraq",
    image: "/kimia-profile.png",
  },
};
