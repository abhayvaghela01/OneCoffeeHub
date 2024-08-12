

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
}


let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


window.onscroll = (e) => {
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
    e.preventDefault();
}

// header elements change color on scroll

document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll(".section");
	const navLinks = document.querySelectorAll(".navbar a");

	function updateActiveLink() {
		let closestSection = null;
		let minDistance = Number.MAX_VALUE;
		const viewportCenter = window.innerHeight / 2;

		sections.forEach((section) => {
			const rect = section.getBoundingClientRect();
			const sectionCenter = rect.top + rect.height / 2;
			const distance = Math.abs(viewportCenter - sectionCenter);

			if (distance < minDistance) {
				minDistance = distance;
				closestSection = section;
			}
		});

		navLinks.forEach((link) => {
			link.classList.remove("active");
			if (
				closestSection &&
				link.getAttribute("href") === `#${closestSection.id}`
			) {
				link.classList.add("active");
			}
		});
	}

	updateActiveLink();
	window.addEventListener("hashchange", updateActiveLink);
	window.addEventListener("scroll", updateActiveLink);
});




// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('.section'); // Corrected selector
//     const navItems = document.querySelectorAll('.navbar a');
    
//     const options = {
//     threshold: 0.5
//     };
    
//     let observer = new IntersectionObserver(navCheck, options);
    
//     sections.forEach(section => {
//     observer.observe(section);
//     });
    
//     function navCheck(entries) {
//     entries.forEach(entry => {
//       const id = entry.target.getAttribute('id');
//       const navItem = document.querySelector(`.navbar a[href="#${id}"]`);
//       if (entry.isIntersecting) {
//           console.log(`Section ${id} is intersecting`);
//           navItems.forEach(item => {
//               item.classList.remove('active');
//           });
//           navItem.classList.add('active');
//       }
//     });
//     }
//     });
    

// animation  1


// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll(".section");
//     const navLinks = document.querySelectorAll(".navbar a");

//     function updateActiveLink() {
//         let closestSection = null;
//         let minDistance = Number.MAX_VALUE;
//         const viewportCenter = window.innerHeight / 2;

//         sections.forEach((section) => {
//             const rect = section.getBoundingClientRect();
//             const sectionCenter = rect.top + rect.height / 2;
//             const distance = Math.abs(viewportCenter - sectionCenter);

//             if (distance < minDistance) {
//                 minDistance = distance;
//                 closestSection = section;
//             }
//         });

//         navLinks.forEach((link) => {
//             link.classList.remove("active");
//             if (
//                 closestSection &&
//                 link.getAttribute("href") === `#${closestSection.id}`
//             ) {
//                 link.classList.add("active");
//             }
//         });

//         sections.forEach((section) => {
//             const rect = section.getBoundingClientRect();
//             if (rect.top < window.innerHeight && rect.bottom > 0) {
//                 section.classList.add("visible");
//                 section.classList.remove("hidden");
//             } else {
//                 section.classList.remove("visible");
//                 section.classList.add("hidden");
//             }
//         });
//     }

//     updateActiveLink();
//     window.addEventListener("hashchange", updateActiveLink);
//     window.addEventListener("scroll", updateActiveLink);
// });

// animation 2

// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll(".section");
//     const navLinks = document.querySelectorAll(".navbar a");

//     function updateActiveLink() {
//         let closestSection = null;
//         let minDistance = Number.MAX_VALUE;
//         const viewportCenter = window.innerHeight / 2;

//         sections.forEach((section) => {
//             const rect = section.getBoundingClientRect();
//             const sectionCenter = rect.top + rect.height / 2;
//             const distance = Math.abs(viewportCenter - sectionCenter);

//             if (distance < minDistance) {
//                 minDistance = distance;
//                 closestSection = section;
//             }
//         });

//         navLinks.forEach((link) => {
//             link.classList.remove("active");
//             if (
//                 closestSection &&
//                 link.getAttribute("href") === `#${closestSection.id}`
//             ) {
//                 link.classList.add("active");
//             }
//         });

//         sections.forEach((section) => {
//             const rect = section.getBoundingClientRect();
//             if (rect.top < window.innerHeight && rect.bottom > 0) {
//                 section.classList.add("visible");
//                 section.classList.remove("hidden");
//             } else {
//                 section.classList.remove("visible");
//                 section.classList.add("hidden");
//             }
//         });
//     }

//     updateActiveLink();
//     window.addEventListener("hashchange", updateActiveLink);
//     window.addEventListener("scroll", updateActiveLink);
// });
// animation 

document.addEventListener('DOMContentLoaded', function () {
	const sections = document.querySelectorAll('.heading');

	const options = {
			threshold: 0.5
	};

	const observer = new IntersectionObserver(function (entries, observer) {
			entries.forEach(entry => {
					if (!entry.isIntersecting) {
							return;
					}
					entry.target.classList.add('visible');
					observer.unobserve(entry.target);
			});
	}, options);

	sections.forEach(section => {
			observer.observe(section);
	});
});

