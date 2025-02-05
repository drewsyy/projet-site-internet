<script>
        function toggleMenu() {
            document.getElementById("menu").classList.toggle("hidden");
        }
        
        document.querySelectorAll('.profile').forEach(profile => {
            profile.addEventListener('mouseenter', () => {
                profile.querySelector('.social-icons').classList.remove('hidden');
            });
            profile.addEventListener('mouseleave', () => {
                profile.querySelector('.social-icons').classList.add('hidden');
            });
        });
    </script>