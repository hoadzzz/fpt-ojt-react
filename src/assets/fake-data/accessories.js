const product_13_image_01 = require('../images/products/product-13 (1).jpg').default
const product_13_image_02 = require('../images/products/product-13 (2).jpg').default

const product_14_image_01 = require('../images/products/product-14 (1).jpg').default
const product_14_image_02 = require('../images/products/product-14 (2).jpg').default

const product_15_image_01 = require('../images/products/product-15 (1).jpg').default
const product_15_image_02 = require('../images/products/product-15 (2).jpg').default

const product_16_image_01 = require('../images/products/product-16 (1).jpg').default
const product_16_image_02 = require('../images/products/product-16 (2).jpg').default

const accessories = [
    {
        title: "Giày Cao Gót Dây Mảnh 7cm",
        price: '499000',
        image01: product_13_image_01,
        image02: product_13_image_02,
        categorySlug: "giay-cao-got",
        colors: ["white", "cream"],
        slug: "giay-cao-got-day-manh",
        size: ["35", "36", "37", "38", "39"],
        description: "Giày nữ YODY trong bộ sưu tập thời trang 2022 gồm giày cao gót, sandal, dép cao gót với chất liệu da nhân tạo PU cao cấp, mềm mại cho nàng thêm phần tự tin."
    },
    {
        title: "Giày Cao Gót Đính Nơ 7cm",
        price: '499000',
        image01: product_14_image_01,
        image02: product_14_image_02,
        categorySlug: "giay-cao-got",
        colors: ["white", "cream"],
        slug: "giay-cao-got-dinh-no",
        size: ["35", "36", "37", "38", "39"],
        description: "Giày cao gót nữ chất liệu da PU cao cấp Gót cao 7cm giúp nàng tự tin hack dáng Đế trong êm chân, gia công tỉ mỉ, bền, đẹp Da PU thân thiện với môi trường, độ dai và chắc tương tự như da thật. Thiết kế nhọn sang trọng, thanh lịch Hoa tiết đính nơ nữ tính phù hợp diện cùng váy đầm, chân váy, phối đồ công sở… YODY - Look good. Feel good."
    },
    {
        title: "Giày Sandal Nữ Quai Chéo",
        price: '489000',
        image01: product_15_image_01,
        image02: product_15_image_02,
        categorySlug: "giay-scandal",
        colors: ["white", "cream"],
        slug: "giay-scandal-quai-cheo",
        size: ["35", "36", "37", "38", "39"],
        description: "Sandal nữ làm từ chất liệu da PU cao cấp Đế trong êm chân, chất liệu bền - đẹp - giá tốt Da PU thân thiện với môi trường, độ dai và chắc tương tự như da thật Thiết kế mũi vuông trẻ trung, hiện đại Kiểu dáng sandal với quai mảnh vừa thoáng chân vừa thanh lịch YODY - Look good. Feel good."
    },
    {
        title: "Hộp 5 Đôi Tất Nữ Cổ Trung",
        price: '189000',
        image01: product_16_image_01,
        image02: product_16_image_02,
        categorySlug: "tat-nu",
        colors: ["Nhiều màu"],
        slug: "tat-nu",
        size: ["35", "36", "37", "38", "39"],
        description: "Số lượng: 5 đôi tất/ hộp Chất liệu: cotton chải kỹ Vải mềm mại, thấm hút tốt và khử mùi hiệu quả An toàn cho da của bạn, thân thiện với môi trường Tất cổ trung ôm chân vừa vặn Thiết kế phối màu và gót chân hài hòa, basic dễ lên đồ YODY - Look good. Feel good."
    },
]

const getAllAccessories = () => accessories

const getAccessories = (count) => {
    const max = accessories.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return accessories.slice(start, start + count)
}

const accessoriesData = {
    getAllAccessories,
    getAccessories,
}

export default accessoriesData