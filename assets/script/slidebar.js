<script>
        var headerMenuIcon = document.querySelector('.js-header__menu-icon');
        var headerMenuBarIcon = document.querySelector('.js-header__menu-bar-icon');

        function showMenuBar() {
            document.getElementById('header__menu-bar').style.transform = 'translateX(0)'
        }

        function hideMenuBar() {
            document.getElementById('header__menu-bar').style.transform = 'translateX(-100%)'
        }

        headerMenuIcon.addEventListener('click',showMenuBar);
        headerMenuBarIcon.addEventListener('click',hideMenuBar);

</script>