// โหลดสินค้าจาก localStorage
function loadProducts() {
    return JSON.parse(localStorage.getItem("products")) || [];
}

// บันทึกสินค้าลง localStorage
function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
}

// เพิ่มสินค้าใหม่
function addProduct(productData) {
    let products = loadProducts();
    products.push({ ...productData, id: Date.now().toString(), totalSales: 0 });
    saveProducts(products);
}

// อัปเดตสต็อกสินค้า
function updateStock(productId, quantity) {
    let products = loadProducts();
    let product = products.find((p) => p.id === productId);
    if (product) {
        product.inStock += quantity;
        saveProducts(products);
    }
}

// บันทึกการขาย
function recordSale(productId, quantity) {
    let products = loadProducts();
    let product = products.find((p) => p.id === productId);
    if (product && product.inStock >= quantity) {
        product.inStock -= quantity;
        product.totalSales += quantity;
        saveProducts(products);
        return true;
    }
    return false;
}

// ตรวจสอบสินค้าที่ใกล้หมด
function checkLowStock(threshold = 5) {
    return loadProducts().filter((p) => p.inStock < threshold);
}

// รายงานสินค้าขายดี
function generateSalesReport() {
    return loadProducts().sort((a, b) => b.totalSales - a.totalSales);
}
