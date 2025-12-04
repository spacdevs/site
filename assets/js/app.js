// Initialize Lucide Icons
lucide.createIcons();

// Header Scroll Logic
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('bg-[#0B0B0F]/90', 'backdrop-blur-md', 'shadow-lg', 'py-4', 'border-b', 'border-white/5');
    header.classList.remove('bg-transparent', 'py-6');
  } else {
    header.classList.remove('bg-[#0B0B0F]/90', 'backdrop-blur-md', 'shadow-lg', 'py-4', 'border-b', 'border-white/5');
    header.classList.add('bg-transparent', 'py-6');
  }
});
