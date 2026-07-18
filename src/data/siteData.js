const image = (name) => "/assets/images/" + name;

export const provinces = [
  { slug: "phnom-penh", name: "ភ្នំពេញ", hero: ["phnom penh.avif", "royal palace6.avif", "watphnom.jpg"], introImage: "Royal-Palace-phnom-penh.png", summary: "រាជធានីភ្នំពេញជាមជ្ឈមណ្ឌលវប្បធម៌ អាហារ ប្រវត្តិសាស្រ្ត និងជីវិតទីក្រុងរបស់កម្ពុជា។" },
  { slug: "siem-reap", name: "សៀមរាប", hero: ["sr1.jpg", "sr2.jpg", "sr3.jpg"], introImage: "Krong-Siem-Reap-Cambodia.jpeg", summary: "ខេត្តសៀមរាបល្បីដោយប្រាសាទអង្គរ វប្បធម៌បុរាណ ផ្សារ និងតំបន់កម្សាន្តពេលរាត្រី។" },
  { slug: "kampot", name: "កំពត", hero: ["kp-2.jpg", "kp-3.jpg", "kp-4.jpg"], introImage: "Bokko.jpg", summary: "កំពតមានភ្នំបូកគោ ទន្លេ អាហារសមុទ្រ និងបរិយាកាសសម្រាកលំហែស្ងប់ស្ងាត់។" },
  { slug: "koh-kong", name: "កោះកុង", hero: ["koh-kong.jpg", "koh-kong 2.jpg", "koh-kong 3.jpg"], introImage: "កោះកុងក្រៅ.jpg", summary: "កោះកុងមានកោះ សមុទ្រ ព្រៃកោងកាង និងទេសភាពធម្មជាតិជាច្រើន។" },
  { slug: "battambang", name: "បាត់ដំបង", hero: ["btt-2.webp", "btt-1.avif", "btt-3.jpeg"], introImage: "btt-4.jpg", summary: "បាត់ដំបងសម្បូរទៅដោយសំណង់បុរាណ សិល្បៈ ម្ហូប និងតំបន់ធម្មជាតិ។" },
  { slug: "kandal", name: "កណ្ដាល", hero: ["koh dach.jpg", "takmav.jpg", "udong.jpg"], introImage: "circle.jpeg", summary: "កណ្ដាលនៅជិតភ្នំពេញ មានកោះដាច់ ភ្នំឧដុង្គ និងតំបន់កម្សាន្តជុំវិញរាជធានី។" },
  { slug: "kampong-cham", name: "កំពង់ចាម", hero: ["kampong-cham1.jpg", "kampong-cham2.jpg", "kampong-cham3.jpg"], introImage: "kampong-cham5.jpg", summary: "កំពង់ចាមមានទន្លេមេគង្គ ប្រាសាទបុរាណ ភ្នំប្រុសភ្នំស្រី និងកោះប៉ែន។" },
  { slug: "kampong-chhnang", name: "កំពង់ឆ្នាំង", hero: ["kampong-chhnang1.jpg", "kampong-chhnang2.jpg", "kampong-chhnang3.jpg"], introImage: "kampong-chhnang4.jpg", summary: "កំពង់ឆ្នាំងល្បីដោយភូមិបណ្ដែតទឹក សិប្បកម្ម និងទេសភាពបឹងទន្លេសាប។" },
  { slug: "kampong-thom", name: "កំពង់ធំ", hero: ["kampongthom1.jpg", "kampongthom2.jpg", "kampongthom3.jpg"], introImage: "kampongthom4.jpg", summary: "កំពង់ធំមានសំបូរព្រៃគុក វប្បធម៌បុរាណ និងទីតាំងកណ្តាលងាយធ្វើដំណើរ។" },
  { slug: "kampong-speu", name: "កំពង់ស្ពឺ", hero: ["kampong speu1.jpg", "kampong speu2.jpg", "kampong speu3.jpg"], introImage: "kampong speu4.jpg", summary: "កំពង់ស្ពឺមានគិរីរម្យ ភ្នំ ធម្មជាតិ និងតំបន់ដើរលេងក្រៅក្រុង។" },
  { slug: "pailin", name: "ប៉ៃលិន", hero: ["pailin.jpg", "pailin2.jpg", "pailin3.jpg"], introImage: "pailin4.webp", summary: "ប៉ៃលិនមានភ្នំ ទឹកធ្លាក់ និងប្រវត្តិសាស្រ្តពាក់ព័ន្ធនឹងត្បូង។" },
  { slug: "kep", name: "កែប", hero: ["keb1.jpg", "keb2.jpg", "keb3.jpg"], introImage: "kep.jpg", summary: "កែបល្បីដោយឆ្នេរ ក្តាមសមុទ្រ កោះទន្សាយ និងរមណីយដ្ឋានស្ងប់ស្ងាត់។" },
  { slug: "preah-vihear", name: "ព្រះវិហារ", hero: ["preah vihea1.jpg", "preah vihea2.jpg", "preah vihea3.jpg"], introImage: "preah vihea.jpg", summary: "ព្រះវិហារមានប្រាសាទលើភ្នំ ទេសភាពខ្ពស់ និងប្រវត្តិសាស្រ្តខ្មែរ។" },
  { slug: "sihanoukville", name: "ព្រះសីហនុ", hero: ["preahsihanouk1.jpg", "preahsihanouk2.jpg", "preahsihanouk3.jpg"], introImage: "ឆ្នេរអូរឈើទាល.jpg", summary: "ព្រះសីហនុមានឆ្នេរ កោះ សណ្ឋាគារ និងការកម្សាន្តតាមសមុទ្រ។" },
  { slug: "takeo", name: "តាកែវ", hero: ["takeo1.jpg", "takeo2.jpg", "takeo3.jpg"], introImage: "takeo4.jpg", summary: "តាកែវសម្បូរទៅដោយប្រាសាទបុរាណ ភ្នំ និងសហគមន៍ប្រវត្តិសាស្រ្ត។" },
  { slug: "ratanakiri", name: "រតនគីរី", hero: ["ratanakiri 1.jpg", "ratanakiri 2.jpg", "ratanakiri 3.jpg"], introImage: "yak lorm 1.jpg", summary: "រតនគីរីមានបឹងយក្ខឡោម ទឹកធ្លាក់ ព្រៃភ្នំ និងទេសភាពភាគឦសាន។" },
  { slug: "mondulkiri", name: "មណ្ឌលគិរី", hero: ["mondulkiri1.jpg", "mondulkiri2.jpg", "mondulkiri3.jpg"], introImage: "bou-sra1.webp", summary: "មណ្ឌលគិរីល្បីដោយខ្យល់ត្រជាក់ ទឹកជ្រោះប៊ូស្រា ព្រៃភ្នំ និងសហគមន៍ជនជាតិដើម។" },
  { slug: "stung-treng", name: "ស្ទឹងត្រែង", hero: ["stung treng.jpg", "stung treng1.jpg", "stung treng2.webp"], introImage: "stung treng3.jpg", summary: "ស្ទឹងត្រែងមានទន្លេមេគង្គ កោះ ទេសភាពធម្មជាតិ និងសហគមន៍ជិតព្រំដែន។" },
  { slug: "kro-jes", name: "ក្រចេះ", hero: ["krojes1.jpg", "krojes2.jpg", "krojes3.jpg"], introImage: "kohtrong.jpg", summary: "ក្រចេះល្បីដោយផ្សោតទន្លេមេគង្គ កោះត្រង់ និងទេសភាពតាមទន្លេ។" },
  { slug: "prey-veng", name: "ព្រៃវែង", hero: ["prey veng.jpg", "prey veng1.jpg", "prey veng3.jpg"], introImage: "prey veng 2.webp", summary: "ព្រៃវែងមានវាលស្រែ ទន្លេ សហគមន៍ និងតំបន់សាសនាបុរាណ។" },
  { slug: "pursat", name: "ពោធិ៍សាត់", hero: ["pursat1.jpg", "pursat2.jpg", "pursat3.jpg"], introImage: "pursat.jpg.crdownload", summary: "ពោធិ៍សាត់មានភ្នំក្រវាញ បឹងទន្លេសាប សហគមន៍ និងធម្មជាតិ។" },
  { slug: "svay-rieng", name: "ស្វាយរៀង", hero: ["svay reang.jpg", "svay reang1.jpg", "svay reang3.jpg"], introImage: "svay reang2.jpg", summary: "ស្វាយរៀងជាខេត្តព្រំដែនមានទីផ្សារ វប្បធម៌ និងតំបន់ឆ្លងកាត់សំខាន់។" },
  { slug: "oddar-meanchey", name: "ឧត្ដរមានជ័យ", hero: ["oddarmeanchey1.jpg", "oddarmeanchey2.jpg", "oddarmeanchey3.jfif"], introImage: "oddarmeanchey4.jpg", summary: "ឧត្ដរមានជ័យមានប្រវត្តិសាស្រ្ត ភ្នំ និងតំបន់ព្រំដែនជាច្រើន។" },
  { slug: "banteay-meanchey", name: "បន្ទាយមានជ័យ", hero: ["banteaymeanchey1.jfif", "banteaymeanchey2.jpg", "banteaymeanchey3.jpg"], introImage: "banteaymeanchey4.jpg", summary: "បន្ទាយមានជ័យមានប្រាសាទ សហគមន៍ ពាណិជ្ជកម្មព្រំដែន និងទីក្រុងប៉ោយប៉ែត។" }
].map((p) => ({ ...p, hero: p.hero.map(image), introImage: image(p.introImage) }));

export const navLinks = [
  { label: "ទំព័រដើម", path: "/" },
  { label: "តំបន់ពេញនិយម", path: "/list/popular" },
  { label: "ផែនការ", path: "/info/plan" },
  { label: "ទំនាក់ទំនង", path: "/info/contact" },
  { label: "អំពីយើង", path: "/info/about" }
];

export const places = [
  { slug: "bayon", type: "temple", name: "ប្រាសាទបាយ័ន្ត", province: "សៀមរាប", image: image("bayon-temple-(1).png"), gallery: ["bayon-temple-(1).png", "bayon-temple-(2).png", "bayon-temple-(3).png", "bayon-temple-(4).png"].map(image), summary: "ប្រាសាទបាយ័ន្តស្ថិតនៅកណ្តាលអង្គរធំ មានមុខព្រហ្មច្រើន និងចម្លាក់ថ្មដ៏ល្អិត។" },
  { slug: "koulen", type: "temple", name: "ភ្នំគូលែន", province: "សៀមរាប", image: image("kurlan2.jpg"), gallery: ["Kulan.jpg", "koulen2.jpg", "koulen3.jpg", "kurlan4.jpg"].map(image), summary: "ភ្នំគូលែនមានទឹកជ្រោះ ចម្លាក់ព្រះពុទ្ធ និងជាទីតាំងសាសនាសំខាន់។" },
  { slug: "angkor-garden", type: "entertainment", name: "Angkor Wonder Garden", province: "សៀមរាប", image: image("angkor-wonder-garden.png"), gallery: ["angkor-wonder-garden.png", "gar-1.jpeg", "gar-2.jpg", "gar-3.jpg"].map(image), summary: "សួនកម្សាន្តសម្រាប់គ្រួសារ និងការថតរូបជាមួយបរិយាកាសបៃតង។" },
  { slug: "pub-street", type: "entertainment", name: "Pub Street", province: "សៀមរាប", image: image("pub-street.png"), gallery: ["pub street.png", "pub-2.jpg", "pub-3.jpg", "pub-4.jpg"].map(image), summary: "តំបន់កម្សាន្តពេលរាត្រីដែលមានអាហារ ហាង និងភ្លើងពណ៌ចម្រុះ។" },
  { slug: "pp-palace", type: "temple", name: "ព្រះបរមរាជវាំង", province: "ភ្នំពេញ", image: image("Royal-Palace-phnom-penh.png"), gallery: ["royal palace1.jpg", "royal palace2.webp", "royal palace3.jpg", "royal palace6.avif"].map(image), summary: "សំណង់រាជវាំងដ៏សំខាន់បង្ហាញស្ថាបត្យកម្មខ្មែរ និងប្រវត្តិសាស្រ្តរាជវង្ស។" },
  { slug: "koh-kong-krav", type: "nature", name: "កោះកុងក្រៅ", province: "កោះកុង", image: image("កោះកុងក្រៅ.jpg"), gallery: ["kohkongkrav1.jpg", "kohkongkrav2.jpeg", "kohkongkrav3.jpg", "kohkongkrav4.jpg"].map(image), summary: "កោះធម្មជាតិធំមួយមានឆ្នេរស និងទឹកសមុទ្រថ្លា។" },
  { slug: "bokor", type: "nature", name: "ភ្នំបូកគោ", province: "កំពត", image: image("Bokko.jpg"), gallery: ["bokor.jpg", "bokor1.jpg", "bokor2.jpg", "bokor5.jpg"].map(image), summary: "ឧទ្យានជាតិលើភ្នំមានអាកាសធាតុត្រជាក់ ទេសភាពសមុទ្រ និងសំណង់បុរាណ។" },
  { slug: "one-more", type: "restaurant", name: "One More Restaurant", province: "ភ្នំពេញ", image: image("one-more-pp.png"), gallery: ["one-more-pp.png", "onemore-view-1.png", "onemore-food-4.png", "onemore-khmer-noodles.png"].map(image), summary: "ភោជនីយដ្ឋានមានម្ហូបខ្មែរ និងបរិយាកាសសាមញ្ញសម្រាប់ជួបជុំ។" }
];

export const hotels = [
  { slug: "g-mekong", name: "G Mekong Hotel", province: "ភ្នំពេញ", image: image("g-mekong-hotel (1).png"), gallery: ["mekong palace.jpg", "mekong2.jpg", "g-mekong-hotel (1).png", "mekong3.jpg", "mekong4.jpg"].map(image), summary: "សណ្ឋាគារកណ្តាលរាជធានីភ្នំពេញ មានបន្ទប់សមរម្យ សេវាកម្ម និងទីតាំងងាយស្រួល។", price: "$48", amenities: ["ម៉ាស៊ីនត្រជាក់", "Wi-Fi", "ទូរទស្សន៍", "អាងហែលទឹក", "ចំណតរថយន្ត"] },
  { slug: "angkor-leap", name: "Angkor Leap Hotel", province: "សៀមរាប", image: image("AL 3.jpg"), gallery: ["AL 6.jpg", "AL 2.jpg", "AL 3.jpg", "AL 4.jpg", "AL 5.jpg"].map(image), summary: "សណ្ឋាគារសម្រាប់អ្នកចង់ស្នាក់នៅជិតតំបន់អង្គរ និងទីក្រុងសៀមរាប។", price: "$52", amenities: ["ម៉ាស៊ីនត្រជាក់", "Wi-Fi", "អាហារពេលព្រឹក", "បន្ទប់គ្រួសារ", "ជំនួយដំណើរកម្សាន្ត"] }
];

export const categories = [
  { slug: "popular", title: "តំបន់ពេញនិយម", icon: "fa-map", items: places.filter((p) => ["temple", "nature"].includes(p.type)) },
  { slug: "entertainment", title: "តំបន់ដើរលេង", icon: "fa-compass", items: places.filter((p) => p.type === "entertainment") },
  { slug: "restaurants", title: "ភោជនីយដ្ឋាន", icon: "fa-utensils", items: places.filter((p) => p.type === "restaurant") },
  { slug: "hotels", title: "សណ្ឋាគារ", icon: "fa-bed", items: hotels }
];

export const infoPages = {
  about: { title: "អំពី LMLP Tourism", body: "យើងបង្កើតគេហទំព័រនេះដើម្បីរៀបចំព័ត៌មានទេសចរណ៍កម្ពុជាឱ្យងាយស្រួលមើល ស្វែងរក និងពង្រីកបន្ថែម។" },
  contact: { title: "ទំនាក់ទំនង", body: "សម្រាប់ការសាកសួរ សូមប្រើទម្រង់ទំនាក់ទំនង ឬទាក់ទងក្រុមការងារ LMLP Tourism។" },
  plan: { title: "ផែនការធ្វើដំណើរ", body: "ជ្រើសរើសខេត្ត កំណត់កន្លែងចង់ទៅ ប្រៀបធៀបសណ្ឋាគារ ហើយរៀបចំថវិកាមុនចេញដំណើរ។" }
};

export const getProvince = (slug) => provinces.find((item) => item.slug === slug);
export const getPlace = (slug) => places.find((item) => item.slug === slug);
export const getHotel = (slug) => hotels.find((item) => item.slug === slug);
export const getCategory = (slug) => categories.find((item) => item.slug === slug);
