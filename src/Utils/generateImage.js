//pexels
// use  pexels api key to  generate more random data  if  you wish 
const API_KEY = "";
const products = [];

// Product names and other details (same as before)
const productNames = [
  "Classic White T-Shirt",
  "Slim Fit Jeans",
  "Leather Jacket",
  "Cotton Hoodie",
  "Summer Dress",
  "Denim Jacket",
  "Chinos Pants",
  "V-Neck Sweater",
  "Graphic Tee",
  "Pleated Skirt",
  "Running Shorts",
  "Wool Beanie",
  "Button-Down Shirt",
  "Cargo Pants",
  "Bomber Jacket",
  "Puffer Vest",
  "Polo Shirt",
  "Maxi Dress",
  "Tracksuit",
  "Flannel Shirt",
  "Sweatpants",
  "Cardigan",
  "Swim Trunks",
  "Baseball Cap",
  "Raincoat",
  "Turtleneck Sweater",
  "Skater Skirt",
  "Ankle Boots",
  "Pajama Set",
  "Blazer",
  "Tennis Skirt",
  "Crop Top",
  "Overalls",
  "Trench Coat",
  "Flip Flops",
  "Joggers",
  "Tank Top",
  "Long Sleeve Shirt",
  "Board Shorts",
  "Sun Hat",
  "Thermal Underwear",
  "High-Waisted Shorts",
  "Peacoat",
  "Denim Overalls",
  "Fleece Pullover",
  "Sweater Dress",
  "Leggings",
  "Henley Shirt",
  "Espadrilles",
  "Puffer Jacket",
  "Athletic Socks",
  "Biker Jacket",
  "Sweater Vest",
  "Graphic Hoodie",
  "Fleece Jacket",
  "Button-Up Blouse",
  "Corduroy Pants",
  "Chambray Shirt",
  "Linen Shorts",
  "Denim Skirt",
  "Slip Dress",
  "Crewneck Sweatshirt",
  "Cargo Shorts",
  "Base Layer",
  "Track Jacket",
  "Wrap Dress",
  "Wide-Leg Pants",
  "Leather Boots",
  "Shearling Coat",
  "Tube Top",
  "Pinafore Dress",
  "Bikini Set",
  "Ruffle Blouse",
  "Linen Pants",
  "Playsuit",
  "Shirtdress",
  "Strapless Dress",
  "Anorak",
  "Tennis Dress",
  "Sherpa Jacket",
  "Tapered Pants",
  "Button-Front Skirt",
  "Boiler Suit",
  "Boat Shoes",
  "Zip-Up Hoodie",
  "Lace Top",
  "Distressed Jeans",
  "Trucker Jacket",
  "Boyfriend T-Shirt",
  "Duffle Coat",
  "Lounge Shorts",
  "Strappy Sandals",
  "Ski Jacket",
  "Beanie Hat",
  "Yoga Pants",
  // (continue with 100 unique product names)
];

for (let i = 0; i < 100; i++) {
  const random = Math.random();
  products.push({
    id: i + 13,
    name: productNames[i % productNames.length],
    price: (Math.random() * (100 - 10) + 10).toFixed(2), // Random price between $10 and $100
    status: i % 5 === 0 ? "Out of Stock" : "In Stock", // Randomly assign "Out of Stock" to some products
    image: "", // Image will be filled in later
    gender: random > 0.2 ? "Men" : 0.5 ? "Women" : "Kid", // Randomly assign gender
  });
}

// Function to fetch images from Pexels API
async function fetchImagesFromPexels(products) {
  for (let product of products) {
    const query = encodeURIComponent(product.name);
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: API_KEY,
        },
      });

      const data = await response.json();

      // If the image exists, set the product image to the first result
      if (data.photos && data.photos.length > 0) {
        product.image = data.photos[0].src.medium;
      } else {
        product.image = "https://example.com/default-image.jpg"; // Fallback image if no result found
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      product.image = "https://example.com/default-image.jpg"; // Fallback image in case of an error
    }
  }

  return products;
}

// Fetch the images and construct the final product array
fetchImagesFromPexels(products).then((finalProducts) => {
  console.log(finalProducts);
  // Here, finalProducts is the array with all product details and images
});
