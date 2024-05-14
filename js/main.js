document.addEventListener('DOMContentLoaded', () =>{
//  по клику на меню открываем dropdown
//  по клику повторному закрыть dropdown

const menuBtns = document.querySelectorAll('.menu__btn')
menuBtns.forEach(el => {
    el.addEventListener('click', (e) =>{
        let currentBtn = e.currentTarget;
        let drop = currentBtn.closest('.menu__item').querySelector('.dropdown');

drop.classList.toggle("dropdown--active")
    // drop.classlist.toggle('dropdown--active');
    // currentBtn.classList.toggle('menu__btn--active');
    })
});
});


document.addEventListener('DOMContentLoaded', () =>{

    const ActivateBtns = document.querySelectorAll('.dropdown__list a');
    ActivateBtns.forEach(el => {
        el.addEventListener('click', (e) =>{
            let currentBtn = e.currentTarget;
    
            ActivateBtns.forEach(el => {
                if (el !== currentBtn) {
                    el.classList.remove('dropdown__btn--active')
                }
            });


     currentBtn.classList.add("dropdown__btn--active")

        })
    });
    });


    








document.addEventListener('DOMContentLoaded', () =>{

    const btns = document.querySelectorAll(".dropdown__link");
    const contentItems = document.querySelectorAll(".content__item");
    const activeBtnClass = "btn--active";
    const activeContentClass = "content__item--active";
    
    const deleteClass = (arr, className) => {
      arr.forEach((el) => el.classList.remove(className));
    };
    const showContent = (e) => {
      const btn = e.target;
    
      if (!btn.classList.contains(activeBtnClass)) {
        const contentItemId = `#variant-${btn.dataset.contentIndex}`;
        const contentItem = document.querySelector(contentItemId);
        deleteClass(btns, activeBtnClass);
        deleteClass(contentItems, activeContentClass);
        btn.classList.add(activeBtnClass);
        contentItem.classList.add(activeContentClass);
      }
    };
    
    btns.forEach((element) => {
      element.addEventListener("click", showContent);
    });

        })






    // document.addEventListener('DOMContentLoaded', () =>{

    //     const display = window.innerWidth;
    //     const wordDisable = document.querySelector("#word__disable");
    //     if (display < '1350'){
    //         wordDisable.innerHTML = "Пополнить";
    //     } else{
    //         wordDisable.innerHTML = "Пополнить счет";
    //     }
    //     console.log(display)
    //     console.log(wordDisable)
    //     }
    //     );




    // тут делаем кодик для того когда нажимаешь на бургер появляется менюшка, а когда на крестик, то меню закрывается


// тут при нажатии на бургер появлется меню


    // document.addEventListener('DOMContentLoaded', () =>{

    //     const miniMenuBtn = document.querySelectorAll('#open__btn');
    //     const MiniMenu = document.querySelector('#mini__menu');
    //     miniMenuBtn.forEach(el => {
    //         el.addEventListener('click', (e) =>{
        

    //             MiniMenu.classList.remove("mini__menu--disable")
    //      MiniMenu.classList.add("mini__menu--enable")
    
    //         })
    //     });
    //     });


    //     const miniMenuCloseBtn = document.querySelectorAll('#close__btn');
    //     const MiniMenu = document.querySelector('#mini__menu');
    //     miniMenuCloseBtn.forEach(el => {
    //         el.addEventListener('click', (e) =>{
    

    //             MiniMenu.classList.remove("mini__menu--enable")
    //      MiniMenu.classList.add("mini__menu--disable")
    
    //         })
    //     });







        // делаем анимацию для бургера в мобильном меню, а именно поворот при нажатии и появление стрелочки вместо бургера и наоборот



        document.addEventListener('DOMContentLoaded', () =>{

            const burgerBtn = document.querySelectorAll('.menu__burger')
            burgerBtn.forEach(el => {
                el.addEventListener('click', (e) =>{
                    let currentBtn = e.currentTarget;
                    let burgericon = currentBtn.closest('.mobile__menu').querySelector('.burger');
        
                    // dropdownBtns.forEach(el => {
                    //     if (el !== currentBtn) {
                    //         summerdrop.classList.remove('dropdown__services--active');
                    //     }
                    // });
        
            
            currentBtn.classList.toggle("menu__burger--colorised"); 
            burgericon.classList.toggle("burger--animation");
        
        
                })
            });
            });




// тут делаем появление стрелочки вверх при нажатии на бургер

            document.addEventListener('DOMContentLoaded', () =>{

                const burgerBtn = document.querySelectorAll('.menu__burger')
        
                burgerBtn.forEach(el => {
                    el.addEventListener('click', (e) =>{
                        let currentBtn = e.currentTarget;
                        let arrowUpicon = currentBtn.closest('.mobile__menu').querySelector('.close__btn');
            
                        // dropdownBtns.forEach(el => {
                        //     if (el !== currentBtn) {
                        //         summerdrop.classList.remove('dropdown__services--active');
                        //     }
                        // });
            
                
            
                arrowUpicon.classList.toggle("close__btn--animation");
            
            
                    })
                });
                });



// тут делаем появление мобильной менюшки при нажатии на кнопку бургера))



document.addEventListener('DOMContentLoaded', () =>{

    const burgerBtn = document.querySelectorAll('.menu__burger');
    const mobileDropdown = document.querySelector('#mobile__dropdown');
    burgerBtn.forEach(el => {
        el.addEventListener('click', (e) =>{
            let currentBtn = e.currentTarget;
    
    

            // dropdownBtns.forEach(el => {
            //     if (el !== currentBtn) {
            //         summerdrop.classList.remove('dropdown__services--active');
            //     }
            // });
         
    
            mobileDropdown.classList.toggle("mobile__menu__dropdown--active");


        })
    });
    });



    document.addEventListener('DOMContentLoaded', () =>{

        const mobileMenuBtn = document.querySelectorAll('.services__btn__mobile');
        const mobileNavDropdown = document.querySelector('.nav__dropdown');
        mobileMenuBtn.forEach(el => {
            el.addEventListener('click', (e) =>{
                let currentBtn = e.currentTarget;
        
        
    
                // dropdownBtns.forEach(el => {
                //     if (el !== currentBtn) {
                //         summerdrop.classList.remove('dropdown__services--active');
                //     }
                // });
             
        
                mobileNavDropdown.classList.toggle("nav__dropdown--active");
    
    
            })
        });
        });

// анимация изчезания и поворота стрелочки вниз при нажатии в мобильной менюшке на кнопке услуги, а именно просто добавление класса по нажатию 

        document.addEventListener('DOMContentLoaded', () =>{

            const mobiledropdownBtn = document.querySelectorAll('.services__btn__mobile')
    
            mobiledropdownBtn.forEach(el => {
                el.addEventListener('click', (e) =>{
                    let currentBtn = e.currentTarget;
                    let MobileArrowDownicon = currentBtn.closest('.mobile__nav__list').querySelector('.arrow__down');
        
                    // dropdownBtns.forEach(el => {
                    //     if (el !== currentBtn) {
                    //         summerdrop.classList.remove('dropdown__services--active');
                    //     }
                    // });
        
            
        
                    MobileArrowDownicon.classList.toggle("arrow__down--active");
        
        
                })
            });
            });





// анимация появления и поворота стрелочки вверх при нажатии в мобильной менюшке на кнопке услуги, а именно просто добавление класса по нажатию 

        document.addEventListener('DOMContentLoaded', () =>{

            const mobiledropdownBtn = document.querySelectorAll('.services__btn__mobile')
    
            mobiledropdownBtn.forEach(el => {
                el.addEventListener('click', (e) =>{
                    let currentBtn = e.currentTarget;
                    let MobileArrowUpicon = currentBtn.closest('.mobile__nav__list').querySelector('.arrow__up');
        
                    // dropdownBtns.forEach(el => {
                    //     if (el !== currentBtn) {
                    //         summerdrop.classList.remove('dropdown__services--active');
                    //     }
                    // });
        
            
        
                    MobileArrowUpicon.classList.toggle("arrow__up--active");
        
        
                })
            });
            });



