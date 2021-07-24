
        // Mobile menu
        const mobileMenuIcon = document.querySelector('.js-header__navbar-menu-icon');
        const overlayMenuBar = document.querySelector('.js-menu-mobile-overlay');

        // Mobile Menu Item
        const mobileMenuItemBrand = document.querySelector('.js-menu-mobile-item--brand');
        const mobileMenuItemHandBag = document.querySelector('.js-menu-mobile-item--hand-bag');
        const mobileMenuItemShoes = document.querySelector('.js-menu-mobile-item--shoes');
        const mobileMenuWatch = document.querySelector('.js-menu-mobile-item--watch');
        const mobileMenuAccessories = document.querySelector('.js-menu-mobile-item--accessories')
        const mobileMenuServices = document.querySelector('.js-menu-mobile-item--services')

        // Filter Search Button
        const filterSearchButton = document.querySelector('.js-filter-search__button');
        const filterSearchMenuFindBtn = document.querySelector('.js-filter-search-menu__find-btn')
        const filterSearchOverlay = document.querySelector('.js-filter-search-overlay');
        // Show and Hide Mobile Menu
        function showMobileMenu() {
            document.getElementById("js-header__navbar-mobile-menu").style.transform = 'translateX(0%)';
            document.getElementById("js-menu-mobile-overlay").style.display = 'block';
        }

        function hideMobileMenu() {
            document.getElementById("js-header__navbar-mobile-menu").style.transform = 'translateX(-100%)'
            document.getElementById("js-menu-mobile-overlay").style.display = 'none';
        }

        // Show Sub Menu
        function showSubMenuBrand() {
            document.getElementById("js-dropdown-mobile-menu--brand").style.transform = 'translateX(0)'
        }
        function showSubMenuHandBag() {
            document.getElementById("js-dropdown-mobile-menu--hand-bag").style.transform = 'translateX(0)'
        }
        function showSubMenuShoes() {
            document.getElementById("js-dropdown-mobile-menu--shoes").style.transform = 'translateX(0)'
        }
        function showSubMenuWatch() {
            document.getElementById("js-dropdown-mobile-menu--watch").style.transform = 'translateX(0)'
        }
        function showSubMenuAccessories() {
            document.getElementById("js-dropdown-mobile-menu--accessories").style.transform = 'translateX(0)'
        }
        function showSubMenuServices() {
            document.getElementById("js-dropdown-mobile-menu--services").style.transform = 'translateX(0)'
        }

        // Hide Sub Menu
        function hideSubMenuBrand() {
            document.getElementById("js-dropdown-mobile-menu--brand").style.transform = 'translateX(-100%)'
        }
        function hideSubMenuHandBag() {
            document.getElementById("js-dropdown-mobile-menu--hand-bag").style.transform = 'translateX(-100%)'
        }
        function hideSubMenuShoes() {
            document.getElementById("js-dropdown-mobile-menu--shoes").style.transform = 'translateX(-100%)'
        }
        function hideSubMenuWatch() {
            document.getElementById("js-dropdown-mobile-menu--watch").style.transform = 'translateX(-100%)'
        }
        function hideSubMenuAccessories() {
            document.getElementById("js-dropdown-mobile-menu--accessories").style.transform = 'translateX(-100%)'
        }
        function hideSubMenuServices() {
            document.getElementById("js-dropdown-mobile-menu--services").style.transform = 'translateX(-100%)'
        }


        // Click to Show and Hide Mobile Menu
        mobileMenuIcon.addEventListener('click',showMobileMenu);
        overlayMenuBar.addEventListener('click',hideMobileMenu);
        

        // Click to show Sub Menu
        mobileMenuItemBrand.addEventListener('click', showSubMenuBrand);
        mobileMenuItemHandBag.addEventListener('click', showSubMenuHandBag)
        mobileMenuItemShoes.addEventListener('click',showSubMenuShoes);
        mobileMenuWatch.addEventListener('click',showSubMenuWatch);
        mobileMenuAccessories.addEventListener('click',showSubMenuAccessories)
        mobileMenuServices.addEventListener('click',showSubMenuServices)

        // Show and Hide Filter Search Menu
        function showFilterSearchMenu() {
            document.getElementById("js-filter-search-menu").style.transform = 'translateX(0)';
            document.getElementById("js-filter-search-overlay").style.display = 'block';
        }

        function hideFilterSearchMenu() {
            document.getElementById("js-filter-search-menu").style.transform = 'translateX(-100%)';
            document.getElementById("js-filter-search-overlay").style.display = 'none';

        }

        const backMobileMenuItemBrand = document.querySelector('.js-dropdown-mobile-menu-back');
        // backMobileMenuItemBrand.addEventListener('click', console())

        filterSearchButton.addEventListener('click', showFilterSearchMenu)
        filterSearchMenuFindBtn.addEventListener('click', hideFilterSearchMenu)
        filterSearchOverlay.addEventListener('click',hideFilterSearchMenu);
