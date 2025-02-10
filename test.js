function testAddProduct() {
    addProduct({ name: "Keyboard", price: 1500, inStock: 10, category: "accessories", minStock: 5 });
    alert("เพิ่มสินค้าเรียบร้อย!");
}

function testUpdateStock() {
    let products = loadProducts();
    if (products.length > 0) {
        updateStock(products[0].id, 5);
        alert("อัปเดตสต็อกสำเร็จ!");
    } else {
        alert("ยังไม่มีสินค้า!");
    }
}

function testRecordSale() {
    let products = loadProducts();
    if (products.length > 0) {
        let success = recordSale(products[0].id, 3);
        alert(success ? "บันทึกการขายเรียบร้อย!" : "สินค้าไม่พอขาย!");
    } else {
        alert("ยังไม่มีสินค้า!");
    }
}

function testCheckLowStock() {
    let lowStockItems = checkLowStock();
    console.log("สินค้าที่ใกล้หมด:", lowStockItems);
    alert(lowStockItems.length > 0 ? JSON.stringify(lowStockItems) : "ไม่มีสินค้าที่ใกล้หมด");
}

function testGenerateSalesReport() {
    let report = generateSalesReport();
    console.log("สินค้าขายดี:", report);
    alert("ดูรายงานสินค้าขายดีใน Console");
}
