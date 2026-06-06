const produits = [
    {
        nom: "Optimum Nutrition Gold Standard Whey (2.27kg)",
        prix: "12 500 DA",
        image: "https://th.bing.com/th/id/OIP.aAfSuvRNCl7T9PZqqBJQHQHaHa?w=189&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Whey"
    },
    {
        nom: "Muscletech Nitro-Tech Whey (1.8kg)",
        prix: "11 800 DA",
        image: "https://th.bing.com/th/id/OIP.-5AhOQKrFKSOYar_GKnXnwHaHa?w=209&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Whey"
    },
    {
        nom: "Dymatize ISO100 Whey Isolate (2.27kg)",
        prix: "14 200 DA",
        image: "https://th.bing.com/th/id/OIP.hPF4CQtuVYG4oh6foDXi3AHaHZ?w=221&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Whey"
    },
    {
        nom: "Scitec Nutrition 100% Whey (2.35kg)",
        prix: "10 900 DA",
        image: "https://th.bing.com/th/id/OIP.QU_G92tQfs7dg-J3nBQhWwHaKl?w=140&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Whey"
    },
    {
        nom: "BioTechUSA Iso Whey Zero (2.27kg)",
        prix: "13 500 DA",
        image: "https://th.bing.com/th/id/OIP.YhiADMfeve6cRP_EFWlgxQHaHa?w=201&h=201&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Whey"
    },
    {
        nom: "Optimum Nutrition Serious Mass (5.4kg)",
        prix: "17 000 DA",
        image: "https://th.bing.com/th/id/OIP.b8hoTsP2X3G94_X6pS4eXQHaHa?w=218&h=218&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Gainer"
    },
    {
        nom: "Muscletech Mass Tech Performance (3.2kg)",
        prix: "14 500 DA",
        image: "https://tse3.mm.bing.net/th/id/OIP.G05kAToNYjJyatVpZ66AjAHaKL?pid=ImgDet&w=184&h=253&c=7&dpr=1.3&o=7&rm=3",
        categorie: "Gainer"
    },
    {
        nom: "Mutant Mass Gainer (6.8kg)",
        prix: "21 500 DA",
        image: "https://th.bing.com/th/id/OIP.slsICssfABExnJyyrnc6lQHaHa?w=209&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Gainer"
    },
    {
        nom: "Dymatize Super Mass Gainer (5.4kg)",
        prix: "18 900 DA",
        image: "https://th.bing.com/th/id/OIP.OXIP7gI63uUmp-H4_7ImAQHaHa?w=216&h=216&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Gainer"
    },
    {
        nom: "BioTechUSA Hyper Mass (4kg)",
        prix: "15 800 DA",
        image: "https://th.bing.com/th/id/OIP.LOFvMqQjWUCBV1cSM0Q4ywHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Gainer"
    },
    {
        nom: "Optimum Nutrition Micronized Creatine (300g)",
        prix: "7 500 DA",
        image: "https://th.bing.com/th/id/OIP.7oy0Xu5RKT4lPQzm7twiUwHaI4?w=169&h=204&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Creatine"
    },
    {
        nom: "Muscletech Platinum Creatine (400g)",
        prix: "6 800 DA",
        image: "https://th.bing.com/th/id/OIP.7r630KSGeBF6BLYixZyg5AHaHa?w=197&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Creatine"
    },
    {
        nom: "BioTechUSA Creatine Monohydrate (300g)",
        prix: "6 800 DA",
        image: "https://th.bing.com/th/id/OIP.HgQFeg0SVCl7Y7t947iQKgHaIU?w=177&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Creatine"
    },
    {
        nom: "Olimp Creatine Monohydrate (250g)",
        prix: "5 500 DA",
        image: "https://th.bing.com/th/id/OIP.0poal_5YqnZsulhG-hsbPQHaHa?w=194&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Creatine"
    },
    {
        nom: "Dymatize Creatine Micronized (300g)",
        prix: "6 900 DA",
        image: "https://th.bing.com/th/id/OIP.cLFq7-_xugqD5MJzYpVpOwHaHa?w=195&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Creatine"
    },
    {
        nom: "Nutrex Lipo-6 Black Ultra Concentrate (60 Caps)",
        prix: "5 900 DA",
        image: "https://th.bing.com/th/id/OIP.lvcdiJ5PTta-sue7mRg6DQHaHa?w=201&h=202&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Bruleur"
    },
    {
        nom: "Muscletech Hydroxycut Hardcore Elite (110 Caps)",
        prix: "6 800 DA",
        image: "https://th.bing.com/th/id/OIP.Q5D7wu_1lZlJGjAnMPjvtwHaHa?w=195&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Bruleur"
    },
    {
        nom: "Universal Nutrition Animal Cuts (42 Packs)",
        prix: "12 800 DA",
        image: "https://th.bing.com/th/id/OIP.kMnwPP0rnErEJUt5V8BOSAHaLH?w=146&h=219&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Bruleur"
    },
    {
        nom: "BioTechUSA Black Burn (90 Caps)",
        prix: "7 200 DA",
        image: "https://tse1.mm.bing.net/th/id/OIP.9l5h_pJdG71_tm9GsV8_kwHaJm?rs=1&pid=ImgDetMain&o=7&rm=3",
        categorie: "Bruleur"
    },
    {
        nom: "Cloma Pharma Methyldrene (100 Caps)",
        prix: "7 500 DA",
        image: "https://th.bing.com/th/id/OIP._M_abhRoM3efgKDRkwRTdQHaHa?w=198&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Bruleur"
    },
    {
        nom: "Optimum Nutrition Opti-Men (90 Tabs)",
        prix: "4 200 DA",
        image: "https://th.bing.com/th/id/OIP.MwK5f9OneWNVdySghNzqnwHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Multivitamine"
    },
    {
        nom: "Universal Nutrition Animal Pak (44 Packs)",
        prix: "11 900 DA",
        image: "https://th.bing.com/th/id/OIP.DFDyMbw_wMrwjkMsLvSu2wHaHa?w=220&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Multivitamine"
    },
    {
        nom: "BioTechUSA One-A-Day (100 Tabs)",
        prix: "4 200 DA",
        image: "https://th.bing.com/th/id/OIP.QixNCMTXW_DOfOkh5vPDEwHaHa?w=198&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Multivitamine"
    },
    {
        nom: "Scitec Nutrition Mega Daily One (120 Caps)",
        prix: "4 500 DA",
        image: "https://th.bing.com/th/id/OIP.TTaUhjXWdV9bBwgrAyqAEQHaHa?w=195&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Multivitamine"
    },
    {
        nom: "Muscletech Platinum Multivitamin (90 Tabs)",
        prix: "4 800 DA",
        image: "https://th.bing.com/th/id/OIP.bR0bIcdj565tDNgvw2aAMAHaHa?w=204&h=204&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        categorie: "Multivitamine"
    }
];

function afficherProduits(liste) {
    const zone = document.getElementById('products-display');

    if (liste.length === 0) {
        zone.innerHTML = "<p style='color:#aaa;'>Aucun produit trouvé.</p>";
        return;
    }

    let html = '<div class="products-grid">';
    liste.forEach(function(produit) {
        html += `
            <div class="product-card">
                <img src="${produit.image}" alt="${produit.nom}" onerror="this.src='https://via.placeholder.com/180x180?text=Image'">
                <h4>${produit.nom}</h4>
                <p class="price">${produit.prix}</p>
                <a href="content/achat.html"><button type="button" class="buy-btn">Acheter</button></a>
            </div>
        `;
    });
    html += '</div>';
    zone.innerHTML = html;
}

const liensCategories = document.querySelectorAll('.category-link');

liensCategories.forEach(function(lien) {
    lien.addEventListener('click', function(evenement) {
        evenement.preventDefault();

        liensCategories.forEach(function(l) {
            l.classList.remove('active');
        });
        lien.classList.add('active');

        const categorie = lien.dataset.categorie;

        if (categorie === 'Tous') {
            afficherProduits(produits);
        } else {
            const filtres = produits.filter(function(p) {
                return p.categorie === categorie;
            });
            afficherProduits(filtres);
        }
    });
});