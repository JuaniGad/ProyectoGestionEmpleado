import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox} from "../assets";

export const navLinks = [
  {
    id: "inicio",
    title: "Inicio",
  },
  {
    id: "info",
    title: "Info",
  },
  {
    id: "clientes",
    title: "Clientes",
  },

  {
    id:"contacto",
    title:"Contacto",
  },
  
  {
    id:"preguntas_frecuentes",
    title:"Preguntas Frecuentes"
  }

];

export const PreguntasFreq=[
  
  { 
    key:1,
    p:"¿Las futuras actualizaciones del sistema son pagas?",
    r:"No, una vez que adquieres el sistema no tienes que abonar nada extra, ya que las futuras actualizaciones se realizaran automaticamente",
  },    
  {  
    key:2, 
    p:"¿Para que tipo de empresas sirve el sistema?",
    r:"El sistema sirve para cualquier tipo de empresa ya que este se puede personalizar y adaptar segun las carateristicas de la misma",
  },
  {  
    key:3, 
    p:"¿A que sector esta destinado el sistema de gestion?",
    r:"El sistema de gestion esta destinado para agilizar, mejorar y facilitar  todas las cuestiones referidas al sector de RR.HH de tu empresa"
  }  
];

export const opiniones = [
  {
    id: "feedback-1",
    content:
      "Excelente aplicacion, verdaderamente te soluciona muchos problemas habituales",
    name: "Carol Grinh",
    title: "RR.HH en Avantrip",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "La implemente en mi empres y verdaderamente lo recomiendo",
    name: "Steve Mark",
    title: "Fundador de ASUS",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Altamente recomendable, no importa si es una PYME o una empresa de gran escala, esta aplicacion te ahorra muchisimo tiempo y lo mas importante es muy facil de usar",
    name: "Juan Perez",
    title: "Dueño de MYP",
    img: people03,
  },
];


export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.gyrogear.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.gyrogear.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.gyrogear.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.gyrogear.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.gyrogear.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.gyrogear.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.gyrogear.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.gyrogear.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.gyrogear.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.gyrogear.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.gyrogear.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.gyrogear.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];