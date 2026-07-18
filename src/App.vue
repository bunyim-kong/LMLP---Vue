<template>
<div class="head">
        <div class="navbar">
                <div class="logo">
                    <a href="/" @click="closeMobileMenu"><img src="/assets/images/lmlp-logo.png" alt=""></a>
                </div>

                <button class="nav-toggle" type="button" :aria-expanded="isMobileMenuOpen" aria-controls="primary-menu" @click="isMobileMenuOpen = !isMobileMenuOpen">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div id="primary-menu" class="menu" :class="{ 'is-open': isMobileMenuOpen }">
                    <ul>
                        <li><a href="#homepage" @click="closeMobileMenu">ទំព័រដើម</a></li>
                        <li class="dropdown">
                            <a href="#" @click="closeMobileMenu">ខេត្ត/ក្រុង ▾</a>
                            <div class="dropdown-content">
                                <ul class="province-list">
                                <li><a href="/pages/phnom-penh-index-2.html" @click="closeMobileMenu">ភ្នំពេញ</a></li>
                                <li><a href="/pages/kandal-index.html" @click="closeMobileMenu">កណ្ដាល</a></li>
                                <li><a href="/pages/kampong-cham-index.html" @click="closeMobileMenu">កំពង់ចាម</a></li>
                                <li><a href="/pages/kampong-chhnang-index.html" @click="closeMobileMenu">កំពង់ឆ្នាំង</a></li>
                                <li><a href="/pages/kampong-thom-index.html" @click="closeMobileMenu">កំពង់ធំ</a></li>
                                <li><a href="/pages/kampong-speu-index.html" @click="closeMobileMenu">កំពង់ស្ពឺ</a></li>
                                <li><a href="/pages/battambang-index-3.html" @click="closeMobileMenu">បាត់ដំបង</a></li>
                                <li><a href="/pages/pailin-index.html" @click="closeMobileMenu">ប៉ៃលិន</a></li>
                                <li><a href="/pages/kampot-index-2.html" @click="closeMobileMenu">កំពត</a></li>
                                <li><a href="/pages/koh-kong-index.html" @click="closeMobileMenu">កោះកុង</a></li>
                                <li><a href="/pages/kro-jes-index.html" @click="closeMobileMenu">ក្រចេះ</a></li>
                                <li><a href="/pages/keb-index.html" @click="closeMobileMenu">កែប</a></li>
                                <li><a href="/pages/preah-vihea-index.html" @click="closeMobileMenu">ព្រះវិហារ</a></li>
                                <li><a href="/pages/sihanuk-index.html" @click="closeMobileMenu">ព្រះសីហនុ</a></li>
                                <li><a href="/pages/pur-sat-index.html" @click="closeMobileMenu">ពោធិ៍សាត់</a></li>
                                <li><a href="/pages/prey-veng-index.html" @click="closeMobileMenu">ព្រៃវែង</a></li>
                                <li><a href="/pages/ratanakiri-index.html" @click="closeMobileMenu">រតនគីរី</a></li>
                                <li><a href="/pages/siem-reap-index.html" @click="closeMobileMenu">សៀមរាប</a></li>
                                <li><a href="/pages/svay-reang-index.html" @click="closeMobileMenu">ស្វាយរៀង</a></li>
                                <li><a href="/pages/takeo-index.html" @click="closeMobileMenu">តាកែវ</a></li>
                                <li><a href="/pages/oddar-meanchey-index.html" @click="closeMobileMenu">ឧត្ដរមានជ័យ</a></li>
                                <li><a href="/pages/mondulkiri-index.html" @click="closeMobileMenu">មណ្ឌលគិរិ</a></li>
                                <li><a href="/pages/stung-treng-index.html" @click="closeMobileMenu">ស្ទឹងត្រែង</a></li>
                                <li><a href="/pages/banteay-meanchey-index.html" @click="closeMobileMenu">បន្ទាយមានជ័យ</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="#content-popular" @click="closeMobileMenu">តំបន់ពេញនិយម</a></li>
                        <li><a href="#content-plan" @click="closeMobileMenu">ផែនការ</a></li>
                        <li><a href="#content-discount" @click="closeMobileMenu">បញ្ចុះតម្លៃ</a></li>
                        <li><a href="/pages/contact.html" @click="closeMobileMenu">ទំនាក់ទំនងអំពីយើង</a></li>
                        <li><a href="/pages/about-us.html" @click="closeMobileMenu">អំពីយើង</a></li>
                    </ul>
                </div>
        </div>
    </div>


    <div class="slider" id="homepage">

        <div class="list">

            <div class="item">
                <img src="/assets/images/Cultural-and-Historical-Angkor-Wat.jpg" alt="">

                <div class="item-content">
                    <p>សៀមរាប</p>
                    <h1>អង្គរវត្ត</h1>
                    <div class="textt">
                        <span>ប្រាសាទ អង្គរវត្ត ឬ នគរវត្ត (អង់គ្លេស: Angkor Wat) or (Nokor Wat) ជាប្រាសាទ ដែលធំបំផុត នៅក្នុងប្រទេសកម្ពុជា
                        ដែលមានមាឌដ្ឋានលើផ្ទៃដីទំហំ ១៦២,៦ ហិចតា ដោយស្មើនឹង (1,626,000 m2) ។ រចនាសម្ព័ននៃសំណង់ប្រាសាទត្រូវ បានចាត់ទុក
                        ជាស្ថាបត្យកម្មដ៏កំពូល នៃ អច្ឆរិយៈវត្ថុរបស់ពិភពលោក ដែលត្រូវបានសាងសង់ឡើងក្នុងស.វទី១២ ដោយព្រះបាទ សូរ្យវរ្ម័នទី២ ដែលជា
                        ព្រះមហាក្សត្រ នាសម័យកាល ចក្រភពខ្មែរ ប្រាសាទនេះសាងសង់ ដើម្បីឧទ្ទិសឱ្យ ព្រហ្មញ្ញសាសនា នៃលទ្ធិជំនឿលើ ព្រះវិស្ណុ ។</span>
                    </div>
                  
                    <a href="/pages/siem-reap-index.html" @click="closeMobileMenu"><button>អានបន្ថែម</button></a>
                </div>
            </div>


            <div class="item">
                <img src="/assets/images/កោះកុងក្រៅ.jpg" alt="">

                <div class="item-content">
                    <p>កោះកុង</p>
                    <h1>កោះកុងក្រៅ</h1>
                    <div class="textt">
                        <span>កោះកុងក្រៅ គឺជាកោះដ៍ធំបង្អស់របស់ប្រទេសកម្ពុជា កោះនេះមានទំហំផ្ទៃដីសរុបប្រមាណជា ១០៣គីឡូម៉ែត្រការ៉េនិង មានទទឹង ៧ 
                        គីឡូម៉ែត្រ បណ្តោយប្រហែល ១៩ គីឡូម៉ែត្រ កោះនេះមានទីតាំងស្ថិតក្នុងភូមិកោះកាពិ ឃុំកោះកាំពិ ស្រុកកោះកុង ខេត្តកោះកុង មាន 
                        ចម្ងាយប្រមាណជា ៣០ គីឡូម៉ែត្រ ពីទីរួមក្រុងខេមរភូមិន្ទ ខេត្តកោះកុង។ លើសពីនេះ ឆ្នេរកោះកុងក្រៅ មានចំនួន៦ឆ្នេរ ដែលឆ្នេរនីមួយៗ
                        មានខ្សាច់សស្អាត ទឹកសមុទ្រថ្លា អាចមើលឃើញដល់បាតសមុទ្រ ព្រមទាំងមានព្រែកខាងក្រោយឆ្នេរ 
                        ដែលអាចអោយយើងគយគន់ទេសភាពយ៉ាងស្អាតបំផុត។</span>
                    </div>
                    
                    <a href="/pages/koh-kong-index.html" @click="closeMobileMenu"><button>អានបន្ថែម</button></a>
                </div>
            </div>


            <div class="item">
                <img src="/assets/images/Bokko.jpg" alt="">

                <div class="item-content">
                    <p>កំពត</p>
                    <h1>ភ្នំបូកគោ</h1>
                    <div class="textt">
                        <span>ភ្នំបូកគោគឺជាឧទ្យានជាតិ នៅខេត្តកំពតភាគខាងត្បូងនៃប្រទេសកម្ពុជា។ វាត្រូវបានគេស្គាល់ផងដែរថាជា ឧទ្យានជាតិភ្នំបូកគោ។ 
                        ភ្នំបូកគោស្ថិតនៅក្នុងតំបន់ខ្ពង់រាប ដែលបង្កើតជាតំបន់ភាគអាគ្នេយ៍នៃ ជួរភ្នំក្រវាញ ។ ភាគច្រើននៃឧទ្យាននេះមានកម្ពស់ប្រហែល ១០០០ 
                        ម៉ែត្រពីលើផ្ទៃសមុទ្រហើយកំពូលភ្នំបូកគោមានកំពស់ ១១០១ម៉ែត្រដែលគេហៅថាភ្នំបូកគោ។ ភ្នំបូគោគឺជាភ្នំមួយដែលស្ថិតនៅក្នុងខេត្តកំពត 
                        ភ្នំបូគោមានចម្ងាយ ៣២គីឡូម៉ែត្រគិតចាប់ពីផ្លូវជាតិលេខ៣ ដល់កំពូលភ្នំបូកគោហើយភ្នំបូកគោមានកំពស់ ១១០១ម និងមានផ្ទៃដីសរុប
                        ១៤០០០ហិចតាយោងតាម គណៈគ្រប់គ្រងភ្នំបូកគោ។</span>
                    </div>
                 
                    <a href="/pages/kampot-index-2.html" @click="closeMobileMenu"><button>អានបន្ថែម</button></a>
                </div>
            </div>


            <div class="item">
                <img src="/assets/images/ឆ្នេរអូរឈើទាល.jpg" alt="">

                <div class="item-content">
                    <p>ព្រះសីហនុ</p>
                    <h1>ឆ្នេរអូរឈើទាល</h1>
                    <div class="textt">
                        <span>ឆ្នេរនេះមាន​ភាពទាក់ទាយនិងល្បីល្បាយជាខ្លាំងនៅក្នុងព្រះរាជាណាចក្រកម្ពុជាយើង ។​ក្នុងមួយឆ្នាំៗឆ្នេនេះអាច​ទាក់ទាយភ្ញៀវទេស
                    ចរណ៏បាន​រាប់រយពាន់​នាក់​ចូលមក​ទស្សនានៅក្នុង​ក្រុងព្រះ​សីហនុដែលជាចំនែកមួយក្នុងការជួយអភិវឌ្ឍន៍ដល់កំនើនសេដ្ឋកិច្ចជាតិ ។
                    ​អូរឈើទាល​ជាតំបន់ឆ្នេរ​មួយ​ដែលមាន​ទេសភាពធម្មជាតិស្រស់ល្អ​បំព្រងគួរ​អោយ​ចាប់អារម្មណ៏ក្រៃលែង ។ អូរឈើទាលមានឆ្នេរ​ខ្សាច់​សស្អាត​ 
                    វែង​អន្លាយ​នឹង​មាន​ដើម​ឈើ​ជាច្រើន​ដុះអែប​មាត់ ឆ្នេរសមុទ្រ​មើលទៅជាជួរ​គួរអោយ​ ទាក់ទាយបំផុតហេតុនេះហើយឆ្នេរនេះក៏បានជាប់ជាសមាជិក
                    ក្លឹបឆ្នេរដែលស្អាតជាងគេក្នុងពិភពលោក ។</span>
                    </div>
          
                    <a href="/pages/sihanuk-index.html" @click="closeMobileMenu"><button>អានបន្ថែម</button></a>
                </div>
            </div>
        </div>


        <div class="thumnail">
            <div class="thumnail-item">
                <img src="/assets/images/Cultural-and-Historical-Angkor-Wat.jpg" alt="">

                <div class="text">
                    <h1>អង្គរវត្ត</h1>
                    <p>សៀមរាប</p>
                </div>
            </div>

            <div class="thumnail-item">
                <img src="/assets/images/កោះកុងក្រៅ.jpg" alt="">

                <div class="text">
                    <h1>កោះកុងក្រៅ</h1>
                    <p>កោះកុង</p>
                </div>
            </div>

            <div class="thumnail-item">
                <img src="/assets/images/Bokko.jpg" alt="">

                <div class="text">
                    <h1>ភ្នំបូកគោ</h1>
                    <p>កំពត</p>
                </div>
            </div>

            <div class="thumnail-item">
                <img src="/assets/images/ឆ្នេរអូរឈើទាល.jpg" alt="">

                <div class="text">
                    <h1>ឆ្នេរអូឈើទាល</h1>
                    <p>សីហនុ</p>
                </div>
            </div>
        </div>

        
        <div class="nextArrow">
            <button class="prev"> < </button>
            <button class="next"> > </button>
        </div>
</div>

    <div class="content-intro">
            <img src="/assets/images/kbach khmer.png" alt="">

            <div class="intro-text">
                <h1>ហេតុអ្វីអ្នកទាំងអស់គ្នាគួរមកដំណើរកំសាន្តនៅប្រទេសកម្ពុជា ?</h1>
                <p>មនុស្សភាគច្រើនមកទស្សនា​ប្រទេស​កម្ពុជា​ដើម្បី​ទស្សនា​ឧទ្យាន​បុរាណ​អង្គរ និង​ប្រាសាទ
                    ​បុរាណ​ខ្មែរ​ដ៏​អស្ចារ្យ។​មិនដែលប៉ុណ្ណោះកម្ពុជាមានសុខសន្តិភាពពេញបរិបូរណ៍ ប្រជាពលរដ្ឋ
                    និង ភ្ញៀវទេសចរអន្តរជាតិ អាចធ្វើដំណើរកម្សាន្តបានគ្រប់ទីកន្លែង ជាមួយនិង ហេដ្ឋារចនា
                    សម្ព័ន្ធ ដ៏ ស្រស់ស្អាត តំបន់ទេសចរណ៍ដ៏សម្បូរបែប ទាំងតំបន់ ទេសចរណ៍ធម្មជាតិតំបន់
                    ទេសចរណ៍វប្បធម៏ និង តំបន់ទេសចរណ៍កែច្នៃរាប់រយកន្លែងទៀតដែលមានសម្រស់គួរ
                    អោយចង់គយគង់។
                </p>
            </div>
    </div>



    <div class="partner">
            <div class="ads">
                <img src="/assets/images/csc-express.png" alt="">
            </div>

            <div class="ads">
                <img src="/assets/images/Greenchainkh.png" alt="">
            </div>

            <div class="ads">
                <img src="/assets/images/Home-me.png" alt="">
            </div>

            <div class="ads extra-1">
                <img src="/assets/images/ski-center-removebg-preview.png" alt="">
            </div>

            <div class="ads extra-2">
                <img src="/assets/images/Teetra-book.png" alt="">
            </div>
            
            <div class="ads extra">
                <img src="/assets/images/work-star.png" alt="">
            </div> 
    </div>  

        






    <div class="container">
        <div id="content-popular">
            <div class="popular-title">
                <h1>តំបន់ពេញនិយម</h1>
            </div>

            <div class="popular-items">
                <div class="item">
                    <div class="item-img">
                        <a href="/pages/beng-mealea-index.html" @click="closeMobileMenu"><img src="/assets/images/beng-mealea.png" alt=""></a>
                    </div>

                    
                    <div class="item-text">
                        <h1>បឹងមាលា</h1>
                        <span>⚲ សៀមរាប</span>
                        <p>​ប្រាសាទបេង​មាលា​បាន​កសាង​ឡើង​នៅ​សតវត្សរ៍​ទី​១២ តាម​រចនាប័ទ្ម​អង្គរវត្ត សង់​លើ​ផៃ្ទដី​រាបស្មើ​ទំហំ​១៤​ហិកតា
                         ដែល​មាន​កំពែង​៣​ជាន់​។ រាសាទបេង​មាលា​ត្រូវបាន​សាងសង់​ឡើង ដើម្បី​ឧទ្ទិស​ថ្វាយ​</p>
                    </div>
                </div>

                <div class="item">
                    <div class="item-img">
                        <a href="/pages/phnom-bokor.html" @click="closeMobileMenu"><img src="/assets/images/Bokko.jpg" alt=""></a>
                    </div>

                    
                    <div class="item-text">
                        <h1>ភ្នំបូកគោ</h1>
                        <span>⚲ កំពត</span>
                        <p>ឧទ្យានជាតិព្រះមុនីវង្សភ្នំបូកគោ ដែលត្រូវបានគេស្គាល់ភាគច្រើនថា ឧទ្យានជាតិបូកគោ ស្ថិតនៅក្នុងស្រុកទឹកឈូ
                         ខេត្តកំពត។ ភ្នំបូកគោមានកម្ពស់ 1075ម៉ែត្រធៀបទៅនឹងនីវ៉ូទឹកសមុទ្រ....</p>
                    </div>
                </div>

                <div class="item">
                    <div class="item-img">
                        <a href="/pages/koh-kong-krav.html" @click="closeMobileMenu"><img src="/assets/images/ocher teal.jpg" alt=""></a>
                    </div>

                    
                    <div class="item-text">
                        <h1>កោះកុងក្រៅ</h1>
                        <span>⚲ កោះកុង</span>
                        <p>កោះកុងក្រៅស្ថិតក្នុង ឃុំជ្រោយប្រស់ ស្រុកកោះកុង ខេត្តកោះកុង ដែលមានចម្ងាយប្រមាណ ៣០ គ.ម ពីក្រុងខេមរភូមិន្ទ។
                         តំបន់នេះ មានសក្តានុពលផ្នែកធនធានធម្មជាតិ ជីវៈចម្រុះ និងមានឆ្នេរខ្សាច់ស្អាត </p>
                    </div>
                </div>
            </div>


            <div class="popular-more">
                <a href="/pages/popular-place.html" @click="closeMobileMenu" style="width: 130px; height: 50px;">
                    <button>មើលបន្ថែម</button>
                </a>
            </div>
        </div>







        <div id="content-plan">
            <div class="plan-title">
                <h1>ផែនការ</h1>
            </div>

            <div class="plan-top-items">
                <div class="plan-item">
                        <div class="plan-head">
                            <div class="item-icon">
                                <img src="/assets/images/medal.png" alt="">
                            </div>

                            <div class="title">
                                <h1>អ្វីដែលគួរធ្វើ</h1>
                            </div>
                        </div>

                        <div class="plan-text">
                            <p>ដើម្បីមានភាពងាយស្រួលក្នុងការធ្វើដំណើរកំសាន្តមកកាន់ប្រទេសកម្ពុជា​ តើអ្នកត្រូវតៀមលក្ខណៈ
                            យ៉ាងដូចម្តេចខ្លះ ហើយគួរសែ្វងយល់និងគួរធ្វើពីអ្វីខ្លះ? កុំបារម្ភ! ពួកយើងបានរៀបចំគម្រោងការ
                            សម្រាប់អ្នករួចហើយ ...</p>
            
                            <a href="/pages/plan.html" @click="closeMobileMenu">អានបន្ថែម ➔</a>
                        </div>
                </div>


                <div class="plan-item">
                    <div class="plan-head">
                            <div class="item-icon">
                                <img src="/assets/images/open-book.png" alt="">
                            </div>

                            <div class="title">
                                <h1>អ្វីដែលគួរដឹង</h1>
                            </div>
                        </div>

                        <div class="plan-text">
                            <p>អ្នកគួរតែស្វែងយល់អំពីទីកន្លែងចង់ទៅ បណ្តាញផ្លូវ វប្បធម៌ទំនៀមទំលាប់ក្នុងតំបន់នីមួយៗ និងស្ថាន
                            ភាពអាកាសធាតុ។ ក៏គួររៀបចំឥវ៉ាន់ឲ្យសមរម្យ និងមានទំនាក់ទំនងបន្ទាន់សម្រាប់ករណីអាសន្នផងដែរ។ 
                            </p>
            
                            <a href="/pages/plan.html" @click="closeMobileMenu">អានបន្ថែម ➔</a>
                        </div>
                </div>


                <div class="plan-item">
                    <div class="plan-head">
                            <div class="item-icon">
                                <img src="/assets/images/route.png" alt="">
                            </div>

                            <div class="title">
                                <h1>ការធ្វើដំណើរ</h1>
                            </div>
                        </div>

                        <div class="plan-text">
                            <p>យើងមានសេវាកម្មធ្វើដំណើរដ៏សមរម្យសម្រាប់អ្នកទេសចរណ៍ ដែលនឹងនាំអ្នកទៅដល់កន្លែងទេសចរណ៍នានាដោយ
                            សុវត្ថិភាព និងមានភាពងាយស្រួល។ យានជំនិះរបស់យើង និងបុគ្គលិកបើកបរមានបទពិសោធន៍</p>
            
                            <a href="/pages/plan.html" @click="closeMobileMenu">អានបន្ថែម ➔</a>
                        </div>
                </div>


                <div class="plan-item">
                    <div class="plan-head">
                            <div class="item-icon">
                                <img src="/assets/images/visa.png" alt="">
                            </div>

                            <div class="title">
                                <h1>ទាមទារ VISA</h1>
                            </div>
                        </div>

                        <div class="plan-text">
                            <p>ដើម្បីមានភាពងាយស្រួលក្នុងការធ្វើដំណើរកំសាន្តមកកាន់ប្រទេសកម្ពុជា​ តើអ្នកត្រូវតៀមលក្ខណៈ
                            យ៉ាងដូចម្តេចខ្លះ ហើយគួរសែ្វងយល់និងគួរធ្វើពីអ្វីខ្លះ? កុំបារម្ភ! ពួកយើងបានរៀបចំគម្រោងការ
                            សម្រាប់អ្នករួចហើយ ...</p>
            
                            <a href="/pages/plan.html" @click="closeMobileMenu">អានបន្ថែម ➔</a>
                        </div>
                </div>
            </div>




            <div class="plan-bottum-items">
                <div class="plan-item">
                        <div class="plan-head">
                            <div class="item-icon">
                                <img src="/assets/images/wallet.png" alt="">
                            </div>

                            <div class="title">
                                <h1>ការចំណាយ</h1>
                            </div>
                        </div>

                        <div class="plan-text">
                            <p>ក្រុមហ៊ុនយើងមានកញ្ចប់ធ្វើដំណើរដ៏សមរម្យ និងតមន្លៃសមរម្យបំផុតសម្រាប់ការដឹកធ្វើដំណើរ
                            ទៅកាន់កន្លែងសំខាន់ៗនៅកម្ពុជា។ យើងផ្តល់សេវាកម្មដែលមានគុណភាព​ និងមានភាពងាយស្រួល</p>
            
                            <a href="/pages/plan.html" @click="closeMobileMenu">អានបន្ថែម ➔</a>
                        </div>
                </div>


                <div class="plan-item">
                    <div class="plan-head">
                            <div class="item-icon">
                                <img src="/assets/images/group.png" alt="">
                            </div>

                            <div class="title">
                                <h1>មកជាមួយគ្រួសារ</h1>
                            </div>
                        </div>

                        <div class="plan-text">
                            <p>យើងមានកញ្ចប់ដំណើរកម្សាន្តច្រើនជម្រើស ដែលសមរម្យសម្រាប់គូរស្នេហា ឬក្រុមគ្រួសារ។
                            យើងរៀបចំកម្មវិធី និងសកម្មភាពសប្បាយៗ ដើម្បីឲ្យអ្នកទាំងអស់គ្នាអាចរីករាយ និងបង្កើតអនុស្សាវរីយ៍ល្អៗ
                            </p>
            
                            <a href="/pages/plan.html" @click="closeMobileMenu">អានបន្ថែម ➔</a>
                        </div>
                </div>


                <div class="plan-item">
                    <div class="plan-head">
                            <div class="item-icon">
                                <img src="/assets/images/calendar.png" alt="">
                            </div>

                            <div class="title">
                                <h1>កំណត់ពេលវេលា</h1>
                            </div>
                        </div>

                        <div class="plan-text">
                            <p>ដើម្បីមានភាពងាយស្រួលក្នុងការធ្វើដំណើរកំសាន្តមកកាន់ប្រទេសកម្ពុជា​ តើអ្នកត្រូវតៀមលក្ខណៈ
                            យ៉ាងដូចម្តេចខ្លះ ហើយគួរសែ្វងយល់និងគួរធ្វើពីអ្វីខ្លះ? កុំបារម្ភ! ពួកយើងបានរៀបចំគម្រោងការ
                            សម្រាប់អ្នករួចហើយ ...</p>
            
                            <a href="/pages/plan.html" @click="closeMobileMenu">អានបន្ថែម ➔</a>
                        </div>
                </div>


                <div class="plan-item">
                    <div class="plan-head">
                            <div class="item-icon">
                                <img src="/assets/images/sleeping.png" alt="">
                            </div>

                            <div class="title">
                                <h1>ការកត់បន្ទប់</h1>
                            </div>
                        </div>

                        <div class="plan-text">
                            <p>កញ្ចប់ដំណើរកម្សាន្តដែលរួមបញ្ចូលការស្នាក់នៅនៅសណ្ឋាគារដែលមានគុណភាព និងតម្លៃសមរម្យ។
                             អ្នកនឹងបានសម្រាកក្នុងបរិយាកាសស្ងប់ស្ងាត់ សុវត្ថិភាពសម្រាប់បង្កើតបទពិសោធន៍ដ៏រីករាយ
                             និងស្រស់ស្អាត</p>
            
                            <a href="/pages/plan.html" @click="closeMobileMenu">អានបន្ថែម ➔</a>
                        </div>
                </div>
            </div>
        </div>
        




















        <div class="content-recommend">
            <div class="recommend-title">
                <h1>កន្លែងដែលគួរមកកម្សាន្ត</h1>
            </div>

            <div class="recommend-top">
                <div class="recommend-items">
                    <img src="/assets/images/pub street.png" alt="">
                    
                    
                        <div class="rate">
                            <h1>⭐ 4.5</h1>
                        </div>

                            <div class="save">
                                <i class="fa-regular fa-bookmark" style="color: #000000;"></i>
                            </div>

                        <div class="located">
                            <h1>ផាប់ស្រ្តីត</h1>
                            <p>⚲ សៀមរាប</p>
                        </div>

                    <a href="/pages/pub-street.html" @click="closeMobileMenu"><i class="fa-solid fa-arrow-right" style="color: #000000;"></i></a>
                </div>


                <div class="recommend-items">
                    <img src="/assets/images/angkor-wonder-garden.png" alt="">
                    
                        <div class="rate">
                            <h1>⭐ 4.5</h1>
                        </div>

                            <div class="save">
                                <i class="fa-regular fa-bookmark" style="color: #000000;"></i>
                            </div>

                        <div class="located">
                            <h1>អង្គរវ៉ូនឌើរហ្គាឌិន</h1>
                            <p>⚲ សៀមរាប</p>
                        </div>

                    <a href="/pages/angkor-garden.html" @click="closeMobileMenu"><i class="fa-solid fa-arrow-right" style="color: #000000;"></i></a>
                </div>


                <div class="recommend-items">
                    <img src="/assets/images/phnom-penh-safari.png" alt="">
                    
                        <div class="rate">
                            <h1>⭐ 4.5</h1>
                        </div>

                            <div class="save">
                                <i class="fa-regular fa-bookmark" style="color: #000000;"></i>
                            </div>

                        <div class="located">
                            <h1>ភ្នំពេញសាហ្វារី</h1>
                            <p>⚲ ភ្នំពេញ</p>
                        </div>

                    <a href="/pages/phnompenh-safari.html" @click="closeMobileMenu"><i class="fa-solid fa-arrow-right" style="color: #000000;"></i></a>
                </div>
            </div>




            <div class="recommend-bottum">
                <div class="items">
                    <img src="/assets/images/made-in-cambodia-market.png" alt="">

                            <div class="rate2">
                                <h1>⭐ 4.5</h1>
                            </div>

                                <div class="save2">
                                    <i class="fa-regular fa-bookmark" style="color: #000000;"></i>
                                </div>

                            <div class="located2">
                                <h1>ផ្សារផលិតផលខ្មែរ</h1>
                                <p>⚲ សៀមរាប</p>
                            </div>

                        <a href="/pages/made-in-cambodia-market.html" @click="closeMobileMenu"><i class="fa-solid fa-arrow-right" style="color: #000000;"></i></a>
                </div>


                <div class="items">
                    <img src="/assets/images/phnom-penh-night-market.png" alt="">

                            <div class="rate2">
                                <h1>⭐ 4.5</h1>
                            </div>

                                <div class="save2">
                                    <i class="fa-regular fa-bookmark" style="color: #000000;"></i>
                                </div>

                            <div class="located2">
                                <h1>ផ្សាររាត្រី</h1>
                                <p>⚲ ភ្នំពេញ</p>
                            </div>

                        <a href="/pages/pp-night-market.html" @click="closeMobileMenu"><i class="fa-solid fa-arrow-right" style="color: #000000;"></i></a>
                </div>


                <div class="items">
                    <img src="/assets/images/Angkor-National-Museum.png" alt="">

                            <div class="rate2">
                                <h1>⭐ 4.5</h1>
                            </div>

                                <div class="save2">
                                    <i class="fa-regular fa-bookmark" style="color: #000000;"></i>
                                </div>

                            <div class="located2">
                                <h1>សារមន្ទីរជាតិអង្គរ</h1>
                                <p>⚲ សៀមរាប</p>
                            </div>

                        <a href="/pages/angkor-national-museum.html" @click="closeMobileMenu"><i class="fa-solid fa-arrow-right" style="color: #000000;"></i></a>
                </div>


                <div class="items">
                    <img src="/assets/images/Royal-Palace-phnom-penh.png" alt="">

                            <div class="rate2">
                                <h1>⭐ 4.5</h1>
                            </div>

                                <div class="save2">
                                    <i class="fa-regular fa-bookmark" style="color: #000000;"></i>
                                </div>

                            <div class="located2">
                                <h1>ព្រះបរមរាជរាំង</h1>
                                <p>⚲ ភ្នំពេញ</p>
                            </div>

                        <a href="/pages/pp-palace.html" @click="closeMobileMenu"><i class="fa-solid fa-arrow-right" style="color: #000000;"></i></a>
                </div>
            </div>
        </div>



















        <div id="asking">
            <h1>សំណួរ & ចម្លើយ</h1>

            <div class="question-items">
                <div class="question">
                    <h4>តើគេហទំព័រនេះប្រើសម្រាប់ធ្វើអ្វី?</h4>
                </div>
                <div class="answer-items">
                    <div class="answer">
                        <p>គេហទំព័រមួយនេះគឺប្រើសម្រាប់ណែនាំអំពីទីកន្លែងដំណើរកំសាន្ត​ ២៥ ខេត្តក្រុងនៅប្រទេសកម្ពុជា។</p>
                    </div>
                </div>
            </div>


            <div class="question-items">
                <div class="question">
                    <h4>តើប្រទេសកម្ពុជាមានសុវត្ថិភាពដែរ​ឫទេ?</h4>
                </div>
                <div class="answer-items">
                    <div class="answer">
                        <p>ប្រាកដណាស់ប្រទេសកម្ពុជាជាកន្លែងដំណើរកំសាន្តដែលមានសុវត្ថិភាពសម្រាប់ភ្ញៀវទេសចរគ្រប់ជាតិសាសន៍​៕</p>
                    </div>
                </div>
            </div>


            <div class="question-items">
                <div class="question">
                    <h4>តើគេហទំព័រនេះនិងមានអ្វីថ្មីនៅពេលខាងមុខដែរ​ឫទេ?</h4>
                </div>
                <div class="answer-items">
                    <div class="answer">
                        <p>ប្រាកដណាស់ពួកយើងនឹងព្យាយាមធ្វើការស្វែងរកនូវតំបន់ដើរលងថ្មីៗ ដើម្បីផ្តល់ភាពងាយស្រួលនិងភាពកត់ក្តៅបំផុតទៅកាន់ភ្ញៀវទេសចរគ្រប់ជាតិសាសន៍៕</p>
                    </div>
                </div>
            </div>


             <div class="question-items">
                <div class="question">
                    <h4>តើកន្លែងដំណើរកំសាន្តណាខ្លះដែលមិនគួររំលងនៅពេលមកកម្ពុជា?</h4>
                </div>
                <div class="answer-items">
                    <div class="answer">
                        <p>
                            <ul>
                                <li>+ កន្លែងដែលមិនគួររំលងនោះគឺ ៖</li>
                                <li>- ប្រាសាទអង្គរវត្ត (ខេត្ត សៀមរាប)</li>
                                <li>- ឆ្នេរអូឈើទាល (ខេត្ត ព្រះសីហនុ)</li>
                                <li>- ប្រាសាទអង្គរវត្ត (ខ្តេតសៀមរាប)</li>
                                <li>- ប្រាសាទអង្គរវត្ត (ខ្តេតសៀមរាប)</li>
                                <li>- ប្រាសាទអង្គរវត្ត (ខ្តេតសៀមរាប)</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>

             <div class="question-items">
                <div class="question">
                    <h4>តើគេហទំព័រមួយនេះមានភាពងាយស្រួលសម្រាប់ភ្ញៀវទេសចរដួចម្តេចខ្លះ?</h4>
                </div>
                <div class="answer-items">
                    <div class="answer">
                        <p>
                            <ul>
                                <li>+ គេហទំព័រមួយនេះមានភាពងាយស្រួលសម្រាប់ភ្ញៀវទេសចរដួចជា ៖</li>
                                <li>- មានគម្រោងផែនការដើរលេងសម្រាប់ភ្ញៀវទេសចរ</li>
                                <li>- ការរៀបចំគម្រោងផែនការប្រាប់អំពីការតៀមខ្លួនមុននឹងចេញដំណើរ</li>
                                <li>- ផ្តល់តម្លៃសមរម្យទៅលើកញ្ចប់ដើរលេង សណ្ឋាគារ និង​ការកត់សំបុត្រផ្សេងៗជាដើម</li>
                                <li>- មានការបែងចែតតំបន់នីមួយៗច្បាស់លាស់ដួចេជា តំបន់ទស្សនា តំបន់ដើរលេង ភោជនីយដ្ឋាន និងតំបន់ដទៃទៀត</li>
                                <li>- មានទិន្នន័យសង្ខេបទៅលើខេត្តក្រុងនីមួយៗដូចជា ការប្រើប្រាស់ភាសា រួបិយប័ណ្ណ ខែសម្រាប់មកកំសាន្ត ចំនួនប្រជាជន
                                ​ និងផ្សេងៗទៀត</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>

        </div>



















        




        <div id="content-discount">
            <div class="discount-title">
                <h1>បញ្ចុះតម្លៃ</h1>
            </div>


            <div class="discount-items">
                <div class="items-discounts">
                    <div class="items-image">
                        <a href="/pages/angkor-leap.html" @click="closeMobileMenu"><img src="/assets/images/angkor leap.jpg" alt=""></a>

                        <div class="dis-box">
                            <h1>បញ្ចុះតម្លៃ 20%</h1>
                        </div>

                        <div class="like-box">
                            <img src="/assets/images/heart.png" alt="">
                        </div>
                    </div>

                    <div class="items-txt">
                        <div class="txt1">
                            <div class="txt1-1">
                                <h1>Angkor Leap Hotel</h1>
                            </div>
                            <div class="txt1-2">
                                <p>⭐ 5.0</p>
                            </div>
                        </div>

                        <div class="txt2">
                            <p>Angkor Leap Hotel ផ្តល់សេវាកម្មល្អ មានអនាម័យខ្ពស់តាមស្តង់ដារកម្រិតអន្តរជាតិ និងបន្ទាប់មាន
                            ការរចនាបទតាមប្រពៃណីយខ្មែរយ៉ាងស្រស់ស្អាត</p>
                        </div>

                        <div class="txt3">
                            <div class="txt3-1">
                                <p><strike>150$</strike>/120$ មួយយប់</p>
                            </div>
                            <div class="txt3-2">
                                <a href="/pages/angkor-leap.html" @click="closeMobileMenu"><button>កក់ឥឡូវនេះ</button></a>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="items-discounts">
                    <div class="items-image">
                        <a href="/pages/angkor-leap.html" @click="closeMobileMenu"><img src="/assets/images/mekong1.jpg" alt=""></a>

                        <div class="dis-box">
                            <h1>បញ្ចុះតម្លៃ 20%</h1>
                        </div>

                        <div class="like-box">
                            <img src="/assets/images/heart.png" alt="">
                        </div>
                    </div>

                    <div class="items-txt">
                        <div class="txt1">
                            <div class="txt1-1">
                                <h1>Mekong Angkor Palace</h1>
                            </div>
                            <div class="txt1-2">
                                <p>⭐ 5.0</p>
                            </div>
                        </div>

                        <div class="txt2">
                            <p>Mekong Angkor Palace Hotel ផ្តល់សេវាកម្មល្អអនាម័យខ្ពស់តាមស្តង់ដារកម្រិតអន្តរជាតិ
                            និងបន្ទាប់មានការរចនាបទតាមប្រពៃណីយខ្មែរយ៉ាងស្រស់ស្អាត</p>
                        </div>

                        <div class="txt3">
                            <div class="txt3-1">
                                <p><strike>150$</strike>/120$ មួយយប់</p>
                            </div>
                            <div class="txt3-2">
                                <a href="/pages/g-mekong-hotel.html" @click="closeMobileMenu"><button>កក់ឥឡូវនេះ</button></a>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="items-discounts">
                    <div class="items-image">
                        <a href="/pages/angkor-leap.html" @click="closeMobileMenu"><img src="/assets/images/angkor leap.jpg" alt=""></a>

                        <div class="dis-box">
                            <h1>បញ្ចុះតម្លៃ 20%</h1>
                        </div>

                        <div class="like-box">
                            <img src="/assets/images/heart.png" alt="">
                        </div>
                    </div>

                    <div class="items-txt">
                        <div class="txt1">
                            <div class="txt1-1">
                                <h1>Templation hotel</h1>
                            </div>
                            <div class="txt1-2">
                                <p>⭐ 5.0</p>
                            </div>
                        </div>

                        <div class="txt2">
                            <p>Templation Hotel ផ្តល់សេវាកម្មល្អ មានអនាម័យខ្ពស់តាមស្តង់ដារកម្រិតអន្តរជាតិ
                             និងបន្ទាប់មានការរចនាបទតាមប្រពៃណីយខ្មែរយ៉ាងស្រស់ស្អាត</p>
                        </div>

                        <div class="txt3">
                            <div class="txt3-1">
                                <p><strike>150$</strike>/120$ មួយយប់</p>
                            </div>
                            <div class="txt3-2">
                                <a href="/pages/angkor-leap.html" @click="closeMobileMenu"><button>កក់ឥឡូវនេះ</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="discount-items">
                <div class="items-discounts">
                    <div class="items-image">
                        <a href="/pages/angkor-leap.html" @click="closeMobileMenu"><img src="/assets/images/baitong-hotel-resort.png" alt=""></a>

                        <div class="dis-box">
                            <h1>បញ្ចុះតម្លៃ 20%</h1>
                        </div>

                        <div class="like-box">
                            <img src="/assets/images/heart.png" alt="">
                        </div>
                    </div>

                    <div class="items-txt">
                        <div class="txt1">
                            <div class="txt1-1">
                                <h1>Baitong Hotel Resort</h1>
                            </div>
                            <div class="txt1-2">
                                <p>⭐ 5.0</p>
                            </div>
                        </div>

                        <div class="txt2">
                            <p>Baitong Hotel Resort ផ្តល់សេវាកម្មល្អ មានអនាម័យខ្ពស់តាមស្តង់ដារកម្រិតអន្តរជាតិ និងបន្ទាប់មាន
                            ការរចនាបទតាមប្រពៃណីយខ្មែរយ៉ាងស្រស់ស្អាត</p>
                        </div>

                        <div class="txt3">
                            <div class="txt3-1">
                                <p><strike>150$</strike>/120$ មួយយប់</p>
                            </div>
                            <div class="txt3-2">
                                <a href="/pages/angkor-leap.html" @click="closeMobileMenu"><button>កក់ឥឡូវនេះ</button></a>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="items-discounts">
                    <div class="items-image">
                        <a href="/pages/angkor-leap.html" @click="closeMobileMenu"><img src="/assets/images/hotel-kvl.png" alt=""></a>

                        <div class="dis-box">
                            <h1>បញ្ចុះតម្លៃ 20%</h1>
                        </div>

                        <div class="like-box">
                            <img src="/assets/images/heart.png" alt="">
                        </div>
                    </div>

                    <div class="items-txt">
                        <div class="txt1">
                            <div class="txt1-1">
                                <h1>Hotel KVL</h1>
                            </div>
                            <div class="txt1-2">
                                <p>⭐ 5.0</p>
                            </div>
                        </div>

                        <div class="txt2">
                            <p>Hotel KVL ផ្តល់សេវាកម្មល្អអនាម័យខ្ពស់តាមស្តង់ដារកម្រិតអន្តរជាតិ
                            និងបន្ទាប់មានការរចនាបទតាមប្រពៃណីយខ្មែរយ៉ាងស្រស់ស្អាត</p>
                        </div>

                        <div class="txt3">
                            <div class="txt3-1">
                                <p><strike>150$</strike>/120$ មួយយប់</p>
                            </div>
                            <div class="txt3-2">
                                <a href="/pages/angkor-leap.html" @click="closeMobileMenu"><button>កក់ឥឡូវនេះ</button></a>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="items-discounts">
                    <div class="items-image">
                        <a href="/pages/angkor-leap.html" @click="closeMobileMenu"><img src="/assets/images/g-mekong-hotel.png" alt=""></a>

                        <div class="dis-box">
                            <h1>បញ្ចុះតម្លៃ 20%</h1>
                        </div>

                        <div class="like-box">
                            <img src="/assets/images/heart.png" alt="">
                        </div>
                    </div>

                    <div class="items-txt">
                        <div class="txt1">
                            <div class="txt1-1">
                                <h1>G Mekong Hotel</h1>
                            </div>
                            <div class="txt1-2">
                                <p>⭐ 5.0</p>
                            </div>
                        </div>

                        <div class="txt2">
                            <p>G Mekong Hotel ផ្តល់សេវាកម្មល្អ មានអនាម័យខ្ពស់តាមស្តង់ដារកម្រិតអន្តរជាតិ
                             និងបន្ទាប់មានការរចនាបទតាមប្រពៃណីយខ្មែរយ៉ាងស្រស់ស្អាត</p>
                        </div>

                        <div class="txt3">
                            <div class="txt3-1">
                                <p><strike>150$</strike>/120$ មួយយប់</p>
                            </div>
                            <div class="txt3-2">
                                <a href="/pages/angkor-leap.html" @click="closeMobileMenu"><button>កក់ឥឡូវនេះ</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





        
        <div class="rating">
            <div class="rating-contents">
                <div class="rating-items">
                    <i class="fa-solid fa-utensils" style="color: #61c32c;"></i>
                    <p>700 <br>
                    <span>ភោជនីយដ្ឋាន</span></p>
                </div>

                <div class="rating-items">
                    <i class="fa-solid fa-face-smile-beam" style="color: #61c32c;"></i>
                    <p>340 <br>
                    <span>ការពញចិត្ត</span></p>
                </div>

                <div class="rating-items">
                    <i class="fa-solid fa-person-walking-luggage" style="color: #61c32c;"></i>
                    <p>225 <br>
                    <span>ភ្ញៀវទេសចរណ៍</span></p>
                </div>

                <div class="rating-items">
                    <i class="fa-solid fa-star" style="color: #61c31c;"></i>
                    <p>280 <br>
                    <span>ផ្កាយទទួលបាន</span></p>
                </div>
            </div>
        </div>

    </div>






    <div class="footer">
            <div class="footer-contents">
                <div class="footer-box">
                    <div class="foot-about">
                        <a href="/" @click="closeMobileMenu"><img src="/assets/images/lmlp-logo.png" alt=""></a>

                        <p><b>TOURISMLMLP</b> មិនត្រឹមតែជាគេហទំព័រដែលចែករំលែកកន្លែងដំណើរកំសាន្តនោះទេ​ 
                        ព្រមទាំងផ្តល់សេវាកម្មងាយស្រួលទៅកាន់អតិថិជន​ និងប្រវត្តិសាស្រ្តសង្ខេបតាមខេត្ត
                        នីមួយៗផងដែរ។</p>
                    </div>
                    
                    <div class="foot">
                        <h1>តំណភ្ជាប់រហ័ស</h1>
                        <p>
                            <ul>
                                <li><a href="#asking" @click="closeMobileMenu">សំណួរ & ចម្លើយ</a></li>
                                <li><a href="/pages/plan.html" @click="closeMobileMenu">ផែនការ</a></li>
                                <li><a href="">ដៃគូរសហការ</a></li>
                                <li><a href="/pages/popular-place.html" @click="closeMobileMenu">កន្លែងដែលគួរមកកម្សាន្ត</a></li>
                            </ul>
                        </p>
                    </div>

                    <div class="foot">
                        <h1>ពួកយើងផ្តល់</h1>
                        <p>
                            <ul>
                                <li>ប្រវត្តិសាស្រ្តសង្ខេប</li>
                                <li>ការកត់សណ្ឋាគារ</li>
                                <li>តម្លៃសមរម្យ</li>
                                <li>សេវាកម្មល្អ</li>
                            </ul>
                        </p>
                    </div>

                    <div class="foot">
                        <h1>ទំនាក់ទំនង</h1>
                        <p>
                            <ul>
                                <li><a href="https://maps.app.goo.gl/QCnW2yzcaZ1THcQK7" @click="closeMobileMenu"><i class="fa-solid fa-location-dot"></i> Village Trea, 402 Ln, 12352</a></li>
                                <li><a href=""><i class="fa-solid fa-phone"></i> (+855) 77777175</a></li>
                                <li><a href=""><i class="fa-solid fa-envelope"></i> pse-ngo@gmail.com</a></li>
                                <li>
                                    <a href="">
                                        <b>FOLLOW US</b> <br>
                                            <a href="https://web.facebook.com/psecambodia" @click="closeMobileMenu"><i class="fa-brands fa-facebook"></i></a>
                                            <a href="https://www.instagram.com/pse_cambodia/" @click="closeMobileMenu"><i class="fa-brands fa-instagram"></i></a>
                                            <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                                            <a href=""><i class="fa-brands fa-tiktok"></i></a>
                                            <a href=""><i class="fa-brands fa-pinterest-p"></i></a>
                                    </a>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                
                <hr>

                <h2>© 2025 SoB-A Class. All rights reserved.</h2>
            </div>

            
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const isMobileMenuOpen = ref(false);
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

let sliderTimer;
const cleanups = [];

onMounted(() => {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    const btn = document.createElement("button");
    btn.className = "question-toggle";
    btn.textContent = "+";
    question.appendChild(btn);

    const onQuestionClick = () => {
      const answerItem = question.nextElementSibling;
      const toggleButton = question.querySelector(".question-toggle");

      document.querySelectorAll(".answer-items").forEach((item) => {
        if (item !== answerItem) {
          item.style.height = "0px";
          item.style.padding = "0 0";
          const otherBtn = item.previousElementSibling?.querySelector(".question-toggle");
          if (otherBtn) otherBtn.classList.remove("rotate");
        }
      });

      if (answerItem.style.height && answerItem.style.height !== "0px") {
        answerItem.style.height = "0px";
        answerItem.style.padding = "0 0";
        toggleButton.classList.remove("rotate");
      } else {
        const content = answerItem.querySelector(".answer");
        answerItem.style.height = content.scrollHeight + "px";
        answerItem.style.padding = "15px 0";
        toggleButton.classList.add("rotate");
      }
    };

    question.addEventListener("click", onQuestionClick);
    cleanups.push(() => question.removeEventListener("click", onQuestionClick));
  });

  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const sliderItems = document.querySelectorAll(".slider .list .item");
  const thumbnails = document.querySelectorAll(".thumnail-item");
  let currentIndex = 0;

  const updateSlider = (index) => {
    if (!sliderItems.length) return;
    if (index < 0) index = sliderItems.length - 1;
    if (index >= sliderItems.length) index = 0;
    currentIndex = index;

    sliderItems.forEach((item, i) => item.classList.toggle("active", i === currentIndex));
    thumbnails.forEach((thumb, i) => thumb.classList.toggle("active", i === currentIndex));
  };

  const showNext = () => updateSlider(currentIndex + 1);
  const showPrev = () => updateSlider(currentIndex - 1);

  updateSlider(currentIndex);

  nextBtn?.addEventListener("click", showNext);
  prevBtn?.addEventListener("click", showPrev);
  cleanups.push(() => nextBtn?.removeEventListener("click", showNext));
  cleanups.push(() => prevBtn?.removeEventListener("click", showPrev));

  thumbnails.forEach((thumb, i) => {
    const onThumbClick = () => updateSlider(i);
    thumb.addEventListener("click", onThumbClick);
    cleanups.push(() => thumb.removeEventListener("click", onThumbClick));
  });

  sliderTimer = window.setInterval(showNext, 6000);
});

onBeforeUnmount(() => {
  cleanups.forEach((cleanup) => cleanup());
  if (sliderTimer) window.clearInterval(sliderTimer);
});
</script>
