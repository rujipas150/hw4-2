// โหลดสินค้าจาก localStorage
function loadProducts() {
    return JSON.parse(localStorage.getItem("products")) || [];
}

// บันทึกสินค้าลง localStorage
function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
}

// เพิ่มสินค้าใหม่จากฟอร์ม
function addProductFromUI() {
    let name = document.getElementById("productName").value;
    let price = parseFloat(document.getElementById("productPrice").value);
    let inStock = parseInt(document.getElementById("productStock").value);
    let category = document.getElementById("productCategory").value;

    if (!name || isNaN(price) || isNaN(inStock)) {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
    }

    addProduct({ name, price, inStock, category, minStock: 5 });
    alert("เพิ่มสินค้าเรียบร้อย!");
    renderProductTable(); // อัปเดตตารางแสดงสินค้า
}

// เพิ่มสินค้าใหม่
function addProduct(productData) {
    let products = loadProducts();
    products.push({ ...productData, id: Date.now().toString(), totalSales: 0 });
    saveProducts(products);
}

// แสดงรายการสินค้าในตาราง
function renderProductTable() {
    let products = loadProducts();
    let tbody = document.getElementById("productTable").querySelector("tbody");
    tbody.innerHTML = ""; // ล้างข้อมูลเก่า

    products.forEach(product => {
        let row = `<tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.inStock}</td>
            <td>${product.category}</td>
            <td>${product.totalSales}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// เรียก renderProductTable() เมื่อหน้าเว็บโหลด
document.addEventListener("DOMContentLoaded", renderProductTable);
