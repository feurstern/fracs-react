import { star } from "../Assets";
import styles from "../style";

const gMap = 'https://www.google.com/maps/dir/-6.1964288,106.7614208/rajawali+konsulindo/@-6.1982766,106.7588543,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e69f7226210864f:0x95772c54294d992f!2m2!1d106.7619328!2d-6.1997352?entry=ttu'
export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/certifications",
    title: "Sertifikasi",
  },
  {
    id: "/gallery",
    title: "Galleri",
  },
  // {
  //   id: '/about-us',
  //   title: 'Tentang Kami'
  // },
  {
    id: "/register",
    title: "Pendaftaran",
  },
  {
    id: 'https://ourtoga.com/login/api/UFJPLTQ2MTgzMjcwOTVuRA==',
    title: 'Masuk'
  },
];

export const KAN = [
  {
    id: "kan",
    title: "Komite Akreditasi Nasional",
    content:
      "PT Pendidikan Profesi Keuangan - International Financial Modeling Institute Komp. Perkantoran Rich Palace Blok E No. 6, Jl. Meruya Ilir Raya No 36-40, Jakarta Barat (021) 58910022 / 58910055 / 58910060 contact@professionalfinancialmodeler.org",
    img: "",
  },
];

export const trainingOutLine = [
  {
    id: "trainingoutline-1",
    icon: "",
    title: "Training Outline",
    content:
      "This training program is dedicated to provide corporate / non banks on how to deal with financial risks. Contrary to banks which are tightly regulated in their financial risk management, financial risk management in corporate have not been standardized and every corporate needs to develop their own financial risk management by using methods which are most practical to them.",
    img: "",
  },
  {
    id: "trainingoutline-2",
    icon: "",
    title: "Training Outline",
    content:
      "This training is designed to introduce financial risks which are present in most companies. Besides introduction, participants will also learn on how to estimate the risk and most important, on how to deal with the risks. We will not focus on methods commonly used by banks, but by using methods which are applicable in companies such as by negotiating contractual agreement in light of the potential financial risks involved in the agreement.",
    img: "",
  },
  {
    id: "trainingoutline-3",
    ico: "",
    title: "Training Outline",
    content:
      'The term "financial risk" does not mean the participants must come from financial background. Due to its applicability, non financial functions such as operation, marketing, legal. And export import personnel will take advantage from this training. The training will use case studies to enhance understanding on the topics.',
    img: "",
  },
];

export const runDown = [
  {
    id: "session-1",
    title: "Session 1",
    content: "Memahami Risiko Keuangan dalam Konteks Perusahaan",
    icon: star
  },
  {
    id: "session-2",
    title: "Sesi 2 ",
    content: "Memahami Risiko Pasar",
    icon: star
  },
  {
    id: "session-3",
    title: "Sesi 3",
    content: "Memahami Risiko Kredit",
    icon: star
  },

  {
    id: "session-4",
    title: "Sesi 4",
    content: "Memahami Risiko Likuiditas dan Arus Kas",
    icon: star
  },
  {
    id: "session-5",
    title: "Sesi 5",
    content: "Mengelola Risiko Pasar Melalui Hedging (1)",
    icon: star
  },
  {
    id: "session-6",
    title: "Sesi 6",
    content: "Mengelola Risiko Pasar Melalui Hedging (2)",
    icon: star
  },
  {
    id: "session-7",
    title: "Sesi 7",
    content: "Mengelola Risiko Pasar Melalui Operasional",
    icon: star,
  },
  {
    id: "session-8",
    title: "Sesi 8",
    content: "Mengelola Risiko Kredit untuk Korporasi",
    icon: star,
  },
  {
    id: "session-9",
    title: "Sesi 9",
    content: "Mengelola Risiko Likuiditas dan Arus Kas untuk Korporasi",
    icon: star
  },
  {
    id: "session-10",
    title: "Sesi 10",
    content: "Memahami Risiko Keuangan yang Timbul dari Kegagalan Bisnis dan Investasi",
    icon: star
  },
  {
    id: "session-11",
    title: "Sesi 11",
    content: "Mengenali Potensi Risiko Keuangan dalam Laporan Keuangan",
    icon: star
  },
  {
    id: "session-12",
    title: "Sesi 12",
    content: "Praktek Mengenali Potensi Risiko Keuangan dalam Laporan Keuangan",
    icon: star,
  },
];

export const otherLinks = [
  {
    id: "other-link-1",
    icon: "https://ourtoga.com/assets/media/logo/ourtoga-01.png",
    link: "https://ourtoga.com/",
  },
  {
    id: "other-link-2",
    icon: "https://rjcons.com/public/img/icon/rj-cons-150x150.avif",
    link: "https://rjcons.com/",
  },

];

export const footerLinks = [
  {
    title: "Tautan Terkait:",
    links: [
      {
        name: "Tentang Kami",
        link: "/about-us",
      },
      {
        name: "Register",
        link: "/register",
      },
    ],
  },
  {
    title: "Hubungi Kami",
    links: [
      {
        name: ' Komplek Rich Palace Blok E no 6, No 36-41, Barat, Jl. Meruya Ilir Raya, RT.8/RW.7, Srengseng, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11620, Indonesia',
        link: `${gMap}`,
      },
      {
        name: "021-58910022/55/60",
        link: "2",
      },
      {
        name: "087741206863 ",
        link: "https://api.whatsapp.com/send/?phone=6287741206863&text&type=phone_number&app_absent=0",
      },
      {
        name: "085880500875",
        link: "https://api.whatsapp.com/send/?phone=6285880500875&text&type=phone_number&app_absent=0",
      },
      {
        name: '081385913098',
        link: 'https://api.whatsapp.com/send/?phone=6281385913098&text&type=phone_number&app_absent=0'
      },
      {
        name: '088294712616',
        link: 'https://api.whatsapp.com/send/?phone=6288294712616&text&type=phone_number&app_absent=0'
      }
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "ourtoga.com",
        link: "https://ourtoga.com/",
      },
      {
        name: "rjcons.com",
        link: "https://rjcons.com/",
      },
    ],
  },
];

export const feedBack = [
  {
    id: 1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "Elvin Willis",
    title: "Full Stack Developer",
    img: "https://media.licdn.com/dms/image/D5603AQGQkMgNCvH_pA/profile-displayphoto-shrink_800_800/0/1665485543999?e=2147483647&v=beta&t=XbEIiS0pE7rGojHUdLO5yptywK9OHpTRxYYK-bUxOXU"
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "Farid Darmaji",
    title: "Frontend Developer",
    img: "https://media.licdn.com/dms/image/D5603AQHtitc3-4fqpQ/profile-displayphoto-shrink_800_800/0/1679058849581?e=2147483647&v=beta&t=_HLFZbj8VpE3iI2NT9kZYO0tJqq67ziDtA_0IQxhW-E",
  },
  {
    id: 3,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "Ricky Raven",
    title: "Backend Developer",
    img: "https://ourtoga.com/uploads/participant/USR-0251983467lBDr/passphoto/passphoto_pbsDztmg.png",
  },
  {
    id: 3,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "Ricky Raven",
    title: "Backend Developer",
    img: "https://ourtoga.com/uploads/participant/USR-0251983467lBDr/passphoto/passphoto_pbsDztmg.png",
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "Farid Darmaji",
    title: "Frontend Developer",
    img: "https://media.licdn.com/dms/image/D5603AQHtitc3-4fqpQ/profile-displayphoto-shrink_800_800/0/1679058849581?e=2147483647&v=beta&t=_HLFZbj8VpE3iI2NT9kZYO0tJqq67ziDtA_0IQxhW-E",
  },
  {
    id: 1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "Elvin Willis",
    title: "Full Stack Developer",
    img: "https://media.licdn.com/dms/image/D5603AQGQkMgNCvH_pA/profile-displayphoto-shrink_800_800/0/1665485543999?e=2147483647&v=beta&t=XbEIiS0pE7rGojHUdLO5yptywK9OHpTRxYYK-bUxOXU"
  },


]

export const standarImparsialitas = [
  {
    key: "1",
    label : <h4 className={`${styles.heading4}`}>1</h4>,
    children: <p className={`${styles.paragraph}`}>IFMI memahami pentingnya menjaga keadilan dan ketidakberpihakan kepada semua pelamar, kandidat, dan Orang yang telah disertifikasi. IFMI telah menerapkan kebijakan dan prosedur untuk memastikan bahwa keadilan dan ketidakberpihakan dijaga dalam setiap proses terkait Sertifikasi FRAC.</p>
  },
  {
    key: "2",
    label: <h3 className={`${styles.heading4}`}>2</h3>,
    children: <p className={`${styles.paragraph}`}>
    IFMI tidak menyediakan pelatihan persiapan untuk kandidat FRAC dan sebagai gantinya, mengembangkan kemitraan dengan Penyedia Pelatihan Terdaftar untuk menyelenggarakan pelatihan persiapan bagi kandidat FRAC. Dalam hal ini, RTP tidak diizinkan untuk membuat janji bahwa partisipasi dalam pelatihan yang disediakan oleh RTP mana pun menjamin bahwa Kandidat akan lulus Ujian FRAC atau mendapatkan konsesi tertentu, yang membuat ujian menjadi tidak adil dan lebih mudah lulus bagi peserta mereka. IFMI tidak mempertimbangkan apakah Kandidat telah berpartisipasi dalam program pelatihan RTP mana pun saat mengambil keputusan lulus atau tidak lulus.</p>
  },
  {
    key: "3",
    label:<h3 className={`${styles.heading4}`}>3</h3>,
    children: <p className={`${styles.paragraph}`}> IFMI bertanggung jawab sepenuhnya untuk memberikan, menangguhkan, mencabut, dan mencabut sertifikasi peserta dan tidak akan pernah mendelegasikan keputusan tersebut kepada pihak lain.</p>
  },
  {
   key: "4",
   label:<h3 className={`${styles.heading4}`}>4</h3>,
   children: <p className={`${styles.paragraph}`}> IFMI memperlakukan semua data dan informasi yang disediakan oleh pelamar, kandidat, dan Orang yang telah disertifikasi sebagai rahasia. IFMI tidak akan mengungkapkan informasi kepada pihak ketiga kecuali diharuskan oleh hukum yang berlaku.</p>
  },
  {
    key: "5",
    label : <h3 className={`${styles.heading4}`}>5</h3>,
    children: <p className={`${styles.paragraph}`}> IFMI akan terus mengidentifikasi ancaman terhadap keadilan dan ketidakberpihakan. Setiap pelanggaran yang dirasakan terhadap ketidakberpihakan atau konflik kepentingan akan ditinjau untuk investigasi dan resolusi. IFMI menerima informasi dari pihak ketiga terkait setiap pelanggaran yang dirasakan terhadap ketidakberpihakan, keadilan, dan kerahasiaan. Kirim email ke impartial@professionalfinancialmodeler.org.</p>
  }
];





export const bannerData = [
  {
    title: 'FRAC Meningkatkan Akurasi Analisa Perusahaan',
    img: ' https://static.vecteezy.com/system/resources/previews/001/879/506/original/ideas-and-inspiration-in-learning-and-education-people-sitting-on-books-modern-online-learning-lamp-bulb-and-pencil-education-business-illustration-for-business-card-banner-brochure-flyer-free-vector.jpg',
    tagline: 'This is the data content for the first banner'
  },
  {
    title: 'FRAC Meningkatkan analyst Terampil dan Professional',
    img: 'https://static.vecteezy.com/system/resources/previews/001/879/506/original/ideas-and-inspiration-in-learning-and-education-people-sitting-on-books-modern-online-learning-lamp-bulb-and-pencil-education-business-illustration-for-business-card-banner-brochure-flyer-free-vector.jpg',
    tagline: 'This is the data content for the second banner'
  },
  {
    title: 'FRAC telah Terakreditasi',
    img: 'https://static.vecteezy.com/system/resources/previews/001/879/506/original/ideas-and-inspiration-in-learning-and-education-people-sitting-on-books-modern-online-learning-lamp-bulb-and-pencil-education-business-illustration-for-business-card-banner-brochure-flyer-free-vector.jpg',
    tagline: 'This is the data content for the third banner'
  },
  {
    title: 'Promosi Ujian Terdekat.',
    img: 'https://static.vecteezy.com/system/resources/previews/001/879/506/original/ideas-and-inspiration-in-learning-and-education-people-sitting-on-books-modern-online-learning-lamp-bulb-and-pencil-education-business-illustration-for-business-card-banner-brochure-flyer-free-vector.jpg',
    tagline: 'This is the data content for the fourth banner'
  },
];

//THis is data for section 3 - new js  about Mengapa sertifikasifor homepage
export const reasonsData = [
  {
    id: 1,
    content: 'Pengakuan profesional: Sertifikasi FRAC adalah gelar profesional yang diakui yang menunjukkan keahlian dalam manajemen risiko yang dapat meningkatkan kredibilitas dan reputasi.'
  },
  {
    id: 2,
    content: 'Peluang kemajuan karir: Sertifikasi FRAC dapat membuka pintu bagi peluang karir baru dan kemajuan di dalam organisasi. Ini dapat membantu individu menjadi lebih menonjol di antara rekan-rekan mereka dan meningkatkan peluang mereka untuk dipertimbangkan untuk promosi atau posisi tingkat lebih tinggi.'
  },
  {
    id: 3,
    content: 'Pengetahuan dan keterampilan yang diperluas: Program sertifikasi FRAC melibatkan kurikulum khusus yang mencakup berbagai aspek manajemen risiko yang mendalam dan bermanfaat untuk mengembangkan keterampilan lanjutan dalam penilaian risiko, mitigasi, dan manajemen.'
  },
  {
    id: 4,
    content: 'Keunggulan kompetitif: Sertifikasi FRAC menunjukkan komitmen dari profesional di bidang risiko perusahaan terhadap pengembangan profesional dan dedikasi untuk tetap terkini dengan praktik dan standar terbaru dalam manajemen risiko perusahaan yang memberikan keunggulan kompetitif.'
  },
  {
    id: 5,
    content: 'Peluang jaringan: Sertifikasi FRAC dapat memberikan individu akses ke jaringan profesional di bidang manajemen risiko, Jaringan koneksi berharga, mentorship, dan peluang untuk kolaborasi dan berbagi pengetahuan.'
  },
  {
    id: 6,
    content: 'Potensi pendapatan yang lebih tinggi: Sertifikasi FRAC dapat berpotensi mengarah pada gaji dan paket kompensasi yang lebih tinggi sejalan dengan penghargaan dari perusahaan yang menghargai para profesional dengan keahlian yang sertifikasi dan teruji.'
  },
]

// this array data for section 4 about siapa perlu mengambil sertifikat FRAC
// export const targetMarket = [
//   'Risk Manager in Companies',
//   'Consultant',
//   'Finance Manager and Team',
//   'Finance Analyst',
//   'Regulator',
//   'Educator',
//   'Consultant',
//   'Senior management',
//   'Other professions'
// ]
export const targetMarket = [
  'Manager Resiko di Perusahaan',
  'Konsultan',
  'Manager Keuangan dan Tim',
  'Analis Keuangan',
  'Regulator',
  'Pengajar',
  'Manager Senior',
  'Profesi Lainnya'
]

// section 1 about us 'tentang IFMI'
export const aboutIfmi = [
  {
    id: '1',
    text: 'International Financial Modeling Institute (IFMI) adalah organisasi yang didirikan dengan visi untuk memfasilitasi pengembangan bidang pemodelan keuangan dan manajemen risiko melalui pendidikan, sertifikasi, berbagi, penelitian, dan praktik. IFMI berusaha untuk mempromosikan praktik terbaik dalam pemodelan keuangan dan manajemen risiko dan mendukung pengembangan profesional yang berkelanjutan dari karir yang sesuai.'
  },
  {
    id: '2',
    text: 'FRAC adalah program sertifikasi di bidang risiko keuangan untuk korporasi. Program sertifikasi ini memberikan FRAC Designation kepada para profesional yang memenuhi syarat. IFMI mengelola penyelenggaraan Ujian FRAC di seluruh dunia.'
  },
  {
    id: '3',
    text: 'Program FRAC mematuhi standar dan proses yang sesuai dengan standar global untuk memastikan ketidakberpihakan dan keadilan dari keseluruhan proses. Untuk ini,  FRAC telah mendapatkan akreditasi dari Komite Akreditasi Nasional, sebuah badan akreditasi resmi Pemerintah Republik Indonesia. '
  },
  // {
  //   id: '4',
  //   text: 'Klik di sini untuk membaca kebijakan ketidakberpihakan dan keadilan IFMI."'
  // },
  {
    id: '5',
    text: 'FRAC mengharuskan kandidat untuk mengikuti pelatihan wajib persiapan ujian sertifikasi. IFMI mendukung RTP untuk memberikan program pelatihan mengenai program yang dikelola oleh IFMI untuk negara atau wilayah tertentu.'
  },
]