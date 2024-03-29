// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (
//   localStorage.theme === "dark" ||
//   (!("theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   document.documentElement.classList.add("dark");
// } else {
//   document.documentElement.classList.remove("dark");
// }

// // Whenever the user explicitly chooses light mode
// localStorage.theme = "light";

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = "dark";

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem("theme");

//*---------------------------------------------------------------YUKARISI TAILWIND SITESINDEN, asagisi sistem temasini da göz önünde bulundran secenek


// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark')
// } else {
//   document.documentElement.classList.remove('dark')
// }


// function toggleLightMode() {
//   localStorage.theme = 'light'; 
//   document.documentElement.classList.remove('dark'); 
// }


// function toggleDarkMode() {
//   localStorage.theme = 'dark'; 
//   document.documentElement.classList.add('dark'); 
// }


// function respectOSPreference() {
//   localStorage.removeItem('theme'); 
//   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     document.documentElement.classList.add('dark'); 
//   } else {
//     document.documentElement.classList.remove('dark'); 
//   }
// }

//!----------------------------------------------------------------------------

export const toggleTheme = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  };