import { InterventionDomain, ValueItem, StructureOrg, AchievementItem, GalleryItem } from "./types";
import avatarJulienne from "./assets/images/afadef_team_julienne.jpeg";
import avatarJeanBosco from "./assets/images/afadef_team1.jpeg";
import avatarChristian from "./assets/images/afadef_team2.png";
import avatarIngels from "./assets/images/afadef_team3_Ingels.jpeg"
import avatarAnnie from "./assets/images/afadef_team4_Annie.jpg"


export const NGO_INFO = {
  name: "AFADEF",
  fullName: "Association des Femmes pour l’Appui et le Développement des Familles",
  mission: "Contribuer au soulagement de la souffrance de la communauté",
  vision: "Contribuer au développement de la communauté",
  devise: "Santé, Justice et développement",
  siege: {
    ville: "Goma",
    province: "Nord Kivu",
    adresse: "N°125A, Avenue Présidentielle, Quartier Himbi 1, Goma, Province du Nord-Kivu, RDC",
    coords: { lat: -1.6738, lng: 29.2198 } // Goma coordinates
  },
  contact: {
    email: "contact@afadef.org",
    phone: "+243 997 123 456",
    phoneSecondary: "+243 863 132 825",
    socials: {
      facebook: "https://facebook.com/afadef",
      twitter: "https://twitter.com/afadef",
      linkedin: "https://linkedin.com/company/afadef"
    }
  }
};

export const VALUES: ValueItem[] = [
  {
    id: "redevabilite",
    title: "Redevabilité",
    description: "Engagement à être transparent, responsable de nos actions et à rendre des comptes à la communauté ainsi qu'à nos partenaires.",
    iconName: "ShieldCheck"
  },
  {
    id: "inclusion",
    title: "Inclusion et diversité",
    description: "Promotion de l'égalité des chances, valorisation de la diversité et intégration active de toutes les couches de la population.",
    iconName: "Users"
  },
  {
    id: "integrite",
    title: "L'intégrité",
    description: "Agir avec honnêteté, éthique professionnelle et respect rigoureux de nos engagements et principes moraux.",
    iconName: "Award"
  },
  {
    id: "dignite",
    title: "Dignité",
    description: "Préserver, restaurer et défendre la dignité inhérente de chaque personne humaine, particulièrement des plus vulnérables.",
    iconName: "Heart"
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "Recherche constante de solutions nouvelles, efficaces et durables adaptées aux défis de notre société.",
    iconName: "Sparkles"
  }
];

export const STRUCTURE: StructureOrg[] = [
  {
    id: "ag",
    name: "L’Assemblée Générale",
    role: "Organe suprême",
    description: "Elle définit les orientations générales de l'association, approuve les rapports d'activités et financiers, et valide les grandes décisions stratégiques."
  },
  {
    id: "ca",
    name: "Le Conseil d’Administration",
    role: "Direction stratégique",
    description: "Il assure le suivi des résolutions de l'Assemblée Générale, définit les politiques de l'association et oriente l'équipe exécutive."
  },
  {
    id: "cg",
    name: "Le Comité de Gestion",
    role: "Gestion opérationnelle",
    description: "Organe exécutif quotidien chargé de la conception, de la mise en œuvre opérationnelle des projets et de l'administration générale."
  },
  {
    id: "cca",
    name: "Le Collège des Commissaires aux comptes",
    role: "Contrôle et vérification",
    description: "Il audite la gestion financière, s'assure de l'utilisation rigoureuse des ressources et garantit une totale transparence comptable."
  }
];

export const INTERVENTIONS: InterventionDomain[] = [
  {
    id: "sante",
    title: "Santé et Soutien Psychologique",
    iconName: "HeartPulse",
    description: "La santé physique et mentale est le premier pilier du bien-être des familles. Nous apportons une assistance globale aux personnes affectées.",
    details: [
      "Assurer la prise en charge Psychologique des personnes survivante(e)s des violences sexuelles ainsi que celles victimes de toutes autres sortes des violences humaines.",
      "Assurer la prévention et la prise en charge médicale des personnes malades au sein de la communauté."
    ]
  },
  {
    id: "education",
    title: "Éducation et Renforcement",
    iconName: "GraduationCap",
    description: "L'accès au savoir et à l'orientation professionnelle est l'outil le plus puissant pour le développement durable des générations futures.",
    details: [
      "Faciliter l’orientation scolaire, universitaire, et professionnelle des personnes vulnérables et des jeunes.",
      "Contribuer à apporter un appui à la prise en charge éducative de la jeunesse et au renforcement des capacités d’autres couches de la population."
    ]
  },
  {
    id: "infrastructures",
    title: "Réhabilitation des Infrastructures",
    iconName: "Construction",
    description: "Nous rebâtissons et équipons les installations publiques essentielles pour offrir un environnement propice à l'apprentissage et aux soins.",
    details: [
      "Contribuer à la réhabilitation des infrastructures de base, plus particulièrement les infrastructures scolaires et hospitalières de la région.",
      "Contribuer à équiper de manière matérielle ces infrastructures publiques vitales (écoles, hôpitaux, centres de santé, etc.)."
    ]
  },
  {
    id: "juridique",
    title: "Juridique, Protection et Droits",
    iconName: "Scale",
    description: "La justice sociale et la protection des droits humains sont indispensables pour instaurer la paix et l'égalité des genres.",
    details: [
      "Assurer la prise en charge Juridique et judiciaire gratuite des survivant(e)s des violences sexuelles.",
      "Promouvoir et défendre activement les droits fondamentaux des femmes et des enfants au Nord-Kivu.",
      "Défendre et promouvoir l’amélioration des conditions légales de détention des détenues et prisonniers en milieux carcéraux à travers le monitoring régulier des cachots et des prisons."
    ]
  },
  {
    id: "economique",
    title: "Socio-Économique et Cohabitation",
    iconName: "TrendingUp",
    description: "L'autonomie financière et la cohésion sociale permettent de stabiliser durablement les foyers et de renforcer le vivre-ensemble.",
    details: [
      "Assurer la réinsertion socio-économique, professionnelle et culturelle des personnes vulnérables à travers des activités génératrices de revenus.",
      "Faciliter le dialogue et la cohabitation pacifique entre les différentes communautés locales.",
      "Informer, sensibiliser et mobiliser la communauté sur divers problèmes de la société et enjeux de développement."
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Réhabilitation et Équipement de l'EP Himbi",
    category: "Infrastructures & Éducation",
    description: "Restauration complète de 6 salles de classe détériorées, installation de tableaux modernes et distribution de 120 bancs d'école pour permettre à plus de 300 enfants de Goma d'étudier dans des conditions dignes.",
    image: "https://www.shutterstock.com/image-photo/real-photo-happy-black-african-260nw-2632731283.jpg", // We will map this key to the generated asset path
    date: "Mars 2026",
    impact: "300+ élèves bénéficiaires directs"
  },
  {
    id: "ach-2",
    title: "Prise en Charge Holistique des Survivantes",
    category: "Santé & Juridique",
    description: "Mise en place d'une cellule d'écoute d'urgence offrant un accompagnement psychologique et psychiatrique à 150 survivantes de violences, couplé à un appui juridique et judiciaire gratuit devant les tribunaux de Goma.",
    image: "health_support", // Map to generated asset
    date: "Janvier - Mai 2026",
    impact: "150 survivantes accompagnées et réintégrées"
  },
  {
    id: "ach-3",
    title: "Monitoring Carcéral et Kit de Dignité",
    category: "Protection & Droits",
    description: "Visites de monitoring régulières à la prison centrale de Munzenze et dans les cachots de Goma. Distribution de kits d'hygiène intime aux femmes détenues et plaidoyer réussi pour l'accélération des dossiers de 40 prisonnières en détention préventive prolongée.",
    image: "prison_support", // We can use picsum or elegant vector fallback
    date: "En cours (2026)",
    impact: "40 détenues libérées ou jugées, 200 kits hygiéniques distribués"
  },
  {
    id: "ach-4",
    title: "Autonomisation Économique par le Micro-Crédit",
    category: "Socio-Économique",
    description: "Lancement d'une association villageoise d'épargne et de crédit (AVEC) pour 80 femmes chefs de ménages déplacées à Goma. Formation en gestion financière et octroi de micro-subventions pour la création d'activités génératrices de revenus.",
    image: "microcredit", // Fallback / picsum
    date: "Février 2026",
    impact: "80 micro-entreprises lancées, stabilité de 80 foyers"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Réhabilitation de l'EP Himbi",
    category: "Infrastructures",
    image: "https://www.shutterstock.com/image-photo/real-photo-happy-black-african-260nw-2632731283.jpg",
    caption: "Travaux de peinture et finition des nouvelles classes financées par l'AFADEF."
  },
  {
    id: "gal-2",
    title: "Consultation et Soutien Médical",
    category: "Santé",
    image: "health_support",
    caption: "Séances d'accompagnement psychologique individuel dispensées par nos expertes."
  },
  {
    id: "gal-3",
    title: "Sensibilisation Communautaire",
    category: "Social",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqoG87wgIn2EuxqIbYMXVqX3w4BDfWx3moM9Z5QWSh5Q&s=10",
    caption: "Mobilisation des communautés de Goma sur la prévention des violences de genre."
  },
  {
    id: "gal-4",
    title: "Atelier de Formation Professionnelle",
    category: "Éducation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3nLlkvbAlw1Y3SKdGVu1cD2KLaMy_ocnG6yeeIbiuLQ&s=10",
    caption: "Apprentissage de la couture et de la gestion de micro-commerces pour les jeunes femmes."
  },
  {
    id: "gal-5",
    title: "Monitoring de la Prison de Goma",
    category: "Protection",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27kqFH1iCIHc2ruF7kdlxqH6qffSNJZlekdTF0rdV_WH5PUg7o8PfSCRe&s=10",
    caption: "Distribution de vivres et évaluation des conditions sanitaires en milieu carcéral."
  },
  {
    id: "gal-6",
    title: "Sourires Retrouvés",
    category: "Famille",
    image: "hero_afadef",
    caption: "Célébration collective de la réussite des projets d'autonomisation à Himbi."
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Julienne KAMOKEYA",
    role: "",
    bio: "Expertise en analyse des dynamiques sociales, communication et médiation, avec un fort engagement pour le développement communautaire et la protection des groupes vulnérables. Polyvalente, elle est apte à intervenir dans la recherche, la gestion de projets, l’éducation et la protection sociale.",
    avatar: avatarJulienne
  },
  {
    name: "Célestin AKEMANI",
    role: "",
    bio: "Ingénieur informatique, il est passionné par la technologie et la communication digitale pour le développement. Il est également un fervent défenseur des droits humains et de l'égalité des genres.",
    avatar: avatarJeanBosco
  },
  {
    name: "Annie SAFI",
    role: "",
    bio: "Psychologue clinicienne dévouée à la prise en charge des traumatismes et à la réhabilitation des survivantes.",
    avatar: avatarAnnie
  },
  {
    name: "Dieudonné MOPEPE",
    role: "",
    bio: "Licencié en Administration Et Réseau Informatique, il est passionné par la technologie et la communication digitale pour le développement.",
    avatar: avatarChristian
  },
  {
    name: "Ingels KAMBALE",
    role: "",
    bio: "Médecin, 13+ ans d'expérience en santé humanitaire en Afrique : coordination de programmes, épidémies, management d'équipes.",
    avatar: avatarIngels
  }
];

