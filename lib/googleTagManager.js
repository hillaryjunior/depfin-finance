export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export const pageView = (url) => {
  window.dataLayer?.push({
    event: "pageview",
    page: url,
  });
};




// Measure Product Impressions

export const measureImpressions = (products) => {
        window.dataLayer?.push({ ecommerce: null });
        window.dataLayer?.push({
        event: "addImpression",
        ecommerce: {
        currencyCode: "ZAR",
        impressions: [products]
        },
        });
}



//measure product clicks
export const productClick = (size_id,brand,dimension,price_inc, url) => {
  window.dataLayer?.push({ ecommerce: null });
  window.dataLayer?.push({
    event: "productClick",
    ecommerce: {
      click: {
        actionField: { list: "Product details" },
        products: [
          {
           name : product_name,
            id:  size_id,

            brand: brand ? brand : "",

            variant: dimension ? dimension : "",
            price: price_inc ? price_inc : "",
          },
        ],
      },
    },
    eventCallback: function () {
      document.location.href = url;
    },
  });
};



// measure product search
export const productSearch = (searchTerm) => {
  window.dataLayer?.push({ ecommerce: null });
  window.dataLayer?.push({
    event: "search",
    ecommerce: {
      search: {
        actionField: {
          searchTerm: searchTerm,
        },
      },
    },
  });
};


// Measuring Views of Product Details


// Measuring Additions or Removals from a Shopping Cart
export const add_To_Cart = (product) => {
  window.dataLayer?.push({ ecommerce: null });
  window.dataLayer?.push({
    event: "addToCart",
    ecommerce: {
      currencyCode: "ZAR",
      add: {
        products: [
          {
            name: product.name,
            id: product.id,

            brand: product.brand,
            category: "Tyres",
            variant: product.tyreSize,
            price: product.price_inc,
            quantity: product.quantity,
          },
        ],
      },
    },
  });
};

  

// Removing a Product from a Shopping Cart
export const remove_from_cart = (id, name, price, quantity, size,brand) => {
  window.dataLayer?.push({ ecommerce: null });
  window.dataLayer?.push({
    event: "removeFromCart",
    ecommerce: {
      currencyCode: "ZAR",
      add: {
        products: [
          {
            name: name,
            id:id,
            brand: brand ? brand : '',
            category: "Tyre Product",
            variant: size,
            price: price,
            quantity: quantity,
          },
        ],
      },
    },
  });
};

// Measuring a Checkout
export const checkout = (products) => {
  window.dataLayer?.push({ ecommerce: null });
  window.dataLayer?.push({
    event: "checkout",
    ecommerce: {
      currencyCode: "ZAR",
      checkout: {
        actionField: { step: 1 },
        products: products,
      },
    },
    eventCallback: function () {
      document.location.href = "/checkout/checkout";
    },
  });
};
