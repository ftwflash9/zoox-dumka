const menuData = {
  tandoor: {
    kicker: "CLAY OVEN SPECIALS",
    title: "Tandoor E Dastaan",
    description: "Authentic, smoky flavors made with our signature spice blends, roasted to perfection.",
    items: [
      { name: "Paneer Tikka Kebab (6pcs)", price: "₹349", desc: "A real paneer dish marinated in a special pickle mix" },
      { name: "Paneer Pudina Malai Kebab (6pcs)", price: "₹349", desc: "Fresh Cottage Cheese Marinated in creamy Cashewnut Paste and Grilled sprinkle mint" },
      { name: "Aatish E Aloo (6pcs)", price: "₹249", desc: "Scooped potatoes stuffed with peas, raisins, Cashewnut and mash potatoes" },
      { name: "Dahi Ke Kebeb (6 pcs)", price: "₹349", desc: "Widely popular hung curd kebab now in our chef style" },
      { name: "Khumb E Lazeez (6Pcs)", price: "₹349", desc: "Mushroom stuffed with cottage cheese, rolled in a creamy batter and char grilled" },
      { name: "Jack Shami Kebab (6 pcs)", price: "₹349", desc: "The jackfruit is blended with soaked lentils, aromatic spices, ginger garlic paste and fresh herbs. This mixture is then shaped into small patties and shallow fried until golden brown and crispy on outside while remaining soft" }
    ]
  },
  indian_main: {
    kicker: "RICH & FLAVORFUL",
    title: "Indian Main Course",
    description: "Slow-simmered classics, fragrant spices and rich gravies made with clarity and care.",
    items: [
      { name: "Dal Bukhara", price: "₹269", desc: "Dal Makhani is One of the Most Popular Lentil Recipes from The North Indian Punjabi Cuisine Made with Whole Black Lentils" },
      { name: "Yellow Dal Tadka", price: "₹199", desc: "Yellow Lentil Cooked with Broiled Tadka" },
      { name: "Paneer Makhani (8 Pcs)", price: "₹369", desc: "Paneer Butter Masala Is Essentially One of the Simplest Yet Satiating Indian AccompanimentMade Using Dollops of Fresh m, Paneer and Spice Creaes" },
      { name: "Kadhai Paneer (8 Pcs)", price: "₹369", desc: "Khadai Paneer Is a Spicy, Warming, Flavorful and Super Delicious Dish Made by Cooking Paneer & Bell Peppers in A fragrant, Fresh Ground Spice." },
      { name: "Lahori Aloo (8 PCS)", price: "₹319", desc: "Baby Potatoes Tossed with Vinegar Onion Cooked in Veg Gravy" },
      { name: "Paneer Tikka Butter Masala (4 PCS)", price: "₹369", desc: "Paneer Tikka Masala Is a North Indian Dish of Grilled Paneer (Cottage Cheese) Served in A Spicy Gravy Know as Tikka Masala" },
      { name: "Sham Shavera (2 PCS)", price: "₹369", desc: "Dish Consisting of Peas and Paneer in a Tomato Base Gravy, Spiced with garam Masala" },
      { name: "Methi Matar Malai Paneer", price: "₹369", desc: "Mehti and Peas Cooked in cashew Nut Gravy with Paneer." },
      { name: "Paneer Pasinda (2 PCS)", price: "₹369", desc: "A Mughlai- style dish layered paneer triangles stuffed, served in a rich creamy gravy." },
      { name: "Subz Hyderabadi", price: "₹319", desc: "Assorted Vegetable Cooked with Indian Spices in Cilantro and Mint Leaves Paste" },
      { name: "Veg Jhalfrezi", price: "₹319", desc: "A Semi- Dry Sweet and Sour Mixed Vegetable Preparation" }
    ]
  },
  asian_appetizers: {
    kicker: "WOK TOSSED",
    title: "Asian Appetizers",
    description: "Wok-tossed favorites that bring smoke, spice and incredible texture to the table.",
    items: [
      { name: "Konjee Crispy Lamb", price: "₹696", desc: "Crispy Konjee Lamb is Chinese dish serves as a starter which is made with shredded lamb pieces, it is prepared with fried lamb and some veggies like onion, ginger, garlic, capsicum julienned, some spring onions and with use of some spices" },
      { name: "Lamb In Black Pepper", price: "₹669", desc: "Sliced lamb stir fried with garlic and black pepper and vegetables with flavorful spices" },
      { name: "Haka Chili Lamb", price: "₹669", desc: "Haka Chili Lamb is cooked tender and infused with flavor. Lamb is stir fried with sauces, capsicum" }
    ]
  },
  continental_appetizers: {
    kicker: "CRISPY & CHEESY",
    title: "Continental Appetizers",
    description: "Crisp, golden and generously layered — a perfect array of global comfort foods.",
    items: [
      { name: "French Fries", price: "₹179/199", desc: "Peri peri marinated potato fries" },
      { name: "Cheesy Nachos", price: "₹249", desc: "Crunchy corn nachos topped with generous layers of cheese sauce, tomato salsa, avacado salsa, and refried beans" },
      { name: "Spicy Cottage Cheese Skewers", price: "₹249", desc: "Grilled cottage cheese and vegetables skewers with a spicy sriracha mayonnaise sauce" },
      { name: "Hummus Platter", price: "₹249", desc: "The mouthwatering middle-eastern dish served with crispy falafel pita bread cheesy hummus and olive's" },
      { name: "Southern Fried Chicken (6 pcs)", price: "₹399", desc: "KFC styled fried chicken boneless touch of chef's spices" },
      { name: "Chicken Ala Keiv (2 pcs)", price: "₹399", desc: "Famous Russian dish, boneless chicken filled with herb marinated butter served with mashed potato" },
      { name: "Chicken Meniuer (6 Pcs)", price: "₹399", desc: "Classic meniuer with creamy buttery sauce served with French fries" },
      { name: "Fish & Chip's (6 Pcs)", price: "₹499", desc: "Classic fish & chip's herb and Dijon marinated crisp served with Tatar dip" },
      { name: "Fish Meniuer (6 pcs)", price: "₹499", desc: "Classic fish meniuer prepared in a creamy buttery sauce served with French fries" },
      { name: "Prawn Meniuer (6 pcs)", price: "₹549", desc: "Classic prawn meniuer prepared in a creamy buttery sauce served with French fries" }
    ]
  },
  continental_main: {
    kicker: "GLOBAL DELIGHTS",
    title: "Continental Main Course",
    description: "Hearty and elegant continental dishes crafted to perfection.",
    items: [
      { name: "Grilled Chicken Breast Meal", price: "₹599", desc: "Chicken breast grilled to perfection accompanied by a sundried tomato cumin feta sauce, garlic mashed potatoes, & a side salad" },
      { name: "Grilled Fish Meal", price: "₹699", desc: "Grilled river sole fish served with sautéed French beans, baby potatoes, olives, cherry tomatoes, and accompanied by caper butter sauce and a poached egg" },
      { name: "Chilly Garlic Prawns with Spaghetti", price: "₹799", desc: "Tiger prawns in a chili garlic butter sauce, served with spaghetti and toasted bread" },
      { name: "Fish La Paprika", price: "₹699", desc: "Kolkata bhetki fish cooked with classic creamy paprika sauce served with mashed potatoes, sautéed vegetable's and herb rice" },
      { name: "Baked Fish", price: "₹599", desc: "Classic baked fish baked in cheesy alfredo sauce and served with garlic bread" },
      { name: "Baked Chicken", price: "₹499", desc: "Classic baked chicken baked in cheesy alfredo sauce and served with garlic bread" }
    ]
  },
  salads_soups: {
    kicker: "FRESH & HOT",
    title: "Salads & Soups",
    description: "Fresh garden greens and warm, comforting bowls.",
    items: [
      { name: "Caesar Salad", price: "₹179/229", desc: "Mixed lettuce, parmesan dressing, roasted vegetables, garlic croutons, cherry tomatoes, olives and cheese shaving" },
      { name: "Beetroot Falafel Hummus Salad", price: "₹229", desc: "Beetroot, corn, falafel, quinoa, onion, red capsicum, humus, green beans, olives, lemon, in house leafy mix & pest vinaigrette dip" },
      { name: "Garden Fresh Salad", price: "₹99", desc: "" },
      { name: "Smoked Mathania Chicken Salad", price: "₹249", desc: "Assorted lettuce with Parmesan dressing, roasted vegetables, garlic croutons, cherry tomatoes, olives and cheese shavings" },
      { name: "Roasted Pumpkin Soup", price: "₹189", desc: "A nutritious, velvety, and flavorful pumpkin soup accompanied by goat cheese crostini" },
      { name: "Mix Mushroom Soup", price: "₹199", desc: "A soup of wild mushrooms and truffles paired with cappelletti pasta made in-house" },
      { name: "Sweet Corn Soup", price: "₹189/219", desc: "Sweet corn soup is an Indo Chinese style soup made with mixed veggies, sweet corn kernels & pepper" },
      { name: "Hot and Sour Soup", price: "₹189/219", desc: "Hot and Sour soup is a Chinese soup that's savory, spicy and tangy. The broth is thickened and it's filled with mushrooms, tofu, vegetables, spices and soy sauce" },
      { name: "Lung Fung", price: "₹219", desc: "A popular Indo-Chinese thick, non-vegetarian broth" },
      { name: "Tom Yum", price: "₹219", desc: "popular Indo-Chinese" },
      { name: "Veg Manchow Soup", price: "₹189/219", desc: "Manchow soup is a popular Indo- Chinese cuisine. It is perfect to serve as an appetizer with or without noodles" }
    ]
  },
  chinese_noodles: {
    kicker: "WOK FIRED",
    title: "Chinese Rice & Noodles",
    description: "Bold, fiery wok-tossed noodles packed with rich garlic and spicy aroma.",
    items: [
      { name: "Chilli Garlic Hakka Noodles (Veg)", price: "₹299", desc: "Noodles stir fried with a spicy chili garlic sauce, delivering a bold and fiery flavor with the richness of garlic and spicy aroma" },
      { name: "Chilli Garlic Hakka Noodles (Chicken)", price: "₹339", desc: "Noodles stir fried with a spicy chili garlic sauce, delivering a bold and fiery flavor with the richness of garlic and spicy aroma" },
      { name: "Chilli Garlic Hakka Noodles (Prawns)", price: "₹399", desc: "Noodles stir fried with a spicy chili garlic sauce, delivering a bold and fiery flavor with the richness of garlic and spicy aroma" },
      { name: "Chilli Garlic Hakka Noodles (Mix)", price: "₹469", desc: "Noodles stir fried with a spicy chili garlic sauce, delivering a bold and fiery flavor with the richness of garlic and spicy aroma" },
      { name: "Schezwan Noodles (Veg)", price: "₹299", desc: "A bold & spicy noodles dish tossed with a medley of colorful vegetables" },
      { name: "Schezwan Noodles (Chicken)", price: "₹339", desc: "A bold & spicy noodles dish tossed with a medley of colorful vegetables" },
      { name: "Schezwan Noodles (Prawns)", price: "₹399", desc: "A bold & spicy noodles dish tossed with a medley of colorful vegetables" },
      { name: "Schezwan Noodles (Mix)", price: "₹469", desc: "A bold & spicy noodles dish tossed with a medley of colorful vegetables" }
    ]
  },
  desserts: {
    kicker: "SWEET FINISH",
    title: "Desserts",
    description: "A final course designed for lingering — traditional Indian sweets and global favorites.",
    items: [
      { name: "Zaffrani Firni", price: "₹149", desc: "A Traditional North Indian Dessert made Using Milk, Rice & Other Ingredients" },
      { name: "Shahi Tukda", price: "₹149", desc: "Shahi Tukda Is A Rich And festive Dessert Made With Bread, Ghee, Sugar, Milk and Nuts" },
      { name: "Gajar Ka Halwa", price: "₹179", desc: "Traditional Dessert Made with Carrot and Kheer" },
      { name: "Darsaan with Vanilla Ice Cream", price: "₹219", desc: "A Popular Indo-Chinese dessert featuring Crispy fried noodles tossed in a honey-sesame glaze, served hot or warm with cold vanilla ice cream" },
      { name: "Mango Pancake with Ice Cream", price: "₹259", desc: "Mango pancakes are a popular Hong-Kong Style dessert" },
      { name: "Hot Gulab Jamun", price: "₹120", desc: "Classic hot gulab jamun" },
      { name: "Gulab Jamun with Vanilla Ice Cream", price: "₹149", desc: "Gulab Jamun served with cold vanilla ice cream" }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  
  // Mobile Navigation Toggle
  const toggleBtn = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      const isExpanded = mainNav.classList.contains('active');
      toggleBtn.setAttribute('aria-expanded', isExpanded);
      toggleBtn.textContent = isExpanded ? 'Close' : 'Menu';
    });

    // Close menu when a link is clicked
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        toggleBtn.textContent = 'Menu';
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Menu Tabs Logic
  const tabs = document.querySelectorAll('.menu-tab');
  const menuContainer = document.querySelector('.menu-display');
  const kickerEl = document.getElementById('menu-kicker');
  const titleEl = document.getElementById('menu-title');
  const descEl = document.getElementById('menu-description');
  const gridEl = document.getElementById('menu-grid');

  if (tabs.length > 0 && gridEl) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active to clicked tab
        tab.classList.add('active');
        
        const category = tab.getAttribute('data-menu');
        const data = menuData[category];
        
        if (data) {
          // Fade out effect
          menuContainer.classList.add('fade');
          
          setTimeout(() => {
            kickerEl.textContent = data.kicker;
            titleEl.textContent = data.title;
            descEl.textContent = data.description;
            
            // Build items
            gridEl.innerHTML = data.items.map(item => `
              <div class="menu-item">
                <div class="menu-item-header">
                  <span class="menu-item-name">${item.name}</span>
                  <span class="menu-item-price">${item.price}</span>
                </div>
                <div class="menu-item-desc">${item.desc}</div>
              </div>
            `).join('');
            
            // Fade in
            menuContainer.classList.remove('fade');
          }, 300); // matches CSS transition time
        }
      });
    });
    
    // Auto-trigger the first tab to initialize content on page load
    if (tabs.length > 0 && !document.querySelector('.menu-item')) {
        tabs[0].click();
    }
  }

  // Horizontal Drag to Scroll for Menu Tabs
  const menuTabsContainer = document.querySelector('.menu-tabs');
  let isDown = false;
  let startX;
  let scrollLeft;

  if (menuTabsContainer) {
    menuTabsContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - menuTabsContainer.offsetLeft;
      scrollLeft = menuTabsContainer.scrollLeft;
    });
    menuTabsContainer.addEventListener('mouseleave', () => { isDown = false; });
    menuTabsContainer.addEventListener('mouseup', () => { isDown = false; });
    menuTabsContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - menuTabsContainer.offsetLeft;
      const walk = (x - startX) * 2; // scroll speed
      menuTabsContainer.scrollLeft = scrollLeft - walk;
    });
  }

  // Reservation WhatsApp Integration
  const reserveForm = document.getElementById('reserveForm');
  if (reserveForm) {
    reserveForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = this.name.value;
      const phone = this.phone.value;
      const date = this.date.value;
      const time = this.time.value;
      const guests = this.guests.value;
      const seating = this.seating.value;
      
      const message = `Hello ZOOX!\nI would like to request a table reservation.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Date:* ${date}\n*Time:* ${time}\n*Guests:* ${guests}\n*Seating Preference:* ${seating}\n\nPlease confirm availability. Thank you!`;
      
      const whatsappUrl = `https://wa.me/916299382018?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // ═══════════════════════════════════════════════
  // Scroll Reveal — Intersection Observer
  // ═══════════════════════════════════════════════
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger');
  
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target); // only animate once
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ═══════════════════════════════════════════════
  // Back to Top Button
  // ═══════════════════════════════════════════════
  const backBtn = document.querySelector('.back-to-top');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        backBtn.classList.add('show');
      } else {
        backBtn.classList.remove('show');
      }
    });

    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ═══════════════════════════════════════════════
  // Header shrink on scroll
  // ═══════════════════════════════════════════════
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        header.style.padding = '12px 5vw';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
      } else {
        header.style.padding = '20px 5vw';
        header.style.boxShadow = 'none';
      }
    });
  }
});

